
let dbConn = require('../../config/db.config');

let Country = function(country) {
    this.name = country.name;
    this.guild = country.guild;
};

Country.create = function (newCountry, result) {

    let insertQuery = "INSERT INTO countries (Name, Guild) VALUES (??, ??)";

    let query = mysql.format(insertQuery, [newCountry.name, newCountry.guild, ]);

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

Country.findById = function (id, result) {

    let selecyQuery = "Select * from guilds where id = ??";
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

Country.findAll = function (result) {

    let selecyQuery = "Select * from countries";
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