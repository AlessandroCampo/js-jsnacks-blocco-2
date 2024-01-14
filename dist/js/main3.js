// Ciclo For
// snack 3
// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro

let animals = [
    'Lion', 'Elephant', 'Giraffe', 'Monkey', 'Tiger',
    'Kangaroo', 'Zebra', 'Penguin', 'Koala', 'Gorilla',
    'Cheetah', 'Hippopotamus', 'Panda', 'Crocodile', 'Jaguar',
    'Ostrich', 'Koala', 'Polar Bear', 'Pangolin', 'Armadillo',
    'Peacock', 'Gazelle', 'Raccoon', 'Sloth', 'Dolphin',
    'Lemur', 'Alpaca', 'Emu', 'Otter', 'Fennec Fox',
    'Quokka', 'Platypus', 'Meerkat', 'Walrus', 'Squirrel',
    'Hedgehog', 'Chameleon', 'Snow Leopard', 'Red Panda', 'Tapir',
    'Frog', 'Cobra', 'Macaw', 'Anteater', 'Capuchin Monkey',
    'Bison', 'Hummingbird', 'Chinchilla', 'Komodo Dragon'
];

let fruits = [
    'Apple', 'Banana', 'Orange', 'Grapes', 'Strawberry',
    'Mango', 'Pineapple', 'Watermelon', 'Kiwi', 'Peach',
    'Plum', 'Blueberry', 'Cherry', 'Raspberry', 'Pear',
    'Avocado', 'Coconut', 'Papaya', 'Lemon', 'Lime',
    'Cranberry', 'Fig', 'Guava', 'Apricot', 'Passion Fruit',
    'Cantaloupe', 'Nectarine', 'Pomegranate', 'Dragon Fruit', 'Persimmon',
    'Blackberry', 'Honeydew Melon', 'Lychee', 'Star Fruit', 'Tangerine',
    'Rambutan', 'Kumquat', 'Melon', 'Mango', 'Gooseberry',
    'Jackfruit', 'Currant', 'Peach', 'Cherimoya', 'Mandarin Orange',
    'Raspberry', 'Blackcurrant', 'Strawberry', 'Kiwi', 'Cactus Fruit'
];

const jobsArray = [
    "Software Developer",
    "Graphic Designer",
    "Marketing Manager",
    "Data Scientist",
    "Nurse Practitioner",
    "Chef",
    "Electrical Engineer",
    "Financial Analyst",
    "Human Resources Specialist",
    "Physical Therapist",
    "Social Media Manager",
    "Mechanical Engineer",
    "Elementary School Teacher",
    "Dental Hygienist",
    "Event Planner",
    "Civil Engineer",
    "Content Writer",
    "Pharmacist",
    "IT Support Specialist",
    "Medical Laboratory Technologist",
    "Architect",
    "Financial Advisor",
    "Fitness Trainer",
    "Public Relations Specialist",
    "Biomedical Engineer",
    "Interior Designer",
    "Librarian",
    "Police Officer",
    "Sales Representative",
    "UX/UI Designer",
    "Registered Nurse",
    "Accountant",
    "Journalist",
    "Electrician",
    "Software QA Tester",
    "Speech-Language Pathologist",
    "Web Developer",
    "HR Manager",
    "Carpenter",
    "Physician Assistant",
    "Digital Marketing Specialist",
    "Mechanic",
    "Network Administrator",
    "School Counselor",
    "Executive Chef",
    "Phlebotomist",
    "Veterinarian",
    "Radiologic Technologist",
    "Civil Engineer",
];

let compensationArray = jobsArray

let randomArrayFruit = []
let randomArrayAnimals = []
const randomLength1 = Math.floor(Math.random() * fruits.length)
const randomLength2 = Math.floor(Math.random() * animals.length)

for (i = 0; i < randomLength1; i++) {
    randomArrayFruit.push(fruits[i])
}

for (i = 0; i < randomLength2; i++) {
    randomArrayAnimals.push(animals[i])
}

while (randomArrayFruit.length < randomArrayAnimals.length) {
    let random_index = Math.floor(Math.random() * compensationArray.length)
    randomArrayFruit.push(compensationArray[random_index])
}

while (randomArrayFruit.length > randomArrayAnimals.length) {
    let random_index = Math.floor(Math.random() * compensationArray.length)
    randomArrayAnimals.push(compensationArray[random_index])
    console.log(compensationArray[random_index])
}


console.log(randomArrayFruit, randomArrayAnimals)
