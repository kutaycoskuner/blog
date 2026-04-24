import { c as createComponent, a as renderComponent, g as renderScript, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DJz8TuEr.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CiVjtW33.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_BWAr0rPK.mjs';

function TestDispatch($$renderer, $$props) {
	$$renderer.component(($$renderer) => {

		$$renderer.push(`<button>Trigger</button>`);
	});
}

const $$Dispatch = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="test-container"> ${renderComponent($$result2, "TestDispatch", TestDispatch, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/kutay/OneDrive/Documents/GitHub/blog/src/components/TestDispatch.svelte", "client:component-export": "default" })} </div> ` })} ${renderScript($$result, "C:/Users/kutay/OneDrive/Documents/GitHub/blog/src/pages/test/dispatch.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/kutay/OneDrive/Documents/GitHub/blog/src/pages/test/dispatch.astro", void 0);

const $$file = "C:/Users/kutay/OneDrive/Documents/GitHub/blog/src/pages/test/dispatch.astro";
const $$url = "/blog/test/dispatch";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Dispatch,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
