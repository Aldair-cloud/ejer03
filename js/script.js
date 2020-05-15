'use strict'
var n = prompt("Ingrese su nombre por favor ",);
var e = parseInt(prompt("Ingrese su edad por favor: ",));
var s = parseFloat(prompt("Ingrese su salario por favor: ",));

if (e <= 17) {
    alert("Usted no tiene la edad para trabajar "+n)
    } else if (e >= 18 && e <=50) {
        alert((s*100) /5);
    } else if (e >= 51 && e <= 60){
        alert((s*100) /10);
    }else if (e > 60){
        alert((s*100) /15);
    }
