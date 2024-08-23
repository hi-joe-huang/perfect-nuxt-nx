<script setup lang="ts">
const counter = ref(1)

function handleAddCounter() {
  counter.value++
}

function handleSubtractCounter() {
  counter.value--
}
</script>

<template>
  <div class="flex items-center gap-4">
    <h2>Counter</h2>
    <button class="border-2 border-red-300 p-2" @click="handleAddCounter">
      Add
    </button>
    <div>
      {{ counter }}
    </div>
    <button class="border-2 border-red-300 p-2" @click="handleSubtractCounter">
      Subtract
    </button>
  </div>
</template>

<style scoped></style>
