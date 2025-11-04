import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { courseStructure } from '../../src/data/courseStructure'

class LocalStorageMock {
  private store = new Map<string, string>()
  get length() {
    return this.store.size
  }
  clear() {
    this.store.clear()
  }
  getItem(key: string) {
    return this.store.get(key) ?? null
  }
  key(index: number) {
    return Array.from(this.store.keys())[index] ?? null
  }
  removeItem(key: string) {
    this.store.delete(key)
  }
  setItem(key: string, value: string) {
    this.store.set(key, String(value))
  }
}

async function createStore() {
  const mod = await import('../../src/stores/exercises')
  const { useExercisesStore } = mod
  return useExercisesStore()
}

describe('useExercisesStore (AAA)', () => {
  beforeEach(() => {
    // Arrange: fresh Pinia and clean localStorage for each test
    setActivePinia(createPinia())
    globalThis.localStorage = new LocalStorageMock()
  })

  it('initial state and derived values', async () => {
    // Arrange
    const store = await createStore()

    // Compute expected total from the same source of truth as the app
    const expectedTotal = courseStructure.modules.reduce((total, module) => {
      return (
        total +
        module.sections.reduce((sectionTotal, section) => sectionTotal + section.exercises.length, 0)
      )
    }, 0)

    // Act: nothing (we just inspect initial state)

    // Assert
    expect(store.completedExercises).toEqual([])
    expect(store.completedCount).toBe(0)
    expect(store.totalExercises).toBe(expectedTotal)
    expect(store.progressPercentage).toBe(0)
  })

  it('toggleExercise marks an exercise id', async () => {
    // Arrange
    const store = await createStore()

    // Find a real exercise id from the course structure (first one)
    const firstExerciseId = courseStructure.modules[0].sections[0].exercises[0].id

    const total = store.totalExercises

    // Act: toggle on
    store.toggleExercise(firstExerciseId)

    // Assert: after first toggle, it is completed
    expect(store.isExerciseCompleted(firstExerciseId)).toBe(true)
    expect(store.completedExercises).toContain(firstExerciseId)
    expect(store.completedCount).toBe(1)
    expect(store.progressPercentage).toBe(Math.round((1 / total) * 100))
  })

  it('toggleExercise ignores invalid ids (Arrange-Act-Assert)', async () => {
    // Arrange
    const store = await createStore()
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {})

    // Act
    // empty string is invalid per zod schema in the store
    // should not throw, should not change state
    store.toggleExercise('')

    // Assert
    expect(spy).toHaveBeenCalled()
    expect(store.completedCount).toBe(0)
    expect(store.completedExercises).toEqual([])

    spy.mockRestore()
  })
})
