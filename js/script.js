const contenidoDestacadoHTML = document.getElementById("contenidoDestacado")

fetch("./database.json")
    .then(response => response.json())
    .then(data =>{
        for(const producto of data){
            contenidoDestacadoHTML.innerHTML += `
            <div class="card">
            <img src='${producto.img}'>
            <p>modelo de auto: ${producto.name.toLowerCase()}</p>
            <p>peso: ${producto.price}</p>
            </div>
            `
        }
    })
    
const contenidoProductosHTML = document.getElementById("contenidoProductos")

fetch("../database.json")
    .then(response => response.json())
    .then(data =>{
        for(const producto of data){
            contenidoProductosHTML.innerHTML += `
            <div class="card">
            <img src='${producto.imgpages}'>
            <p>modelo de auto: ${producto.name}</p>
            <p>peso: ${producto.peso}</p>
            </div>
            `
        }
    })