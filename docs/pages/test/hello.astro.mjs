import { d as createAstro, c as createComponent, e as renderHead, r as renderTemplate } from '../../chunks/astro/server_DJz8TuEr.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_BWAr0rPK.mjs';

const $$Astro = createAstro("https://kutaycoskuner.github.io");
const $$Hello = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hello;
  const title = "Hello Astro";
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><title>${title}</title>${renderHead()}</head> <body> <h1>Hello, Astro!</h1> <p>This is your first simple page.</p> </body></html>`;
}, "C:/Users/kutay/OneDrive/Documents/GitHub/blog/src/pages/test/hello.astro", void 0);

const $$file = "C:/Users/kutay/OneDrive/Documents/GitHub/blog/src/pages/test/hello.astro";
const $$url = "/blog/test/hello";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Hello,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
