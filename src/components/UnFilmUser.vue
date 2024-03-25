<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from '@/supabase'
import { useRoute } from 'vue-router'

const route = useRoute()
const FilmsUserData = ref(null)

onMounted(async () => {
  const { data, error } = await supabase
    .from('films_users')
    .select('*')
    .eq('id', route.params.id)
    .single()
  if (error) {
    console.error(error.message)
  } else {
    FilmsUserData.value = data
  }
})
</script>

<template>
    <!-- Check if FilmsUserData exists -->
    <div v-if="FilmsUserData" class="film-detail">
      <!-- Film detail section -->
      <div
        :style="{
          'background-image': 'linear-gradient(90deg, rgba(0,0,0,0.85), transparent, rgba(0,0,0,0.85)), url(' + FilmsUserData.film_cover + ')',
          'background-size': 'cover',
          'background-position': 'center',
          'background-repeat': 'no-repeat'
        }"
        class="p-5 flex flex-col justify-between"
      >
        <!-- Other film details -->
        <div class="flex justify-between w-full pb-5">
          <h1 class="text-white text-xl font-bold">{{ FilmsUserData.film_name }}</h1>
        </div>
        <div class="flex justify-between">
          <div class="w-1/2 flex flex-col justify-between">
            <div class="flex flex-col">
              <span class="text-white text-base">{{ FilmsUserData.film_sortie }}</span>
              <span class="text-white text-base">{{ FilmsUserData.film_duree }}</span>
            </div>
          </div>
          <div class="w-1/3">
            <img :src="FilmsUserData.film_cover" class="rounded-md" alt="Cover of the film" />
          </div>
        </div>
      </div>
  
      <!-- Synopsis Section -->
      <div class="synopsis-section mt-5">
        <h2 class="text-lg font-bold">Synopsis</h2>
        <p class="mt-2">{{ FilmsUserData.film_synopsis }}</p>
      </div>
  
      <!-- Rest of your component -->
    </div>
    <div v-else>
      <!-- Loading or not found message -->
      <p>Loading...</p>
    </div>
  </template>
  