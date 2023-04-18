const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafoClass = document.querySelector('.parrafoClass');
const parrafoID = document.querySelector('#parrafoID');
const txtCalculo1 = document.querySelector('#txtCalcular1');
const txtCalculo2 = document.querySelector('#txtCalcular2');
const resultado = document.querySelector('#resultado');

//console.log(input.value);
/*
console.log({
    h1,
    p,
    parrafoClass,
    parrafoID,
    input
});

h1.innerText = "Habia una vez";

console.log(h1.getAttribute('class'));
h1.setAttribute('class','subtitulo');
console.log(h1.getAttribute('class'));

//input.value = "11";

const inputDos = document.createElement('input');
inputDos.setAttribute("value","Ejemplo");
parrafoID.append(inputDos);*/

// btnCalcular.addEventListener('click', eventoBoton);

function eventoInput(){
    console.log('Cambio input 1');
}



const formulario = document.querySelector('#formulario');

const btnCalcular = document.querySelector('#btnCalcular');

btnCalcular.addEventListener('click', function(){eventoCalcularVerdura('Tomates')});


function eventoCalcularVerdura(verdura){
   
    suma = (Number(txtCalculo1.value) + Number(txtCalculo2.value))
    resultado.innerText = 'Resultado: '+ suma + verdura;
}

// function eventoBotonFormulario(event){
//     console.log(event);
//     event.preventDefault();
//     suma = (Number(txtCalculo1.value) + Number(txtCalculo2.value))
//     resultado.innerText = 'Resultado: '+ suma;
// }

