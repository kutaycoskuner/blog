import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DJz8TuEr.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CiVjtW33.mjs';
import { f as frontmatter, C as Content } from '../../chunks/complex_DEsrScuW.mjs';
/* empty css                                       */
export { r as renderers } from '../../chunks/_@astro-renderers_BWAr0rPK.mjs';

const $$TestMdx = createComponent(($$result, $$props, $$slots) => {
  function formatDate(date) {
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric"
    };
    return new Date(date).toLocaleDateString("en-de", options);
  }
  function getLanguageDescription(languageCode) {
    const languageMap = {
      en: "This content is in English.",
      tr: "This content is in Turkish.",
      de: "This content is in German."
      // ... add more languages here
    };
    return languageMap[languageCode] ?? "";
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-c6gd7ldo": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="main markdown" data-astro-cid-c6gd7ldo> ${renderTemplate`<article class="article content" data-astro-cid-c6gd7ldo> <div class="article-meta" data-astro-cid-c6gd7ldo> <h1 data-astro-cid-c6gd7ldo>${frontmatter.title}</h1> <span data-astro-cid-c6gd7ldo>
Published : ${formatDate(frontmatter.created)} </span> <span data-astro-cid-c6gd7ldo>Revision : ${formatDate(frontmatter.updated)}, v${frontmatter.revision} </span> <span data-astro-cid-c6gd7ldo>Language : ${getLanguageDescription(frontmatter.language)} </span> <a href="#" class="to-pdf" data-astro-cid-c6gd7ldo></a> <img src="" alt="" data-astro-cid-c6gd7ldo> </div> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-c6gd7ldo": true })} </article>`} </div> ` })} `;
}, "C:/Users/kutay/OneDrive/Documents/GitHub/blog/src/pages/test/test-mdx.astro", void 0);

const $$file = "C:/Users/kutay/OneDrive/Documents/GitHub/blog/src/pages/test/test-mdx.astro";
const $$url = "/blog/test/test-mdx";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TestMdx,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
