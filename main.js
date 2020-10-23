// Il programma deve generare 16 numeri compresi tra 1 e 100: queste saranno le mine.
// Dopodiché, il programma deve chiedere all'utente un numero alla volta e verificare se il numero indicato dall'utente è una mina oppure no.
// Se l'utente becca una mina, il gioco finisce, mentre, se il numero non corrisponde ad una mina, il gioco prosegue e il programma chiede all'utente un nuovo numero.
// Alla fine della partita, il programma comunica all'utente il suo punteggio, cioè quanti numeri è riuscito ad inserire prima che il gioco finisse.


// BONUS (facoltativo): all'inizio del gioco, il programma chiede all'utente il livello di difficoltà:
// 0 = l'intervallo di numeri possibili è tra 1 e 100
// 1 = l'intervallo di numeri possibili è tra 1 e 80
// 2 = l'intervallo di numeri possibili è tra 1 e 50
// In ogni caso, le mine sono sempre 16.


var numero_mine = 16;
var limite_massimo = 100;
var massimo_tentativi = limite_massimo - numero_mine;

// genero le mine (16 numeri tutti diversi compresti tra 1 e 100)
var mine = generaMine(numero_mine, limite_massimo);
console.log(mine);

// inizia il gioco: chiedo un numero all'utente
var numeri_utente = [];
var giocate = 0;
var is_mina = false;

do {
    var numero_utente = parseInt(prompt('Inserisci un numero tra 1 e ' + limite_massimo));
    console.log(numero_utente);

    // verifico se l'input dell'utente è un numero valido
    if(numeroValido(numero_utente, limite_massimo) == true) {

        // verifico se il numero inserito dall'utente è diverso dai numeri inseriti in precedenza
        var gia_inserito = numeri_utente.includes(numero_utente);
        if(gia_inserito == false) {
            // se non è stato inserito, lo inserisco
            numeri_utente.push(numero_utente);
            giocate++;

            // verifico se il numero dell'utente è una mina
            is_mina = mine.includes(numero_utente);
            if(is_mina == false) {
                alert('il numero che hai appena inserito non è una mina');
            } else {
                alert('hai beccato una mina!!');
            }

        } else {
            alert('hai già giocato questo numero!');
        }
    } else {
        alert('non hai inserito un numero valido!');
    }

} while(is_mina == false && giocate < massimo_tentativi);

// quando devo chiedere un altro numero??
// il numero precedente non è una mina
// il numero di giocate è minore al numero di tentativi massimo possibile
// => continuo a giocare finché non ho beccato una mina e ho ancora altri tentativi possibili


// alla fine del gioco, comunico il punteggio all'utente
console.log('numero di giocate = ' + giocate);
console.log(numeri_utente);

// comunico l'esito del gioco all'utente
if(is_mina == false) {
    console.log('hai vinto!');
} else {
    console.log('hai perso');
}

// funzione per verificare che un numero sia valido
function numeroValido(numero, max) {
    // un numero è valido se:
    // - è un numero intero
    // - é maggiore o uguale a 1
    // - è minore o uguale a 100
    if(isNaN(numero) == false && numero >= 1 && numero <= max) {
        return true;
    } else {
        return false;
    }
}

// funzione per generare un array di "n_mine" numeri, compresi tra 1 e "max"
function generaMine(n_mine, max) {
    var array_mine = [];

    // finché non ho 16 mine tutte diverse
    while(array_mine.length < n_mine) {
        // genero un numero casuale tra 1 e 100
        var mina = getRndInteger(1, max);
        // verifico che sia un numero diverso da quelli estratti in precedenza
        var gia_estratto = array_mine.includes(mina);
        if(gia_estratto == false) {
            // se sì, salvo la mina
            array_mine.push(mina);
        }
        /*
        if(!array_mine.includes(mina)) {
            array_mine.push(mina);
        }
        */
    }
    return array_mine;
}

// funzione per generare un numero intero tra min e max
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
