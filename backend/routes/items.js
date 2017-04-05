var express = require('express');
var Item = require('../models/item');
var router = express.Router();

/**
 * /items route
 */
router.route('/')

// GET /api/v1/items
.get(function(req, res) {

  Item.find()
  .sort({ date_latest: 'desc'})
  .exec(function(err, items) {
    if (err) {
      res.send(err);
    } else {
      res.json(items);
    }
  });
})

// POST /api/v1/items
.post(function(req, res) {
  const item = new Item();
  item.title = req.body.title;
  item.email = req.body.email;
  item.message = req.body.message;
  item.price = req.body.price;

  item.save(function(err) {
    if (err) {
      res.send(err);
    } else {
      console.log("Item created");
      res.json({
        message: 'New item created.',
        id: item['_id']
      });
    }
  });
});

/**
 * /api/v1/items/:item_id route
 */
router.route('/:item_id')

// GET /api/v1/items/:item_id
.get(function(req, res) {

  Item
  .findOne({'_id': req.params.item_id})
  .exec(function(err, item) {
    if (err) {
      res.send(err);
    } else {
      res.json({ item });
    }
  });
})

// PATCH /api/v1/items/:item_id
.patch(function(req, res) {
  Item
    .findOneAndUpdate({
      '_id': req.params.item_id
    }, req.body, {
      new: true
    }, function(err, item) {
      console.log(item);
      if (err) {
        res.status(400).send({error: "Error updating item"});
      } else {
        res.json({
          message: 'Updated item',
          id: item['_id']
        })
      }
    });
})

// DELETE /api/v1/items/:item_id
.delete(function(req, res) {
  Item.remove({
    _id: req.params.item_id
  }, function(err, item) {
    if (err) {
      res.status(400).send({error: "Error deleting item"});
    } else {
      res.json({
        message: 'Deleted item',
        _id: req.params.item_id,
      });
    };
  });
});

module.exports = router;
