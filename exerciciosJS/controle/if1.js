function soBoaNoticia(nota) {
  return nota > 7.0 ? console.log('aprovado') : ''

}

function seForVerdadeEufalor(valor) {
  if (valor) {
    console.log('É verdade...' + valor);

  }
}
seForVerdadeEufalor()
seForVerdadeEufalor(null)
seForVerdadeEufalor(undefined)
seForVerdadeEufalor(NaN)
seForVerdadeEufalor('')
seForVerdadeEufalor(0)
seForVerdadeEufalor(-1)
seForVerdadeEufalor(' ')
seForVerdadeEufalor('?')
seForVerdadeEufalor([])
seForVerdadeEufalor([1, 2])
seForVerdadeEufalor({})


