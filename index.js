precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

cantidad = 0

cantidadSpan = document.querySelector(".cantidad");
cantidadSpan.innerHTML = cantidad

total = 0

totalSpan = document.querySelector(".valor-total");
totalSpan.innerHTML = total

if (cantidad == 0) {
    document.querySelector("#menos").style.display = "none"
}

document.querySelector("#mas").onclick = function(){
    cantidad = cantidad + 1;
    cantidadSpan.innerHTML = cantidad;
    total = cantidad * precio;
    totalSpan.innerHTML = total;
    if (cantidad > 0) {
        document.querySelector("#menos").style.display = "inline-block"
    }
};

document.querySelector("#menos").onclick = function(){
    cantidad = cantidad - 1;
    cantidadSpan.innerHTML = cantidad;
    total = cantidad * precio;
    totalSpan.innerHTML = total;
    if (cantidad == 0) {
        document.querySelector("#menos").style.display = "none"
    }
};