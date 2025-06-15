// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://jfsarmien2.github.io',
  base: "js-portfolio",
  integrations: [react(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});