// Ciclo While
// snack 1:
// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50

const user_input = document.getElementById("user_input")
const user_numbers = document.getElementById("user_numbers")
const partial_sumHTML = document.getElementById("partial")
const button = document.querySelector("button")

let userNumbers = []
let partial_sum = 0

button.addEventListener("click", () => {
    let inserted_number = Number(user_input.value)
    console.log("clicked")
    while (partial_sum < 50) {
        userNumbers.push(inserted_number)
        partial_sum += inserted_number
        user_numbers.innerText = userNumbers
        console.log(userNumbers)
        partial_sumHTML.innerText = partial_sum
        if (partial_sum > 50) {
            button.style.opacity = "0.5"
            button.style.cursor = "not-allowed"
        }
        break
    }


})


// })

// while (partial_sum < 50) {
//     button.addEventListener("click", () => {
//         console.log("clicked")
//     })
// }