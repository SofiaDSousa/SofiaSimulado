import {jogosRecomendados, melhorJogo, jogoPreferido, ondeJogar, papoFurado, mostProbablyQuestion } from './can-i-answer.js'



let pergunta = "Qual é o melhor jogo?"
pergunta = pergunta.toLowerCase()
pergunta = pergunta.split(' ')


const bancos = [
    jogosRecomendados, melhorJogo, jogoPreferido, ondeJogar, papoFurado, 
]

for (let i = 0; i < pergunta.length; i++) {
    for (let j = 0; j < bancos.length; j++) { 
        if (bancos[j].probablyWords.indexOf(pergunta[i]) !== -1) {
            bancos[j].matched++
        }
    }
}

console.log(mostProbablyQuestion(pergunta))