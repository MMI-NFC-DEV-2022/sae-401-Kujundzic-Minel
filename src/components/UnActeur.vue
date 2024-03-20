<script setup lang="ts">
import { supabase } from '@/supabase'
import { useRoute } from 'vue-router'

const route = useRoute()
const { data: ActeurData } = await supabase
  .from('acteurs')
  .select('*, acteurs_films(films(id, film_name, film_cover))')
  .eq('id', route.params.id)
  .single()
</script>

<template>
  <div class="w-full pb-5">
    <img :src="ActeurData?.actor_img" alt="Image de l'acteur" class="my-4 rounded-lg h-80 w-80 object-cover object-top" />
    <h1 class="text-xl text-black">{{ ActeurData?.actor_name }} {{ ActeurData?.actor_first_name }}</h1>
  </div>

  <h2>Les films où il a joué :</h2>
  <div v-for="film in ActeurData?.acteurs_films" :key="film.films.id" class="my-4">
    <router-link :to="`/films/${film.films.id}`">
      <img :src="film.films.film_cover" alt="Cover image" class="rounded-lg h-40 w-40 object-cover object-top mt-4" />
      <h1 class="text-xl text-[#272727]">{{ film.films.film_name }}</h1>
    </router-link>
  </div>
</template>
