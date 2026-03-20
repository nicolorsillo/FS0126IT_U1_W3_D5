/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
]

// JS Basics

console.log(`
  ---------------JS Basic---------------
  `)

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

console.log("-------Esercizio A--------")
let sum = 10 + 20

console.log(sum)

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log("-------Esercizio B--------")
let random = Math.floor(Math.random() * 21)
console.log(random)

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log("-------Esercizio C--------")

const me = { name: "Nicolò", surname: "Orsillo", age: 26 }
console.log(me)

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log("-------Esercizio D--------")
delete me.age
console.log(me)
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log("-------Esercizio E--------")
skills = ["Modeling 3D", "Rigging 3D"]
me.skills = skills
console.log(me)
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log("-------Esercizio F--------")
me.skills.push("Lighting 3D")
console.log(me.skills)
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log("-------Esercizio G--------")
me.skills.pop()
console.log(me.skills)
// Funzioni

console.log(`
  ---------------Funzioni---------------
  `)

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("-------Esercizio 1--------")
const dice = () => Math.ceil(Math.random() * 6)
console.log(dice())

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log("-------Esercizio 2--------")
const whoIsBigger = (n1, n2) => {
  if (n1 > n2) {
    return n1
  } else {
    return n2
  }
}
console.log(whoIsBigger(1, 2))
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log("-------Esercizio 3--------")
const splitMe = (phrase) => phrase.split(" ")
console.log(splitMe("Ciao come stai?"))
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log("-------Esercizio 4--------")
const deleteOne = (str, bln) => {
  if (bln) {
    return str.slice(1)
  } else {
    return str.slice(0, -1)
  }
}
console.log(deleteOne("Parola", 2 + 2 === 4))
console.log(deleteOne("Parola", 2 + 2 === 5))
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log("-------Esercizio 5--------")
const onlyLetters = (str) => {
  const numericFigure = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

  for (i = 0; i < numericFigure.length; i++) {
    if (str.includes(i)) {
      str = str.replace(i, "")
      i--
    }
  }
  return str
}
console.log(onlyLetters("Ciao3 co6me va?63"))
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log("-------Esercizio 6--------")
const isThisAnEmail = (email) => {
  const charNotAllowed = [
    "!",
    "£",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "=",
    "[",
    "]",
    "{",
    "}",
    "|",
    "/",
    "?",
    "<",
    ">",
    "~",
    '"',
    "à",
    "è",
    "ì",
    "ò",
    "ù",
    " ",
  ]
  for (i = 0; i < charNotAllowed.length; i++) {
    if (email.includes(charNotAllowed[i])) {
      return false
    }
  }
  if (email.includes("@")) {
    let notTwo = email.replace("@", "")
    if (notTwo.includes("@")) {
      return false
    } else {
      if (email.split("@")[0] === "") {
        return false
      } else {
        if (email.split("@")[1].includes(".")) {
          for (i = 0; i < email.split("@")[1].split(".").length; i++) {
            if (email.split("@")[1].split(".")[i] === "") {
              return false
            }
          }
        } else {
          return false
        }
      }
    }
  } else {
    return false
  }
  return true
}
console.log(isThisAnEmail("nicolo@email.it"))
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollDice" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollDice(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log("-------Esercizio 8--------")
const rollDice = (n) => {
  let result = { sum: 0, values: [] }
  for (let i = 0; i < n; i++) {
    let val = dice()
    result.values.push(val)
    result.sum += val
  }
  return result
}
console.log(rollDice(4))
// Arrays & Oggetti

console.log(`
  ---------------Arrays & Oggetti---------------
  `)
// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log("-------Esercizio 11--------")
const deleteProp = (obj, str) => {
  delete obj[str]
  return obj
}

const myObj = { mare: "acqua", montagna: "neve" }
console.log(deleteProp(myObj, "mare"))
/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log("-------Esercizio 12--------")

const newestMovie = function (arr) {
  newestFilm = {
    Year: "0",
  }
  arr.forEach(function (film) {
    if (parseInt(film.Year) > parseInt(newestFilm.Year)) {
      newestFilm = film
    }
  })
  return newestFilm
}

console.log(newestMovie(movies))
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log("-------Esercizio 13--------")

const countMovies = (arr) => arr.length
console.log(countMovies(movies))
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log("-------Esercizio 14--------")
const onlyTheYears = (arr) => arr.map((movieYears) => movieYears.Year)
console.log(onlyTheYears(movies))
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log("-------Esercizio 15--------")

const onlyInLastMillennium = (arr) =>
  arr.filter((film) => parseInt(film.Year) < 2000)
console.log(onlyInLastMillennium(movies))
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log("-------Esercizio 16--------")
const sumAllTheYears = (arr) =>
  arr.reduce((totale, filmYear) => totale + parseInt(filmYear.Year), 0)
console.log(sumAllTheYears(movies))
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log("-------Esercizio 17--------")
const searchByTitle = (str) =>
  movies.filter((movie) =>
    movie.Title.toLowerCase().includes(str.toLowerCase()),
  )
console.log(searchByTitle("lord"))
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log("-------Esercizio 18--------")
const searchAndDivide = (str) => {
  return {
    match: movies.filter((film) =>
      film.Title.toLowerCase().includes(str.toLowerCase()),
    ),
    unmatch: movies.filter(
      (film) => !film.Title.toLowerCase().includes(str.toLowerCase()),
    ),
  }
}
console.log(searchAndDivide("avenger"))
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log("-------Esercizio 19--------")

const removeIndex = function (n) {
  let movieList = movies
  if (n === Math.floor(n) && n < movieList.length) {
    movieList.splice(n, 1)
    return movieList
  } else {
    return "valore inserito errato"
  }
}
console.log(removeIndex(3))

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const getIDContainer = () => document.getElementById("container")
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
const getAllTagsTd = () => document.getElementsByTagName("td")
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
const stampAllp = () => {
  let allTagP = document.getElementsByTagName("p")
  for (i = 0; i < allTagP.length; i++) {
    console.log(allTagP[i].innerText)
  }
}

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const changeAllLinksColor = () => {
  let allLinks = document.getElementsByTagName("a")
  for (i = 0; i < allLinks.length; i++) {
    allLinks[i].style.backgroundColor = "red"
  }
}
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
const addListElement = () => {
  document.getElementById("myList").innerHTML += "<li></li>"
}

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
const emptyList = () => {
  document.getElementById("myList").innerHTML = ""
}

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
const addClassToTr = () => {
  const allTr = document.getElementsByTagName("tr")
  for (i = 0; i < allTr.length; i++) {
    allTr[i].classList.add("test")
  }
}

// [EXTRA] JS Avanzato
console.log(`
  ---------------JS Avanzato---------------
  `)
/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
console.log("-------Esercizio 27--------")
const halfTree = (n) => {
  let i = 0
  let tree = ""
  while (i < n) {
    tree = tree.concat("*")
    console.log(tree)
    i++
  }
  return "|"
}

console.log(halfTree(4))
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
console.log("-------Esercizio 28--------")
const tree = (n) => {
  let i = 0
  let tree = ""
  let trunk = ""
  let addAsterisk = (j) => {
    for (b = 0; b < j; b++) {
      tree = tree.concat("*")
    }
  }
  for (a = 0; a < n - 1; a++) {
    tree = tree.concat(" ")
    trunk = trunk.concat(" ")
  }
  while (i < n) {
    if (i === 0) {
      addAsterisk(1)
      console.log(tree)
      tree = tree.slice(1)
      i++
    } else {
      addAsterisk(2)
      console.log(tree)
      tree = tree.slice(1)
      i++
    }
  }
  // addAsterisk(2)
  // tree = tree = tree.slice(i, tree.length)
  // console.log(tree)
  // i++
  // }
  trunk = trunk.concat("|")
  return trunk
}
console.log(tree(4))
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
console.log("-------Esercizio 29--------")

const isItPrime = (n) => {
  if (n < 2 || n !== Math.floor(n)) {
    return "il numero non è un numero primo"
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return "il numero non è un numero primo"
    }
  }
  return "il numero è un numero primo"
}
console.log(isItPrime(5))
