let dbConn = require('../../config/db.config');

let Character  = function(character) {
    this.firstName = character.firstName;
    this.lastName = character.lastName;
    this.birthDay = character.birthDay;
    this.countryOfOrigin = character.countryOfOrigin;
    this.created_at = new Date();
    this.updated_at = new Date();
};

Character.create = function (newCharacter, result) {

    let insertQuery = "INSERT INTO characters (FirstName, LastName, BirthDay, CountryOfOrigin) VALUES (??, ??, ??, ??)";

    let query = mysql.format(insertQuery, [newCharacter.firstName, newCharacter.lastName, newCharacter.birthDay, newCharacter.countryOfOrigin]);

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

Character.findById = function (id, result) {

    let selecyQuery = "Select * from characters where id = ??";
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

Character.findAll = function(result) {

    let selecyQuery = "Select * from characters";
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