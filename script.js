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
console.log(divOne.innerHTML);    //stampa esattamente il contenuto com'è il codice nell'html


//outerHTML
console.log(divOne.outerHTML);    //renderizza non solo il contenuto ma anche il div, cioè anche se stesso


//children
console.log(divOne.children);    //collection dei figli



//DIFFERENZA TRA innerText e textContent  -  VEDI esempio nel CSS: classe .invisible

//La differenza principale è che innerText restituisce il testo visibile e formattato dall'utente, ignorando il testo nascosto dal CSS, 
//mentre textContent restituisce il testo raw (grezzo) così come si trova nel markup, incluse le interruzioni di riga e il testo nascosto. 
//innerText considera gli stili e può essere più lento, specialmente in un ciclo, a causa del costo di calcolo del rendering, mentre textContent è più veloce poiché non deve calcolare lo stile e restituisce il testo non renderizzato.


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//SCRIVERE IL CONTENUTO

//appendChild - METODO più "corretto" in assoluto per aggiunger un elemento creato
const newP = document.createElement('p');   //si crea un elemento p
divOne.appendChild(newP);   

//createTextNode - per aggiungere SOLO TESTO con appendChild
const node = document.createTextNode('Quarto'); //si crea il testo da aggiungere
newP.appendChild(node);

//innerHTML
newP.innerHTML = 'Quarto paragrafo';
newP.innerHTML = '<strong>Quarto paragrafo</strong>';

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ESEMPIO

const student1 = {name: 'Alexander', surname: 'Macias', age: 26, gender: 'male'};
const student2 = {name: 'Evelyn', surname: 'Medina', age: undefined, gender: 'female'};

//facciamo una card con appendChild senza usare html
const emptyDiv = document.getElementById('empty-div');  //chiamo il div vuoto
const cardDiv = document.createElement('div');   //creo un elemento div che sarà la card
cardDiv.id = 'first-card';  //aggiuno un identificatore 
emptyDiv.appendChild(cardDiv);   //metto la card creata al div vuoto

const nameP = document.createElement('p');   //creo un elemento p
const nameNode = document.createTextNode('Nome: ' + student1.name); //creo un nodo di testo che posso aggiungere a un elemento html
nameP.appendChild(nameNode); //collego il nodo di testo all'elemento p
cardDiv.appendChild(nameP); //metto l'elemento p, che a sua volta ha già dentro il nodo di testo nameNode, dentro cardDiv

const surnameP = document.createElement('p');
const surnameNode = document.createTextNode('Cognome: ' + student1.surname);
surnameP.appendChild(surnameNode);
cardDiv.appendChild(surnameP);

//Modo LEGGERMENTE più corto di quelli di prima (nameP e surnameP) - il risultato è lo stesso
const ageP = document.createElement('p');
ageP.appendChild(document.createTextNode('Età: ' + student1.age));
cardDiv.appendChild(ageP)

const genderP = document.createElement('p');
genderP.appendChild(document.createTextNode('Genere: ' + student1.gender));
cardDiv.appendChild(genderP);


//innerHTML

//CONSIGLIO: INVECE DI SCRIVERE TUTTO IL CODICE, è MEGLIO SFRUTTARE L'AUTOCOMPLETAMENTO DELL'HTML PER, POI, POTER COPIARLO QUA
const htmlString = `<div class="card">    
    <p>Nome: ${student2.name}</p>
    <p>Cognome: ${student2.surname}</p>
    <p>Età: ${student2.age} </p>
    <p>Genere: ${student2.gender}</p>
</div>`;

//Si deve usare per forza con i backstick per mettere il codice!
//con ${} posso mettere le proprietà degli oggetti (Interpolazione di stringhe)

console.log(htmlString);  //mi stampa student2 nella console
console.log(emptyDiv.innerHTML);  //qui invece mi stampa student1 

//per aggiungere (renderizzi) student2
emptyDiv.innerHTML += htmlString;  //è uguale a "emptyDiv.innerHTML = emptyDiv.innerHTML + htmlString"


//AGGIUNGERE LE CLASSI

//className
const card = document.getElementById('first-card');
//card.className = 'card';
//card.className = 'card green-background';

//classList - un'alternativa più POTENTE (USEREMO QUESTO INVECE DI CLASSNAME)
card.classList.add('card');
card.classList.add('green-background');
card.classList.remove('card');  //per rimuovere una classe
card.classList.toggle('card');  //se una classe è gia presente la toglieo viceversa










