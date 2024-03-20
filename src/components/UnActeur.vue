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
  <div class="bg-white p-4 lg:flex lg:p-8">
    <div class="lg:w-1/4 lg:mr-8">
      <img :src="ActeurData?.actor_img" alt="Image de l'acteur" class="mx-auto rounded-full h-32 w-32 object-cover object-top lg:h-48 lg:w-48" />
      <h1 class="text-2xl font-bold mt-4 text-center lg:text-left">{{ ActeurData?.actor_name }} {{ ActeurData?.actor_first_name }}</h1>
      <p class="text-gray-600 text-center lg:text-left">{{ ActeurData?.actor_birthday }}</p>
      <p class="mt-2 px-4 text-center lg:text-left">{{ ActeurData?.actor_bio }}</p>
    </div>

    <div class="lg:w-3/4">
      <h2 class="text-lg font-bold mb-4 mt-8 lg:mt-0">Filmographie</h2>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div v-for="film in ActeurData?.acteurs_films" :key="film.films.id" class="flex-none">
          <router-link :to="`/films/${film.films.id}`">
            <img :src="film.films.film_cover" alt="Image du film" class="rounded-lg w-full aspect-square object-cover object-top" />
            <h2 class="text-md font-semibold mt-2">{{ film.films.film_name }}</h2>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
