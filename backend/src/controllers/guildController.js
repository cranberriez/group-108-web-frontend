const Guild = require('../models/guildModel')

exports.create = function(req, res) {
    const newGuild = new Guild(req.body);

    if (req.body == NULL) {
        res.status(400).send({error: true, message: 'Body of request cannot be null'})
    } else {
        Guild.create(newGuild, function(err, guild) {
            if (err) {
                res.send(err);
            } else {
                res.json({error:false, message: "Guild created successfully"})
            }
        });
    }
};

exports.findById = function(req, res) {
    Guild.findById(req.params.id, function(err, item){
        if (err) {
            res.send(err);
        } else {
            res.json(item)
        }
    });
}

exports.findAll= function(req, res) {
    Guild.findAll(function(err, item){
        if (err) {
            res.send(err);
        } else {
            res.json(item)
        }
    });
};