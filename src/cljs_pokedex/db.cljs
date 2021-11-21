(ns cljs-pokedex.db
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            ;;[datomic-cljs.api :as d]
            [cljs.core.async :refer [<!]]
            [re-frame.core :as re-frame :refer [subscribe dispatch]]
            [cognitect.transit :as t]))

(def default-db
  {:name "re-frame"
   :guess nil
   :caught #{}
   :pokemon nil
   :strikes 3})


(def db-uri "datomic:mem://foo")
#_(def poke-schema [{:db/ident :pokemon/name
                   :db/valueType :db.type/string
                   :db/cardinality :db.cardinality/one}
                  {:db/ident :pokemon/num
                   :db/valueType :db.type/string
                   :db/cardinality :db.cardinality/one}
                  {:db/ident :pokemon/sprite
                   :db/valueType :db.type/string
                   :db/cardinality :db.cardinality/one}
                  {:db/ident :pokemon/description
                   :db/valueType :db.type/string
                   :db/cardinality :db.cardinality/one}])

;; (defonce domain-schemas [poke-schema])
;; (d/create-database db-uri)
;; (defonce conn (d/connect db-uri))
;; (map (fn [tx] @(d/transact conn tx)) domain-schemas)

;; (defn add-pokemon "" [pokemon]
;;   (->> [{:pokemon/description (:description pokemon)
;;          :pokemon/name (:name pokemon)
;;          :pokemon/sprite (:sprite pokemon)
;;          :pokemon/num (:num pokemon)}]
;;        (d/transact conn)))

;; (defn remove-pokemon "" [id]
;;   )

;; (defn get-pokemon "" [id]
;;   (d/q
;;    '[:find ?pokemon
;;      :in $ ?id
;;      :where
;;      [?pokemon :pokemon/num ?id]]
;;    (d/db conn)
;;    id))

;; (defn getall-pokemon "" []
;;   (d/q
;;    '[:find ?description ?name ?num ?sprite
;;      :where
;;      [?pokemon :pokemon/description ?description]
;;      [?pokemon :pokemon/name ?name]
;;      [?pokemon :pokemon/sprite ?sprite]
;;      [?pokemon :pokemon/num ?num]]))
