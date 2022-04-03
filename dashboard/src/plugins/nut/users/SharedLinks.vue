<script setup lang="ts">
import Application from "../../../layouts/application/index.vue";

defineProps<{ title: string }>();
</script>

<template>
  <Application :title="title">
    <a-col :md="{ span: 8, offset: 8 }">
      <a-typography-title>{{ title }}</a-typography-title>
      <slot /> </a-col
  ></Application>
</template>

<style scoped></style>
