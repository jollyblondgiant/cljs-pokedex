(ns cljs-pokedex.views
  (:require
   [re-frame.core :as re-frame :refer [subscribe dispatch]]
   [cljs-pokedex.subs :as subs]
   [cognitect.transit :as t]
   [cljs-pokedex.events :as events]
   ))


(defn sprite-panel [sprite]
  [:img#pokemon-sprite
   {:src @sprite}])

(defn nav-ball [props]
  [:button.btn.nav-ball
   {:on-click (case (:action props)
                :new-pokemon
                #(dispatch [::events/new-pokemon "any"])
                #(js/console.log (:text props)))
    :style {:border-radius "50%"}}
   [:img.poke-ball {:style {:border-radius "50%"
                            :width "50%"}
                    :src "img/pokeball.png"}]
   [:p.navball-text(:text props)]
   ])

(defn main-panel []
  (let [name (re-frame/subscribe [::subs/name])
        sprite (subscribe [::subs/sprite])]
    [:div.col-md3.col-md-offset-2
     (when @sprite
       [sprite-panel sprite])
     [:div#navball-row
      [nav-ball {:text "New PokeMon"
                 :action :new-pokemon}]
      [nav-ball {:text "Catch PokeMon"}]]
     ]))
