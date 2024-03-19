<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { supabase } from '@/supabase'

const route = useRoute()
const filmId = route.params.id
const film = ref(null)
const error = ref(null)

onMounted(async () => {
  const { data, error: fetchError } = await supabase
    .from('films')
    .select('*')
    .eq('id', filmId)
    .single()

  film.value = data
  error.value = fetchError
})
</script>

<template>
  <div class="overflow-x-hidden">
    <div v-if="film" class="w-[110vw] flex flex-col">
      <img
        :src="film.film_cover"
        alt="Film cover image"
        class="h-96 w-full object-cover object-center my-4 -ml-[5vw] blur-sm relative"
      />
      <img
        :src="film.film_cover"
        alt="Film cover image"
        class="rounded-lg w-44 object-cover object-center absolute right-0 mr-4 mt-8"
      />
      <h2 class="font-semibold text-xl pl-6 -my-2">{{ film.film_name }}</h2>
      <p class="pl-6">{{ film.film_synopsis }}</p>
      <p class="pl-6">{{ film.film_sortie }}</p>
      <p class="pl-6">{{ film.film_favoris }}</p>
    </div>

    <div v-else>
      <p v-if="error">{{ error }}</p>
      <p v-else>Chargement des détails du film...</p>
    </div>
  </div>
</template>
