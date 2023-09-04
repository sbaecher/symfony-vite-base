import { defineConfig } from "vite";
import symfonyPlugin from "vite-plugin-symfony";

export default defineConfig({
    plugins: [
        symfonyPlugin()
    ],
    base: './',
    build: {
        outDir: './public',
        emptyOutDir: false,
        rollupOptions: {
            input: {
                app: "./app/js/app.js",
                main: "./app/scss/main.scss"
            },
        }
    },
});
