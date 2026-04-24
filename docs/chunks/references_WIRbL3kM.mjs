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
  "author": "lichzelg",
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
  return [];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "[1]"
    }), "\n", createVNode(_components.p, {
      children: "1.22"
    }), "\n", createVNode(_components.p, {
      children: "2.25"
    }), "\n", createVNode(_components.p, {
      children: "3.26"
    }), "\n", createVNode(_components.p, {
      children: "4.56"
    }), "\n", createVNode(_components.p, {
      children: "5.42"
    }), "\n", createVNode(_components.p, {
      children: "introduction about limits   khan academy"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: createVNode(_components.a, {
            href: "https://www.youtube.com/watch?v=riXcZT2ICjA&list=PLSQl0a2vh4HBReS9_V4QYOnqP2aguahxS",
            children: "https://www.youtube.com/watch?v=riXcZT2ICjA&list=PLSQl0a2vh4HBReS9_V4QYOnqP2aguahxS"
          })
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "pointwise and uniform convergence visualized"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: createVNode(_components.a, {
              href: "https://www.youtube.com/watch?v=GsORKmBCLuI",
              children: "https://www.youtube.com/watch?v=GsORKmBCLuI"
            })
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: createVNode(_components.a, {
              href: "https://www.youtube.com/watch?v=WCq3sRzsJfs",
              children: "https://www.youtube.com/watch?v=WCq3sRzsJfs"
            })
          }), "\n"]
        }), "\n"]
      }), "\n"]
    })]
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

const url = "C:/Users/kutay/OneDrive/Documents/GitHub/content_hub/collections/lecture_notes-2025fall-analysis/references.mdx";
const file = "C:/Users/kutay/OneDrive/Documents/GitHub/content_hub/collections/lecture_notes-2025fall-analysis/references.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/kutay/OneDrive/Documents/GitHub/content_hub/collections/lecture_notes-2025fall-analysis/references.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
