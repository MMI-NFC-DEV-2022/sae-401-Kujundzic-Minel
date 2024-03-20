<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '@/supabase'
import Login from '@/components/login.vue'

const showMenu = ref(true)
</script>

<template>
  <header
    class="bg-[#faffff] text-[#272727] py-4 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center"
  >
    <div class="flex items-center justify-between w-full md:w-auto">
      <img src="/img/logo.png" alt="Logo" class="h-10 mr-4" />
      <button class="md:hidden" @click="showMenu = !showMenu">
        <svg
          v-if="!showMenu"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-16 6h16"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    <nav
      :class="{ flex: showMenu, hidden: !showMenu }"
      class="flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6"
    >
      <a href="/" class="hover:text-gray-300">Accueil</a>
      <a href="/films" class="hover:text-gray-300">Films</a>
      <a href="/acteurs" class="hover:text-gray-300">Acteurs</a>
      <Login />
    </nav>
  </header>
</template>
