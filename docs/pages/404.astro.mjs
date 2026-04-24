import { c as createComponent, m as maybeRenderHead, r as renderTemplate } from '../chunks/astro/server_DJz8TuEr.mjs';
/* empty css                               */
export { r as renderers } from '../chunks/_@astro-renderers_BWAr0rPK.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="not-found" data-astro-cid-zetdm5md> <h1 data-astro-cid-zetdm5md>
404 <span class="sep" data-astro-cid-zetdm5md>|</span> Post not found
</h1> <p data-astro-cid-zetdm5md>Either not existed, work in progress, or removed.</p> <a href="https://kutaycoskuner.github.io/content_tree" class="back-link" data-astro-cid-zetdm5md>
Go back
</a> </section> `;
}, "C:/Users/kutay/OneDrive/Documents/GitHub/blog/src/pages/404.astro", void 0);

const $$file = "C:/Users/kutay/OneDrive/Documents/GitHub/blog/src/pages/404.astro";
const $$url = "/blog/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
