const knex = require("knex")({
    client: "sqlite3",
    connection: {
        filename: "./database/database.sqlite"
    },

    useNullAsDefault: false
})

function getUserInfo(username){
    return knex
        .select('*')
        .from('utilisateur')
        .where('Username','=',username)
}

function ajouterCompte(user){
    return knex.insert(user)
        .into('utilisateur')
}

module.exports = {
    getUserInfo, ajouterCompte
}