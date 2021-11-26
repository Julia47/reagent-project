(ns test.db
  (:require
   [datascript.core :as d]))


;;;;;;;;;;
;;; DB ;;;
;;;;;;;;;;
(def schema
  "Description:
    create schema (datoms) for db,
    schema describes the set of attributes"
  {:transaction/date                    {}
   :transaction/tag                     {:db/valueType   :db.type/ref
                                         :db/isComponent true
                                         :db/cardinality :db.cardinality/one}
   :transaction/money-source            {:db/valueType   :db.type/ref
                                         :db/isComponent true
                                         :db/cardinality :db.cardinality/one}
   :transaction/money                   {}
   :transaction/flow                    {:db/doc "boolean, if income - true, expence -false"}
   :money-source/name                   {}
   :money-source/type                   {}
   :money-source/balance                {}
   :money-source/account-number         {}
   :tag/income-tag                      {}
   :tag/expence-tag                     {}})

(def db (d/create-conn schema))

;;;;;;;;;;;;;;
;;; INSERT ;;;
;;;;;;;;;;;;;;
(defn db-datoms [data]
  (d/transact! db data))

(defn add-transaction [data]
  (db-datoms [(merge data {:db/id -1})
              (merge (update (into {} (d/entity @db (:transaction/money-source data)))
                            :money-source/balance
                            #(if (:transaction/flow data)
                               (+ % (:transaction/money data))
                               (- % (:transaction/money data))))
                     {:db/id (:transaction/money-source data)})]))

(defn fish-map[id]
  (let [rand-nums    #(rand-nth (range % %2))
        money-source (rand-nums 18 22)
        income-tag   (rand-nums 1 5) 
        expence-tag  (rand-nums 5 18)
        money        (int (rand 1000))
        year         (rand-nums 2020 2021)
        month        (rand-nums 0 12)
        day          (rand-nums 0 28)
        flow         (rand-nth [true false])
        tag          (if flow income-tag expence-tag)
        date         (fn [year month day] (str year "-" (if (< month 10) "0" "") month
                                               "-"  (if (< day 10) "0" "") day))
        date         (date year month day)]
    {:db/id                      id
     :transaction/date           date
     :transaction/money-source   money-source
     :transaction/tag            tag
     :transaction/money          money
     :transaction/flow           flow}))

(defn fish-data [ammount]
  (vec (map (fn [i] (fish-map i)) (range 22 (+ 22 ammount)))))

(db-datoms (into 
            [{:db/id           -1
              :tag/income-tag "deposits"}
             {:db/id           -2
              :tag/income-tag "salary"}
             {:db/id           -3
              :tag/income-tag "savings"}
             {:db/id           -4
              :tag/income-tag "other"}
             {:db/id           -5
              :tag/expence-tag "clothes"}
             {:db/id           -6
              :tag/expence-tag "gifts"}
             {:db/id           -7
              :tag/expence-tag "health"}
             {:db/id           -8
              :tag/expence-tag "food"}
             {:db/id           -9
              :tag/expence-tag "transport"}
             {:db/id           -10
              :tag/expence-tag "sport"}
             {:db/id           -11
              :tag/expence-tag "travel"}
             {:db/id           -12
              :tag/expence-tag "entertainment"}
             {:db/id           -13
              :tag/expence-tag "house"}
             {:db/id           -14
              :tag/expence-tag "pets"}
             {:db/id           -15
              :tag/expence-tag "family"}
             {:db/id           -16
              :tag/expence-tag "car"}
             {:db/id           -17
              :tag/expence-tag "other"}
             {:db/id                       -18
              :money-source/name           "cash"
              :money-source/type           ""
              :money-source/balance        350
              :money-source/account-number ""}
             {:db/id                       -19
              :money-source/name           "privat"
              :money-source/type           "visa"
              :money-source/balance        1000
              :money-source/account-number "5123456787658888"}
             {:db/id                       -20
              :money-source/name           "card"
              :money-source/type           "visa"
              :money-source/balance        12300
              :money-source/account-number "3344555555556666"}
             {:db/id                       -21
              :money-source/name           "monobank"
              :money-source/type           "mastercard"
              :money-source/balance        1435
              :money-source/account-number "4132444433334747"}]
            (fish-data 30)))


;;;;;;;;;;;;;;
;;; SELECT ;;;
;;;;;;;;;;;;;;
(defn get-column [column]
  (apply concat (d/q '[:find ?value :in $ ?column
                       :where [_ ?column ?value]] @db column)))

(defn get-columns [column]
  (d/pull-many @db '[*] (vec (apply concat (d/q '[:find ?p 
                                                  :in $ ?column
                                                  :where
                                                  [?p ?column]] @db column)))))

(defn get-income-tags []
  (get-column :tag/income-tag))

(defn get-expence-tags []
  (get-column :tag/expence-tag))

(defn get-id-tag [tag flow]
  (d/q '[:find ?p .
         :in $ ?tag ?k
         :where
         [?p ?k ?tag]] @db tag
       (if flow :tag/income-tag :tag/expence-tag)))

(defn get-money-sources []
  (get-columns :money-source/name))

(defn get-transactions []
  (reverse (sort-by :db/id (get-columns :transaction/money))))

(defn get-balance []
  (reduce (fn [acc m]
            (+ acc (:money-source/balance m))) 0 (get-money-sources)))

(defn get-all-flow []
  (reduce (fn [acc m]
            (update (if (:transaction/flow m)
                      (update acc :income #(+ % (:transaction/money m)))
                      (update acc :expence #(+ % (:transaction/money m))))
                    :flow #(+ % (:transaction/money m))))
          {:flow 0 :expence 0 :income 0} (get-transactions)))

(defn get-data-chart []
  (let [str-to-date  (fn [str-data]
                       (let [[year month day]
                             (mapv (fn [s] (clojure.edn/read-string (if (= (first s) "0") (subs s 1) s)))
                                   (clojure.string/split str-data #"\-"))]
                         (.UTC js/Date year month day)))]
    (reduce (fn [acc [m v]] (let [flow (:transaction/flow (first v))]
                              (conj acc {:name (if flow (:tag/income-tag m) (:tag/expence-tag m)) 
                                         :color (if flow  "rgb(9, 180, 165, .5)" "rgb(255, 160, 122, .7)";; "rgb(51, 177, 128, .7)" "rgb(255, 71, 71, .7)"
                                                    )
                                         :data (vec (map (fn [t] [(str-to-date (:transaction/date t))
                                                                  (:transaction/money t)]) v))}))) []
            (group-by :transaction/tag (get-transactions)))))


;;;;;;;;;;;;;;
;;; DELETE ;;;
;;;;;;;;;;;;;;
(defn delete-datom [id]
  (add-transaction [:db.fn/retractEntity id]))

(comment (d/datoms @db :eavt)
         (d/datoms @db :avet))
