<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '@/supabase'
import type { AuthError } from '@supabase/supabase-js'

async function signInWithGithub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github'
  })
}
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <button @click="signInWithGithub" class="bg-gray-800 text-white px-4 py-2 rounded-lg">
      Sign in with Github
    </button>
  </div>
</template>
