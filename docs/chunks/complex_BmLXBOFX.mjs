import { h as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_DJz8TuEr.mjs';
import { T as TestBarChart, a as TestLerpSlider } from './TestLerpSlider_Dnoyj6mS.mjs';

const frontmatter = {
  "template": 1.6,
  "revision": 0.5,
  "title": "Test complex math notations with native MDX",
  "description": "KaTeX complex math statements tests using standard $$ delimiters",
  "category": ["sveltekit", "svelte"],
  "tags": ["game-design", "draft"],
  "created": "2025-10-30T00:00:00.000Z",
  "updated": "2025-11-11T00:00:00.000Z",
  "author": "lichzelg",
  "language": "en",
  "visibility": true,
  "sort_order": 1
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "testing-katex-with-standard-markdown-mdx-syntax",
    "text": "Testing KaTeX with Standard Markdown (MDX) Syntax"
  }, {
    "depth": 2,
    "slug": "some-title",
    "text": "Some title"
  }, {
    "depth": 3,
    "slug": "1-quadratic-formula-display-mode",
    "text": "1. Quadratic Formula (Display Mode)"
  }, {
    "depth": 3,
    "slug": "2-logical-statements-display-mode",
    "text": "2. Logical Statements (Display Mode)"
  }, {
    "depth": 3,
    "slug": "3-matrix-and-systems-of-equations-display-mode",
    "text": "3. Matrix and Systems of Equations (Display Mode)"
  }, {
    "depth": 3,
    "slug": "4-complex-integral-with-limits-display-mode",
    "text": "4. Complex Integral with Limits (Display Mode)"
  }, {
    "depth": 3,
    "slug": "5-piecewise-function-display-mode",
    "text": "5. Piecewise Function (Display Mode)"
  }, {
    "depth": 2,
    "slug": "6-component-test-still-works-in-mdx",
    "text": "6. Component Test (Still works in MDX!)"
  }, {
    "depth": 2,
    "slug": "interactive-component-examples",
    "text": "Interactive Component Examples"
  }];
}
function _createMdxContent(props) {
  const _components = {
    annotation: "annotation",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    math: "math",
    mfrac: "mfrac",
    mi: "mi",
    mn: "mn",
    mo: "mo",
    mrow: "mrow",
    msqrt: "msqrt",
    mstyle: "mstyle",
    msubsup: "msubsup",
    msup: "msup",
    mtable: "mtable",
    mtd: "mtd",
    mtext: "mtext",
    mtr: "mtr",
    p: "p",
    path: "path",
    semantics: "semantics",
    span: "span",
    svg: "svg",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "testing-katex-with-standard-markdown-mdx-syntax",
      children: "Testing KaTeX with Standard Markdown (MDX) Syntax"
    }), "\n", createVNode("p", {
      children: createVNode(_components.p, {
        children: "If you were experiencing duplicate rendering before, this new format should resolve it,\r\nas it removes the ambiguity of the Svelte component wrapping the expression."
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "some-title",
      children: "Some title"
    }), "\n", createVNode(_components.h3, {
      id: "1-quadratic-formula-display-mode",
      children: "1. Quadratic Formula (Display Mode)"
    }), "\n", createVNode(_components.p, {
      children: "This shows complex fractions and roots."
    }), "\n", createVNode(_components.span, {
      class: "katex-display",
      children: createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            display: "block",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: [createVNode(_components.mi, {
                  children: "x"
                }), createVNode(_components.mo, {
                  children: "="
                }), createVNode(_components.mfrac, {
                  children: [createVNode(_components.mrow, {
                    children: [createVNode(_components.mo, {
                      children: "−"
                    }), createVNode(_components.mi, {
                      children: "b"
                    }), createVNode(_components.mo, {
                      children: "±"
                    }), createVNode(_components.msqrt, {
                      children: createVNode(_components.mrow, {
                        children: [createVNode(_components.msup, {
                          children: [createVNode(_components.mi, {
                            children: "b"
                          }), createVNode(_components.mn, {
                            children: "2"
                          })]
                        }), createVNode(_components.mo, {
                          children: "−"
                        }), createVNode(_components.mn, {
                          children: "4"
                        }), createVNode(_components.mi, {
                          children: "a"
                        }), createVNode(_components.mi, {
                          children: "c"
                        })]
                      })
                    })]
                  }), createVNode(_components.mrow, {
                    children: [createVNode(_components.mn, {
                      children: "2"
                    }), createVNode(_components.mi, {
                      children: "a"
                    })]
                  })]
                })]
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}"
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
                height: "2.2764em",
                verticalAlign: "-0.686em"
              }
            }), createVNode(_components.span, {
              class: "mord",
              children: [createVNode(_components.span, {
                class: "mopen nulldelimiter"
              }), createVNode(_components.span, {
                class: "mfrac",
                children: createVNode(_components.span, {
                  class: "vlist-t vlist-t2",
                  children: [createVNode(_components.span, {
                    class: "vlist-r",
                    children: [createVNode(_components.span, {
                      class: "vlist",
                      style: {
                        height: "1.5904em"
                      },
                      children: [createVNode(_components.span, {
                        style: {
                          top: "-2.314em"
                        },
                        children: [createVNode(_components.span, {
                          class: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), createVNode(_components.span, {
                          class: "mord",
                          children: [createVNode(_components.span, {
                            class: "mord",
                            children: "2"
                          }), createVNode(_components.span, {
                            class: "mord mathnormal",
                            children: "a"
                          })]
                        })]
                      }), createVNode(_components.span, {
                        style: {
                          top: "-3.23em"
                        },
                        children: [createVNode(_components.span, {
                          class: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), createVNode(_components.span, {
                          class: "frac-line",
                          style: {
                            borderBottomWidth: "0.04em"
                          }
                        })]
                      }), createVNode(_components.span, {
                        style: {
                          top: "-3.677em"
                        },
                        children: [createVNode(_components.span, {
                          class: "pstrut",
                          style: {
                            height: "3em"
                          }
                        }), createVNode(_components.span, {
                          class: "mord",
                          children: [createVNode(_components.span, {
                            class: "mord",
                            children: "−"
                          }), createVNode(_components.span, {
                            class: "mord mathnormal",
                            children: "b"
                          }), createVNode(_components.span, {
                            class: "mspace",
                            style: {
                              marginRight: "0.2222em"
                            }
                          }), createVNode(_components.span, {
                            class: "mbin",
                            children: "±"
                          }), createVNode(_components.span, {
                            class: "mspace",
                            style: {
                              marginRight: "0.2222em"
                            }
                          }), createVNode(_components.span, {
                            class: "mord sqrt",
                            children: createVNode(_components.span, {
                              class: "vlist-t vlist-t2",
                              children: [createVNode(_components.span, {
                                class: "vlist-r",
                                children: [createVNode(_components.span, {
                                  class: "vlist",
                                  style: {
                                    height: "0.9134em"
                                  },
                                  children: [createVNode(_components.span, {
                                    class: "svg-align",
                                    style: {
                                      top: "-3em"
                                    },
                                    children: [createVNode(_components.span, {
                                      class: "pstrut",
                                      style: {
                                        height: "3em"
                                      }
                                    }), createVNode(_components.span, {
                                      class: "mord",
                                      style: {
                                        paddingLeft: "0.833em"
                                      },
                                      children: [createVNode(_components.span, {
                                        class: "mord",
                                        children: [createVNode(_components.span, {
                                          class: "mord mathnormal",
                                          children: "b"
                                        }), createVNode(_components.span, {
                                          class: "msupsub",
                                          children: createVNode(_components.span, {
                                            class: "vlist-t",
                                            children: createVNode(_components.span, {
                                              class: "vlist-r",
                                              children: createVNode(_components.span, {
                                                class: "vlist",
                                                style: {
                                                  height: "0.7401em"
                                                },
                                                children: createVNode(_components.span, {
                                                  style: {
                                                    top: "-2.989em",
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
                                      }), createVNode(_components.span, {
                                        class: "mord",
                                        children: "4"
                                      }), createVNode(_components.span, {
                                        class: "mord mathnormal",
                                        children: "a"
                                      }), createVNode(_components.span, {
                                        class: "mord mathnormal",
                                        children: "c"
                                      })]
                                    })]
                                  }), createVNode(_components.span, {
                                    style: {
                                      top: "-2.8734em"
                                    },
                                    children: [createVNode(_components.span, {
                                      class: "pstrut",
                                      style: {
                                        height: "3em"
                                      }
                                    }), createVNode(_components.span, {
                                      class: "hide-tail",
                                      style: {
                                        minWidth: "0.853em",
                                        height: "1.08em"
                                      },
                                      children: createVNode(_components.svg, {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "400em",
                                        height: "1.08em",
                                        viewBox: "0 0 400000 1080",
                                        preserveAspectRatio: "xMinYMin slice",
                                        children: createVNode(_components.path, {
                                          d: "M95,702\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl0 -0\nc5.3,-9.3,12,-14,20,-14\nH400000v40H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM834 80h400000v40h-400000z"
                                        })
                                      })
                                    })]
                                  })]
                                }), createVNode(_components.span, {
                                  class: "vlist-s",
                                  children: "​"
                                })]
                              }), createVNode(_components.span, {
                                class: "vlist-r",
                                children: createVNode(_components.span, {
                                  class: "vlist",
                                  style: {
                                    height: "0.1266em"
                                  },
                                  children: createVNode(_components.span, {})
                                })
                              })]
                            })
                          })]
                        })]
                      })]
                    }), createVNode(_components.span, {
                      class: "vlist-s",
                      children: "​"
                    })]
                  }), createVNode(_components.span, {
                    class: "vlist-r",
                    children: createVNode(_components.span, {
                      class: "vlist",
                      style: {
                        height: "0.686em"
                      },
                      children: createVNode(_components.span, {})
                    })
                  })]
                })
              }), createVNode(_components.span, {
                class: "mclose nulldelimiter"
              })]
            })]
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "2-logical-statements-display-mode",
      children: "2. Logical Statements (Display Mode)"
    }), "\n", createVNode(_components.p, {
      children: ["An example of a conditional logical statement. ", createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: [createVNode(_components.mi, {
                  children: "P"
                }), createVNode(_components.mtext, {
                  children: "  "
                }), createVNode(_components.mo, {
                  children: "⟹"
                }), createVNode(_components.mtext, {
                  children: "  "
                }), createVNode(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), createVNode(_components.mi, {
                  children: "Q"
                }), createVNode(_components.mo, {
                  children: "∨"
                }), createVNode(_components.mi, {
                  mathvariant: "normal",
                  children: "¬"
                }), createVNode(_components.mi, {
                  children: "R"
                }), createVNode(_components.mo, {
                  stretchy: "false",
                  children: ")"
                })]
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "P \\implies (Q \\lor \\neg R)"
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
                height: "0.7073em",
                verticalAlign: "-0.024em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              style: {
                marginRight: "0.13889em"
              },
              children: "P"
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.2778em"
              }
            }), createVNode(_components.span, {
              class: "mrel",
              children: "⟹"
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.2778em"
              }
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
              children: "Q"
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
              children: "¬"
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              style: {
                marginRight: "0.00773em"
              },
              children: "R"
            }), createVNode(_components.span, {
              class: "mclose",
              children: ")"
            })]
          })]
        })]
      })]
    }), "\n", createVNode(_components.h3, {
      id: "3-matrix-and-systems-of-equations-display-mode",
      children: "3. Matrix and Systems of Equations (Display Mode)"
    }), "\n", createVNode(_components.p, {
      children: "An example of a 4x4 matrix."
    }), "\n", createVNode(_components.span, {
      class: "katex-display",
      children: createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            display: "block",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: [createVNode(_components.mi, {
                  children: "det"
                }), createVNode(_components.mo, {
                  children: "⁡"
                }), createVNode(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), createVNode(_components.mi, {
                  children: "A"
                }), createVNode(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), createVNode(_components.mo, {
                  children: "="
                }), createVNode(_components.mrow, {
                  children: [createVNode(_components.mo, {
                    fence: "true",
                    children: "∣"
                  }), createVNode(_components.mtable, {
                    rowspacing: "0.16em",
                    columnalign: "center center center center",
                    columnspacing: "1em",
                    children: [createVNode(_components.mtr, {
                      children: [createVNode(_components.mtd, {
                        children: createVNode(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: createVNode(_components.mi, {
                            children: "a"
                          })
                        })
                      }), createVNode(_components.mtd, {
                        children: createVNode(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: createVNode(_components.mi, {
                            children: "b"
                          })
                        })
                      }), createVNode(_components.mtd, {
                        children: createVNode(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: createVNode(_components.mi, {
                            children: "c"
                          })
                        })
                      }), createVNode(_components.mtd, {
                        children: createVNode(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: createVNode(_components.mi, {
                            children: "d"
                          })
                        })
                      })]
                    }), createVNode(_components.mtr, {
                      children: [createVNode(_components.mtd, {
                        children: createVNode(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: createVNode(_components.mi, {
                            children: "e"
                          })
                        })
                      }), createVNode(_components.mtd, {
                        children: createVNode(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: createVNode(_components.mi, {
                            children: "f"
                          })
                        })
                      }), createVNode(_components.mtd, {
                        children: createVNode(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: createVNode(_components.mi, {
                            children: "g"
                          })
                        })
                      }), createVNode(_components.mtd, {
                        children: createVNode(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: createVNode(_components.mi, {
                            children: "h"
                          })
                        })
                      })]
                    }), createVNode(_components.mtr, {
                      children: [createVNode(_components.mtd, {
                        children: createVNode(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: createVNode(_components.mi, {
                            children: "i"
                          })
                        })
                      }), createVNode(_components.mtd, {
                        children: createVNode(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: createVNode(_components.mi, {
                            children: "j"
                          })
                        })
                      }), createVNode(_components.mtd, {
                        children: createVNode(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: createVNode(_components.mi, {
                            children: "k"
                          })
                        })
                      }), createVNode(_components.mtd, {
                        children: createVNode(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: createVNode(_components.mi, {
                            children: "l"
                          })
                        })
                      })]
                    }), createVNode(_components.mtr, {
                      children: [createVNode(_components.mtd, {
                        children: createVNode(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: createVNode(_components.mi, {
                            children: "m"
                          })
                        })
                      }), createVNode(_components.mtd, {
                        children: createVNode(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: createVNode(_components.mi, {
                            children: "n"
                          })
                        })
                      }), createVNode(_components.mtd, {
                        children: createVNode(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: createVNode(_components.mi, {
                            children: "o"
                          })
                        })
                      }), createVNode(_components.mtd, {
                        children: createVNode(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: createVNode(_components.mi, {
                            children: "p"
                          })
                        })
                      })]
                    })]
                  }), createVNode(_components.mo, {
                    fence: "true",
                    children: "∣"
                  })]
                })]
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\det(A) = \\begin{vmatrix}\na & b & c & d \\\\\ne & f & g & h \\\\\ni & j & k & l \\\\\nm & n & o & p\n\\end{vmatrix}"
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
              class: "mop",
              children: "det"
            }), createVNode(_components.span, {
              class: "mopen",
              children: "("
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              children: "A"
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
                height: "4.8em",
                verticalAlign: "-2.15em"
              }
            }), createVNode(_components.span, {
              class: "minner",
              children: [createVNode(_components.span, {
                class: "mopen",
                children: createVNode(_components.span, {
                  class: "delimsizing mult",
                  children: createVNode(_components.span, {
                    class: "vlist-t vlist-t2",
                    children: [createVNode(_components.span, {
                      class: "vlist-r",
                      children: [createVNode(_components.span, {
                        class: "vlist",
                        style: {
                          height: "2.65em"
                        },
                        children: createVNode(_components.span, {
                          style: {
                            top: "-4.65em"
                          },
                          children: [createVNode(_components.span, {
                            class: "pstrut",
                            style: {
                              height: "6.8em"
                            }
                          }), createVNode(_components.span, {
                            style: {
                              width: "0.333em",
                              height: "4.800em"
                            },
                            children: createVNode(_components.svg, {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "0.333em",
                              height: "4.800em",
                              viewBox: "0 0 333 4800",
                              children: createVNode(_components.path, {
                                d: "M145 15 v585 v3600 v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v-3600 v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M188 15 H145 v585 v3600 v585 h43z"
                              })
                            })
                          })]
                        })
                      }), createVNode(_components.span, {
                        class: "vlist-s",
                        children: "​"
                      })]
                    }), createVNode(_components.span, {
                      class: "vlist-r",
                      children: createVNode(_components.span, {
                        class: "vlist",
                        style: {
                          height: "2.15em"
                        },
                        children: createVNode(_components.span, {})
                      })
                    })]
                  })
                })
              }), createVNode(_components.span, {
                class: "mord",
                children: createVNode(_components.span, {
                  class: "mtable",
                  children: [createVNode(_components.span, {
                    class: "col-align-c",
                    children: createVNode(_components.span, {
                      class: "vlist-t vlist-t2",
                      children: [createVNode(_components.span, {
                        class: "vlist-r",
                        children: [createVNode(_components.span, {
                          class: "vlist",
                          style: {
                            height: "2.65em"
                          },
                          children: [createVNode(_components.span, {
                            style: {
                              top: "-4.81em"
                            },
                            children: [createVNode(_components.span, {
                              class: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), createVNode(_components.span, {
                              class: "mord",
                              children: createVNode(_components.span, {
                                class: "mord mathnormal",
                                children: "a"
                              })
                            })]
                          }), createVNode(_components.span, {
                            style: {
                              top: "-3.61em"
                            },
                            children: [createVNode(_components.span, {
                              class: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), createVNode(_components.span, {
                              class: "mord",
                              children: createVNode(_components.span, {
                                class: "mord mathnormal",
                                children: "e"
                              })
                            })]
                          }), createVNode(_components.span, {
                            style: {
                              top: "-2.41em"
                            },
                            children: [createVNode(_components.span, {
                              class: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), createVNode(_components.span, {
                              class: "mord",
                              children: createVNode(_components.span, {
                                class: "mord mathnormal",
                                children: "i"
                              })
                            })]
                          }), createVNode(_components.span, {
                            style: {
                              top: "-1.21em"
                            },
                            children: [createVNode(_components.span, {
                              class: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), createVNode(_components.span, {
                              class: "mord",
                              children: createVNode(_components.span, {
                                class: "mord mathnormal",
                                children: "m"
                              })
                            })]
                          })]
                        }), createVNode(_components.span, {
                          class: "vlist-s",
                          children: "​"
                        })]
                      }), createVNode(_components.span, {
                        class: "vlist-r",
                        children: createVNode(_components.span, {
                          class: "vlist",
                          style: {
                            height: "2.15em"
                          },
                          children: createVNode(_components.span, {})
                        })
                      })]
                    })
                  }), createVNode(_components.span, {
                    class: "arraycolsep",
                    style: {
                      width: "0.5em"
                    }
                  }), createVNode(_components.span, {
                    class: "arraycolsep",
                    style: {
                      width: "0.5em"
                    }
                  }), createVNode(_components.span, {
                    class: "col-align-c",
                    children: createVNode(_components.span, {
                      class: "vlist-t vlist-t2",
                      children: [createVNode(_components.span, {
                        class: "vlist-r",
                        children: [createVNode(_components.span, {
                          class: "vlist",
                          style: {
                            height: "2.65em"
                          },
                          children: [createVNode(_components.span, {
                            style: {
                              top: "-4.81em"
                            },
                            children: [createVNode(_components.span, {
                              class: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), createVNode(_components.span, {
                              class: "mord",
                              children: createVNode(_components.span, {
                                class: "mord mathnormal",
                                children: "b"
                              })
                            })]
                          }), createVNode(_components.span, {
                            style: {
                              top: "-3.61em"
                            },
                            children: [createVNode(_components.span, {
                              class: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), createVNode(_components.span, {
                              class: "mord",
                              children: createVNode(_components.span, {
                                class: "mord mathnormal",
                                style: {
                                  marginRight: "0.10764em"
                                },
                                children: "f"
                              })
                            })]
                          }), createVNode(_components.span, {
                            style: {
                              top: "-2.41em"
                            },
                            children: [createVNode(_components.span, {
                              class: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), createVNode(_components.span, {
                              class: "mord",
                              children: createVNode(_components.span, {
                                class: "mord mathnormal",
                                style: {
                                  marginRight: "0.05724em"
                                },
                                children: "j"
                              })
                            })]
                          }), createVNode(_components.span, {
                            style: {
                              top: "-1.21em"
                            },
                            children: [createVNode(_components.span, {
                              class: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), createVNode(_components.span, {
                              class: "mord",
                              children: createVNode(_components.span, {
                                class: "mord mathnormal",
                                children: "n"
                              })
                            })]
                          })]
                        }), createVNode(_components.span, {
                          class: "vlist-s",
                          children: "​"
                        })]
                      }), createVNode(_components.span, {
                        class: "vlist-r",
                        children: createVNode(_components.span, {
                          class: "vlist",
                          style: {
                            height: "2.15em"
                          },
                          children: createVNode(_components.span, {})
                        })
                      })]
                    })
                  }), createVNode(_components.span, {
                    class: "arraycolsep",
                    style: {
                      width: "0.5em"
                    }
                  }), createVNode(_components.span, {
                    class: "arraycolsep",
                    style: {
                      width: "0.5em"
                    }
                  }), createVNode(_components.span, {
                    class: "col-align-c",
                    children: createVNode(_components.span, {
                      class: "vlist-t vlist-t2",
                      children: [createVNode(_components.span, {
                        class: "vlist-r",
                        children: [createVNode(_components.span, {
                          class: "vlist",
                          style: {
                            height: "2.65em"
                          },
                          children: [createVNode(_components.span, {
                            style: {
                              top: "-4.81em"
                            },
                            children: [createVNode(_components.span, {
                              class: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), createVNode(_components.span, {
                              class: "mord",
                              children: createVNode(_components.span, {
                                class: "mord mathnormal",
                                children: "c"
                              })
                            })]
                          }), createVNode(_components.span, {
                            style: {
                              top: "-3.61em"
                            },
                            children: [createVNode(_components.span, {
                              class: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), createVNode(_components.span, {
                              class: "mord",
                              children: createVNode(_components.span, {
                                class: "mord mathnormal",
                                style: {
                                  marginRight: "0.03588em"
                                },
                                children: "g"
                              })
                            })]
                          }), createVNode(_components.span, {
                            style: {
                              top: "-2.41em"
                            },
                            children: [createVNode(_components.span, {
                              class: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), createVNode(_components.span, {
                              class: "mord",
                              children: createVNode(_components.span, {
                                class: "mord mathnormal",
                                style: {
                                  marginRight: "0.03148em"
                                },
                                children: "k"
                              })
                            })]
                          }), createVNode(_components.span, {
                            style: {
                              top: "-1.21em"
                            },
                            children: [createVNode(_components.span, {
                              class: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), createVNode(_components.span, {
                              class: "mord",
                              children: createVNode(_components.span, {
                                class: "mord mathnormal",
                                children: "o"
                              })
                            })]
                          })]
                        }), createVNode(_components.span, {
                          class: "vlist-s",
                          children: "​"
                        })]
                      }), createVNode(_components.span, {
                        class: "vlist-r",
                        children: createVNode(_components.span, {
                          class: "vlist",
                          style: {
                            height: "2.15em"
                          },
                          children: createVNode(_components.span, {})
                        })
                      })]
                    })
                  }), createVNode(_components.span, {
                    class: "arraycolsep",
                    style: {
                      width: "0.5em"
                    }
                  }), createVNode(_components.span, {
                    class: "arraycolsep",
                    style: {
                      width: "0.5em"
                    }
                  }), createVNode(_components.span, {
                    class: "col-align-c",
                    children: createVNode(_components.span, {
                      class: "vlist-t vlist-t2",
                      children: [createVNode(_components.span, {
                        class: "vlist-r",
                        children: [createVNode(_components.span, {
                          class: "vlist",
                          style: {
                            height: "2.65em"
                          },
                          children: [createVNode(_components.span, {
                            style: {
                              top: "-4.81em"
                            },
                            children: [createVNode(_components.span, {
                              class: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), createVNode(_components.span, {
                              class: "mord",
                              children: createVNode(_components.span, {
                                class: "mord mathnormal",
                                children: "d"
                              })
                            })]
                          }), createVNode(_components.span, {
                            style: {
                              top: "-3.61em"
                            },
                            children: [createVNode(_components.span, {
                              class: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), createVNode(_components.span, {
                              class: "mord",
                              children: createVNode(_components.span, {
                                class: "mord mathnormal",
                                children: "h"
                              })
                            })]
                          }), createVNode(_components.span, {
                            style: {
                              top: "-2.41em"
                            },
                            children: [createVNode(_components.span, {
                              class: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), createVNode(_components.span, {
                              class: "mord",
                              children: createVNode(_components.span, {
                                class: "mord mathnormal",
                                style: {
                                  marginRight: "0.01968em"
                                },
                                children: "l"
                              })
                            })]
                          }), createVNode(_components.span, {
                            style: {
                              top: "-1.21em"
                            },
                            children: [createVNode(_components.span, {
                              class: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), createVNode(_components.span, {
                              class: "mord",
                              children: createVNode(_components.span, {
                                class: "mord mathnormal",
                                children: "p"
                              })
                            })]
                          })]
                        }), createVNode(_components.span, {
                          class: "vlist-s",
                          children: "​"
                        })]
                      }), createVNode(_components.span, {
                        class: "vlist-r",
                        children: createVNode(_components.span, {
                          class: "vlist",
                          style: {
                            height: "2.15em"
                          },
                          children: createVNode(_components.span, {})
                        })
                      })]
                    })
                  })]
                })
              }), createVNode(_components.span, {
                class: "mclose",
                children: createVNode(_components.span, {
                  class: "delimsizing mult",
                  children: createVNode(_components.span, {
                    class: "vlist-t vlist-t2",
                    children: [createVNode(_components.span, {
                      class: "vlist-r",
                      children: [createVNode(_components.span, {
                        class: "vlist",
                        style: {
                          height: "2.65em"
                        },
                        children: createVNode(_components.span, {
                          style: {
                            top: "-4.65em"
                          },
                          children: [createVNode(_components.span, {
                            class: "pstrut",
                            style: {
                              height: "6.8em"
                            }
                          }), createVNode(_components.span, {
                            style: {
                              width: "0.333em",
                              height: "4.800em"
                            },
                            children: createVNode(_components.svg, {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "0.333em",
                              height: "4.800em",
                              viewBox: "0 0 333 4800",
                              children: createVNode(_components.path, {
                                d: "M145 15 v585 v3600 v585 c2.667,10,9.667,15,21,15\nc10,0,16.667,-5,20,-15 v-585 v-3600 v-585 c-2.667,-10,-9.667,-15,-21,-15\nc-10,0,-16.667,5,-20,15z M188 15 H145 v585 v3600 v585 h43z"
                              })
                            })
                          })]
                        })
                      }), createVNode(_components.span, {
                        class: "vlist-s",
                        children: "​"
                      })]
                    }), createVNode(_components.span, {
                      class: "vlist-r",
                      children: createVNode(_components.span, {
                        class: "vlist",
                        style: {
                          height: "2.15em"
                        },
                        children: createVNode(_components.span, {})
                      })
                    })]
                  })
                })
              })]
            })]
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "4-complex-integral-with-limits-display-mode",
      children: "4. Complex Integral with Limits (Display Mode)"
    }), "\n", createVNode(_components.p, {
      children: "A definite integral example using a complex exponential function."
    }), "\n", createVNode(_components.span, {
      class: "katex-display",
      children: createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            display: "block",
            children: createVNode(_components.semantics, {
              children: [createVNode(_components.mrow, {
                children: [createVNode(_components.msubsup, {
                  children: [createVNode(_components.mo, {
                    children: "∫"
                  }), createVNode(_components.mrow, {
                    children: [createVNode(_components.mo, {
                      children: "−"
                    }), createVNode(_components.mi, {
                      mathvariant: "normal",
                      children: "∞"
                    })]
                  }), createVNode(_components.mi, {
                    mathvariant: "normal",
                    children: "∞"
                  })]
                }), createVNode(_components.msup, {
                  children: [createVNode(_components.mi, {
                    children: "e"
                  }), createVNode(_components.mrow, {
                    children: [createVNode(_components.mo, {
                      children: "−"
                    }), createVNode(_components.msup, {
                      children: [createVNode(_components.mi, {
                        children: "x"
                      }), createVNode(_components.mn, {
                        children: "2"
                      })]
                    }), createVNode(_components.mi, {
                      mathvariant: "normal",
                      children: "/"
                    }), createVNode(_components.mn, {
                      children: "2"
                    })]
                  })]
                }), createVNode(_components.mi, {
                  children: "d"
                }), createVNode(_components.mi, {
                  children: "x"
                }), createVNode(_components.mo, {
                  children: "="
                }), createVNode(_components.msqrt, {
                  children: createVNode(_components.mrow, {
                    children: [createVNode(_components.mn, {
                      children: "2"
                    }), createVNode(_components.mi, {
                      children: "π"
                    })]
                  })
                })]
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\int_{-\\infty}^{\\infty} e^{-x^2/2} dx = \\sqrt{2\\pi}"
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
                height: "2.3846em",
                verticalAlign: "-0.9703em"
              }
            }), createVNode(_components.span, {
              class: "mop",
              children: [createVNode(_components.span, {
                class: "mop op-symbol large-op",
                style: {
                  marginRight: "0.44445em",
                  position: "relative",
                  top: "-0.0011em"
                },
                children: "∫"
              }), createVNode(_components.span, {
                class: "msupsub",
                children: createVNode(_components.span, {
                  class: "vlist-t vlist-t2",
                  children: [createVNode(_components.span, {
                    class: "vlist-r",
                    children: [createVNode(_components.span, {
                      class: "vlist",
                      style: {
                        height: "1.4143em"
                      },
                      children: [createVNode(_components.span, {
                        style: {
                          top: "-1.7881em",
                          marginLeft: "-0.4445em",
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
                              children: "∞"
                            })]
                          })
                        })]
                      }), createVNode(_components.span, {
                        style: {
                          top: "-3.8129em",
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
                              children: "∞"
                            })
                          })
                        })]
                      })]
                    }), createVNode(_components.span, {
                      class: "vlist-s",
                      children: "​"
                    })]
                  }), createVNode(_components.span, {
                    class: "vlist-r",
                    children: createVNode(_components.span, {
                      class: "vlist",
                      style: {
                        height: "0.9703em"
                      },
                      children: createVNode(_components.span, {})
                    })
                  })]
                })
              })]
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), createVNode(_components.span, {
              class: "mord",
              children: [createVNode(_components.span, {
                class: "mord mathnormal",
                children: "e"
              }), createVNode(_components.span, {
                class: "msupsub",
                children: createVNode(_components.span, {
                  class: "vlist-t",
                  children: createVNode(_components.span, {
                    class: "vlist-r",
                    children: createVNode(_components.span, {
                      class: "vlist",
                      style: {
                        height: "1.0369em"
                      },
                      children: createVNode(_components.span, {
                        style: {
                          top: "-3.113em",
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
                              children: [createVNode(_components.span, {
                                class: "mord mathnormal mtight",
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
                                        height: "0.8913em"
                                      },
                                      children: createVNode(_components.span, {
                                        style: {
                                          top: "-2.931em",
                                          marginRight: "0.0714em"
                                        },
                                        children: [createVNode(_components.span, {
                                          class: "pstrut",
                                          style: {
                                            height: "2.5em"
                                          }
                                        }), createVNode(_components.span, {
                                          class: "sizing reset-size3 size1 mtight",
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
                              class: "mord mtight",
                              children: "/2"
                            })]
                          })
                        })]
                      })
                    })
                  })
                })
              })]
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              children: "d"
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
                height: "1.04em",
                verticalAlign: "-0.0839em"
              }
            }), createVNode(_components.span, {
              class: "mord sqrt",
              children: createVNode(_components.span, {
                class: "vlist-t vlist-t2",
                children: [createVNode(_components.span, {
                  class: "vlist-r",
                  children: [createVNode(_components.span, {
                    class: "vlist",
                    style: {
                      height: "0.9561em"
                    },
                    children: [createVNode(_components.span, {
                      class: "svg-align",
                      style: {
                        top: "-3em"
                      },
                      children: [createVNode(_components.span, {
                        class: "pstrut",
                        style: {
                          height: "3em"
                        }
                      }), createVNode(_components.span, {
                        class: "mord",
                        style: {
                          paddingLeft: "0.833em"
                        },
                        children: [createVNode(_components.span, {
                          class: "mord",
                          children: "2"
                        }), createVNode(_components.span, {
                          class: "mord mathnormal",
                          style: {
                            marginRight: "0.03588em"
                          },
                          children: "π"
                        })]
                      })]
                    }), createVNode(_components.span, {
                      style: {
                        top: "-2.9161em"
                      },
                      children: [createVNode(_components.span, {
                        class: "pstrut",
                        style: {
                          height: "3em"
                        }
                      }), createVNode(_components.span, {
                        class: "hide-tail",
                        style: {
                          minWidth: "0.853em",
                          height: "1.08em"
                        },
                        children: createVNode(_components.svg, {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "400em",
                          height: "1.08em",
                          viewBox: "0 0 400000 1080",
                          preserveAspectRatio: "xMinYMin slice",
                          children: createVNode(_components.path, {
                            d: "M95,702\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl0 -0\nc5.3,-9.3,12,-14,20,-14\nH400000v40H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM834 80h400000v40h-400000z"
                          })
                        })
                      })]
                    })]
                  }), createVNode(_components.span, {
                    class: "vlist-s",
                    children: "​"
                  })]
                }), createVNode(_components.span, {
                  class: "vlist-r",
                  children: createVNode(_components.span, {
                    class: "vlist",
                    style: {
                      height: "0.0839em"
                    },
                    children: createVNode(_components.span, {})
                  })
                })]
              })
            })]
          })]
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "5-piecewise-function-display-mode",
      children: "5. Piecewise Function (Display Mode)"
    }), "\n", createVNode(_components.p, {
      children: "Showing how to define a function with multiple cases."
    }), "\n", createVNode(_components.span, {
      class: "katex-display",
      children: createVNode(_components.span, {
        class: "katex",
        children: [createVNode(_components.span, {
          class: "katex-mathml",
          children: createVNode(_components.math, {
            xmlns: "http://www.w3.org/1998/Math/MathML",
            display: "block",
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
                  children: "="
                }), createVNode(_components.mrow, {
                  children: [createVNode(_components.mo, {
                    fence: "true",
                    children: "{"
                  }), createVNode(_components.mtable, {
                    rowspacing: "0.16em",
                    columnalign: "left left",
                    columnspacing: "1em",
                    children: [createVNode(_components.mtr, {
                      children: [createVNode(_components.mtd, {
                        children: createVNode(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: createVNode(_components.mrow, {
                            children: [createVNode(_components.mo, {
                              children: "−"
                            }), createVNode(_components.mi, {
                              children: "x"
                            })]
                          })
                        })
                      }), createVNode(_components.mtd, {
                        children: createVNode(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: createVNode(_components.mrow, {
                            children: [createVNode(_components.mtext, {
                              children: "if "
                            }), createVNode(_components.mi, {
                              children: "x"
                            }), createVNode(_components.mo, {
                              children: "<"
                            }), createVNode(_components.mn, {
                              children: "0"
                            })]
                          })
                        })
                      })]
                    }), createVNode(_components.mtr, {
                      children: [createVNode(_components.mtd, {
                        children: createVNode(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: createVNode(_components.msup, {
                            children: [createVNode(_components.mi, {
                              children: "x"
                            }), createVNode(_components.mn, {
                              children: "2"
                            })]
                          })
                        })
                      }), createVNode(_components.mtd, {
                        children: createVNode(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: createVNode(_components.mrow, {
                            children: [createVNode(_components.mtext, {
                              children: "if "
                            }), createVNode(_components.mn, {
                              children: "0"
                            }), createVNode(_components.mo, {
                              children: "≤"
                            }), createVNode(_components.mi, {
                              children: "x"
                            }), createVNode(_components.mo, {
                              children: "<"
                            }), createVNode(_components.mn, {
                              children: "2"
                            })]
                          })
                        })
                      })]
                    }), createVNode(_components.mtr, {
                      children: [createVNode(_components.mtd, {
                        children: createVNode(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: createVNode(_components.mn, {
                            children: "4"
                          })
                        })
                      }), createVNode(_components.mtd, {
                        children: createVNode(_components.mstyle, {
                          scriptlevel: "0",
                          displaystyle: "false",
                          children: createVNode(_components.mrow, {
                            children: [createVNode(_components.mtext, {
                              children: "if "
                            }), createVNode(_components.mi, {
                              children: "x"
                            }), createVNode(_components.mo, {
                              children: "≥"
                            }), createVNode(_components.mn, {
                              children: "2"
                            })]
                          })
                        })
                      })]
                    })]
                  })]
                })]
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "f(x) =\n\\left\\{\n\\begin{array}{ll}\n    -x & \\text{if } x < 0 \\\\\n    x^2 & \\text{if } 0 \\le x < 2 \\\\\n    4 & \\text{if } x \\ge 2 \n\\end{array}\n\\right."
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
                height: "3.6em",
                verticalAlign: "-1.55em"
              }
            }), createVNode(_components.span, {
              class: "minner",
              children: [createVNode(_components.span, {
                class: "mopen",
                children: createVNode(_components.span, {
                  class: "delimsizing mult",
                  children: createVNode(_components.span, {
                    class: "vlist-t vlist-t2",
                    children: [createVNode(_components.span, {
                      class: "vlist-r",
                      children: [createVNode(_components.span, {
                        class: "vlist",
                        style: {
                          height: "2.05em"
                        },
                        children: [createVNode(_components.span, {
                          style: {
                            top: "-2.5em"
                          },
                          children: [createVNode(_components.span, {
                            class: "pstrut",
                            style: {
                              height: "3.15em"
                            }
                          }), createVNode(_components.span, {
                            class: "delimsizinginner delim-size4",
                            children: createVNode(_components.span, {
                              children: "⎩"
                            })
                          })]
                        }), createVNode(_components.span, {
                          style: {
                            top: "-2.492em"
                          },
                          children: [createVNode(_components.span, {
                            class: "pstrut",
                            style: {
                              height: "3.15em"
                            }
                          }), createVNode(_components.span, {
                            style: {
                              height: "0.016em",
                              width: "0.8889em"
                            },
                            children: createVNode(_components.svg, {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "0.8889em",
                              height: "0.016em",
                              style: {
                                width: "0.8889em"
                              },
                              viewBox: "0 0 888.89 16",
                              preserveAspectRatio: "xMinYMin",
                              children: createVNode(_components.path, {
                                d: "M384 0 H504 V16 H384z M384 0 H504 V16 H384z"
                              })
                            })
                          })]
                        }), createVNode(_components.span, {
                          style: {
                            top: "-3.15em"
                          },
                          children: [createVNode(_components.span, {
                            class: "pstrut",
                            style: {
                              height: "3.15em"
                            }
                          }), createVNode(_components.span, {
                            class: "delimsizinginner delim-size4",
                            children: createVNode(_components.span, {
                              children: "⎨"
                            })
                          })]
                        }), createVNode(_components.span, {
                          style: {
                            top: "-4.292em"
                          },
                          children: [createVNode(_components.span, {
                            class: "pstrut",
                            style: {
                              height: "3.15em"
                            }
                          }), createVNode(_components.span, {
                            style: {
                              height: "0.016em",
                              width: "0.8889em"
                            },
                            children: createVNode(_components.svg, {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "0.8889em",
                              height: "0.016em",
                              style: {
                                width: "0.8889em"
                              },
                              viewBox: "0 0 888.89 16",
                              preserveAspectRatio: "xMinYMin",
                              children: createVNode(_components.path, {
                                d: "M384 0 H504 V16 H384z M384 0 H504 V16 H384z"
                              })
                            })
                          })]
                        }), createVNode(_components.span, {
                          style: {
                            top: "-4.3em"
                          },
                          children: [createVNode(_components.span, {
                            class: "pstrut",
                            style: {
                              height: "3.15em"
                            }
                          }), createVNode(_components.span, {
                            class: "delimsizinginner delim-size4",
                            children: createVNode(_components.span, {
                              children: "⎧"
                            })
                          })]
                        })]
                      }), createVNode(_components.span, {
                        class: "vlist-s",
                        children: "​"
                      })]
                    }), createVNode(_components.span, {
                      class: "vlist-r",
                      children: createVNode(_components.span, {
                        class: "vlist",
                        style: {
                          height: "1.55em"
                        },
                        children: createVNode(_components.span, {})
                      })
                    })]
                  })
                })
              }), createVNode(_components.span, {
                class: "mord",
                children: createVNode(_components.span, {
                  class: "mtable",
                  children: [createVNode(_components.span, {
                    class: "arraycolsep",
                    style: {
                      width: "0.5em"
                    }
                  }), createVNode(_components.span, {
                    class: "col-align-l",
                    children: createVNode(_components.span, {
                      class: "vlist-t vlist-t2",
                      children: [createVNode(_components.span, {
                        class: "vlist-r",
                        children: [createVNode(_components.span, {
                          class: "vlist",
                          style: {
                            height: "2.05em"
                          },
                          children: [createVNode(_components.span, {
                            style: {
                              top: "-4.21em"
                            },
                            children: [createVNode(_components.span, {
                              class: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), createVNode(_components.span, {
                              class: "mord",
                              children: [createVNode(_components.span, {
                                class: "mord",
                                children: "−"
                              }), createVNode(_components.span, {
                                class: "mord mathnormal",
                                children: "x"
                              })]
                            })]
                          }), createVNode(_components.span, {
                            style: {
                              top: "-3.01em"
                            },
                            children: [createVNode(_components.span, {
                              class: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), createVNode(_components.span, {
                              class: "mord",
                              children: createVNode(_components.span, {
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
                                              children: "2"
                                            })
                                          })]
                                        })
                                      })
                                    })
                                  })
                                })]
                              })
                            })]
                          }), createVNode(_components.span, {
                            style: {
                              top: "-1.81em"
                            },
                            children: [createVNode(_components.span, {
                              class: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), createVNode(_components.span, {
                              class: "mord",
                              children: createVNode(_components.span, {
                                class: "mord",
                                children: "4"
                              })
                            })]
                          })]
                        }), createVNode(_components.span, {
                          class: "vlist-s",
                          children: "​"
                        })]
                      }), createVNode(_components.span, {
                        class: "vlist-r",
                        children: createVNode(_components.span, {
                          class: "vlist",
                          style: {
                            height: "1.55em"
                          },
                          children: createVNode(_components.span, {})
                        })
                      })]
                    })
                  }), createVNode(_components.span, {
                    class: "arraycolsep",
                    style: {
                      width: "0.5em"
                    }
                  }), createVNode(_components.span, {
                    class: "arraycolsep",
                    style: {
                      width: "0.5em"
                    }
                  }), createVNode(_components.span, {
                    class: "col-align-l",
                    children: createVNode(_components.span, {
                      class: "vlist-t vlist-t2",
                      children: [createVNode(_components.span, {
                        class: "vlist-r",
                        children: [createVNode(_components.span, {
                          class: "vlist",
                          style: {
                            height: "2.05em"
                          },
                          children: [createVNode(_components.span, {
                            style: {
                              top: "-4.21em"
                            },
                            children: [createVNode(_components.span, {
                              class: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), createVNode(_components.span, {
                              class: "mord",
                              children: [createVNode(_components.span, {
                                class: "mord text",
                                children: createVNode(_components.span, {
                                  class: "mord",
                                  children: "if "
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
                                children: "<"
                              }), createVNode(_components.span, {
                                class: "mspace",
                                style: {
                                  marginRight: "0.2778em"
                                }
                              }), createVNode(_components.span, {
                                class: "mord",
                                children: "0"
                              })]
                            })]
                          }), createVNode(_components.span, {
                            style: {
                              top: "-3.01em"
                            },
                            children: [createVNode(_components.span, {
                              class: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), createVNode(_components.span, {
                              class: "mord",
                              children: [createVNode(_components.span, {
                                class: "mord text",
                                children: createVNode(_components.span, {
                                  class: "mord",
                                  children: "if "
                                })
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
                                children: "≤"
                              }), createVNode(_components.span, {
                                class: "mspace",
                                style: {
                                  marginRight: "0.2778em"
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
                              }), createVNode(_components.span, {
                                class: "mord",
                                children: "2"
                              })]
                            })]
                          }), createVNode(_components.span, {
                            style: {
                              top: "-1.81em"
                            },
                            children: [createVNode(_components.span, {
                              class: "pstrut",
                              style: {
                                height: "3em"
                              }
                            }), createVNode(_components.span, {
                              class: "mord",
                              children: [createVNode(_components.span, {
                                class: "mord text",
                                children: createVNode(_components.span, {
                                  class: "mord",
                                  children: "if "
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
                                children: "≥"
                              }), createVNode(_components.span, {
                                class: "mspace",
                                style: {
                                  marginRight: "0.2778em"
                                }
                              }), createVNode(_components.span, {
                                class: "mord",
                                children: "2"
                              })]
                            })]
                          })]
                        }), createVNode(_components.span, {
                          class: "vlist-s",
                          children: "​"
                        })]
                      }), createVNode(_components.span, {
                        class: "vlist-r",
                        children: createVNode(_components.span, {
                          class: "vlist",
                          style: {
                            height: "1.55em"
                          },
                          children: createVNode(_components.span, {})
                        })
                      })]
                    })
                  }), createVNode(_components.span, {
                    class: "arraycolsep",
                    style: {
                      width: "0.5em"
                    }
                  })]
                })
              }), createVNode(_components.span, {
                class: "mclose nulldelimiter"
              })]
            })]
          })]
        })]
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "6-component-test-still-works-in-mdx",
      children: "6. Component Test (Still works in MDX!)"
    }), "\n", createVNode(_components.p, {
      children: ["Even without the ", createVNode(_components.code, {
        children: "<script>"
      }), " block, standard MDX still lets you use imported components (if they are declared in your Astro config)."]
    }), "\n", createVNode(_components.h2, {
      id: "interactive-component-examples",
      children: "Interactive Component Examples"
    }), "\n", createVNode("div", {
      style: "display:flex; justify-content:center; margin-top:2rem;",
      children: createVNode(TestBarChart, {
        data: [100, 2200, 1800, 2900]
      })
    }), "\n", createVNode("div", {
      style: "display:flex; justify-content:center; margin-top:2rem;",
      children: createVNode(TestLerpSlider, {
        "client:load": true,
        label: "Primary Slider",
        min: 0,
        max: 3,
        step: 0.01,
        "client:component-path": "@components/TestLerpSlider.svelte",
        "client:component-export": "default",
        "client:component-hydration": true
      })
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

const url = "src/content/blog/complex.mdx";
const file = "C:/Users/kutay/OneDrive/Documents/GitHub/blog/src/content/blog/complex.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/kutay/OneDrive/Documents/GitHub/blog/src/content/blog/complex.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
