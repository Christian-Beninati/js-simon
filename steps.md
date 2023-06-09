# Descrizione:

Visualizzare in pagina 5 numeri casuali diversi. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

<br>
<br>

- inizio
- Creo una funzione per generare un numero casuale da min a max (1 - 100)
- Creo una funzione per generare un array di numeri casiali tutti diversi
- Creo una funzione che tiene il conteggio dei numeri indovinati
- Funzione principale del programma (play)
  - Genero i numeri casuali utilizzando la funzione (fatta precedentemente)
  - Recupero l'elementto dal Dom
  - Rimuovo la classe 'hidden' dall'elemento per mostrare i numeri quando viene avviata una nuova partita.
  - Creo una stringa che rappresenta i numeri generati e la inserisco nell'elemnto del DOM
  - Avvio un timer di 30 secondi per la durata della partita.
  - Aggiorno il timer ad ogni secondo.
  - Se il tempo è scaduto, interrompo il timer e nascondo i numeri generati.
  - Creo i Prompt per l'inserimento dei numeri da parte dell'utente.
  - Conto i numeri indovinati utilizzando la funzione creata precedentemente.
  - Mostro i numeri indovinati e il punteggio all'utente.
  - Chiedo all'utente se desidera fare un'altra partita.
    - Se l'utente conferma, avvio una nuova partita richiamando la funzione "play".
    - Altriment mostro un messaggio di saluto e termino il programma.
- Fine
