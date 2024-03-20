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

// console.log(FilmsData)
// console.log(FilmsSupports)
console.log(FilmsActeurs)
</script>
<template>
  <div
    :style="{
      'background-image':
        'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(' +
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
      <div>favori</div>
    </div>
    <div class="flex justify-between">
      <div class="w-1/2 flex flex-col justify-between">
        <div class="flex flex-col">
          <span class="text-white text-base">{{ FilmsData!.film_sortie }}</span>
          <span class="text-white text-base">{{ FilmsData!.film_duree }}</span>
        </div>
        <div>genre et notes</div>
      </div>
      <div class="w-1/3">
        <img :src="FilmsData!.film_cover" class="rounded-md" alt="" />
      </div>
      <div class="text-white">
        <h2>Supports</h2>
        <div v-for="Unsupport in FilmsSupports">
          <p>{{ Unsupport.support.support_name }}</p>
        </div>
      </div>
    </div>
  </div>
  <div>
    <h2>synopsis</h2>
    <p>{{ FilmsData!.film_synopsis }}</p>
  </div>
  <h2>Acteurs</h2>
  <div v-for="Unacteur in FilmsActeurs">
    <router-link :to="`/acteurs/${Unacteur.id_acteur}`">
      <img
        :src="Unacteur.acteurs.actor_img"
        alt="Image de l'acteur"
        class="rounded-lg h-40 w-40 object-cover object-top mt-4"
      />
      <p class="text-[#272727] text-xl">
        {{ Unacteur.acteurs.actor_name }} {{ Unacteur.acteurs.actor_first_name }}
      </p>
    </router-link>
  </div>
</template>
