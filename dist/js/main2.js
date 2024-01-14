// Ciclo While
// snack 2
// genera un numero casuale tra 1 e 100 e poi chiedi all'utente di indovinare il numero. Il programma poi deve far comparire un messaggio "il numero è troppo alto" oppure "il numero è troppo basso" nel momento in cui il numero detto dall'utente non è perfettamente uguale al numero estratto in modo casuale

const user_guessHTML = document.getElementById("user_guess")
const button = document.querySelector("button")
const clueHTML = document.getElementById("clue")
const randomNumberHTML = document.getElementById
    ("random_number")
const numberContainer = document.getElementById
    ("number_container")
let randomNumber = randomInt(10, 99)
numberContainer.style.width = "200px"
randomNumberHTML.innerText = randomNumber
let win = false
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



if (randomNumber % 2 == 0) {
    clueHTML.innerText = "Il numero è pari"
} else {
    clueHTML.innerText = "Il numero è dispari"
}

button.addEventListener("click", () => {
    let guess = Number(user_guessHTML.value)
    if (guess == randomNumber) {
        clueHTML.innerText = "Congratulazioni, hai vinto!"
        randomNumberHTML.style.filter = ""
        win = true
    } else if (guess > randomNumber && (guess - randomNumber) > 15) {
        clueHTML.innerText = "Il numero che hai scelto è molto piu' alto di quello nascosto"
    } else if (guess > randomNumber && (guess - randomNumber) < 15) {
        clueHTML.innerText = "Il numero che hai scelto è piu' alto di quello nascosto, ma non di molto"
    } else if (guess < randomNumber && (guess - randomNumber) < 15) {
        clueHTML.innerText = "Il numero che hai scelto è piu' basso di quello nascosto, ma non di molto"
    } else if (guess < randomNumber && (guess - randomNumber) > 15) {
        clueHTML.innerText = "Il numero che hai scelto è molto piu' basso di quello nascosto"
    }
})

