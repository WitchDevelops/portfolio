import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const keys = [
  'VITE_SANITY_PROJECT_ID',
  'VITE_SANITY_TOKEN',
]
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const processEnv = {}
  keys.forEach(key => {
    processEnv[key] = env[key]
  })
  return {
    define: {
      'process.env': env
    },
    plugins: [react()],
  }
})
