import { d as createAstro, c as createComponent, a as renderComponent, r as renderTemplate, F as Fragment, b as addAttribute, m as maybeRenderHead } from '../../chunks/astro/server_DJz8TuEr.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CiVjtW33.mjs';
import { g as getToc } from '../../chunks/getToc_IeGE9zYm.mjs';
import { a as getEntry } from '../../chunks/_astro_content_DfDawyym.mjs';
import fs from 'node:fs';
import path from 'node:path';
/* empty css                                     */
export { r as renderers } from '../../chunks/_@astro-renderers_BWAr0rPK.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://kutaycoskuner.github.io");
async function getStaticPaths() {
  const allPosts = /* #__PURE__ */ Object.assign({});
  return Object.keys(allPosts).map((path2) => {
    const slug = path2.split("/").pop()?.replace(/\.(mdx|md)$/, "");
    if (!slug) return null;
    return { params: { slug } };
  }).filter(Boolean);
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const post = await getEntry("essays", slug);
  if (!post) {
    return new Response(null, { status: 404 });
  }
  const { data, render } = post;
  const { Content } = await render();
  const baseDir = path.resolve("src/content/essays");
  const potentialFiles = [
    path.join(baseDir, `${slug}.mdx`),
    path.join(baseDir, `${slug}.md`)
  ];
  let filePath = potentialFiles.find((p) => fs.existsSync(p));
  if (!filePath) {
    console.error(`Content not found for slug: ${slug}`);
    return;
  }
  const postToc = await getToc(filePath);
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-xaw2mkdd": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="main markdown" data-astro-cid-xaw2mkdd> ', ' </div> <div class="toc-container no-select" data-astro-cid-xaw2mkdd> ', ' </div>  <div class="main" data-astro-cid-xaw2mkdd> <div id="comments-giscus" data-astro-cid-xaw2mkdd> <script src="https://giscus.app/client.js" data-repo="kutaycoskuner/blog" data-repo-id="R_kgDOQT2KRQ" data-category="Comments" data-category-id="DIC_kwDOQT2KRc4Cx1Ia" data-mapping="pathname" data-strict="0" data-reactions-enabled="1" data-emit-metadata="0" data-input-position="top" data-theme="transparent_dark" data-lang="en" data-loading="lazy" crossorigin="anonymous" async><\/script> </div> </div> '])), maybeRenderHead(), data?.visibility && renderTemplate`<article class="article content" data-astro-cid-xaw2mkdd> <div class="article-meta" data-astro-cid-xaw2mkdd> <h1 data-astro-cid-xaw2mkdd>${data.title}</h1> <span data-astro-cid-xaw2mkdd>Published : ${formatDate(data.created)}</span> <span data-astro-cid-xaw2mkdd>
Revision : ${formatDate(data.updated)}, v
${data.revision}${" "} </span> <span data-astro-cid-xaw2mkdd>
Language : ${getLanguageDescription(data.language)}${" "} </span> <a href="#" class="to-pdf" data-astro-cid-xaw2mkdd></a>  </div> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-xaw2mkdd": true })} </article>`, data?.visibility && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-xaw2mkdd": true }, { "default": async ($$result3) => renderTemplate` <div class="toc-title" data-astro-cid-xaw2mkdd> <span style="color: var(--col)" data-astro-cid-xaw2mkdd> <b data-astro-cid-xaw2mkdd>${data?.title}</b> </span> </div> ${postToc.map((link) => renderTemplate`<span${addAttribute(`toc-item toc-level-${link.depth}`, "class")}${addAttribute(`margin-left: ${link.depth === 2 ? "0.5em" : link.depth === 3 ? "1.5em" : link.depth >= 4 ? "2.5em" : "0"};`, "style")} data-astro-cid-xaw2mkdd> <a class="toc-content"${addAttribute(`#${link.slug}`, "href")} data-astro-cid-xaw2mkdd> ${link.text} </a> <br data-astro-cid-xaw2mkdd> </span>`)}` })}`) })} `;
}, "C:/Users/kutay/OneDrive/Documents/GitHub/blog/src/pages/essays/[slug].astro", void 0);

const $$file = "C:/Users/kutay/OneDrive/Documents/GitHub/blog/src/pages/essays/[slug].astro";
const $$url = "/blog/essays/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
