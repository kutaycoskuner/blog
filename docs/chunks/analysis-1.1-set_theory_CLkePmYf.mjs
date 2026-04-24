import { h as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_DJz8TuEr.mjs';

const frontmatter = {
  "template": 1.6,
  "revision": 0.3,
  "title": "Set Theory, Mappings, and Logical Inference",
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
  "sort_order": 1,
  "todo": ["add visuals for supremum und maximum", "add visuals for mappings"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "remarks",
    "text": "Remarks"
  }, {
    "depth": 2,
    "slug": "set-theory-mappings-and-logical-conclusions",
    "text": "Set Theory, Mappings, and Logical Conclusions"
  }, {
    "depth": 2,
    "slug": "11-basics-of-sets",
    "text": "1.1. Basics of Sets"
  }, {
    "depth": 3,
    "slug": "core-concepts",
    "text": "Core Concepts"
  }, {
    "depth": 3,
    "slug": "set-operations",
    "text": "Set Operations"
  }, {
    "depth": 2,
    "slug": "12-basics-of-mappingsfunctions",
    "text": "1.2. Basics of Mappings/Functions"
  }, {
    "depth": 2,
    "slug": "13-basics-of-logical-conclusions",
    "text": "1.3. Basics of Logical Conclusions"
  }];
}
function _createMdxContent(props) {
  const _components = {
    annotation: "annotation",
    blockquote: "blockquote",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    math: "math",
    mi: "mi",
    mn: "mn",
    mo: "mo",
    mrow: "mrow",
    mspace: "mspace",
    msup: "msup",
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
      id: "remarks",
      children: "Remarks"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.ol, {
        children: ["\n", createVNode(_components.li, {
          children: "These are my transcribed course notes from Leipzig Uni Winter Semestser 2025-26, by Prof. Dr. Alexander Fuchs-Kreiß"
        }), "\n", createVNode(_components.li, {
          children: "Since the courses held in German, I often state the German version of concepts."
        }), "\n", createVNode(_components.li, {
          children: "I use markdown with katex notation to provide mathematical expressions."
        }), "\n", createVNode(_components.li, {
          children: "Note: Transcription conducted through heavy use of LLMs (chatgpt, gemini, deepseek, claude, llama)"
        }), "\n", createVNode(_components.li, {
          children: "Note: These notes meant to remind and revision rather than direct learning, in order to learn one needs a practice material which this summary lacks. I will attempt to provide some additional sources and practice material sometime."
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "set-theory-mappings-and-logical-conclusions",
      children: "Set Theory, Mappings, and Logical Conclusions"
    }), "\n", createVNode(_components.h2, {
      id: "11-basics-of-sets",
      children: "1.1. Basics of Sets"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Basics of Sets (Grundlegendes über Mengen)"
      })
    }), "\n", createVNode(_components.p, {
      children: "This section introduces the foundational concepts and operations of set theory."
    }), "\n", createVNode(_components.h3, {
      id: "core-concepts",
      children: "Core Concepts"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Set (Menge)"
      }), ": A collection of distinct objects, called elements."]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Notation: ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mspace, {
                    width: "1em"
                  }), createVNode(_components.mi, {
                    children: "M"
                  }), createVNode(_components.mo, {
                    children: "="
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "{"
                  }), createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    children: "∣"
                  }), createVNode(_components.mi, {
                    children: "P"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), createVNode(_components.mtext, {
                    children: " is true"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "}"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\quad  M = \\{x \\mid P(x) \\text{ is true}\\} "
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
                  height: "0.6833em"
                }
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "1em"
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
                children: "{"
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
                children: "∣"
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
                  marginRight: "0.13889em"
                },
                children: "P"
              }), createVNode(_components.span, {
                class: "mopen",
                children: "("
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "x"
              }), createVNode(_components.span, {
                class: "mclose",
                children: ")"
              }), createVNode(_components.span, {
                class: "mord text",
                children: createVNode(_components.span, {
                  class: "mord",
                  children: " is true"
                })
              }), createVNode(_components.span, {
                class: "mclose",
                children: "}"
              })]
            })]
          })]
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Element"
      }), ": An object belonging to a set."]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Notation: ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mspace, {
                    width: "1em"
                  }), createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    children: "∈"
                  }), createVNode(_components.mi, {
                    children: "M"
                  }), createVNode(_components.mspace, {
                    width: "1em"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), createVNode(_components.mtext, {
                    children: "x is an element of "
                  }), createVNode(_components.mi, {
                    children: "M"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\quad  x \\in M \\quad (\\text{x is an element of } M)"
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
                class: "mspace",
                style: {
                  marginRight: "1em"
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
                class: "mspace",
                style: {
                  marginRight: "1em"
                }
              }), createVNode(_components.span, {
                class: "mopen",
                children: "("
              }), createVNode(_components.span, {
                class: "mord text",
                children: createVNode(_components.span, {
                  class: "mord",
                  children: "x is an element of "
                })
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.10903em"
                },
                children: "M"
              }), createVNode(_components.span, {
                class: "mclose",
                children: ")"
              })]
            })]
          })]
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Equality of Sets (Gleichheit von Mengen)"
      }), ": ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mi, {
                  children: "A"
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "A"
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
              children: "A"
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
                  children: "B"
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "B"
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
                marginRight: "0.05017em"
              },
              children: "B"
            })]
          })
        })]
      }), " have exactly the same elements."]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Notation: ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mspace, {
                    width: "1em"
                  }), createVNode(_components.mi, {
                    children: "A"
                  }), createVNode(_components.mo, {
                    children: "="
                  }), createVNode(_components.mi, {
                    children: "B"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\quad A = B"
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
                  height: "0.6833em"
                }
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "1em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "A"
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
                  height: "0.6833em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.05017em"
                },
                children: "B"
              })]
            })]
          })]
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Subset (Teilmenge)"
      }), ": All elements of ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mi, {
                  children: "A"
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "A"
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
              children: "A"
            })]
          })
        })]
      }), " also belong to ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mi, {
                  children: "B"
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "B"
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
                marginRight: "0.05017em"
              },
              children: "B"
            })]
          })
        })]
      }), "."]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Notation: ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mspace, {
                    width: "1em"
                  }), createVNode(_components.mi, {
                    children: "A"
                  }), createVNode(_components.mo, {
                    children: "⊂"
                  }), createVNode(_components.mi, {
                    children: "B"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\quad A \\subset B"
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
                class: "mspace",
                style: {
                  marginRight: "1em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "A"
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
                  height: "0.6833em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.05017em"
                },
                children: "B"
              })]
            })]
          })]
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Empty Set (Leere Menge)"
      }), ": The set containing no elements."]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Notation: ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mspace, {
                    width: "1em"
                  }), createVNode(_components.mi, {
                    mathvariant: "normal",
                    children: "∅"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\quad \\emptyset"
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
                  height: "0.8056em",
                  verticalAlign: "-0.0556em"
                }
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "1em"
                }
              }), createVNode(_components.span, {
                class: "mord",
                children: "∅"
              })]
            })
          })]
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "set-operations",
      children: "Set Operations"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Set Operations (Mengenoperationen)"
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Intersection (Schnittmenge)"
      }), ": Elements belonging to both ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mi, {
                  children: "A"
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "A"
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
              children: "A"
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
                  children: "B"
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "B"
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
                marginRight: "0.05017em"
              },
              children: "B"
            })]
          })
        })]
      }), "."]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Notation: ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mspace, {
                    width: "1em"
                  }), createVNode(_components.mi, {
                    children: "A"
                  }), createVNode(_components.mo, {
                    children: "∩"
                  }), createVNode(_components.mi, {
                    children: "B"
                  }), createVNode(_components.mo, {
                    children: "="
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "{"
                  }), createVNode(_components.mtext, {
                    children: " "
                  }), createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    children: ":"
                  }), createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    children: "∈"
                  }), createVNode(_components.mi, {
                    children: "A"
                  }), createVNode(_components.mtext, {
                    children: "  "
                  }), createVNode(_components.mo, {
                    children: "∧"
                  }), createVNode(_components.mtext, {
                    children: "  "
                  }), createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    children: "∈"
                  }), createVNode(_components.mi, {
                    children: "B"
                  }), createVNode(_components.mtext, {
                    children: " "
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "}"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\quad A \\cap B = \\{\\, x : x \\in A \\;\\wedge\\; x \\in B \\,\\}"
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
                  height: "0.6833em"
                }
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "1em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "A"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), createVNode(_components.span, {
                class: "mbin",
                children: "∩"
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
                  height: "0.6833em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.05017em"
                },
                children: "B"
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
                children: "{"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.1667em"
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
                children: "A"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
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
                  marginRight: "0.2778em"
                }
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
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.05017em"
                },
                children: "B"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), createVNode(_components.span, {
                class: "mclose",
                children: "}"
              })]
            })]
          })]
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Union (Vereinigung)"
      }), ": Elements belonging to ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mi, {
                  children: "A"
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "A"
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
              children: "A"
            })]
          })
        })]
      }), ", or ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mi, {
                  children: "B"
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "B"
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
                marginRight: "0.05017em"
              },
              children: "B"
            })]
          })
        })]
      }), ", or both."]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Notation: ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mspace, {
                    width: "1em"
                  }), createVNode(_components.mi, {
                    children: "A"
                  }), createVNode(_components.mo, {
                    children: "∪"
                  }), createVNode(_components.mi, {
                    children: "B"
                  }), createVNode(_components.mo, {
                    children: "="
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "{"
                  }), createVNode(_components.mtext, {
                    children: " "
                  }), createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    children: ":"
                  }), createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    children: "∈"
                  }), createVNode(_components.mi, {
                    children: "A"
                  }), createVNode(_components.mtext, {
                    children: "  "
                  }), createVNode(_components.mo, {
                    children: "∨"
                  }), createVNode(_components.mtext, {
                    children: "  "
                  }), createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    children: "∈"
                  }), createVNode(_components.mi, {
                    children: "B"
                  }), createVNode(_components.mtext, {
                    children: " "
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "}"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\quad A \\cup B = \\{\\, x : x \\in A \\;\\vee\\; x \\in B \\,\\}"
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
                  height: "0.6833em"
                }
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "1em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "A"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), createVNode(_components.span, {
                class: "mbin",
                children: "∪"
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
                  height: "0.6833em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.05017em"
                },
                children: "B"
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
                children: "{"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.1667em"
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
                children: "A"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), createVNode(_components.span, {
                class: "mbin",
                children: "∨"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
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
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.05017em"
                },
                children: "B"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), createVNode(_components.span, {
                class: "mclose",
                children: "}"
              })]
            })]
          })]
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Set difference (Differenzmenge)"
      }), ": Elements in ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mi, {
                  children: "A"
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "A"
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
              children: "A"
            })]
          })
        })]
      }), " but not in ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mi, {
                  children: "B"
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "B"
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
                marginRight: "0.05017em"
              },
              children: "B"
            })]
          })
        })]
      }), "."]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Notation: ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mspace, {
                    width: "1em"
                  }), createVNode(_components.mi, {
                    children: "A"
                  }), createVNode(_components.mo, {
                    children: "∖"
                  }), createVNode(_components.mi, {
                    children: "B"
                  }), createVNode(_components.mo, {
                    children: "="
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "{"
                  }), createVNode(_components.mtext, {
                    children: " "
                  }), createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    children: ":"
                  }), createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    children: "∈"
                  }), createVNode(_components.mi, {
                    children: "A"
                  }), createVNode(_components.mtext, {
                    children: " and "
                  }), createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    mathvariant: "normal",
                    children: "∉"
                  }), createVNode(_components.mi, {
                    children: "B"
                  }), createVNode(_components.mtext, {
                    children: " "
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "}"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\quad A \\setminus B = \\{\\, x : x \\in A \\text{ and } x \\notin B \\,\\}"
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
                class: "mspace",
                style: {
                  marginRight: "1em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "A"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), createVNode(_components.span, {
                class: "mbin",
                children: "∖"
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
                  height: "0.6833em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.05017em"
                },
                children: "B"
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
                children: "{"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.1667em"
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
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "A"
              }), createVNode(_components.span, {
                class: "mord text",
                children: createVNode(_components.span, {
                  class: "mord",
                  children: " and "
                })
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
                  class: "mord",
                  children: createVNode(_components.span, {
                    class: "mrel",
                    children: "∈"
                  })
                }), createVNode(_components.span, {
                  class: "mord vbox",
                  children: createVNode(_components.span, {
                    class: "thinbox",
                    children: createVNode(_components.span, {
                      class: "llap",
                      children: [createVNode(_components.span, {
                        class: "strut",
                        style: {
                          height: "1em",
                          verticalAlign: "-0.25em"
                        }
                      }), createVNode(_components.span, {
                        class: "inner",
                        children: createVNode(_components.span, {
                          class: "mord",
                          children: [createVNode(_components.span, {
                            class: "mord",
                            children: "/"
                          }), createVNode(_components.span, {
                            class: "mspace",
                            style: {
                              marginRight: "0.0556em"
                            }
                          })]
                        })
                      }), createVNode(_components.span, {
                        class: "fix"
                      })]
                    })
                  })
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
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.05017em"
                },
                children: "B"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), createVNode(_components.span, {
                class: "mclose",
                children: "}"
              })]
            })]
          })]
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Disjoint Sets (Disjunkte Mengen)"
      }), ": ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mi, {
                  children: "A"
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "A"
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
              children: "A"
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
                  children: "B"
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "B"
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
                marginRight: "0.05017em"
              },
              children: "B"
            })]
          })
        })]
      }), " have no common elements."]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Notation: ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mspace, {
                    width: "1em"
                  }), createVNode(_components.mi, {
                    children: "A"
                  }), createVNode(_components.mo, {
                    children: "∩"
                  }), createVNode(_components.mi, {
                    children: "B"
                  }), createVNode(_components.mo, {
                    children: "="
                  }), createVNode(_components.mi, {
                    mathvariant: "normal",
                    children: "∅"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\quad A \\cap B = \\emptyset"
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
                  height: "0.6833em"
                }
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "1em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "A"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), createVNode(_components.span, {
                class: "mbin",
                children: "∩"
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
                  height: "0.6833em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.05017em"
                },
                children: "B"
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
                  height: "0.8056em",
                  verticalAlign: "-0.0556em"
                }
              }), createVNode(_components.span, {
                class: "mord",
                children: "∅"
              })]
            })]
          })]
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Ordered Pair (Geordnetes Paar)"
      }), ": A pair of objects where the order matters. (such as coordinates)"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Notation: ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mspace, {
                    width: "1em"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), createVNode(_components.mi, {
                    children: "a"
                  }), createVNode(_components.mo, {
                    separator: "true",
                    children: ","
                  }), createVNode(_components.mi, {
                    children: "b"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), createVNode(_components.mo, {
                    mathvariant: "normal",
                    children: "≠"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), createVNode(_components.mi, {
                    children: "b"
                  }), createVNode(_components.mo, {
                    separator: "true",
                    children: ","
                  }), createVNode(_components.mi, {
                    children: "a"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), createVNode(_components.mspace, {
                    width: "1em"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), createVNode(_components.mtext, {
                    children: "if "
                  }), createVNode(_components.mi, {
                    children: "a"
                  }), createVNode(_components.mo, {
                    mathvariant: "normal",
                    children: "≠"
                  }), createVNode(_components.mi, {
                    children: "b"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\quad (a, b) \\neq (b, a) \\quad (\\text{if } a \\neq b)"
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
                class: "mspace",
                style: {
                  marginRight: "1em"
                }
              }), createVNode(_components.span, {
                class: "mopen",
                children: "("
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "a"
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
                children: "b"
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
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), createVNode(_components.span, {
                class: "mopen",
                children: "("
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "b"
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
                children: "a"
              }), createVNode(_components.span, {
                class: "mclose",
                children: ")"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "1em"
                }
              }), createVNode(_components.span, {
                class: "mopen",
                children: "("
              }), createVNode(_components.span, {
                class: "mord text",
                children: createVNode(_components.span, {
                  class: "mord",
                  children: "if "
                })
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "a"
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
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "b"
              }), createVNode(_components.span, {
                class: "mclose",
                children: ")"
              })]
            })]
          })]
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Cartesian Product (Kartesisches Produkt / Produktmenge)"
      }), ": The set of all possible ordered pairs ", createVNode(_components.span, {
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
                  children: "a"
                }), createVNode(_components.mo, {
                  separator: "true",
                  children: ","
                }), createVNode(_components.mi, {
                  children: "b"
                }), createVNode(_components.mo, {
                  stretchy: "false",
                  children: ")"
                })]
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "(a,b)"
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
              class: "mopen",
              children: "("
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              children: "a"
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
              children: "b"
            }), createVNode(_components.span, {
              class: "mclose",
              children: ")"
            })]
          })
        })]
      }), "."]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Notation: ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mspace, {
                    width: "1em"
                  }), createVNode(_components.mi, {
                    children: "A"
                  }), createVNode(_components.mo, {
                    children: "×"
                  }), createVNode(_components.mi, {
                    children: "B"
                  }), createVNode(_components.mo, {
                    children: "="
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "{"
                  }), createVNode(_components.mtext, {
                    children: " "
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), createVNode(_components.mi, {
                    children: "a"
                  }), createVNode(_components.mo, {
                    separator: "true",
                    children: ","
                  }), createVNode(_components.mi, {
                    children: "b"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), createVNode(_components.mo, {
                    children: ":"
                  }), createVNode(_components.mi, {
                    children: "a"
                  }), createVNode(_components.mo, {
                    children: "∈"
                  }), createVNode(_components.mi, {
                    children: "A"
                  }), createVNode(_components.mtext, {
                    children: " and "
                  }), createVNode(_components.mi, {
                    children: "b"
                  }), createVNode(_components.mo, {
                    children: "∈"
                  }), createVNode(_components.mi, {
                    children: "B"
                  }), createVNode(_components.mtext, {
                    children: " "
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "}"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\quad A \\times B = \\{\\, (a,b) : a \\in A \\text{ and } b \\in B \\,\\}"
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
                  height: "0.7667em",
                  verticalAlign: "-0.0833em"
                }
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "1em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "A"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), createVNode(_components.span, {
                class: "mbin",
                children: "×"
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
                  height: "0.6833em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.05017em"
                },
                children: "B"
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
                children: "{"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), createVNode(_components.span, {
                class: "mopen",
                children: "("
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "a"
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
                children: "b"
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
                children: "a"
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
                class: "mord mathnormal",
                children: "A"
              }), createVNode(_components.span, {
                class: "mord text",
                children: createVNode(_components.span, {
                  class: "mord",
                  children: " and "
                })
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "b"
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
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.05017em"
                },
                children: "B"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.1667em"
                }
              }), createVNode(_components.span, {
                class: "mclose",
                children: "}"
              })]
            })]
          })]
        })]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "12-basics-of-mappingsfunctions",
      children: "1.2. Basics of Mappings/Functions"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Definition 1.12 (Mapping/Function - Abbildung, Funktion)"
      })
    }), "\n", createVNode(_components.p, {
      children: ["A mapping ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mi, {
                  children: "f"
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "f"
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
                height: "0.8889em",
                verticalAlign: "-0.1944em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              style: {
                marginRight: "0.10764em"
              },
              children: "f"
            })]
          })
        })]
      }), " maps a set ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mi, {
                  children: "X"
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "X"
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
                marginRight: "0.07847em"
              },
              children: "X"
            })]
          })
        })]
      }), " to a set ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mi, {
                  children: "Y"
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "Y"
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
                marginRight: "0.22222em"
              },
              children: "Y"
            })]
          })
        })]
      }), "."]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Notation: ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mi, {
                    children: "f"
                  }), createVNode(_components.mo, {
                    children: ":"
                  }), createVNode(_components.mi, {
                    children: "X"
                  }), createVNode(_components.mo, {
                    children: "→"
                  }), createVNode(_components.mi, {
                    children: "Y"
                  }), createVNode(_components.mo, {
                    separator: "true",
                    children: ","
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "f: X \\rightarrow Y,"
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
                class: "mord mathnormal",
                style: {
                  marginRight: "0.10764em"
                },
                children: "f"
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
                  height: "0.6833em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.07847em"
                },
                children: "X"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), createVNode(_components.span, {
                class: "mrel",
                children: "→"
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
                class: "mord mathnormal",
                style: {
                  marginRight: "0.22222em"
                },
                children: "Y"
              }), createVNode(_components.span, {
                class: "mpunct",
                children: ","
              })]
            })]
          })]
        }), " ", createVNode(_components.span, {
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
                    children: "↦"
                  }), createVNode(_components.mi, {
                    children: "f"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "x \\mapsto f(x)"
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
                  height: "0.522em",
                  verticalAlign: "-0.011em"
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
                children: "↦"
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
                  marginRight: "0.10764em"
                },
                children: "f"
              }), createVNode(_components.span, {
                class: "mopen",
                children: "("
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "x"
              }), createVNode(_components.span, {
                class: "mclose",
                children: ")"
              })]
            })]
          })]
        }), ". The element ", createVNode(_components.span, {
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
                    children: "X"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "x \\in X"
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
                  height: "0.6833em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.07847em"
                },
                children: "X"
              })]
            })]
          })]
        }), " is assigned to the element ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mi, {
                    children: "f"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), createVNode(_components.mo, {
                    children: "∈"
                  }), createVNode(_components.mi, {
                    children: "Y"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "f(x) \\in Y"
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
                style: {
                  marginRight: "0.10764em"
                },
                children: "f"
              }), createVNode(_components.span, {
                class: "mopen",
                children: "("
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "x"
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
                  marginRight: "0.22222em"
                },
                children: "Y"
              })]
            })]
          })]
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Domain (Definitionsbereich)"
        }), ": ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mi, {
                    children: "d"
                  }), createVNode(_components.mi, {
                    children: "m"
                  }), createVNode(_components.mi, {
                    children: "n"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), createVNode(_components.mi, {
                    children: "f"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), createVNode(_components.mo, {
                    children: ":"
                  }), createVNode(_components.mo, {
                    children: "="
                  }), createVNode(_components.mi, {
                    children: "X"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "dmn(f) := X"
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
                children: "d"
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "mn"
              }), createVNode(_components.span, {
                class: "mopen",
                children: "("
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.10764em"
                },
                children: "f"
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
                  height: "0.6833em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.07847em"
                },
                children: "X"
              })]
            })]
          })]
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Image (Bild)"
        }), ": The set of all elements in ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: createVNode(_components.mi, {
                    children: "Y"
                  })
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "Y"
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
                  marginRight: "0.22222em"
                },
                children: "Y"
              })]
            })
          })]
        }), " that are reached by ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: createVNode(_components.mi, {
                    children: "f"
                  })
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "f"
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
                  height: "0.8889em",
                  verticalAlign: "-0.1944em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.10764em"
                },
                children: "f"
              })]
            })
          })]
        }), ":\r\n", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mi, {
                    children: "i"
                  }), createVNode(_components.mi, {
                    children: "m"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), createVNode(_components.mi, {
                    children: "f"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), createVNode(_components.mo, {
                    children: ":"
                  }), createVNode(_components.mo, {
                    children: "="
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "{"
                  }), createVNode(_components.mi, {
                    children: "y"
                  }), createVNode(_components.mo, {
                    children: "∈"
                  }), createVNode(_components.mi, {
                    children: "Y"
                  }), createVNode(_components.mo, {
                    children: ":"
                  }), createVNode(_components.mi, {
                    mathvariant: "normal",
                    children: "∃"
                  }), createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    children: "∈"
                  }), createVNode(_components.mi, {
                    children: "X"
                  }), createVNode(_components.mtext, {
                    children: " with "
                  }), createVNode(_components.mi, {
                    children: "y"
                  }), createVNode(_components.mo, {
                    children: "="
                  }), createVNode(_components.mi, {
                    children: "f"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "}"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "im(f) := \\{y \\in Y: \\exists x \\in X \\text{ with } y = f(x)\\}"
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
                children: "im"
              }), createVNode(_components.span, {
                class: "mopen",
                children: "("
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.10764em"
                },
                children: "f"
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
                class: "mopen",
                children: "{"
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
                  height: "0.6833em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.22222em"
                },
                children: "Y"
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
                  height: "0.7335em",
                  verticalAlign: "-0.0391em"
                }
              }), createVNode(_components.span, {
                class: "mord",
                children: "∃"
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
                class: "mord mathnormal",
                style: {
                  marginRight: "0.07847em"
                },
                children: "X"
              }), createVNode(_components.span, {
                class: "mord text",
                children: createVNode(_components.span, {
                  class: "mord",
                  children: " with "
                })
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
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.10764em"
                },
                children: "f"
              }), createVNode(_components.span, {
                class: "mopen",
                children: "("
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "x"
              }), createVNode(_components.span, {
                class: "mclose",
                children: ")}"
              })]
            })]
          })]
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Graph (Graph)"
        }), ": The set of all ordered pairs:\r\n", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mi, {
                    children: "F"
                  }), createVNode(_components.mo, {
                    children: "="
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "{"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    separator: "true",
                    children: ","
                  }), createVNode(_components.mi, {
                    children: "f"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), createVNode(_components.mo, {
                    children: ":"
                  }), createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    children: "∈"
                  }), createVNode(_components.mi, {
                    children: "X"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "}"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "F = \\{(x, f(x)): x \\in X\\}"
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
                  height: "0.6833em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.13889em"
                },
                children: "F"
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
                children: "{("
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
                  marginRight: "0.10764em"
                },
                children: "f"
              }), createVNode(_components.span, {
                class: "mopen",
                children: "("
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "x"
              }), createVNode(_components.span, {
                class: "mclose",
                children: "))"
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
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.07847em"
                },
                children: "X"
              }), createVNode(_components.span, {
                class: "mclose",
                children: "}"
              })]
            })]
          })]
        })]
      }), "\n", createVNode(_components.li, {
        children: ["If the target set ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: createVNode(_components.mi, {
                    children: "Y"
                  })
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "Y"
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
                  marginRight: "0.22222em"
                },
                children: "Y"
              })]
            })
          })]
        }), " is ", createVNode(_components.span, {
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
        }), ", ", createVNode(_components.span, {
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
        }), ", or ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: createVNode(_components.msup, {
                    children: [createVNode(_components.mi, {
                      mathvariant: "double-struck",
                      children: "R"
                    }), createVNode(_components.mi, {
                      children: "n"
                    })]
                  })
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "\\mathbb{R}^{n}"
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
                class: "mord",
                children: [createVNode(_components.span, {
                  class: "mord mathbb",
                  children: "R"
                }), createVNode(_components.span, {
                  class: "msupsub",
                  children: createVNode(_components.span, {
                    class: "vlist-t",
                    children: createVNode(_components.span, {
                      class: "vlist-r",
                      children: createVNode(_components.span, {
                        class: "vlist",
                        style: {
                          height: "0.6644em"
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
                              children: createVNode(_components.span, {
                                class: "mord mathnormal mtight",
                                children: "n"
                              })
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              })]
            })
          })]
        }), ", the mapping is often called a ", createVNode(_components.strong, {
          children: "Function (Funktion)"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Definition 1.15 (Image and Preimage - Bild und Urbild)"
      })
    }), "\n", createVNode(_components.p, {
      children: ["For a mapping ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: [createVNode(_components.mi, {
                  children: "f"
                }), createVNode(_components.mo, {
                  children: ":"
                }), createVNode(_components.mi, {
                  children: "X"
                }), createVNode(_components.mo, {
                  children: "→"
                }), createVNode(_components.mi, {
                  children: "Y"
                })]
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "f: X \\rightarrow Y"
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
              class: "mord mathnormal",
              style: {
                marginRight: "0.10764em"
              },
              children: "f"
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
                height: "0.6833em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              style: {
                marginRight: "0.07847em"
              },
              children: "X"
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), createVNode(_components.span, {
              class: "mrel",
              children: "→"
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
                marginRight: "0.22222em"
              },
              children: "Y"
            })]
          })]
        })]
      }), " and subsets ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: [createVNode(_components.msup, {
                  children: [createVNode(_components.mi, {
                    children: "X"
                  }), createVNode(_components.mo, {
                    mathvariant: "normal",
                    lspace: "0em",
                    rspace: "0em",
                    children: "′"
                  })]
                }), createVNode(_components.mo, {
                  children: "⊂"
                }), createVNode(_components.mi, {
                  children: "X"
                })]
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "X' \\subset X"
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
                height: "0.791em",
                verticalAlign: "-0.0391em"
              }
            }), createVNode(_components.span, {
              class: "mord",
              children: [createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.07847em"
                },
                children: "X"
              }), createVNode(_components.span, {
                class: "msupsub",
                children: createVNode(_components.span, {
                  class: "vlist-t",
                  children: createVNode(_components.span, {
                    class: "vlist-r",
                    children: createVNode(_components.span, {
                      class: "vlist",
                      style: {
                        height: "0.7519em"
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
                            children: createVNode(_components.span, {
                              class: "mord mtight",
                              children: "′"
                            })
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
                height: "0.6833em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              style: {
                marginRight: "0.07847em"
              },
              children: "X"
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
                children: [createVNode(_components.msup, {
                  children: [createVNode(_components.mi, {
                    children: "Y"
                  }), createVNode(_components.mo, {
                    mathvariant: "normal",
                    lspace: "0em",
                    rspace: "0em",
                    children: "′"
                  })]
                }), createVNode(_components.mo, {
                  children: "⊂"
                }), createVNode(_components.mi, {
                  children: "Y"
                })]
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "Y' \\subset Y"
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
                height: "0.791em",
                verticalAlign: "-0.0391em"
              }
            }), createVNode(_components.span, {
              class: "mord",
              children: [createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.22222em"
                },
                children: "Y"
              }), createVNode(_components.span, {
                class: "msupsub",
                children: createVNode(_components.span, {
                  class: "vlist-t",
                  children: createVNode(_components.span, {
                    class: "vlist-r",
                    children: createVNode(_components.span, {
                      class: "vlist",
                      style: {
                        height: "0.7519em"
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
                            children: createVNode(_components.span, {
                              class: "mord mtight",
                              children: "′"
                            })
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
                height: "0.6833em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              style: {
                marginRight: "0.22222em"
              },
              children: "Y"
            })]
          })]
        })]
      }), ":"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: ["f-Image of ", createVNode(_components.span, {
            class: "katex",
            children: [createVNode(_components.span, {
              class: "katex-mathml",
              children: createVNode(_components.math, {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                children: createVNode(_components.semantics, {
                  children: [createVNode(_components.mrow, {
                    children: createVNode(_components.msup, {
                      children: [createVNode(_components.mi, {
                        children: "X"
                      }), createVNode(_components.mo, {
                        mathvariant: "normal",
                        lspace: "0em",
                        rspace: "0em",
                        children: "′"
                      })]
                    })
                  }), createVNode(_components.annotation, {
                    encoding: "application/x-tex",
                    children: "X'"
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
                    height: "0.7519em"
                  }
                }), createVNode(_components.span, {
                  class: "mord",
                  children: [createVNode(_components.span, {
                    class: "mord mathnormal",
                    style: {
                      marginRight: "0.07847em"
                    },
                    children: "X"
                  }), createVNode(_components.span, {
                    class: "msupsub",
                    children: createVNode(_components.span, {
                      class: "vlist-t",
                      children: createVNode(_components.span, {
                        class: "vlist-r",
                        children: createVNode(_components.span, {
                          class: "vlist",
                          style: {
                            height: "0.7519em"
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
                                children: createVNode(_components.span, {
                                  class: "mord mtight",
                                  children: "′"
                                })
                              })
                            })]
                          })
                        })
                      })
                    })
                  })]
                })]
              })
            })]
          }), " (f-Bild von ", createVNode(_components.span, {
            class: "katex",
            children: [createVNode(_components.span, {
              class: "katex-mathml",
              children: createVNode(_components.math, {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                children: createVNode(_components.semantics, {
                  children: [createVNode(_components.mrow, {
                    children: createVNode(_components.msup, {
                      children: [createVNode(_components.mi, {
                        children: "X"
                      }), createVNode(_components.mo, {
                        mathvariant: "normal",
                        lspace: "0em",
                        rspace: "0em",
                        children: "′"
                      })]
                    })
                  }), createVNode(_components.annotation, {
                    encoding: "application/x-tex",
                    children: "X'"
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
                    height: "0.7519em"
                  }
                }), createVNode(_components.span, {
                  class: "mord",
                  children: [createVNode(_components.span, {
                    class: "mord mathnormal",
                    style: {
                      marginRight: "0.07847em"
                    },
                    children: "X"
                  }), createVNode(_components.span, {
                    class: "msupsub",
                    children: createVNode(_components.span, {
                      class: "vlist-t",
                      children: createVNode(_components.span, {
                        class: "vlist-r",
                        children: createVNode(_components.span, {
                          class: "vlist",
                          style: {
                            height: "0.7519em"
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
                                children: createVNode(_components.span, {
                                  class: "mord mtight",
                                  children: "′"
                                })
                              })
                            })]
                          })
                        })
                      })
                    })
                  })]
                })]
              })
            })]
          }), ")"]
        }), ":\r\n", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mi, {
                    children: "f"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), createVNode(_components.msup, {
                    children: [createVNode(_components.mi, {
                      children: "X"
                    }), createVNode(_components.mo, {
                      mathvariant: "normal",
                      lspace: "0em",
                      rspace: "0em",
                      children: "′"
                    })]
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), createVNode(_components.mo, {
                    children: "="
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "{"
                  }), createVNode(_components.mi, {
                    children: "f"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), createVNode(_components.mo, {
                    children: ":"
                  }), createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    children: "∈"
                  }), createVNode(_components.msup, {
                    children: [createVNode(_components.mi, {
                      children: "X"
                    }), createVNode(_components.mo, {
                      mathvariant: "normal",
                      lspace: "0em",
                      rspace: "0em",
                      children: "′"
                    })]
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "}"
                  }), createVNode(_components.mo, {
                    children: "⊂"
                  }), createVNode(_components.mi, {
                    children: "Y"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "f(X') = \\{f(x): x \\in X'\\} \\subset Y"
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
                  height: "1.0019em",
                  verticalAlign: "-0.25em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.10764em"
                },
                children: "f"
              }), createVNode(_components.span, {
                class: "mopen",
                children: "("
              }), createVNode(_components.span, {
                class: "mord",
                children: [createVNode(_components.span, {
                  class: "mord mathnormal",
                  style: {
                    marginRight: "0.07847em"
                  },
                  children: "X"
                }), createVNode(_components.span, {
                  class: "msupsub",
                  children: createVNode(_components.span, {
                    class: "vlist-t",
                    children: createVNode(_components.span, {
                      class: "vlist-r",
                      children: createVNode(_components.span, {
                        class: "vlist",
                        style: {
                          height: "0.7519em"
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
                              children: createVNode(_components.span, {
                                class: "mord mtight",
                                children: "′"
                              })
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
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
                children: "{"
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.10764em"
                },
                children: "f"
              }), createVNode(_components.span, {
                class: "mopen",
                children: "("
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "x"
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
                  height: "1.0019em",
                  verticalAlign: "-0.25em"
                }
              }), createVNode(_components.span, {
                class: "mord",
                children: [createVNode(_components.span, {
                  class: "mord mathnormal",
                  style: {
                    marginRight: "0.07847em"
                  },
                  children: "X"
                }), createVNode(_components.span, {
                  class: "msupsub",
                  children: createVNode(_components.span, {
                    class: "vlist-t",
                    children: createVNode(_components.span, {
                      class: "vlist-r",
                      children: createVNode(_components.span, {
                        class: "vlist",
                        style: {
                          height: "0.7519em"
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
                              children: createVNode(_components.span, {
                                class: "mord mtight",
                                children: "′"
                              })
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              }), createVNode(_components.span, {
                class: "mclose",
                children: "}"
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
                  height: "0.6833em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.22222em"
                },
                children: "Y"
              })]
            })]
          })]
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: ["f-Preimage of ", createVNode(_components.span, {
            class: "katex",
            children: [createVNode(_components.span, {
              class: "katex-mathml",
              children: createVNode(_components.math, {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                children: createVNode(_components.semantics, {
                  children: [createVNode(_components.mrow, {
                    children: createVNode(_components.msup, {
                      children: [createVNode(_components.mi, {
                        children: "Y"
                      }), createVNode(_components.mo, {
                        mathvariant: "normal",
                        lspace: "0em",
                        rspace: "0em",
                        children: "′"
                      })]
                    })
                  }), createVNode(_components.annotation, {
                    encoding: "application/x-tex",
                    children: "Y'"
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
                    height: "0.7519em"
                  }
                }), createVNode(_components.span, {
                  class: "mord",
                  children: [createVNode(_components.span, {
                    class: "mord mathnormal",
                    style: {
                      marginRight: "0.22222em"
                    },
                    children: "Y"
                  }), createVNode(_components.span, {
                    class: "msupsub",
                    children: createVNode(_components.span, {
                      class: "vlist-t",
                      children: createVNode(_components.span, {
                        class: "vlist-r",
                        children: createVNode(_components.span, {
                          class: "vlist",
                          style: {
                            height: "0.7519em"
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
                                children: createVNode(_components.span, {
                                  class: "mord mtight",
                                  children: "′"
                                })
                              })
                            })]
                          })
                        })
                      })
                    })
                  })]
                })]
              })
            })]
          }), " (f-Urbild von ", createVNode(_components.span, {
            class: "katex",
            children: [createVNode(_components.span, {
              class: "katex-mathml",
              children: createVNode(_components.math, {
                xmlns: "http://www.w3.org/1998/Math/MathML",
                children: createVNode(_components.semantics, {
                  children: [createVNode(_components.mrow, {
                    children: createVNode(_components.msup, {
                      children: [createVNode(_components.mi, {
                        children: "Y"
                      }), createVNode(_components.mo, {
                        mathvariant: "normal",
                        lspace: "0em",
                        rspace: "0em",
                        children: "′"
                      })]
                    })
                  }), createVNode(_components.annotation, {
                    encoding: "application/x-tex",
                    children: "Y'"
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
                    height: "0.7519em"
                  }
                }), createVNode(_components.span, {
                  class: "mord",
                  children: [createVNode(_components.span, {
                    class: "mord mathnormal",
                    style: {
                      marginRight: "0.22222em"
                    },
                    children: "Y"
                  }), createVNode(_components.span, {
                    class: "msupsub",
                    children: createVNode(_components.span, {
                      class: "vlist-t",
                      children: createVNode(_components.span, {
                        class: "vlist-r",
                        children: createVNode(_components.span, {
                          class: "vlist",
                          style: {
                            height: "0.7519em"
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
                                children: createVNode(_components.span, {
                                  class: "mord mtight",
                                  children: "′"
                                })
                              })
                            })]
                          })
                        })
                      })
                    })
                  })]
                })]
              })
            })]
          }), ")"]
        }), ":\r\n", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.msup, {
                    children: [createVNode(_components.mi, {
                      children: "f"
                    }), createVNode(_components.mrow, {
                      children: [createVNode(_components.mo, {
                        children: "−"
                      }), createVNode(_components.mn, {
                        children: "1"
                      })]
                    })]
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), createVNode(_components.msup, {
                    children: [createVNode(_components.mi, {
                      children: "Y"
                    }), createVNode(_components.mo, {
                      mathvariant: "normal",
                      lspace: "0em",
                      rspace: "0em",
                      children: "′"
                    })]
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), createVNode(_components.mo, {
                    children: "="
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "{"
                  }), createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    children: "∈"
                  }), createVNode(_components.mi, {
                    children: "X"
                  }), createVNode(_components.mo, {
                    children: ":"
                  }), createVNode(_components.mi, {
                    children: "f"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), createVNode(_components.mo, {
                    children: "∈"
                  }), createVNode(_components.msup, {
                    children: [createVNode(_components.mi, {
                      children: "Y"
                    }), createVNode(_components.mo, {
                      mathvariant: "normal",
                      lspace: "0em",
                      rspace: "0em",
                      children: "′"
                    })]
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "}"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "f^{-1}(Y') = \\{x \\in X: f(x) \\in Y'\\}"
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
                  height: "1.0641em",
                  verticalAlign: "-0.25em"
                }
              }), createVNode(_components.span, {
                class: "mord",
                children: [createVNode(_components.span, {
                  class: "mord mathnormal",
                  style: {
                    marginRight: "0.10764em"
                  },
                  children: "f"
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
              }), createVNode(_components.span, {
                class: "mopen",
                children: "("
              }), createVNode(_components.span, {
                class: "mord",
                children: [createVNode(_components.span, {
                  class: "mord mathnormal",
                  style: {
                    marginRight: "0.22222em"
                  },
                  children: "Y"
                }), createVNode(_components.span, {
                  class: "msupsub",
                  children: createVNode(_components.span, {
                    class: "vlist-t",
                    children: createVNode(_components.span, {
                      class: "vlist-r",
                      children: createVNode(_components.span, {
                        class: "vlist",
                        style: {
                          height: "0.7519em"
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
                              children: createVNode(_components.span, {
                                class: "mord mtight",
                                children: "′"
                              })
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
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
                children: "{"
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
                  marginRight: "0.07847em"
                },
                children: "X"
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
                  marginRight: "0.10764em"
                },
                children: "f"
              }), createVNode(_components.span, {
                class: "mopen",
                children: "("
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "x"
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
                  height: "1.0019em",
                  verticalAlign: "-0.25em"
                }
              }), createVNode(_components.span, {
                class: "mord",
                children: [createVNode(_components.span, {
                  class: "mord mathnormal",
                  style: {
                    marginRight: "0.22222em"
                  },
                  children: "Y"
                }), createVNode(_components.span, {
                  class: "msupsub",
                  children: createVNode(_components.span, {
                    class: "vlist-t",
                    children: createVNode(_components.span, {
                      class: "vlist-r",
                      children: createVNode(_components.span, {
                        class: "vlist",
                        style: {
                          height: "0.7519em"
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
                              children: createVNode(_components.span, {
                                class: "mord mtight",
                                children: "′"
                              })
                            })
                          })]
                        })
                      })
                    })
                  })
                })]
              }), createVNode(_components.span, {
                class: "mclose",
                children: "}"
              })]
            })]
          })]
        })]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Definition 1.17 (Composition - Verkettung)"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Given mappings ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: [createVNode(_components.mi, {
                  children: "f"
                }), createVNode(_components.mo, {
                  children: ":"
                }), createVNode(_components.mi, {
                  children: "X"
                }), createVNode(_components.mo, {
                  children: "→"
                }), createVNode(_components.mi, {
                  children: "Y"
                })]
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "f: X \\rightarrow Y"
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
              class: "mord mathnormal",
              style: {
                marginRight: "0.10764em"
              },
              children: "f"
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
                height: "0.6833em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              style: {
                marginRight: "0.07847em"
              },
              children: "X"
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), createVNode(_components.span, {
              class: "mrel",
              children: "→"
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
                marginRight: "0.22222em"
              },
              children: "Y"
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
                children: [createVNode(_components.mi, {
                  children: "g"
                }), createVNode(_components.mo, {
                  children: ":"
                }), createVNode(_components.mi, {
                  children: "Y"
                }), createVNode(_components.mo, {
                  children: "→"
                }), createVNode(_components.mi, {
                  children: "Z"
                })]
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "g: Y \\rightarrow Z"
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
              children: "g"
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
                height: "0.6833em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              style: {
                marginRight: "0.22222em"
              },
              children: "Y"
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), createVNode(_components.span, {
              class: "mrel",
              children: "→"
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
                marginRight: "0.07153em"
              },
              children: "Z"
            })]
          })]
        })]
      }), ", the ", createVNode(_components.strong, {
        children: "composition (Verkettung)"
      }), " of ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mi, {
                  children: "g"
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "g"
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
              children: "g"
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
                  children: "f"
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "f"
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
                height: "0.8889em",
                verticalAlign: "-0.1944em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              style: {
                marginRight: "0.10764em"
              },
              children: "f"
            })]
          })
        })]
      }), " is defined as:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mi, {
                    children: "g"
                  }), createVNode(_components.mo, {
                    children: "∘"
                  }), createVNode(_components.mi, {
                    children: "f"
                  }), createVNode(_components.mo, {
                    children: ":"
                  }), createVNode(_components.mi, {
                    children: "X"
                  }), createVNode(_components.mo, {
                    children: "→"
                  }), createVNode(_components.mi, {
                    children: "Z"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "g \\circ f: X \\rightarrow Z"
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
                  height: "0.6389em",
                  verticalAlign: "-0.1944em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.03588em"
                },
                children: "g"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), createVNode(_components.span, {
                class: "mbin",
                children: "∘"
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
                  height: "0.8889em",
                  verticalAlign: "-0.1944em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.10764em"
                },
                children: "f"
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
                  height: "0.6833em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.07847em"
                },
                children: "X"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), createVNode(_components.span, {
                class: "mrel",
                children: "→"
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
                  marginRight: "0.07153em"
                },
                children: "Z"
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
                  children: [createVNode(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), createVNode(_components.mi, {
                    children: "g"
                  }), createVNode(_components.mo, {
                    children: "∘"
                  }), createVNode(_components.mi, {
                    children: "f"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), createVNode(_components.mo, {
                    children: "="
                  }), createVNode(_components.mi, {
                    children: "g"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), createVNode(_components.mi, {
                    children: "f"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "(g \\circ f)(x) = g(f(x))"
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
                style: {
                  marginRight: "0.03588em"
                },
                children: "g"
              }), createVNode(_components.span, {
                class: "mspace",
                style: {
                  marginRight: "0.2222em"
                }
              }), createVNode(_components.span, {
                class: "mbin",
                children: "∘"
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
                  marginRight: "0.10764em"
                },
                children: "f"
              }), createVNode(_components.span, {
                class: "mclose",
                children: ")"
              }), createVNode(_components.span, {
                class: "mopen",
                children: "("
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "x"
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
                class: "mord mathnormal",
                style: {
                  marginRight: "0.03588em"
                },
                children: "g"
              }), createVNode(_components.span, {
                class: "mopen",
                children: "("
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.10764em"
                },
                children: "f"
              }), createVNode(_components.span, {
                class: "mopen",
                children: "("
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "x"
              }), createVNode(_components.span, {
                class: "mclose",
                children: "))"
              })]
            })]
          })]
        }), " for ", createVNode(_components.span, {
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
                    children: "X"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "x \\in X"
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
                  height: "0.6833em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.07847em"
                },
                children: "X"
              })]
            })]
          })]
        })]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "13-basics-of-logical-conclusions",
      children: "1.3. Basics of Logical Conclusions"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Basics of Logical Conclusions (Grundlegendes über logische Schlussfolgerungen)"
      })
    }), "\n", createVNode(_components.p, {
      children: ["Mathematics derives statements from fundamental ", createVNode(_components.strong, {
        children: "Axioms (Axiome)"
      }), " using formal logic."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Definition 1.18 (Implication - Implikation)"
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
                    children: "A"
                  }), createVNode(_components.mo, {
                    children: "⇒"
                  }), createVNode(_components.mi, {
                    children: "B"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "A \\Rightarrow B"
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
                  height: "0.6833em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "A"
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
                  height: "0.6833em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.05017em"
                },
                children: "B"
              })]
            })]
          })]
        }), ": The correctness of statement ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: createVNode(_components.mi, {
                    children: "A"
                  })
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "A"
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
                children: "A"
              })]
            })
          })]
        }), " implies that statement ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: createVNode(_components.mi, {
                    children: "B"
                  })
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "B"
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
                  marginRight: "0.05017em"
                },
                children: "B"
              })]
            })
          })]
        }), " is also correct."]
      }), "\n", createVNode(_components.li, {
        children: ["For conditions ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mi, {
                    children: "P"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "P(x)"
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
                  marginRight: "0.13889em"
                },
                children: "P"
              }), createVNode(_components.span, {
                class: "mopen",
                children: "("
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "x"
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
                  children: [createVNode(_components.mi, {
                    children: "Q"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "Q(x)"
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
                children: "Q"
              }), createVNode(_components.span, {
                class: "mopen",
                children: "("
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "x"
              }), createVNode(_components.span, {
                class: "mclose",
                children: ")"
              })]
            })
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
                    children: "P"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), createVNode(_components.mo, {
                    children: "⇒"
                  }), createVNode(_components.mi, {
                    children: "Q"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "P(x) \\Rightarrow Q(x)"
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
                style: {
                  marginRight: "0.13889em"
                },
                children: "P"
              }), createVNode(_components.span, {
                class: "mopen",
                children: "("
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "x"
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
                children: "Q"
              }), createVNode(_components.span, {
                class: "mopen",
                children: "("
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "x"
              }), createVNode(_components.span, {
                class: "mclose",
                children: ")"
              })]
            })]
          })]
        }), " means that ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mi, {
                    children: "Q"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "Q(x)"
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
                children: "Q"
              }), createVNode(_components.span, {
                class: "mopen",
                children: "("
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "x"
              }), createVNode(_components.span, {
                class: "mclose",
                children: ")"
              })]
            })
          })]
        }), " is true for an element whenever ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mi, {
                    children: "P"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "P(x)"
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
                  marginRight: "0.13889em"
                },
                children: "P"
              }), createVNode(_components.span, {
                class: "mopen",
                children: "("
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "x"
              }), createVNode(_components.span, {
                class: "mclose",
                children: ")"
              })]
            })
          })]
        }), " is true."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Lemma 1.21 (Set Interpretation)"
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
                  children: ":"
                }), createVNode(_components.mo, {
                  children: "="
                }), createVNode(_components.mo, {
                  stretchy: "false",
                  children: "{"
                }), createVNode(_components.mi, {
                  children: "x"
                }), createVNode(_components.mo, {
                  children: ":"
                }), createVNode(_components.mi, {
                  children: "P"
                }), createVNode(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), createVNode(_components.mi, {
                  children: "x"
                }), createVNode(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), createVNode(_components.mtext, {
                  children: " is true"
                }), createVNode(_components.mo, {
                  stretchy: "false",
                  children: "}"
                })]
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "A:=\\{x: P(x) \\text{ is true}\\}"
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
                height: "0.6833em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              children: "A"
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
              class: "mopen",
              children: "{"
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
                marginRight: "0.13889em"
              },
              children: "P"
            }), createVNode(_components.span, {
              class: "mopen",
              children: "("
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              children: "x"
            }), createVNode(_components.span, {
              class: "mclose",
              children: ")"
            }), createVNode(_components.span, {
              class: "mord text",
              children: createVNode(_components.span, {
                class: "mord",
                children: " is true"
              })
            }), createVNode(_components.span, {
              class: "mclose",
              children: "}"
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
                children: [createVNode(_components.mi, {
                  children: "B"
                }), createVNode(_components.mo, {
                  children: ":"
                }), createVNode(_components.mo, {
                  children: "="
                }), createVNode(_components.mo, {
                  stretchy: "false",
                  children: "{"
                }), createVNode(_components.mi, {
                  children: "x"
                }), createVNode(_components.mo, {
                  children: ":"
                }), createVNode(_components.mi, {
                  children: "Q"
                }), createVNode(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), createVNode(_components.mi, {
                  children: "x"
                }), createVNode(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), createVNode(_components.mtext, {
                  children: " is true"
                }), createVNode(_components.mo, {
                  stretchy: "false",
                  children: "}"
                })]
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "B:=\\{x: Q(x) \\text{ is true}\\}"
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
                height: "0.6833em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              style: {
                marginRight: "0.05017em"
              },
              children: "B"
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
              class: "mopen",
              children: "{"
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
              children: "Q"
            }), createVNode(_components.span, {
              class: "mopen",
              children: "("
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              children: "x"
            }), createVNode(_components.span, {
              class: "mclose",
              children: ")"
            }), createVNode(_components.span, {
              class: "mord text",
              children: createVNode(_components.span, {
                class: "mord",
                children: " is true"
              })
            }), createVNode(_components.span, {
              class: "mclose",
              children: "}"
            })]
          })]
        })]
      }), "."]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["The implication ", createVNode(_components.span, {
          class: "katex",
          children: [createVNode(_components.span, {
            class: "katex-mathml",
            children: createVNode(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: createVNode(_components.semantics, {
                children: [createVNode(_components.mrow, {
                  children: [createVNode(_components.mi, {
                    children: "P"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  }), createVNode(_components.mo, {
                    children: "⇒"
                  }), createVNode(_components.mi, {
                    children: "Q"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: "("
                  }), createVNode(_components.mi, {
                    children: "x"
                  }), createVNode(_components.mo, {
                    stretchy: "false",
                    children: ")"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "P(x) \\Rightarrow Q(x)"
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
                style: {
                  marginRight: "0.13889em"
                },
                children: "P"
              }), createVNode(_components.span, {
                class: "mopen",
                children: "("
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "x"
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
                children: "Q"
              }), createVNode(_components.span, {
                class: "mopen",
                children: "("
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "x"
              }), createVNode(_components.span, {
                class: "mclose",
                children: ")"
              })]
            })]
          })]
        }), " is equivalent to the subset relation ", createVNode(_components.span, {
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
                    children: "⊂"
                  }), createVNode(_components.mi, {
                    children: "B"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "A \\subset B"
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
                children: "A"
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
                  height: "0.6833em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.05017em"
                },
                children: "B"
              })]
            })]
          })]
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Definition 1.22 (Equivalence - Äquivalenz)"
      }), "\r\nTwo statements ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: createVNode(_components.mi, {
                  children: "A"
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "A"
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
              children: "A"
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
                  children: "B"
                })
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "B"
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
                marginRight: "0.05017em"
              },
              children: "B"
            })]
          })
        })]
      }), " are called ", createVNode(_components.strong, {
        children: "equivalent (äquivalent)"
      }), " if both ", createVNode(_components.span, {
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
                  children: "⇒"
                }), createVNode(_components.mi, {
                  children: "B"
                })]
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "A \\Rightarrow B"
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
                height: "0.6833em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              children: "A"
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
                height: "0.6833em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              style: {
                marginRight: "0.05017em"
              },
              children: "B"
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
                children: [createVNode(_components.mi, {
                  children: "B"
                }), createVNode(_components.mo, {
                  children: "⇒"
                }), createVNode(_components.mi, {
                  children: "A"
                })]
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "B \\Rightarrow A"
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
                height: "0.6833em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              style: {
                marginRight: "0.05017em"
              },
              children: "B"
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
                height: "0.6833em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              children: "A"
            })]
          })]
        })]
      }), " hold."]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Notation: ", createVNode(_components.span, {
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
                    children: "⇔"
                  }), createVNode(_components.mi, {
                    children: "B"
                  })]
                }), createVNode(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "A \\Leftrightarrow B"
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
                  height: "0.6833em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                children: "A"
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
                  height: "0.6833em"
                }
              }), createVNode(_components.span, {
                class: "mord mathnormal",
                style: {
                  marginRight: "0.05017em"
                },
                children: "B"
              })]
            })]
          })]
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: ["Read as: A holds ", createVNode(_components.strong, {
          children: "if and only if"
        }), " (", createVNode(_components.strong, {
          children: "genau dann, wenn"
        }), " - gdw.) B holds."]
      }), "\n"]
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

const url = "C:/Users/kutay/OneDrive/Documents/GitHub/content_hub/collections/lecture_notes-2025fall-analysis/analysis-1.1-set_theory.mdx";
const file = "C:/Users/kutay/OneDrive/Documents/GitHub/content_hub/collections/lecture_notes-2025fall-analysis/analysis-1.1-set_theory.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/kutay/OneDrive/Documents/GitHub/content_hub/collections/lecture_notes-2025fall-analysis/analysis-1.1-set_theory.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
