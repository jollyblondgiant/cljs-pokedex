(ns cljs-pokedex.subs
  (:require
   [re-frame.core :as re-frame :refer [reg-sub]]))

(reg-sub ::pokemon      :pokemon)
(reg-sub ::guess-result :guess)
(reg-sub ::guess-input  :guess-input)
(reg-sub ::caught       :caught)
(reg-sub ::strikes      :strikes)
(reg-sub ::trainer      :trainer)
(reg-sub ::login        :login)
(reg-sub ::regions      :regions)
(reg-sub ::guessing?  #(-> % :guess keyword?))
