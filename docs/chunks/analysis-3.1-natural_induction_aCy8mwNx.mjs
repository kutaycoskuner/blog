import { h as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_DJz8TuEr.mjs';

const frontmatter = {
  "template": 1.6,
  "revision": 0.3,
  "title": "Natural Numbers and the Principle of Induction",
  "description": "Lecture notes on Uni Leipzig WS 25-26",
  "category": ["repository"],
  "tags": ["mathematics", "logic"],
  "created": "2025-10-23T00:00:00.000Z",
  "updated": "2026-01-05T00:00:00.000Z",
  "author": "Kutay Coskuner",
  "translator": null,
  "editor": null,
  "image": null,
  "image_credit": null,
  "language": "en",
  "visibility": false,
  "sort_order": 3,
  "todo": ["add visuals for supremum und maximum", "add visuals for mappings"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "natural-numbers-and-the-principle-of-induction",
    "text": "Natural Numbers and the Principle of Induction"
  }, {
    "depth": 2,
    "slug": "31-the-natural-numbers",
    "text": "3.1. The Natural Numbers"
  }, {
    "depth": 2,
    "slug": "32-principle-of-induction",
    "text": "3.2. Principle of Induction"
  }, {
    "depth": 2,
    "slug": "unit-3-natural-numbers-and-the-principle-of-induction-natürliche-zahlen-und-induktionsprinzip",
    "text": "Unit 3: Natural Numbers and the Principle of Induction (Natürliche Zahlen und Induktionsprinzip)"
  }, {
    "depth": 2,
    "slug": "31-the-natural-numbers-die-natürlichen-zahlen",
    "text": "3.1. The Natural Numbers (Die natürlichen Zahlen)"
  }];
}
function _createMdxContent(props) {
  const _components = {
    annotation: "annotation",
    h2: "h2",
    li: "li",
    math: "math",
    mi: "mi",
    mn: "mn",
    mo: "mo",
    mrow: "mrow",
    mtext: "mtext",
    ol: "ol",
    p: "p",
    semantics: "semantics",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "natural-numbers-and-the-principle-of-induction",
      children: "Natural Numbers and the Principle of Induction"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Natural Numbers and the Principle of Induction (Natürliche Zahlen und Induktionsprinzip)"
      })
    }), "\n", createVNode(_components.h2, {
      id: "31-the-natural-numbers",
      children: "3.1. The Natural Numbers"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "3.1. The Natural Numbers (Die natürlichen Zahlen)"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Definition 3.1 (Inductive Set - Induktive Menge)"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["A set ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mi, {
                    children: "M"
                  }), createVNode(_components.mo, {
                    children: "⊂"
                  }), createVNode(_components.mi, {
                    mathvariant: "double-struck",
                    children: "R"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "M \\subset \\mathbb{R}"
                })]
              })
            })
          }), createVNode(_components.span, {
            class: "katex-html",
            "aria-hidden": "true",
            children: [createVNode(_components.span, {
              class: "base",
              children: [createVNode(_components.span, {
                class: "strut",
                style: {
                  height: "0.7224em",
                  verticalAlign: "-0.0391em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.10903em"
                },
                children: "M"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), createVNode(_components.span, {
                class: "mrel",
                children: "⊂"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), createVNode(_components.span, {
              class: "base",
              children: [createVNode(_components.span, {
                class: "strut",
                style: {
                  height: "0.6889em"
                }
              }), createVNode(_components.span, {
                class: "mord mathbb",
                children: "R"
              })]
            })]
          })]
        }), " is called ", createVNode(_components.strong, {
          children: "inductive (induktiv)"
        }), " if:\n", createVNode(_components.ol, {
          children: ["\n", createVNode(_components.li, {
            children: createVNode(_components.span, {
              class: "katex",
              children: [createVNode(_components.span, {
                class: "katex-mathml",
                children: createVNode(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: createVNode(_components.semantics, {
                    children: [createVNode(_components.mrow, {
                      children: [createVNode(_components.mn, {
                        children: "1"
                      }), createVNode(_components.mo, {
                        children: "∈"
                      }), createVNode(_components.mi, {
                        children: "M"
                      })]
                    }), createVNode(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "1 \\in M"
                    })]
                  })
                })
              }), createVNode(_components.span, {
                class: "katex-html",
                "aria-hidden": "true",
                children: [createVNode(_components.span, {
                  class: "base",
                  children: [createVNode(_components.span, {
                    class: "strut",
                    style: {
                      height: "0.6835em",
                      verticalAlign: "-0.0391em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord",
                    children: "1"
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), createVNode(_components.span, {
                    class: "mrel",
                    children: "∈"
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  })]
                }), createVNode(_components.span, {
                  class: "base",
                  children: [createVNode(_components.span, {
                    class: "strut",
                    style: {
                      height: "0.6833em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    style: {
                      marginRight: "0.10903em"
                    },
                    children: "M"
                  })]
                })]
              })]
            })
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.span, {
              class: "katex",
              children: [createVNode(_components.span, {
                class: "katex-mathml",
                children: createVNode(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: createVNode(_components.semantics, {
                    children: [createVNode(_components.mrow, {
                      children: [createVNode(_components.mi, {
                        mathvariant: "normal",
                        children: "∀"
                      }), createVNode(_components.mi, {
                        children: "n"
                      }), createVNode(_components.mo, {
                        children: "∈"
                      }), createVNode(_components.mi, {
                        mathvariant: "double-struck",
                        children: "R"
                      }), createVNode(_components.mo, {
                        children: ":"
                      }), createVNode(_components.mi, {
                        children: "n"
                      }), createVNode(_components.mo, {
                        children: "∈"
                      }), createVNode(_components.mi, {
                        children: "M"
                      }), createVNode(_components.mo, {
                        children: "⇒"
                      }), createVNode(_components.mi, {
                        children: "n"
                      }), createVNode(_components.mo, {
                        children: "+"
                      }), createVNode(_components.mn, {
                        children: "1"
                      }), createVNode(_components.mo, {
                        children: "∈"
                      }), createVNode(_components.mi, {
                        children: "M"
                      })]
                    }), createVNode(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\forall n \\in \\mathbb{R}: n \\in M \\Rightarrow n+1 \\in M"
                    })]
                  })
                })
              }), createVNode(_components.span, {
                class: "katex-html",
                "aria-hidden": "true",
                children: [createVNode(_components.span, {
                  class: "base",
                  children: [createVNode(_components.span, {
                    class: "strut",
                    style: {
                      height: "0.7335em",
                      verticalAlign: "-0.0391em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord",
                    children: "∀"
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    children: "n"
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), createVNode(_components.span, {
                    class: "mrel",
                    children: "∈"
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  })]
                }), createVNode(_components.span, {
                  class: "base",
                  children: [createVNode(_components.span, {
                    class: "strut",
                    style: {
                      height: "0.6889em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord mathbb",
                    children: "R"
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), createVNode(_components.span, {
                    class: "mrel",
                    children: ":"
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  })]
                }), createVNode(_components.span, {
                  class: "base",
                  children: [createVNode(_components.span, {
                    class: "strut",
                    style: {
                      height: "0.5782em",
                      verticalAlign: "-0.0391em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    children: "n"
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), createVNode(_components.span, {
                    class: "mrel",
                    children: "∈"
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  })]
                }), createVNode(_components.span, {
                  class: "base",
                  children: [createVNode(_components.span, {
                    class: "strut",
                    style: {
                      height: "0.6833em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    style: {
                      marginRight: "0.10903em"
                    },
                    children: "M"
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), createVNode(_components.span, {
                    class: "mrel",
                    children: "⇒"
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  })]
                }), createVNode(_components.span, {
                  class: "base",
                  children: [createVNode(_components.span, {
                    class: "strut",
                    style: {
                      height: "0.6667em",
                      verticalAlign: "-0.0833em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    children: "n"
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  }), createVNode(_components.span, {
                    class: "mbin",
                    children: "+"
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  })]
                }), createVNode(_components.span, {
                  class: "base",
                  children: [createVNode(_components.span, {
                    class: "strut",
                    style: {
                      height: "0.6835em",
                      verticalAlign: "-0.0391em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord",
                    children: "1"
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), createVNode(_components.span, {
                    class: "mrel",
                    children: "∈"
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  })]
                }), createVNode(_components.span, {
                  class: "base",
                  children: [createVNode(_components.span, {
                    class: "strut",
                    style: {
                      height: "0.6833em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    style: {
                      marginRight: "0.10903em"
                    },
                    children: "M"
                  })]
                })]
              })]
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Definition 3.3 (Natural Numbers - Natürliche Zahlen)"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["The set of ", createVNode(_components.strong, {
          children: ["Natural Numbers (", createVNode(_components.span, {
            class: "katex",
            children: [createVNode(_components.span, {
              class: "katex-mathml",
              children: createVNode(_components.math, {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                children: createVNode(_components.semantics, {
                  children: [createVNode(_components.mrow, {
                    children: createVNode(_components.mi, {
                      mathvariant: "double-struck",
                      children: "N"
                    })
                  }), createVNode(_components.annotation, {
                    encoding: "application/x-tex",
                    children: "\\mathbb{N}"
                  })]
                })
              })
            }), createVNode(_components.span, {
              class: "katex-html",
              "aria-hidden": "true",
              children: createVNode(_components.span, {
                class: "base",
                children: [createVNode(_components.span, {
                  class: "strut",
                  style: {
                    height: "0.6889em"
                  }
                }), createVNode(_components.span, {
                  class: "mord mathbb",
                  children: "N"
                })]
              })
            })]
          }), ")"]
        }), " is defined as the unique inductive set that is a subset of all other inductive sets:\r\n", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mi, {
                    mathvariant: "double-struck",
                    children: "N"
                  }), createVNode(_components.mo, {
                    children: ":"
                  }), createVNode(_components.mo, {
                    children: "="
                  }), createVNode(_components.mo, {
                    children: "⋂"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "{"
                  }), createVNode(_components.mi, {
                    children: "M"
                  }), createVNode(_components.mo, {
                    children: "⊂"
                  }), createVNode(_components.mi, {
                    mathvariant: "double-struck",
                    children: "R"
                  }), createVNode(_components.mo, {
                    children: ":"
                  }), createVNode(_components.mi, {
                    children: "M"
                  }), createVNode(_components.mtext, {
                    children: " is inductive"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "}"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\mathbb{N} := \\bigcap \\{M \\subset \\mathbb{R}: M \\text{ is inductive}\\}"
                })]
              })
            })
          }), createVNode(_components.span, {
            class: "katex-html",
            "aria-hidden": "true",
            children: [createVNode(_components.span, {
              class: "base",
              children: [createVNode(_components.span, {
                class: "strut",
                style: {
                  height: "0.6889em"
                }
              }), createVNode(_components.span, {
                class: "mord mathbb",
                children: "N"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), createVNode(_components.span, {
                class: "mrel",
                children: ":="
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), createVNode(_components.span, {
              class: "base",
              children: [createVNode(_components.span, {
                class: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), createVNode(_components.span, {
                class: "mop op-symbol small-op",
                style: {
                  position: "relative",
                  top: "0em"
                },
                children: "⋂"
              }), createVNode(_components.span, {
                class: "mopen",
                children: "{"
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.10903em"
                },
                children: "M"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), createVNode(_components.span, {
                class: "mrel",
                children: "⊂"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), createVNode(_components.span, {
              class: "base",
              children: [createVNode(_components.span, {
                class: "strut",
                style: {
                  height: "0.6889em"
                }
              }), createVNode(_components.span, {
                class: "mord mathbb",
                children: "R"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), createVNode(_components.span, {
                class: "mrel",
                children: ":"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), createVNode(_components.span, {
              class: "base",
              children: [createVNode(_components.span, {
                class: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.10903em"
                },
                children: "M"
              }), createVNode(_components.span, {
                class: "mord text",
                children: createVNode(_components.span, {
                  class: "mord",
                  children: " is inductive"
                })
              }), createVNode(_components.span, {
                class: "mclose",
                children: "}"
              })]
            })]
          })]
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "32-principle-of-induction",
      children: "3.2. Principle of Induction"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Principle of Induction (Das Induktionsprinzip)"
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Satz 3.5 (Principle of Mathematical Induction - Das Prinzip der vollständigen Induktion)"
      }), "\r\nLet ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: [createVNode(_components.mi, {
                  children: "A"
                }), createVNode(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), createVNode(_components.mi, {
                  children: "n"
                }), createVNode(_components.mo, {
                  stretchy: "false",
                  children: ")"
                })]
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "A(n)"
              })]
            })
          })
        }), createVNode(_components.span, {
          class: "katex-html",
          "aria-hidden": "true",
          children: createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "1em",
                verticalAlign: "-0.25em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              children: "A"
            }), createVNode(_components.span, {
              class: "mopen",
              children: "("
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              children: "n"
            }), createVNode(_components.span, {
              class: "mclose",
              children: ")"
            })]
          })
        })]
      }), " be a statement depending on ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: [createVNode(_components.mi, {
                  children: "n"
                }), createVNode(_components.mo, {
                  children: "∈"
                }), createVNode(_components.mi, {
                  mathvariant: "double-struck",
                  children: "N"
                })]
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "n \\in \\mathbb{N}"
              })]
            })
          })
        }), createVNode(_components.span, {
          class: "katex-html",
          "aria-hidden": "true",
          children: [createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "0.5782em",
                verticalAlign: "-0.0391em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              children: "n"
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), createVNode(_components.span, {
              class: "mrel",
              children: "∈"
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            })]
          }), createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "0.6889em"
              }
            }), createVNode(_components.span, {
              class: "mord mathbb",
              children: "N"
            })]
          })]
        })]
      }), ". If the following two conditions are met:"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Base Case (Induktionsanfang - IA)"
        }), ": ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mi, {
                    children: "A"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), createVNode(_components.mn, {
                    children: "1"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "A(1)"
                })]
              })
            })
          }), createVNode(_components.span, {
            class: "katex-html",
            "aria-hidden": "true",
            children: createVNode(_components.span, {
              class: "base",
              children: [createVNode(_components.span, {
                class: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "A"
              }), createVNode(_components.span, {
                class: "mopen",
                children: "("
              }), createVNode(_components.span, {
                class: "mord",
                children: "1"
              }), createVNode(_components.span, {
                class: "mclose",
                children: ")"
              })]
            })
          })]
        }), " is true."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Inductive Step (Induktionsschritt - IS)"
        }), ": For all ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mi, {
                    children: "n"
                  }), createVNode(_components.mo, {
                    children: "∈"
                  }), createVNode(_components.mi, {
                    mathvariant: "double-struck",
                    children: "N"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "n \\in \\mathbb{N}"
                })]
              })
            })
          }), createVNode(_components.span, {
            class: "katex-html",
            "aria-hidden": "true",
            children: [createVNode(_components.span, {
              class: "base",
              children: [createVNode(_components.span, {
                class: "strut",
                style: {
                  height: "0.5782em",
                  verticalAlign: "-0.0391em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "n"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), createVNode(_components.span, {
                class: "mrel",
                children: "∈"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), createVNode(_components.span, {
              class: "base",
              children: [createVNode(_components.span, {
                class: "strut",
                style: {
                  height: "0.6889em"
                }
              }), createVNode(_components.span, {
                class: "mord mathbb",
                children: "N"
              })]
            })]
          })]
        }), ", the implication ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mi, {
                    children: "A"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), createVNode(_components.mi, {
                    children: "n"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), createVNode(_components.mo, {
                    children: "⇒"
                  }), createVNode(_components.mi, {
                    children: "A"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), createVNode(_components.mi, {
                    children: "n"
                  }), createVNode(_components.mo, {
                    children: "+"
                  }), createVNode(_components.mn, {
                    children: "1"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "A(n) \\Rightarrow A(n+1)"
                })]
              })
            })
          }), createVNode(_components.span, {
            class: "katex-html",
            "aria-hidden": "true",
            children: [createVNode(_components.span, {
              class: "base",
              children: [createVNode(_components.span, {
                class: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "A"
              }), createVNode(_components.span, {
                class: "mopen",
                children: "("
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "n"
              }), createVNode(_components.span, {
                class: "mclose",
                children: ")"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), createVNode(_components.span, {
                class: "mrel",
                children: "⇒"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), createVNode(_components.span, {
              class: "base",
              children: [createVNode(_components.span, {
                class: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "A"
              }), createVNode(_components.span, {
                class: "mopen",
                children: "("
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "n"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), createVNode(_components.span, {
                class: "mbin",
                children: "+"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              })]
            }), createVNode(_components.span, {
              class: "base",
              children: [createVNode(_components.span, {
                class: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), createVNode(_components.span, {
                class: "mord",
                children: "1"
              }), createVNode(_components.span, {
                class: "mclose",
                children: ")"
              })]
            })]
          })]
        }), " is true."]
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Then the statement ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mi, {
                    children: "A"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), createVNode(_components.mi, {
                    children: "n"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "A(n)"
                })]
              })
            })
          }), createVNode(_components.span, {
            class: "katex-html",
            "aria-hidden": "true",
            children: createVNode(_components.span, {
              class: "base",
              children: [createVNode(_components.span, {
                class: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "A"
              }), createVNode(_components.span, {
                class: "mopen",
                children: "("
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "n"
              }), createVNode(_components.span, {
                class: "mclose",
                children: ")"
              })]
            })
          })]
        }), " is true for all ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mi, {
                    children: "n"
                  }), createVNode(_components.mo, {
                    children: "∈"
                  }), createVNode(_components.mi, {
                    mathvariant: "double-struck",
                    children: "N"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "n \\in \\mathbb{N}"
                })]
              })
            })
          }), createVNode(_components.span, {
            class: "katex-html",
            "aria-hidden": "true",
            children: [createVNode(_components.span, {
              class: "base",
              children: [createVNode(_components.span, {
                class: "strut",
                style: {
                  height: "0.5782em",
                  verticalAlign: "-0.0391em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "n"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), createVNode(_components.span, {
                class: "mrel",
                children: "∈"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), createVNode(_components.span, {
              class: "base",
              children: [createVNode(_components.span, {
                class: "strut",
                style: {
                  height: "0.6889em"
                }
              }), createVNode(_components.span, {
                class: "mord mathbb",
                children: "N"
              })]
            })]
          })]
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Vollstandigkeitsaxiome"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "unit-3-natural-numbers-and-the-principle-of-induction-natürliche-zahlen-und-induktionsprinzip",
      children: "Unit 3: Natural Numbers and the Principle of Induction (Natürliche Zahlen und Induktionsprinzip)"
    }), "\n", createVNode(_components.h2, {
      id: "31-the-natural-numbers-die-natürlichen-zahlen",
      children: "3.1. The Natural Numbers (Die natürlichen Zahlen)"
    }), "\n", createVNode(_components.p, {
      children: ["This section defines the set of natural numbers ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mi, {
                  mathvariant: "double-struck",
                  children: "N"
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\mathbb{N}"
              })]
            })
          })
        }), createVNode(_components.span, {
          class: "katex-html",
          "aria-hidden": "true",
          children: createVNode(_components.span, {
            class: "base",
            children: [createVNode(_components.span, {
              class: "strut",
              style: {
                height: "0.6889em"
              }
            }), createVNode(_components.span, {
              class: "mord mathbb",
              children: "N"
            })]
          })
        })]
      }), " axiomatically as the smallest set closed under the successor function (n↦n+1)."]
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

const url = "C:/Users/kutay/OneDrive/Documents/GitHub/content_hub/collections/lecture_notes-2025fall-analysis/analysis-3.1-natural_induction.mdx";
const file = "C:/Users/kutay/OneDrive/Documents/GitHub/content_hub/collections/lecture_notes-2025fall-analysis/analysis-3.1-natural_induction.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/kutay/OneDrive/Documents/GitHub/content_hub/collections/lecture_notes-2025fall-analysis/analysis-3.1-natural_induction.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
