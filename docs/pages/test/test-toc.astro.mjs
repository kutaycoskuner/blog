import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead, F as Fragment, b as addAttribute } from '../../chunks/astro/server_DJz8TuEr.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CiVjtW33.mjs';
import { f as frontmatter, C as Content } from '../../chunks/complex_DEsrScuW.mjs';
import { g as getToc } from '../../chunks/getToc_IeGE9zYm.mjs';
/* empty css                                       */
export { r as renderers } from '../../chunks/_@astro-renderers_BWAr0rPK.mjs';

const $$TestToc = createComponent(($$result, $$props, $$slots) => {
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
  const toc = getToc("src/content/complex.mdx");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-5haemw3o": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="main markdown" data-astro-cid-5haemw3o> ${renderTemplate`<article class="article content" data-astro-cid-5haemw3o> <div class="article-meta" data-astro-cid-5haemw3o> <h1 data-astro-cid-5haemw3o>${frontmatter.title}</h1> <span data-astro-cid-5haemw3o>
Published : ${formatDate(frontmatter.created)} </span> <span data-astro-cid-5haemw3o>
Revision : ${formatDate(frontmatter.updated)}, v
${frontmatter.revision}${" "} </span> <span data-astro-cid-5haemw3o>
Language :${" "} ${getLanguageDescription(frontmatter.language)}${" "} </span> <a href="#" class="to-pdf" data-astro-cid-5haemw3o></a> <img src="" alt="" data-astro-cid-5haemw3o> </div> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-5haemw3o": true })} </article>`} </div> <div class="toc-container no-select" data-astro-cid-5haemw3o> ${renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-5haemw3o": true }, { "default": ($$result3) => renderTemplate` <div class="toc-title" data-astro-cid-5haemw3o> <span style="color: var(--col)" data-astro-cid-5haemw3o> ${frontmatter?.title} </span> </div> ${toc.map((link) => renderTemplate`<span${addAttribute(`toc-item toc-level-${link.depth}`, "class")}${addAttribute(`margin-left: ${link.depth === 2 ? "0.5em" : link.depth === 3 ? "1.5em" : link.depth >= 4 ? "2.5em" : "0"};`, "style")} data-astro-cid-5haemw3o> <a class="toc-content"${addAttribute(`#${link.slug}`, "href")} data-astro-cid-5haemw3o> ${link.text} </a> <br data-astro-cid-5haemw3o> </span>`)}` })}`} </div> ` })} `;
}, "C:/Users/kutay/OneDrive/Documents/GitHub/blog/src/pages/test/test-toc.astro", void 0);

const $$file = "C:/Users/kutay/OneDrive/Documents/GitHub/blog/src/pages/test/test-toc.astro";
const $$url = "/blog/test/test-toc";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$TestToc,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
