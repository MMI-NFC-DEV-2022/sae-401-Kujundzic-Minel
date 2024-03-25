<template>
    <div class="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
      <FormKit type="form" @submit="addFilm" class="space-y-4">
        <!-- Nom du film -->
        <FormKit
          id="film_name"
          name="film_name"
          label="Nom du film"
          validation="required"
          placeholder="Entrez le nom du film"
          class="w-full"
        />
        <!-- Synopsis du film -->
        <FormKit
          id="film_synopsis"
          name="film_synopsis"
          type="textarea"
          label="Synopsis"
          validation="required"
          placeholder="Entrez le synopsis du film"
          class="w-full"
        />
        <!-- Lien de la couverture du film -->
        <FormKit
          id="film_cover"
          name="film_cover"
          type="text"
          label="Lien de la couverture"
          validation="required|url"
          placeholder="Entrez l'URL de la couverture du film"
          class="w-full"
        />
        <!-- Date de sortie du film -->
        <FormKit
          id="film_sortie"
          name="film_sortie"
          type="date"
          label="Date de sortie"
          validation="required"
          placeholder="Sélectionnez la date de sortie"
          class="w-full"
        />
        <!-- Durée du film -->
        <FormKit
          id="film_duree"
          name="film_duree"
          type="time"
          label="Durée"
          validation="required"
          placeholder="Entrez la durée du film"
          class="w-full"
        />
        <!-- Bouton de soumission -->
        <FormKit
          type="submit"
          label="Ajouter le film"
          class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        />
      </FormKit>
    </div>
  </template>
  
  <script setup lang="ts">
  import { FormKit } from '@formkit/vue'
  import { supabase } from '@/supabase'
  
  const addFilm = async (formData) => {
    console.log(formData); // Utilisé pour vérifier les données reçues
  
    const { data, error } = await supabase.from('films_users').insert([
      {
        film_name: formData.film_name,
        film_synopsis: formData.film_synopsis,
        film_cover: formData.film_cover,
        film_sortie: formData.film_sortie,
        film_duree: formData.film_duree
      }
    ]);
  
    if (error) {
      console.error('Erreur lors de l’ajout du film:', error.message);
    } else {
      console.log('Film ajouté avec succès', data);
      // Ajoutez ici tout code supplémentaire à exécuter après l'insertion réussie
    }
  };
  </script>
  