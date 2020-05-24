let dizAlo = () => 'alo'
console.log(dizAlo());


function envelhece () {
  this.idade = 0
  setInterval(() => {
    console.log(++this.idade);
    
  }, 1000);
}

