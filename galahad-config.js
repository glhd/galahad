
export default {
	plugins: [
		`plugin-1`,
		`plugin-2`,
		`plugin-3`,
	],
	include: [
		'Plugin1:contentType:Post', // Other content types from Plugin1 are implicitly excluded
	],
	exclude: [
		'Plugin2:contentType:Post', // Everything else is implicitly included
	],
};