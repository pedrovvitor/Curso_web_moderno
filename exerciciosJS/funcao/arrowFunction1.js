let dobro = function (a) {
  return 2 * a
}

dobro = (a) => {
  return 2* a
}

dobro = a => 2 * a // return implicito

console.log(dobro(Math.PI));

let ola = function (){
  return 'Olá'
}

ola = () => 'olá'
ola = _ => 'olá'

console.log(ola());

let arrow = (a, b, c, d) => a*b + c*d

console.log(arrow(1,2,3,4));

