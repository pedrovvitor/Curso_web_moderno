const fabricantes = ['Audi', 'BMW', 'Mercedes']

const imprimir = (nome, indice) => console.log(`${indice + 1}. ${nome}`);

fabricantes.forEach(imprimir)
fabricantes.forEach( fabricante => console.log(fabricante))

console.log(fabricantes.filter((a) => a.length > 4 ))

const nomes = ['pedro', 'joao', 'paulo', 'felipe', 'davi']

nomes.forEach((nome, indice) => console.log(`${indice + 1}. ${nome}`))
