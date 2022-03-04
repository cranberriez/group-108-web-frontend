let dbConn = require('../../config/db.config');

let Item = function(item) {
    this.name = item.name;
    this.type = item.type;
    this.character = this.character;
}

Item.create = function(newItem, result) {

    let insertQuery = "INSERT INTO items (Name, Type, Character) VALUES (??, ??, ??)";
    let query = mysql.format(insertQuery, [newItem.name, newItem.type, newItem.character]);

    dbConn.query(query, (err, response) => {
        if (err) {
            console.log("error: ", err);
            result(err, null)
        } else {
            console.log(response.insertId);
            result(err, response.insertId)
        }
    });
};

Item.findById = function (id, result) {

    let selecyQuery = "Select * from items where id = ??";
    let query = mysql.format(selecyQuery, [id]);

    dbConn.query(query, (err, response) => {
        if (err) {
            console.log("error: ", err);
            result(err, null)
        } else {
            result(null, response)
        }
    });
};

Item.findAll = function (result) {

    let selecyQuery = "Select * from items";
    let query = mysql.format(selecyQuery);

    dbConn.query(query, (err, response) => {
        if (err) {
            console.log("error: ", err);
            result(err, null)
        } else {
            result(null, response)
        }
    });
};