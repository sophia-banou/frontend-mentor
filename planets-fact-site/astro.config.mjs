// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://sophia-banou.github.io",
  base: "/frontend-mentor/planets-fact-size",
  prefetch: true,
  integrations: [react()],
});
