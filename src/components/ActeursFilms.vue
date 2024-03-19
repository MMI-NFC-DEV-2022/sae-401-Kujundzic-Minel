<script setup lang="ts">
import { supabase } from '../supabase';

let { data: acteur_films, error } = await supabase.from('acteur_films').select('*')
console.log(acteur_films)
</script>
<template>
  <div>
    <h1>Test</h1>
  </div>
</template>