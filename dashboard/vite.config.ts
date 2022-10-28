import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/my/",
  build: { manifest: true },
  server: {
    host: "0.0.0.0",
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:8080/api",
        changeOrigin: true,
      },
    },
  },
});
