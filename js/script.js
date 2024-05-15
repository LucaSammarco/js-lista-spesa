// Consegna:
// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
// Consigli:
// Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
// Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while


const listaDellaSpesa = ['Pollo', 'Pane', 'Mele', 'Olio', 'Latte', 'Pomodori', 'Riso', 'Lattuga', 'Formaggio', 'Pasta', 'Uova', 'Banane', 'Cereali', 'Yogurt'];





fullList = listaDellaSpesa.length;


let sum = 0;

let i = 0

while (sum < (fullList)) {



    let ulSelector = document.querySelector("ol");

    const createLi = document.createElement('li');

    createLi.innerHTML = (listaDellaSpesa[sum]);

    ulSelector.appendChild(createLi);

    sum = sum += 1;

}

