// Conteúdo único do produto "Noites em Paz — Protocolo de 7 Noites".
// Usado pelo PDF (livro.html), pelos papéis de parede (wallpapers.html) e pelos roteiros de áudio (build.js).
//
// MECANISMO: "Método das Gavetas"
//   1. NOMEAR   — escrever no papel o pensamento exato que está rodando (abrir a gaveta)
//   2. ENTREGAR — ler a Palavra da noite e dobrar o papel (fechar a gaveta)
//   3. RESPIRAR — a "Respiração da Palavra": inspira 4s com a 1ª metade do versículo,
//                 expira 6s com a 2ª metade. Expirar mais longo que inspirar ajuda o corpo a desacelerar.
// Na 7ª noite, a pessoa relê as 6 folhas dobradas e percebe quantas já não pesam.

const NOITES = [
  {
    n: 1,
    titulo: "A conversa que não acabou",
    pensamento: "“Eu devia ter respondido diferente.”",
    palavra: "Falai com o vosso coração sobre a vossa cama, e calai-vos.",
    ref: "Salmo 4:4",
    inspira: "Falo com meu coração",
    expira: "e me calo",
    reflexao: [
      "Você apagou a luz e a conversa de hoje recomeçou. Só que agora você responde melhor, com a frase perfeita, no tom certo. E perde de novo, porque a outra pessoa não está ali para ouvir.",
      "A mente repete conversas porque acha que ainda dá para vencer. Ela ensaia, ensaia, ensaia, e o corpo paga a conta com o coração acelerado.",
      "O Salmo 4 é chamado de salmo da noite. Ele não manda fingir que não doeu. Manda conversar com o coração sobre a cama, e depois calar. Existe uma diferença entre conversar e ruminar: conversa tem fim. Ruminação, não. Hoje a conversa vai ter fim."
    ],
    gaveta: "Escreva a frase que você queria ter dito. Inteira, sem filtro. Embaixo, escreva: “Amanhã eu decido se ela precisa ser dita. Hoje, não.” Dobre o papel ao meio.",
    oracao: "Senhor, eu trago para cá a conversa que ficou aberta. Tu ouviste o que foi dito e o que eu não disse. Eu falo com o meu coração agora, na minha cama, e depois me calo. Guarda o que ficou pendente até amanhã. Esta noite, eu descanso.",
    amanha: "Ao acordar, releia o papel. Se a frase ainda fizer sentido, diga com calma. Se não, jogue fora: ela já cumpriu o papel dela."
  },
  {
    n: 2,
    titulo: "O boleto de amanhã",
    pensamento: "“E se não der?”",
    palavra: "Não andeis ansiosos de coisa alguma; em tudo, sejam conhecidos diante de Deus os vossos pedidos. E a paz de Deus guardará o vosso coração.",
    ref: "Filipenses 4:6-7",
    inspira: "A paz de Deus",
    expira: "guarda o meu coração",
    reflexao: [
      "Às onze da noite nenhum banco atende, nenhum boleto pode ser pago e nenhum chefe responde mensagem. Mesmo assim, é nessa hora que a cabeça resolve fazer as contas.",
      "À noite, problemas crescem de tamanho porque ficam sem contorno. Viram um “e se” gigante, sem número, sem data, sem primeiro passo.",
      "Paulo escreveu essas palavras preso, sem saber se sairia vivo. E ele não diz “pare de pensar nisso”. Ele diz: transforme a preocupação em pedido. Pedido tem nome. Não é “me ajuda com as contas”. É “a conta de luz de 287 reais vence quinta”. Quando o medo ganha contorno, ele cabe numa folha de papel."
    ],
    gaveta: "Escreva o problema com números: o quê, quanto e quando. Embaixo, escreva o primeiro passo possível em horário comercial (uma ligação, uma mensagem, uma conta). Dobre o papel.",
    oracao: "Pai, aqui está, com nome e número. Tu já sabias, mas agora eu também sei o tamanho exato disso. Eu não preciso resolver hoje à noite. Amanhã eu dou o primeiro passo. Agora, guarda o meu coração com a tua paz, que é maior do que a minha conta.",
    amanha: "Faça o primeiro passo que você escreveu antes do meio-dia. Só ele."
  },
  {
    n: 3,
    titulo: "A lista que não termina",
    pensamento: "“Não fiz nada hoje.”",
    palavra: "Inútil vos será levantar de madrugada e repousar tarde; pois assim dá ele aos seus amados o sono.",
    ref: "Salmo 127:2",
    inspira: "Ele dá aos seus amados",
    expira: "o sono",
    reflexao: [
      "Você deitou e a lista abriu sozinha: o que ficou para trás, o que precisa fazer amanhã, o que esqueceu de novo. E no fim veio aquela frase: “eu não fiz nada hoje”.",
      "Não é verdade. Você fez muita coisa, só que a mente cansada conta apenas o que faltou. Ela não conta que você cuidou de alguém, que aguentou uma reunião difícil, que se levantou mesmo sem vontade.",
      "Repare no Salmo 127: o sono é dado aos amados, não aos produtivos. Descanso não é prêmio por terminar a lista. É presente. E presente não se merece, se recebe."
    ],
    gaveta: "Escreva 3 coisas que você FEZ hoje, inclusive as invisíveis. Depois, uma linha embaixo, as 3 de amanhã. Só 3. Dobre o papel.",
    oracao: "Senhor, eu fiz o que consegui hoje. Algumas coisas ninguém viu, mas tu viste. O que ficou para amanhã, fica contigo esta noite. Eu não preciso merecer o meu sono. Eu recebo. Obrigado por me chamar de amado antes de eu terminar qualquer lista.",
    amanha: "Comece pela mais difícil das três tarefas, antes de abrir qualquer rede social."
  },
  {
    n: 4,
    titulo: "O medo sem nome",
    pensamento: "Um aperto no peito, sem motivo claro.",
    palavra: "Em paz também me deitarei e dormirei, porque só tu, Senhor, me fazes habitar em segurança.",
    ref: "Salmo 4:8",
    inspira: "Em paz me deito",
    expira: "e durmo em segurança",
    reflexao: [
      "Às vezes não é uma conversa, nem uma conta. É só um aperto. Um alarme tocando sem incêndio. Você procura o motivo e não encontra, e não encontrar dá ainda mais medo.",
      "O corpo às vezes aciona o alarme antes da mente entender o porquê. Tentar descobrir a causa às duas da manhã costuma piorar. O que funciona é avisar o corpo, devagar, que agora é seguro.",
      "O mesmo Salmo 4 que você leu na primeira noite termina assim: em paz me deito e logo durmo. Quem escreveu tinha inimigos de verdade. A segurança dele não vinha de o problema ter sumido, e sim de saber quem estava acordado no lugar dele."
    ],
    gaveta: "Coloque a mão sobre o peito. Depois complete no papel: “Eu tenho medo de que ___.” Se não souber, escreva “não sei”. Também vale, e também se dobra.",
    oracao: "Senhor, eu nem sei dar nome ao que estou sentindo. Mas tu sabes. Eu coloco a mão no peito e coloco este aperto nas tuas mãos. Tu estás acordado, então eu posso dormir. Em paz eu me deito, porque só tu me fazes habitar em segurança.",
    amanha: "Conte para uma pessoa de confiança uma única frase do que você escreveu. Medo dito em voz alta encolhe."
  },
  {
    n: 5,
    titulo: "A culpa que volta",
    pensamento: "“Eu sempre estrago tudo.”",
    palavra: "As misericórdias do Senhor não têm fim; renovam-se cada manhã. Grande é a tua fidelidade.",
    ref: "Lamentações 3:22-23",
    inspira: "Novas a cada manhã",
    expira: "são as tuas misericórdias",
    reflexao: [
      "De noite, a mente reabre processos que já estavam encerrados. Aquele erro de anos atrás, aquela palavra dura, aquela escolha errada. E o veredito sai sempre o mesmo: “eu sou assim”.",
      "Existe uma diferença importante. Arrependimento olha para o que você fez e aponta um caminho. Condenação olha para quem você é e não aponta caminho nenhum, só um buraco.",
      "Lamentações foi escrito no meio das ruínas de uma cidade destruída. E é ali, no pior cenário, que aparece a frase: as misericórdias se renovam a cada manhã. A misericórdia tem prazo de validade, e o prazo é amanhã cedo. Amanhã ela chega nova."
    ],
    gaveta: "Escreva o erro em uma frase no passado (“eu fiz”), nunca no presente (“eu sou”). Embaixo, escreva uma reparação possível. Se não existir, escreva “entrego”. Dobre o papel.",
    oracao: "Pai, isso aconteceu. Eu fiz. Mas isso não é o meu nome. Se existe algo que eu possa reparar, me mostra amanhã. O que não tem conserto, eu entrego. Obrigado porque, quando eu acordar, a tua misericórdia já vai estar lá, nova, esperando por mim.",
    amanha: "Se houver reparação, faça a menor versão dela. Uma mensagem já basta."
  },
  {
    n: 6,
    titulo: "A pessoa que pesa",
    pensamento: "“Como teve coragem de fazer isso comigo?”",
    palavra: "Lança o teu cuidado sobre o Senhor, e ele te susterá.",
    ref: "Salmo 55:22",
    inspira: "Lanço sobre ti",
    expira: "e tu me sustentas",
    reflexao: [
      "Tem gente que vai dormir com a gente sem ser convidada. A pessoa que traiu, que humilhou, que sumiu. Você deita e ela está ali, no pensamento, ocupando o travesseiro.",
      "O Salmo 55 foi escrito sobre uma traição de alguém próximo: “não era um inimigo… eras tu, meu companheiro”. E a resposta não é “perdoe agora e esqueça”. É “lança”.",
      "Lançar é um verbo de força. É tirar a mochila pesada das costas e jogar no chão. Perdoar é um processo que pode levar tempo, e tudo bem. Hoje não é a noite de resolver essa relação. Hoje é só a noite de soltar esse peso por oito horas."
    ],
    gaveta: "Escreva o nome da pessoa e o que ela te custou. Embaixo, escreva: “Hoje à noite isso não é meu para carregar.” Dobre o papel com força.",
    oracao: "Senhor, tu conheces essa pessoa e conheces a minha ferida. Eu ainda não sei perdoar tudo, mas sei soltar por esta noite. Eu lanço esse peso sobre ti. Sustenta o meu coração enquanto eu durmo, e cuida do que eu ainda não consigo cuidar.",
    amanha: "Não tome nenhuma atitude em relação a essa pessoa antes do almoço."
  },
  {
    n: 7,
    titulo: "O silêncio",
    pensamento: "A mente finalmente quieta… e você estranha.",
    palavra: "Aquietai-vos e sabei que eu sou Deus.",
    ref: "Salmo 46:10",
    inspira: "Aquieta-te",
    expira: "e sabe",
    reflexao: [
      "Depois de seis noites abrindo e fechando gavetas, pode ser que hoje a cabeça esteja mais quieta. E, curiosamente, o silêncio às vezes assusta. Parece que falta alguma coisa para resolver.",
      "Quando o profeta Elias chegou ao limite, deitou debaixo de uma árvore e pediu para morrer. Deus não deu sermão. Deu sono e comida, duas vezes. Só depois falou, e falou num sussurro suave, não no terremoto nem no fogo.",
      "O “aquietai-vos” do Salmo 46 tem o sentido de soltar, de largar as mãos. Não é esforço para ficar quieto. É parar de segurar. Esta noite não tem nada para resolver. Só para soltar."
    ],
    gaveta: "Hoje você não escreve nada. Pegue as seis folhas dobradas da semana e releia uma por uma. Perceba quantas já não pesam como pesavam. Isso é a sua prova.",
    oracao: "Deus, obrigado por estas sete noites. Eu solto as mãos. Não preciso segurar mais nada agora. Fala comigo no sussurro, do jeito que falaste com Elias. Eu me aquieto e sei: tu és Deus, e eu posso descansar.",
    amanha: "Escolha a Respiração da Palavra que mais te acalmou nesta semana. Ela agora é sua. Use sempre que precisar."
  }
];

const TRES_DA_MANHA = {
  titulo: "O que fazer quando você acorda às 3h",
  palavra: "Quando me lembro de ti no meu leito, medito em ti nas vigílias da noite.",
  ref: "Salmo 63:6",
  passos: [
    ["Não pegue o celular.", "A luz desperta, e qualquer notificação liga o modo “resolver”."],
    ["Não olhe a hora.", "Fazer a conta de quantas horas faltam é a maneira mais rápida de ficar acordado."],
    ["Faça 6 Respirações da Palavra.", "Use a da noite que você está vivendo. Inspira em 4, expira em 6."],
    ["Se um pensamento insistir, abra a gaveta.", "Deixe papel e caneta no criado-mudo. Escreva uma linha, dobre, e volte a respirar."],
    ["Passou uns 20 minutos e nada?", "Levante, vá para outro cômodo com luz baixa, releia as folhas dobradas. Volte para a cama só quando o sono vier. A cama é lugar de dormir, não de lutar."]
  ]
};

const RITUAL = [
  ["21h00", "Celular no “não perturbe”. Carregador longe da cama."],
  ["21h15", "Luzes baixas na casa. Nada de tela grande."],
  ["21h20", "Papel e caneta no criado-mudo: é a sua gaveta."],
  ["21h30", "Banho morno ou chá sem cafeína."],
  ["Na cama", "Ouça ou leia a noite do dia (5 minutos)."],
  ["Gaveta", "Escreva o que pede o exercício. Dobre o papel."],
  ["Respire", "6 Respirações da Palavra: inspira 4, expira 6."],
  ["Apague", "Luz apagada, papel dobrado, assunto encerrado."]
];

if (typeof module !== "undefined") module.exports = { NOITES, TRES_DA_MANHA, RITUAL };
