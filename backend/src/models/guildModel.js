
let dbConn = require('../../config/db.config');

let Guild = function(guild) { 
    this.guildName = guild.guildName;
    this.owner = guild.owner;
    this.country = guild.country;
    this.members = guild.members 
};

Guild.create = function (newGuild, result) {

    let insertQuery = "INSERT INTO guilds (GuildName, Owner, Country, Members VALUES (??, ??, ??, ??)";
    let query = mysql.format(insertQuery, [newGuild.guildName, newGuild.owner, newGuild.country, newGuild.members]);

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

Guild.findById = function (id, result) {
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
}

Guild.findAll = function (result) {

    let selecyQuery = "Select * from guilds";
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