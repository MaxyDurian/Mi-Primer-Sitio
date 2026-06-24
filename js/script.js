function saludo(){
    alert("Bienvenido a JavaScript");
}
function cambiartexto(){
    document.getElementById("mensaje").innerHTML ="Texto Modificado con JS";
}
function cambiarfondo(){
    document.body.style.backgroundColor="crimson";
}
function sumar(){
    let n1 = Number(document.getElementById("numero1").value);
    let n2 = Number(document.getElementById("numero2").value);
    document.getElementById("Resultado").innerHTML = n1 + n2
}  
let contador = 0;
const valor=document.getElementById("valor");
const txtMensaje=document.getElementById("mensaje");

const btnSumar=document.getElementById("sumar");
const btnRestar=document.getElementById("restar");
const btnReset=document.getElementById("reset");
function ActualizarContador(){
    valor.textContent = contador;

    if(contador > 0){
        valor.style.color="lime";
        txtMensaje.textContent="Numero Positivo";
    
    }else if(contador < 0){
        valor.style.color="red";
        txtMensaje.textContent="Numero Negativo";
    }else{
        valor.style.color="white";
        txtMensaje.textContent="Numero en Cero"
    }
}
btnSumar.addEventListener("click",function(){
    contador++;
    ActualizarContador()
})
btnRestar.addEventListener("click",function(){
    contador--;
    ActualizarContador()
})
btnReset.addEventListener("click",function(){
    contador=0;
    ActualizarContador()
})
ActualizarContador()