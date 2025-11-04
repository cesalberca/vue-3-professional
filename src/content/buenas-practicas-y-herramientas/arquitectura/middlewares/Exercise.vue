<template>
  <div class="max-w-2xl mx-auto p-6 space-y-4">
    <h1 class="text-2xl font-bold">Use Cases: del componente al caso de uso</h1>

    <div class="border rounded-md p-4 bg-white">
      <div class="flex items-center justify-between">
        <h2 class="font-semibold">Resultado</h2>
        <button class="px-3 py-1.5 text-sm rounded bg-blue-600 text-white hover:bg-blue-700" @click="loadTodo">
          Volver a cargar
        </button>
      </div>

      <div class="mt-3">
        <pre class="text-sm whitespace-pre-wrap">{{ pretty(todo) }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getTodoQry, useCaseService } from './solution/container.ts'

interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

const todo = ref<Todo | null>(null)

function pretty(value: unknown) {
  return JSON.stringify(value, null, 2)
}

async function loadTodo() {
  const result = await useCaseService.execute(getTodoQry, { id: 1 })
  todo.value = result
}

onMounted(loadTodo)
</script>
