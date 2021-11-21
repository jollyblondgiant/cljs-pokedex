(ns cljs-pokedex.events
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
   [re-frame.core :as re-frame :refer [dispatch]]
   [cljs-pokedex.db :as db]
   [cljs-http.client :as http]
   [cljs.core.async :refer [<!]]
   [clojure.string :refer [lower-case]]
   ))

(re-frame/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))

(def region-map
  {:kanto '(1 152)
   :johto '(152 252)
   :hoenn '(252 387)
   :sinnoh '(387 494)
   :unova '(494 650)
   :kalos '(650 722)
   :alola '(722 810)
   :galar '(810 899)
   :all '(1 899)})

(re-frame/reg-event-db
 ::new-pokemon
 (fn [db [_ region]]
   (go (let [num (->> db :regions
                      (reduce #(let [[start stop] (region-map %2)]
                                 (into %1 (range start stop)))
                              '()) rand-nth)
             response
             (<! (http/get
                  (str "https://pokeapi.co/api/v2/pokemon/" num)
                  {:with-credentials? false
                   :headers {"Content-Type" "application/json"}}))]
         (dispatch [::new-pokemon-resp response])))
   (-> db
       (assoc :sprite :pending))))

(re-frame/reg-event-db
 ::new-pokemon-resp
 (fn [db [_ {{{sprite :front_default} :sprites
              num :id
              name :name :as pokemon} :body}]]
   (-> db
       (assoc
        :pokemon {:sprite sprite :name name :num num}
        :sprite sprite
        :guess :pending))))

(re-frame/reg-event-db
 ::input-guess
 (fn [db [_ input]]
   (js/console.log "updating guess " input)
   (assoc db :guess-input input)))

(re-frame/reg-event-db
 ::guess-pokemon
 (fn [db _]
   (let [guess (:guess-input db)]
     (if (= (lower-case guess) (-> db :pokemon :name))
       (assoc db :guess true
              :caught (conj (:caught db) (:pokemon db)))
       (assoc db :guess false :strikes (-> db :strikes dec))))))

(re-frame/reg-event-db
 ::input-login
 (fn [db [_ input]]
   (assoc db :login input)))

(re-frame/reg-event-db
 ::login-trainer
 (fn [db _]
   (-> db
       (assoc :trainer (:login db))
       (dissoc :login))))

(re-frame/reg-event-db
 ::add-region
 (fn [db [_ region]]
   (js/console.log "adding region... " region)
   (js/console.log "to regions..." (:regions db))
   (assoc db :regions (conj (:regions db) region))))

(re-frame/reg-event-db
 ::remove-region
 (fn [db [_ region]]
   (->> db
        :regions
        (filter #(not= % region))
        set (assoc db :regions))
   ))
