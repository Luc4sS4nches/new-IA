const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual a capital da Irlanda",
        alternativas: [
            "Cork",
            "Dublin"
        ]
    },
    {
        enunciado: "Qual país colonizou a Irlanda?",
        alternativas: [
            "Inglaterra",
            "Reino Unido"
        ]
    },
    {
        enunciado: "Quando aconteceu a ''Guerra de independência da Irlanda?",
        alternativas: [
            "1921",
            "1951"
        ]
    },
    {
        enunciado: "Como a Irlanda se manteve na segunda guerra mundial ?",
        alternativas: [
            "Neutra, por ser aliada da grã-bretanha",
            "Participou do Eixo"
        ]
    },
    {
        enunciado: "Fazem parte do folclore irlandês",
        alternativas: [
            "Leprechaum, Banshee e Fairies",
            "Leprechaum, Pé Grande e Bruxas"
        ]
    } //fecha objeto de pergunta
];//fecha lista de perguntas

let atua = 0;
let perguntaAtual;

function mostraPergunta() {
     perguntaAtual = perguntas[atual];
     caixaPerguntas.textContent = perguntaAtual.enunciado;
}

 mostraPergunta();