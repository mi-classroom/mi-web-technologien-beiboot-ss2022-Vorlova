import { c as create_ssr_component } from "../../chunks/index-23786d4b.js";
var legend_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".legend.svelte-x2uux1{position:absolute;bottom:0;left:0;z-index:80;background-color:rgba(250, 250, 250, 0.5);padding:1em 1em 4em 1em;color:#333333}")();
const css = {
  code: ".legend.svelte-x2uux1{position:absolute;bottom:0;left:0;z-index:80;background-color:rgba(250, 250, 250, 0.5);padding:1em 1em 4em 1em;color:#333333}",
  map: null
};
const Legend = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"legend svelte-x2uux1"}"><p>To turn camera, hold the <b>left mouse button</b> and drag across the screen.</p>
	<p>Hold the <b>right mouse button</b> to drag the position of the camera.</p>
	<p>Zoom with your mouse&#39;s or touchpad&#39;s <b>scrolling motion</b>.</p>
</div>`;
});
export { Legend as default };
