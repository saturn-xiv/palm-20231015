<script setup lang="ts">
import { useStore } from "vuex";

const store = useStore();
</script>

<template>
  <a-space>&copy;{{ store.state.site.copyright }}</a-space>
</template>

<style scoped></style>
