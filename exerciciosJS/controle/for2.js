const nota = [6.7 , 9.4, 7.8, 8.1, 7.7]

for (let i in nota) {
  console.log(i, nota[i])
}

const pessoa = {
  nome:'ana',
  idade: 20,
  peso: 64
}

for (let atributo in pessoa) {
  console.log(` ${atributo} = ${pessoa[atributo]}`);
  
}
