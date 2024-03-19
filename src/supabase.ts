import { createClient } from '@supabase/supabase-js';
import { ref } from 'vue';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
export const user = ref(null); // Initialiser avec null

export async function checkUser() {
  const { data, error } = await supabase.auth.getUser();
  if (data) {
    user.value = data.user;
  }
}
supabase.auth.onAuthStateChange((event, session) => {
  user.value = session?.user ?? null;
});
