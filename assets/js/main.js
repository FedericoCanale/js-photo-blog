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
const cardsRow = document.getElementById("cards-row");

axios
    .get(API_URL)
    .then(function (response) {
        const data = response.data;
        cardsRow.innerHTML = "";

        data.forEach(function (item, index) {
            cardsRow.innerHTML += `
        <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center mb-5">
          <div class="photo-card text-center position-relative">
            <img src="./assets/img/pin.svg" alt="Pin rosso" class="pin-img">

            <div class="photo-inner"
                 style="background-image: url('${item.url}');
                        background-size: cover;
                        background-position: center;">
            </div>

            <p class="photo-date">${item.date}</p>
            <p class="photo-caption photo-title-strong">${item.title}</p>
          </div>
        </div>
      `;
        });
    })

