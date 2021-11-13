function creeCompte(event){
    event.preventDefault();
    let formData = new URLSearchParams(new FormData(event.target));

    fetch("http://localhost:2000/ajouterCompte",{method:"POST", body:formData})
        .then(res =>{
            return res.json();
        })
        .then(resJson =>{
            if(resJson.success){
                alert("Le compte a été ajouté.")
                window.location.href = "http://localhost:5000/";
            }
        })
        .catch(err =>{
            alert(`Erreur: ${err}`)
        })
}