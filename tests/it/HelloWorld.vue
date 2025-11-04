<template>
  <form @submit.prevent>
    <label for="username">Username</label>
    <input id="username" v-model="name" />
    <p>Hi, my name is {{ name }}</p>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const name = ref('Alice')
</script>
