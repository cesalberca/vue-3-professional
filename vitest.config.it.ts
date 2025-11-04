import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'
import { preview } from '@vitest/browser-preview'

export default defineConfig({
  plugins: [vue()],
  test: {
    include: ['**/*.test.it.ts'],
    name: 'integration',
    browser: {
      provider: preview(),
      enabled: true,
      instances: [{ browser: 'chromium' }],
    },
  },
})
