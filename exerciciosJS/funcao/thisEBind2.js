function pessoa () {
  this.idade = 0
  const self = this
  setInterval(() => {
    self.idade++
    console.log(this.idade)
    
  }, 1000);
}

new pessoa
