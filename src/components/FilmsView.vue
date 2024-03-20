<script setup lang="ts">
import { ref, onMounted } from 'vue'

const films = ref([])
const error = ref(null)

import { supabase } from '@/supabase'

const fetchFilms = async () => {
  let { data: filmsData, error: filmsError } = await supabase.from('films').select('*')

  films.value = filmsData
}

onMounted(fetchFilms)
</script>

<template>
  <div>
    <h1 class="pl-16 font-bold text-4xl">Les films du moment</h1>
    <div class="flex">
      <div v-for="film in films" :key="film.id" class="pl-16">
        <router-link :to="`/films/${film.id}`">
          <img
            :src="film.film_cover"
            alt="Cover image"
            class="rounded-lg h-80 w-80 object-cover object-top my-4"
          />
          <h2 class="font-semibold text-xl pl-6 -my-2">{{ film.film_name }}</h2>
        </router-link>
      </div>
    </div>
  </div>
</template>
