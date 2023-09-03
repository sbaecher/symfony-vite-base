import { defineConfig } from "vite";
import symfonyPlugin from "vite-plugin-symfony";

export default defineConfig({
    plugins: [
        symfonyPlugin(),
    ],
    base: './',
    build: {
        outDir: './public/app',
        emptyOutDir: false,
        rollupOptions: {
            input: {
                app: "./app/js/app.js",
                theme: "./app/scss/main.scss"
            },
        }
    },
});
