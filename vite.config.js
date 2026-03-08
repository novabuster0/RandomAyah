import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
    plugins: [tailwindcss(), react()],
    build: {
        outDir: "dist",
        sourcemap: false,
        minify: "terser",
        chunkSizeWarningLimit: 1000,
    },
    server: {
        port: 3000,
        open: true,
    },
});
