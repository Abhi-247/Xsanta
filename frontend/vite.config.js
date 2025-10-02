import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "dist",   // ✅ Vercel looks here
  },
  server: {
    port: 3000,       // optional, only for local dev
  }
});
