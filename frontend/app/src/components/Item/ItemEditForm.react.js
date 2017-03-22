import React, { Component, PropTypes } from 'react';

export default class ItemEditForm extends Component {
	constructor(props) {
		super(props);
	    this.state = {
	      title: this.props.title,
	      email: this.props.email,
	      message: this.props.message,
	      price: this.props.price
	    };
	}

	_handleChange(event) {
		const newState = {};
		newState[event.target.name] = event.target.value;
		this.setState(newState);
	}

	_handleSubmit(event) {
		event.preventDefault();
		this.props.onSubmit({
			title: this.state.title,
			email: this.state.email,
			message: this.state.message,
			price: this.state.price
		});
	}

	render() {
		return (
			<div>
				<a className="closeBtn" href="#" onClick={this.props.onClose}>×</a>

				<form className="editForm">
					<div>
						<p>
							<label htmlFor="title"><strong>Title: </strong></label><input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this._handleChange.bind(this)} />
						</p>
						<p>
							<label htmlFor="email"><strong>Registran Email: </strong></label><input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this._handleChange.bind(this)} />
						</p>
						<p>
							<label htmlFor="price"><strong>Price: </strong></label><input type="text" name="price" placeholder="Price" value={this.state.price} onChange={this._handleChange.bind(this)} />
						</p>
						<button type="submit" onClick={this._handleSubmit.bind(this)}>Save Changes</button>
					</div>
				</form>
			</div>
		);
	}
}