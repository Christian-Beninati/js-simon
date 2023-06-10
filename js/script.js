// console.log('JS OK')

// Function---------------------------------------

// Genero un numero casuale compreso tra min e max (inclusi)
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Genero un array di 5 numeri casuali diversi
function generateRandomNumbers() {
  const numbers = [];

  while (numbers.length < 5) {
    const randomNumber = generateRandomNumber(1, 100);

    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }

  return numbers;
}

// Funzione che conta il numero di numeri indovinati
function countGuessedNumbers(generatedNumbers, userNumbers) {
  let count = 0;
  const guessedNumbers = [];

  for (const number of userNumbers) {
    if (generatedNumbers.includes(number)) {
      count++;
      guessedNumbers.push(number);
    }
  }

  return {
    count,
    guessedNumbers
  };
}

// Game Logic-------------------------------------

// Funzione principale del programma
function play() {
  // Genera i numeri casuali
  const generatedNumbers = generateRandomNumbers();

  // Recupero l'elemento dal DOM
  const numbersContainer = document.getElementById("numbers-container");
  // Rimuovo la classe hidden per mostrare i numeri quando riparte una nuova partita
  numbersContainer.classList.remove("hidden"); 
  let numbersString = '';

  for (let i = 0; i < generatedNumbers.length; i++) {
    numbersString += generatedNumbers[i];

    if (i !== generatedNumbers.length - 1) {
      numbersString += " - ";
    }
  }
  
  numbersContainer.innerText = numbersString;
  // Tempo rimanente in secondi
  let secondsLeft = 30;
  

  
  // Funzione per aggiornare il timer
  function updateTimer() {
  // Recupero l'elemento dal DOM
    const countdownElement = document.getElementById("countdown");
    countdownElement.innerText = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timer); // Ferma il timer

      // Nascondo i numeri generati
      numbersContainer.classList.add("hidden");

      // Prompt per l'inserimento dei numeri 
      setTimeout(() => {
        const userNumbers = [];
        for (let i = 0; i < 5; i++) {
          let enteredNumber = parseInt(prompt("Inserisci un numero tra 1 e 100:"));
          while (isNaN(enteredNumber )|| enteredNumber > 100) {
            enteredNumber = parseInt(prompt("Caratteri non validi! Inserisci un numero tra 1 e 100:"));
          }
          userNumbers.push(enteredNumber);
        }

        // Conto i numeri indovinati
        const { count, guessedNumbers } = countGuessedNumbers(generatedNumbers, userNumbers);

        // Mostro i numeri indovinati e il punteggio
        if (count === 0) {
          alert("Mi dispiace. Non hai indovinato nessun numero.");
        } else if (count === 5) {
          alert("Complimenti! Hai totalizzato 5 punti. Hai indovinato tutti i numeri.");
        } else {
          alert(`Hai totalizzato ${count} punti. Hai indovinato: ${guessedNumbers}.`);
        }
        
        // Richiedo all'utente se vuole fare un'altra partita
        const playAgain = confirm("Vuoi fare un'altra partita?");

        if (playAgain) {
        play(); // Avvio una nuova partita
        } else {
        alert("Grazie per aver giocato. A presto!");
        }

        
      }); 
    }

    secondsLeft--;
  }
    // Aggiorno il timer immediatamente all'apertura della pagina
    updateTimer();

  // Aggiorno il timer ogni secondo
  const timer = setInterval(updateTimer, 1000);
}

// Chiamata diretta alla funzione play()
play();