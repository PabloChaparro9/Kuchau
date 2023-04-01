const contenedorHTML = document.getElementById("contenedor")
fetch("../database.json")
    .then(response => response.json())
    .then(data => {
         for(const producto of data){
             contenedorHTML.innerHTML += `
                <div class="carta">
                    <img src=${producto.imgpages}>
                    <h2>${producto.name}</h2>
                    <p><strong>MOTOR: </strong>${producto.motor}</p>
                    <p><strong>POTENCIA: </strong>${producto.hp}CV</p>
                    <p><strong>TRANSMISION: </strong>${producto.transmision}</p>
                    <p><strong>PESO: </strong>${producto.peso}kg</p>
                    <h3><strong>VALOR: </strong>${producto.price}€</h3>
                    <a href=${producto.url} target="_blank">Saber Mas</a>
                </div>
                `
            }
    })
    .catch(e  => {
        console.log("no se pudo cargar")
    })

try {
    const formularioBusqueda = document.getElementById("formularioBusqueda")

    formularioBusqueda.addEventListener("submit", (event) => {
        event.preventDefault()
    })
} catch (e) {
    console.log("no se pudo cargar")
}

try {
    const formularioRegistro = document.getElementById("formularioRegistro")
    const formularioMarca = document.getElementById("marca")
    const formularioColores = document.getElementById("colores")

    formularioRegistro.addEventListener("submit", (event) => {
        event.preventDefault()
    })
    
    const fadeOutEffectSelect = (...elements) => {    
        for(let i = 0; i < formularioColores.length; i++){
            if(formularioColores[i] != undefined && formularioColores[i] != ""){
                for(let j = 0; j < elements.length; j++) {
                    if(formularioColores[i].value == elements[j]) {
                        formularioColores[i].style.display = "none";
                    }
                }
            } 
        }
        formularioColores.value = ""
    }
    
    const fadeInEffect = (...elements) => {
        for(let i = 0; i < formularioColores.length; i++) {
            if(formularioColores[i].value != undefined && formularioColores[i].value != "") {
                for(let j = 0; j < elements.length; j++) {
                    if(formularioColores[i].value == elements[j])
                    formularioColores[i].style.display = "block";
                }
            }
        }
    }
    

    formularioMarca.addEventListener("change", (event) =>{
        const elementSelected = formularioMarca.options[formularioMarca.selectedIndex].value;
        switch(elementSelected) {
            case "seleccione un modelo":
                fadeOutEffectSelect("blanco", "negro", "gris", "rojo")
                break
            case "BUICK REGAL GNX":
                fadeOutEffectSelect("","gris", "rojo")
                fadeInEffect("blanco", "negro")
                break
            case "CHEVROLET CORVETTE":
                fadeOutEffectSelect("", "negro")
                fadeInEffect("blanco", "gris", "rojo")
                break
            case "CHEVROLET IMPALA LOWRIDER":
                fadeOutEffectSelect("", "negro", "gris", "rojo")
                fadeInEffect("blanco")
                break
            default:
                alert("you must select an option")
                break
        }
    })    
} catch (e) {
        console.log("no se pudo cargar")
    }