import { constants } from "galahad";

export default {
	title: `Page`,
	kind: constants.KIND_MULTI,
	descriptor: fields => fields.title,
	fieldTypes: {
		slug: {
			fieldType: `sample-plugin:Text`,
			displayName: `Page URL`,
			config: {
				required: true,
				rules: `max:100`,
			}
		},
		title: {
			fieldType: `sample-plugin:Text`,
			displayName: `Page Title`,
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