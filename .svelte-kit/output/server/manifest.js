export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"start-810ccfd1.js","js":["start-810ccfd1.js","chunks/index-e55fc2fc.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
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
				id: "file-actions",
				pattern: /^\/file-actions\/?$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/file-actions.ts.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
