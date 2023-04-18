// 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
// Nombre
// Apellido
// Nombre de usuario en Platzi
// Edad
// Correo electrónico
// Mayor de edad
// Dinero ahorrado
// Deudas
// 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

let nombre = "Brayan";
let apellido = "Moya";
let nombrePlatzi = "brayanmoyaf";
let edad = 27;
let correo = "brayanmoyafernandez@gmail.com";
let mayorDeEdad = true;
let dineroAhorrado = 1000000;
let deudas = 110000000;

console.log(nombre + apellido);

// Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
// const name = "Juan David";
// const lastname = "Castro Gallego";
// const completeName = name + lastname;
// const nickname = "juandc";

// console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

let imprimirNombre = (completeName, nickname) => {
  return completeName + " " + nickname;
};

let completeName = "Brayan Moya";
let nickname = "brayanmoya1995";

console.log(imprimirNombre(completeName, nickname));

// 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
// const tipoDeSuscripcion = "Basic";

// switch (tipoDeSuscripcion) {
//    case "Free":
//        console.log("Solo puedes tomar los cursos gratis");
//        break;
//    case "Basic":
//        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
//        break;
//    case "Expert":
//        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
//        break;
//    case "ExpertPlus":
//        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
//        break;
// }

const tipoDeSuscripcion = "a";

if (tipoDeSuscripcion == "Free") {
  console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == "Basic") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else {
  console.log(
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
  );
}

//For
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }

//Do While
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);


// Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

let myArray = ["Uno","Dos","Tres"];
function printFirstElementsOfArray(array){
    console.log(array[0]);
}

//printFirstElementsOfArray(myArray);

// Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus
//  elementos uno por uno (no se vale imprimir el array completo).

function printAllElementsOfArray(array){
    for (let i = 0; i < array.length; i++)
    {
        console.log(array[i]);
    }
}

printAllElementsOfArray(myArray);

// Crea una función que pueda recibir cualquier objeto como parámetro e imprima 
// todos sus elementos uno por uno (no se vale imprimir el objeto completo).

let person = {
    "Nombre":"Brayan",
    "Apellido":"Moya",
    "Edad":27
}
function printAllElementsOfObject(obj){
    for (const value in obj){
        console.log( value + ": " +obj[value]);
    }
}

printAllElementsOfObject(person);