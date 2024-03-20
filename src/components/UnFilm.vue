<script setup lang="ts">
import { supabase } from '@/supabase'
import { useRoute } from 'vue-router'
const route = useRoute()
const { data: FilmsData } = await supabase
  .from('films')
  .select('*')
  .eq('id', route.params.id)
  .single()
const { data: FilmsSupports } = await supabase
  .from('support_film')
  .select('id_support,support(support_name)')
  .eq('id_film', route.params.id)
const { data: FilmsActeurs } = await supabase
  .from('acteurs_films')
  .select('id_acteur,acteurs(actor_name, actor_first_name, actor_img)')
  .eq('id_film', route.params.id)

const { data: FilmsPhysiques } = await supabase
  .from('physique_film')
  .select('id_physique, physique(physique_name, physique_img)')
  .eq('id_film', route.params.id)
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
  <div class="m-4">
    <h2 class="font-bold text-xl">Synopsis</h2>
    <p>{{ FilmsData!.film_synopsis }}</p>
  </div>

  <div class="text-[#272727] m-4">
    <h2 class="font-bold text-xl">Ou regarder en streaming ?</h2>
    <div v-for="Unsupport in FilmsSupports">
      <p>{{ Unsupport.support.support_name }}</p>
    </div>
  </div>
  <div class="flex justify-center">
    <button class="bg-[#F5C754] text-[#272727] font-bold py-3 w-3/4 rounded-lg">
      Voir toutes les offres
    </button>
  </div>
  <h2 class="text-xl font-bold">Support Physique :</h2>
  <div class="bg-[#272727]">
    <div class="bg-[#272727] w-full text-white flex">
      <div
        v-for="UnPhysique in FilmsPhysiques"
        :key="UnPhysique.id_physique"
        class="flex flex-col w-full p-5"
      >
        <img
          :src="UnPhysique.physique!.physique_img"
          alt=""
          class="w-full aspect-square object-cover"
        />
        <p>{{ UnPhysique.physique.physique_name }}</p>
      </div>
    </div>
    <div class="flex justify-center pb-5">
      <button class="bg-[#F5C754] text-[#272727] font-bold py-3 w-3/4 rounded-lg">
        Voir toutes les offres
      </button>
    </div>
  </div>
  <h2 class="font-bold text-xl pl-5 pt-5">Acteurs</h2>
  <div v-for="Unacteur in FilmsActeurs" class="w-full p-5">
    <router-link :to="`/acteurs/${Unacteur.id_acteur}`">
      <img
        :src="Unacteur.acteurs.actor_img"
        alt="Image de l'acteur"
        class="rounded-lg max-h-44 object-cover object-top mt-4"
      />
      <p class="text-[#272727] text-lg font-semibold">
        {{ Unacteur.acteurs.actor_name }} {{ Unacteur.acteurs.actor_first_name }}
      </p>
    </router-link>
  </div>
</template>
