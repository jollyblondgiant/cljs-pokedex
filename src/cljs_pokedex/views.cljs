(ns cljs-pokedex.views
  (:require
   [re-frame.core :as re-frame :refer [subscribe dispatch]]
   [cljs-pokedex.subs :as subs]
   [cognitect.transit :as t]
   [cljs-pokedex.events :as events]
   ))


(def ball-map
  {:kanto "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/safari-ball.png"
   :johto "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/net-ball.png"
   :hoenn "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dive-ball.png"
   :sinnoh "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/nest-ball.png"
   :unova "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/repeat-ball.png"
   :kalos "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/timer-ball.png"
   :alola "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/luxury-ball.png"
   :galar "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/premier-ball.png"
   :all "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png"})

(defn region-ball [region]
  (let [regions (subscribe [::subs/regions])]
    [:div.region-ball
     (cond (contains? @regions region)

       [:button.btn
        {:on-click #(dispatch [::events/remove-region region])}
        [:img {:style {:filter "brightness(0)"}
               :src (get ball-map region)}]]
       (contains? @regions :all)
       [:button.btn
        (when (= region :all)
          {:on-click
           #(dispatch [::events/remove-region region])})
        [:img {:style {:filter "brightness(0)"}
               :src (get ball-map region)}]]
       :else
       [:button.btn
        {:on-click #(dispatch [::events/add-region region])}
        [:img {:src (get ball-map region)}]])
     [:span (name region)]]))

(defn sprite-panel [sprite]
  (let [conf {:src sprite}]
    [:img#pokemon-sprite
     (if @(subscribe [::subs/guessing?])
       (assoc conf :style {:filter "brightness(0)"})
       conf)
     ]))

(defn guess-result []
  (let [pokemon (:name @(subscribe [::subs/pokemon]))
        winner? @(subscribe [::subs/guess-result])]
    (if winner?
      [:span#win.guess (str "you did it! caught " pokemon "!")]
      [:span#lose.guess (str "The " pokemon " got away!")]))
  )

(defn guess-input []
  [:input#guess-input
   {:placeholder "Who's that PokeMon?"
    :type :text
    :on-change (fn [input]
                 (dispatch [::events/input-guess
                            (-> input .-target .-value)])
                 )}])

(defn nav-ball [props]
  [:button.btn.nav-ball
   {:on-click (case (:action props)
                :new-pokemon
                #(dispatch [::events/new-pokemon "kanto"])
                :catch-pokemon
                #(when  @(subscribe [::subs/guess-input])
                   (dispatch [::events/guess-pokemon]))
                #(js/console.log (:text props)))}
   [:img.poke-ball {:src "img/pokeball.png"}]
   [:p.navball-text(:text props)]
   ])

(defn caught-pokemon [pokemon]
  [:button.btn.caught-pokemon
   {:key (:num pokemon)
    :on-click #(js/console.log pokemon)}
   [:img.poke-ball {:src "img/pokeball.png"}]])

(defn party-panel []
  (let [pokemon (subscribe [::subs/pokemon])
        party   (subscribe [::subs/caught])]
    [:div#pokemon-party.col-md-1.offset-md-11
     (for [pokemon @party]
       ^{:key (:num pokemon)}
       [caught-pokemon pokemon])]))

(defn strikes-panel []
  (let [strikes (subscribe [::subs/strikes])
        trainer (subscribe [::subs/trainer])]
    [:div#strikes.col-md-2.offset-md-9
     [:span.poke-font @trainer "  "]
     (for [heart (range @strikes)]
       ^{:key heart}
       [:img.heart-strike {:src "img/heart.png"}])]))

(defn navball-panel []
  (let [guess   (subscribe [::subs/guess-result])]
    [:div#navball-row.row
     (if (keyword? @guess)
       [nav-ball {:text "Catch PokeMon"
                  :action :catch-pokemon}]
       [nav-ball {:text "New PokeMon"
                  :action :new-pokemon}])
     (when (keyword? @guess)
       [guess-input])
     (when (boolean? @guess)
       [guess-result])]))

(defn game-screen []
  (let [pokemon (subscribe [::subs/pokemon])]
    [:div#game-screen
     [:div.col-md3.offset-md-1
      (when @pokemon
        [sprite-panel (:sprite @pokemon)])
      [navball-panel]]
     [strikes-panel]
     [party-panel]]))

(defn lose-screen []
  [:div#lose-screen.row
   [:div.col-md1
    [:img#poke-prof {:src "img/rocket.png"}]]
   [:div.col-md-3
    [:h2.poke-font
     "Oh No! You whited out!"]
    [:button.btn.btn-primary
     {:href "/"}
     [:a.poke-font {:href "/"} "Try Again!"]]]])

(defn win-screen []
  (let [party   (subscribe [::subs/caught])
        [poke mon] (split-at 3 @party)
        trainer (subscribe [::subs/trainer])]
    [:div#win-screen.offset-md-2
     #_[:h2.poke-font.top-buffer-10
        ""]
     [:h2.poke-font.top-buffer-10 "you win! you are the very best, like no one ever was!"]
     [:h2.poke-font.top-buffer-10 @trainer "'s party:"]
     [:div.row
      [:div.col-md-6
       (for [pokemon poke]
         ^{:key (:num pokemon)}
         [:div
          [:img {:src (:sprite pokemon)}]
          [:span.poke-font (:name pokemon)]])]
      [:div.col-md-6
       (for [pokemon mon]
         ^{:key (:num pokemon)}
         [:div
          [:img {:src (:sprite pokemon)}]
          [:span.poke-font (:name pokemon)]])]
      [:button.btn.btn-primary
       {:href "/"}
       [:a.poke-font {:href "/"} "Try Again!"]]]



     ]))

(defn login-screen []
  (let [login (subscribe [::subs/login])
        regions (subscribe [::subs/regions])]
    [:div#login-screen.row
     [:div.col-md1
      [:img#poke-prof {:src "img/prof-oak.png"}]]
     [:div.col-md3.poke-font
      [:h2.poke-font "Welcome to \"Who's that PokeMon?!\""]
      [:div.row
       [:input#trainer-login.col-md-5
        {:placeholder "What's your name again?"
         :type :text
         :on-change (fn [input]
                      (dispatch [::events/input-login
                                 (-> input .-target .-value)])
                      )}]
       [:button.btn.btn-success.col-md-2
        {:on-click #(when @login
                      (dispatch [::events/login-trainer]))
         :disabled (or
                    (nil? @login)
                    (empty? @regions))}
        "Play!"]]
      [:div.row.top-buffer-10
       [:h3.poke-font "Select Regions:"]]
      [:div#regions.row.top-buffer-10
       (for [region [:kanto :johto :hoenn
                     :sinnoh :unova :kalos
                     :alola :galar :all
                     ]]
         ^{:key region}
         [region-ball region])]
      ]]))


(defn main-panel []
  (let [strikes (subscribe [::subs/strikes])
        party (subscribe [::subs/caught])
        trainer (subscribe [::subs/trainer])]
    (cond
     (nil? @trainer)         [login-screen]
     (= 0 @strikes)          [lose-screen]
     (-> @party count (= 6)) [win-screen]
     :else                   [game-screen]
      )))
