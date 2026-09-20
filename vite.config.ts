import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDirBeforeWrite: true,
    sourcemap: true,
    target: 'es2022',
  },
  resolve: {
    alias: {
      '@domain': '/src/domain',
      '@geospatial': '/src/geospatial',
      '@data': '/src/data',
      '@rendering': '/src/rendering',
      '@app': '/src/app',
    },
  },
  server: {
    port: 3000,
    open: false,
  },
});
