
import React from 'react';
import PropTypes from 'prop-types';

export default class FieldType extends React.Component {
	static propTypes = {
		onChange: PropTypes.func.isRequired,
	};

	isGalahadFieldType = true;
}