<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from '@/supabase'

const acteurs = ref([])
const error = ref(null)

const fetchActeurs = async () => {
  let { data: acteursData, error: acteursError } = await supabase.from('acteurs').select('*')

  if (acteursError) {
    error.value = acteursError
    console.error(acteursError)
  } else {
    acteurs.value = acteursData
  }
}

onMounted(fetchActeurs)
</script>

<template>
  <div class="bg-white p-4">
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      <div v-for="acteur in acteurs" :key="acteur.id" class="flex flex-col items-center">
        <router-link :to="`/acteurs/${acteur.id}`" class="text-center">
          <img
            :src="acteur.actor_img"
            alt="Image de l'acteur"
            class="rounded-lg h-48 w-48 object-cover object-top my-4"
          />
          <h2 class="font-semibold text-md md:text-lg lg:text-xl">
            {{ acteur.actor_name }} {{ acteur.actor_first_name }}
          </h2>
        </router-link>
      </div>
    </div>
  </div>
</template>

