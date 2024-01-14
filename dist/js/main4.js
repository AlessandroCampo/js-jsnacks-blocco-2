// Ciclo For
// snack 4
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

const user_inputHTML = document.getElementById("user_input")
const button = document.querySelector("button")
const printed_numberHTML = document.getElementById("printed_number")
const pHTML = document.getElementById("flame")

button.addEventListener("click", () => {
    let user_value = Number(user_inputHTML.value)
    if (user_value % 2 == 0) {
        printed_numberHTML.innerText = user_value
        pHTML.innerText = "Congratulazioni, sono fiero di te"
    } else {
        printed_numberHTML.innerText = user_value + 1
        pHTML.innerText = "Avevi un solo compito... ho aggiustato il numero per ovviare alla tua ignoranza"
    }
})