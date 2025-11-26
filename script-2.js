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

