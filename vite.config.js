import {
  defineConfig
} from 'vite'

const path = require('path')

export default defineConfig({
  plugins: [],
  define: {
    'process.env': {}
  },
  base: './',
})