import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Legt den Port für den Entwicklungsserver fest
    open: true,
    fs: {
      // Umleitung aller Anfragen auf die Wurzel-URL auf die index.html-Datei
      strict: false,
      allow: ["/"],
    },
  },
});
