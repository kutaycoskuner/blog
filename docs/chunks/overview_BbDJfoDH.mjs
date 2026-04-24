import { h as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_DJz8TuEr.mjs';

const frontmatter = {
  "template": 1.6,
  "revision": 0.1,
  "title": "Overview",
  "description": "Lecture notes on Uni Leipzig WS 25-26",
  "category": ["repository"],
  "tags": ["mathematics", "logic"],
  "created": "2026-02-18T00:00:00.000Z",
  "updated": "2026-02-18T00:00:00.000Z",
  "author": "lichzelg",
  "translator": null,
  "editor": null,
  "image": null,
  "image_credit": null,
  "language": "en",
  "visibility": false,
  "sort_order": 99,
  "todo": ["add visuals for supremum und maximum", "add visuals for mappings"]
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "todo",
    "text": "todo"
  }, {
    "depth": 1,
    "slug": "themes",
    "text": "themes"
  }, {
    "depth": 2,
    "slug": "boolsche-algebra",
    "text": "boolsche algebra"
  }, {
    "depth": 1,
    "slug": "structure",
    "text": "structure"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    input: "input",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "todo",
      children: "todo"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "gruppen"
      }), "\n", createVNode(_components.li, {
        children: "verbands"
      }), "\n"]
    }), "\n", createVNode(_components.h1, {
      id: "themes",
      children: "themes"
    }), "\n", createVNode(_components.ul, {
      class: "contains-task-list",
      children: ["\n", createVNode(_components.li, {
        class: "task-list-item",
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " aussagenlogik"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " pradikatenlogik"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " lemma von bezout"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ggt"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " extended euklid algorithm"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " kongruenzmodulo"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: ["\n", createVNode(_components.p, {
          children: [createVNode(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " induktion"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "proof types"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "direct"
          }), "\n", createVNode(_components.li, {
            children: "contrapos"
          }), "\n", createVNode(_components.li, {
            children: "proof by contradiction"
          }), "\n", createVNode(_components.li, {
            children: "eqiv"
          }), "\n", createVNode(_components.li, {
            children: "case sep"
          }), "\n", createVNode(_components.li, {
            children: "induction"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "relations"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: ["\n", createVNode(_components.p, {
              children: "aqrel (ref, sym, trans)"
            }), "\n"]
          }), "\n", createVNode(_components.li, {
            children: ["\n", createVNode(_components.p, {
              children: "aqklassen"
            }), "\n"]
          }), "\n", createVNode(_components.li, {
            children: ["\n", createVNode(_components.p, {
              children: "ordrel (ref, antisym, trans)"
            }), "\n"]
          }), "\n", createVNode(_components.li, {
            children: ["\n", createVNode(_components.p, {
              children: "hasse diagram"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "partitions"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "kardinality"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "proof of reflexivity"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "proof of symmetry"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "proof of antisymmetry"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "proof of transitivity"
        }), "\n"]
      }), "\n", createVNode(_components.li, {}), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "proof of eqivalence relation"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "proof of inversibility: injection; surjection"
        }), "\n"]
      }), "\n", createVNode(_components.li, {}), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "verbands"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "todo: for every verband gilt:"
          }), "\n", createVNode(_components.li, {
            children: "for distributivity"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "verband isomorphismus"
        }), "\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "bijective, meet and join preserving ordnungserhaltende."
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "unterverband"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.h2, {
          id: "boolsche-algebra",
          children: "boolsche algebra"
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h1, {
      id: "structure",
      children: "structure"
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

const url = "C:/Users/kutay/OneDrive/Documents/GitHub/content_hub/collections/lecture_notes-2025fall-discrete_structures/overview.mdx";
const file = "C:/Users/kutay/OneDrive/Documents/GitHub/content_hub/collections/lecture_notes-2025fall-discrete_structures/overview.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/kutay/OneDrive/Documents/GitHub/content_hub/collections/lecture_notes-2025fall-discrete_structures/overview.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
