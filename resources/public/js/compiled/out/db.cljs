(ns db
  (:require
   [datascript.core :as d]
   ))


;; tags (selectbox) [health, job]

;;add transaction {}

(def schema
  "Description
    create schema (datoms) for db,
    schema describes the set of attributes"
  {;;:transaction/id                      {:db.unique :db.unique/identity}
   :transaction/date                    {:db/doc  "date"}
   :transaction/tag                     {:db/valueType   :db.type/ref
                                         :db/isComponent true
                                         :db/cardinality :db.cardinality/one}
   :transaction/money-source            {:db/valueType   :db.type/ref
                                         :db/isComponent true
                                         :db/cardinality :db.cardinality/one}
   :transaction/money                   {}
   :transaction/flow                    {}
   :money-source/name                   {}
   :money-source/description            {}
   :money-source/account-number         {}
   :tag/income-tag                      {}
   :tag/expence-tag                     {}})

(def db (d/create-conn schema))

;;;;;;;;;;;;;
;;; INPUT ;;;
;;;;;;;;;;;;;
(defn db-datoms [data]
  (def db (d/create-conn schema))
  (d/transact! db data))

(db-datoms [{:db/id           -1
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
             :money-source/description    ""
             :money-source/account-number ""}
            {:db/id                      -19               
             :transaction/date           "11"
             :transaction/money-source   -18
             :transaction/tag            -3
             :transaction/money          1000
             :transaction/flow           true}
            {:db/id                      -20               
             :transaction/date           "03"
             :transaction/money-source   -18
             :transaction/tag            -7
             :transaction/money          3000
             :transaction/flow           false}
            {:db/id                      -21              
             :transaction/date           "00000000"
             :transaction/money-source   -18
             :transaction/tag            -2
             :transaction/money          400
             :transaction/flow           false}])

(defn add-income [data]
  (db-datoms (merge data {:db/id            -1
                          :transaction/flow true})))

(defn add-expence [data]
  (db-datoms (merge data {:db/id            -1
                          :transaction/flow false})))


;;;;;;;;;;;;;;
;;; SELECT ;;;
;;;;;;;;;;;;;;
(defn get-column [column]
    (d/q '[:find ?value :in $ ?column
           :where [_ ?column ?value]] @db column))

(d/q '[:find (pull ?transaction [:transaction/name]) :in $ :where
       [?transaction :transaction/name]] @db)

(d/q '[:find ?e 
       :where [?e :transaction/id]]
     @db)

(defn get-income-tags []
  (get-column :tag/income-tag))

(defn get-expense-tags []
  (get-column :tag/expence-tag))

(defn get-money-source []
  (get-column :money-source))

;; (get-money-source)

(defn get-transactions []
  (d/pull-many @db '[*] (vec (apply concat (d/q '[:find ?p 
                                                  :in $ 
                                                  :where
                                                  [?p :transaction/name]] @db)))))

;; (d/q '[:find ?p 
;;        :in $ 
;;        :where
;;        [?p :transaction/name]] @db)
;; =>

(get-expense-tags)
(get-transactions)
;;  (d/touch (d/entity db 1))

;;; DELETE
;;;(d/transact! conn [[:db.fn/retractEntity 46]])
;;this will rof datoms  that use :movie/actors
;; (->> (d/datoms @db :avet :transaction/name)
;;  (map identity))

(d/datoms @db :eavt)

(d/datoms @db :avet)
