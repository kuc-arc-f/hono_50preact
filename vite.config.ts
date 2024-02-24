import build from '@hono/vite-cloudflare-pages'
import devServer from '@hono/vite-dev-server'
import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
//
export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      plugins: [preact()], 
      build: {
        lib: {
          entry: [
            './src/main.tsx',
            './src/client/About.tsx',
            './src/client/Test.tsx',
          ],
          formats: ['es'],
          fileName: '[name]',
        },
        rollupOptions: {
          output: {
            dir: './public/static'
          }
        },
        emptyOutDir: false,
        copyPublicDir: false
      }
    }
  } else {
    return {
      plugins: [
        build(),
        devServer({
          entry: 'src/index.tsx'
        })
      ]
    }
  }
})

