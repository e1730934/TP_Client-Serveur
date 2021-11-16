function infoUser() {
    let data = JSON.parse(localStorage.getItem("userData"))
    let userDataDIV = document.createElement('div')
    userDataDIV.setAttribute("id", "userDataDIV")
    userDataDIV.innerText += `  Nom : ${data.Nom}
                                Prénom : ${data.Prenom}
                                Courriel : ${data.Courriel}
                                Nom d'utilisateur : ${data.Username}
                                Âge : ${data.Age}
                                Occupation : ${data.Occupation}
                                Description : ${data.Description}`;
    document.body.append(userDataDIV)
}

function logout() {
    try {
        let div = document.getElementById("userDataDIV")
        div.remove()
        localStorage.clear();
        window.location.href = "http://localhost:2000/";
    } catch (e) {
        alert("L'utilisation du bouton 'Précédent' cause l'erreur suivante:  " + e.message)
        window.location.href = "http://localhost:2000/"
    }
}