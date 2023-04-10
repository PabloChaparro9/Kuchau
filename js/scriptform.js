
try {
    const formularioBusqueda = document.getElementById("formularioBusqueda")

    formularioBusqueda.addEventListener("submit", (event) => {
        event.preventDefault()
    })
} catch (e) {
    console.error(e)
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
    const fadeInEffectSelect = (...elements) => {
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
                fadeOutEffectSelect("blanco", "negro", "gris", "rojo","azul")
                break
            case "BUICK REGAL GNX":
                fadeOutEffectSelect("","gris", "rojo","azul")
                fadeInEffectSelect("blanco", "negro")
                break
            case "CHEVROLET CORVETTE":
                fadeOutEffectSelect("", "negro","azul")
                fadeInEffectSelect("blanco", "gris", "rojo")
                break
            case "CHEVROLET IMPALA LOWRIDER":
                fadeOutEffectSelect("","blanco", "negro", "gris", "rojo")
                fadeInEffectSelect("rojo","azul")
                break
            default:
                alert("you must select an option")
                break
        }
    })    
} catch (e) {
        console.error(e)
    }