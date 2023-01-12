import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
module.exports = {
  outDir: 'build'
}
// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [react()]
})
