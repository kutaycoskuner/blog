import { h as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_DJz8TuEr.mjs';

const frontmatter = {
  "template": 1.6,
  "revision": 0.2,
  "title": "Real and Complex Numbers",
  "description": "Lecture notes on Uni Leipzig WS 25-26",
  "category": ["repository"],
  "tags": ["mathematics", "logic"],
  "created": "2025-10-23T00:00:00.000Z",
  "updated": "2025-12-04T00:00:00.000Z",
  "author": "Kutay Coskuner",
  "translator": null,
  "editor": null,
  "image": null,
  "image_credit": null,
  "language": "en",
  "visibility": false,
  "sort_order": 2,
  "todo": ["add visuals for supremum und maximum", "add visuals for mappings"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "21-real-numbers",
    "text": "2.1. Real Numbers"
  }, {
    "depth": 3,
    "slug": "field-axioms",
    "text": "Field Axioms"
  }, {
    "depth": 3,
    "slug": "order-axioms",
    "text": "Order axioms"
  }, {
    "depth": 3,
    "slug": "completeness-axiom",
    "text": "Completeness Axiom"
  }, {
    "depth": 2,
    "slug": "22-complex-numbers-komplexe-zahlen",
    "text": "2.2. Complex Numbers (Komplexe Zahlen)"
  }];
}
function _createMdxContent(props) {
  const _components = {
    annotation: "annotation",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    math: "math",
    mi: "mi",
    mn: "mn",
    mo: "mo",
    mrow: "mrow",
    msup: "msup",
    ol: "ol",
    p: "p",
    semantics: "semantics",
    span: "span",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "21-real-numbers",
      children: "2.1. Real Numbers"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Real Numbers (Reelle Zahlen)"
      })
    }), "\n", createVNode(_components.p, {
      children: ["The set of ", createVNode(_components.strong, {
        children: ["Real Numbers (", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: createVNode(_components.mi, {
                    mathvariant: "double-struck",
                    children: "R"
                  })
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\mathbb{R}"
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
                children: "R"
              })]
            })
          })]
        }), ")"]
      }), " is a set with two operations (addition ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mo, {
                  children: "+"
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "+"
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
                height: "0.6667em",
                verticalAlign: "-0.0833em"
              }
            }), createVNode(_components.span, {
              class: "mord",
              children: "+"
            })]
          })
        })]
      }), " and multiplication ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mo, {
                  children: "⋅"
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\cdot"
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
                height: "0.4445em"
              }
            }), createVNode(_components.span, {
              class: "mord",
              children: "⋅"
            })]
          })
        })]
      }), ") and an order relation (", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mo, {
                  children: "<"
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "<"
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
                height: "0.5782em",
                verticalAlign: "-0.0391em"
              }
            }), createVNode(_components.span, {
              class: "mrel",
              children: "<"
            })]
          })
        })]
      }), ") that satisfy 13 axioms."]
    }), "\n", createVNode(_components.h3, {
      id: "field-axioms",
      children: "Field Axioms"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Field Axioms (Körperaxiome)"
      })
    }), "\n", createVNode(_components.p, {
      children: ["These 9 axioms govern the arithmetic operations in ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mi, {
                  mathvariant: "double-struck",
                  children: "R"
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\mathbb{R}"
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
              children: "R"
            })]
          })
        })]
      }), ".\r\nWe use the quantifiers: ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mi, {
                  mathvariant: "normal",
                  children: "∀"
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\forall"
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
                height: "0.6944em"
              }
            }), createVNode(_components.span, {
              class: "mord",
              children: "∀"
            })]
          })
        })]
      }), " (for all / für alle) and ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mi, {
                  mathvariant: "normal",
                  children: "∃"
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\exists"
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
                height: "0.6944em"
              }
            }), createVNode(_components.span, {
              class: "mord",
              children: "∃"
            })]
          })
        })]
      }), " (there exists / es existiert)."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Axiom"
          }), createVNode(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Addition"
          }), createVNode(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Multiplication"
          }), createVNode(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Law (Gesetz)"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: [createVNode(_components.strong, {
              children: "Associativity"
            }), " (Assoziativgesetz)"]
          }), createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["(AA) ", createVNode(_components.span, {
              class: "katex",
              children: [createVNode(_components.span, {
                class: "katex-mathml",
                children: createVNode(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: createVNode(_components.semantics, {
                    children: [createVNode(_components.mrow, {
                      children: [createVNode(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), createVNode(_components.mi, {
                        children: "x"
                      }), createVNode(_components.mo, {
                        children: "+"
                      }), createVNode(_components.mi, {
                        children: "y"
                      }), createVNode(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      }), createVNode(_components.mo, {
                        children: "+"
                      }), createVNode(_components.mi, {
                        children: "z"
                      }), createVNode(_components.mo, {
                        children: "="
                      }), createVNode(_components.mi, {
                        children: "x"
                      }), createVNode(_components.mo, {
                        children: "+"
                      }), createVNode(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), createVNode(_components.mi, {
                        children: "y"
                      }), createVNode(_components.mo, {
                        children: "+"
                      }), createVNode(_components.mi, {
                        children: "z"
                      }), createVNode(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    }), createVNode(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "(x+y)+z=x+(y+z)"
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
                    class: "mopen",
                    children: "("
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    children: "x"
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
                    class: "mord mathnormal",
                    style: {
                      marginRight: "0.03588em"
                    },
                    children: "y"
                  }), createVNode(_components.span, {
                    class: "mclose",
                    children: ")"
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
                      height: "0.4306em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    style: {
                      marginRight: "0.04398em"
                    },
                    children: "z"
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), createVNode(_components.span, {
                    class: "mrel",
                    children: "="
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
                    children: "x"
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
                    class: "mopen",
                    children: "("
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    style: {
                      marginRight: "0.03588em"
                    },
                    children: "y"
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
                    class: "mord mathnormal",
                    style: {
                      marginRight: "0.04398em"
                    },
                    children: "z"
                  }), createVNode(_components.span, {
                    class: "mclose",
                    children: ")"
                  })]
                })]
              })]
            })]
          }), createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["(MA) ", createVNode(_components.span, {
              class: "katex",
              children: [createVNode(_components.span, {
                class: "katex-mathml",
                children: createVNode(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: createVNode(_components.semantics, {
                    children: [createVNode(_components.mrow, {
                      children: [createVNode(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), createVNode(_components.mi, {
                        children: "x"
                      }), createVNode(_components.mo, {
                        children: "⋅"
                      }), createVNode(_components.mi, {
                        children: "y"
                      }), createVNode(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      }), createVNode(_components.mo, {
                        children: "⋅"
                      }), createVNode(_components.mi, {
                        children: "z"
                      }), createVNode(_components.mo, {
                        children: "="
                      }), createVNode(_components.mi, {
                        children: "x"
                      }), createVNode(_components.mo, {
                        children: "⋅"
                      }), createVNode(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), createVNode(_components.mi, {
                        children: "y"
                      }), createVNode(_components.mo, {
                        children: "⋅"
                      }), createVNode(_components.mi, {
                        children: "z"
                      }), createVNode(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    }), createVNode(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "(x\\cdot y)\\cdot z=x\\cdot(y\\cdot z)"
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
                    class: "mopen",
                    children: "("
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    children: "x"
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  }), createVNode(_components.span, {
                    class: "mbin",
                    children: "⋅"
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
                    class: "mord mathnormal",
                    style: {
                      marginRight: "0.03588em"
                    },
                    children: "y"
                  }), createVNode(_components.span, {
                    class: "mclose",
                    children: ")"
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  }), createVNode(_components.span, {
                    class: "mbin",
                    children: "⋅"
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
                      height: "0.4306em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    style: {
                      marginRight: "0.04398em"
                    },
                    children: "z"
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), createVNode(_components.span, {
                    class: "mrel",
                    children: "="
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
                      height: "0.4445em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    children: "x"
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  }), createVNode(_components.span, {
                    class: "mbin",
                    children: "⋅"
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
                    class: "mopen",
                    children: "("
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    style: {
                      marginRight: "0.03588em"
                    },
                    children: "y"
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  }), createVNode(_components.span, {
                    class: "mbin",
                    children: "⋅"
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
                    class: "mord mathnormal",
                    style: {
                      marginRight: "0.04398em"
                    },
                    children: "z"
                  }), createVNode(_components.span, {
                    class: "mclose",
                    children: ")"
                  })]
                })]
              })]
            })]
          }), createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: createVNode(_components.span, {
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
                        children: "x"
                      }), createVNode(_components.mo, {
                        separator: "true",
                        children: ","
                      }), createVNode(_components.mi, {
                        children: "y"
                      }), createVNode(_components.mo, {
                        separator: "true",
                        children: ","
                      }), createVNode(_components.mi, {
                        children: "z"
                      }), createVNode(_components.mo, {
                        children: "∈"
                      }), createVNode(_components.mi, {
                        mathvariant: "double-struck",
                        children: "R"
                      })]
                    }), createVNode(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\forall x, y, z \\in \\mathbb{R}"
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
                      height: "0.8889em",
                      verticalAlign: "-0.1944em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord",
                    children: "∀"
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    children: "x"
                  }), createVNode(_components.span, {
                    class: "mpunct",
                    children: ","
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    style: {
                      marginRight: "0.03588em"
                    },
                    children: "y"
                  }), createVNode(_components.span, {
                    class: "mpunct",
                    children: ","
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    style: {
                      marginRight: "0.04398em"
                    },
                    children: "z"
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
                  })]
                })]
              })]
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: [createVNode(_components.strong, {
              children: "Commutativity"
            }), " (Kommutativgesetz)"]
          }), createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["(AK) ", createVNode(_components.span, {
              class: "katex",
              children: [createVNode(_components.span, {
                class: "katex-mathml",
                children: createVNode(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: createVNode(_components.semantics, {
                    children: [createVNode(_components.mrow, {
                      children: [createVNode(_components.mi, {
                        children: "x"
                      }), createVNode(_components.mo, {
                        children: "+"
                      }), createVNode(_components.mi, {
                        children: "y"
                      }), createVNode(_components.mo, {
                        children: "="
                      }), createVNode(_components.mi, {
                        children: "y"
                      }), createVNode(_components.mo, {
                        children: "+"
                      }), createVNode(_components.mi, {
                        children: "x"
                      })]
                    }), createVNode(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "x+y=y+x"
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
                      height: "0.6667em",
                      verticalAlign: "-0.0833em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    children: "x"
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
                      height: "0.625em",
                      verticalAlign: "-0.1944em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    style: {
                      marginRight: "0.03588em"
                    },
                    children: "y"
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), createVNode(_components.span, {
                    class: "mrel",
                    children: "="
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
                      height: "0.7778em",
                      verticalAlign: "-0.1944em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    style: {
                      marginRight: "0.03588em"
                    },
                    children: "y"
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
                      height: "0.4306em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    children: "x"
                  })]
                })]
              })]
            })]
          }), createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["(MK) ", createVNode(_components.span, {
              class: "katex",
              children: [createVNode(_components.span, {
                class: "katex-mathml",
                children: createVNode(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: createVNode(_components.semantics, {
                    children: [createVNode(_components.mrow, {
                      children: [createVNode(_components.mi, {
                        children: "x"
                      }), createVNode(_components.mo, {
                        children: "⋅"
                      }), createVNode(_components.mi, {
                        children: "y"
                      }), createVNode(_components.mo, {
                        children: "="
                      }), createVNode(_components.mi, {
                        children: "y"
                      }), createVNode(_components.mo, {
                        children: "⋅"
                      }), createVNode(_components.mi, {
                        children: "x"
                      })]
                    }), createVNode(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "x\\cdot y=y\\cdot x"
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
                      height: "0.4445em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    children: "x"
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  }), createVNode(_components.span, {
                    class: "mbin",
                    children: "⋅"
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
                      height: "0.625em",
                      verticalAlign: "-0.1944em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    style: {
                      marginRight: "0.03588em"
                    },
                    children: "y"
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), createVNode(_components.span, {
                    class: "mrel",
                    children: "="
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
                      height: "0.6389em",
                      verticalAlign: "-0.1944em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    style: {
                      marginRight: "0.03588em"
                    },
                    children: "y"
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  }), createVNode(_components.span, {
                    class: "mbin",
                    children: "⋅"
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
                      height: "0.4306em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    children: "x"
                  })]
                })]
              })]
            })]
          }), createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: createVNode(_components.span, {
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
                        children: "x"
                      }), createVNode(_components.mo, {
                        separator: "true",
                        children: ","
                      }), createVNode(_components.mi, {
                        children: "y"
                      }), createVNode(_components.mo, {
                        children: "∈"
                      }), createVNode(_components.mi, {
                        mathvariant: "double-struck",
                        children: "R"
                      })]
                    }), createVNode(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\forall x, y \\in \\mathbb{R}"
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
                      height: "0.8889em",
                      verticalAlign: "-0.1944em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord",
                    children: "∀"
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    children: "x"
                  }), createVNode(_components.span, {
                    class: "mpunct",
                    children: ","
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    style: {
                      marginRight: "0.03588em"
                    },
                    children: "y"
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
                  })]
                })]
              })]
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: [createVNode(_components.strong, {
              children: "Neutral Element"
            }), " (Neutrales Element)"]
          }), createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["(AN) ", createVNode(_components.span, {
              class: "katex",
              children: [createVNode(_components.span, {
                class: "katex-mathml",
                children: createVNode(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: createVNode(_components.semantics, {
                    children: [createVNode(_components.mrow, {
                      children: [createVNode(_components.mi, {
                        mathvariant: "normal",
                        children: "∃"
                      }), createVNode(_components.mn, {
                        children: "0"
                      }), createVNode(_components.mo, {
                        children: "∈"
                      }), createVNode(_components.mi, {
                        mathvariant: "double-struck",
                        children: "R"
                      }), createVNode(_components.mi, {
                        mathvariant: "normal",
                        children: "∀"
                      }), createVNode(_components.mi, {
                        children: "x"
                      }), createVNode(_components.mo, {
                        children: "∈"
                      }), createVNode(_components.mi, {
                        mathvariant: "double-struck",
                        children: "R"
                      }), createVNode(_components.mo, {
                        children: ":"
                      }), createVNode(_components.mn, {
                        children: "0"
                      }), createVNode(_components.mo, {
                        children: "+"
                      }), createVNode(_components.mi, {
                        children: "x"
                      }), createVNode(_components.mo, {
                        children: "="
                      }), createVNode(_components.mi, {
                        children: "x"
                      })]
                    }), createVNode(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\exists 0 \\in \\mathbb{R} \\forall x \\in \\mathbb{R}: 0+x=x"
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
                    children: "∃0"
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
                      height: "0.7335em",
                      verticalAlign: "-0.0391em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord mathbb",
                    children: "R"
                  }), createVNode(_components.span, {
                    class: "mord",
                    children: "∀"
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    children: "x"
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
                      height: "0.7278em",
                      verticalAlign: "-0.0833em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord",
                    children: "0"
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
                      height: "0.4306em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    children: "x"
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), createVNode(_components.span, {
                    class: "mrel",
                    children: "="
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
                      height: "0.4306em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    children: "x"
                  })]
                })]
              })]
            })]
          }), createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["(MN) ", createVNode(_components.span, {
              class: "katex",
              children: [createVNode(_components.span, {
                class: "katex-mathml",
                children: createVNode(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: createVNode(_components.semantics, {
                    children: [createVNode(_components.mrow, {
                      children: [createVNode(_components.mi, {
                        mathvariant: "normal",
                        children: "∃"
                      }), createVNode(_components.mn, {
                        children: "1"
                      }), createVNode(_components.mo, {
                        children: "∈"
                      }), createVNode(_components.mi, {
                        mathvariant: "double-struck",
                        children: "R"
                      }), createVNode(_components.mo, {
                        children: ":"
                      }), createVNode(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), createVNode(_components.mn, {
                        children: "1"
                      }), createVNode(_components.mo, {
                        mathvariant: "normal",
                        children: "≠"
                      }), createVNode(_components.mn, {
                        children: "0"
                      }), createVNode(_components.mo, {
                        children: "∧"
                      }), createVNode(_components.mi, {
                        mathvariant: "normal",
                        children: "∀"
                      }), createVNode(_components.mi, {
                        children: "x"
                      }), createVNode(_components.mo, {
                        children: "∈"
                      }), createVNode(_components.mi, {
                        mathvariant: "double-struck",
                        children: "R"
                      }), createVNode(_components.mo, {
                        children: ":"
                      }), createVNode(_components.mn, {
                        children: "1"
                      }), createVNode(_components.mo, {
                        children: "⋅"
                      }), createVNode(_components.mi, {
                        children: "x"
                      }), createVNode(_components.mo, {
                        children: "="
                      }), createVNode(_components.mi, {
                        children: "x"
                      }), createVNode(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    }), createVNode(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\exists 1 \\in \\mathbb{R}: (1\\ne 0 \\land \\forall x \\in \\mathbb{R}: 1\\cdot x=x)"
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
                    children: "∃1"
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
                      height: "1em",
                      verticalAlign: "-0.25em"
                    }
                  }), createVNode(_components.span, {
                    class: "mopen",
                    children: "("
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
                    children: [createVNode(_components.span, {
                      class: "mrel",
                      children: createVNode(_components.span, {
                        class: "mord vbox",
                        children: createVNode(_components.span, {
                          class: "thinbox",
                          children: createVNode(_components.span, {
                            class: "rlap",
                            children: [createVNode(_components.span, {
                              class: "strut",
                              style: {
                                height: "0.8889em",
                                verticalAlign: "-0.1944em"
                              }
                            }), createVNode(_components.span, {
                              class: "inner",
                              children: createVNode(_components.span, {
                                class: "mord",
                                children: createVNode(_components.span, {
                                  class: "mrel",
                                  children: ""
                                })
                              })
                            }), createVNode(_components.span, {
                              class: "fix"
                            })]
                          })
                        })
                      })
                    }), createVNode(_components.span, {
                      class: "mrel",
                      children: "="
                    })]
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
                      height: "0.6444em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord",
                    children: "0"
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  }), createVNode(_components.span, {
                    class: "mbin",
                    children: "∧"
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
                      height: "0.7335em",
                      verticalAlign: "-0.0391em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord",
                    children: "∀"
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    children: "x"
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
                      height: "0.6444em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord",
                    children: "1"
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  }), createVNode(_components.span, {
                    class: "mbin",
                    children: "⋅"
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
                      height: "0.4306em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    children: "x"
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), createVNode(_components.span, {
                    class: "mrel",
                    children: "="
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
                    children: "x"
                  }), createVNode(_components.span, {
                    class: "mclose",
                    children: ")"
                  })]
                })]
              })]
            })]
          }), createVNode(_components.td, {
            style: {
              textAlign: "left"
            }
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: [createVNode(_components.strong, {
              children: "Inverse Element"
            }), " (Inverses Element)"]
          }), createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["(AI) ", createVNode(_components.span, {
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
                        children: "x"
                      }), createVNode(_components.mo, {
                        children: "∈"
                      }), createVNode(_components.mi, {
                        mathvariant: "double-struck",
                        children: "R"
                      }), createVNode(_components.mi, {
                        mathvariant: "normal",
                        children: "∃"
                      }), createVNode(_components.mi, {
                        children: "y"
                      }), createVNode(_components.mo, {
                        children: "∈"
                      }), createVNode(_components.mi, {
                        mathvariant: "double-struck",
                        children: "R"
                      }), createVNode(_components.mo, {
                        children: ":"
                      }), createVNode(_components.mi, {
                        children: "x"
                      }), createVNode(_components.mo, {
                        children: "+"
                      }), createVNode(_components.mi, {
                        children: "y"
                      }), createVNode(_components.mo, {
                        children: "="
                      }), createVNode(_components.mn, {
                        children: "0"
                      })]
                    }), createVNode(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\forall x \\in \\mathbb{R} \\exists y \\in \\mathbb{R}: x+y=0"
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
                    children: "x"
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
                      height: "0.8889em",
                      verticalAlign: "-0.1944em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord mathbb",
                    children: "R"
                  }), createVNode(_components.span, {
                    class: "mord",
                    children: "∃"
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    style: {
                      marginRight: "0.03588em"
                    },
                    children: "y"
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
                      height: "0.6667em",
                      verticalAlign: "-0.0833em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    children: "x"
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
                      height: "0.625em",
                      verticalAlign: "-0.1944em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    style: {
                      marginRight: "0.03588em"
                    },
                    children: "y"
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), createVNode(_components.span, {
                    class: "mrel",
                    children: "="
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
                      height: "0.6444em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord",
                    children: "0"
                  })]
                })]
              })]
            }), " (we write ", createVNode(_components.span, {
              class: "katex",
              children: [createVNode(_components.span, {
                class: "katex-mathml",
                children: createVNode(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: createVNode(_components.semantics, {
                    children: [createVNode(_components.mrow, {
                      children: [createVNode(_components.mi, {
                        children: "y"
                      }), createVNode(_components.mo, {
                        children: "="
                      }), createVNode(_components.mo, {
                        children: "−"
                      }), createVNode(_components.mi, {
                        children: "x"
                      })]
                    }), createVNode(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "y=-x"
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
                      height: "0.625em",
                      verticalAlign: "-0.1944em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    style: {
                      marginRight: "0.03588em"
                    },
                    children: "y"
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), createVNode(_components.span, {
                    class: "mrel",
                    children: "="
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
                    class: "mord",
                    children: "−"
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    children: "x"
                  })]
                })]
              })]
            }), ")"]
          }), createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["(MI) ", createVNode(_components.span, {
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
                        children: "x"
                      }), createVNode(_components.mo, {
                        mathvariant: "normal",
                        children: "≠"
                      }), createVNode(_components.mn, {
                        children: "0"
                      }), createVNode(_components.mi, {
                        mathvariant: "normal",
                        children: "∃"
                      }), createVNode(_components.mi, {
                        children: "y"
                      }), createVNode(_components.mo, {
                        children: "∈"
                      }), createVNode(_components.mi, {
                        mathvariant: "double-struck",
                        children: "R"
                      }), createVNode(_components.mo, {
                        children: ":"
                      }), createVNode(_components.mi, {
                        children: "x"
                      }), createVNode(_components.mo, {
                        children: "⋅"
                      }), createVNode(_components.mi, {
                        children: "y"
                      }), createVNode(_components.mo, {
                        children: "="
                      }), createVNode(_components.mn, {
                        children: "1"
                      })]
                    }), createVNode(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\forall x \\ne 0 \\exists y \\in \\mathbb{R}: x\\cdot y=1"
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
                      height: "0.8889em",
                      verticalAlign: "-0.1944em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord",
                    children: "∀"
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    children: "x"
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), createVNode(_components.span, {
                    class: "mrel",
                    children: [createVNode(_components.span, {
                      class: "mrel",
                      children: createVNode(_components.span, {
                        class: "mord vbox",
                        children: createVNode(_components.span, {
                          class: "thinbox",
                          children: createVNode(_components.span, {
                            class: "rlap",
                            children: [createVNode(_components.span, {
                              class: "strut",
                              style: {
                                height: "0.8889em",
                                verticalAlign: "-0.1944em"
                              }
                            }), createVNode(_components.span, {
                              class: "inner",
                              children: createVNode(_components.span, {
                                class: "mord",
                                children: createVNode(_components.span, {
                                  class: "mrel",
                                  children: ""
                                })
                              })
                            }), createVNode(_components.span, {
                              class: "fix"
                            })]
                          })
                        })
                      })
                    }), createVNode(_components.span, {
                      class: "mrel",
                      children: "="
                    })]
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
                      height: "0.8889em",
                      verticalAlign: "-0.1944em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord",
                    children: "0∃"
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    style: {
                      marginRight: "0.03588em"
                    },
                    children: "y"
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
                      height: "0.4445em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    children: "x"
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  }), createVNode(_components.span, {
                    class: "mbin",
                    children: "⋅"
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
                      height: "0.625em",
                      verticalAlign: "-0.1944em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    style: {
                      marginRight: "0.03588em"
                    },
                    children: "y"
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), createVNode(_components.span, {
                    class: "mrel",
                    children: "="
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
                      height: "0.6444em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord",
                    children: "1"
                  })]
                })]
              })]
            }), " (we write ", createVNode(_components.span, {
              class: "katex",
              children: [createVNode(_components.span, {
                class: "katex-mathml",
                children: createVNode(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: createVNode(_components.semantics, {
                    children: [createVNode(_components.mrow, {
                      children: [createVNode(_components.mi, {
                        children: "y"
                      }), createVNode(_components.mo, {
                        children: "="
                      }), createVNode(_components.msup, {
                        children: [createVNode(_components.mi, {
                          children: "x"
                        }), createVNode(_components.mrow, {
                          children: [createVNode(_components.mo, {
                            children: "−"
                          }), createVNode(_components.mn, {
                            children: "1"
                          })]
                        })]
                      })]
                    }), createVNode(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "y=x^{-1}"
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
                      height: "0.625em",
                      verticalAlign: "-0.1944em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    style: {
                      marginRight: "0.03588em"
                    },
                    children: "y"
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), createVNode(_components.span, {
                    class: "mrel",
                    children: "="
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
                      height: "0.8141em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord",
                    children: [createVNode(_components.span, {
                      class: "mord mathnormal",
                      children: "x"
                    }), createVNode(_components.span, {
                      class: "msupsub",
                      children: createVNode(_components.span, {
                        class: "vlist-t",
                        children: createVNode(_components.span, {
                          class: "vlist-r",
                          children: createVNode(_components.span, {
                            class: "vlist",
                            style: {
                              height: "0.8141em"
                            },
                            children: createVNode(_components.span, {
                              style: {
                                top: "-3.063em",
                                marginRight: "0.05em"
                              },
                              children: [createVNode(_components.span, {
                                class: "pstrut",
                                style: {
                                  height: "2.7em"
                                }
                              }), createVNode(_components.span, {
                                class: "sizing reset-size6 size3 mtight",
                                children: createVNode(_components.span, {
                                  class: "mord mtight",
                                  children: [createVNode(_components.span, {
                                    class: "mord mtight",
                                    children: "−"
                                  }), createVNode(_components.span, {
                                    class: "mord mtight",
                                    children: "1"
                                  })]
                                })
                              })]
                            })
                          })
                        })
                      })
                    })]
                  })]
                })]
              })]
            }), ")"]
          }), createVNode(_components.td, {
            style: {
              textAlign: "left"
            }
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            style: {
              textAlign: "center"
            },
            children: [createVNode(_components.strong, {
              children: "Distributivity"
            }), " (Distributivgesetz)"]
          }), createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["(DG) ", createVNode(_components.span, {
              class: "katex",
              children: [createVNode(_components.span, {
                class: "katex-mathml",
                children: createVNode(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: createVNode(_components.semantics, {
                    children: [createVNode(_components.mrow, {
                      children: [createVNode(_components.mi, {
                        children: "x"
                      }), createVNode(_components.mo, {
                        children: "⋅"
                      }), createVNode(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), createVNode(_components.mi, {
                        children: "y"
                      }), createVNode(_components.mo, {
                        children: "+"
                      }), createVNode(_components.mi, {
                        children: "z"
                      }), createVNode(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      }), createVNode(_components.mo, {
                        children: "="
                      }), createVNode(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), createVNode(_components.mi, {
                        children: "x"
                      }), createVNode(_components.mo, {
                        children: "⋅"
                      }), createVNode(_components.mi, {
                        children: "y"
                      }), createVNode(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      }), createVNode(_components.mo, {
                        children: "+"
                      }), createVNode(_components.mo, {
                        stretchy: "false",
                        children: "("
                      }), createVNode(_components.mi, {
                        children: "x"
                      }), createVNode(_components.mo, {
                        children: "⋅"
                      }), createVNode(_components.mi, {
                        children: "z"
                      }), createVNode(_components.mo, {
                        stretchy: "false",
                        children: ")"
                      })]
                    }), createVNode(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "x\\cdot(y+z)=(x\\cdot y)+(x\\cdot z)"
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
                      height: "0.4445em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    children: "x"
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  }), createVNode(_components.span, {
                    class: "mbin",
                    children: "⋅"
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
                    class: "mopen",
                    children: "("
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    style: {
                      marginRight: "0.03588em"
                    },
                    children: "y"
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
                    class: "mord mathnormal",
                    style: {
                      marginRight: "0.04398em"
                    },
                    children: "z"
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
                    children: "="
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
                    class: "mopen",
                    children: "("
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    children: "x"
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  }), createVNode(_components.span, {
                    class: "mbin",
                    children: "⋅"
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
                    class: "mord mathnormal",
                    style: {
                      marginRight: "0.03588em"
                    },
                    children: "y"
                  }), createVNode(_components.span, {
                    class: "mclose",
                    children: ")"
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
                    class: "mopen",
                    children: "("
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    children: "x"
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  }), createVNode(_components.span, {
                    class: "mbin",
                    children: "⋅"
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
                    class: "mord mathnormal",
                    style: {
                      marginRight: "0.04398em"
                    },
                    children: "z"
                  }), createVNode(_components.span, {
                    class: "mclose",
                    children: ")"
                  })]
                })]
              })]
            })]
          }), createVNode(_components.td, {
            style: {
              textAlign: "left"
            }
          }), createVNode(_components.td, {
            style: {
              textAlign: "left"
            },
            children: createVNode(_components.span, {
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
                        children: "x"
                      }), createVNode(_components.mo, {
                        separator: "true",
                        children: ","
                      }), createVNode(_components.mi, {
                        children: "y"
                      }), createVNode(_components.mo, {
                        separator: "true",
                        children: ","
                      }), createVNode(_components.mi, {
                        children: "z"
                      }), createVNode(_components.mo, {
                        children: "∈"
                      }), createVNode(_components.mi, {
                        mathvariant: "double-struck",
                        children: "R"
                      })]
                    }), createVNode(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\forall x, y, z \\in \\mathbb{R}"
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
                      height: "0.8889em",
                      verticalAlign: "-0.1944em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord",
                    children: "∀"
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    children: "x"
                  }), createVNode(_components.span, {
                    class: "mpunct",
                    children: ","
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    style: {
                      marginRight: "0.03588em"
                    },
                    children: "y"
                  }), createVNode(_components.span, {
                    class: "mpunct",
                    children: ","
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.1667em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    style: {
                      marginRight: "0.04398em"
                    },
                    children: "z"
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
                  })]
                })]
              })]
            })
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Consequence"
      }), ": ", createVNode(_components.span, {
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
                  children: "x"
                }), createVNode(_components.mo, {
                  children: "∈"
                }), createVNode(_components.mi, {
                  mathvariant: "double-struck",
                  children: "R"
                })]
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\forall x\\in\\mathbb{R}"
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
              children: "x"
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
            })]
          })]
        })]
      }), " holds ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: [createVNode(_components.mn, {
                  children: "0"
                }), createVNode(_components.mo, {
                  children: "⋅"
                }), createVNode(_components.mi, {
                  children: "x"
                }), createVNode(_components.mo, {
                  children: "="
                }), createVNode(_components.mn, {
                  children: "0"
                })]
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "0\\cdot x=0"
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
                height: "0.6444em"
              }
            }), createVNode(_components.span, {
              class: "mord",
              children: "0"
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            }), createVNode(_components.span, {
              class: "mbin",
              children: "⋅"
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
                height: "0.4306em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              children: "x"
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), createVNode(_components.span, {
              class: "mrel",
              children: "="
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
                height: "0.6444em"
              }
            }), createVNode(_components.span, {
              class: "mord",
              children: "0"
            })]
          })]
        })]
      }), " and ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: [createVNode(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), createVNode(_components.mo, {
                  children: "−"
                }), createVNode(_components.mn, {
                  children: "1"
                }), createVNode(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), createVNode(_components.mo, {
                  children: "⋅"
                }), createVNode(_components.mi, {
                  children: "x"
                }), createVNode(_components.mo, {
                  children: "="
                }), createVNode(_components.mo, {
                  children: "−"
                }), createVNode(_components.mi, {
                  children: "x"
                })]
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "(-1)\\cdot x=-x"
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
              class: "mopen",
              children: "("
            }), createVNode(_components.span, {
              class: "mord",
              children: "−"
            }), createVNode(_components.span, {
              class: "mord",
              children: "1"
            }), createVNode(_components.span, {
              class: "mclose",
              children: ")"
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.2222em"
              }
            }), createVNode(_components.span, {
              class: "mbin",
              children: "⋅"
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
                height: "0.4306em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              children: "x"
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), createVNode(_components.span, {
              class: "mrel",
              children: "="
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
              class: "mord",
              children: "−"
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              children: "x"
            })]
          })]
        })]
      }), "."]
    }), "\n", createVNode(_components.h3, {
      id: "order-axioms",
      children: "Order axioms"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Order Axioms (Anordnungsaxiome)"
      })
    }), "\n", createVNode(_components.p, {
      children: ["These axioms define the set ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: [createVNode(_components.mi, {
                  mathvariant: "double-struck",
                  children: "P"
                }), createVNode(_components.mo, {
                  children: "⊂"
                }), createVNode(_components.mi, {
                  mathvariant: "double-struck",
                  children: "R"
                })]
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\mathbb{P} \\subset \\mathbb{R}"
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
                height: "0.728em",
                verticalAlign: "-0.0391em"
              }
            }), createVNode(_components.span, {
              class: "mord mathbb",
              children: "P"
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
      }), " of ", createVNode(_components.strong, {
        children: "positive numbers (positive Zahlen)"
      }), ":"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "(Trichotomy)"
        }), " ", createVNode(_components.span, {
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
                    children: "x"
                  }), createVNode(_components.mo, {
                    children: "∈"
                  }), createVNode(_components.mi, {
                    mathvariant: "double-struck",
                    children: "R"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\forall x \\in \\mathbb{R}"
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
                children: "x"
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
              })]
            })]
          })]
        }), " exactly one of the following holds: ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    children: "∈"
                  }), createVNode(_components.mi, {
                    mathvariant: "double-struck",
                    children: "P"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "x \\in \\mathbb{P}"
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
                children: "x"
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
                children: "P"
              })]
            })]
          })]
        }), ", ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    children: "="
                  }), createVNode(_components.mn, {
                    children: "0"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "x=0"
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
                  height: "0.4306em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "x"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), createVNode(_components.span, {
                class: "mrel",
                children: "="
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
                  height: "0.6444em"
                }
              }), createVNode(_components.span, {
                class: "mord",
                children: "0"
              })]
            })]
          })]
        }), ", or ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mo, {
                    children: "−"
                  }), createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    children: "∈"
                  }), createVNode(_components.mi, {
                    mathvariant: "double-struck",
                    children: "P"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "-x \\in \\mathbb{P}"
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
                  height: "0.6667em",
                  verticalAlign: "-0.0833em"
                }
              }), createVNode(_components.span, {
                class: "mord",
                children: "−"
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "x"
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
                children: "P"
              })]
            })]
          })]
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "(Closure under Addition)"
        }), " If ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    children: "∈"
                  }), createVNode(_components.mi, {
                    mathvariant: "double-struck",
                    children: "P"
                  }), createVNode(_components.mo, {
                    children: "∧"
                  }), createVNode(_components.mi, {
                    children: "y"
                  }), createVNode(_components.mo, {
                    children: "∈"
                  }), createVNode(_components.mi, {
                    mathvariant: "double-struck",
                    children: "P"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "x \\in \\mathbb{P} \\land y \\in \\mathbb{P}"
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
                children: "x"
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
                children: "P"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), createVNode(_components.span, {
                class: "mbin",
                children: "∧"
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
                  height: "0.7335em",
                  verticalAlign: "-0.1944em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.03588em"
                },
                children: "y"
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
                children: "P"
              })]
            })]
          })]
        }), ", then ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    children: "+"
                  }), createVNode(_components.mi, {
                    children: "y"
                  }), createVNode(_components.mo, {
                    children: "∈"
                  }), createVNode(_components.mi, {
                    mathvariant: "double-struck",
                    children: "P"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "x+y \\in \\mathbb{P}"
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
                  height: "0.6667em",
                  verticalAlign: "-0.0833em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "x"
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
                  height: "0.7335em",
                  verticalAlign: "-0.1944em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.03588em"
                },
                children: "y"
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
                children: "P"
              })]
            })]
          })]
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "(Closure under Multiplication)"
        }), " If ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    children: "∈"
                  }), createVNode(_components.mi, {
                    mathvariant: "double-struck",
                    children: "P"
                  }), createVNode(_components.mo, {
                    children: "∧"
                  }), createVNode(_components.mi, {
                    children: "y"
                  }), createVNode(_components.mo, {
                    children: "∈"
                  }), createVNode(_components.mi, {
                    mathvariant: "double-struck",
                    children: "P"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "x \\in \\mathbb{P} \\land y \\in \\mathbb{P}"
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
                children: "x"
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
                children: "P"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), createVNode(_components.span, {
                class: "mbin",
                children: "∧"
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
                  height: "0.7335em",
                  verticalAlign: "-0.1944em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.03588em"
                },
                children: "y"
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
                children: "P"
              })]
            })]
          })]
        }), ", then ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mi, {
                    children: "y"
                  }), createVNode(_components.mo, {
                    children: "∈"
                  }), createVNode(_components.mi, {
                    mathvariant: "double-struck",
                    children: "P"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "xy \\in \\mathbb{P}"
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
                  verticalAlign: "-0.1944em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "x"
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.03588em"
                },
                children: "y"
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
                children: "P"
              })]
            })]
          })]
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Definition 2.8 (Inequalities - Ungleichungen)"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: createVNode(_components.mi, {
                    children: "x"
                  })
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "x"
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
                  height: "0.4306em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "x"
              })]
            })
          })]
        }), " is ", createVNode(_components.strong, {
          children: "positive (positiv)"
        }), ": ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mn, {
                    children: "0"
                  }), createVNode(_components.mo, {
                    children: "<"
                  }), createVNode(_components.mi, {
                    children: "x"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "0 < x"
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
                children: "0"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), createVNode(_components.span, {
                class: "mrel",
                children: "<"
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
                  height: "0.4306em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "x"
              })]
            })]
          })]
        }), ", if ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    children: "∈"
                  }), createVNode(_components.mi, {
                    mathvariant: "double-struck",
                    children: "P"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "x \\in \\mathbb{P}"
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
                children: "x"
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
                children: "P"
              })]
            })]
          })]
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: createVNode(_components.mi, {
                    children: "x"
                  })
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "x"
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
                  height: "0.4306em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "x"
              })]
            })
          })]
        }), " is ", createVNode(_components.strong, {
          children: "negative (negativ)"
        }), ": ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mn, {
                    children: "0"
                  }), createVNode(_components.mo, {
                    children: ">"
                  }), createVNode(_components.mi, {
                    children: "x"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "0 > x"
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
                children: "0"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), createVNode(_components.span, {
                class: "mrel",
                children: ">"
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
                  height: "0.4306em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "x"
              })]
            })]
          })]
        }), ", if ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mo, {
                    children: "−"
                  }), createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    children: "∈"
                  }), createVNode(_components.mi, {
                    mathvariant: "double-struck",
                    children: "P"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "-x \\in \\mathbb{P}"
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
                  height: "0.6667em",
                  verticalAlign: "-0.0833em"
                }
              }), createVNode(_components.span, {
                class: "mord",
                children: "−"
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "x"
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
                children: "P"
              })]
            })]
          })]
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: createVNode(_components.mi, {
                    children: "x"
                  })
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "x"
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
                  height: "0.4306em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "x"
              })]
            })
          })]
        }), " is ", createVNode(_components.strong, {
          children: ["smaller than ", createVNode(_components.span, {
            class: "katex",
            children: [createVNode(_components.span, {
              class: "katex-mathml",
              children: createVNode(_components.math, {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                children: createVNode(_components.semantics, {
                  children: [createVNode(_components.mrow, {
                    children: createVNode(_components.mi, {
                      children: "y"
                    })
                  }), createVNode(_components.annotation, {
                    encoding: "application/x-tex",
                    children: "y"
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
                    height: "0.625em",
                    verticalAlign: "-0.1944em"
                  }
                }), createVNode(_components.span, {
                  class: "mord mathnormal",
                  style: {
                    marginRight: "0.03588em"
                  },
                  children: "y"
                })]
              })
            })]
          })]
        }), " (kleiner als ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: createVNode(_components.mi, {
                    children: "y"
                  })
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "y"
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
                  height: "0.625em",
                  verticalAlign: "-0.1944em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.03588em"
                },
                children: "y"
              })]
            })
          })]
        }), "): ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    children: "<"
                  }), createVNode(_components.mi, {
                    children: "y"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "x < y"
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
                children: "x"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), createVNode(_components.span, {
                class: "mrel",
                children: "<"
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
                  height: "0.625em",
                  verticalAlign: "-0.1944em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.03588em"
                },
                children: "y"
              })]
            })]
          })]
        }), ", if ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mn, {
                    children: "0"
                  }), createVNode(_components.mo, {
                    children: "<"
                  }), createVNode(_components.mi, {
                    children: "y"
                  }), createVNode(_components.mo, {
                    children: "−"
                  }), createVNode(_components.mi, {
                    children: "x"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "0 < y-x"
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
                children: "0"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), createVNode(_components.span, {
                class: "mrel",
                children: "<"
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
                  height: "0.7778em",
                  verticalAlign: "-0.1944em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.03588em"
                },
                children: "y"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), createVNode(_components.span, {
                class: "mbin",
                children: "−"
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
                  height: "0.4306em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "x"
              })]
            })]
          })]
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Lemma 2.10 (Rules for Inequalities)"
      }), "\r\nFor arbitrary ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: [createVNode(_components.mi, {
                  children: "x"
                }), createVNode(_components.mo, {
                  separator: "true",
                  children: ","
                }), createVNode(_components.mi, {
                  children: "y"
                }), createVNode(_components.mo, {
                  separator: "true",
                  children: ","
                }), createVNode(_components.mi, {
                  children: "u"
                }), createVNode(_components.mo, {
                  separator: "true",
                  children: ","
                }), createVNode(_components.mi, {
                  children: "v"
                }), createVNode(_components.mo, {
                  separator: "true",
                  children: ","
                }), createVNode(_components.mi, {
                  children: "z"
                }), createVNode(_components.mo, {
                  children: "∈"
                }), createVNode(_components.mi, {
                  mathvariant: "double-struck",
                  children: "R"
                })]
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "x, y, u, v, z \\in \\mathbb{R}"
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
                verticalAlign: "-0.1944em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              children: "x"
            }), createVNode(_components.span, {
              class: "mpunct",
              children: ","
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              style: {
                marginRight: "0.03588em"
              },
              children: "y"
            }), createVNode(_components.span, {
              class: "mpunct",
              children: ","
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              children: "u"
            }), createVNode(_components.span, {
              class: "mpunct",
              children: ","
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              style: {
                marginRight: "0.03588em"
              },
              children: "v"
            }), createVNode(_components.span, {
              class: "mpunct",
              children: ","
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              style: {
                marginRight: "0.04398em"
              },
              children: "z"
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
            })]
          })]
        })]
      }), ":"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Transitivity (Transitivität)"
        }), ": ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    children: "<"
                  }), createVNode(_components.mi, {
                    children: "y"
                  }), createVNode(_components.mo, {
                    children: "∧"
                  }), createVNode(_components.mi, {
                    children: "y"
                  }), createVNode(_components.mo, {
                    children: "<"
                  }), createVNode(_components.mi, {
                    children: "z"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), createVNode(_components.mo, {
                    children: "⇒"
                  }), createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    children: "<"
                  }), createVNode(_components.mi, {
                    children: "z"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "(x < y \\land y < z) \\Rightarrow x < z"
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
                class: "mopen",
                children: "("
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "x"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), createVNode(_components.span, {
                class: "mrel",
                children: "<"
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
                  height: "0.75em",
                  verticalAlign: "-0.1944em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.03588em"
                },
                children: "y"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), createVNode(_components.span, {
                class: "mbin",
                children: "∧"
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
                  height: "0.7335em",
                  verticalAlign: "-0.1944em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.03588em"
                },
                children: "y"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), createVNode(_components.span, {
                class: "mrel",
                children: "<"
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
                  marginRight: "0.04398em"
                },
                children: "z"
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
                  height: "0.5782em",
                  verticalAlign: "-0.0391em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "x"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), createVNode(_components.span, {
                class: "mrel",
                children: "<"
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
                  height: "0.4306em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.04398em"
                },
                children: "z"
              })]
            })]
          })]
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Translation Invariance (Translationsinvarianz)"
        }), ": ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    children: "<"
                  }), createVNode(_components.mi, {
                    children: "y"
                  }), createVNode(_components.mo, {
                    children: "⇔"
                  }), createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    children: "+"
                  }), createVNode(_components.mi, {
                    children: "z"
                  }), createVNode(_components.mo, {
                    children: "<"
                  }), createVNode(_components.mi, {
                    children: "y"
                  }), createVNode(_components.mo, {
                    children: "+"
                  }), createVNode(_components.mi, {
                    children: "z"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "x < y \\Leftrightarrow x+z < y+z"
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
                children: "x"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), createVNode(_components.span, {
                class: "mrel",
                children: "<"
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
                  height: "0.625em",
                  verticalAlign: "-0.1944em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.03588em"
                },
                children: "y"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), createVNode(_components.span, {
                class: "mrel",
                children: "⇔"
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
                children: "x"
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
                  height: "0.5782em",
                  verticalAlign: "-0.0391em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.04398em"
                },
                children: "z"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), createVNode(_components.span, {
                class: "mrel",
                children: "<"
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
                  height: "0.7778em",
                  verticalAlign: "-0.1944em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.03588em"
                },
                children: "y"
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
                  height: "0.4306em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.04398em"
                },
                children: "z"
              })]
            })]
          })]
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Multiplication Rule"
        }), ": If ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    children: "<"
                  }), createVNode(_components.mi, {
                    children: "y"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "x < y"
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
                children: "x"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), createVNode(_components.span, {
                class: "mrel",
                children: "<"
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
                  height: "0.625em",
                  verticalAlign: "-0.1944em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.03588em"
                },
                children: "y"
              })]
            })]
          })]
        }), ":\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.span, {
              class: "katex",
              children: [createVNode(_components.span, {
                class: "katex-mathml",
                children: createVNode(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: createVNode(_components.semantics, {
                    children: [createVNode(_components.mrow, {
                      children: [createVNode(_components.mn, {
                        children: "0"
                      }), createVNode(_components.mo, {
                        children: "<"
                      }), createVNode(_components.mi, {
                        children: "z"
                      }), createVNode(_components.mo, {
                        children: "⇒"
                      }), createVNode(_components.mi, {
                        children: "z"
                      }), createVNode(_components.mi, {
                        children: "x"
                      }), createVNode(_components.mo, {
                        children: "<"
                      }), createVNode(_components.mi, {
                        children: "z"
                      }), createVNode(_components.mi, {
                        children: "y"
                      })]
                    }), createVNode(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "0 < z \\Rightarrow zx < zy"
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
                    children: "0"
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), createVNode(_components.span, {
                    class: "mrel",
                    children: "<"
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
                      height: "0.4306em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    style: {
                      marginRight: "0.04398em"
                    },
                    children: "z"
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
                      height: "0.5782em",
                      verticalAlign: "-0.0391em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    style: {
                      marginRight: "0.04398em"
                    },
                    children: "z"
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    children: "x"
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), createVNode(_components.span, {
                    class: "mrel",
                    children: "<"
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
                      height: "0.625em",
                      verticalAlign: "-0.1944em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    style: {
                      marginRight: "0.03588em"
                    },
                    children: "zy"
                  })]
                })]
              })]
            }), "."]
          }), "\n", createVNode(_components.li, {
            children: [createVNode(_components.span, {
              class: "katex",
              children: [createVNode(_components.span, {
                class: "katex-mathml",
                children: createVNode(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: createVNode(_components.semantics, {
                    children: [createVNode(_components.mrow, {
                      children: [createVNode(_components.mn, {
                        children: "0"
                      }), createVNode(_components.mo, {
                        children: ">"
                      }), createVNode(_components.mi, {
                        children: "z"
                      }), createVNode(_components.mo, {
                        children: "⇒"
                      }), createVNode(_components.mi, {
                        children: "z"
                      }), createVNode(_components.mi, {
                        children: "x"
                      }), createVNode(_components.mo, {
                        children: ">"
                      }), createVNode(_components.mi, {
                        children: "z"
                      }), createVNode(_components.mi, {
                        children: "y"
                      })]
                    }), createVNode(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "0 > z \\Rightarrow zx > zy"
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
                    children: "0"
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), createVNode(_components.span, {
                    class: "mrel",
                    children: ">"
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
                      height: "0.4306em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    style: {
                      marginRight: "0.04398em"
                    },
                    children: "z"
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
                      height: "0.5782em",
                      verticalAlign: "-0.0391em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    style: {
                      marginRight: "0.04398em"
                    },
                    children: "z"
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    children: "x"
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), createVNode(_components.span, {
                    class: "mrel",
                    children: ">"
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
                      height: "0.625em",
                      verticalAlign: "-0.1944em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    style: {
                      marginRight: "0.03588em"
                    },
                    children: "zy"
                  })]
                })]
              })]
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "completeness-axiom",
      children: "Completeness Axiom"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Completeness Axiom (Vollständigkeitsaxiom)"
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Definition 2.15 (Upper Bound - Obere Schranke)"
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
        }), " is ", createVNode(_components.strong, {
          children: "bounded above (nach oben beschränkt)"
        }), " if ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mi, {
                    mathvariant: "normal",
                    children: "∃"
                  }), createVNode(_components.mi, {
                    children: "s"
                  }), createVNode(_components.mo, {
                    children: "∈"
                  }), createVNode(_components.mi, {
                    mathvariant: "double-struck",
                    children: "R"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\exists s \\in \\mathbb{R}"
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
                children: "∃"
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "s"
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
              })]
            })]
          })]
        }), " such that ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: createVNode(_components.mi, {
                    children: "s"
                  })
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "s"
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
                  height: "0.4306em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "s"
              })]
            })
          })]
        }), " is an ", createVNode(_components.strong, {
          children: "upper bound (obere Schranke)"
        }), " of ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: createVNode(_components.mi, {
                    children: "M"
                  })
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "M"
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
                  height: "0.6833em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.10903em"
                },
                children: "M"
              })]
            })
          })]
        }), " (i.e., ", createVNode(_components.span, {
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
                    children: "x"
                  }), createVNode(_components.mo, {
                    children: "∈"
                  }), createVNode(_components.mi, {
                    children: "M"
                  }), createVNode(_components.mo, {
                    children: ":"
                  }), createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    children: "≤"
                  }), createVNode(_components.mi, {
                    children: "s"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\forall x \\in M: x \\le s"
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
                children: "x"
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
                  height: "0.7719em",
                  verticalAlign: "-0.136em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "x"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), createVNode(_components.span, {
                class: "mrel",
                children: "≤"
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
                  height: "0.4306em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "s"
              })]
            })]
          })]
        }), ")."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Definition 2.17 (Supremum/Least Upper Bound - Supremum/Kleinste obere Schranke)"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mi, {
                    children: "s"
                  }), createVNode(_components.mo, {
                    children: "∈"
                  }), createVNode(_components.mi, {
                    mathvariant: "double-struck",
                    children: "R"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "s \\in \\mathbb{R}"
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
                children: "s"
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
              })]
            })]
          })]
        }), " is the ", createVNode(_components.strong, {
          children: "supremum"
        }), " (or ", createVNode(_components.strong, {
          children: "least upper bound"
        }), ") of ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: createVNode(_components.mi, {
                    children: "M"
                  })
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "M"
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
                  height: "0.6833em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.10903em"
                },
                children: "M"
              })]
            })
          })]
        }), " (Notation: ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mi, {
                    children: "s"
                  }), createVNode(_components.mo, {
                    children: "="
                  }), createVNode(_components.mi, {
                    children: "sup"
                  }), createVNode(_components.mo, {
                    children: "⁡"
                  }), createVNode(_components.mi, {
                    children: "M"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "s = \\sup M"
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
                  height: "0.4306em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "s"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), createVNode(_components.span, {
                class: "mrel",
                children: "="
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
                  height: "0.8778em",
                  verticalAlign: "-0.1944em"
                }
              }), createVNode(_components.span, {
                class: "mop",
                children: "sup"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.1667em"
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
        }), ") if:\n", createVNode(_components.ol, {
          children: ["\n", createVNode(_components.li, {
            children: [createVNode(_components.span, {
              class: "katex",
              children: [createVNode(_components.span, {
                class: "katex-mathml",
                children: createVNode(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: createVNode(_components.semantics, {
                    children: [createVNode(_components.mrow, {
                      children: createVNode(_components.mi, {
                        children: "s"
                      })
                    }), createVNode(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "s"
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
                      height: "0.4306em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    children: "s"
                  })]
                })
              })]
            }), " is an upper bound of ", createVNode(_components.span, {
              class: "katex",
              children: [createVNode(_components.span, {
                class: "katex-mathml",
                children: createVNode(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: createVNode(_components.semantics, {
                    children: [createVNode(_components.mrow, {
                      children: createVNode(_components.mi, {
                        children: "M"
                      })
                    }), createVNode(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "M"
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
                      height: "0.6833em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    style: {
                      marginRight: "0.10903em"
                    },
                    children: "M"
                  })]
                })
              })]
            }), "."]
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
                        children: "ϵ"
                      }), createVNode(_components.mo, {
                        children: ">"
                      }), createVNode(_components.mn, {
                        children: "0"
                      }), createVNode(_components.mi, {
                        mathvariant: "normal",
                        children: "∃"
                      }), createVNode(_components.mi, {
                        children: "x"
                      }), createVNode(_components.mo, {
                        children: "∈"
                      }), createVNode(_components.mi, {
                        children: "M"
                      }), createVNode(_components.mo, {
                        children: ":"
                      }), createVNode(_components.mi, {
                        children: "x"
                      }), createVNode(_components.mo, {
                        children: ">"
                      }), createVNode(_components.mi, {
                        children: "s"
                      }), createVNode(_components.mo, {
                        children: "−"
                      }), createVNode(_components.mi, {
                        children: "ϵ"
                      })]
                    }), createVNode(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "\\forall \\epsilon > 0 \\exists x \\in M: x > s - \\epsilon"
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
                    children: "ϵ"
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), createVNode(_components.span, {
                    class: "mrel",
                    children: ">"
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
                      height: "0.7335em",
                      verticalAlign: "-0.0391em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord",
                    children: "0∃"
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    children: "x"
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
                    children: "x"
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.2778em"
                    }
                  }), createVNode(_components.span, {
                    class: "mrel",
                    children: ">"
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
                    children: "s"
                  }), createVNode(_components.span, {
                    class: "mspace",
                    style: {
                      marginRight: "0.2222em"
                    }
                  }), createVNode(_components.span, {
                    class: "mbin",
                    children: "−"
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
                      height: "0.4306em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    children: "ϵ"
                  })]
                })]
              })]
            }), " (i.e., no number smaller than ", createVNode(_components.span, {
              class: "katex",
              children: [createVNode(_components.span, {
                class: "katex-mathml",
                children: createVNode(_components.math, {
                  xmlns: "http://www.w3.org/1998/Math/MathML",
                  children: createVNode(_components.semantics, {
                    children: [createVNode(_components.mrow, {
                      children: createVNode(_components.mi, {
                        children: "s"
                      })
                    }), createVNode(_components.annotation, {
                      encoding: "application/x-tex",
                      children: "s"
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
                      height: "0.4306em"
                    }
                  }), createVNode(_components.span, {
                    class: "mord mathnormal",
                    children: "s"
                  })]
                })
              })]
            }), " is an upper bound)."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Axiom 2.19 (Completeness Axiom - Vollständigkeitsaxiom)"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Every non-empty set ", createVNode(_components.span, {
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
        }), " that is ", createVNode(_components.strong, {
          children: "bounded above (nach oben beschränkt)"
        }), " has a ", createVNode(_components.strong, {
          children: "supremum (Supremum)"
        }), " ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mi, {
                    children: "s"
                  }), createVNode(_components.mo, {
                    children: "="
                  }), createVNode(_components.mi, {
                    children: "sup"
                  }), createVNode(_components.mo, {
                    children: "⁡"
                  }), createVNode(_components.mi, {
                    children: "M"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "s = \\sup M"
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
                  height: "0.4306em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "s"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), createVNode(_components.span, {
                class: "mrel",
                children: "="
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
                  height: "0.8778em",
                  verticalAlign: "-0.1944em"
                }
              }), createVNode(_components.span, {
                class: "mop",
                children: "sup"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.1667em"
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
        }), " in ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: createVNode(_components.mi, {
                    mathvariant: "double-struck",
                    children: "R"
                  })
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\mathbb{R}"
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
                children: "R"
              })]
            })
          })]
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "22-complex-numbers-komplexe-zahlen",
      children: "2.2. Complex Numbers (Komplexe Zahlen)"
    }), "\n", createVNode(_components.p, {
      children: ["The set of ", createVNode(_components.strong, {
        children: ["Complex Numbers (", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: createVNode(_components.mi, {
                    mathvariant: "double-struck",
                    children: "C"
                  })
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\mathbb{C}"
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
                children: "C"
              })]
            })
          })]
        }), ")"]
      }), " extends ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mi, {
                  mathvariant: "double-struck",
                  children: "R"
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\mathbb{R}"
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
              children: "R"
            })]
          })
        })]
      }), " by introducing the ", createVNode(_components.strong, {
        children: "imaginary unit (imaginäre Einheit)"
      }), " ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mi, {
                  children: "i"
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "i"
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
                height: "0.6595em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              children: "i"
            })]
          })
        })]
      }), " with ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: [createVNode(_components.msup, {
                  children: [createVNode(_components.mi, {
                    children: "i"
                  }), createVNode(_components.mn, {
                    children: "2"
                  })]
                }), createVNode(_components.mo, {
                  children: "="
                }), createVNode(_components.mo, {
                  children: "−"
                }), createVNode(_components.mn, {
                  children: "1"
                })]
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "i^2 = -1"
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
                height: "0.8141em"
              }
            }), createVNode(_components.span, {
              class: "mord",
              children: [createVNode(_components.span, {
                class: "mord mathnormal",
                children: "i"
              }), createVNode(_components.span, {
                class: "msupsub",
                children: createVNode(_components.span, {
                  class: "vlist-t",
                  children: createVNode(_components.span, {
                    class: "vlist-r",
                    children: createVNode(_components.span, {
                      class: "vlist",
                      style: {
                        height: "0.8141em"
                      },
                      children: createVNode(_components.span, {
                        style: {
                          top: "-3.063em",
                          marginRight: "0.05em"
                        },
                        children: [createVNode(_components.span, {
                          class: "pstrut",
                          style: {
                            height: "2.7em"
                          }
                        }), createVNode(_components.span, {
                          class: "sizing reset-size6 size3 mtight",
                          children: createVNode(_components.span, {
                            class: "mord mtight",
                            children: "2"
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), createVNode(_components.span, {
              class: "mrel",
              children: "="
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
                height: "0.7278em",
                verticalAlign: "-0.0833em"
              }
            }), createVNode(_components.span, {
              class: "mord",
              children: "−"
            }), createVNode(_components.span, {
              class: "mord",
              children: "1"
            })]
          })]
        })]
      }), ".\r\nA complex number ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mi, {
                  children: "z"
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "z"
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
                height: "0.4306em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              style: {
                marginRight: "0.04398em"
              },
              children: "z"
            })]
          })
        })]
      }), " is written as ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: [createVNode(_components.mi, {
                  children: "z"
                }), createVNode(_components.mo, {
                  children: "="
                }), createVNode(_components.mi, {
                  children: "x"
                }), createVNode(_components.mo, {
                  children: "+"
                }), createVNode(_components.mi, {
                  children: "i"
                }), createVNode(_components.mi, {
                  children: "y"
                })]
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "z = x + iy"
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
                height: "0.4306em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              style: {
                marginRight: "0.04398em"
              },
              children: "z"
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), createVNode(_components.span, {
              class: "mrel",
              children: "="
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
              children: "x"
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
                height: "0.854em",
                verticalAlign: "-0.1944em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              children: "i"
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              style: {
                marginRight: "0.03588em"
              },
              children: "y"
            })]
          })]
        })]
      }), ", where ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mi, {
                  children: "x"
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "x"
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
                height: "0.4306em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              children: "x"
            })]
          })
        })]
      }), " is the ", createVNode(_components.strong, {
        children: "real part (Realteil)"
      }), " ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: [createVNode(_components.mi, {
                  children: "R"
                }), createVNode(_components.mi, {
                  children: "e"
                }), createVNode(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), createVNode(_components.mi, {
                  children: "z"
                }), createVNode(_components.mo, {
                  stretchy: "false",
                  children: ")"
                })]
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "Re(z)"
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
              style: {
                marginRight: "0.00773em"
              },
              children: "R"
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              children: "e"
            }), createVNode(_components.span, {
              class: "mopen",
              children: "("
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              style: {
                marginRight: "0.04398em"
              },
              children: "z"
            }), createVNode(_components.span, {
              class: "mclose",
              children: ")"
            })]
          })
        })]
      }), " and ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mi, {
                  children: "y"
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "y"
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
                height: "0.625em",
                verticalAlign: "-0.1944em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              style: {
                marginRight: "0.03588em"
              },
              children: "y"
            })]
          })
        })]
      }), " is the ", createVNode(_components.strong, {
        children: "imaginary part (Imaginärteil)"
      }), " ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: [createVNode(_components.mi, {
                  children: "I"
                }), createVNode(_components.mi, {
                  children: "m"
                }), createVNode(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), createVNode(_components.mi, {
                  children: "z"
                }), createVNode(_components.mo, {
                  stretchy: "false",
                  children: ")"
                })]
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "Im(z)"
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
              style: {
                marginRight: "0.07847em"
              },
              children: "I"
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              children: "m"
            }), createVNode(_components.span, {
              class: "mopen",
              children: "("
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              style: {
                marginRight: "0.04398em"
              },
              children: "z"
            }), createVNode(_components.span, {
              class: "mclose",
              children: ")"
            })]
          })
        })]
      }), ", with ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: [createVNode(_components.mi, {
                  children: "x"
                }), createVNode(_components.mo, {
                  separator: "true",
                  children: ","
                }), createVNode(_components.mi, {
                  children: "y"
                }), createVNode(_components.mo, {
                  children: "∈"
                }), createVNode(_components.mi, {
                  mathvariant: "double-struck",
                  children: "R"
                })]
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "x, y \\in \\mathbb{R}"
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
                verticalAlign: "-0.1944em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              children: "x"
            }), createVNode(_components.span, {
              class: "mpunct",
              children: ","
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              style: {
                marginRight: "0.03588em"
              },
              children: "y"
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
            })]
          })]
        })]
      }), "."]
    }), "\n", createVNode(_components.hr, {})]
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

const url = "C:/Users/kutay/OneDrive/Documents/GitHub/content_hub/collections/lecture_notes-2025fall-analysis/analysis-2.1-real_and_complex.mdx";
const file = "C:/Users/kutay/OneDrive/Documents/GitHub/content_hub/collections/lecture_notes-2025fall-analysis/analysis-2.1-real_and_complex.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/kutay/OneDrive/Documents/GitHub/content_hub/collections/lecture_notes-2025fall-analysis/analysis-2.1-real_and_complex.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
