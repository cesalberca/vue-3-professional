import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'
import {defineConfig} from 'vitest/config'
import {playwright} from '@vitest/browser-playwright'

export default defineConfig({
  plugins: [tsconfigPaths(), vue()],
  define: {
    'process.env': JSON.stringify({}),
  },
  test: {
    include: ['**/*.test.it.ts'],
    name: 'integration',
    browser: {
      provider: playwright(),
      enabled: true,
      instances: [{ browser: 'chromium' }],
    },
  },
})
