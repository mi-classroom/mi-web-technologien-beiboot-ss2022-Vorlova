export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"start-24a19b72.js","js":["start-24a19b72.js","chunks/index-8b93d9e8.js","chunks/index-aae7e910.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "stores",
				pattern: /^\/stores\/?$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/stores.ts.js')
			},
			{
				type: 'endpoint',
				id: "scene-creation",
				pattern: /^\/scene-creation\/?$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/scene-creation.ts.js')
			},
			{
				type: 'endpoint',
				id: "image-filters",
				pattern: /^\/image-filters\/?$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/image-filters.ts.js')
			},
			{
				type: 'endpoint',
				id: "file-actions",
				pattern: /^\/file-actions\/?$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/file-actions.ts.js')
			},
			{
				type: 'page',
				id: "legend",
				pattern: /^\/legend\/?$/,
				names: [],
				types: [],
				path: "/legend",
				shadow: null,
				a: [0,3],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
