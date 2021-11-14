function connection(event){
    event.preventDefault();
    let formData = new URLSearchParams(new FormData(event.target));
}

module.exports = {
    connection
}