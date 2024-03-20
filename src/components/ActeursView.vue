<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from '@/supabase'

const acteurs = ref([]) // Déclaration correcte de acteurs comme état réactif
const error = ref(null)

const fetchActeurs = async () => {
  let { data: acteursData, error: acteursError } = await supabase.from('acteurs').select('*')

  if (acteursError) {
    error.value = acteursError
    console.error(acteursError)
  } else {
    acteurs.value = acteursData // Mise à jour de l'état réactif avec les données récupérées
  }
}

onMounted(fetchActeurs)
</script> 


<template>
  <div>
    <div class="flex">
      <div v-for="acteur in acteurs" :key="acteur.id" class="pl-16">
        <router-link :to="`/acteurs/${acteur.id}`">
          <img :src="acteur.actor_img" alt="Cover image" class="rounded-lg h-80 w-80 object-cover object-top my-4" />
          <h2 class="font-semibold text-xl pl-6 -my-2">{{ acteur.actor_name }} {{ acteur.actor_first_name }}</h2>
        </router-link>
      </div>
    </div>
  </div>
</template>

