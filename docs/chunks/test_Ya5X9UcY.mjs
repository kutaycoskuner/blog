import { h as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_DJz8TuEr.mjs';

const frontmatter = {
  "template": 1.6,
  "revision": 0.3,
  "title": "test",
  "description": "Notes on Mathematics",
  "category": ["repository"],
  "tags": ["mathematics", "logic"],
  "created": "2025-11-29T00:00:00.000Z",
  "updated": "2025-11-07T00:00:00.000Z",
  "author": "lichzelg",
  "translator": null,
  "editor": null,
  "image": "first-blog-post.jpg",
  "image_credit": null,
  "language": "en",
  "visibility": true,
  "sort_order": 1
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
      children: "good video on continuity"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.youtube.com/watch?v=3KMqU5j7irw",
          children: "https://www.youtube.com/watch?v=3KMqU5j7irw"
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "parabol drawing"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.desmos.com/calculator/dz0kvw0qjg",
          children: "https://www.desmos.com/calculator/dz0kvw0qjg"
        })
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "introduction about limits   khan academy"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://www.youtube.com/watch?v=riXcZT2ICjA&list=PLSQl0a2vh4HBReS9_V4QYOnqP2aguahxS",
          children: "https://www.youtube.com/watch?v=riXcZT2ICjA&list=PLSQl0a2vh4HBReS9_V4QYOnqP2aguahxS"
        })
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

const url = "C:/Users/kutay/OneDrive/Documents/GitHub/content_hub/collections/math/test.mdx";
const file = "C:/Users/kutay/OneDrive/Documents/GitHub/content_hub/collections/math/test.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/kutay/OneDrive/Documents/GitHub/content_hub/collections/math/test.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
