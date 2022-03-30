<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div>
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <div>{{ $t("languages.en-US") }}</div>
  </div>
</template>

<style></style>
