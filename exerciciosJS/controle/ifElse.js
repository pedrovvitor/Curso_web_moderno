function validaNumero(valor) {
  return typeof valor == "number" ? valor : 'NaN'
}
const resultado = function checaNota(nota) {
  return nota >= 7.0 ? 'aprovado' : 'reprovado'
}

try {
  console.log(imprimirResultado(7.0));
} catch (e) {
  console.log('funcao nao definida');

}
console.log(typeof 10);

console.log(validaNumero(10));

console.log(resultado(validaNumero(10)));
