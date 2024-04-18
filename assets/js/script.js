
import {sumar,restar} from './operaciones.js';


let n1 = document.getElementById("numero1");
let n2 = document.getElementById("numero2");

let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");

let btnSumar = document.getElementById("btnSumar");
let btnRestar = document.getElementById("btnRestar");

let resultado = document.getElementById("resultado");

btnSumar.addEventListener("click", function(){

    error1.innerHTML = "";
    resultado.innerHTML = "";
    
    if(n1.value === ""){
        error1.innerHTML = "Debe ingresar el primer numero";
        error1.style.color = "red";
        return;
    }

    resultado.innerHTML = sumar(n1,n2);
    resultado.style.color = "red";


});

btnSumar.addEventListener("click", function(){

    error1.innerHTML = "";
    resultado.innerHTML = "";
    
    if(n2.value === ""){
        error1.innerHTML = "Debe ingresar el segudo numero";
        error1.style.color = "red";
        return;
    }

    resultado.innerHTML = sumar(n1,n2);
    resultado.style.color = "red";


});


btnRestar.addEventListener("click", function(){

    error2.innerHTML = "";
    resultado.innerHTML = "";
    
    if(n1.value === ""){
        error2.innerHTML = "Debe ingresar el primer numero";
        error2.style.color = "red";
        return;
    }

    resultado.innerHTML = restar(n1,n2);
    resultado.style.color = "red";


});

btnRestar.addEventListener("click", function(){

    error2.innerHTML = "";
    resultado.innerHTML = "";
    
    if(n2.value === ""){
        error2.innerHTML = "Debe ingresar el segudo numero";
        error2.style.color = "red";
        return;
    }

    resultado.innerHTML = restar(n1,n2);
    resultado.style.color = "red";


});




