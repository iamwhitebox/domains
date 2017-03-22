import React, { Component, PropTypes } from 'react';

export default class Display extends Component {
	render() {
		const actions = this.props.actions;
		const items = [
			this.props.title,
			this.props.message,
			this.props.price,
			actions
		];

		return (
			<div>
		        {items.map(function (item) {
		            return <div className='cell'>{item}</div>;
		        })}
	        </div>
		);
	}
}