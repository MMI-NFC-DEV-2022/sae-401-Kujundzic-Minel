<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '@/supabase'
import type { AuthError } from '@supabase/supabase-js'

const email = ref('')
const password = ref('')
const error = ref('')

const signUpWithPassword = async () => {
  try {
    const { user, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    })
    if (error) throw error
  } catch (err) {
    error.value = (err as AuthError).message
  }
}
</script>

<template>
  <div class="flex flex-col items-center">
    <div v-if="error" class="text-red-500 mb-4">{{ error }}</div>
    <form
      @submit.prevent="signUpWithPassword"
      class="flex flex-col items-center"
    >
      <input
        type="email"
        v-model="email"
        required
        placeholder="Email"
        class="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F5C754] mb-2"
      />
      <input
        type="password"
        v-model="password"
        required
        placeholder="Mot de passe"
        class="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F5C754] mb-2"
      />
      <button
        type="submit"
        class="bg-[#F5C754] hover:bg-[#bb9841] text-white font-bold py-1 px-2 rounded"
      >
        S'inscrire
      </button>
    </form>
  </div>
</template>
