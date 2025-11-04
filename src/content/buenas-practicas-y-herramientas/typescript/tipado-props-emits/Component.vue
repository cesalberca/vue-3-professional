<template>
  <div class="space-y-4">
    <div class="flex gap-2 items-center">
      <span class="text-sm text-muted-foreground">Foo:</span>
      <span class="px-2 py-1 bg-gray-100 rounded">{{ props.foo }}</span>
      <span class="text-sm text-muted-foreground ml-4">Bar:</span>
      <span class="px-2 py-1 bg-gray-100 rounded">{{ props.bar ?? '—' }}</span>
    </div>

    <div class="flex gap-2 items-center">
      <button class="px-3 py-1.5 text-sm rounded bg-blue-600 text-white hover:bg-blue-700" @click="emit('change', 1)">
        Emit change(1)
      </button>
      <button
        class="px-3 py-1.5 text-sm rounded bg-emerald-600 text-white hover:bg-emerald-700"
        @click="emit('update', input)"
      >
        Emit update(input)
      </button>
      <input v-model="input" class="px-2 py-1 border rounded" placeholder="nuevo valor" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Punto de partida SIN tipos estáticos. El alumno debe tipar estas APIs con TypeScript.
const props = defineProps({
  foo: { type: String, required: true },
  bar: Number,
})

const emit = defineEmits(['change', 'update'])

const input = ref('2020')
</script>
