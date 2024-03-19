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
    <h1 class="font-bold text-4xl">Les films du moment</h1>
    <div>
      <div v-for="film in films" :key="film.id" class="film">
        <img :src="film.film_cover" alt="Cover image" />
        <h2>{{ film.film_name }}</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
.film {
  margin-bottom: 20px;
}
.film h2 {
  margin: 0;
}
.film p {
  margin: 5px 0;
}
</style>
