import React, { Component, PropTypes } from 'react'
import Display from './Display.react.js';
import ItemEditForm from './ItemEditForm.react.js';
import styles from './item.css';
import config from '../../../config/'

export default class ItemDisplay extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    actions: React.PropTypes.arrayOf(React.PropTypes.object),
  };

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      email: this.props.email,
      message: this.props.message,
      price: this.props.price
    };
  }

  _onSubmit(newState) {
    this.setState(newState);
    this.props.onSubmit(newState);
  }

  render() {
    const actions = [];
    this.props.actions.forEach((item, index) => {
      actions.push(
        <a className="editBtn" onClick={item.callback} key={item.name}>{item.name}</a>
      )
    });
    const items = [
      this.state.title,
      this.state.message,
      this.state.price,
      actions
    ];

    var display = null;
    if (!this.props.editMode) {
      display = items.map((value, key) => {
        if (key === 1) {
          if (config.whitelist.includes(value)) {
            value = config.whitelistValue;
          } else {
            value = '';
          }
        }
        return <div key={key} className='cell'>{value}</div>;
      });
    } else {
      display = <ItemEditForm
                  title={this.props.title}
                  email={this.props.email}
                  price={this.props.price}
                  onClose={this.props.onClose}
                  onSubmit={this._onSubmit.bind(this)} />
    }

    return (
      <div className="row items">
        {display}
      </div>
    );
  }
}
