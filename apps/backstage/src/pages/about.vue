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
  <div class="about">
    <h1>This is an about page.</h1>
    
    <div>
      <h2>Counter</h2>
      <button @click="handleAddCounter">
        Add
      </button>
      <div>
        {{ counter }}
      </div>
      <button @click="handleSubtractCounter">
        Subtract
      </button>
    </div>
  </div>
</template>

<style>
@media (min-width: 768px) {
  .about {
    max-width: 768px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 1rem;
  }
}
</style>
