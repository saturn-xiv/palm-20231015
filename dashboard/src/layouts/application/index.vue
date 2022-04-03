<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "vuex";

import Copyright from "../Copyright.vue";
import HeaderLogo from "../HeaderLogo.vue";

const props = defineProps<{ title: string }>();
const store = useStore();

onMounted(() => {
  document.title = `${props.title} | ${store.state.site.title}`;
});
</script>

<template>
  <a-layout>
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <HeaderLogo />
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <a-row :gutter="[16, 16]">
        <slot />
      </a-row>
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }"
      ><Copyright
    /></a-layout-footer>
  </a-layout>
</template>

<style scoped></style>
