<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { supabase } from '@/supabase';
import { useRoute } from 'vue-router';

const route = useRoute();
const filmSupports = ref([]);

const fetchFilmSupports = async () => {
  const { data, error } = await supabase
    .from('support_film')
    .select(`
      *,
      support: support(*)
    `)
    .eq('id_film', route.params.id);

  if (error) console.error('Error fetching film supports:', error);
  else filmSupports.value = data;
};

onMounted(fetchFilmSupports);
</script>

<template>
  <div class="p-4">
    <h2 class="text-2xl font-semibold mb-4">Tous les supports disponibles pour ce film</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div v-for="item in filmSupports" :key="item.support.id" class="rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ item.support.support_name }}</div>
          <img :src="item.support.support_img" alt="Support image" class="w-full">
        </div>
      </div>
    </div>
  </div>
</template>
