const Character = require('../models/characterModel')

exports.create = function(req, res) {
    const newCharacter = new Character(req.body);

    if (req.body == NULL) {
        res.status(400).send({error: true, message: 'Body of request cannot be null'})
    } else {
        Character.create(newCharacter, function(err, character) {
            if (err) {
                res.send(err);
            } else {
                res.json({error:false, message: "Character created successfully"})
            }
        });
    }
};

exports.findById = function(req, res) {
    Character.findById(req.params.id, function(err, item){
        if (err) {
            res.send(err);
        } else {
            res.json(item)
        }
    });
}

exports.findAll= function(req, res) {
    Character.findAll(function(err, item){
        if (err) {
            res.send(err);
        } else {
            res.json(item)
        }
    });
};