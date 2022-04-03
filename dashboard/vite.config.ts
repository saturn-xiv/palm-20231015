import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/my/",
  resolve: { alias: { vue: "vue/dist/vue.esm-bundler.js" } },
});
