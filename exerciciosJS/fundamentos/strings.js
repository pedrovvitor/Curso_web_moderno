const escola = 'cod3r'

console.log(escola.charAt(4))
console.log(escola.charCodeAt(4)) // valor ta tabela ASCII

if (escola.charAt(5) == ''){
    console.log('vazio')
} else console.log(escola.charAt(5))
console.log(escola.charAt(5) == '' ? 'vario' : escola.charCodeAt(5))

console.log(escola.substring(0,3))
console.log(escola.substring(1))

console.log('testando '.concat(escola).concat('!'))
console.log(escola.replace(3, 'e'))

'Ana,Maria,Pedro'.split(',').forEach((name) => name.endsWith('a') ?  console.log(name + ' é mulher') : console.log(name + ' é homem'))

console.log('3' + 2) // 32
console.log('3' -2) // 1