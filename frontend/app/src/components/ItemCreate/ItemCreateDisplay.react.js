import React, { Component, PropTypes } from 'react';
import styles from './itemCreate.css';

export default class ItemCreateDisplay extends Component {
  static propTypes = {
    callback: React.PropTypes.func,
  };

  render() {
    return (
      <form>
        <label>Title</label>
        <input name="title" type="text" onChange={this.props.handleChange} />
        <label>Email</label>
        <input name="email" type="text" onChange={this.props.handleChange} />
        <label>Message</label>
        <input name="message" type="text" onChange={this.props.handleChange} />
        <label>Price</label>
        <input name="price" type="text" onChange={this.props.handleChange} />
        <button onClick={this.props.callback}>Create</button>
      </form>
    );
  }
}
