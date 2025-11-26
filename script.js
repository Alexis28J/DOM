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
cardDiv.id = 'first-card';  //ho messo first-card come id per poterlo chiamare dopo (vedi più in basso)
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
//card.className = 'card green-background'; //se uso className sovrascrivo le classi già presenti cioè perdo le altre classi che c'erano prima

//classList - un'alternativa più POTENTE (USEREMO QUESTO INVECE DI CLASSNAME)
card.classList.add('card');  //add e appendChild fanno la stessa cosa
card.classList.add('green-background');  //la differenza è che con classList.add non sovrascrivi le classi già presenti 
card.classList.remove('card');  //per rimuovere una classe
card.classList.toggle('card');  //se una classe è gia presente la toglieo viceversa

//Inolte, tra add e appendChild c'è la differenza che appendChild aggiunge un elemento figlio a un elemento padre, 
//mentre add aggiunge una classe a un elemento.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Esercizio in classe
const fruits = [
    {name: "banana", origin: "Ecuador", weight: 100},
    {name: "mela", origin: "Italia", weight: 200},
    {name: "mango", origin: "Venezuela", weight: 50},
    {name: "avocado", origin: "Perù", weight: 10},
    {name: "papaya", origin: "Guatemala", weight: 70},
]

//const container = document.getElementById('fruit-container');

//Card fatte col ciclo for of e l'html
// for (const fruit of fruits) {
    
//     const fruitHtml = `<div class="card">
//     <p>nome: ${fruit.name}</p>
//     <p>origin: ${fruit.origin}</p>
//     <p>peso: ${fruit.weight} gr</p>
// </div>`

// container.innerHTML += fruitHtml; //metto tutto dentro il container //è uguale a container.innerHTML = container.innerHTML + fruitHtml

// }


//TASK: farlo con appendChild (usa ciclo for)
//La differenza è che con appendChild creo gli elementi uno per uno, 
//mentre con innerHTML creo tutto in una volta sola

const container = document.getElementById('fruit-container');  //chiamo il div vuoto che c'è nell'html

for (const fruit of fruits) {  //faccio un ciclo for of
    
    const fruitCard = document.createElement('div');  //creo un elemento div (contenitore)
    fruitCard.classList.add('card');  //aggiungo la classe card al div creato
    fruitCard.classList.add('green-background');  //aggiungo anche la classe green-background al div creato
    container.appendChild(fruitCard); //metto il div creato (fruitCard) dentro il container (div vuoto nell'html)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //name (largo)
    // const nameDiv = document.createElement('div');
    // fruitCard.appendChild(nameDiv);

    // const nameKey = document.createElement('strong');
    // nameKey.innerText = 'Nome: ';
    // nameDiv.appendChild(nameKey);

    // const nameValue = document.createElement('span');
    // nameValue.innerText = fruit.name;
    // nameDiv.appendChild(nameValue);

    //name (corto)
    const nameDiv = document.createElement('div'); //creo un div per contenere il nome
    fruitCard.appendChild(nameDiv); //metto nameDiv dentro fruitCard

    const nameF = document.createElement('p'); //creo un elemento p che conterrà il nome e il testo "Nome: "
    const nameNode = document.createTextNode('Nome: ' + fruit.name); //creo un nodo di testo che posso aggiungere a un elemento html
    //purtroppo non posso fare l'interpolazione di stringhe con createTextNode
    //inoltre perdo il grassetto del "Nome: " se uso createTextNode
    //per mettere il grassetto dovrei creare un elemento strong e un elemento span come nel codice commentato sopra
    nameF.appendChild(nameNode); //collego il nodo di testo all'elemento p
    nameDiv.appendChild(nameF); //metto l'elemento p, che a sua volta ha già dentro il nodo di testo nameNode, dentro nameDiv
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
    //origin (largo)
    // const originDiv = document.createElement('div');
    // fruitCard.appendChild(originDiv);

    // const originKey = document.createElement('strong');
    // originKey.innerText = 'Origine: ';
    // originDiv.appendChild(originKey);

    // const originValue = document.createElement('span');
    // originValue.innerText = fruit.origin;
    // originDiv.appendChild(originValue);

    //origin (corto)
    const originDiv = document.createElement('div');
    fruitCard.appendChild(originDiv);

    const originF = document.createElement('p');
    const originNode = document.createTextNode('Origine: ' + fruit.origin);
    originF.appendChild(originNode);
    originDiv.appendChild(originF);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //weight (largo)
    // const weightDiv = document.createElement('div');
    // fruitCard.appendChild(weightDiv);

    // const weightKey = document.createElement('strong');
    // weightKey.innerText = 'Peso: ';
    // weightDiv.appendChild(weightKey);

    // const weightValue = document.createElement('span');
    // weightValue.innerText = fruit.weight;
    // weightDiv.appendChild(weightValue);

    //weight (corto)
    const weightDiv = document.createElement('div');
    fruitCard.appendChild(weightDiv);

    const weightF = document.createElement('p');
    const weightNode = document.createTextNode('Peso: ' + fruit.weight + 'gr');
    weightF.appendChild(weightNode);
    weightDiv.appendChild(weightF);
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////

//Esercizio per casa - fare un ciclo for of con innerHTML e appendChild:
const cosmetici = [
    {
        id: 1,
        nome: "Crema Idratante Viso",
        marca: "Nivea",
        categoria: "Skincare",
        prezzo: 12.99,
        ingredientiPrincipali: ["Aloe Vera", "Acido Ialuronico", "Vitamina E"],
        usoConsigliato: "Mattina e sera",
        recensioni: 4.5,
        inStock: true
    },
    {
        id: 2,
        nome: "Mascara Volume",
        marca: "Maybelline",
        categoria: "Makeup",
        prezzo: 9.99,
        ingredientiPrincipali: ["Cera d'Api", "Pigmenti Minerali"],
        usoConsigliato: "Ogni volta che si desidera",
        recensioni: 4.7,
        inStock: true
    },
    {
        id: 3,
        nome: "Shampoo Antiforfora",
        marca: "Head & Shoulders",
        categoria: "Haircare",
        prezzo: 6.49,
        ingredientiPrincipali: ["Piroctone Olamine", "Zinco Pyrithione"],
        usoConsigliato: "2-3 volte a settimana",
        recensioni: 4.3,
        inStock: true
    },
    {
        id: 4,
        nome: "Balsamo Labbra",
        marca: "Burt's Bees",
        categoria: "Skincare",
        prezzo: 4.99,
        ingredientiPrincipali: ["Cera d'Api", "Olio di Cocco"],
        usoConsigliato: "Quotidianamente",
        recensioni: 4.8,
        inStock: true
    },
    {
        id: 5,
        nome: "Fondotinta Liquido",
        marca: "L'Oréal Paris",
        categoria: "Makeup",
        prezzo: 14.99,
        ingredientiPrincipali: ["Olio di Jojoba", "SPF 15"],
        usoConsigliato: "Mattina",
        recensioni: 4.2,
        inStock: true
    },
    {
        id: 6,
        nome: "Siero Anti-Age",
        marca: "The Ordinary",
        categoria: "Skincare",
        prezzo: 19.99,
        ingredientiPrincipali: ["Retinolo", "Vitamina C"],
        usoConsigliato: "Sera",
        recensioni: 4.6,
        inStock: false
    },
    {
        id: 7,
        nome: "Ombretto Palette",
        marca: "NYX",
        categoria: "Makeup",
        prezzo: 16.99,
        ingredientiPrincipali: ["Pigmenti Minerali", "Olio di Ricino"],
        usoConsigliato: "Occasioni speciali",
        recensioni: 4.4,
        inStock: true
    },
    {
        id: 8,
        nome: "Detergente Viso",
        marca: "La Roche-Posay",
        categoria: "Skincare",
        prezzo: 13.99,
        ingredientiPrincipali: ["Acqua Termale", "Glicerina"],
        usoConsigliato: "Mattina e sera",
        recensioni: 4.7,
        inStock: true
    },
    {
        id: 9,
        nome: "Lacca per Capelli",
        marca: "TRESemmé",
        categoria: "Haircare",
        prezzo: 7.99,
        ingredientiPrincipali: ["Alcool Denat.", "Pantenolo"],
        usoConsigliato: "Dopo lo styling",
        recensioni: 4.0,
        inStock: true
    },
    {
        id: 10,
        nome: "Correttore Occhiaie",
        marca: "MAC",
        categoria: "Makeup",
        prezzo: 22.99,
        ingredientiPrincipali: ["Olio di Argan", "Caffeina"],
        usoConsigliato: "Mattina",
        recensioni: 4.9,
        inStock: true
    },
    {
        id: 11,
        nome: "Maschera Capelli",
        marca: "Garnier",
        categoria: "Haircare",
        prezzo: 5.99,
        ingredientiPrincipali: ["Olio di Avocado", "Cheratina"],
        usoConsigliato: "1 volta a settimana",
        recensioni: 4.5,
        inStock: true
    },
    {
        id: 12,
        nome: "Blush in Polvere",
        marca: "Milani",
        categoria: "Makeup",
        prezzo: 10.99,
        ingredientiPrincipali: ["Mica", "Olio di Jojoba"],
        usoConsigliato: "Quotidianamente",
        recensioni: 4.3,
        inStock: true
    },
    {
        id: 13,
        nome: "Tonico Viso",
        marca: "Clinique",
        categoria: "Skincare",
        prezzo: 18.99,
        ingredientiPrincipali: ["Acido Salicilico", "Camomilla"],
        usoConsigliato: "Dopo la detersione",
        recensioni: 4.6,
        inStock: true
    },
    {
        id: 14,
        nome: "Smalto Semipermanente",
        marca: "OPI",
        categoria: "Nailcare",
        prezzo: 11.99,
        ingredientiPrincipali: ["Resine Acriliche", "Pigmenti"],
        usoConsigliato: "Ogni 2 settimane",
        recensioni: 4.8,
        inStock: false
    },
    {
        id: 15,
        nome: "Profumo Donna",
        marca: "Chanel",
        categoria: "Fragrance",
        prezzo: 99.99,
        ingredientiPrincipali: ["Note di Vaniglia", "Fiori Bianchi"],
        usoConsigliato: "Occasioni speciali",
        recensioni: 4.9,
        inStock: true
    },
    {
        id: 16,
        nome: "Scrub Corpo",
        marca: "The Body Shop",
        categoria: "Bodycare",
        prezzo: 15.99,
        ingredientiPrincipali: ["Zucchero di Canna", "Olio di Mandorle"],
        usoConsigliato: "2 volte a settimana",
        recensioni: 4.4,
        inStock: true
    },
    {
        id: 17,
        nome: "Eyeliner Liquido",
        marca: "Kiko Milano",
        categoria: "Makeup",
        prezzo: 8.99,
        ingredientiPrincipali: ["Pigmenti Neri", "Glicerina"],
        usoConsigliato: "Quotidianamente",
        recensioni: 4.2,
        inStock: true
    },
    {
        id: 18,
        nome: "Crema Mani",
        marca: "Neutrogena",
        categoria: "Skincare",
        prezzo: 6.99,
        ingredientiPrincipali: ["Glicerina", "Olio di Karité"],
        usoConsigliato: "Quotidianamente",
        recensioni: 4.5,
        inStock: true
    },
    {
        id: 19,
        nome: "Spray Fissante Makeup",
        marca: "Urban Decay",
        categoria: "Makeup",
        prezzo: 24.99,
        ingredientiPrincipali: ["Alcool Denat.", "Glicerina"],
        usoConsigliato: "Dopo il trucco",
        recensioni: 4.7,
        inStock: true
    },
    {
        id: 20,
        nome: "Olio per Capelli",
        marca: "Moroccanoil",
        categoria: "Haircare",
        prezzo: 39.99,
        ingredientiPrincipali: ["Olio di Argan", "Vitamina E"],
        usoConsigliato: "1-2 volte a settimana",
        recensioni: 4.8,
        inStock: true
    }
];

// const cosmeticCont = document.getElementById('cosmetic-container');

// //con innerHTML
// for (const cosmetic of cosmetici) {

//     const cosmeticHtml = `<div class="card-2 pink-background">
//     <p>ID: ${cosmetic.id}</p>
//     <p>Nome: ${cosmetic.name}</p>
//     <p>Marca: ${cosmetic.marca}</p>
//     <p>Categoria: ${cosmetic.categoria}</p>
//     <p>Prezzo: ${cosmetic.prezzo}</p>
//     <p>Ingredienti principali: ${cosmetic.ingredientiPrincipali.join(', ')}</p>   //.join(', ') per aggiungere una virgola e lo spazio
//     <p>Uso consigliato: ${cosmetic.usoConsigliato}</p>
//     <p>Recensioni: ${cosmetic.recensioni}</p>
//     <p>In stock: ${cosmetic.inStock}</p>
// </div>`;
    
// cosmeticCont.innerHTML += cosmeticHtml; //metto tutto dentro cosmeticCont 
// //è uguale a cosmeticCont.innerHTML = cosmeticCont.innerHTML + cosmeticHtml
// }


//con appendChild
const cosmeticContainer = document.getElementById('cosmetic-container');

for (const cosmetic of cosmetici) {
    
    const cosmeticCard = document.createElement('div');
    cosmeticCard.classList.add('card-2');  //posso metterlo dopo se voglio
    cosmeticCard.classList.add('pink-background');
    cosmeticContainer.appendChild(cosmeticCard);

    //id
    const idDiv = document.createElement('div');
    cosmeticCard.appendChild(idDiv);
    
    const idCosm = document.createElement('p');
    const idCosmNode = document.createTextNode('ID: ' + cosmetic.id);
    idCosm.appendChild(idCosmNode);
    idDiv.appendChild(idCosm);

    //nome
    const nameDiv = document.createElement('div'); 
    cosmeticCard.appendChild(nameDiv);

    const nameCosm = document.createElement('p');
    const nameCosmNode = document.createTextNode('Nome: ' + cosmetic.nome.join);
    nameCosm.appendChild(nameCosmNode);
    nameDiv.appendChild(nameCosm);

    //marca
    const brandDiv = document.createElement('div'); 
    cosmeticCard.appendChild(brandDiv);

    const brandCosm = document.createElement('p');
    const brandCosmNode = document.createTextNode('Marca: ' + cosmetic.marca);
    brandCosm.appendChild(brandCosmNode);
    brandDiv.appendChild(brandCosm);

    //categoria
    const categoryDiv = document.createElement('div'); 
    cosmeticCard.appendChild(categoryDiv);

    const categoryCosm = document.createElement('p');
    const categoryCosmNode = document.createTextNode('Categoria: ' + cosmetic.categoria);
    categoryCosm.appendChild(categoryCosmNode);
    categoryDiv.appendChild(categoryCosm);

    //prezzo
    const priceDiv = document.createElement('div'); 
    cosmeticCard.appendChild(priceDiv);

    const priceCosm = document.createElement('p');
    const priceCosmNode = document.createTextNode('Prezzo: ' + cosmetic.prezzo + ' €');
    priceCosm.appendChild(priceCosmNode);
    priceDiv.appendChild(priceCosm);

    //ingredientiPrincipali
    const mainIngredientsDiv = document.createElement('div'); 
    cosmeticCard.appendChild(mainIngredientsDiv);

    const mainIngredientsCosm = document.createElement('p');
    const mainIngredientsCosmNode = document.createTextNode('Ingredienti principali: ' + cosmetic.ingredientiPrincipali.join(', '));  //.join(', ') per aggiungere una virgola e lo spazio
    mainIngredientsCosm.appendChild(mainIngredientsCosmNode);
    mainIngredientsDiv.appendChild(mainIngredientsCosm);

    //usoConsigliato
    const advisedUseDiv = document.createElement('div'); 
    cosmeticCard.appendChild(advisedUseDiv);

    const advisedUseCosm = document.createElement('p');
    const advisedUseCosmNode = document.createTextNode('Uso consigliato: ' + cosmetic.usoConsigliato);
    advisedUseCosm.appendChild(advisedUseCosmNode);
    advisedUseDiv.appendChild(advisedUseCosm);

    //recensioni
    const reviewDiv = document.createElement('div'); 
    cosmeticCard.appendChild(reviewDiv);

    const reviewCosm = document.createElement('p');
    const reviewCosmNode = document.createTextNode('Recensioni: ' + cosmetic.recensioni);
    reviewCosm.appendChild(reviewCosmNode);
    reviewDiv.appendChild(reviewCosm);

    //inStock
    const inStockDiv = document.createElement('div'); 
    cosmeticCard.appendChild(inStockDiv);

    const inStockCosm = document.createElement('p');
    const inStockCosmNode = document.createTextNode('In stock: ' + cosmetic.inStock);
    inStockCosm.appendChild(inStockCosmNode);
    inStockDiv.appendChild(inStockCosm);

}
