(ns cljs-pokedex.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::name
 (fn [db]
   (:name db)))

(re-frame/reg-sub
 ::sprite
 (fn [db]
   (:sprite db)))

(re-frame/reg-sub
 ::encounter
 (fn [db]
   ))
