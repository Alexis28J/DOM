//TROVARE UN ELEMENTO NEL DOM

//METODO 1: getElementById - prende l'id
const divOne = document.getElementById('div1');
console.log(divOne);


//METODO 2: getElementsByClassName - prende LE classi
const pCollection = document.getElementsByClassName('pippo');  //"elements" plurale - si avrà sempre una collection perché prende vari elementi anche se c'è solo uno disponibile
console.log(pCollection);

const divCollection = document.getElementsByClassName('pluto');
console.log(divCollection);


//METODO 3: getElementsByTagName - prende il tag
const tagCollection = document.getElementsByTagName('p');
console.log(tagCollection);


//METODO 4: querySelector
const firstP = document.querySelector('p');   //queryselector prende SOLO il PRIMO elemento
console.log(firstP);

const divOneA = document.querySelector('#div1');  //per prendere 
console.log(divOneA);



//METODO 5: querySelectorAll
const allPs = document.querySelectorAll('p');
console.log(allPs);

const allPippo = document.querySelectorAll('pippo');
console.log(allPippo);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//LEGGERE IL CONTENUTO 

//innerText
console.log(divOne.innerText);   //stampa il text come è renderizzato nella pagina


//textContent
console.log(divOne.textContent);  //stampa com'è nel html


//innerHTML
console.log(divOne.innerHTML);     //stampa esattamente il contenuto com'è il codice nell'html


//outerHTML
console.log(divOne.outerHTML);    //renderizza non solo il contenuto ma anche il div, cioè anche se stesso


//children
console.log(divOne.children);    //collection dei figli



//DIFFERENZA TRA innerText e textContent  -  VEDI nel CSS la classe .invisible

















