//Pergunta que poderia ser feita - Poderia me recomendar algum jogo?
export const jogosRecomendados = {
    probablyWords: ["recomendar", "sugerir", "indicar", "jogos",  "jogar", "por", "qual", "você", "me", "sugere"],
    matched: 0,
}

//Pergunta que poderia ser feita  - Qual é o melhor jogo? 
export const melhorJogo = {
    probablyWords: ["jogo", "melhor", "melhor", "bem",  "legal",  "maior", "nota", "pior", ],
    matched: 0,
}

// Pergunta que poderia ser feita - Qual jogo você prefere jogar? 
export const jogoPreferido = {
    probablyWords: ["jogo", "prefere", "jogar", "gostar", "seu", "mais", "curte", "preferido", "costuma"],
    matched: 0,
}

//Pergunta que poderia ser feita  - A onde você me recomendaria jogar? 
export const ondeJogar = {
    probablyWords: ["recomentar", "jogar", "sugeriria", "aconselharia", "indicaria", "jogos", "onde", "lugar", "site", "aplicativo"],
    matched: 0,
}

//Perguntas que não tem nada haver com o tema de jogos.
export const papoFurado = {
    probablyWords: ["série", "amor", "bem", "é", "queijo", "futebol", "idade", "sua", "casa", "mora", "política", "bolo", "revistas", "televisão"],
    matched: 0,
}

export const todosBancos = [jogosRecomendados, melhorJogo, jogoPreferido, ondeJogar, papoFurado]
//Nossas respostas - 
function showAnswer(index) {
    switch (index) {
        case 0:
            return console.log("Recomendo que jogue jogos como: Valorant, Roblox, Fortnite,Baldur's Gate 3 e Counter-Strike: Global Offensive são alguns jogos que posso te recomendar.")
        case 1:
            return console.log("Hoje em dia o jogo que tem a melhor avaliação é o Baldur's Gate 3.")
        case 2:
            return console.log("O meu jogo favorito é o Valorant")
        case 3:
            return console.log("A recomendação de onde jogar depende de suas preferências e do tipo de jogo que você está procurando. Aqui estão algumas opções comuns: Consoles de VideoGame, Computador, Mobile, Jogos online.")
        default:
            return console.log("Infelizmente não posso ajudá-lo com este assunto. Mas se quiser uma recomendação de anime posso ser útil.")
    }
}


// A onde irá extrair as respostas - 
export function mostProbablyQuestion() {
    let matches = [
        jogosRecomendados.matched, 
        melhorJogo.matched, 
        jogoPreferido.matched,
        ondeJogar.matched, 
        papoFurado.matched

    ]
    console.log(matches)
    console.log(Math.max(...matches))
    console.log(matches.indexOf(Math.max(...matches)))

    //Irá ver quantas palavras de cada pergunta feita foi utilizada - 
    return showAnswer(matches.indexOf(Math.max(...matches)))
}