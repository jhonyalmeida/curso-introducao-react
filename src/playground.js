class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    dizerNome() {
        console.log(this.nome);
    }

    fazerAniversario() {
        this.idade = idade + 1;
    }
}

const bruxos = [
    new Pessoa('Harry', 17),
    new Pessoa('Ronny', 17),
    new Pessoa('Hermione', 16),
    new Pessoa('Dumbledore', 297)
];

const trouxas = [
    new Pessoa('Mike', 13),
    new Pessoa('Dustin', 12),
    new Pessoa('Lucas', 13),
    new Pessoa('Will', 12),
    new Pessoa('Steve', 21)
];

const pessoas = [ ...trouxas, ...bruxos ];

const { nome, idade } = pessoas[0];
console.log(`${nome} é o primeiro da lista e tem ${idade} anos.`);

const nomesAdultos = pessoas.filter(p => p.idade >= 18).map(p => p.nome);
console.log('Nome de adultos:');
for (let pessoa of nomesAdultos) {
    console.log(pessoa);
}
//console.log(`Última pessoa: ${pessoa}`);

const palavra = 'MATRIX';
for (let letra of palavra) {
    console.log(letra);
}

const somaIdades = pessoas.reduce((prev, cur) => prev + cur.idade, 0);
console.log(`Soma das idades: ${somaIdades}`)

fetch('http://localhost:8000/api/pokemons')
    .then(response => response.json())
    .then(content => console.log(content[0]))
    .catch(error => console.error(error.message));

console.log('esperando...');