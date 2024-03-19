<script setup lang="ts">
import { ref } from 'vue';
import { supabase } from '@/supabase';
import Login from '@/components/login.vue';
</script>

<template>
  <header class="bg-[#faffff] text-[#272727] py-4 px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center">
    <div class="flex items-center mb-4 sm:mb-0">
      <img src="/img/logo.png" alt="Logo" class="h-8 mr-4" />
      <form class="flex items-center">
        <button
          class="bg-[#E3E8F2] text-[#405473] px-4 py-2 rounded-l-full hover:bg-[#334561] focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <input
          type="text"
          placeholder="Recherche"
          class="bg-[#E3E8F2] text-[#405473] px-4 py-2 rounded-r-full focus:outline-none"
        />
      </form>
    </div>
    <nav class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
      <a href="/" class="hover:text-gray-300">Accueil</a>
      <a href="/films" class="hover:text-gray-300">Films</a>
      <a href="/artistes" class="hover:text-gray-300">Artistes</a>
      <Login />
    </nav>
  </header>
</template>