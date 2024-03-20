const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    play();

})

// Visualizzare in pagina 5 numeri casuali ( tra 1 e 100) non duplicati.
// Da lì parte un timer di 30 secondi.
// Dopo i 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, 
//tramite il prompt() ( o meglio caselle di input).
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//funzione del gioco
function play() {
    getRandomNumber(1, 100)
}

//funzione per generare i numeri casuali
function getRandomNumber(numMin, numMax) {
    //console.log("crash");
    //array vuoto del numeri casuali
    const numberRandom = [];
    console.log(numberRandom);
    const numeroMaxGenerate = 5;
    //condizione mentre la linghezza dell'array è minore del numero di numeri da generare
    while (numberRandom.length < numeroMaxGenerate) {
        //genera un numero casuale
        let number = parseInt(Math.random() * numMax - numMin);
        // controlla se non è nell'array e lo pusha
        if (!numberRandom.includes(number)) {
            numberRandom.push(number);
        }
    }
    console.log(numberRandom);
    draw(numeroMaxGenerate, numberRandom[8]);


}
//funzione per disegnare i quadrati
function draw(maxSquare, numeroPrint) {
    let square;
    for (let i = 1; i < maxSquare; i++) {
        // crea l'elemento html 
        square = document.createElement('div');
        // assegna la classe
        square.setAttribute('class', 'square');
        //innerHTML del numero
        square.innerHTML = numeroPrint;
    }

    console.log('Il valore di square è', square);

    // prendi l'elemento html e appendo i quadrati
    let el = document.getElementById('tableOfGame');
    console.log(el);
    el.appendChild(square);

}
// ciclare i numeri e metterli dentro ai quadrati
//funzione settimeout
//funzione mostra caselle di input e pulsante submit
// crea un nuovo array e confrontalo con l'array del pc
// restituisci risultato
