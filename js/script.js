const contenidoDestacadoHTML = document.getElementById("contenidoDestacado")

fetch("./database.json")
    .then(response => response.json())
    .then(data =>{
        for(const producto of data){
            contenidoDestacadoHTML.innerHTML += `
            <div class="card">
            <img src='${producto.url}'>
            <p>modelo de auto: ${producto.name}</p>
            <p>año: ${producto.year}</p>
            </div>
            `
        }
    })