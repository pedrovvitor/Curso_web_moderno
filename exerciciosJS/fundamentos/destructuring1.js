// recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco : {
        logradouro: 'Rua Abc',
        numero: 300
    }
}

const {nome, idade} = pessoa

console.log(nome, idade);
const {nome : n, idade: i} = pessoa

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada);

const {endereco: { logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep);