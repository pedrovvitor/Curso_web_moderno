function tratarErroELancar(err) {
  throw new Date
}

function imprimirNomeGritado(nome) {
  return nome.toUpperCase() + '!!!!';
}

console.log(imprimirNomeGritado("Pedro"));

const obj = {
  nome: 'joao',
  sobrenome: 'pereira'
}
try {
  console.log(imprimirNomeGritado(obj))

} catch (e) {
  tratarErroELancar(e)

} finally {
  console.log('teste');
  
}
