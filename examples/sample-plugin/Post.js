import { constants } from `galahad`;

export default {
	title: `Post`,
	kind: constants.KIND_MULTI,
	descriptor: fields => fields.title,
	fieldTypes: {
		title: {
			fieldType: `sample-plugin:Text`,
			displayName: `Post Title`,
			config: {
				required: true,
				rules: `max:200`,
			}
		},
		body: {
			fieldType: `sample-plugin:RichText`,
			displayName: `Content`,
			config: {
				required: true,
				tags: ['a', 'ul', 'ol', 'div', 'p'],
			}
		}
	}
};