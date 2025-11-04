import { describe, it, expect } from 'vitest'
import { render } from 'vitest-browser-vue'
import HelloWorld from './HelloWorld.vue'

describe('HelloWorld (browser)', () => {
  it('properly handles v-model', async () => {
    const screen = render(HelloWorld)

    await expect.element(screen.getByText('Hi, my name is Alice')).toBeInTheDocument()

    const usernameInput = screen.getByLabelText(/username/i)

    await usernameInput.fill('Bob')

    await expect.element(screen.getByText('Hi, my name is Bob')).toBeInTheDocument()
  })
})
