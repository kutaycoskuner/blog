import { f as fallback, c as escape_html, d as attr, e as ensure_array_like, g as bind_props } from './_@astro-renderers_BWAr0rPK.mjs';

function TestBarChart($$renderer, $$props) {
	$$renderer.component(($$renderer) => {

		let title = fallback($$props['title'], "Quarterly Sales");
		let labels = fallback($$props['labels'], () => ["Q1", "Q2", "Q3", "Q4"], true);
		let data = fallback($$props['data'], () => [1500, 2200, 1800, 2900], true);
		let color = fallback($$props['color'], "#4CAF50");
		const width = 400;
		const height = 200;
		const barWidth = 50;
		const spacing = 20;

		// Scale data to fit SVG height
		const maxData = Math.max(...data);

		const scale = height / maxData;

		$$renderer.push(`<div><h3>${escape_html(title)}</h3> <svg${attr('width', width)}${attr('height', height + 30)}><!--[-->`);

		const each_array = ensure_array_like(data);

		for (let i = 0, $$length = each_array.length; i < $$length; i++) {
			let d = each_array[i];

			$$renderer.push(`<rect${attr('x', i * (barWidth + spacing))}${attr('y', height - d * scale)}${attr('width', barWidth)}${attr('height', d * scale)}${attr('fill', color)}></rect><text${attr('x', i * (barWidth + spacing) + barWidth / 2)}${attr('y', height + 15)} text-anchor="middle" font-size="12" fill="#333">${escape_html(labels[i])}</text>`);
		}

		$$renderer.push(`<!--]--></svg></div>`);
		bind_props($$props, { title, labels, data, color });
	});
}

function TestLerpSlider($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let min = fallback($$props['min'], 0);
		let max = fallback($$props['max'], 3);
		let step = fallback($$props['step'], 0.01);
		let label = fallback($$props['label'], "Value");

		// Reactive variables
		let value = (min + max) / 2; // primary slider

		let lerpValue = value; // secondary slider

		$$renderer.push(`<div style="margin:10px 0;"><label>${escape_html(label)}: ${escape_html(value.toFixed(2))}</label> <input type="range"${attr('min', min)}${attr('max', max)}${attr('step', step)}${attr('value', value)}/> <label style="margin-left:20px;">Follow: ${escape_html(lerpValue.toFixed(2))}</label> <input type="range"${attr('min', min)}${attr('max', max)}${attr('step', step)}${attr('value', lerpValue)} disabled/></div>`);
		bind_props($$props, { min, max, step, label });
	});
}

export { TestBarChart as T, TestLerpSlider as a };
