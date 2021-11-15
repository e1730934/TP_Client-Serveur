const knex = require("knex")({
    client: "sqlite3",
    connection: {
        filename: "./database/database.sqlite"
    },

    useNullAsDefault: false
})

async function getUserInfo(loginInfo) {
    let infoUser = await knex('utilisateur')
        .first()
        .where('Username', '=', loginInfo.Username)
        .orWhere('Courriel', '=', loginInfo.Username)
    if ((infoUser !== undefined) && (infoUser.Password === loginInfo.Password)) {
        return infoUser
    } else {
        return null
    }
}

function ajouterCompte(user) {
    return knex.insert(user)
        .into('utilisateur')
}


module.exports = {
    getUserInfo, ajouterCompte
}