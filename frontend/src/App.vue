<script setup lang="ts">
import { ref } from "vue";

type Mighty = { x: string; y: number }

const x: Mighty = { x: "test", y: 12 };

const value = ref(0);
</script>

<template>
  <button @click="value++">this is a value: {{ value }} {{ JSON.stringify(x) }}</button>
</template>

<style lang="scss" scoped>
$color: red;

button {
  color: $color;
}
</style>
