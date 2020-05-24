const pessoa = {
  saudacao: 'Bom dia',
  falar() {
    console.log(this.saudacao);
  }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)

falarDePessoa()

//Bind é o método responsável por amarrar um determinado objeto para ser o dono da execução do método