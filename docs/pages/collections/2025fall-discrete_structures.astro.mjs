import { c as createComponent, a as renderComponent, r as renderTemplate, b as addAttribute, m as maybeRenderHead } from '../../chunks/astro/server_DJz8TuEr.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CiVjtW33.mjs';
import { g as getToc } from '../../chunks/getToc_IeGE9zYm.mjs';
import { g as getCollection } from '../../chunks/_astro_content_DfDawyym.mjs';
import path from 'node:path';
/* empty css                                    */
export { r as renderers } from '../../chunks/_@astro-renderers_BWAr0rPK.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const COLLECTION_NAME = "collections/lecture_notes-2025fall-discrete_structures";
  const allEntries = await getCollection(COLLECTION_NAME);
  const posts = allEntries.filter(
    (entry) => entry.id.endsWith(".md") || entry.id.endsWith(".mdx")
  ).sort((a, b) => {
    const orderA = a.data.sort_order ?? 9999;
    const orderB = b.data.sort_order ?? 9999;
    return orderA - orderB;
  });
  if (!posts || posts.length === 0) {
    return new Response(
      "Post not found. Removed, not existed, or work in progress.",
      { status: 404 }
    );
  }
  const baseDir = path.resolve("src/content/" + COLLECTION_NAME);
  const postTocs = await Promise.all(
    posts.map(async (post) => {
      const filePath = path.join(baseDir, post.id);
      const slug = post.slug ?? post.id.replace(/\.(md|mdx)$/, "");
      return {
        postData: post.data,
        toc: await getToc(filePath),
        slug
      };
    })
  );
  function formatDate(date) {
    return new Date(date).toLocaleDateString("en-de", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }
  function getLanguageDescription(languageCode) {
    const languageMap = {
      en: "This content is in English.",
      tr: "This content is in Turkish.",
      de: "This content is in German."
    };
    return languageMap[languageCode] ?? "";
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-t4u5wtro": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="main markdown" data-astro-cid-t4u5wtro> ', ' </div> <div class="toc-container no-select" data-astro-cid-t4u5wtro> ', ' </div> <script>\n        let activeArticle = null;\n\n        const articles = document.querySelectorAll("article");\n        const tocSections = document.querySelectorAll(".toc-sections");\n        const tocTitles = document.querySelectorAll(".toc-title");\n\n        // Show/hide TOC sections on mouse enter\n        articles.forEach((article) => {\n            article.addEventListener("mouseenter", () => {\n                activeArticle = article.id;\n                tocSections.forEach((section) => {\n                    section.style.display =\n                        section.dataset.slug === activeArticle\n                            ? "block"\n                            : "none";\n                });\n            });\n        });\n\n        // Click TOC title to scroll & set active article\n        tocTitles.forEach((title) => {\n            title.addEventListener("click", () => {\n                const slug = title.parentElement.dataset.slug;\n                const targetArticle = document.getElementById(slug);\n                if (!targetArticle) return;\n\n                // scroll to top of the article\n                targetArticle.scrollIntoView({ behavior: "smooth" });\n\n                // set active article\n                activeArticle = slug;\n                tocSections.forEach((section) => {\n                    section.style.display =\n                        section.dataset.slug === activeArticle\n                            ? "block"\n                            : "none";\n                });\n            });\n        });\n\n        // Smooth scroll for TOC links\n        document.querySelectorAll(".toc-content").forEach((link) => {\n            link.addEventListener("click", (e) => {\n                e.preventDefault();\n                const target = document.getElementById(\n                    link.getAttribute("href").substring(1)\n                );\n                target?.scrollIntoView({ behavior: "smooth" });\n            });\n        });\n    <\/script> '])), maybeRenderHead(), await Promise.all(
    posts.map(async (post) => {
      const { Content } = await post.render();
      const postData = post.data;
      if (!postData.visibility) return null;
      return renderTemplate`<article class="article content"${addAttribute(post.slug, "id")} data-astro-cid-t4u5wtro> <div class="article-meta" data-astro-cid-t4u5wtro> <h1 data-astro-cid-t4u5wtro>${postData.title}</h1> <span data-astro-cid-t4u5wtro>
Created at: ${formatDate(postData.created)} </span> <span data-astro-cid-t4u5wtro>
Last Revision: ${formatDate(postData.updated)}, v${postData.revision} </span> <span data-astro-cid-t4u5wtro>
Language:${" "} ${getLanguageDescription(postData.language)} </span> </div> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-t4u5wtro": true })} </article>`;
    })
  ), postTocs.map(({ postData, toc, slug }) => {
    if (!postData.visibility) return null;
    return renderTemplate`<div class="toc-article"${addAttribute(slug, "data-slug")} data-astro-cid-t4u5wtro> <div class="toc-title" data-astro-cid-t4u5wtro> <span style="color: var(--col)" data-astro-cid-t4u5wtro> <b data-astro-cid-t4u5wtro>${postData.title}</b> </span> </div> <div class="toc-sections"${addAttribute(slug, "data-slug")} data-astro-cid-t4u5wtro> ${toc.map((link) => renderTemplate`<span${addAttribute(`toc-item toc-level-${link.depth}`, "class")}${addAttribute(`margin-left: ${link.depth === 2 ? "0.5em" : link.depth === 3 ? "1.5em" : link.depth >= 4 ? "2.5em" : "0"};`, "style")} data-astro-cid-t4u5wtro> <a class="toc-content"${addAttribute(`#${link.slug}`, "href")} data-astro-cid-t4u5wtro> ${link.text} </a> <br data-astro-cid-t4u5wtro> </span>`)} </div> </div>`;
  })) })} `;
}, "C:/Users/kutay/OneDrive/Documents/GitHub/blog/src/pages/collections/2025fall-discrete_structures/index.astro", void 0);

const $$file = "C:/Users/kutay/OneDrive/Documents/GitHub/blog/src/pages/collections/2025fall-discrete_structures/index.astro";
const $$url = "/blog/collections/2025fall-discrete_structures";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
