(ns cljs-pokedex.events
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
   [re-frame.core :as re-frame :refer [dispatch]]
   [cljs-pokedex.db :as db]
   [cljs-http.client :as http]
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
         (js/console.log "dispatching response")
         (dispatch [::new-pokemon-resp response])
         ))
   (-> db
       (assoc :sprite :pending))))

(re-frame/reg-event-db
 ::new-pokemon-resp
 (fn [db [_ response]]
   (let [sprite (-> response :body :sprites :front_default)]
     (-> db
         (assoc :sprite sprite)))))
