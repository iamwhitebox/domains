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

	_handleSubmit(event) {
		event.preventDefault();
		this.props.onSubmit({
			title: this.state.title,
			email: this.state.email,
			message: this.state.message,
			price: this.state.price
		});
	}

	handleTitleChange(e) {
	   this.setState({title: e.target.value});
	}

	handleEmailChange(e) {
	   this.setState({email: e.target.value});
	}

	handleMessageChange(e) {
	   this.setState({message: e.target.value});
	}

	handlePriceChange(e) {
	   this.setState({price: e.target.value});
	}

	render() {
		return (
			<div>
				<a className="closeBtn" href="#" onClick={this.props.onClose}>×</a>

				<form className="editForm">
					<div>
						<p>
							<label htmlFor="title"><strong>Title: </strong></label><input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleTitleChange.bind(this)} />
						</p>
						<p>
							<label htmlFor="email"><strong>Registran Email: </strong></label><input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange.bind(this)}/>
						</p>
						<p>
							<label htmlFor="price"><strong>Price: </strong></label><input type="text" name="price" placeholder="price" value={this.state.price} onChange={this.handlePriceChange.bind(this)}/>
						</p>
						<button type="submit" onClick={this._handleSubmit.bind(this)}>Save Changes</button>
					</div>
				</form>
			</div>
		);
	}
}