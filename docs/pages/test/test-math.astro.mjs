import { d as createAstro, c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DJz8TuEr.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CiVjtW33.mjs';
import { C as Content } from '../../chunks/complex_DEsrScuW.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_BWAr0rPK.mjs';

const $$Astro = createAstro("https://kutaycoskuner.github.io");
const $$TestMath = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TestMath;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<article> <!-- Render the MDX content --> ${renderComponent($$result2, "Post2", Content, {})} </article> ` })}`;
}, "C:/Users/kutay/OneDrive/Documents/GitHub/blog/src/pages/test/test-math.astro", void 0);

const $$file = "C:/Users/kutay/OneDrive/Documents/GitHub/blog/src/pages/test/test-math.astro";
const $$url = "/blog/test/test-math";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$TestMath,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
