import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill' 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), NodeGlobalsPolyfillPlugin({ buffer: true })],
})
