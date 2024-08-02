import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "@shared",
        replacement: fileURLToPath(new URL("./src/components/shared", import.meta.url)),
      },
      {
        find: "@elements",
        replacement: fileURLToPath(new URL("./src/components/elements", import.meta.url)),
      },
      {
        find: "@pages",
        replacement: fileURLToPath(new URL("./src/pages", import.meta.url)),
      },
      {
        find: "@hooks",
        replacement: fileURLToPath(new URL("./src/hooks", import.meta.url)),
      },
      {
        find: "@constants",
        replacement: fileURLToPath(new URL("./src/constants", import.meta.url)),
      },
      {
        find: "@enums",
        replacement: fileURLToPath(new URL("./src/enums", import.meta.url)),
      },
    ],
  },
});
