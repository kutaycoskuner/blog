import { h as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_DJz8TuEr.mjs';

const frontmatter = {
  "template": 1.6,
  "revision": 0.1,
  "title": "References",
  "description": "Lecture notes on Uni Leipzig WS 25-26",
  "category": ["repository"],
  "tags": ["mathematics", "logic"],
  "created": "2025-10-23T00:00:00.000Z",
  "updated": "2025-10-23T00:00:00.000Z",
  "author": "kutay coskuner",
  "translator": null,
  "editor": null,
  "image": null,
  "image_credit": null,
  "language": "en",
  "visibility": false,
  "sort_order": 5,
  "todo": ["add visuals for supremum und maximum", "add visuals for mappings"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "how-do-we-define-maximum-on-ordered-pairs",
    "text": "how do we define maximum on ordered pairs?"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(_components.ul, {
    children: ["\n", createVNode(_components.li, {
      children: ["\n", createVNode(_components.p, {
        children: "[video] What are Lattices?"
      }), "\n", createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: createVNode(_components.a, {
            href: "https://www.youtube.com/watch?v=FcgN_ijcU6g",
            children: "https://www.youtube.com/watch?v=FcgN_ijcU6g"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.li, {
      children: ["\n", createVNode(_components.p, {
        children: "[video-serie] using tikz latex"
      }), "\n", createVNode(_components.ul, {
        children: ["\n", createVNode(_components.li, {
          children: createVNode(_components.a, {
            href: "https://www.youtube.com/watch?v=ft4Kg9emK1k&list=PLC1buENRLE7Iif2y8Q2YAWBIxZMJCl1xI",
            children: "https://www.youtube.com/watch?v=ft4Kg9emK1k&list=PLC1buENRLE7Iif2y8Q2YAWBIxZMJCl1xI"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.li, {
      children: ["\n", createVNode(_components.h2, {
        id: "how-do-we-define-maximum-on-ordered-pairs",
        children: "how do we define maximum on ordered pairs?"
      }), "\n"]
    }), "\n"]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
const url = "C:/Users/kutay/OneDrive/Documents/GitHub/content_hub/collections/lecture_notes-2025fall-discrete_structures/references.mdx";
const file = "C:/Users/kutay/OneDrive/Documents/GitHub/content_hub/collections/lecture_notes-2025fall-discrete_structures/references.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/kutay/OneDrive/Documents/GitHub/content_hub/collections/lecture_notes-2025fall-discrete_structures/references.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
