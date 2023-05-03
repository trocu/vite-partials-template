import { resolve } from "path";
import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");
export default defineConfig({
  base: "/vite-partials-template",
  plugins: [
    handlebars({
      partialDirectory: resolve(root, "partials"),
    }),
  ],
  root,
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
      },
    },
  },
});
