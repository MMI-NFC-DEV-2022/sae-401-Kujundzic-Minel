<script setup lang="ts">
import { ref } from 'vue'
import { supabase, user } from '@/supabase'
import type { AuthError } from '@supabase/supabase-js'

const email = ref('')
const password = ref('')
const error = ref('')

const signInWithPassword = async () => {
  try {
    const { error } = await supabase.auth.signInWithPassword({
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
  <div class="flex items-center">
    <div v-if="error" class="text-red-500 mr-4">{{ error }}</div>
    <div v-if="user" class="flex items-center">
      <p class="text-sm mr-2">{{ user.email }}</p>
      <button
        @click="supabase.auth.signOut()"
        class="text-sm bg-[#F5C754] hover:bg-[#bb9841] text-white font-bold py-1 px-2 rounded"
      >
        Se déconnecter
      </button>
    </div>
    <div v-else class="flex items-center">
      <form
        @submit.prevent="signInWithPassword"
        class="flex items-center"
      >
        <input
          type="email"
          v-model="email"
          required
          placeholder="Email"
          class="px-2 py-1 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#F5C754] mr-1"
        />
        <input
          type="password"
          v-model="password"
          required
          placeholder="Mot de passe"
          class="px-2 py-1 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-[#F5C754] mr-1"
        />
        <button
          type="submit"
          class="bg-[#F5C754] hover:bg-[#bb9841] text-white font-bold py-1 px-2 rounded"
        >
          Se connecter
        </button>
      </form>
    </div>
  </div>
</template>