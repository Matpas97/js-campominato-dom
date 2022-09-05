// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro se il numero progressivo è pari, di verde se dispari. Inoltre emette un messaggio in console con il numero della cella cliccata.

// L' utente clicca su un bottone  che genera una grigia quandrata
const userButton = document.getElementById('butt');

console.log(userButton);

userButton.addEventListener("click",function(){
    console.log("cliccato");
});
// Prendo l'elemento Grid
const gridElement = document.getElementById('grid');
gridElement.innerHTML = '';

// Creo ogni cella che ha un numero progressivo da 1 a 100

for(let i = 1 ; i <= 100 ; i ++) {

    boxElement = document.createElement('div');
    boxElement.className = 'box';
    boxElement.innerHTML = i ;
    console.log(boxElement);
    // Aggiungo l'elemento alla grid

    gridElement.append(boxElement);
    // L' utente puo cliccare su ogni cella 
    boxElement.addEventListener('click',function(){
        console.log('Hai cliccato',i);
console.log(this);
        // La cella cliccata si colora di blu se è pari, di rosso se è dispari
        const isEven = isNumberEven(i);
console.log(isEven);
        if(isEven){
            this.classList.add('even');
        }
        else{
            this.classList.add('odd');
        }
    });

    function isNumberEven(number) {
        return number % 2 === 0;
    }
}