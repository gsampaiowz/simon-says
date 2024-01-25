import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import Sitemap from 'vite-plugin-sitemap'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Sitemap()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
