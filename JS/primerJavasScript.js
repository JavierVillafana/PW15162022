
async function traerPersona(){
    const respuesta = await fetch("https://randomuser.me/api/");
    const datos = await respuesta.json();
    //console.log(datos);
    console.log(datos.results[0].name.last+" "+datos.results[0].name.first);
}

function quitarSITEC(){
    let pregunta = confirm("Segudor de quitar SITEC?");
    if(pregunta == true){
        alert("SITEC Borraddo...(");
        let chi = document.getElementById("Sitec");

        chi.innerHTML = "Chale";
    }

}

function funcionAlerta(){
    alert("Di click");
}

//alert("Alerta en archivo externo javascript")

