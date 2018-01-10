
export default {
	namespace: `SamplePlugin`, // Defaults to name in package.json

	// Each one of these should return a callback so that they can only be loaded
	// if configured to load

	indexer: () => import('./indexer.js'),
	storage: {
		'application/json': () => import('./json-storage.js'),
		'image/*': () => import('./media-storage.js'),
	},
	fieldTypes: {
		'Text': () => import('./Text.js'),
		'RichText': () => import('./RichText.js'),
	},
	contentTypes: {
		'Page': () => import('./Page.js'),
		'Post': () => import('./Post.js'),
	}
};