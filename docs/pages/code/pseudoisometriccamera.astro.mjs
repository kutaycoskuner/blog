import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../../chunks/astro/server_DJz8TuEr.mjs';
import { readFileSync } from 'node:fs';
import { $ as $$LayoutBlank } from '../../chunks/LayoutBlank_bS0PeT-B.mjs';
import { createHighlighter } from 'shiki';
/* empty css                                                    */
export { r as renderers } from '../../chunks/_@astro-renderers_BWAr0rPK.mjs';

const $$PseudoIsometricCamera = createComponent(async ($$result, $$props, $$slots) => {
  const highlighter = await createHighlighter({
    themes: ["vitesse-dark"],
    // list of themes
    langs: ["csharp"]
    // list of languages you need
  });
  const path = new URL(
    "../../../public/code/PseudoIsometricCamera.cs",
    import.meta.url
  );
  const scriptSource = readFileSync(path, "utf8");
  const highlightedCode = highlighter.codeToHtml(scriptSource, {
    lang: "csharp",
    theme: "vitesse-dark"
  });
  return renderTemplate`${renderComponent($$result, "LayoutBlank", $$LayoutBlank, { "data-astro-cid-bpjxlkgn": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="shiki-code" data-astro-cid-bpjxlkgn>${unescapeHTML(highlightedCode)}</div> ` })} `;
}, "C:/Users/kutay/OneDrive/Documents/GitHub/blog/src/pages/code/PseudoIsometricCamera.astro", void 0);

const $$file = "C:/Users/kutay/OneDrive/Documents/GitHub/blog/src/pages/code/PseudoIsometricCamera.astro";
const $$url = "/blog/code/PseudoIsometricCamera";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$PseudoIsometricCamera,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
