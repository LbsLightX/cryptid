import { defineConfig } from 'astro/config';
import nodejs from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
    vite: {
        build: {
            minify: false
        }
    },
    output: "hybrid",
    adapter: nodejs({
        mode: "standalone"
    })
});
