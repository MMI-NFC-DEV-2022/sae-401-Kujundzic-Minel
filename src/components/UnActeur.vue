<script setup lang="ts">
import { supabase } from '@/supabase';
import { useRoute } from 'vue-router';
const route = useRoute();
const { data: ActeurData } = await supabase
  .from('acteurs')
  .select('*')
  .eq('id', route.params.id)
  .single();
</script>
<template>
  <div>
    <h1>Acteurs</h1>
    <div class="flex justify-between w-full pb-5">
        <img :src="ActeurData!.actor_img" alt="Cover image" class="rounded-lg h-80 w-80 object-cover object-top my-4" />
      <h1 class="text-custom-white text-black text-xl font-bold">{{ ActeurData!.actor_name }} {{ ActeurData!.actor_first_name }}</h1>
      <div>favori</div>
  </div>
</div>
</template>