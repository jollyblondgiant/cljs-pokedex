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
               :margin-left "20%"
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
    :style {:height :fit-content :margin "auto 0" :margin-left "20%"}
    :type :text
    ;;:default-value @(subscribe [::subs/guess-input])
    :on-change (fn [input]
                 (swap! model
                        #(-> % (assoc :guess-input
                                      (-> input .-target .-value))))
                 ;; #(dispatch [::events/input-guess
                 ;;             (-> input .-target .-value)])
                 )}])

(defn nav-ball [props]
  [:button.btn.nav-ball
   {:on-click (case (:action props)
                :new-pokemon
                #(dispatch [::events/new-pokemon "kanto"])
                :catch-pokemon
                #(when (:guess-input @model)
                   (do
                     (dispatch [::events/guess-pokemon (:guess-input @model)])
                     (swap! model (fn [db] (dissoc db :guess-input)))))
                #(js/console.log (:text props)))}
   [:img.poke-ball {:src "img/pokeball.png"}]
   [:p.navball-text(:text props)]
   ])

(defn caught-pokemon [pokemon]
  [:button.btn.caught-pokemon
   {:key (:num pokemon)
    :on-click #(js/console.log pokemon)}
   [:img.poke-ball {:src "img/pokeball.png"}]])


(defn main-panel []
  (let [name (re-frame/subscribe [::subs/name])
        pokemon (subscribe [::subs/pokemon])
        guess  (subscribe [::subs/guess-result])
        strikes (subscribe [::subs/strikes])
        party (subscribe [::subs/caught])
        ]
    (cond
       (= 0 @strikes)
       [:div#fail-screen
        "You whited out! refresh page to return to nearest PokeCenter and try again!"]
       (-> @party count (= 6))
       [:div#win-screen
        "you win! you are the very best, like no one ever was!"]
      :else
      [:div#game-screen
       [:div.col-md3.offset-md-1
        (when @pokemon
          [sprite-panel (:sprite @pokemon)])
        [:div#navball-row.row
         (if (keyword? @guess)
           [nav-ball {:text "Catch PokeMon"
                      :action :catch-pokemon}]
           [nav-ball {:text "New PokeMon"
                      :action :new-pokemon}])
         (when (keyword? @guess)
           [guess-input])
         (when (boolean? @guess)
           [guess-result])]]
       [:div#strikes.col-md-1.offset-md-10
        {:style {:position :absolute}}
        (for [heart (range @strikes)]
          ^{:key heart}
          [:img.heart-strike {:src "img/heart.png"
                              :style {
                                      :width 20}}])]
       [:div#pokemon-party.col-md-1.offset-md-11
        (for [pokemon @party]
          ^{:key (:num pokemon)}
          [caught-pokemon pokemon])]])))
