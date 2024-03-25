<script setup lang="ts">
import { supabase } from '@/supabase'
import { log } from 'console';
import { useRoute } from 'vue-router'
const route = useRoute()
const { data: FilmsData } = await supabase
  .from('films')
  .select(`
    *,
    support_film(*, support(*)),
    physique_film(*, physique(*)),
    acteurs_films(*, acteurs(*)),
    collection_film(*, collection(*))
  `)
  .eq('id', route.params.id)
  .single()
console.log(FilmsData)
</script>

<template>
  <div
    :style="{
      'background-image':
        'linear-gradient(90deg, rgba(0,0,0,1), transparent, rgba(0,0,0,1)), url(' +
        FilmsData!.film_cover +
        ')',
      'background-size': 'cover',
      'background-position': 'top',
      'background-repeat': 'no-repeat'
    }"
    class="p-5 flex flex-col justify-between"
  >
    <div class="flex justify-between w-full pb-5">
      <h1 class="text-white text-xl font-bold">{{ FilmsData!.film_name }}</h1>
    </div>
    <div class="flex justify-between">
      <div class="w-1/2 flex flex-col justify-between">
        <div class="flex flex-col">
          <span class="text-white text-base">{{ FilmsData!.film_sortie }}</span>
          <span class="text-white text-base">{{ FilmsData!.film_duree }}</span>
        </div>
      </div>
      <div class="w-1/3">
        <img :src="FilmsData!.film_cover" class="rounded-md" alt="" />
      </div>
    </div>
  </div>
  <div class="m-5">
    <h2 class="font-bold text-xl">Synopsis</h2>
    <p>{{ FilmsData!.film_synopsis }}</p>
  </div>
  <div class="m-5">
    <h2 class="font-bold text-xl">Où regarder en streaming ?</h2>
    <div class="flex flex-wrap">
      <div v-for="supportFilm in FilmsData.support_film" :key="supportFilm.id" class="p-5">
        <img :src="supportFilm.support.support_img" alt="Image du support" class="rounded-lg w-40">
        <p>{{ supportFilm.support.support_name }}</p>
      </div>
    </div>
  </div>
  <div class="flex justify-center">
  <router-link :to="`/supports/${FilmsData.id}`" class="bg-[#F5C754] text-[#272727] font-bold py-3 w-3/4 rounded-lg mb-5 text-center block">
    Voir toutes les offres Support
  </router-link>
</div>
  <div class="bg-[#272727] text-white p-5">
    <div class="bg-[#272727] text-white p-5">
    <h2 class="text-xl font-bold">Support physique :</h2>
    <div class="flex flex-wrap">
      <div v-for="physiqueFilm in FilmsData.physique_film" :key="physiqueFilm.id" class="p-5">
        <img :src="physiqueFilm.physique.physique_img" alt="Image du support physique" class="rounded-lg w-40">
        <p>{{ physiqueFilm.physique.physique_name }}</p>
      </div>
    </div>
  </div>
    <div class="flex justify-center pb-5">
      <router-link :to="`/physiques/${FilmsData.id}`" class="bg-[#F5C754] text-[#272727] font-bold py-3 w-3/4 rounded-lg mb-5 text-center block">
        Voir toutes les offres
      </router-link>
    </div>
  </div>
  <div class="m-5">
    <h2 class="font-bold text-xl">Acteurs</h2>
    <div class="flex flex-wrap">
      <div v-for="acteurFilm in FilmsData.acteurs_films" :key="acteurFilm.id" class="p-5">
        <router-link :to="`/acteurs/${acteurFilm.id_acteur}`">
          <img :src="acteurFilm.acteurs.actor_img" alt="Image de l'acteur" class="rounded-lg w-40">
          <p>{{ acteurFilm.acteurs.actor_name }} {{ acteurFilm.acteurs.actor_first_name }}</p>
        </router-link>
      </div>
    </div>
  </div>
  <div v-if="FilmsData && FilmsData.collection_film && FilmsData.collection_film.length > 0" class="m-5">
    <h2 class="font-bold text-xl">Collections :</h2>
    <div class="flex flex-wrap">
      <div v-for="collectionFilm in FilmsData.collection_film" :key="collectionFilm.id" class="p-5">
        <router-link :to="`/collections/${collectionFilm.collection.id}`">
          <img :src="collectionFilm.collection.collection_img" alt="Image de la collection" class="rounded-lg w-40">
          <p>{{ collectionFilm.collection.collection_name }}</p>
        </router-link>
      </div>
    </div>  
  </div>
</template>