const express = require("express");
const db = require('./database/requeteKnex')
const cors = require("cors");
const PORT = process.env.PORT || 2000;
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: false}))


app.post("/ajouterCompte", async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    let user = {
        "Nom": req.body.Nom,
        "Prenom": req.body.Prenom,
        "Courriel": req.body.Courriel,
        "Username": req.body.Username,
        "Password": req.body.Password,
        "Age": parseInt(req.body.Age),
        "Occupation": req.body.Occupation,
        "Description": req.body.Description
    }
    try {
        await db.ajouterCompte(user)
        return res.status(200).json({
            "success": true
        })
    } catch (err) {
        return res.status(500).json({
                "success": false,
                "error": err
            }
        )
    }
})


app.listen(PORT, () => {
    console.log(`Mon application roule sur le port ${PORT}`);
})