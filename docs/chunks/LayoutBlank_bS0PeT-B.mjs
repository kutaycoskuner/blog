import { d as createAstro, c as createComponent, b as addAttribute, e as renderHead, f as renderSlot, r as renderTemplate } from './astro/server_DJz8TuEr.mjs';
/* empty css                                         */

const $$Astro = createAstro("https://kutaycoskuner.github.io");
const $$LayoutBlank = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LayoutBlank;
  const BASE_URL = "/blog/";
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml"${addAttribute(`${BASE_URL}favicon-triangle.svg`, "href")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Blog | Kutay Coskuner</title>${renderHead()}</head> <body> <div class="slot"> ${renderSlot($$result, $$slots["default"])} </div> </body></html>`;
}, "C:/Users/kutay/OneDrive/Documents/GitHub/blog/src/layouts/LayoutBlank.astro", void 0);

export { $$LayoutBlank as $ };
