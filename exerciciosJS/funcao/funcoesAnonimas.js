const soma = (a, b) => a + b

const imprimeResultado = (x, y, operacao = soma) =>
console.log(operacao(x,y));

imprimeResultado(1,1)

imprimeResultado(10, 10, (a, b) => a*b)

const pessoa = {
  falar: () => console.log('falae!')
  
}
pessoa.falar()