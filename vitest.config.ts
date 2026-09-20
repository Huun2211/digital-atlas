import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    include: ['tests/**/*.test.ts'],
    globals: true,
    environment: 'node',
    coverage: {
      provider: 'v8',
      include: ['src/**/*.ts'],
      exclude: ['src/**/*.d.ts'],
    },
  },
  resolve: {
    alias: {
      '@domain': path.resolve(__dirname, './src/domain'),
      '@geospatial': path.resolve(__dirname, './src/geospatial'),
      '@data': path.resolve(__dirname, './src/data'),
      '@rendering': path.resolve(__dirname, './src/rendering'),
      '@app': path.resolve(__dirname, './src/app'),
    },
  },
});
