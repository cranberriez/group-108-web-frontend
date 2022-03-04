const Country = require('../models/country')

exports.create = function(req, res) {
    const newCountry = new Country(req.body);

    if (req.body == NULL) {
        res.status(400).send({error: true, message: 'Body of request cannot be null'})
    } else {
        Country.create(newCountry, function(err, country) {
            if (err) {
                res.send(err);
            } else {
                res.json({error:false, message: "Country created successfully"})
            }
        });
    }
};

exports.findById = function(req, res) {
    Country.findById(req.params.id, function(err, item){
        if (err) {
            res.send(err);
        } else {
            res.json(item)
        }
    });
}

exports.findAll= function(req, res) {
    Country.findAll(function(err, item){
        if (err) {
            res.send(err);
        } else {
            res.json(item)
        }
    });
};