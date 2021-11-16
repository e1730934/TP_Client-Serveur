function connection(event) {
    event.preventDefault();
    let errorMsg = document.getElementById('erreurConnection')
    let formData = new URLSearchParams(new FormData(event.target));
    fetch("http://localhost:3000/connection", {method: "POST", body: formData})
        .then(res => {
            return res.json();
        })
        .then(resJson => {
            if (resJson.success) {
                // alert("Connection effectuer avec succès.")
                localStorage.setItem("userData", JSON.stringify(resJson.data))
                window.location.href = "http://localhost:2000/user"
            } else {
                errorMsg.style.opacity='1'
            }
        })
        .catch(err => {
            alert(`Erreur: ${err}`)
        })
}
