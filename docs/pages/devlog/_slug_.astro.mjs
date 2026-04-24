import { d as createAstro, c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DJz8TuEr.mjs';
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
  const allPosts = /* #__PURE__ */ Object.assign({"../../content/devlog/20260404-immersion-pixel-1.md": () => import('../../chunks/20260404-immersion-pixel-1_C5lYZQ1x.mjs'),"../../content/devlog/20260408-immersion-pixel-2.md": () => import('../../chunks/20260408-immersion-pixel-2_8AAiMbWu.mjs'),"../../content/devlog/20260410-immersion-pixel-3.md": () => import('../../chunks/20260410-immersion-pixel-3_CT4B0XNI.mjs')});
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
  const post = await getEntry("devlog", slug);
  if (!post) {
    return new Response(null, { status: 404 });
  }
  const { data, render } = post;
  const { Content } = await render();
  const baseDir = path.resolve("src/content/devlog");
  const potentialFiles = [
    path.join(baseDir, `${slug}.mdx`),
    path.join(baseDir, `${slug}.md`)
  ];
  let filePath = potentialFiles.find((p) => fs.existsSync(p));
  if (!filePath) {
    console.error(`Content not found for slug: ${slug}`);
    return;
  }
  await getToc(filePath);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-uhaqmce5": true }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="main markdown" data-astro-cid-uhaqmce5> ', ' </div>   <div class="main" data-astro-cid-uhaqmce5> <div id="comments-giscus" data-astro-cid-uhaqmce5> <script src="https://giscus.app/client.js" data-repo="kutaycoskuner/blog" data-repo-id="R_kgDOQT2KRQ" data-category="Comments" data-category-id="DIC_kwDOQT2KRc4Cx1Ia" data-mapping="pathname" data-strict="0" data-reactions-enabled="1" data-emit-metadata="0" data-input-position="top" data-theme="transparent_dark" data-lang="en" data-loading="lazy" crossorigin="anonymous" async><\/script> </div> </div> '])), maybeRenderHead(), data?.visibility && renderTemplate`<article class="article content" data-astro-cid-uhaqmce5>  ${renderComponent($$result2, "Content", Content, { "data-astro-cid-uhaqmce5": true })} </article>`) })} `;
}, "C:/Users/kutay/OneDrive/Documents/GitHub/blog/src/pages/devlog/[slug].astro", void 0);

const $$file = "C:/Users/kutay/OneDrive/Documents/GitHub/blog/src/pages/devlog/[slug].astro";
const $$url = "/blog/devlog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
