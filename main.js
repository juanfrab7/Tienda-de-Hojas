let datosUsuario =[];
console.log("funciona");

let correo = prompt("Ingrese correo");
datosUsuario.mail = correo;
let edad = prompt("Ingrese edad");
datosUsuario.age = edad;
const passwordOK = 1234;
let password; // Se declara una sola vez


function comunicar() {
    alert(correo+" has ingresado mal la contraseña")
}


let bienvenido = "bienvenido " + correo

console.log(bienvenido)

if(edad >=18){
    console.log("El usuario es mayor de edad")
}else{console.log("El usuario es menor de edad")};



do {
    
    password = parseInt(prompt("Ingrese contraseña")); // Asigna el valor a la variable existente y lo convierte a número
    if(password !== passwordOK){
        comunicar()

    }
} while (password !== passwordOK);

datosUsuario.ultimologueo = Date();

console.log("Ingresando");
console.log(datosUsuario);