/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


    const blackjack = texto (prompt("Boas vindas ao jogo de blackjack")),

if(confirm('quer iniciar uma nova rodada?')) {
   "iniciar uma nova rodada" (ok) 
}else { 
"o jogo acabou" (cancel)
}
function comprarCarta(){
   const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

   
   const naipes = ["♦️", "♥️", "♣️", "♠️"]

   const naipe = naipes[Math.floor(Math.random() * 4)]

   let valor
 
   if (numero === "A") {
      valor = 11
   } else if (numero === "J" || numero === "Q" || numero === "K") {
     valor = 10
   } else { 
     valor = Number(numero)
   }
   const carta = {
      texto: numero + naipe,
      valor: valor
    }
  
    return carta
   }

console.log(carta.texto)



