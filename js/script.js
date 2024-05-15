// const frutta = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];
// frutta.push("pesca");
// let trovato = false

//     for (let index = 0; index < frutta.length; index++) 
//         if (frutta[index] === "cocomero") {
//            trovato = true;

       
        
//     }

//     if(trovato) {
//      console.log("Trovato! Devo solo preparare il concktail!")
//     } else {
//         console.log("Oh no, devo uscire a comprare il cocomero!")
//     }


// Consegna:
// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

//     HC

//     //  * Creare lista della spesa
//         * Creare un loop che scorra gli elementi della lista e li aggiunga in pagina, finchè il numero di elementi nella pagina non sia uguale a quelli della lista della spesa.


//         <section class="spesa">
            
//             <ul class="lista-spesa">

//             </ul>

//         </section>



const listaDellaSpesa = ['Pollo', 'Pane', 'Mele', 'Olio', 'Latte', 'Pomodori', 'Riso', 'Lattuga', 'Formaggio', 'Pasta', 'Uova', 'Banane', 'Cereali', 'Yogurt'];



let ulSelector = document.querySelector("ul");

const createLi = document.createElement('li');

createLi.innerHTML = ("blabla");

ulSelector.appendChild(createLi);
