import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import alias from './config/alias';
import svgr from './config/svgr';

// Read more on conditional config: https://vitejs.dev/config/#conditional-config

const configuration = ({ mode }) => ({
  plugins: [react(), svgr()],
  resolve: { alias },
  css: {
    preprocessorOptions: {
      scss: {
        // Put Sass options here.
        // More on Sass options: https://sass-lang.com/documentation/cli/dart-sass
      },
    },
    devSourcemap: true,
  },
  server: {
    host: true,
    port: 3000,
  },
  preview: {
    host: true,
    port: 8090,
  },
  publicDir: 'src/public',
  base: mode == 'production' ? '/vite-react-ts-tailwind/' : '/',

  // Vitest configuration.
  // test: {
  //   globals: true,
  //   environment: 'jsdom',
  // },
});

// https://vitejs.dev/config/
export default defineConfig(configuration);
