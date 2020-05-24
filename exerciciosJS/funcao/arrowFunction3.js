let comparaComThis = function(param) {
  console.log(this === param);
  
}

comparaComThis(global)
const obj = {}
comparaComThis = comparaComThis.bind(obj)

comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global)
comparaComThisArrow(this)

let thisVaiSerThis = (param) => console.log(param === this);

thisVaiSerThis(this)