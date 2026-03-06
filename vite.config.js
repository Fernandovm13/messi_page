import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Si vas a usar dominio propio de Namecheap, deja '/'
             // Si usaras la URL de github (usuario.github.io/repo), pon '/nombre-del-repo/'
})