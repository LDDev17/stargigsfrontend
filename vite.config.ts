import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';
<<<<<<< HEAD

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
=======
import vitePluginSvgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    vitePluginSvgr()
>>>>>>> 7a216819bc5559359aee0bf228a887b2ace267a0
  ],
})
