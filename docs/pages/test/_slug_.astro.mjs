import { d as createAstro, c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead, F as Fragment, b as addAttribute } from '../../chunks/astro/server_DJz8TuEr.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CiVjtW33.mjs';
import { g as getToc } from '../../chunks/getToc_IeGE9zYm.mjs';
import { b as getEntryBySlug } from '../../chunks/_astro_content_DfDawyym.mjs';
/* empty css                                     */
export { r as renderers } from '../../chunks/_@astro-renderers_BWAr0rPK.mjs';

const $$Astro = createAstro("https://kutaycoskuner.github.io");
async function getStaticPaths() {
  const allPosts = /* #__PURE__ */ Object.assign({"../../content/blog/complex.mdx": () => import('../../chunks/complex_BmLXBOFX.mjs')});
  return Object.keys(allPosts).map((path) => {
    const slug = path.split("/").pop()?.replace(/\.mdx$/, "");
    return { params: { slug } };
  });
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const post = await getEntryBySlug("blog", slug);
  const { data } = await post;
  const { Content } = await post.render();
  const postToc = await getToc(`src/content/blog/${slug}.mdx`);
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-gdpm2lik": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="main markdown" data-astro-cid-gdpm2lik> ${data?.visibility && renderTemplate`<article class="article content" data-astro-cid-gdpm2lik> <div class="article-meta" data-astro-cid-gdpm2lik> <h1 data-astro-cid-gdpm2lik>${data.title}</h1> <span data-astro-cid-gdpm2lik>
Published : ${formatDate(data.created)} </span> <span data-astro-cid-gdpm2lik>
Revision : ${formatDate(data.updated)}, v
${data.revision}${" "} </span> <span data-astro-cid-gdpm2lik>
Language :${" "} ${getLanguageDescription(data.language)}${" "} </span> <a href="#" class="to-pdf" data-astro-cid-gdpm2lik></a> <img src="" alt="" data-astro-cid-gdpm2lik> </div> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-gdpm2lik": true })} </article>`} </div> <div class="toc-container no-select" data-astro-cid-gdpm2lik> ${data?.visibility && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-gdpm2lik": true }, { "default": async ($$result3) => renderTemplate` <div class="toc-title" data-astro-cid-gdpm2lik> <span style="color: var(--col)" data-astro-cid-gdpm2lik> ${data?.title} </span> </div> ${postToc.map((link) => renderTemplate`<span${addAttribute(`toc-item toc-level-${link.depth}`, "class")}${addAttribute(`margin-left: ${link.depth === 2 ? "0.5em" : link.depth === 3 ? "1.5em" : link.depth >= 4 ? "2.5em" : "0"};`, "style")} data-astro-cid-gdpm2lik> <a class="toc-content"${addAttribute(`#${link.slug}`, "href")} data-astro-cid-gdpm2lik> ${link.text} </a> <br data-astro-cid-gdpm2lik> </span>`)}` })}`} </div> ` })} `;
}, "C:/Users/kutay/OneDrive/Documents/GitHub/blog/src/pages/test/[slug].astro", void 0);

const $$file = "C:/Users/kutay/OneDrive/Documents/GitHub/blog/src/pages/test/[slug].astro";
const $$url = "/blog/test/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
