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
    getRandomNumber(1, 100);
    setTimeout(nascondiNumero, 3000);
    console.log("crash");
    setTimeout(spiegaGioco, 3000);
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
        let number = parseInt(Math.random() * numMax + numMin);
        // controlla se non è nell'array e lo pusha
        if (!numberRandom.includes(number)) {
            numberRandom.push(number);
            // ciclare i numeri e metterli dentro ai quadrati
            draw(number);
            setTimeout(userGame, 3000);
        }
    }
    console.log(numberRandom);

}


//funzione per disegnare i quadrati
function draw(numeroPrint) {
    let square;
    square = document.createElement('div');
    // assegna la classe
    square.setAttribute('class', 'square');
    //innerHTML del numero
    square.innerHTML = numeroPrint;

    // prendi l'elemento html e appendo i quadrati
    let el = document.getElementById('tableOfGame');
    console.log(el);
    el.appendChild(square);

}

//funzione settimeout
function nascondiNumero() {
    let nascondi = document.getElementById('tableOfGame');
    console.log(nascondi);
    nascondi.classList.add('d-none');
    nascondi.classList.remove('d-flex');
}
//funzione mostra caselle di input e pulsante submit
function userGame() {
    let input;
    input = document.createElement('input');
    input.setAttribute('class', 'input');

    let userInput = document.getElementById('userGame');
    userInput.classList.add('d-flex');
    userInput.appendChild(input);
}

//funzione spiega il gioco e stampa button per leggere i dati
function spiegaGioco() {
    document.getElementById('spiegaGioco').innerText = `Inserisci i numeri appena visti`;
    // btnUser.innerHTML = "Invia i numeri";
}
// crea un nuovo array e confrontalo con l'array del pc
// restituisci risultato
