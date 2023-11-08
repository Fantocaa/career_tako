import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: "resources/js/app.jsx",
            detectTls: "http://karir.tako.co.id/",
            refresh: true,
            build: { manifest: true, outDir: "./dist" },
            base: "/",
            // root: "./src",
        }),
        react(),
    ],
    optimizeDeps: {
        exclude: ["js-big-decimal"],
    },
});
