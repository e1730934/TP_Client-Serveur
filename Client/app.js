const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());

app.use(express.static("public"));

app.get("/signup", (req, reponse) => {
    reponse.sendFile(__dirname + "/public/formulaire/signUP.html");
})

app.listen(PORT, () => {
    console.log(`Mon application frontale roule sur http://localhost:${PORT}`);
})