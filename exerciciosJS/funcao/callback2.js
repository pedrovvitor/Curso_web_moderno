const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

const aprovados = notas.filter((nota) => nota >= 7)
const reprovados = notas.filter((nota) => nota < 7)

console.log(aprovados);
console.log(reprovados);

const boletim = [{
  nome: 'pedro',
  nota: 10
},
{
  nome: 'joao',
  nota: 8
},
{
  nome: 'paulo',
  nota: 7
},
]

boletim.forEach((aluno) => console.log(`O aluno ${aluno.nome} tirou nota ${aluno.nota}`))
