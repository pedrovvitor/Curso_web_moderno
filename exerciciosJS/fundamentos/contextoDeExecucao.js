let a = 3

global.b = 3

this.c = 456 // this. == module.exports
this.d = false
this.e = 'teste'

console.log(a);
console.log(global.b);
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports);

//criando variavel sem var e let
abc = 3 // n faca isso
console.log(global.abc);

// module.exports = 



