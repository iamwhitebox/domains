var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Item = new Schema({
  body: String,
  title: String,
  email: String,
  message: String,
  price: String,
  itemType: String, // type of item, 'alert' or 'message'
  active: { type: Boolean, default: true },
  dateCreated: { type: Date, default: Date.now },
}, { collection: 'domains' });

module.exports = mongoose.model('Item', Item);
