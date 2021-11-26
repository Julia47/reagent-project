(ns ^:figwheel-always test.core
  (:require
    [reagent.dom  :as rd]
    [reagent.core :as r]
    [reagent-mui.icons.label :refer [label]]
    [test.db :as db]))


;;;;;;;;;;;;
;;; DATE ;;;
;;;;;;;;;;;;
(defn- current-date-string [d]
  (let [pad-zero  #(.padStart (.toString %) 2 "0")
        y         (.getFullYear d)
        m         (-> (.getMonth d) inc pad-zero)
        d         (pad-zero (.getDate d))]
    (str y "-" m "-" d)))


;;;;;;;;;;;;;;
;;; CONFIG ;;;
;;;;;;;;;;;;;;
(defn get-chart-config []
  {:chart {:type "scatter"
           :zoomType "xy"
           :backgroundColor  "rgb(255,255,255,.4)" }
   :title {:text "The structure of income and expence for all period"}
   :xAxis {:title {:enabled true
                   :text "Date"}
           :type "datetime"
           :startOnTick true
           :endOnTick true
           :showLastLabel true
           :labels {:formatter #(js/Highcharts.dateFormat "%e %b %Y" (.-value %))}} 
   :yAxis {:title {:text "Money(UAH)"}}
   :legend {:layout "vertical"
            :align "left"
            :verticalAlign "top"
            :x 100
            :y 70
            :floating true
            :borderWidth 1}
   :credits {:enabled false}
   :plotOptions {:scatter
                 {:marker
                  {:radius 5
                   :states
                   {:hover
                    {:enabled true
                     :lineColor "rgb(100,100,100)"}}}
                  :states {:hover
                           {:marker
                            {:enabled false}}}
                  :tooltip {:headerFormat "<b>{series.name}</b><br>"
                            :pointFormat "{point.y} UAH"}}}
   :series (db/get-data-chart)})


;;;;;;;;;;;;;
;;; STATE ;;;
;;;;;;;;;;;;;
(def initial-state {:switch 0
                    :errors {:source-error ""
                             :money-error  ""}
                    :db     {:money-sources    (db/get-money-sources)
                             :expence-tags     (db/get-expence-tags)
                             :income-tags      (db/get-income-tags)
                             :transactions     (db/get-transactions)
                             :balance          (db/get-balance)
                             :all-flow         (db/get-all-flow)
                             :new-money-source {:money-source/account-number ""
                                                :money-source/name           ""
                                                :money-source/type           ""
                                                :money-source/balance        0}
                             ;; default values for new transaction                           
                             :new-transaction  {:transaction/flow          true
                                                :transaction/money         0
                                                :transaction/tag           4
                                                :transaction/date          (current-date-string (js/Date.))
                                                :transaction/money-source  18}}
                    :chart-config (get-chart-config)})


(defonce !state     (r/atom initial-state))
(def switcher       (r/cursor !state[:switch]))
(def source-error   (r/cursor !state[:errors :source-error]))
(def money-error    (r/cursor !state[:errors :money-error]))
(def balance        (r/cursor !state[:db :balance]))
(def all-flow       (r/cursor !state[:db :all-flow]))
(def expence-tags   (r/cursor !state[:db :expence-tags]))
(def income-tags    (r/cursor !state[:db :income-tags]))
(def money-source   (r/cursor !state[:db :new-transaction :transaction/money-source]))
(def flow           (r/cursor !state[:db :new-transaction :transaction/flow]))
(def money          (r/cursor !state[:db :new-transaction :transaction/money]))
(def tag            (r/cursor !state[:db :new-transaction :transaction/tag]))
(def date           (r/cursor !state[:db :new-transaction :transaction/date]))
(def account-number (r/cursor !state[:db :new-money-source :money-source/account-number]))
(def sname          (r/cursor !state[:db :new-money-source :money-source/name]))
(def stype          (r/cursor !state[:db :new-money-source :money-source/type]))
(def source-balance (r/cursor !state[:db :new-money-source :money-source/balance]))
(def transactions   (r/cursor !state[:db :transactions]))
(def money-sources  (r/cursor !state[:db :money-sources]))
(def chart-config   (r/cursor !state[:chart-config]))


;; ACTIONS
(defmulti Action (fn [_ action] (:type action)))

(defmethod Action :active-source [state {:keys [item]}]
  (assoc-in state [:db :new-transaction :transaction/money-source] item))

(defmethod Action :delete-source [state _]
  (db/delete-datom @money-source)
  (-> state
      (assoc-in [:db :balance] (db/get-balance))
      (assoc-in [:db :money-sources] (db/get-money-sources))))

(defmethod Action :source-name [state {:keys [value]}]
  (assoc-in state [:db :new-money-source :money-source/name] value))

(defmethod Action :source-balance [state {:keys [value]}]
  (assoc-in state [:db :new-money-source :money-source/balance]
            (if (or (not (nil? (re-find #"[A-Z, a-z]+" value)))
                    (empty? value)) 0 value)))

(defmethod Action :account-number [state {:keys [value]}]
  (assoc-in state [:db :new-money-source :money-source/account-number]
            (if (empty? value) "" (clojure.string/replace (str value) #" " ""))))

(defmethod Action :source-type [state {:keys [value]}]
  (assoc-in state [:db :new-money-source :money-source/type] value))

(defmethod Action :add-source-to-db [state _]
  (let [validate-fn (fn [data] 
                      (if (let [number @account-number
                                dg-number (count (re-find #"\d+"  number))
                                ch-number  (count (re-find #"[A-Z, a-z]+" number))]
                            (and (= ch-number 0)
                                 (or (= dg-number 16)
                                     (= dg-number 0))))
                        (do (db/add-transaction (:new-money-source (:db data)))
                            (-> data
                                (assoc-in [:db :money-sources] (db/get-money-sources))
                                (assoc-in [:errors :source-error] "")))
                        (assoc-in data [:errors :source-error] "Error! Invalid account number")))]
    (if (empty? @sname)
      (assoc-in state [:errors :source-error] "Invalid!! Empty name") 
      (-> state
          (assoc-in [:errors :source-error] "")
          validate-fn))))

(defmethod Action :toggle [state _]
  (update-in state [:db :new-transaction :transaction/flow] not))

(defmethod Action :new-date [state {:keys [value]}]
  (assoc-in state [:db :new-transaction :transaction/date] value))

(defmethod Action :new-tag [state {:keys [value]}]
  (assoc-in state [:db :new-transaction :transaction/tag]
            (db/get-id-tag value @flow)))

(defmethod Action :money [state {:keys [value]}]
  (assoc-in state [:db :new-transaction :transaction/money]
            (if (int? value) value 0)))

(defmethod Action :balance [state _]
  (assoc-in state [:db :balance] (db/get-balance)))

(defmethod Action :all-flow [state _]
  (assoc-in state [:db :all-flow] (db/get-all-flow)))

(defmethod Action :add-transaction [state _]
  (if (= @money 0)
    (assoc-in state [:errors :money-error] "Enter money for transaction")
    (do (db/add-transaction (:new-transaction (:db state)))
        (-> state
            (assoc-in [:errors :money-error] "")
            (assoc-in [:db :transactions] (db/get-transactions))
            (assoc-in [:db :balance] (db/get-balance))
            (assoc-in [:db :money-sources] (db/get-money-sources))
            (assoc-in [:db :all-flow] (db/get-all-flow))
            (assoc    :chart-config (get-chart-config))))))

(defn dispatch! [action]
  (swap! !state #(Action % action))
  (println (:chart-config @!state)))


;;;;;;;;;;;;;;;;;;;;;;;
;;;HELPER FUNCTIONS ;;;
;;;;;;;;;;;;;;;;;;;;;;;
(defn transform-account-number [value]
  (let [sub-str (->> value
                     (partition-all 4)
                     (map (partial apply str)))]
    (if (empty? value) ""
        (str (first sub-str) " **** **** " (last sub-str)))))

(defn calculate-flow-expence [flow]
  (int (* (/ (:expence flow) (:flow flow)) 100)))


;;;;;;;;;;;;;;;;
;;;COMPONENTS;;;
;;;;;;;;;;;;;;;;
(defn div-source [item on-click-fn]
  (let [bsource (= @money-source (:db/id item))]
    [:div.source
     {:style    {:color  "#4b5a6b"               
                 :background-color (if bsource "rgb(85,98,112, 0.5)" "rgb(133,147,152, 0.3)")}
      :on-click #(dispatch! {:type :active-source :item (:db/id item)})}
     [:label  {:style {:margin "1% 3% 0% 0%" :float "right" :font-weight "bold" :cursor "pointer"
                       :visibility (if bsource "visible" "hidden")}
               :on-click #(dispatch! {:type :delete-source})} "x"]
     [:p (:money-source/name item)]
     [:p (transform-account-number (:money-source/account-number item))]
     [:p {:style {:text-align "left"}}
      [:span {:style {:color "rgb(0, 0, 0, 0.9)"}} (str (:money-source/balance item) " UAH")]
      [:span {:style {:float "right" }} (:money-source/type item)]]]))

(defn add-source []
  [:div.source
   {:style {:cursor "default"}}
   [:input.add-source {:type "text"
                       :placeholder "Enter name"
                       :on-change #(dispatch! {:type :source-name :value (-> % .-target .-value)})}]
   [:input.add-source {:type "text"
                       :placeholder "Enter balance"
                       :on-change #(dispatch! {:type :source-balance :value (-> % .-target .-value)})}]
   [:input.add-source {:type "text"
                       :placeholder "Enter account number"
                       :on-change #(dispatch! {:type :account-number :value (-> % .-target .-value)})}]
   [:input.add-source {:type "text"
                       :placeholder "Enter type"
                       :on-change #(dispatch! {:type :source-type :value (-> % .-target .-value)})}]
   [:input.add-btn    {:type "button"
                       :value "Add"
                       :on-click  #(dispatch! {:type :add-source-to-db})}]])

(defn money-source-form []
  [:div
   [:div [:p.header "Choose money source:"]]
   [:div.source-set
    (for [item @money-sources]
      ^{:key item} [div-source item])
    [add-source]]
   [:div.source-set [:p.error @source-error]]
   [:div [:p.header "Ener other fields for adding transaction:"]]])

(defn flow-component []
  [:input.input-form {:style {:background-color (if @flow "rgb(74, 180, 165, 0.7)" "rgb(255, 160, 122, 0.7)")}
                      :type "button" :value (if @flow "Income" "Expence")
                      :on-click #(dispatch! {:type :toggle})}])

(defn select-tag [tags]
  [:select.input-form {:on-change #(dispatch! {:type :new-tag :value  (-> % .-target .-value)})}
   [:option.option-icon {:value 1
                         :hidden true
                         :icon (r/as-element [label])} "Add tag"]
   (for [tag tags]
     ^{:key tag} [:option {:value tag} tag])])

(defn input-date []
  [:input.input-form {:type "date"
                      :value @date
                      :on-change #(dispatch! {:type :new-date :value  (-> % .-target .-value)})}])

(defn input-form []
  [:div.button-set
   [flow-component]
   [:input.input-form {:type "text"
                       :placeholder "Enter money"
                       :on-change #(dispatch! {:type :money :value (-> % .-target .-value js/parseInt)})}]
   [select-tag (if @flow @income-tags @expence-tags)]
   [input-date]
   [:input.input-form {:type     "button"
                       :value    "Save"
                       :on-click #(dispatch! {:type :add-transaction})}]])

(defn prepare-source-items [items]
  (map (fn [item]
         [:div.list-item
          [:p.source-name        (:money-source/name item)]
          [:p.source-description (:money-source/description item)]
          [:p.account-number     (:money-source/account-number item)]]) items))

(defn table-header []
  [:tr.tr-header
   [:td "flow"]
   [:td "money-source"]
   [:td "money"]
   [:td "tag"]
   [:td "date"]])

(defn table-child [item]
  (let [flow (:transaction/flow item)
        tag  (:transaction/tag item)]
    [:tr.tr-child {:style {:background (if flow "rgb(159, 226, 191, 0.4)" "rgb(255, 160, 122, 0.3)")}}
     [:td (if flow "Income" "Expence")]
     [:td (:money-source/name (:transaction/money-source item))]
     [:td (:transaction/money item)]
     [:td (if flow
            (:tag/income-tag tag)
            (:tag/expence-tag tag))]
     [:td (:transaction/date item)]]))

(defn table-transactions [] 
  [:table.table-trn
   [:thead [table-header]]
   [:tbody
    (for [item  @transactions]
      ^{:key (:db/id item)}[table-child item])]])

(defn balance-form []
  [:div {:style {:margin-top "1%" :margin-bottom "0%"}}
   [:div.source-set [:p.error @money-error]]
   [:p.header {:style {:text-align "left"}}
    [:span {:style {}}  "All transactions:"]
    [:span {:style {:float "right" }} (str "Balance:" @balance " UAH")]]])

;;;;;;;;;;;;;;
;;; CHARTS ;;;
;;;;;;;;;;;;;;
(defn gauge-chart []
  (let [part (calculate-flow-expence @all-flow)]
    [:div {:style {:margin "1% 0% 5% 27%"}}
     [:div.container
      [:div.gauge-a]
      [:div.gauge-b]
      [:div.gauge-c {:style {:background-color
                             (cond (< part 35) "rgb(9, 180, 165, .4)"  
                                   (> part 65) "rgb(255, 71, 71, .7)"
                                   :else   "rgb(255, 160, 122, .7)")                             
                             :transform (str "rotate(" (int (/ (* 180 part) 100)) "deg)")}}]
      [:div.gauge-data [:h1 (str part "%")]]]
     [:h1.header {:style {:margin-top "-7%"
                          :margin-bottom "-4%"
                          :font-weight "500"
                          :margin-left "-11%"}} "The ratio of expenсe to cash flow"]]) )


(defn mount-chart [comp]
  (.chart js/Highcharts (rd/dom-node comp) (clj->js (r/props comp))))

(defn update-chart [comp]
  (mount-chart comp))

(defn chart-inner []
  (r/create-class {:reagent-render (fn [comp] [:div {:style {:width "55%" :margin "0% 0% 2% 3.5%" }}])
                   :component-did-mount mount-chart
                   :component-did-update update-chart}))

(defn chart-outer [config]
  [chart-inner (:chart-config @config)])


(defn components []
  [:div.main
   [gauge-chart]
   [chart-outer !state]
   [money-source-form]
   [input-form]
   [balance-form]
   [table-transactions]])


(rd/render [components]
           (js/document.getElementById "app"))


(defn on-js-reload []
)



