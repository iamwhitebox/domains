import React, { Component, PropTypes } from 'react';
import styles from './itemCreate.css';

export default class ItemCreateDisplay extends Component {
  static propTypes = {
    callback: React.PropTypes.func,
  };

  render() {
    return (
    <form>
      <div>
        <label>Title</label>
        <input name="title" type="text" onChange={this.props.handleChange} />
      </div>
      <div>
        <label>Email</label>
        <input name="email" type="text" onChange={this.props.handleChange} />
      </div>
      <div>
        <label>Message</label>
        <input name="message" type="text" onChange={this.props.handleChange} />
      </div>
      <div>
        <label>Price</label>
        <input name="price" type="text" onChange={this.props.handleChange} />
      </div>
      <div>
        <button onClick={this.props.callback}>Create</button>
      </div>
    </form>
    );
  }
}
