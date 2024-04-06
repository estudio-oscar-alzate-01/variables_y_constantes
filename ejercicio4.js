let nombre = prompt("por favor ingrese su nombre");
let añodenacimiento = parseInt(prompt("por favor,ingrese su año de nacimiento"));
let añoactual = 2023;
let edad = añoactual - añodenacimiento;
let mensaje = "Hola " + nombre + ", tienes " + edad + " años.";
console.log(mensaje);