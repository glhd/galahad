
import React from 'react';

export default class Indexer extends React.Component {
	render() {
		return (
			<div>
				UI for displaying indexed content goes here.
			</div>
		);
	}

	async index(content) {
		await indexContent(content);
		return true;
	}
}