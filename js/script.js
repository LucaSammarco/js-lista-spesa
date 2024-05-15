const listaDellaSpesa = ['Pollo', 'Pane', 'Mele', 'Olio', 'Latte', 'Pomodori', 'Riso', 'Lattuga', 'Formaggio', 'Pasta', 'Uova', 'Banane', 'Cereali', 'Yogurt'];





fullList = listaDellaSpesa.length;


let sum = 0;

let i = 0

while (sum < fullList) {

    sum = sum += 1;

    let ulSelector = document.querySelector("ol");

    const createLi = document.createElement('li');

    createLi.innerHTML = ("blabla");

    ulSelector.appendChild(createLi);


}

