<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { supabase } from '@/supabase';
import { useRoute } from 'vue-router';

const route = useRoute();
const collectionFilms = ref([]);

const fetchCollectionFilms = async () => {
  const { data, error } = await supabase
    .from('collection_film')
    .select(`
      *,
      film:films(*)
    `)
    .eq('id_collection', route.params.id);

  if (error) console.error('Error fetching collection films:', error);
  else collectionFilms.value = data;
};

onMounted(fetchCollectionFilms);
</script>

<template>
  <div class="p-4">
    <h2 class="text-2xl font-semibold mb-4">Films in this Collection</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div v-for="item in collectionFilms" :key="item.film.id" class="rounded overflow-hidden shadow-lg">
        <router-link :to="`/films/${item.film.id}`">
          <img :src="item.film.film_cover" alt="Film cover" class="w-full h-60 object-cover">
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ item.film.film_name }}</div>
            <p class="text-gray-700 text-base">
              {{ item.film.film_synopsis }}
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
