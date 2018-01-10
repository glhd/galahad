
import { FieldType } from 'galahad';

export default class Text extends FieldType {
	render() {
		return (
			<div>
				Simple Text Editor
			</div>
		);
	}

	validate(value, content) {
		return value.length > 100;
	}
}