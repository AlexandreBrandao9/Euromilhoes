const gerarNumerosBtn = document.getElementById("gerador-nmbrs");
gerarNumerosBtn.addEventListener("click", gerarNumeros);


function gerarNumeros() {

  const numbers = [];
  

  while (numbers.length < 5) {
    const nmbr = Math.floor(Math.random() * 50) + 1;

    if (!numbers.includes(nmbr)) {
      numbers.push(nmbr);
    }
  }

  numbers.sort((a, b) => a - b);

  const numerosEuro = numbers.join(", ");



  const stars = [];

  let star1
  let star2


  while (star1 === star2) {
    star1 = Math.floor(Math.random() * 12) + 1
    star2 = Math.floor(Math.random() * 12) + 1
  }
  // if (!stars.includes(star1)) {
  //   stars.push(star1);
  // } else if (!stars.includes(star2)){
  //   stars.push(star2);
  // }



  const numerosSorte = document.getElementById("numeros-sorte");
  
  numerosSorte.innerHTML = `
  <li><strong>Números da Chave:</strong> ${numerosEuro}</li>
  <li><strong>Estrela 1:</strong> ${star1}</li>
  <li><strong>Estrela 2:</strong> ${star2}</li>
  `


}