/* Milestone 2 
- Analizzo l'API fornita
    - Nell'API è presente un array di oggetti
    - Per ogni oggetto viene fornita un id, una foto, un titolo e una data
    - Obiettivo è andare a stampare nella mia pagina per ogni postcard le corrispondenti informazioni contenute nell'array
    
To do list

	•	Creare nel file HTML un contenitore vuoto dove verranno stampate le card (id="cards-row").
	•	Controllare la struttura dell’array 
	
  Struttura JavaScript
	•	Creare una funzione asincrona per chiamare l’API con axios.get().
	•	Salvare i dati ottenuti in una variabile.
	•	Scorrere l’array con forEach per creare l’HTML di ogni card.
  Integrazione con il layout
	•	Mantenere la struttura e lo stile delle card già presenti.
	•	Impostare l’immagine dell’API come background-image dentro .photo-inner.
    
Tools 
    - Axios Cdn
    - async / await, try / catch, forEach
    - Bootstrap
    - document.getElementById()

*/


// Test chiamata API con Axios per controllare sia tutto funzionate

const API_URL = "https://lanciweb.github.io/demo/api/pictures/";

axios
  .get(API_URL)
  .then(function (response) {
    console.log("Dati ricevuti:", response.data);
  })
  