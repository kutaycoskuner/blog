import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DJz8TuEr.mjs';
import { g as getSystemTheme, t as theme, $ as $$Layout } from '../chunks/Layout_CiVjtW33.mjs';
/* empty css                                 */
import { f as fallback, d as attr, c as escape_html, g as bind_props, h as store_get, e as ensure_array_like, b as attr_class, s as stringify, u as unsubscribe_stores } from '../chunks/_@astro-renderers_BWAr0rPK.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_BWAr0rPK.mjs';

function formatDate(inputDate, format) {
  const date = new Date(inputDate);
  if (isNaN(date.getTime())) {
    return "Invalid date";
  }
  const options = {
    yyyy: date.getFullYear(),
    yy: String(date.getFullYear()).slice(-2),
    MM: String(date.getMonth() + 1).padStart(2, "0"),
    M: date.getMonth() + 1,
    dd: String(date.getDate()).padStart(2, "0"),
    d: date.getDate(),
    HH: String(date.getHours()).padStart(2, "0"),
    H: date.getHours(),
    mm: String(date.getMinutes()).padStart(2, "0"),
    m: date.getMinutes(),
    ss: String(date.getSeconds()).padStart(2, "0"),
    s: date.getSeconds(),
    a: date.getHours() < 12 ? "AM" : "PM"
  };
  return format.replace(/yyyy|yy|MM|M|dd|d|HH|H|mm|m|ss|s|a/g, (match) => {
    return String(options[match]);
  });
}
function getLanguageDescription(language_code) {
  const language_map = {
    en: "This article is English.",
    tr: "This article is Turkish.",
    es: "This article is Spanish.",
    fr: "This article is French.",
    de: "This article is German.",
    it: "This article is Italian.",
    pt: "This article is Portuguese.",
    ru: "This article is Russian.",
    zh: "This article is Chinese."
  };
  return language_map[language_code] ?? "";
}

function ContentTreePreview($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let selectedContent = fallback($$props['selectedContent'], null);

		$$renderer.push(`<div class="preview svelte-1lz0gvl">`);

		if (selectedContent != undefined && selectedContent != null) {
			$$renderer.push('<!--[-->');

			if (selectedContent.image && selectedContent.image !== "") {
				$$renderer.push('<!--[-->');
				$$renderer.push(`<img${attr('src', selectedContent.image)}${attr('alt', selectedContent.name || "Article preview background")} class="preview-image svelte-1lz0gvl"/>`);
			} else {
				$$renderer.push('<!--[!-->');
			}

			$$renderer.push(`<!--]--> `);

			if (selectedContent.name !== "") {
				$$renderer.push('<!--[-->');
				$$renderer.push(`<div class="content-title svelte-1lz0gvl">${escape_html(selectedContent.name)}</div>`);
			} else {
				$$renderer.push('<!--[!-->');
			}

			$$renderer.push(`<!--]--> `);

			if (selectedContent.abstract !== "") {
				$$renderer.push('<!--[-->');
				$$renderer.push(`<div class="content-abstract svelte-1lz0gvl">${escape_html(selectedContent.abstract)}</div>`);
			} else {
				$$renderer.push('<!--[!-->');
			}

			$$renderer.push(`<!--]--> `);

			if (selectedContent.author) {
				$$renderer.push('<!--[-->');
				$$renderer.push(`<div class="content-author svelte-1lz0gvl">`);

				if (selectedContent.language) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<div class="content-language svelte-1lz0gvl">${escape_html(getLanguageDescription(selectedContent.language))}<br/></div>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> `);

				if (selectedContent.editor) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<div class="content-editor svelte-1lz0gvl">edited by ${escape_html(selectedContent.editor)}<br/></div>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> `);

				if (selectedContent.translator) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<div class="content-translator svelte-1lz0gvl">translated by ${escape_html(selectedContent.translator)}<br/></div>`);
				} else {
					$$renderer.push('<!--[!-->');
				}

				$$renderer.push(`<!--]--> ${escape_html(selectedContent.author)},
                ${escape_html(formatDate(selectedContent.created, "yyyy"))}</div>`);
			} else {
				$$renderer.push('<!--[!-->');
			}

			$$renderer.push(`<!--]-->`);
		} else {
			$$renderer.push('<!--[!-->');
		}

		$$renderer.push(`<!--]--></div>`);
		bind_props($$props, { selectedContent });
	});
}

function ContentTree($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;

		let // reactive derived state
			currentDisplayTheme,
			invertedColorComputed;

		let displayMode = $$props['displayMode'];

		const selectedContentBase = {
			name: "",
			author: "",
			created: "",
			updated: "",
			translator: "",
			editor: "",
			abstract: "",
			keywords: [],
			language: "",
			visibility: false,
			image: "",
			imagecredit: ""
		};
		let selectedContent = selectedContentBase;
		let tree = [];
		let allCollapsed;

		function checkAllCollapsed(nodes) {
			return nodes.every((node) => {
				if (!node.children || node.children.length === 0) {
					return true;
				}

				if (!node.collapsed) {
					return false;
				}

				return checkAllCollapsed(node.children);
			});
		}

		currentDisplayTheme = store_get($$store_subs ??= {}, '$theme', theme) === "system"
			? getSystemTheme()
			: store_get($$store_subs ??= {}, '$theme', theme);

		invertedColorComputed = currentDisplayTheme === "dark";
		allCollapsed = tree.length > 0 ? checkAllCollapsed(tree) : false;

		if (displayMode === "selection") {
			$$renderer.push('<!--[-->');
			$$renderer.push(`<div class="linear-display">this is sekret not implemented linear display.</div>`);
		} else {
			$$renderer.push('<!--[!-->');
			$$renderer.push(`<div class="content-navigator no-select svelte-nu25dt"><div class="tree-container svelte-nu25dt"><!--[-->`);

			const each_array = ensure_array_like(tree);

			for (let $$index_2 = 0, $$length = each_array.length; $$index_2 < $$length; $$index_2++) {
				let node = each_array[$$index_2];

				if (node.children && node.children.length > 0) {
					$$renderer.push('<!--[-->');
					$$renderer.push(`<div class="folder svelte-nu25dt"><span role="button" tabindex="0" class="toggle-btn svelte-nu25dt">${escape_html(node.collapsed ? "+" : "-")}</span> <span class="folder-name svelte-nu25dt">${escape_html(node.name)}</span></div> `);

					if (!node.collapsed) {
						$$renderer.push('<!--[-->');
						$$renderer.push(`<div class="children svelte-nu25dt"><!--[-->`);

						const each_array_1 = ensure_array_like(node.children);

						for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
							let child = each_array_1[$$index_1];

							if (child.children && child.children.length > 0) {
								$$renderer.push('<!--[-->');
								$$renderer.push(`<div class="folder svelte-nu25dt"><span role="button" tabindex="0"${attr('aria-expanded', !child.collapsed)} class="toggle-btn svelte-nu25dt">${escape_html(child.collapsed ? "+" : "-")}</span> <span class="folder-name svelte-nu25dt">${escape_html(child.name)}</span></div> `);

								if (!child.collapsed) {
									$$renderer.push('<!--[-->');
									$$renderer.push(`<div class="children svelte-nu25dt"><!--[-->`);

									const each_array_2 = ensure_array_like(child.children);

									for (let $$index = 0, $$length = each_array_2.length; $$index < $$length; $$index++) {
										let subChild = each_array_2[$$index];

										if (subChild.visible) {
											$$renderer.push('<!--[-->');
											$$renderer.push(`<a${attr('href', subChild.link)} class="leaf-link svelte-nu25dt" target="_blank">${escape_html(subChild.name)}</a>`);
										} else {
											$$renderer.push('<!--[!-->');
										}

										$$renderer.push(`<!--]-->`);
									}

									$$renderer.push(`<!--]--></div>`);
								} else {
									$$renderer.push('<!--[!-->');
								}

								$$renderer.push(`<!--]-->`);
							} else {
								$$renderer.push('<!--[!-->');
								$$renderer.push(`<a${attr('href', child.link)} class="leaf-link svelte-nu25dt" target="_blank">${escape_html(child.name)}</a>`);
							}

							$$renderer.push(`<!--]-->`);
						}

						$$renderer.push(`<!--]--></div>`);
					} else {
						$$renderer.push('<!--[!-->');
					}

					$$renderer.push(`<!--]-->`);
				} else {
					$$renderer.push('<!--[!-->');
					$$renderer.push(`<div class="leaf svelte-nu25dt"><a${attr('href', node.link)} class="leaf-link svelte-nu25dt" target="_blank">${escape_html(node.name)}</a></div>`);
				}

				$$renderer.push(`<!--]-->`);
			}

			$$renderer.push(`<!--]--> <div class="toggle-container"><div class="toggle-all-btn svelte-nu25dt"><button type="button"${attr_class('toggle-all-btn expand-collapse svelte-nu25dt', void 0, {
				'inverted-color': invertedColorComputed,
				'reverse': allCollapsed
			})}${attr('aria-expanded', allCollapsed)}${attr('aria-label', allCollapsed ? "Expand All Content" : "Collapse All Content")}><img src="icons/arrow_left-256.png" alt="Toggle expand/collapse" class="svelte-nu25dt"/></button></div></div></div></div>`);
		}

		$$renderer.push(`<!--]--> `);

		ContentTreePreview($$renderer, {
			selectedContent,
			style: `display: ${stringify(displayMode === 'selection' && selectedContent ? 'block' : 'none')}`
		});

		$$renderer.push(`<!---->`);

		if ($$store_subs) unsubscribe_stores($$store_subs);

		bind_props($$props, { displayMode });
	});
}

function BlogApp($$renderer) {
	let displayMode = "linear";

	console.log("Initial displayMode:", displayMode);

	ContentTree($$renderer, { displayMode });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="main" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "BlogApp", BlogApp, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/kutay/OneDrive/Documents/GitHub/blog/src/components/BlogApp.svelte", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} </div> ` })} `;
}, "C:/Users/kutay/OneDrive/Documents/GitHub/blog/src/pages/index.astro", void 0);

const $$file = "C:/Users/kutay/OneDrive/Documents/GitHub/blog/src/pages/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
