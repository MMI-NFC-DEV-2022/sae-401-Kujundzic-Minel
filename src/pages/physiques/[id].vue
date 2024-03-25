<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { supabase } from '@/supabase';
import { useRoute } from 'vue-router';

const route = useRoute();
const filmPhysiques = ref([]);

const fetchFilmPhysiques = async () => {
  const { data, error } = await supabase
    .from('physique_film')
    .select(`
      *,
      physique: physique(*)
    `)
    .eq('id_film', route.params.id);

  if (error) console.error('Error fetching film physical editions:', error);
  else filmPhysiques.value = data;
};

onMounted(fetchFilmPhysiques);
</script>

<template>
  <div class="p-4">
    <h2 class="text-2xl font-semibold mb-4">Toutes les éditions physiques disponibles pour ce film</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div v-for="item in filmPhysiques" :key="item.physique.id" class="rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ item.physique.physique_name }}</div>
          <img :src="item.physique.physique_img" alt="Physical edition image" class="w-full">
        </div>
      </div>
    </div>
  </div>
</template>
