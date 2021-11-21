(ns cljs-pokedex.events
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
   [re-frame.core :as re-frame :refer [dispatch]]
   [cljs-pokedex.db :as db]
   [cljs-http.client :as http]
   [clojure.string :refer [lower-case]]
   ))

(re-frame/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))

(re-frame/reg-event-db
 ::new-pokemon
 (fn [db [_ region]]
   (go (let [num (case region
                   "johto" (+ 151 (rand-int 251))
                   "kanto" (+ 1 (rand-int 151))
                   (+ 1 (rand-int 897)))
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
   (assoc db :guess-input input)))

(re-frame/reg-event-db
 ::guess-pokemon
 (fn [db [_ guess]]
   (if (= (lower-case guess) (-> db :pokemon :name))
     (assoc db :guess true
            :caught (conj (:caught db) (:pokemon db)))
     (assoc db :guess false :strikes (-> db :strikes dec)))))
