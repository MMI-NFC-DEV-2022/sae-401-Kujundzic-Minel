<script setup lang="ts">
import { supabase } from '@/supabase'
import { useRoute } from 'vue-router'
const route = useRoute()
const { data: ActeurData } = await supabase
  .from('acteurs')
  .select('*')
  .eq('id', route.params.id)
  .single()

const { data: FilmsActeurs } = await supabase
  .from('acteurs_films')
  .select('films(id, film_name, film_cover)')
  .eq('id_acteur', route.params.id)
</script>
<template>
  <div>
    <h1>Acteurs</h1>
    <div class="justify-between w-full pb-5">
      <img
        :src="ActeurData!.actor_img"
        alt="Cover image"
        class="rounded-lg h-80 w-80 object-cover object-top my-4"
      />
      <h1 class="text-black text-xl font-bold">
        {{ ActeurData!.actor_name }} {{ ActeurData!.actor_first_name }}
      </h1>
    </div>
  </div>

  <h2>Les films ou il a joué :</h2>
  <div v-for="filmacteur in FilmsActeurs" :key="filmacteur.films.id" class="my-4">
    <router-link :to="`/films/${filmacteur.films.id}`">
      <img
        :src="filmacteur.films.film_cover"
        alt="Cover image"
        class="rounded-lg h-80 w-80 object-cover object-top"
      />
      <h1 class="text-black text-xl font-bold">{{ filmacteur.films.film_name }}</h1>
    </router-link>
  </div>
</template>
