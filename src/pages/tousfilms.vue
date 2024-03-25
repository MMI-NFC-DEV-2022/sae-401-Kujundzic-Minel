<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from '@/supabase'

const films = ref([])
const error = ref(null)

const fetchFilms = async () => {
  const { data: filmsData, error: filmsError } = await supabase.from('films').select('*')
  if (filmsError) {
    error.value = filmsError
    console.error(filmsError)
  } else {
    films.value = filmsData
  }
}

onMounted(fetchFilms)
</script>
<template>
  <div class="p-4 md:p-8">
    <h1 class="text-2xl md:text-4xl font-bold text-center md:text-left mb-6">Tous les films</h1>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div v-for="film in films" :key="film.id" class="rounded-lg overflow-hidden shadow-lg">
        <router-link :to="`/films/${film.id}`" class="block">
          <img :src="film.film_cover" alt="Image du film" class="object-cover object-top h-60 w-full" />
          <h2 class="text-xl font-semibold p-4">{{ film.film_name }}</h2>
        </router-link>
      </div>
    </div>
  </div>
</template>