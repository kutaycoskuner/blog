import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DJz8TuEr.mjs';
import { $ as $$Layout } from '../chunks/Layout_CiVjtW33.mjs';
import { e as ensure_array_like, a as attr_style, b as attr_class, c as escape_html, s as stringify } from '../chunks/_@astro-renderers_BWAr0rPK.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_BWAr0rPK.mjs';
/* empty css                                 */

const logs = [
	{
		visibility: true,
		date: "2026-04-10",
		title: "Pixel Scene: Color Quantization and Outlines",
		slug: "devlog/20260410-immersion-pixel-3",
		category: "devlog",
		keywords: [
			"graphics",
			"webgl",
			"real-time-rendering",
			"three.js"
		]
	},
	{
		visibility: true,
		date: "2026-04-08",
		title: "Pixel Scene: Light Interactions",
		slug: "devlog/20260408-immersion-pixel-2",
		category: "devlog",
		keywords: [
			"graphics",
			"webgl",
			"real-time-rendering",
			"three.js"
		]
	},
	{
		visibility: true,
		date: "2026-04-04",
		title: "Pixel Scene: Custom Shader Grass Meadow",
		slug: "devlog/20260404-immersion-pixel-1",
		category: "devlog",
		keywords: [
			"graphics",
			"webgl",
			"real-time-rendering",
			"three.js"
		]
	},
	{
		visibility: true,
		date: "2025-11-25",
		title: "Implemeting transform functions for peseudo-isometric camera in Unity",
		slug: "tutorials/20251114-unity_pseudoisometric",
		category: "tutorial",
		keywords: [
			"graphics",
			"camera",
			"isometric",
			"unity"
		]
	}
];

function DevLog($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let filteredEntries, categories;
    let entries = logs;
    let selectedCategory = "all";
    const categoryColors = {
      all: "#9aa4b2",
      // soft slate
      default: "#7c7c7c",
      // neutral gray
      devlog: "#7fd1ae",
      // soft mint green
      opinion: "#d8a0ff",
      // lavender
      essay: "#f2c48d",
      // warm peach
      tutorial: "#8ecbff",
      // soft sky blue
      post: "#c8c8c8",
      // light gray
      curated: "#f5d76e"
      // soft yellow (external content / inspiration)
    };
    function getColor(cat) {
      return categoryColors[cat] ?? categoryColors.default;
    }
    function formatDate(dateStr) {
      const date = new Date(dateStr);
      const day = String(date.getDate()).padStart(2, "0");
      const month = date.toLocaleString("en-US", { month: "short" });
      const year = date.getFullYear();
      return `${day} ${month} ${year}`;
    }
    filteredEntries = entries ;
    categories = ["all", ...new Set(entries.map((e) => e.category))];
    $$renderer2.push(`<div class="devlog svelte-ux8g31"><div class="title svelte-ux8g31">#devlog</div>  <div class="filters svelte-ux8g31">filters: <!--[-->`);
    const each_array = ensure_array_like(categories);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let cat = each_array[$$index];
      $$renderer2.push(`<button${attr_style(` color: ${stringify(getColor(cat))}; border-color: ${stringify(getColor(cat))}cc; background-color: ${stringify(getColor(cat))}10; `)}${attr_class("svelte-ux8g31", void 0, { "selected": selectedCategory === cat })}>${escape_html(cat)}</button>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="center svelte-ux8g31"><div class="list svelte-ux8g31"><!--[-->`);
    const each_array_1 = ensure_array_like(filteredEntries);
    for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
      let entry = each_array_1[$$index_2];
      $$renderer2.push(`<div class="entry svelte-ux8g31" role="link" tabindex="0"><span class="date svelte-ux8g31">${escape_html(formatDate(entry.date))}</span> <span class="category svelte-ux8g31"${attr_style(`color: ${stringify(getColor(entry.category))}`)}>${escape_html(entry.category)}</span> <span class="name svelte-ux8g31">${escape_html(entry.title)}</span> <div class="keywords svelte-ux8g31"><!--[-->`);
      const each_array_2 = ensure_array_like(entry.keywords);
      for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
        let k = each_array_2[$$index_1];
        $$renderer2.push(`<span class="tag svelte-ux8g31">#${escape_html(k)}</span>`);
      }
      $$renderer2.push(`<!--]--></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></div>`);
  });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="main"> ${renderComponent($$result2, "DevLog", DevLog, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/kutay/OneDrive/Documents/GitHub/blog/src/components/DevLog.svelte", "client:component-export": "default" })} </div> ` })} `;
}, "C:/Users/kutay/OneDrive/Documents/GitHub/blog/src/pages/devlog/index.astro", void 0);

const $$file = "C:/Users/kutay/OneDrive/Documents/GitHub/blog/src/pages/devlog/index.astro";
const $$url = "/blog/devlog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
