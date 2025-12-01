console.log('script2');

//EVENTI
//Reazione di un evento:
//Funzioni di callback (Vedi tag button in index.html)

function pressedButton(){
    alert("NON ESAGERARE!!!")
};

//addEvenListener
const myButtom = document.getElementById('press-counter');

let totalPress = 0;  //contatore

function addPress() {

    totalPress += 1;   //*1)

    console.log(totalPress);
    
    const displayer = document.getElementById('press-displayer');  //*2)

    displayer.innerHTML += "Hai schiacciato " + totalPress + " volte<br>";  //Il tag br perché il testo, che viene renderizzato nella pag., vada a capo
    
};

myButtom.addEventListener('click', addPress);  //*1)
//Metto il trigger dell'evento e la funzione ma SOLO devo mettere il NOME della funzione, NON le tonde

//*1) addEventListener farà sì che ogni volta che faccio click, aumenti di 1 il contatore (conta pressione-click).
//*2) Ora schiacciando il bottone, oltre a contare i click nella console, lo stamperà (renderizzerà) 
// nella pagina web con il testo "Hai schiacciato " + totalPress + " volte<br>"


//classlist toggle
const switchButton = document.getElementById('switch-btn');

function switchOn() {
    
     console.log('ACCESO');
     //switchButton.classList.add('on');   //collego la classe on, ma on add solo rimarrebbe in on  //la classe va tra virgolette
     switchButton.classList.toggle('on');   //collego la classe on con toggle perché permetta di cambiare di colore MA NON da OFF a ON

     const span = document.querySelector('#switch-btn span');

     if (span.innerText === 'OFF') {
         span.innerText = 'ON';
     }else{
        span.innerText = 'OFF';
     }
     
};

switchButton.addEventListener('click', switchOn);  
//se clicco il botone si stamperà nella console il testo 'ACCESO'


//mouse enter/leave
const badDiv = document.getElementById('bad-div');
//se abbiamo delle funzione molto semplici possiamo fare la lambda

badDiv.addEventListener('mouseenter', () => badDiv.innerHTML = 'Che fai??? Mi tocchi???'); //mouseenter scatta quando il mouse "entra" dentro il div
//con l'evento mouse enter, se passo il mouse per il quadro appare la scritta 'Che fai??? Mi tocchi???', MA NON torna indietro

badDiv.addEventListener('mouseleave', () => badDiv.innerHTML = 'FAI ATTENZIONE!!!');
//con mouseleave, la scritta può "tornare indietro" (cambiare), quando il mouse esce dall'elemento

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//style

const styleDiv = document.getElementById('style-div');

styleDiv.style.backgroundColor = 'crimson';  //usando la proprietà style posso stabilire regole CSS dal file JS
styleDiv.style.color = 'gold';
styleDiv.style.fontSize = 'xxx-large';


//set attribute

const marioImage = document.getElementById('mario-image');
marioImage.setAttribute('width', '300');
marioImage.setAttribute('pippo', 'pluto');    
//posso dargli alla mia immagine attributi che non ci sono nemmeno sull'HTML
//ovviamente questo 'attributo' (pippo = 'pluto') è assurdo e il browser non lo sa interpretare