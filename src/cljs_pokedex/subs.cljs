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
 ::pokemon
 (fn [db]
   (:pokemon db)))

(re-frame/reg-sub
 ::guess-result
 (fn [db]
   (:guess db)))

(re-frame/reg-sub
 ::guessing?
 (fn [db]
   (keyword? (:guess db))))

(re-frame/reg-sub
 ::guess-input
 (fn [db]
   (:guess-input db)))

(re-frame/reg-sub
 ::encounter
 (fn [db]
   ))
