import { c as create_ssr_component, a as each, e as escape, b as add_attribute } from "../../chunks/index-fa0ff56f.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".gallery.svelte-1f3f2o6.svelte-1f3f2o6{list-style-type:none;display:flex;flex-direction:row;flex-wrap:wrap}.gallery.svelte-1f3f2o6 li div.svelte-1f3f2o6{border:solid #222 2px;width:15rem;overflow:hidden;margin:0 2em;box-sizing:border-box}.gallery.svelte-1f3f2o6 li div img.svelte-1f3f2o6{object-fit:cover;height:100%}.gallery.svelte-1f3f2o6 li #image-frame.svelte-1f3f2o6{text-align:center;height:20rem}.gallery.svelte-1f3f2o6 li #image-data.svelte-1f3f2o6{height:7rem;font-size:medium;padding:1em;margin-bottom:1rem;overflow-y:scroll}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let images = [];
  images.push({
    src: "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg",
    title: "Title 1"
  }, {
    src: "https://images.pexels.com/photos/6447547/pexels-photo-6447547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Title 2"
  });
  $$result.css.add(css);
  return `<form>
	<label for="${"source-file"}">Upload a JSON source for the images:</label>
	<input accept="${"application/JSON"}" id="${"source-file"}" name="${"source-file"}" type="${"file"}">
	<button type="${"submit"}">Use this file</button></form>

<h1>Gallery:</h1>
<div><ul class="${"gallery svelte-1f3f2o6"}">${each(images, (item) => {
    return `<li><div id="${"image-frame"}" class="${"svelte-1f3f2o6"}"><img class="${"galleryItem svelte-1f3f2o6"}" alt="${"Preview of " + escape(item.title)}"${add_attribute("src", item.src, 0)}></div>
				<div id="${"image-data"}" class="${"svelte-1f3f2o6"}"><b>${escape(item.title)}</b>, ${escape(item.date)}<br>
					${escape(item.medium)}<br>
					<i>${escape(item.repository)}</i></div>
			</li>`;
  })}</ul>
</div>`;
});
export { Routes as default };
