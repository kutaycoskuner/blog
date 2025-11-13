// astro.config.ts
// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
    // for rendering markdown
    integrations: [mdx(), svelte()],
    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],

        syntaxHighlight: "shiki",
        shikiConfig: {
            theme: 'vitesse-dark',
            // themes: {                   // https://shiki.style/
            //     light: "vitesse-light",   // vitesse-light
            //     sepia: "rose-pine-dawn",
            //     dark: "vitesse-dark",
            // },
            

        },
    },

    // for static site rendering
    site: "https://kutaycoskuner.github.io",
    base: "/blog/",
    output: "static",

    // for making content alias
    vite: {
        resolve: {
            alias: {
                "@components": "/src/components",
            },
        },
    },
});
