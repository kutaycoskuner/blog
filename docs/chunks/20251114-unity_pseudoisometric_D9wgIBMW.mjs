import { h as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_DJz8TuEr.mjs';
import { f as fallback, t as head, a as attr_style, d as attr, s as stringify, e as ensure_array_like, c as escape_html, g as bind_props } from './_@astro-renderers_BWAr0rPK.mjs';
/* empty css                                                              */

function GraphCompare($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let // Clamped Function Constants
			// Y = 0.2 if X < 0.5, otherwise Y = 0.8
			// Y = 0.2 + X * 0.6 (where 0.6 is the range)
			// Slider input value (0 to 1)
			// Reactive declarations for the RED MARKER's Y position
			stepY,
			lerpY;

		let width = fallback($$props['width'], 400);
		let height = fallback($$props['height'], 200);
		const padding = 40;
		const clampMin = 0.2;
		const clampMax = 0.8;
		const range = clampMax - clampMin;
		const stepFnClamped = (x) => x < 0.5 ? clampMin : clampMax;
		const lerpFnClamped = (x) => clampMin + x * range;
		const ticks = [0, 1];
		let t = 0.5;

		// Function to convert normalized coordinates (0 to 1) to SVG coordinates
		const toSVG = (x, y) => ({
			cx: padding + x * (width - 2 * padding),
			cy: height - padding - y * (height - 2 * padding)
		});

		// Generate data points for the PLOTTED lines
		const points = 101;

		const stepData = Array.from({ length: points }, (_, i) => {
			const x = i / (points - 1);

			return { x, y: stepFnClamped(x) };
		});

		const lerpData = Array.from({ length: points }, (_, i) => {
			const x = i / (points - 1);

			return { x, y: lerpFnClamped(x) };
		});

		// KaTeX Initialization
		let katexReady = false;

		let katex;

		const loadKatex = () => {
			if (window.katex) {
				katex = window.katex;
				katexReady = true;
				renderEquations();
			} else {
				// Fallback or wait for the script to load
				console.error("KaTeX not loaded. Ensure scripts are executed.");
			}
		};

		// Function to render the LaTeX equations
		const renderEquations = () => {
			if (!katexReady) return;

			// Step Function Equation
			const stepElement = document.getElementById("step-equation");

			if (stepElement) {
				katex.render(`f_{\\text{step}}(x) = \\begin{cases} ${clampMin} & \\text{if } x < 0.5 \\\\ ${clampMax} & \\text{if } x \\ge 0.5 \\end{cases}`, stepElement, { displayMode: true, throwOnError: false });
			}

			// Lerp Function Equation
			const lerpElement = document.getElementById("lerp-equation");

			if (lerpElement) {
				katex.render(`f_{\\text{lerp}}(x) = ${clampMin} + x \\times (0.6) \\quad \\text{for } x \\in [0, 1]`, lerpElement, { displayMode: true, throwOnError: false });
			}
		};

		// Rerender when KaTeX is ready or component updates
		// Ensure KaTeX loads and renders on mount/hydrate
		if (typeof window !== "undefined") {
			window.addEventListener("load", loadKatex);
		}

		stepY = stepFnClamped(t);
		lerpY = lerpFnClamped(t);
		if (katexReady) renderEquations();

		head('359x9h', $$renderer, ($$renderer) => {
			$$renderer.push(`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css" xintegrity="sha384-GvrF9wI5x7H187d7bN+v8+5Q/vR+bV+C28v8+Q/1Q/g=" crossorigin="anonymous"/> <script src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js" xintegrity="sha384-5R7C8/v2zQ/iQ8Nq9K7q/rP/8u2e/B4z/1P/y8/A/p" crossorigin="anonymous"></script>`);
		});

		$$renderer.push(`<div class="vis-container equation-row svelte-359x9h" style="display:flex; flex-direction:column; align-items:center;"><div style="display:flex; gap:40px;" class="svelte-359x9h"><div${attr_style(`width: ${stringify(width)}px; display:flex; flex-direction:column; align-items:center;`)} class="svelte-359x9h"><svg${attr('width', width)}${attr('height', height)} class="svelte-359x9h"><line${attr('x1', padding)}${attr('y1', height - padding)}${attr('x2', width - padding)}${attr('y2', height - padding)} stroke="currentColor" stroke-opacity="0.5"></line><line${attr('x1', padding)}${attr('y1', padding)}${attr('x2', padding)}${attr('y2', height - padding)} stroke="currentColor" stroke-opacity="0.5"></line><text x="50%"${attr('y', height - 5)} stroke="currentColor" text-anchor="middle" font-size="14">t (time)</text><text${attr('x', padding - 25)} y="50%" stroke="currentColor" text-anchor="middle" font-size="14"${attr('transform', `rotate(-90, ${stringify(padding - 25)}, ${stringify(height / 2)})`)}>value</text><!--[-->`);

		const each_array = ensure_array_like(ticks);

		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let tick = each_array[$$index];

			$$renderer.push(`<line${attr('x1', toSVG(tick, 0).cx)}${attr('y1', height - padding)}${attr('x2', toSVG(tick, 0).cx)}${attr('y2', height - padding + 5)} stroke="currentColor"></line>`);

			if (tick !== 0) {
				$$renderer.push('<!--[-->');
				$$renderer.push(`<text${attr('x', toSVG(tick, 0).cx)}${attr('y', height - padding + 15)} font-size="12" text-anchor="middle" stroke="currentColor" stroke-opacity="0.5">${escape_html(tick)}</text>`);
			} else {
				$$renderer.push('<!--[!-->');
			}

			$$renderer.push(`<!--]--><line${attr('x1', padding - 5)}${attr('y1', toSVG(0, tick).cy)}${attr('x2', padding)}${attr('y2', toSVG(0, tick).cy)} stroke="currentColor"></line><text${attr('x', padding - 10)}${attr('y', toSVG(0, tick).cy + 4)} font-size="12" stroke="currentColor" text-anchor="end" stroke-opacity="0.5">${escape_html(tick)}</text>`);
		}

		$$renderer.push(`<!--]--><!--[-->`);

		const each_array_1 = ensure_array_like(stepData);

		for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
			let point = each_array_1[i];

			if (i > 0) {
				$$renderer.push('<!--[-->');
				$$renderer.push(`<line${attr('x1', toSVG(stepData[i - 1].x, stepData[i - 1].y).cx)}${attr('y1', toSVG(stepData[i - 1].x, stepData[i - 1].y).cy)}${attr('x2', toSVG(point.x, point.y).cx)}${attr('y2', toSVG(point.x, point.y).cy)} stroke="currentColor" stroke-width="2"></line>`);
			} else {
				$$renderer.push('<!--[!-->');
			}

			$$renderer.push(`<!--]-->`);
		}

		$$renderer.push(`<!--]--><circle${attr('cx', toSVG(t, stepY).cx)}${attr('cy', toSVG(t, stepY).cy)} r="6" fill="green" stroke="currentColor" stroke-width="1"></circle></svg> <sub class="caption" style="margin:0; font-size: 1.1em; font-weight: 500;"><b>Clamped Step Function [0.2, 0.8]</b></sub></div> <div${attr_style(`width: ${stringify(width)}px; display:flex; flex-direction:column; align-items:center;`)} class="svelte-359x9h"><svg${attr('width', width)}${attr('height', height)} class="svelte-359x9h"><line${attr('x1', padding)}${attr('y1', height - padding)}${attr('x2', width - padding)}${attr('y2', height - padding)} stroke="currentColor" stroke-opacity="0.5"></line><line${attr('x1', padding)}${attr('y1', padding)}${attr('x2', padding)}${attr('y2', height - padding)} stroke="currentColor" stroke-opacity="0.5"></line><!--[-->`);

		const each_array_2 = ensure_array_like(ticks);

		for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
			let tick = each_array_2[$$index_2];

			$$renderer.push(`<line${attr('x1', toSVG(tick, 0).cx)}${attr('y1', height - padding)}${attr('x2', toSVG(tick, 0).cx)}${attr('y2', height - padding + 5)} stroke="currentColor"></line>`);

			if (tick !== 0) {
				$$renderer.push('<!--[-->');
				$$renderer.push(`<text${attr('x', toSVG(tick, 0).cx)}${attr('y', height - padding + 15)} font-size="12" text-anchor="middle" stroke="currentColor" stroke-opacity="0.5">${escape_html(tick)}</text>`);
			} else {
				$$renderer.push('<!--[!-->');
			}

			$$renderer.push(`<!--]--><line${attr('x1', padding - 5)}${attr('y1', toSVG(0, tick).cy)}${attr('x2', padding)}${attr('y2', toSVG(0, tick).cy)} stroke="currentColor"></line><text${attr('x', padding - 10)}${attr('y', toSVG(0, tick).cy + 4)} font-size="12" text-anchor="end" stroke="currentColor" stroke-opacity="0.5">${escape_html(tick)}</text>`);
		}

		$$renderer.push(`<!--]--><!--[-->`);

		const each_array_3 = ensure_array_like(lerpData);

		for (let i = 0, $$length = each_array_3.length; i < $$length; i++) {
			let point = each_array_3[i];

			if (i > 0) {
				$$renderer.push('<!--[-->');
				$$renderer.push(`<line${attr('x1', toSVG(lerpData[i - 1].x, lerpData[i - 1].y).cx)}${attr('y1', toSVG(lerpData[i - 1].x, lerpData[i - 1].y).cy)}${attr('x2', toSVG(point.x, point.y).cx)}${attr('y2', toSVG(point.x, point.y).cy)} stroke="currentColor" stroke-width="2"></line>`);
			} else {
				$$renderer.push('<!--[!-->');
			}

			$$renderer.push(`<!--]-->`);
		}

		$$renderer.push(`<!--]--><text x="50%"${attr('y', height - 5)} stroke="currentColor" text-anchor="middle" font-size="14">t (time)</text><text${attr('x', padding - 25)} y="50%" stroke="currentColor" text-anchor="middle" font-size="14"${attr('transform', `rotate(-90, ${stringify(padding - 25)}, ${stringify(height / 2)})`)}>value</text><circle${attr('cx', toSVG(t, lerpY).cx)}${attr('cy', toSVG(t, lerpY).cy)} r="6" fill="green" stroke="currentColor" stroke-width="1"></circle></svg> <sub class="caption" style="margin:0; font-size: 1.1em; font-weight: 500;"><b>Clamped Linear Interpolation [0.2, 0.8]</b></sub></div></div> <div${attr_style(`display:flex; gap:40px; margin-top:2rem; width:100%; max-width: ${stringify(width * 2 + 40)}px;`)} class="svelte-359x9h"><div${attr_style(`width: ${stringify(width)}px; display:flex; flex-direction:column; align-items:center; text-align:center;`)} class="svelte-359x9h"><div id="step-equation" style="min-height: 80px;"></div></div> <div${attr_style(`width: ${stringify(width)}px; display:flex; flex-direction:column; align-items:center; text-align:center;`)} class="svelte-359x9h"><div id="lerp-equation" style="min-height: 80px;"></div></div></div></div> <div style="margin-top:2rem; text-align: center;"><label style="font-size: 1.1em; font-weight: bold;"><input type="range" min="0" max="1" step="0.01"${attr('value', t)} class="svelte-359x9h"/> ${escape_html(t.toFixed(2))}</label></div>`);
		bind_props($$props, { width, height });
	});
}

const frontmatter = {
  "template": 1.6,
  "revision": 1.1,
  "title": "Implemeting transform functions for peseudo-isometric camera in Unity",
  "description": null,
  "category": ["tutorial"],
  "tags": ["unity", "camera", "isometric"],
  "created": "2025-11-26T00:00:00.000Z",
  "updated": "2025-11-26T00:00:00.000Z",
  "author": "lichzelg",
  "translator": null,
  "editor": null,
  "image": null,
  "image_credit": null,
  "language": "en",
  "visibility": true,
  "sort_order": 1
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "introduction",
    "text": "Introduction"
  }, {
    "depth": 3,
    "slug": "what-we-will-do",
    "text": "What we will do?"
  }, {
    "depth": 2,
    "slug": "1-implementing-planar-movement",
    "text": "1. Implementing planar movement"
  }, {
    "depth": 3,
    "slug": "11-standards-on-3d-space-and-perceptualization-of-movement",
    "text": "1.1. Standards on 3D Space and perceptualization of Movement"
  }, {
    "depth": 3,
    "slug": "12-script-component-and-identification-of-camera",
    "text": "1.2. Script component and Identification of camera"
  }, {
    "depth": 3,
    "slug": "13-describing-the-behaviour-of-movement",
    "text": "1.3. Describing the behaviour of movement"
  }, {
    "depth": 2,
    "slug": "2-impliementing-quantized-step-rotation",
    "text": "2. Impliementing quantized-step rotation"
  }, {
    "depth": 3,
    "slug": "21-finding-the-positive-rotation",
    "text": "2.1. Finding the positive rotation"
  }, {
    "depth": 3,
    "slug": "21-implementing-pattern",
    "text": "2.1. Implementing pattern"
  }, {
    "depth": 3,
    "slug": "23-fixing-the-movement-logic",
    "text": "2.3. Fixing the movement logic"
  }, {
    "depth": 3,
    "slug": "24-rotation-animation-through-linear-interpolation",
    "text": "2.4. Rotation animation through linear interpolation"
  }, {
    "depth": 3,
    "slug": "25-combining-movements-with-new-camera-update-function",
    "text": "2.5. Combining movements with new camera update function"
  }, {
    "depth": 2,
    "slug": "3-implementing-quantized-step-zoom",
    "text": "3. Implementing quantized-step zoom"
  }, {
    "depth": 3,
    "slug": "31-creating-template-for-zoom",
    "text": "3.1. Creating template for zoom"
  }, {
    "depth": 3,
    "slug": "32-implementing-zoom-function",
    "text": "3.2. Implementing zoom function"
  }, {
    "depth": 3,
    "slug": "33-transcribing-updatecamera-function",
    "text": "3.3. Transcribing UpdateCamera function"
  }, {
    "depth": 2,
    "slug": "bonus-step-test-scene",
    "text": "Bonus step: Test scene"
  }, {
    "depth": 1,
    "slug": "references",
    "text": "References"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    annotation: "annotation",
    br: "br",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    math: "math",
    mi: "mi",
    mn: "mn",
    mo: "mo",
    mrow: "mrow",
    msub: "msub",
    mtext: "mtext",
    ol: "ol",
    p: "p",
    pre: "pre",
    semantics: "semantics",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "introduction",
      children: "Introduction"
    }), "\n", createVNode(_components.p, {
      children: "In this tutorial, its intended to document and provide a method to implement transform functions for pseudo-isometric camera or more recognized but informal description the ‘strategy-game’ camera, as you see on the example gif, mostly inspired by the amazing work of t3ssel8r."
    }), "\n", createVNode(_components.p, {
      children: "Assuming you find yourself here as you wanted to create some isometric looking game, or something similar. We will implement a solution (maybe not the most efficient) for this problem. About the nomenclature, isometric camera describing the symmetrical, orttographic perspective to provide 3d visualization of technical drawings, as it is often used in strategy games due to large visual areal control property. However, although it is fairly easy to switch between orthographic and real perspective camera, we will focus on perspective camera to be able to have visuals with depth is more apparent, therefore I called it pseudo-isometric. I am not truly sure if it is so called in the literature."
    }), "\n", createVNode("p", {
      class: "img80",
      children: [createVNode("img", {
        src: "../..//linked_assets/20251113-blog-unity_pseudoisometric/20251125-init.gif"
      }), createVNode("br", {}), createVNode("sub", {
        class: "caption",
        children: createVNode("i", {
          children: "Pseudo-Isometric camera transformations"
        })
      }), createVNode("sub", {
        class: "image-source",
        children: createVNode("i", {})
      })]
    }), "\n", createVNode(_components.h3, {
      id: "what-we-will-do",
      children: "What we will do?"
    }), "\n", createVNode(_components.p, {
      children: "We will implement, movement, rotation and zoom functions of the camera that is ready to be implemented to your player, while explaining the math (slightly) behind it. As you comprehend the idea, you will be able to manipulate or tweak the parts depending on your needs."
    }), "\n", createVNode(_components.p, {
      children: "To not lost in the directions, I would like to present name of the windows that I use in unity editor."
    }), "\n", createVNode("p", {
      class: "img80",
      children: [createVNode("img", {
        src: "../..//linked_assets/20251113-blog-unity_pseudoisometric/20251120-unity_editor.png"
      }), createVNode("br", {}), createVNode("sub", {
        class: "caption",
        children: createVNode("i", {
          children: " Orientation visual for Unity editor"
        })
      }), createVNode("sub", {
        class: "image-source",
        children: createVNode("i", {})
      })]
    }), "\n", createVNode(_components.h2, {
      id: "1-implementing-planar-movement",
      children: "1. Implementing planar movement"
    }), "\n", createVNode(_components.p, {
      children: ["Okay we have a brand new unity project with empty scene looking to us. I usually like to create a new scene to test new implementations to protect my existing scenes. This tutorial uses my current LTS version of the editor, which is Unity ", createVNode(_components.code, {
        children: "6000.0.61f1"
      }), ", with a writing date that is current with the latest LTS version."]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code vitesse-dark",
      style: {
        backgroundColor: "#121212",
        color: "#dbd7caee",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Right click on project frame > scenes > create > scene > scene"
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["We create new scene, I name it ", createVNode(_components.code, {
        children: "CameraTestScene"
      }), ". In our scene, an empty camera, directional light and vast empty space is looking at us. Now we will create our minimal setup. First, we need an object to reference our movement (interestingly we cannot recognize our transformation if the space around us is uniform on all directions). So I add a cube to scene."]
    }), "\n", createVNode("p", {
      class: "img80",
      children: [createVNode("img", {
        src: "../..//linked_assets/20251113-blog-unity_pseudoisometric/20251120-camera_test_Scene.png"
      }), createVNode("br", {}), createVNode("sub", {
        class: "caption",
        children: createVNode("i", {
          children: " Creating scene"
        })
      }), createVNode("sub", {
        class: "image-source",
        children: createVNode("i", {})
      })]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code vitesse-dark",
      style: {
        backgroundColor: "#121212",
        color: "#dbd7caee",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Right click on hierarchy > 3D Objects > Cube"
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["For some reason, I have some weird transform on my cube, so I select the cube, then in ", createVNode(_components.code, {
        children: "Inspector"
      }), " window, we set position value of ", createVNode(_components.code, {
        children: "x"
      }), " ", createVNode(_components.code, {
        children: "y"
      }), " ", createVNode(_components.code, {
        children: "z"
      }), " axes to ", createVNode(_components.code, {
        children: "0"
      }), ". Then the cube should be centered in my viewport."]
    }), "\n", createVNode(_components.p, {
      children: ["Next, I select my ", createVNode(_components.code, {
        children: "Main Camera"
      }), " from the scene hierarchy window. The inspector window will update with the properties of camera. Here we want to position or camera to be able to see the box for some visual reference to test if our camera is working in the future. While we can see that, our camera and view direction in the scene. It is usually good idea to have some information about how to position, and how axes and rotations are defined in Unity, to have a better grasp how things positioned and rotated in 3d space in our imagination, as it will be very helpful while debugging if we encounter any problem."]
    }), "\n", createVNode(_components.h3, {
      id: "11-standards-on-3d-space-and-perceptualization-of-movement",
      children: "1.1. Standards on 3D Space and perceptualization of Movement"
    }), "\n", createVNode(_components.p, {
      children: ["In computer graphics world there are some things that there are consensus over, for instance setting each of the 3d axes, x, y, z perpendicular to each other is beneficial and intutive to everyone but not on all cases. However, which axis should represent the ", createVNode(_components.code, {
        children: "up"
      }), " is often depending on whether you conceptualize looking something on table or screen; or which directions should be positive are sometimes open thema for a debate. As there are no consensus on such things, at the same time we need a system for consistency, there are usually standards. These standards defined and used by various instituions, organizations and companies. In our case, unity is using ‘left handed coordinate system’ (will be referred as ", createVNode(_components.code, {
        children: "lhc"
      }), " next time in this text). But what does it mean?"]
    }), "\n", createVNode(_components.p, {
      children: ["If you close your left hand to to form a fist, then open first three fingers starting from your thumb, and lastly bend your middle finger 90 degrees front. Now your hand is representing a left handed coordinate system: whereas each of your open fingers, respectively thumb, index and middle representing respectively ", createVNode(_components.code, {
        children: "x"
      }), ", ", createVNode(_components.code, {
        children: "y"
      }), ", ", createVNode(_components.code, {
        children: "z"
      }), " are three perpendicular axis of 3d world. And direction of your fingers are also describing the positive directions of these axes. These axis also color coded with how computer calculates color with ", createVNode(_components.code, {
        children: "red"
      }), " ", createVNode(_components.code, {
        children: "green"
      }), " and ", createVNode(_components.code, {
        children: "blue"
      }), " values. So, since there are three axis and three colors, ", createVNode(_components.code, {
        children: "x"
      }), " is represented by ", createVNode(_components.code, {
        children: "red"
      }), ", ", createVNode(_components.code, {
        children: "y"
      }), " by ", createVNode(_components.code, {
        children: "green"
      }), ", and ", createVNode(_components.code, {
        children: "z"
      }), " by ", createVNode(_components.code, {
        children: "blue"
      }), "."]
    }), "\n", createVNode("p", {
      class: "img40",
      children: [createVNode("img", {
        src: "../..//linked_assets/20251113-blog-unity_pseudoisometric/20251120-lhc.gif"
      }), createVNode("br", {}), createVNode("sub", {
        class: "caption",
        children: createVNode("i", {
          children: "Simulating left hand coordinate system with your hand"
        })
      }), createVNode("sub", {
        class: "image-source",
        children: createVNode("i", {})
      })]
    }), "\n", createVNode(_components.p, {
      children: "But why this is useful? It is not always easy to imagine on 3d world especially when it comes to rotation calculations. This simple hand trick easily help you to revise and correct linear transformation operations moving things out of your memory with a visual cue. Thing of it as a analogy of a black board, it provides a playground to move things out of our memory and check things back if necessary. When we want to debug something, it allows us to calculate what to expect easily. We will use this in the tutorial."
    }), "\n", createVNode(_components.p, {
      children: "Now we can check it by inspecting gizmo in our scene tool. Gizmo is a simple orientation tool for us to understand which direction we are currently looking at at space (remember that, it is not possible to understand we are looking at in uniform space). Gizmos three colored axed are representing positive directions, while the uncolored ones are representing the negative directions of same axes. (since the colored axes looks like arrows they also look like that they indicate directions which I found a little bit confusing). Now while your hand in left hand coordinate system formation, if you look your palm at half angle between your thumb and middle finger, you will see the same thing axis orientation with the unity gizmo. To provide some comparison, this wont work if you do it with your right hand. While both are industry standards and used by diffierent organizations and different rationales, lets not include this to keep us focused on our topic."
    }), "\n", createVNode("p", {
      class: "img80",
      children: [createVNode("img", {
        src: "../..//linked_assets/20251113-blog-unity_pseudoisometric/20251120-gizmo_hand.png"
      }), createVNode("br", {}), createVNode("sub", {
        class: "caption",
        children: createVNode("i", {
          children: "Gizmo / Axis comparison"
        })
      }), createVNode("sub", {
        class: "image-source",
        children: createVNode("i", {})
      })]
    }), "\n", createVNode(_components.p, {
      children: ["While your hand is in ", createVNode(_components.code, {
        children: "lhc"
      }), " form, if you rotate your hand in a way, that your middle finger look same direction with your eyes, this is how unity camera is oriented. At this position we have oriented our eyes to unity camera. If you noticed that your eyes looking direction is now aligned with your middle finger, in other words, unity camera is looking ", createVNode(_components.code, {
        children: "z+"
      }), " direction by default."]
    }), "\n", createVNode("p", {
      class: "img80",
      children: [createVNode("img", {
        src: "../..//linked_assets/20251113-blog-unity_pseudoisometric/20251125-gizmo_hand_camera.png"
      }), createVNode("br", {}), createVNode("sub", {
        class: "caption",
        children: createVNode("i", {
          children: "Camera / Hand Axis"
        })
      }), createVNode("sub", {
        class: "image-source",
        children: createVNode("i", {})
      })]
    }), "\n", createVNode(_components.p, {
      children: ["If you select Main Camera in your scene in hierarchy. You can see that camera transform helpers will be visible. please notice that camera is looking towards blue axis, which is ", createVNode(_components.code, {
        children: "z+"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "This information is important, because we will not always have such a beautiful visual referencse, we will have to either, debug and observe it by changing values, or comprehend and set in imagination factory."
    }), "\n", createVNode(_components.p, {
      children: ["So lets inspect our case, we have an object staying at ", createVNode(_components.code, {
        children: "(0, 0, 0)"
      }), " position. To simplify lets eliminate x and y axes and assume we are looking on a simple linear ", createVNode(_components.code, {
        children: "z"
      }), " axis. If we want to see this object, first condition is that object should be stay in front of our camera right? Since, our camera is looking ", createVNode(_components.code, {
        children: "+z"
      }), " direction, we should place our camera somewhere in ", createVNode(_components.code, {
        children: "-z"
      }), " so that it will see ", createVNode(_components.code, {
        children: "z=0"
      }), " point (where our object stands) stays in ", createVNode(_components.code, {
        children: "+z"
      }), " axis of the camera."]
    }), "\n", createVNode(_components.h3, {
      id: "12-script-component-and-identification-of-camera",
      children: "1.2. Script component and Identification of camera"
    }), "\n", createVNode(_components.p, {
      children: ["Enough theory for now, lets continue with the implementation. We were looking at Main Cameras properties by inspector window of unity. While it helps us to some extend, we need to define our own behaviors to gain more control over our camera. In order to do that we want to connect camera with c# script that we will define our behavior. On the bottom of inspector window click add component button, then select new script (you can search to find) then we name it ", createVNode(_components.code, {
        children: "PseudoIsometricCamera"
      }), " and create."]
    }), "\n", createVNode("p", {
      class: "img40",
      children: [createVNode("img", {
        src: "../..//linked_assets/20251113-blog-unity_pseudoisometric/20251120-component_pseudo.png"
      }), createVNode("br", {}), createVNode("sub", {
        class: "caption",
        children: createVNode("i", {
          children: "Creating script as component"
        })
      }), createVNode("sub", {
        class: "image-source",
        children: createVNode("i", {})
      })]
    }), "\n", createVNode(_components.p, {
      children: ["We should be able to see our ", createVNode(_components.code, {
        children: "C#"
      }), " script in our asset window. When we double click it it will be open in our IDE. In my case it is visual studio."]
    }), "\n", createVNode("p", {
      class: "img80",
      children: [createVNode("img", {
        src: "../..//linked_assets/20251113-blog-unity_pseudoisometric/20251120-monobehaviour.png"
      }), createVNode("br", {}), createVNode("sub", {
        class: "caption",
        children: createVNode("i", {
          children: "Monobehaviour script template"
        })
      }), createVNode("sub", {
        class: "image-source",
        children: createVNode("i", {})
      })]
    }), "\n", createVNode(_components.p, {
      children: "We see a minimal blueprint for MonoBehaviour c# script where we define our camera transformations. At script window, we can manipulate existing properties of camera by some rules, or define some new properties."
    }), "\n", createVNode(_components.p, {
      children: "So lets provide some definitions, first we need to point our camera to our script so it recognizes it. In order to give some inputs and group those inputs on script on inspector we also add headers directly inside our PseudoIsometricCamera class."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code vitesse-dark",
      style: {
        backgroundColor: "#121212",
        color: "#dbd7caee",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "cs",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "public"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " class"
          }), createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: " PseudoIsometricCamera"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " :"
          }), createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: " MonoBehaviour"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "{"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    ["
          }), createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: "Header"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D77"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D"
            },
            children: "References"
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D77"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ")]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    public"
          }), createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: " Camera"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " cam"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "    ..."
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["After saving our script in our IDE, we should be able to see input in our Unity Editor under our script component. Lets drag and drop our main camera to this slot. So when we refer we use ", createVNode(_components.code, {
        children: "cam"
      }), " variable in our script, script will know that we are talking about the camera object named Main Camera in scene."]
    }), "\n", createVNode(_components.p, {
      children: "Then we can quicly test if we can control our camera through our script. At this state, if we press play. We should be able to see our box on the game window. As we nicely set poisitons for our camera and object to be able to see the cube within our frame."
    }), "\n", createVNode("p", {
      class: "img80",
      children: [createVNode("img", {
        src: "../..//linked_assets/20251113-blog-unity_pseudoisometric/20251120-game_with_cube1.png"
      }), createVNode("br", {}), createVNode("sub", {
        class: "caption",
        children: createVNode("i", {
          children: "Game window: with cube"
        })
      }), createVNode("sub", {
        class: "image-source",
        children: createVNode("i", {})
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Lets change the position of our camera. We can use ", createVNode(_components.code, {
        children: "Start()"
      }), " function for it. As it states on the comment. Start script run once when the MonoBehaviour is created. A vector object, in unity could represent many things, such as point, direction, color etc. In our case it is representing a position as point each consequtive float number value is representing axes of the 3d space. Lets raise our from the gorund camera on ", createVNode(_components.code, {
        children: "y"
      }), " axis to give a bit height, while keeping our ", createVNode(_components.code, {
        children: "z"
      }), " value same. As isometric camera looks their scenes from above, it would make sense."]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code vitesse-dark",
      style: {
        backgroundColor: "#121212",
        color: "#dbd7caee",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "cs",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "   void"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " Start"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "   {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "       cam"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "transform"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "position"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: " Vector3"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#4C9A91"
            },
            children: "0f"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#4C9A91"
            },
            children: " 6f"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " -"
          }), createVNode(_components.span, {
            style: {
              color: "#4C9A91"
            },
            children: "10f"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "   }"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "If you dont see slightly see box from above then everything is working as expected! So what we did: We introduced our camera object to our script, our camera object has transform property that holds position, rotation and scale values. Then we manipulated our position value within our script. How do we know and these properties exists? By simply reading unity docs as primary source."
    }), "\n", createVNode("p", {
      class: "img80",
      children: [createVNode("img", {
        src: "../..//linked_assets/20251113-blog-unity_pseudoisometric/20251120-game_with_cube2.png"
      }), createVNode("br", {}), createVNode("sub", {
        class: "caption",
        children: createVNode("i", {
          children: "Game window: with cube looking above"
        })
      }), createVNode("sub", {
        class: "image-source",
        children: createVNode("i", {})
      })]
    }), "\n", createVNode(_components.p, {
      children: "Now we are looking our scene a bit above, we understand as seeing our boxes it is still in our frame slightly. Next, we want to at our object, We need to change our looking direction. or in other words rotate our camera."
    }), "\n", createVNode("p", {
      class: "img80",
      children: [createVNode("img", {
        src: "../..//linked_assets/20251113-blog-unity_pseudoisometric/20251120-view_dir.png"
      }), createVNode("br", {}), createVNode("sub", {
        class: "caption",
        children: createVNode("i", {
          children: "What it is / What we want in current state"
        })
      }), createVNode("sub", {
        class: "image-source",
        children: createVNode("i", {})
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Unity provides ease for us to use here with build in ", createVNode(_components.code, {
        children: "transform.lookAt(target)"
      }), " function of camera. This function simply aligns cameras, view direction to vector between target and camera position. By calculating the angle between camera look vector and the vector we want to align with, then including the up and right vectors its applying transformation."]
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
                  mathvariant: "bold",
                  children: "a"
                }), createVNode(_components.mo, {
                  children: "⋅"
                }), createVNode(_components.mi, {
                  mathvariant: "bold",
                  children: "b"
                }), createVNode(_components.mo, {
                  children: "="
                }), createVNode(_components.msub, {
                  children: [createVNode(_components.mi, {
                    children: "a"
                  }), createVNode(_components.mn, {
                    children: "1"
                  })]
                }), createVNode(_components.msub, {
                  children: [createVNode(_components.mi, {
                    children: "b"
                  }), createVNode(_components.mn, {
                    children: "1"
                  })]
                }), createVNode(_components.mo, {
                  children: "+"
                }), createVNode(_components.msub, {
                  children: [createVNode(_components.mi, {
                    children: "a"
                  }), createVNode(_components.mn, {
                    children: "2"
                  })]
                }), createVNode(_components.msub, {
                  children: [createVNode(_components.mi, {
                    children: "b"
                  }), createVNode(_components.mn, {
                    children: "2"
                  })]
                }), createVNode(_components.mo, {
                  children: "+"
                }), createVNode(_components.msub, {
                  children: [createVNode(_components.mi, {
                    children: "a"
                  }), createVNode(_components.mn, {
                    children: "3"
                  })]
                }), createVNode(_components.msub, {
                  children: [createVNode(_components.mi, {
                    children: "b"
                  }), createVNode(_components.mn, {
                    children: "3"
                  })]
                })]
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "\n\\mathbf{a} \\cdot \\mathbf{b} = a_1 b_1 + a_2 b_2 + a_3 b_3 \n"
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
              class: "mord mathbf",
              children: "a"
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
                height: "0.6944em"
              }
            }), createVNode(_components.span, {
              class: "mord mathbf",
              children: "b"
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
                height: "0.8444em",
                verticalAlign: "-0.15em"
              }
            }), createVNode(_components.span, {
              class: "mord",
              children: [createVNode(_components.span, {
                class: "mord mathnormal",
                children: "a"
              }), createVNode(_components.span, {
                class: "msupsub",
                children: createVNode(_components.span, {
                  class: "vlist-t vlist-t2",
                  children: [createVNode(_components.span, {
                    class: "vlist-r",
                    children: [createVNode(_components.span, {
                      class: "vlist",
                      style: {
                        height: "0.3011em"
                      },
                      children: createVNode(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "0em",
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
                            children: "1"
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
                        height: "0.15em"
                      },
                      children: createVNode(_components.span, {})
                    })
                  })]
                })
              })]
            }), createVNode(_components.span, {
              class: "mord",
              children: [createVNode(_components.span, {
                class: "mord mathnormal",
                children: "b"
              }), createVNode(_components.span, {
                class: "msupsub",
                children: createVNode(_components.span, {
                  class: "vlist-t vlist-t2",
                  children: [createVNode(_components.span, {
                    class: "vlist-r",
                    children: [createVNode(_components.span, {
                      class: "vlist",
                      style: {
                        height: "0.3011em"
                      },
                      children: createVNode(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "0em",
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
                            children: "1"
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
                        height: "0.15em"
                      },
                      children: createVNode(_components.span, {})
                    })
                  })]
                })
              })]
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
                height: "0.8444em",
                verticalAlign: "-0.15em"
              }
            }), createVNode(_components.span, {
              class: "mord",
              children: [createVNode(_components.span, {
                class: "mord mathnormal",
                children: "a"
              }), createVNode(_components.span, {
                class: "msupsub",
                children: createVNode(_components.span, {
                  class: "vlist-t vlist-t2",
                  children: [createVNode(_components.span, {
                    class: "vlist-r",
                    children: [createVNode(_components.span, {
                      class: "vlist",
                      style: {
                        height: "0.3011em"
                      },
                      children: createVNode(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "0em",
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
                    }), createVNode(_components.span, {
                      class: "vlist-s",
                      children: "​"
                    })]
                  }), createVNode(_components.span, {
                    class: "vlist-r",
                    children: createVNode(_components.span, {
                      class: "vlist",
                      style: {
                        height: "0.15em"
                      },
                      children: createVNode(_components.span, {})
                    })
                  })]
                })
              })]
            }), createVNode(_components.span, {
              class: "mord",
              children: [createVNode(_components.span, {
                class: "mord mathnormal",
                children: "b"
              }), createVNode(_components.span, {
                class: "msupsub",
                children: createVNode(_components.span, {
                  class: "vlist-t vlist-t2",
                  children: [createVNode(_components.span, {
                    class: "vlist-r",
                    children: [createVNode(_components.span, {
                      class: "vlist",
                      style: {
                        height: "0.3011em"
                      },
                      children: createVNode(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "0em",
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
                    }), createVNode(_components.span, {
                      class: "vlist-s",
                      children: "​"
                    })]
                  }), createVNode(_components.span, {
                    class: "vlist-r",
                    children: createVNode(_components.span, {
                      class: "vlist",
                      style: {
                        height: "0.15em"
                      },
                      children: createVNode(_components.span, {})
                    })
                  })]
                })
              })]
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
                height: "0.8444em",
                verticalAlign: "-0.15em"
              }
            }), createVNode(_components.span, {
              class: "mord",
              children: [createVNode(_components.span, {
                class: "mord mathnormal",
                children: "a"
              }), createVNode(_components.span, {
                class: "msupsub",
                children: createVNode(_components.span, {
                  class: "vlist-t vlist-t2",
                  children: [createVNode(_components.span, {
                    class: "vlist-r",
                    children: [createVNode(_components.span, {
                      class: "vlist",
                      style: {
                        height: "0.3011em"
                      },
                      children: createVNode(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "0em",
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
                            children: "3"
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
                        height: "0.15em"
                      },
                      children: createVNode(_components.span, {})
                    })
                  })]
                })
              })]
            }), createVNode(_components.span, {
              class: "mord",
              children: [createVNode(_components.span, {
                class: "mord mathnormal",
                children: "b"
              }), createVNode(_components.span, {
                class: "msupsub",
                children: createVNode(_components.span, {
                  class: "vlist-t vlist-t2",
                  children: [createVNode(_components.span, {
                    class: "vlist-r",
                    children: [createVNode(_components.span, {
                      class: "vlist",
                      style: {
                        height: "0.3011em"
                      },
                      children: createVNode(_components.span, {
                        style: {
                          top: "-2.55em",
                          marginLeft: "0em",
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
                            children: "3"
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
                        height: "0.15em"
                      },
                      children: createVNode(_components.span, {})
                    })
                  })]
                })
              })]
            })]
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Perhaps inner calculation of ", createVNode(_components.code, {
        children: "lookAt()"
      }), " function might be thema of another article for now lets use it pragmatically. If you want to read about it however, you can check these sources: ", createVNode(_components.a, {
        href: "https://jsantell.com/3d-projection/",
        children: "3d_projection_by_Jordan_Santell"
      }), ", ", createVNode(_components.a, {
        href: "https://docs.unity3d.com/6000.2/Documentation/ScriptReference/Transform.LookAt.html",
        children: "unity_docs_transform.lookAt()"
      }), ", ", createVNode(_components.a, {
        href: "https://learnopengl.com/Getting-started/Camera",
        children: "Camera_Chapter_in_learnopengl"
      }), " But for now lets implement similar but more explicit process. We introduce new parameters to our script."]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code vitesse-dark",
      style: {
        backgroundColor: "#121212",
        color: "#dbd7caee",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "cs",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "public"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " class"
          }), createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: " PseudoIsometricCamera"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " :"
          }), createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: " MonoBehaviour"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "{"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    ["
          }), createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: "Header"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D77"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D"
            },
            children: "References"
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D77"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ")]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    public"
          }), createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: " Camera"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " cam"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    public"
          }), createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: " Vector3"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " camTarget"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          }), createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "         // a position for our camera to look"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    public"
          }), createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: " Vector3"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " camPosition"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          }), createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "       // the position of our camera (we will use it afterwards to snap to target such as player)"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    public"
          }), createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: " Vector3"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " camDistance"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          }), createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "       // a vector represents distance and direction from camera to our target"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    private"
          }), createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: " Vector3"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " baseCamDistance"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          }), createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "  // that we will use as a constant value"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "    ..."
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "We introduced"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "camTarget"
      }), " value to isolate our looking direction from any object so we can move independently from objects.", createVNode(_components.br, {}), "\n", createVNode(_components.code, {
        children: "camDistance"
      }), " variable, this variable is actually derived variable as it is calculated ", createVNode(_components.code, {
        children: "camTarget"
      }), " - ", createVNode(_components.code, {
        children: "camPosition"
      }), " but for the sake of readability we created it.", createVNode(_components.br, {}), "\n", createVNode(_components.code, {
        children: "camPosition"
      }), " this is also derived class same value within, ", createVNode(_components.code, {
        children: "cam.transform.posiiton"
      }), " but we create it for the sake of readability and use it as a snapping point afterwards."]
    }), "\n", createVNode(_components.p, {
      children: ["Afterwards, we need to assign values to our introduced values. so in ", createVNode(_components.code, {
        children: "Start()"
      }), " function:"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code vitesse-dark",
      style: {
        backgroundColor: "#121212",
        color: "#dbd7caee",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "cs",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "    void"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " Start"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // safeguard to check if everything nicely assigned"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        camTarget"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " Vector3"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "zero"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        camPosition"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: " Vector3"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#4C9A91"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#4C9A91"
            },
            children: " 6"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " -"
          }), createVNode(_components.span, {
            style: {
              color: "#4C9A91"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "        if"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "cam"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " =="
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " null"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " ||"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " camTarget"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " =="
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " null"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " ||"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " camPosition"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " =="
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " null"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "        {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "            Debug"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "LogError"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D77"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D"
            },
            children: "CameraRig setup incomplete! Assign all references."
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D77"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "            return"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "        }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // we set actual camera position based on our variable"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        cam"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "transform"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "position"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " camPosition"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // calculate the distance vector by using camera target and camera position"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        camDistance"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "            ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " camTarget"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " -"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " camPosition"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // set forward axis of camera to this vector but with normalizing it (scaling length to 1)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        cam"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "transform"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "forward"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " camDistance"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "normalized"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    }"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Now if we save our script and play. We should be able to see that our camera is nicely aligned in a way to focus on our target."
    }), "\n", createVNode("p", {
      class: "img80",
      children: [createVNode("img", {
        src: "../..//linked_assets/20251113-blog-unity_pseudoisometric/20251120-game_with_cube3.png"
      }), createVNode("br", {}), createVNode("sub", {
        class: "caption",
        children: createVNode("i", {
          children: "In game frame seeing the cube from above"
        })
      }), createVNode("sub", {
        class: "image-source",
        children: createVNode("i", {})
      })]
    }), "\n", createVNode(_components.h3, {
      id: "13-describing-the-behaviour-of-movement",
      children: "1.3. Describing the behaviour of movement"
    }), "\n", createVNode(_components.p, {
      children: "At this stage, it might be good to implement our movement functions. For this lets define first what sort of movement we are interested at. First lets deconstruct, the movement action. We want user to give some inputs, through whatever input device they have (keyboard, mouse, touchpad, console, etc.) then based on this input type we make some calculations and apply them. In terms of architecture, it is usually considered as better idea to describe actions prior to input types rather than input types prior to actions. As it could be abstracted to adapt whatever input device afterwards."
    }), "\n", createVNode(_components.p, {
      children: "For instance, in our code if we do our stuff when user pressses W on keyboard, we need to change our base code when we want to add support for game console. But if we rather define our movement actions and use it as an interface between our camera and input device, then we can add another adapter without changing our original code."
    }), "\n", createVNode(_components.p, {
      children: "So we will start with defining our actions, as a simple base, we will define four direction movement: forward, backward, left and right. Unity offering a system for input managegement. We are going to use this."
    }), "\n", createVNode(_components.p, {
      children: "First lets ensure that if input system is active: go to banner on top of your window. Open:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code vitesse-dark",
      style: {
        backgroundColor: "#121212",
        color: "#dbd7caee",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "window > package manager > input system (search)"
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["Install it if it is not installed. Then again on the top section, select edit, then project settings, select player, search on top bar ", createVNode(_components.code, {
        children: "active input handling"
      }), " and select ", createVNode(_components.code, {
        children: "input system package (new)"
      })]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code vitesse-dark",
      style: {
        backgroundColor: "#121212",
        color: "#dbd7caee",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Edit > project settings > player > active input handing (search) : input system package (new)"
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Now we can add input actions object on our assets window :"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code vitesse-dark",
      style: {
        backgroundColor: "#121212",
        color: "#dbd7caee",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "Right click > create > input actions"
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["I name it ", createVNode(_components.code, {
        children: "InputSystem"
      }), ". Now double click input system and open it. Input system action editor looks like this:"]
    }), "\n", createVNode("p", {
      class: "img80",
      children: [createVNode("img", {
        src: "../..//linked_assets/20251113-blog-unity_pseudoisometric/20251120-input_system.png"
      }), createVNode("br", {}), createVNode("sub", {
        class: "caption",
        children: createVNode("i", {
          children: "Input System, Action Maps Window"
        })
      }), createVNode("sub", {
        class: "image-source",
        children: createVNode("i", {})
      })]
    }), "\n", createVNode(_components.p, {
      children: "You may or may not find some default maps there. We will create new:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code vitesse-dark",
      style: {
        backgroundColor: "#121212",
        color: "#dbd7caee",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "md",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "    click to plus icon next to action maps > name it `CameraActionMap`"
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["Now on the middle window, create new action and name it ", createVNode(_components.code, {
        children: "Movement"
      }), ", now on the right window named ", createVNode(_components.code, {
        children: "Action Properties"
      }), " change action type to ", createVNode(_components.code, {
        children: "Value"
      }), ", control type: ", createVNode(_components.code, {
        children: "Vector 2"
      }), ". As four direction movement, defined upon two axis movement."]
    }), "\n", createVNode(_components.p, {
      children: ["Once once again on middle window, right click on ", createVNode(_components.code, {
        children: "Movement"
      }), " action and upon selections, select ", createVNode(_components.code, {
        children: "Add Up/Down/Left/Right Composite"
      }), " as this is built-in already."]
    }), "\n", createVNode(_components.p, {
      children: ["Unity system provided us a pattern for this input. Lets add input for each, Select ", createVNode(_components.code, {
        children: "Up"
      }), " on bindings > path: select ", createVNode(_components.code, {
        children: "W [Keyboard]"
      }), " for instance and apply the same for the rest respectively up/down/left/right to w,s,a,d keys, then save. At the end it should look like this:"]
    }), "\n", createVNode("p", {
      class: "img80",
      children: [createVNode("img", {
        src: "../..//linked_assets/20251113-blog-unity_pseudoisometric/20251120-input_actions_movement.png"
      }), createVNode("br", {}), createVNode("sub", {
        class: "caption",
        children: createVNode("i", {
          children: "Input Actions Movement"
        })
      }), createVNode("sub", {
        class: "image-source",
        children: createVNode("i", {})
      })]
    }), "\n", createVNode(_components.p, {
      children: "Now we defined, movement action and up, down, left, right as sub actions and, which inputs will trigger those actions. However, we did not tell our camera to use this input action map, and what to do when this input is given. Now we are going to define those."
    }), "\n", createVNode(_components.p, {
      children: ["To organize a bit, I will move eveything inside start to new function called ", createVNode(_components.code, {
        children: "SetCameraParameters()"
      })]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code vitesse-dark",
      style: {
        backgroundColor: "#121212",
        color: "#dbd7caee",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "cs",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "    void"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " Start"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "        SetCameraParameters"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "    void"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " SetCameraParameters"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // safeguard to check if everything nicely assigned"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        camTarget"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " Vector3"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "zero"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        camPosition"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: " Vector3"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#4C9A91"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#4C9A91"
            },
            children: " 6"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " -"
          }), createVNode(_components.span, {
            style: {
              color: "#4C9A91"
            },
            children: "10"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "        if"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "cam"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " =="
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " null"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " ||"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " camTarget"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " =="
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " null"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " ||"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " camPosition"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " =="
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " null"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "        {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "            Debug"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "LogError"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D77"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D"
            },
            children: "CameraRig setup incomplete! Assign all references."
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D77"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "            return"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "        }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        cam"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "transform"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "position"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " camPosition"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          }), createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: " // we set actual camera position based on our variable"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        camDistance"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " camTarget"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " -"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " camPosition"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        cam"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "transform"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "forward"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " camDistance"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "normalized"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    }"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["And lets introduce new set of variables for our ", createVNode(_components.code, {
        children: "InputAction"
      }), " object:"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code vitesse-dark",
      style: {
        backgroundColor: "#121212",
        color: "#dbd7caee",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "cs",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "// we introduce our script that we are going to use InputSystem package"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "using"
          }), createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: " UnityEngine"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: "InputSystem"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: ".."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "    // we define our variables one for action map and other for action"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    public"
          }), createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: " InputActionAsset"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " inputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          }), createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: " // -> we need to drag drop our InputSystem object to camera script"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    private"
          }), createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: " InputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " moveInputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "        void"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " Start"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "        SetCameraParameters"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // we add the function call in start that we set input actions"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "        SetInputActions"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "    // we add the function where we define input functions"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    public"
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: " void"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " SetInputActions"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "        var"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " cameraMap"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " inputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "FindActionMap"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D77"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D"
            },
            children: "CameraActionMap"
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D77"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: " true"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        moveInputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " cameraMap"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "FindAction"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D77"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D"
            },
            children: "Movement"
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D77"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: " true"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        moveInputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "Enable"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "At this stage, our camera script is recognized our input map. Please do not forget to drag and drop InputSystem object to your camera script."
    }), "\n", createVNode(_components.p, {
      children: ["Now lets test it if input is working. We are going to use ", createVNode(_components.code, {
        children: "Update()"
      }), " function of our Monobehaviour script, as it is called every frame."]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code vitesse-dark",
      style: {
        backgroundColor: "#121212",
        color: "#dbd7caee",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "cs",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: ".."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "    void"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " Update"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // if there is no movement action do nothing"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "        if"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "moveInputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " =="
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " null"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: " return"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // read the movement vector something like this (1f, 0f)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: "        Vector2"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " moveInput"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " moveInputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "ReadValue"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: "Vector2"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ">();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        Debug"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "Log"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "moveInput"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "What are we doing here? We are running the moveInputAction value on every frame and writing on the console. If we press play, then inspect the console window below we should be able to see (0,0) initial input. Now, if we press our recognized keys such as W, A, S or D we expect these vector values to change!"
    }), "\n", createVNode("p", {
      class: "img80",
      children: [createVNode("img", {
        src: "../..//linked_assets/20251113-blog-unity_pseudoisometric/20251120-movement_value_console.png"
      }), createVNode("br", {}), createVNode("sub", {
        class: "caption",
        children: createVNode("i", {
          children: "Testing input through console"
        })
      }), createVNode("sub", {
        class: "image-source",
        children: createVNode("i", {})
      })]
    }), "\n", createVNode(_components.p, {
      children: "We ensured that, our input map is recognized by script and in fact working. Now lastly we need to descibe what sort of behaviour we want on these inputs. Now its good time to talk about, what sort of movement we are interested in. For intance, on by up or forward what do we actually mean?"
    }), "\n", createVNode(_components.p, {
      children: "For instance do we want to move camera to go up or in unity terms (+y) axis? No.\r\nDo we want camera to go towards view direction? No."
    }), "\n", createVNode("p", {
      class: "img80",
      children: [createVNode("img", {
        src: "../..//linked_assets/20251113-blog-unity_pseudoisometric/20251120-movement_def.png"
      }), createVNode("br", {}), createVNode("sub", {
        class: "caption",
        children: createVNode("i", {
          children: "Which type of movement we are interested in"
        })
      }), createVNode("sub", {
        class: "image-source",
        children: createVNode("i", {})
      })]
    }), "\n", createVNode(_components.p, {
      children: "As also indicated in the visual we are interested with planar camera movement. For this, we are using 2d vector coming from our input. However in our 3d world we need to adjust axes accordingly. Please notice that on our simple move function we are not changing our y axis at all."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code vitesse-dark",
      style: {
        backgroundColor: "#121212",
        color: "#dbd7caee",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "cs",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: ".."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "    void"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " Update"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // if there is no movement action do nothing"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "        if"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "moveInputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " =="
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " null"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: " return"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // read the movement vector something like this (1f, 0f)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: "        Vector2"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " moveInput"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " moveInputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "ReadValue"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: "Vector2"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ">();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // safeguard"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "        if"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "moveInput"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "magnitude"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " <"
          }), createVNode(_components.span, {
            style: {
              color: "#4C9A91"
            },
            children: " 0.02f"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: " return"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: "        Vector3"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " moveDir"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: " Vector3"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "moveInput"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "x"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#4C9A91"
            },
            children: " 0.0f"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " moveInput"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "y"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        camTarget"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " +="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " moveDir"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " Time"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "deltaTime"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        camPosition"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " +="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " moveDir"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " Time"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "deltaTime"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        cam"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "transform"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "position"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " camPosition"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        Debug"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "Log"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "moveInput"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "So we update our update function. First, we are adding a safeguard to prevent unnecesary calculations. By checking the size of input vector. Then we are transribing our 2d vector to 3d by passing y axis 0, to ensure planar movement. Then lastly, we updte our camera target and camera position variables."
    }), "\n", createVNode(_components.p, {
      children: "So we have basic movement. However this movement is a bit slow or might be fast for your taste. In order to control and modify in the future we are introducing new variable in our code, as simple multiplier for movement speed."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code vitesse-dark",
      style: {
        backgroundColor: "#121212",
        color: "#dbd7caee",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "cs",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    ["
          }), createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: "Header"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D77"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D"
            },
            children: "Movement Settings"
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D77"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ")]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    private"
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: " float"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " baseSpeed"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#4C9A91"
            },
            children: " 5.0f"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "      void"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " Update"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "      {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "          // if there is no movement action do nothing"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "          if"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "moveInputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " =="
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " null"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: " return"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "          // read the movement vector something like this (1f, 0f)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: "          Vector2"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " moveInput"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " moveInputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "ReadValue"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: "Vector2"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ">();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "          // safeguard"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "          if"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "moveInput"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "magnitude"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " <"
          }), createVNode(_components.span, {
            style: {
              color: "#4C9A91"
            },
            children: " 0.02f"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: " return"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: "          Vector3"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " moveVector"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: " Vector3"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "moveInput"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "x"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#4C9A91"
            },
            children: " 0.0f"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " moveInput"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "y"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " baseSpeed"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " Time"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "deltaTime"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "          camTarget"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " +="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " moveVector"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "          camPosition"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " +="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " moveVector"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "          cam"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "transform"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "position"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " camPosition"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "      }"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "We also changed our movedir to movevector to prevent double calcultion below. Another thing to mention we are not normalizing our moveVector as it is already coming as normalized."
    }), "\n", createVNode("p", {
      class: "img80",
      children: [createVNode("img", {
        src: "../..//linked_assets/20251113-blog-unity_pseudoisometric/20251120-movement.gif"
      }), createVNode("br", {}), createVNode("sub", {
        class: "caption",
        children: createVNode("i", {
          children: "Planar movement"
        })
      }), createVNode("sub", {
        class: "image-source",
        children: createVNode("i", {})
      })]
    }), "\n", createVNode(_components.p, {
      children: "On the next step we will be adding rotation but before that lets do a bit organization."
    }), "\n", createVNode(_components.p, {
      children: ["Everything inside update is related to move, when we add rotation or room this could easily become a mess. We want to separate discrete step as much as possible. So lets group all of these inside new function called ", createVNode(_components.code, {
        children: "HandleMovement()"
      }), " and lastly we call this new function inside ", createVNode(_components.code, {
        children: "Update()"
      })]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code vitesse-dark",
      style: {
        backgroundColor: "#121212",
        color: "#dbd7caee",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "cs",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "    void"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " Update"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "        HandleMovement"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "    HandleMovement"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "        if"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "moveInputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " =="
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " null"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: " return"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // read the movement vector something like this (1f, 0f)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: "        Vector2"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " moveInput"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " moveInputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "ReadValue"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: "Vector2"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ">();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // safeguard"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "        if"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "moveInput"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "magnitude"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " <"
          }), createVNode(_components.span, {
            style: {
              color: "#4C9A91"
            },
            children: " 0.02f"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: " return"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: "        Vector3"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " moveVector"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " new"
          }), createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: " Vector3"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "moveInput"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "x"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#4C9A91"
            },
            children: " 0.0f"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " moveInput"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "y"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " baseSpeed"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " Time"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "deltaTime"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        camTarget"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " +="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " moveVector"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        camPosition"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " +="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " moveVector"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        cam"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "transform"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "position"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " camPosition"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "2-impliementing-quantized-step-rotation",
      children: "2. Impliementing quantized-step rotation"
    }), "\n", createVNode(_components.p, {
      children: ["Next, we can focus on rotation. Like previously, we also need to define an input map for rotation action, but this time, so we open once again our ", createVNode(_components.code, {
        children: "InputSystem"
      }), " and in the middle window we add new Action called ", createVNode(_components.code, {
        children: "Rotate"
      }), " but this time unlike the Movement, we do not need to define Vector2D because we only have a linear, or even boolean value. Rotation could either be positive or negative, clockwise (cw), or counterclockwise (ccw). So we define, so we click + button next to action and select ", createVNode(_components.code, {
        children: "add positive/negative binding"
      }), " This will add under action ", createVNode(_components.code, {
        children: "1D Axis"
      }), " For some reason I also need to remove no binding element above and add keys for it. I usually select ", createVNode(_components.code, {
        children: "Q"
      }), " and ", createVNode(_components.code, {
        children: "E"
      }), " for positive and negative rotation keys, but you are ofcourse free to select your own. So at last it looks something like this:"]
    }), "\n", createVNode("p", {
      class: "img80",
      children: [createVNode("img", {
        src: "../..//linked_assets/20251113-blog-unity_pseudoisometric/20251120-input_rotation.png"
      }), createVNode("br", {}), createVNode("sub", {
        class: "caption",
        children: createVNode("i", {
          children: "Input Map: Rotation"
        })
      }), createVNode("sub", {
        class: "image-source",
        children: createVNode("i", {})
      })]
    }), "\n", createVNode(_components.h3, {
      id: "21-finding-the-positive-rotation",
      children: "2.1. Finding the positive rotation"
    }), "\n", createVNode(_components.p, {
      children: "Maybe it is also good point to talk once again about standards, at rotation, we encounter once again the choose between standards. Which is positive direction according to you clockwise or counterclockwise?"
    }), "\n", createVNode("p", {
      class: "img40",
      children: [createVNode("img", {
        src: "../..//linked_assets/20251113-blog-unity_pseudoisometric/20251120-cw_ccw.png"
      }), createVNode("br", {}), createVNode("sub", {
        class: "caption",
        children: createVNode("i", {
          children: "Rotation naming and Unity standard"
        })
      }), createVNode("sub", {
        class: "image-source",
        children: createVNode("i", {})
      })]
    }), "\n", createVNode(_components.p, {
      children: "When we mention about the clocks you might have been thinking intiutively, clockwise (cw) rotation should be positive. However, in mathemtics, general convention uses the counterclockwise (ccw) rotation, as right and up axes considered positive on 2d space, positive rotation on a plane is counterclockwise. Again, there are no direct truth but preferences as standards. Unity also accepts this from the perspective of mathematics. So we will regard, ccw as positive axis. when you are looking front it might be trivial to think of positive rotation (in this context we are considering rotating our xy plane on z+ axis). however, when we start to talk about other axis or even,vectors this line of clear comprehension starts to blur very fast. For instance, what is the positive rotation for y axis? Or what is the positive rotation of Vector (1, 3, 2). Once again our precious hands come to our help to provide real time simulation on our case."
    }), "\n", createVNode(_components.p, {
      children: "I like to visualize it this way: while your left hand is on lhc formation, open your fingers in your right hand, and bend your fingers except your thumb slightly as if you are about to hold something. Now considering, your thumb is representing the negative of the axis that you want to check, your fingers are pointing the positive rotation axis. On this position if you touch your right hand thumb to the tip of any of axis represented by in your left hand end to end, and rotate your right hand around your pinned thumb, you will see the positive direction of given axis. Returning to our task, as it may seem trivial for the moment but it will be necessary for more complex calculations in the future: keys Q and E are corresponding to left and right, respecitively ccw and cw. So Q is positive while E represent negative in our case."
    }), "\n", createVNode("p", {
      class: "img40",
      children: [createVNode("img", {
        src: "../..//linked_assets/20251113-blog-unity_pseudoisometric/202511250-lhc_rotation.gif"
      }), createVNode("br", {}), createVNode("sub", {
        class: "caption",
        children: createVNode("i", {
          children: "Hand movement simulation on rotation"
        })
      }), createVNode("sub", {
        class: "image-source",
        children: createVNode("i", {})
      })]
    }), "\n", createVNode(_components.h3, {
      id: "21-implementing-pattern",
      children: "2.1. Implementing pattern"
    }), "\n", createVNode(_components.p, {
      children: ["Next, as you may have guessed we will add our ", createVNode(_components.code, {
        children: "rotateInputAction"
      }), " variable ", createVNode(_components.code, {
        children: "HandleRotation()"
      }), " and some intermediatery variables which we will define soon. But first, lets talk about what sort of rotation we want, as we previously discussed for, well there might be different design choices at this point but I will go with instead of continiously incrasing, a step rotation on predefined angle such as 30 degree. Okay, lets dive little bit more,lets ask some questions, when we rotate 30 degree:"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Where is the pivot (origin) of rotation? ", createVNode(_components.code, {
          children: "camTarget"
        })]
      }), "\n", createVNode(_components.li, {
        children: "Does the distance or angle between our camera and target is changing? No."
      }), "\n", createVNode(_components.li, {
        children: "Does the camera target position is changing? No."
      }), "\n", createVNode(_components.li, {
        children: "Does the camera point is changing? Yes."
      }), "\n", createVNode(_components.li, {
        children: "Does the plane of movement is changing? No."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Upon those questions, maybe we can clear some fog to visualize better this rotation in or minds. We will rotate around cameraTarget, neither distance nor angle between camera and target will change. But the position of camera."
    }), "\n", createVNode(_components.p, {
      children: "So we will rotate our cameraDirection vector 30 degree from starting point. and at the end, we will have our new camera position. Then we are going to use this position to look at camTarget. Lets implement this idea."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code vitesse-dark",
      style: {
        backgroundColor: "#121212",
        color: "#dbd7caee",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "cs",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    ["
          }), createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: "Header"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D77"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D"
            },
            children: "Rotation Settings"
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D77"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ")]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    public"
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: " float"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " rotateStepDeg"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#4C9A91"
            },
            children: " 30.0f"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    private"
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: " float"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " currentUpRotationInDeg"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#4C9A91"
            },
            children: " 0.0f"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    private"
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: " float"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " targetUpRotationInDeg"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "  ="
          }), createVNode(_components.span, {
            style: {
              color: "#4C9A91"
            },
            children: " 0.0f"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    private"
          }), createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: " InputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " rotateInputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "    void"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " Update"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "        HandleRotate"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "        HandleMovement"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    public"
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: " void"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " SetInputActions"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "        var"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " cameraMap"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " inputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "FindActionMap"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D77"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D"
            },
            children: "InputMapCam"
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D77"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: " true"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        moveInputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " cameraMap"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "FindAction"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D77"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D"
            },
            children: "Movement"
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D77"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: " true"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        moveInputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "Enable"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        rotateInputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " cameraMap"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "FindAction"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D77"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D"
            },
            children: "Rotate"
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D77"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: " true"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        rotateInputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "Enable"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "    void"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " HandleRotate"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "()"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " {}"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "On the preparation of our base, we define our rotation step degree, current and target rotation (it is also possible to keep it under one variable but we will use it afterwards). And our rotate input action, we new function we we will define what will happen on input is given, and lastly we introduce our script to recognize our input actions."
    }), "\n", createVNode("p", {
      class: "img80",
      children: [createVNode("img", {
        src: "../..//linked_assets/20251113-blog-unity_pseudoisometric/20251120-testing_rotation_input.gif"
      }), createVNode("br", {}), createVNode("sub", {
        class: "caption",
        children: createVNode("i", {
          children: "Testing rotation inputs"
        })
      }), createVNode("sub", {
        class: "image-source",
        children: createVNode("i", {})
      })]
    }), "\n", createVNode(_components.p, {
      children: "Lets continue with the logic."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code vitesse-dark",
      style: {
        backgroundColor: "#121212",
        color: "#dbd7caee",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "cs",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "    void"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " HandleRotate"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // safeguard"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "        if"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "rotateInputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " =="
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " null"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: " return"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // this step is to ensure our rotatation runs once per key press"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // and not while key hold"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "        if"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "rotateInputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "WasPressedThisFrame"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "())"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "        {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "            targetUpRotationInDeg"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "  +="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " rotationInDeg"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "            // we read the sign of 1D axis by action"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "            float"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " rotateAxisSign"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " -"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "rotateInputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "ReadValue"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "float"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ">();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "            // we multiply sign and predefined rotation step degree"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "            // to have direction and magnitude of our rotation"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "            float"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " rotationInDeg"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " rotateStepDeg"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " rotateAxisSign"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "            // finally we set it to achieve our targeted rotation degree"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "            targetUpRotationInDeg"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "  ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " rotationInDeg"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "            Debug"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "Log"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D77"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D"
            },
            children: "Target rotation: "
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D77"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " targetUpRotationInDeg"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " );"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "        }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "When we press play and inspect the console while pressing games on game window, we should be able to see our registered target rotations. Now lets extend this to be able to see actual rotation."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code vitesse-dark",
      style: {
        backgroundColor: "#121212",
        color: "#dbd7caee",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "cs",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "    void"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " HandleRotate"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "        .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "        if"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "rotateInputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "WasPressedThisFrame"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "())"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "        {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "        .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "            Debug"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "Log"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D77"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D"
            },
            children: "Target rotation: "
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D77"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " targetUpRotationInDeg"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " );"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "            // quaternion is fancy 4d number system to avoid 3d math rotation problem called gimbal lock"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "            // try to ignore it this syntax but accept it as we want to rotate on y (up) axis with given degree"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: "            Quaternion"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " rotation"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " Quaternion"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "Euler"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#4C9A91"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " targetUpRotationInDeg"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ,"
          }), createVNode(_components.span, {
            style: {
              color: "#4C9A91"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "            // we calculate new vector for our camera Forward"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: "            Vector3"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " rotatedOffset"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " rotation"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " camDistance"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "            // by using our new camera forward we calculate our new camera position"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "            camPosition"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " camTarget"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " -"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " rotatedOffset"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "            cam"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "transform"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "position"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " camPosition"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "            // finally we look at our traget once again"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "            camDistance"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " camTarget"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " -"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " camPosition"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "            cam"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "transform"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "forward"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " camDistance"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "        }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        })]
      })
    }), "\n", createVNode("p", {
      class: "img80",
      children: [createVNode("img", {
        src: "../..//linked_assets/20251113-blog-unity_pseudoisometric/20251120-quantized_step_ritation.gif"
      }), createVNode("br", {}), createVNode("sub", {
        class: "caption",
        children: createVNode("i", {
          children: "Quantized rotation input"
        })
      }), createVNode("sub", {
        class: "image-source",
        children: createVNode("i", {})
      })]
    }), "\n", createVNode(_components.h3, {
      id: "23-fixing-the-movement-logic",
      children: "2.3. Fixing the movement logic"
    }), "\n", createVNode(_components.p, {
      children: "Well, we could have been done the correct from the beggining. However, I wanted this tutorial to simulate, a little bit more, real development process. If you used movement after rotation. You will probably encounter something unexpected on movement. While, it was working alone on initial movement, when we combine with rotate, the movement is not following the direction we are looking at. Often, while developing something we increase complexity gradually, and sometimes simple cases does not correspond to complex situations. Maybe you already named the problem but, the problem is we are always changing our positions in world space during movement. This is resulting unintuitive movement behaviour. How to fix this?"
    }), "\n", createVNode("p", {
      class: "img80",
      children: [createVNode("img", {
        src: "../..//linked_assets/20251113-blog-unity_pseudoisometric/20251122-rotation_movement_adjustment.gif"
      }), createVNode("br", {}), createVNode("sub", {
        class: "caption",
        children: createVNode("i", {
          children: "Problemamtic movement after rotation"
        })
      }), createVNode("sub", {
        class: "image-source",
        children: createVNode("i", {})
      })]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code vitesse-dark",
      style: {
        backgroundColor: "#121212",
        color: "#dbd7caee",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "cs",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    private"
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: " void"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " HandleMovement"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "        if"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "moveInputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " =="
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " null"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: " return"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // read the movement vector something like this (1f, 0f)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: "        Vector2"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " moveInput"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " moveInputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "ReadValue"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: "Vector2"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ">();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // safeguard"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "        if"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "moveInput"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "magnitude"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " <"
          }), createVNode(_components.span, {
            style: {
              color: "#4C9A91"
            },
            children: " 0.02f"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: " return"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // move relative to camera rotation on XZ plane"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: "        Vector3"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " forward"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " cam"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "transform"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "forward"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: "        Vector3"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " right"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " cam"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "transform"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "right"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // ignore vertical component (important for isometric)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        forward"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "y"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#4C9A91"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        right"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "y"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#4C9A91"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        forward"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "Normalize"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        right"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "Normalize"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // we set adjust world space to camera orientation"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: "        Vector3"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " moveVector"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "right"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " moveInput"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "x"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " forward"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " moveInput"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "y"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "                             *"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " baseSpeed"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " Time"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "deltaTime"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        camTarget"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " +="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " moveVector"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        camPosition"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " +="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " moveVector"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        cam"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "transform"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "position"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " camPosition"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    }"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["So we changed our ", createVNode(_components.code, {
        children: "handleMovement()"
      }), " function, instead of setting vector values to x, and z, on world space. We use it these values to scale camera orientation values."]
    }), "\n", createVNode(_components.p, {
      children: "The final result should something like this:"
    }), "\n", createVNode("p", {
      class: "img80",
      children: [createVNode("img", {
        src: "../..//linked_assets/20251113-blog-unity_pseudoisometric/20251122-rotation_movement_adjusted.gif"
      }), createVNode("br", {}), createVNode("sub", {
        class: "caption",
        children: createVNode("i", {
          children: "Problemamtic movement after rotation"
        })
      }), createVNode("sub", {
        class: "image-source",
        children: createVNode("i", {})
      })]
    }), "\n", createVNode(_components.h3, {
      id: "24-rotation-animation-through-linear-interpolation",
      children: "2.4. Rotation animation through linear interpolation"
    }), "\n", createVNode(_components.p, {
      children: "Now we have or rotation, but it looks kind a boring. Because there is no grace in the transition, as it jumps directly from one view to another (although it might be preferable depending on the art style sometimes). Would it not be nice, if we hade some kind of smooth transition between those two views? So lets do that."
    }), "\n", createVNode(_components.p, {
      children: ["Let me introduce you linear interpolation functions. I will approach this fancy but also scary looking concept from artists perpesctive rather than mathematician at this point for the sake of tutorial. In pragmatic terms, linear interpolation allows us to create smoooth transitions between two states. or numbers, it is often used in animation. So idea is instead of hard switching from one view to another, we define a time frame, initial and target value to switch within this time frame. There are many forms of interpolation once again depending on the artistic choices and charactistics. Sometimes it improves the movement and realism drastically. Sometimes, it wents beyond the tagret value and returns to characterize momentum and inertia. If you want to deep dive into topic, and see what could be achievable through this process I would recommend this ", createVNode(_components.a, {
        href: "",
        children: "video"
      }), ". But we will keep things simple and precise here. So one of the simple and widely used linear transformation function (shortened by lerp) is this."]
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
                children: [createVNode(_components.mtext, {
                  children: "lerp"
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
                  separator: "true",
                  children: ","
                }), createVNode(_components.mi, {
                  children: "t"
                }), createVNode(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), createVNode(_components.mo, {
                  children: "="
                }), createVNode(_components.mi, {
                  children: "a"
                }), createVNode(_components.mo, {
                  children: "+"
                }), createVNode(_components.mo, {
                  stretchy: "false",
                  children: "("
                }), createVNode(_components.mi, {
                  children: "b"
                }), createVNode(_components.mo, {
                  children: "−"
                }), createVNode(_components.mi, {
                  children: "a"
                }), createVNode(_components.mo, {
                  stretchy: "false",
                  children: ")"
                }), createVNode(_components.mtext, {
                  children: " "
                }), createVNode(_components.mi, {
                  children: "t"
                })]
              }), createVNode(_components.annotation, {
                encoding: "application/x-tex",
                children: "\\text{lerp}(a, b, t) = a + (b - a)\\, t"
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
              class: "mord text",
              children: createVNode(_components.span, {
                class: "mord",
                children: "lerp"
              })
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
              class: "mpunct",
              children: ","
            }), createVNode(_components.span, {
              class: "mspace",
              style: {
                marginRight: "0.1667em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              children: "t"
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
                height: "0.6667em",
                verticalAlign: "-0.0833em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              children: "a"
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
              children: "b"
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
                height: "1em",
                verticalAlign: "-0.25em"
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
                marginRight: "0.1667em"
              }
            }), createVNode(_components.span, {
              class: "mord mathnormal",
              children: "t"
            })]
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "While a and b representing, init and end value, t is the time frame this value is about too occurs. What this function is simply linearly mapping in between values between start and end points on defined time frame."
    }), "\n", createVNode(GraphCompare, {
      "client:load": true,
      "client:component-path": "@components/GraphCompare.svelte",
      "client:component-export": "default",
      "client:component-hydration": true
    }), "\n", createVNode(_components.p, {
      children: ["So by using build-in lerp function we will extend our rotation movement to add some smooth transition. In order to do this, we need to have two variables to describe start and end values. Which we will define as ", createVNode(_components.code, {
        children: "currentUpRotationInDeg"
      }), " and ", createVNode(_components.code, {
        children: "targetUpRotationInDeg "
      }), ", and ", createVNode(_components.code, {
        children: "rotationLerpSpeed"
      }), " parameter time frame and transition speed."]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code vitesse-dark",
      style: {
        backgroundColor: "#121212",
        color: "#dbd7caee",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "cs",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    public"
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: " float"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " rotationLerpSpeed"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#4C9A91"
            },
            children: " 10.0f"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "    void"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " HandleRotation"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // safeguard"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "        if"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "rotateInputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " =="
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " null"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: " return"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // this step is to ensure our rotatation runs once per key press"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // and not while key hold"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "        if"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "rotateInputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "WasPressedThisFrame"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "())"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "        {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "            // we read the sign of 1D axis by action"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "            float"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " rotateAxisSign"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " -"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "rotateInputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "ReadValue"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "float"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ">();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "            // we multiply sign and predefined rotation step degree"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "            // to have direction and magnitude of our rotation"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "            float"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " rotationInDeg"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " rotateStepDeg"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " rotateAxisSign"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "            // finally we set it to achieve our targeted rotation degree"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "            // !! We change to add up target rotation instead of direct assign"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "            targetUpRotationInDeg"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "  +="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " rotationInDeg"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "        }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // we introduce lerp based on upper definition"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        currentUpRotationInDeg"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " Mathf"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "LerpAngle"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "currentUpRotationInDeg"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " targetUpRotationInDeg"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ,"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " rotationLerpSpeed"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " Time"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "deltaTime"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "        if"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "currentUpRotationInDeg"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " =="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " targetUpRotationInDeg"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " )"
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: " return"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: "        Quaternion"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " rotation"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " Quaternion"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "Euler"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#4C9A91"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " currentUpRotationInDeg"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#4C9A91"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // we calculate new vector for our camera Forward"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: "        Vector3"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " rotatedOffset"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " rotation"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " camDistance"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        Debug"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "Log"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "camDistance"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // by using our new camera forward we calculate our new camera position"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        camPosition"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " camTarget"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " -"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " rotatedOffset"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        cam"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "transform"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "position"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " camPosition"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        cam"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "transform"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "LookAt"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "camTarget"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["With this final form of our ", createVNode(_components.code, {
        children: "HandleRotation()"
      }), " function we should be ready to test our rotation. Please notice that in this case, our camDistance is staying constant as we calculate the new position by only one changing parameter which is angle. Another thing is we are looking build in lookAt() function to point."]
    }), "\n", createVNode("p", {
      class: "img80",
      children: [createVNode("img", {
        src: "../..//linked_assets/20251113-blog-unity_pseudoisometric/20251120-lerp_rotation.gif"
      }), createVNode("br", {}), createVNode("sub", {
        class: "caption",
        children: createVNode("i", {
          children: "Lerp applied quantized step rotation"
        })
      }), createVNode("sub", {
        class: "image-source",
        children: createVNode("i", {})
      })]
    }), "\n", createVNode(_components.p, {
      children: ["I believe we can conclude the rotation at this point, by summarizing conceptualization of rotation, defining the axis and type of movement, implementation of rotation and lerp functions. If you want to extend your work with little bit personalization and better grasp over concept. You can check out some other lerp functions and implements some characteristics over your step rotation, or simply remove step change to continious rotation. I would highly recommend using ", createVNode(_components.a, {
        href: "https://graphtoy.com/",
        children: "graphtoy"
      }), " by awesome  Inigo Quilez If you want to write or test your own lerp functions."]
    }), "\n", createVNode(_components.h3, {
      id: "25-combining-movements-with-new-camera-update-function",
      children: "2.5. Combining movements with new camera update function"
    }), "\n", createVNode(_components.p, {
      children: ["As a conclution of our subchapter, its good idea to do some code reviewing. Notice that, we are updating camera position on both, rotation and movement, so we have some repetitive work that we can avoid, it is especially not optimal for a function that is called every frame. Considering that we might change the same values on the zoom, that might result in some inefficiency or even some bugs. So in such cases, one of the options are introducing a new function that is holding the common calculation by these functions. So we introduce, ", createVNode(_components.code, {
        children: "UpdateCamera()"
      }), " function to avoid repetitive code. But there are some tricky points. We want to move and update camera position in UpdateCamera() function. However, the update values are private to HandleMovement() such as movement vector. So lets make them class variables and  just update these variables in ", createVNode(_components.code, {
        children: "HandleMovement()"
      }), ". But before collecting common features in ", createVNode(_components.code, {
        children: "UpdateCamera()"
      }), " we need to expose some local variables in functions so we can use them in another class function."]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code vitesse-dark",
      style: {
        backgroundColor: "#121212",
        color: "#dbd7caee",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "cs",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    ["
          }), createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: "Header"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D77"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D"
            },
            children: "Movement Settings"
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D77"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ")]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "    // #1 we introduce our moveVector as class property"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    private"
          }), createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: " Vector3"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " planarMoveVector"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    ["
          }), createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: "Header"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D77"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D"
            },
            children: "Rotation Settings"
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D77"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ")]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "    // #2 we expose previously rotation quaternion as class property"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    private"
          }), createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: " Quaternion"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " currentRotationQuaternion"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: ". "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "    void"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " HandleMovement"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // #3 we remove moveVector and update planarMoveVector insdie handle movement."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // we set adjust world space to camera orientation"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        //Vector3 moveVector = (right * moveInput.x + forward * moveInput.y)"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "                             //* baseSpeed * Time.deltaTime;"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        planarMoveVector"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "right"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " moveInput"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "x"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " +"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " forward"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " moveInput"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "y"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "                     *"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " baseSpeed"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " Time"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "deltaTime"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // #4 delete the rest of the function as this part will be in UpdateCamera()"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "    void"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " HandleRotation"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "        .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "        if"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "Mathf"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "Abs"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "currentUpRotationInDeg"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " -"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " targetUpRotationInDeg"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " <"
          }), createVNode(_components.span, {
            style: {
              color: "#4C9A91"
            },
            children: " 0.05f"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "        {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "            currentUpRotationInDeg"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " targetUpRotationInDeg"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "            return"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "        }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // #5 delete the rest of the function as this part will be in UpdateCamera()"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Now we can create the actual ", createVNode(_components.code, {
        children: "UpdateCamera()"
      }), ". As pretty trivial task, as a step for optimization instead of calculating on every frame, we calculate only if there is given input: We check if there is rotation, we check if there is movement, both of these transformations apply on camera position so finally we check out camera position is different than our variable ", createVNode(_components.code, {
        children: "cameraPosition"
      }), " which indicates that a transform exists."]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code vitesse-dark",
      style: {
        backgroundColor: "#121212",
        color: "#dbd7caee",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "cs",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    private"
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: " void"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " UpdateCamera"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // change camera variables if there is rotation"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "        if"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "currentUpRotationInDeg"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " !="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " targetUpRotationInDeg"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "        {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "            currentRotationQuaternion"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " Quaternion"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "Euler"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#4C9A91"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " currentUpRotationInDeg"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#4C9A91"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: "            Vector3"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " rotatedOffset"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " currentRotationQuaternion"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " baseCamDistance"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "            camPosition"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " camTarget"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " -"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " rotatedOffset"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "            camDistance"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " camTarget"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " -"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " camPosition"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "        }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // change camera variable if there is movement"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "        if"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "planarMoveVector"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "magnitude"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " >"
          }), createVNode(_components.span, {
            style: {
              color: "#4C9A91"
            },
            children: " 0.02f"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "        {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "            camTarget"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " +="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " planarMoveVector"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "            camPosition"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " +="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " planarMoveVector"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "            planarMoveVector"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " Vector3"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "zero"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "        }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // apply changes if there is change in camera position"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "        if"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "cam"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "transform"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "position"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " !="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " camPosition"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "        {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "            camDistance"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " camTarget"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " -"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " camPosition"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "            cam"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "transform"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "position"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " camPosition"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "            cam"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "transform"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "position"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " camPosition"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "            cam"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "transform"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "LookAt"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "camTarget"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "        }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    }"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "I believe we are good to go with our last and final transform function."
    }), "\n", createVNode(_components.h2, {
      id: "3-implementing-quantized-step-zoom",
      children: "3. Implementing quantized-step zoom"
    }), "\n", createVNode(_components.p, {
      children: "As a final step of transform functions, we will implement zooming option. In this section, we will neither learn or implement something new, but rather practice and repeat what we have already did so far. So at this point, I highly recommend try to implement zoom function by yourself, instead of following tutorial, to practice what you have learned so far. You can use this section as a tool of comparison or test what you have learned so far."
    }), "\n", createVNode(_components.p, {
      children: "A rough gide for self implementation to follow:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code vitesse-dark",
      style: {
        backgroundColor: "#121212",
        color: "#dbd7caee",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    1. Try describe precisely what sort of transformation you are going to apply on zoom?"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    2. Identify your variables that are going to be used by your function."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    3. Create input map and behaviour."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    4. Implement your function."
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "31-creating-template-for-zoom",
      children: "3.1. Creating template for zoom"
    }), "\n", createVNode(_components.p, {
      children: ["We will start with creating an action definition for our zoom. We open our ", createVNode(_components.code, {
        children: "InputSystem"
      }), " > create new Action called ", createVNode(_components.code, {
        children: "Zoom"
      }), " zoom is once again a one dimensional action as we can only zoom in or zoom out. So selected ", createVNode(_components.code, {
        children: "Add positive/negative binding"
      }), " and set my keys as ", createVNode(_components.code, {
        children: "R"
      }), " and ", createVNode(_components.code, {
        children: "F"
      }), ". There is no need to spend effort on which way is positive and negative like previous sections as in this case it is pretty clear. After saving the ", createVNode(_components.code, {
        children: "InputSystem"
      }), " we need to define our variables. So we introduce new action to our script as well enabling it."]
    }), "\n", createVNode("p", {
      class: "img80",
      children: [createVNode("img", {
        src: "../..//linked_assets/20251113-blog-unity_pseudoisometric/20251122-zoom_input.png"
      }), createVNode("br", {}), createVNode("sub", {
        class: "caption",
        children: createVNode("i", {
          children: "Creating zoom input actions"
        })
      }), createVNode("sub", {
        class: "image-source",
        children: createVNode("i", {})
      })]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code vitesse-dark",
      style: {
        backgroundColor: "#121212",
        color: "#dbd7caee",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "cs",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    private"
          }), createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: " InputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " zoomInputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    public"
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: " void"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " SetInputActions"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "        var"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " cameraMap"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " inputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "FindActionMap"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D77"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D"
            },
            children: "CameraActionMap"
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D77"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: " true"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        moveInputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " cameraMap"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "FindAction"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D77"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D"
            },
            children: "Movement"
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D77"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: " true"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        moveInputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "Enable"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        rotateInputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " cameraMap"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "FindAction"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D77"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D"
            },
            children: "Rotate"
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D77"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: " true"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        rotateInputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "Enable"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        zoomInputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " cameraMap"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "FindAction"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D77"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D"
            },
            children: "Zoom"
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D77"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: " true"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        zoomInputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "Enable"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Now we can think about which variables we are interested in. Assuming that we are not interested in microscobic and telescobic scales, we probably define limits for upper and lower limits for zoom distance. For zoom lerp, we need current and target zoom levels, as well as speed. So we define our zoom related variables as:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code vitesse-dark",
      style: {
        backgroundColor: "#121212",
        color: "#dbd7caee",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "cs",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    ["
          }), createVNode(_components.span, {
            style: {
              color: "#5DA994"
            },
            children: "Header"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D77"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D"
            },
            children: "Zoom Settings"
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D77"
            },
            children: "\""
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ")]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    private"
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: " float"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " minZoomMultiplier"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#4C9A91"
            },
            children: " .4f"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    private"
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: " float"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " maxZoomMultiplier"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#4C9A91"
            },
            children: " 2.0f"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    private"
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: " float"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " zoomStep"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#4C9A91"
            },
            children: " 0.2f"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    private"
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: " float"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " currentZoomScale"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#4C9A91"
            },
            children: " 1.0f"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    private"
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: " float"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " targetZoomScale"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#4C9A91"
            },
            children: " 1.0f"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    private"
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: " float"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " zoomLerpSpeed"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#4C9A91"
            },
            children: " 10.0f"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["And finally we are going to introduce ", createVNode(_components.code, {
        children: "HandleZoom()"
      }), " function where the zooming input is actaully calculated and implemented. Maybe one important factor in here in which order we need to run our handling functions? For testing purposes, it does not matter. Afterwards we can check the common parameters that are changed by these functions, and which parameters affecting which function, then we can sort it out. So we set it like this:"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code vitesse-dark",
      style: {
        backgroundColor: "#121212",
        color: "#dbd7caee",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "cs",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "    void"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " Update"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "        HandleZoom"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "        HandleRotation"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "        HandleMovement"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "        UpdateCamera"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "    void"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " HandleZoom"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "()"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " {"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " }"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["As we have blueprint of zoom to take and process input, now we can implement the zooming function or behaviour. Firts lets test if we are being able to receive our inputs. I will just look at my ", createVNode(_components.code, {
        children: "HandleRotation()"
      }), " function and try to simulate the behaviour for safeguards."]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code vitesse-dark",
      style: {
        backgroundColor: "#121212",
        color: "#dbd7caee",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "cs",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "    void"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " HandleZoom"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "()"
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: " "
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "        if"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "zoomInputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " =="
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " null"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: " return"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "        if"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "zoomInputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "WasPressedThisFrame"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "())"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "        {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "            float"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " zoomDelta"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " zoomInputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "ReadValue"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "float"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ">();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "            Debug"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "Log"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "zoomDelta"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "        }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    }"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["When we press play, we got debug messages on console confirming that we am receiving my inputs when we press assigned ", createVNode(_components.code, {
        children: "R"
      }), " and ", createVNode(_components.code, {
        children: "F"
      }), " keys."]
    }), "\n", createVNode("p", {
      class: "img80",
      children: [createVNode("img", {
        src: "../..//linked_assets/20251113-blog-unity_pseudoisometric/20251122-zoom_console.gif"
      }), createVNode("br", {}), createVNode("sub", {
        class: "caption",
        children: createVNode("i", {
          children: "Lerp applied quantized step rotation"
        })
      }), createVNode("sub", {
        class: "image-source",
        children: createVNode("i", {})
      })]
    }), "\n", createVNode(_components.h3, {
      id: "32-implementing-zoom-function",
      children: "3.2. Implementing zoom function"
    }), "\n", createVNode(_components.p, {
      children: "We are concluded that inputs are working. We can now define the behaviour. As we zoom in, we can either get close with camera, or tweak the camera parameters. I will go with simple first option. By zoom, I am defining a behaviour that camera moving on the axis of camDistance within defined tolerance space."
    }), "\n", createVNode("p", {
      class: "img80",
      children: [createVNode("img", {
        src: "../..//linked_assets/20251113-blog-unity_pseudoisometric/20251125-zoom_behaviour.png"
      }), createVNode("br", {}), createVNode("sub", {
        class: "caption",
        children: createVNode("i", {
          children: "Expected zoom behaviour"
        })
      }), createVNode("sub", {
        class: "image-source",
        children: createVNode("i", {})
      })]
    }), "\n", createVNode(_components.p, {
      children: ["And we can create fill out our ", createVNode(_components.code, {
        children: "HandleZoom()"
      })]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code vitesse-dark",
      style: {
        backgroundColor: "#121212",
        color: "#dbd7caee",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "cs",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "    void"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " HandleZoom"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // safeguard"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "        if"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "zoomInputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " =="
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " null"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: " return"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // only react once per key scroll/press"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "        if"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "zoomInputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "WasPressedThisFrame"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "())"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "        {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "            float"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " zoomDelta"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " zoomInputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "ReadValue"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "float"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ">();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "            targetZoomScale"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " -="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " zoomDelta"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " zoomStep"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "            // we are clamping the value based on maximum and minimum limits that we have defined"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "            targetZoomScale"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " Mathf"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "Clamp"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "targetZoomScale"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " minZoomMultiplier"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " maxZoomMultiplier"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "        }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // we will implement lerp as before, but lets start with step function due to its simplicity"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        currentZoomScale"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " targetZoomScale"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // we calculate new camera position"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        camPosition"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " camTarget"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " -"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " currentRotationQuaternion"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " baseCamDistance"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " currentZoomScale"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        camDistance"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " camTarget"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " -"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " camPosition"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // we set actual camera and look at function as usual"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        cam"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "transform"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "position"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " camPosition"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        cam"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "transform"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "LookAt"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "camTarget"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Result of our step-zoom function:"
    }), "\n", createVNode("p", {
      class: "img80",
      children: [createVNode("img", {
        src: "../..//linked_assets/20251113-blog-unity_pseudoisometric/20251123-zoom_step.gif"
      }), createVNode("br", {}), createVNode("sub", {
        class: "caption",
        children: createVNode("i", {
          children: "Step zoom function"
        })
      }), createVNode("sub", {
        class: "image-source",
        children: createVNode("i", {})
      })]
    }), "\n", createVNode(_components.p, {
      children: "Now lets implement the lerp on our zoom function, so we simply replace where we assign currentZoomScale with lerping and we also add checkpoint to avoid float problems."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code vitesse-dark",
      style: {
        backgroundColor: "#121212",
        color: "#dbd7caee",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "cs",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "    void"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " HandleZoom"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "            .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "            // we are clamping the value based on maximum and minimum limits that we have defined"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "            targetZoomScale"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " Mathf"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "Clamp"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "targetZoomScale"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " minZoomMultiplier"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " maxZoomMultiplier"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "        }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // smoothly interpolate actual zoom"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        currentZoomScale"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " Mathf"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "Lerp"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "currentZoomScale"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " targetZoomScale"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " zoomLerpSpeed"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " Time"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "deltaTime"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        //if no visible change, skip"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "        if"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "Mathf"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "Abs"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "currentZoomScale"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " -"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " targetZoomScale"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " <"
          }), createVNode(_components.span, {
            style: {
              color: "#4C9A91"
            },
            children: " 0.02f"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "        {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "            currentZoomScale"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " targetZoomScale"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "            return"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "        }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "        .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        })]
      })
    }), "\n", createVNode("p", {
      class: "img80",
      children: [createVNode("img", {
        src: "../..//linked_assets/20251113-blog-unity_pseudoisometric/20251123-zoom_lerp.gif"
      }), createVNode("br", {}), createVNode("sub", {
        class: "caption",
        children: createVNode("i", {
          children: "Zoom function with linear interpolation applied"
        })
      }), createVNode("sub", {
        class: "image-source",
        children: createVNode("i", {})
      })]
    }), "\n", createVNode(_components.h3, {
      id: "33-transcribing-updatecamera-function",
      children: "3.3. Transcribing UpdateCamera function"
    }), "\n", createVNode(_components.p, {
      children: "As we do in previous section, we want to ensure coherence between translations and avoid repetition so we move HandleZoom() logic partially to UpdateCamera(). We will determine the repetitive part, as well as what is unique about HandleZoom(). First we cut the repetitive part from HandleZoom()"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code vitesse-dark",
      style: {
        backgroundColor: "#121212",
        color: "#dbd7caee",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "cs",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "    void"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " HandleZoom"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // safeguard"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "        if"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "zoomInputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " =="
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " null"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: " return"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // only react once per key scroll/press"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "        if"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "zoomInputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "WasPressedThisFrame"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "())"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "        {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "            float"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " zoomDelta"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " zoomInputAction"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "ReadValue"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "<"
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "float"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ">();"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "            targetZoomScale"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " -="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " zoomDelta"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " zoomStep"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "            targetZoomScale"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " Mathf"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "Clamp"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "targetZoomScale"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " minZoomMultiplier"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " maxZoomMultiplier"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "        }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // smoothly interpolate actual zoom"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "        currentZoomScale"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " Mathf"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "Lerp"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "currentZoomScale"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " targetZoomScale"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " zoomLerpSpeed"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " Time"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "deltaTime"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        //if no visible change, skip"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "        if"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "Mathf"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "Abs"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "currentZoomScale"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " -"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " targetZoomScale"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " <"
          }), createVNode(_components.span, {
            style: {
              color: "#4C9A91"
            },
            children: " 0.02f"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "        {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "            currentZoomScale"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " targetZoomScale"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "            return"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "        }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "        .."
          }), createVNode(_components.span, {
            style: {
              color: "#DBD7CAEE"
            },
            children: "."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // we trim out the rest as calculations will be handled in UpdateCamera"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // only thing we set here is the currentZoomFactor."
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    }"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["About update, the transform position is handled at end, so we cam remove last two lines. However, the position part looks pretty similar to rotation. While we use baseCamDistance to calculate, we need both zoom scale and rotation degree as parameters. So I will add my test on simply first if block. So the final version of our ", createVNode(_components.code, {
        children: "UpdateCamera()"
      }), " look like this."]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code vitesse-dark",
      style: {
        backgroundColor: "#121212",
        color: "#dbd7caee",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "cs",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: "    private"
          }), createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: " void"
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: " UpdateCamera"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // change camera variables if there is rotation or zoom"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "        if"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "currentUpRotationInDeg"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " !="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " targetUpRotationInDeg"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " ||"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " currentZoomScale"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " !="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " targetZoomScale"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "        {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "            currentRotationQuaternion"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " Quaternion"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "Euler"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#4C9A91"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " currentUpRotationInDeg"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ","
          }), createVNode(_components.span, {
            style: {
              color: "#4C9A91"
            },
            children: " 0"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "            camPosition"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " camTarget"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " -"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " currentRotationQuaternion"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " baseCamDistance"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " *"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " currentZoomScale"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "        }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // change camera variable if there is movement"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "        if"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "planarMoveVector"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "magnitude"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " >"
          }), createVNode(_components.span, {
            style: {
              color: "#4C9A91"
            },
            children: " 0.02f"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "        {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "            camTarget"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " +="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " planarMoveVector"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "            camPosition"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " +="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " planarMoveVector"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "            planarMoveVector"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " Vector3"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "zero"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "        }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#758575DD"
            },
            children: "        // apply changes if there is change in camera position"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#4D9375"
            },
            children: "        if"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "cam"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "transform"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "position"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " !="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " camPosition"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "        {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "            camDistance"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " camTarget"
          }), createVNode(_components.span, {
            style: {
              color: "#CB7676"
            },
            children: " -"
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " camPosition"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "            cam"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "transform"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "position"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: " camPosition"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "            cam"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "transform"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "."
          }), createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "LookAt"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#BD976A"
            },
            children: "camTarget"
          }), createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: ");"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "        }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#666666"
            },
            children: "    }"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Though this step we finally conclude and implemented all of our translation functions for pseudo-isometric camera and in its ready to go state!."
    }), "\n", createVNode("p", {
      class: "img80",
      children: [createVNode("img", {
        src: "../..//linked_assets/20251113-blog-unity_pseudoisometric/20251123-pseudo_isometric.gif"
      }), createVNode("br", {}), createVNode("sub", {
        class: "caption",
        children: createVNode("i", {
          children: "Movement, rotation, zoom all together"
        })
      }), createVNode("sub", {
        class: "image-source",
        children: createVNode("i", {})
      })]
    }), "\n", createVNode(_components.p, {
      children: ["If you are lost or could not reach the same results: here the final code for your comparison ", createVNode(_components.a, {
        href: "https://kutaycoskuner.github.io/blog/code/PseudoIsometricCamera",
        children: "PseudoIsometricCamera.cs"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "bonus-step-test-scene",
      children: "Bonus step: Test scene"
    }), "\n", createVNode(_components.p, {
      children: ["I have cureated a small cc0 asset collection of cc0. To test out some of the graphics programming aspects. You you want to have the same scene as in the initial visual you can download or submodule this ", createVNode(_components.a, {
        href: "https://github.com/kutaycoskuner/yurt",
        children: "repo"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "Shortly, I added as a submodule. On the root of my project I open terminal:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.code, {
        children: "project_root"
      })
    }), "\n", createVNode(_components.pre, {
      class: "astro-code vitesse-dark",
      style: {
        backgroundColor: "#121212",
        color: "#dbd7caee",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "bash",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#80A665"
            },
            children: "git"
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D"
            },
            children: " submodule"
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D"
            },
            children: " add"
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D"
            },
            children: " https://github.com/kutaycoskuner/yurt.git"
          }), createVNode(_components.span, {
            style: {
              color: "#C98A7D"
            },
            children: " Assets/Assets/yurt"
          })]
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["Then I simply drag drop ", createVNode(_components.code, {
        children: "obj"
      }), " version of ", createVNode(_components.code, {
        children: "outliner-testscene"
      }), " to my scene. Next, I select my camera"]
    }), "\n", createVNode(_components.pre, {
      class: "astro-code vitesse-dark",
      style: {
        backgroundColor: "#121212",
        color: "#dbd7caee",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "plaintext",
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            children: "    On the inspector > camera > environment > background type: Solid Color (from skybox) "
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: ["Now we should be able to see only a solid color on our background. I have set it ", createVNode(_components.code, {
        children: "#181818"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "Following the tutorial and the development experience is not always the same, it is pretty normal to encounter bugs, and problems. Although that I attempted to provide more, real-experience format rather than polished end result, it still shows some level of clarity. However, real problem solving coming from encountering problems, understanding and solving them. Expecting a linear progression is little bit overoptimistic, do not afraid of the process and solving problems!"
    }), "\n", createVNode(_components.p, {
      children: "As it is my second and most comprehensive attempt of tutorial, I would be happy to hear about your feedback about the pace, style and if would you be interested in such content. Thank you for your time!"
    }), "\n", createVNode(_components.h1, {
      id: "references",
      children: "References"
    }), "\n", createVNode(_components.p, {
      children: ["[1] de Vries, Joey. ", createVNode(_components.em, {
        children: "Camera"
      }), ". n.d. Accessed (25 Nov 2025) ", createVNode(_components.a, {
        href: "https://learnopengl.com/Getting-started/Camera",
        children: "https://learnopengl.com/Getting-started/Camera"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["[2] “Giving Personality to Procedural Animations using Math” [Video File]. ", createVNode(_components.em, {
        children: "Uploaded by t3ssel8r, Youtube"
      }), ". 2022. Accessed (23 Nov 2025) ", createVNode(_components.a, {
        href: "https://www.youtube.com/watch?v=KPoeNZZ6H4s",
        children: "https://www.youtube.com/watch?v=KPoeNZZ6H4s"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["[3] Quilez, Inigo. ", createVNode(_components.em, {
        children: "Graphtoy"
      }), ". 2010. Accessed (23 Nov 2025) ", createVNode(_components.a, {
        href: "https://graphtoy.com/",
        children: "https://graphtoy.com/"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["[4] Sanderson, Grant. “Linear transformations and matrices | Chapter 3, Essence of linear algebra” [Video File]. ", createVNode(_components.em, {
        children: "Uploaded by 3Blue1Brown, Youtube"
      }), ". 2016. Accessed (23 Nov 2025) ", createVNode(_components.a, {
        href: "https://www.youtube.com/watch?v=kYB8IZa5AuE",
        children: "https://www.youtube.com/watch?v=kYB8IZa5AuE"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["[5] Santell, Jordan. ", createVNode(_components.em, {
        children: "3D Projection"
      }), ". 2019. Accessed (25 Nov 2025) ", createVNode(_components.a, {
        href: "https://jsantell.com/3d-projection/",
        children: "https://jsantell.com/3d-projection/"
      })]
    }), "\n", createVNode(_components.p, {
      children: ["[6] “Transform.LookAt”. ", createVNode(_components.em, {
        children: "In Unity Documentation"
      }), ". 2025. Accessed (25 Nov 2025) ", createVNode(_components.a, {
        href: "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Transform.LookAt.html",
        children: "https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Transform.LookAt.html"
      })]
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

const url = "C:/Users/kutay/OneDrive/Documents/GitHub/content_hub/tutorials/20251114-unity_pseudoisometric.mdx";
const file = "C:/Users/kutay/OneDrive/Documents/GitHub/content_hub/tutorials/20251114-unity_pseudoisometric.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/kutay/OneDrive/Documents/GitHub/content_hub/tutorials/20251114-unity_pseudoisometric.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
