function area(largura, altura) { 
  const area = largura * altura
  if(area > 20) {
    console.log(`Valor acima do permitido: ${area}m2`);
    
  } else {
    return area
  }
  
}

area(10,10)
console.log(area(2,5));
area(10,20,30,40,50);


