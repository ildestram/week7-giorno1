class dati {
    constructor(nome, cognome, age) {
        this.nome = nome;
        this.cognome = cognome;
        this.age = age;
    }
}

let button = document.querySelector('button');


button.onclick = function() {
    let nome = document.querySelector('input[name="nome"]').value;
    let cognome = document.querySelector('input[name="cognome"]').value;
    let age = document.querySelector('input[name="age"]').value;
    let datiAnagrafici = new Array(nome, cognome, age);

    console.log(datiAnagrafici);
    nome.value = '';
    cognome.value = '';
    age.value = '';

    aggiungi();
}


function aggiungi (event) {
    let firstRow = document.querySelector('.one');
    let printOne = document.querySelector('td');
    printOne.innerHTML = datiAnagrafici.length[0];
    firstRow.appendChild(printOne);
}