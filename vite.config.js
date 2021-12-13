import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    preprocess: sveltePreprocess(),
    // enable run-time checks when not in production
    // dev: !production,
    // we'll extract any component CSS out into
    // a separate file — better for performance
  })]
})
