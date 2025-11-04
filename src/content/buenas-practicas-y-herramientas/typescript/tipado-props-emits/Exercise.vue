<template>
  <div class="p-6 space-y-6">
    <h1 class="text-2xl font-bold">TypeScript: tipando props y emits</h1>

    <div class="space-y-2">
      <p class="text-muted-foreground">
        Punto de partida sin tipos estáticos en <code>defineProps</code> y <code>defineEmits</code>. Añade TypeScript.
      </p>
      <ul class="list-disc pl-5 text-sm text-muted-foreground">
        <li>
          Tipa las props con generics de <code>defineProps&lt;T&gt;()</code> en el componente hijo
          <code>Component.vue</code>.
        </li>
        <li>Tipa los eventos con <code>defineEmits&lt;T&gt;()</code> usando tuplas en <code>Component.vue</code>.</li>
        <li>Marca opcionales y añade defaults donde aplique.</li>
      </ul>
    </div>

    <div class="border rounded-md p-4 bg-white space-y-4">
      <h2 class="font-semibold">Vista previa</h2>

      <div class="space-y-3">
        <div class="flex gap-2 items-center">
          <label class="text-sm text-muted-foreground">Prop foo</label>
          <input v-model="foo" class="px-2 py-1 border rounded" placeholder="texto" />
          <label class="text-sm text-muted-foreground ml-4">Prop bar</label>
          <input v-model.number="bar" type="number" class="px-2 py-1 border rounded w-24" placeholder="número" />
        </div>

        <Component :foo="foo" :bar="bar" @change="onChange" @update="onUpdate" />

        <div class="text-sm text-muted-foreground">
          <div><strong>Último change(id):</strong> {{ lastChangeId ?? '—' }}</div>
          <div><strong>Último update(value):</strong> {{ lastUpdateValue ?? '—' }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Component from './Component.vue'

// El wrapper no recibe props ni emite eventos; sirve para pasar props al hijo y observar sus emits.
const foo = ref('hello')
const bar = ref<number | null>(42)

const lastChangeId = ref<number | null>(null)
const lastUpdateValue = ref<string | null>(null)

function onChange(id: number) {
  lastChangeId.value = id
}

function onUpdate(value: string) {
  lastUpdateValue.value = value
}
</script>
