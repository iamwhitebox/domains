/**
 * Display an individual item.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { itemUpdate, itemDelete } from '../../redux/actions';
import ItemDisplay from './ItemDisplay.react.js';

export class Item extends Component {
  static propTypes = {
    itemData: React.PropTypes.shape({
      _id: React.PropTypes.string,
      title: React.PropTypes.string,
      email: React.PropTypes.string,
      message: React.PropTypes.string,
      price: React.PropTypes.string,
      active: React.PropTypes.bool,
      arrayKey: React.PropTypes.number
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      editMode: false
    };
    this._edit = this._edit.bind(this);
    this._delete = this._delete.bind(this);
  }

  _edit() {
    this.setState({ editMode:true });
  }

  _onClose(data) {
    this.setState({
      title: data.title,
      email: data.email,
      message: data.message,
      price: data.price,
      editMode: false
    });
  }

  _onSubmit(data) {
    this.props.itemUpdate(
      this.props.itemData._id,
      this.props.arrayKey,
      {
        title: data.title,
        email: data.email,
        message: data.message,
        price: data.price,
        active: true
      }
    );
    this._onClose(data);
  }

  _delete() {
    this.props.itemDelete(
      this.props.itemData._id,
      this.props.arrayKey
    );
  }

  render() {
    const actions = [
      {
        name: 'Edit',
        callback: this._edit
      }
    ];

    return (
      <ItemDisplay
        arrayKey={this.props.arrayKey}
        id={this.props.itemData._id}
        title={this.props.itemData.title}
        email={this.props.itemData.email}
        message={this.props.itemData.message}
        price={this.props.itemData.price}
        actions={actions}
        editMode={this.state.editMode}
        onClose={this._onClose.bind(this)}
        onSubmit={this._onSubmit.bind(this)}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

export default connect(mapStateToProps, {
  itemUpdate,
  itemDelete
})(Item);
