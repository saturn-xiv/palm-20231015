import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/desktop/",
  server: {
    host: "0.0.0.0",
    port: 3000,
    proxy: {
      "/api": "http://127.0.0.1:8080",
      "/assets": "http://127.0.0.1:8080",
      "/themes": "http://127.0.0.1:8080",
    },
  },
});
