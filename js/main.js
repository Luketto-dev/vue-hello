//Descrizione:
//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
//Bonus:
//Aggiungere alla pagina un’immagine, presa anch’essa da un data.


const appVue = new Vue({
	// selettore dell'elemento html dove avviare vue
    el: "#app",

  // Conterrà tutti i dati necessari all'applicazione
    data: {
	  // varie chiavi necessarie all'app
        testoH1: "Benvenuto in vue.js",
        img: "https://picsum.photos/600/600"
    },
	
	// Conterrà una serie di funzioni
	methods: {
		// funzioni che useremo nell'app
	}
});