
import { FieldType } from 'galahad';

export default class RichText extends FieldType {
	render() {
		return (
			<div>
				WYSIWYG Editor
			</div>
		);
	}

	validate(value, content) {
		return value.length > 100;
	}
}