const Item = require('../models/itemModel')

exports.create = function(req, res) {
    const newItem = new Item(req.body);

    if (req.body == NULL) {
        res.status(400).send({error: true, message: 'Body of request cannot be null'})
    } else {
        Item.create(newItem, function(err, item) {
            if (err) {
                res.send(err);
            } else {
                res.json({error:false, message: "Item created successfully"})
            }
        });
    }
};

exports.findById = function(req, res) {
    Item.findById(req.params.id, function(err, item){
        if (err) {
            res.send(err);
        } else {
            res.json(item)
        }
    });
}

exports.findAll= function(req, res) {
    Item.findAll(function(err, item){
        if (err) {
            res.send(err);
        } else {
            res.json(item)
        }
    });
};