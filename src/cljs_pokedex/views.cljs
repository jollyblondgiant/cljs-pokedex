(ns cljs-pokedex.views
  (:require
   [re-frame.core :as re-frame :refer [subscribe dispatch]]
   [cljs-pokedex.subs :as subs]
   [cognitect.transit :as t]
   [cljs-pokedex.events :as events]
   ))

(defonce model (atom {:guess-input nil}))

(defn sprite-panel [sprite]
  (let [conf {:src sprite}]
    [:img#pokemon-sprite
     (if @(subscribe [::subs/guessing?])
       (assoc conf :style {:filter "brightness(0)"})
       conf)
     ]))

(defn guess-result []
  (let [pokemon (:name @(subscribe [::subs/pokemon]))
        winner? @(subscribe [::subs/guess-result])
        style {:margin "auto 0" :color :yellow
               :font-size :x-large
               :text-shadow "-2px -2px 0 blue, 2px -2px 0 blue, -2px 2px 0 blue, 2px 2px 0 blue";
               :font-family "Pokemon Solid"}]
    (if winner?
      [:span#guess-win
       {:style style}
       (str "you did it! caught " pokemon "!")]
      [:span#guess-lose
       {:style style}
       (str "The " pokemon " got away!")]))
  )

(defn guess-input []
  [:input
   {:placeholder "Who's that PokeMon?"
    :style {:height :fit-content :margin "auto 0"}
    :type :text
    ;;:default-value @(subscribe [::subs/guess-input])
    :on-change (fn [input]
                 (swap! model #(-> % (assoc :guess-input
                                            (-> input .-target .-value))))
                 ;; #(dispatch [::events/input-guess
                 ;;             (-> input .-target .-value)])
                 )}]
  )

(defn nav-ball [props]
  [:button.btn.nav-ball
   {:on-click (case (:action props)
                :new-pokemon
                #(dispatch [::events/new-pokemon "kanto"])
                :catch-pokemon
                #(dispatch [::events/guess-pokemon (:guess-input @model)])
                #(js/console.log (:text props)))
    :style {:border-radius "50%" :margin-right "-25px"}}
   [:img.poke-ball {:style {:border-radius "50%"
                            :width "50%"}
                    :src "img/pokeball.png"}]
   [:p.navball-text(:text props)]
   ])


(defn main-panel []
  (let [name (re-frame/subscribe [::subs/name])
        pokemon (subscribe [::subs/pokemon])
        guess  @(subscribe [::subs/guess-result])]
    [:div.col-md3.offset-md-1
     (when @pokemon
       [sprite-panel (:sprite @pokemon)])
     [:div#navball-row.row
      (if (keyword? guess)
        [nav-ball {:text "Catch PokeMon"
                   :action :catch-pokemon}]
        [nav-ball {:text "New PokeMon"
                   :action :new-pokemon}])
      (when (keyword? guess)
        [guess-input])
      (when (boolean? guess)
        [guess-result])
      ]
     ]))
