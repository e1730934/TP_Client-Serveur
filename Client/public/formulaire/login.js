function connection(event) {
    event.preventDefault();
    let formData = new URLSearchParams(new FormData(event.target));
    fetch("http://localhost:3000/connection", {method: "POST", body: formData})
        .then(res => {
            return res.json();
        })
        .then(resJson => {
            if (resJson.success) {
                alert("Connection effectuer avec succès.")
                // window.location.href = "http://localhost:2000/";
            }
            else{
                alert(`Erreur: ${resJson.error}`)

            }
        })
        .catch(err => {
            alert(`Erreur: ${err}`)
        })

}