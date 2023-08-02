const h1 = document.querySelector("h1");
const input1 = document.getElementById("calculo1");
const input2 = document.getElementById("calculo2");
const btn = document.querySelector("#btncalcular");
const resultado1 = document.getElementById('result')
const form = document.getElementById("formulario")

btn.addEventListener('click', sumarInputValues)

function sumarInputValues (event) {
    console.log(event)
    event.preventDefault() 
    let resultado = (Number(input1.value) + Number(input2.value));
    resultado1.innerHTML = (resultado);
}




 

// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input
// });

// h1.innerHTML = ('hola buenas');
// h1.innerText = ('hola buenas');

// console.log(h1.getAttribute("class"));
// console.log(h1.setAttribute("class", 'epa 2'));

// h1.classList.add('epa2');
// h1.classList.remove('epa2');
// // h1.classList.toggle('epa 2');
// // h1.classList.contains('epa 2');

// // input.value = "456"

// const img = document.createElement('img');
// img.setAttribute('src', 'https://th.bing.com/th/id/R.e1001e86903d5fccba2a7e83a0547bd4?rik=R9kX35vI9jZpVA&riu=http%3a%2f%2fdefinicionde.hugex.net%2fwp-content%2fuploads%2f2015%2f07%2fe1001e86903d5fccba2a7e83a0547bd4.jpg&ehk=OweRpsrwB8UdJuzOCSe6VsS7uhLIyCUHifhCb7dhiSc%3d&risl=&pid=ImgRaw&r=0')
// console.log(img)

// pid.append(img) 


