import vue from '@vitejs/plugin-vue'
import {defineConfig} from 'vitest/config'
import {playwright} from '@vitest/browser-playwright'

export default defineConfig({
  plugins: [vue()],
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
