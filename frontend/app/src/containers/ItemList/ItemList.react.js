/**
 * Item list container component.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './ItemList.css';
import Item from '../../components/Item/Item.react.js';
import ItemCreate from '../../components/ItemCreate/ItemCreate.react.js';

class ItemList extends Component {
  render() {
    let items = [];
    let allItems = [];

    if (!this.props.items.isFetching) {
      items = this.props.items.items;

      items.forEach((item, index) => {
        allItems.push(
          <Item
            key={item._id}
            itemData={item}
            arrayKey={index}
          />
        );
      });
    }

    return (
      <div>
        <br />
        <div className="domain-table">
            <div className="row header">
              <div className="cell">
                Domain Name
              </div>
              <div className="cell">
                Uniregistry
              </div>
              <div className="cell">
                Price
              </div>
              <div className="cell">
                Actions
              </div>
          </div>
          {allItems}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

export default connect(mapStateToProps)(ItemList)
