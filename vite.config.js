import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/js/app.jsx", "resources/css/app.css"],
            refresh: true,
        }),
        react(),
    ],
    optimizeDeps: {
        exclude: ["js-big-decimal"],
    },
    // server: {
    //     host: "127.0.0.1",
    //     port: 3000,
    // },
});
