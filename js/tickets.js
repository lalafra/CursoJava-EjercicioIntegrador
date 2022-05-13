var precio = 0;
const valorEntrada = 200;

window.addEventListener("DOMContentLoaded", function() {
    resumen = document.getElementById('resumen');
    resumen.addEventListener('click',mostrarResumen);
    borrar = document.getElementById('borrar');
    borrar.addEventListener('click',borrarForm);
}, false);





function mostrarResumen(){
    let cantidad=document.getElementById('cantidad').value;
    switch(document.getElementById('categoria').value){
        case 'Estudiante':
            precio = valorEntrada*(1-0.8).toFixed(2)*cantidad;
            break;
        case 'Trainee':
            precio = valorEntrada*(1-0.5).toFixed(2)*cantidad;
            break;
        case 'Junior':
            precio = valorEntrada*(1-0.15).toFixed(2)*cantidad;
            break;
    }

   document.getElementById('total').innerHTML = precio;
}

function borrarForm(){
    document.getElementById('formulario').reset();
}