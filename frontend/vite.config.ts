import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Aliases allow to create shortcuts to import or require certain modules easily.
    alias: [
      // Defines an alias for "@" pointing to the "src" directory using path.resolve method.
      // "__dirname" is a global property that returns the current working directory path.
      { find: "@", replacement: path.resolve(__dirname, "src") },
    ],
  },
  server: {
    proxy: {
      "/api": {
        target: process.env.VITE_BASE_URL || "http://localhost:5100",
        changeOrigin: true,
        secure: process.env.NODE_ENV === "production",
      },
    },
  },
});
