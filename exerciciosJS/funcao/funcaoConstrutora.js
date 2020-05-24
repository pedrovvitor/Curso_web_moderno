function Carro(velocidadeMaxima = 200, delta = 5) {
  let velocidadeAtual = 0 // variavel privada

  //metodo publico
  this.acelerar = () => {
    velocidadeAtual = velocidadeAtual + delta >= velocidadeMaxima ? velocidadeMaxima : velocidadeAtual + delta
  }

  //metodo publico
  this.getVelocidadeAtual = () => velocidadeAtual
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual());



