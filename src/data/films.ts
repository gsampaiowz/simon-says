﻿import { v4 as uuid } from "uuid";

//Função VBA para pegar o link do hiperlink

// Function GetHyperlink(cell As Range) As String
//     On Error Resume Next ' Continua a execução em caso de erro
//     ' Verifica se há um hiperlink na célula
//     If cell.Hyperlinks.Count Then
//         GetHyperlink = cell.Hyperlinks(1).Address ' Retorna o endereço do hiperlink
//     Else
//         GetHyperlink = "" ' Retorna uma string vazia se não houver hiperlink
//     End If
//     On Error GoTo 0 ' Reseta o tratamento de erro
// End Function

const filmsArray = [
  {
    FilmId: uuid(),
    Home: true,

    Cliente: "CLDF",
    Título: "CLDF Bandeiras",
    Subtítulo: "Por Cada um por todos nós",
    YouTube: "https://youtu.be/3vYC8VUyEOY",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/168aC9jpU9N0X8Y7LatOVquBKsy2v3kur=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1ZW593XJKCAWSLNI4ryL2DT0PF5UcD1Xn=k",
    Texto:
      'A campanha "Bandeira" da CLDF foi realizada nos cenários icônicos de Brasília, com direção de Kahue Rozzi. O filme foi cuidadosamente produzido em 3 dias, envolvendo mais de 35 membros da equipe, com equipes de São Paulo e Brasília trabalhando em conjunto. Além de contar com um elenco de 70 membros, a produção destacou-se pela colaboração eficiente entre as equipes e pela captura da essência única da capital brasileira.',
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "CLDF",
    Título: "CLDF Bandeiras",
    Subtítulo: "Por Cada um por todos nós | 30s",
    YouTube: "https://youtu.be/zYROSHwZYQw",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1li1P1KSHWRLuXkIxGWNUr6COcjISh-Rf=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1nInlf6bXispn84wvGXClVfRujE7olDSs=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "CLDF",
    Título: "CLDF Bandeiras",
    Subtítulo: "Por Cada um por todos nós | Stories",
    YouTube: "https://youtube.com/shorts/s5rK9fchTQM",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1UpXYN4QZj9Odp2B7ntOjPlOsGHK7CNEN=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1Lq5P1hTPTP4IzvB9-0P-n3NrFPWQLBqz=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: true,

    Cliente: "Cereser",
    Título: "Promoção Vem Brindar com Cereser",
    Subtítulo: "",
    YouTube: "https://youtu.be/nMD3m_bd2aU",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1Vo0ELtrT5xJqe9QsT-uyJM-8zklVQ3bT=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1Vr4jzgwm3L3kw_Rf0kNhjs1ZaGe0JVAt=k",
    Texto:
      'Conheça a magia por trás da produção da campanha "Vem Brindar" da Cereser com a SimonSays Filmes. Um filme encantador que foi concebido em apenas 1 dia, com uma equipe de renomados profissionais liderada pelo talentoso diretor Kahue Rozzi. Contando com a presença carismática de Celso Portiolli, o filme foi capturado em formato cinema 6K, garantindo uma qualidade visual excepcional.\n\nA produção não se limitou apenas à filmagem, mas incluiu cuidadosa finalização, color grading e uma trilha sonora composta sob medida. Ao participar da Promoção Vem Brindar com Cereser 2023, você não apenas concorre a incríveis R$350 mil em prêmios, mas também se conecta a uma experiência cinematográfica única, repleta de emoção e qualidade técnica. Vem brindar conosco!',
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: true,

    Cliente: "Audionova",
    Título: "Ouça mais com o coração",
    Subtítulo: "Guerra",
    YouTube: "https://youtu.be/fIQRZxDXjMk",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1jq7kf9a-Keb1HMHsaoJjzXIsk38JhlTz=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1S6AM48APJGeCCt1ykE28Av7o3xQQS4iY=k",
    Texto:
      "Em tempos sombrios de guerra, nada como a poesia e a arte para nos fazer ver uma versão de como ter paz com um simples gesto. A *@rebornyourself_* criou esta campanha para a AudioNova e tivemos a sorte de ser quem produziu.\n*Direção: @kahue Rozzi\nFotografia: @cellobarillari*",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Audionova",
    Título: "Ouça mais com o coração",
    Subtítulo: "Religião",
    YouTube: "https://youtu.be/olJRbx13aZw",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1mP3euStYgY1hFD6I7oF3yPzPTd5p7R4j=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1TcyU0CuBlcyR_gWVKPpJZWZW_ouIhCUF=k",
    Texto:
      'Este poderoso filme conta a história envolvente de dois indivíduos de mundos distintos: um judeu e um árabe. Encontrando-se nas ruas pulsantes da cidade, suas vidas se cruzam inicialmente sob um véu de discordância. No entanto, conforme a narrativa se desenrola, uma conexão inesperada e genuína se forma entre eles, culminando em um momento de compreensão mútua e um sorriso compartilhado.\n\nEste momento simbólico traz consigo uma mensagem profunda: "Ouça Mais com o Coração". O filme é um lembrete pungente de que, além das nossas diferenças culturais ou religiosas, reside uma humanidade comum que nos une. Ele exemplifica o poder do cinema não apenas como uma forma de arte, mas como um meio de fomentar a compreensão, o respeito e a empatia entre as pessoas.',
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Audionova",
    Título: "Ouça mais com o coração",
    Subtítulo: "Família",
    YouTube: "https://youtu.be/OFUoGu-dlTs",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1sAssmgxtKR-_x7dS-po5xYngXsEjqlks=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1KEfAWPUmxrNbx3Rf8_NRFbpOCpukjanu=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Audionova",
    Título: "Ouça mais com o coração",
    Subtítulo: "Casal",
    YouTube: "https://youtu.be/d9-JiwdhQ9k",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1HJ821_IJgeUNmW-J2CjYNf1K_NJ7acD-=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1kSwnSJM_kFQT_bUnX4ldFNI0DY8EqW_v=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Audionova",
    Título: "Ouça mais com o coração",
    Subtítulo: "Senhor",
    YouTube: "https://youtu.be/LAIwz6xrLOI",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1s4JwbDCxZqKOEoMvs0-lsbFr0q62XVDf=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1l20qRtWSn8h5dnQ9WpvmltYPZ1-jtxg6=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Universo Ambipar",
    Título: "Universo Ambipar",
    Subtítulo: "Larissa Manoela conta o que é a Universo",
    YouTube: "https://youtu.be/VbJLzXdw7PE",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1e8gR_bpCcEpJ72zPfiZCD9gkVRB27sRp=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1Rxlu9GCnE0p6AopFq4_6V6ExTiRMz5ly=k",
    Texto:
      "A Universo se destaca por transformar resíduos em produtos biodegradáveis inovadores, e para destacar essa iniciativa, a SimonSays Filmes produziu uma série de filmes para redes sociais, estrelando a carismática Larissa Manoela. Filmada na loja da Universo em São Paulo, a campanha resultou em mais de 80 pílulas e um filme principal, destacando a importância da sustentabilidade. A essência da mensagem da Universo, combinando talento, criatividade e compromisso ambiental.",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Universo Ambipar",
    Título: "Universo Ambipar",
    Subtítulo: "Apresentação",
    YouTube: "https://youtu.be/d5s4V_aj-T4",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/11Ha652rn7y_zHE3QFV6TyNsns4dU9QLk=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1TQeMF1dT8v-58AH-s8uPInvsUSEKO4bS=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Universo Ambipar",
    Título: "Universo Ambipar",
    Subtítulo: "Álcool Ecológico",
    YouTube: "https://youtu.be/POctFA30l7Y",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1uMFpH49_uN3C-BK1NGQXTKkvtENZhATY=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1qOK9BCaqyz48EC4uZRTq6i7JbJByIl0i=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Universo Ambipar",
    Título: "Universo Ambipar",
    Subtítulo: "Biocápsulas",
    YouTube: "https://youtu.be/EObdGTPCdko",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1ixFIgHhuVq1WRZWHTrOYPtTLwT5BKzBm=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1El766VJJl1IA7Tt7bmIh8coy8dfzNsuB=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Universo Ambipar",
    Título: "Universo Ambipar",
    Subtítulo: "Biombo",
    YouTube: "https://youtu.be/DhyJmAt3EKU",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1Lf6Ks4IAS_6-tASkH1tCtMT835s2xNj1=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1IJp03sJsLrWTV0s9mC07a10jxav9zNNE=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Universo Ambipar",
    Título: "Universo Ambipar",
    Subtítulo: "Condicionador",
    YouTube: "https://youtu.be/HtfPs82m8eg",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/13eQFBYHFqtogivlKkEiSbZNVkeCp_AFg=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1ymSQbWfg0g18g01rxmEaKaz3Ig_W-OFz=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Universo Ambipar",
    Título: "Universo Ambipar",
    Subtítulo: "Ecosolo",
    YouTube: "https://youtu.be/DkEhZZcvOsk",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1dT9ZKXmvqrRzO3kJNBkhuw9TuLwmqGhQ=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1mGjWyM-jekC7aUDYwyeYjfUS6jFyxpr-=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Universo Ambipar",
    Título: "Universo Ambipar",
    Subtítulo: "Luminária 3D",
    YouTube: "https://youtu.be/GyFOWHyjytw",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1mk16DyAkEmktbZ2Zk1xrk4OqL5sJqgD5=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1sQGqIoVeY2mCWlZf-7YhmCDEEUiBmdJw=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Universo Ambipar",
    Título: "Universo Ambipar",
    Subtítulo: "Luminárias",
    YouTube: "https://youtu.be/4RimYS5c-yQ",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/13Fs3ssWlQ8PEVtPB9jq6O0GKG3Gyx5xO=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1lboiIgItX9eblwoHQg0U4JXB29vS66N1=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Universo Ambipar",
    Título: "Universo Ambipar",
    Subtítulo: "Macacão",
    YouTube: "https://youtu.be/NQrd0BWCXlY",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/12O9vmQzQn6Qc0v0xMAf8fUJtN_l-j1nt=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/19cZLEKZ3mY-wVSlCfbRWA79cNYNxLlip=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Universo Ambipar",
    Título: "Universo Ambipar",
    Subtítulo: "Mesa de Cabeceira",
    YouTube: "https://youtu.be/cr9tVH4t48o",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/109fszHeYvEVY_7wN9ScaZJAiL4Xx2mCQ=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1N9ct-JbN2oo4VZE0OHr7qGNqUneqVfe5=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Universo Ambipar",
    Título: "Universo Ambipar",
    Subtítulo: "Obsolescência",
    YouTube: "https://youtu.be/vugRJ_CuBCg",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1DbwV7kOzh-BsmFpESZGJd_7-2mrpLrAS=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1eiVVTXbTQ93an8Iuo62uepLU3aGLIWAP=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Universo Ambipar",
    Título: "Universo Ambipar",
    Subtítulo: "Plástico Bolha",
    YouTube: "https://youtu.be/S-2X_6ikYyQ",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1Rij61v-Gs0AWGspwIIx9geYzIfIfGLan=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1mixImKW8sRsAbgxLeWPelOm2tQ4_kjCi=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Universo Ambipar",
    Título: "Universo Ambipar",
    Subtítulo: "Sabonete",
    YouTube: "https://youtu.be/phfZQy8BOeI",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/12VRu9QKKkuuzOOQIhPNQRfHsBECFDrZX=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/12WLYtwrVmM6loeazWDVUTQtwctMro22W=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Universo Ambipar",
    Título: "Universo Ambipar",
    Subtítulo: "Shampoo",
    YouTube: "https://youtu.be/N69qxe6lsDc",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/12YLcM96gA_Ynh6ZzhNNS4c4kkr-mSnFl=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/12m1stWCdKKGZS9nsnjL8f6LKk6B_Y7pe=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "CBF",
    Título: "Seleção Solidária",
    Subtítulo: "",
    YouTube: "https://youtu.be/HZNBeWBg4yo",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1CYBP_c2LcPaL4Wb7lI7Ig-Bgcpc5AXHt=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1CUsB82BrRdKxJBXrA7OvMwiv60LAYw2c=k",
    Texto:
      'O filme "Movimento Seleção Solidária", uma produção da SimonSays Filmes, é uma representação cinematográfica poderosa da resposta solidária do futebol brasileiro durante a pandemia. Enquanto a produção, direção e realização técnica foram conduzidas pela nossa equipe, o roteiro foi habilmente desenvolvido para capturar a essência da campanha, a qual uniu jogadores de renome e a CBF em um esforço conjunto para ajudar as famílias afetadas pela crise. O filme retrata de forma emocionante a união, a solidariedade e a esperança, refletindo o espírito de colaboração que surgiu em um período desafiador. A campanha não apenas alcançou sua meta financeira, mas também fortaleceu a conexão entre o esporte e a ação social, evidenciando como o futebol pode ser uma força positiva para mudanças na sociedade.',
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "CBF",
    Título: "CBF Ídolos 1970 Copa do Mundo",
    Subtítulo: "",
    YouTube: "https://youtu.be/Hhrjj1fKXOM",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1A5bpRg_qa5-4Zh2lnc6Vbrn9kW8xK8N1=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1A6A1UdtcI8ScXKBVKylDfzp9hjwv9_Bu=k",
    Texto:
      "Para a CBF, a SimonSays Filmes produziu um emocionante filme em homenagem à seleção brasileira de 1970 e sua conquista do título mundial. Este projeto envolveu uma pesquisa detalhada de imagens, uma edição cuidadosa, e o desenvolvimento de uma linguagem visual única. Realizamos tratamento de imagens e incluímos motion graphics para trazer as cenas históricas à vida moderna. A produção foi enriquecida com uma trilha sonora impactante e uma locução envolvente, capturando a essência e o espírito triunfante daquela equipe lendária.",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "CBF ",
    Título: "CBF Sub-17",
    Subtítulo: "",
    YouTube: "https://youtu.be/J9Tmup0KbcQ",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1A8F2OQh_XVg1CXoC31Gsn2SL0SKecZtP=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1A6Z227ZNmBJ6EaPte8N6Khmfl61UDMNV=k",
    Texto:
      "Em uma colaboração única com a Rede Globo, a SimonSays Filmes teve a oportunidade de produzir uma campanha vibrante e inspiradora para o Campeonato Sub-17 da FIFA. Graças ao acesso exclusivo a um acervo de imagens de alta qualidade fornecidas pela Rede Globo, conseguimos criar uma narrativa visual impactante que captura a energia e o talento emergente deste emocionante torneio de futebol juvenil. Esta campanha não só destaca os jovens talentos do futebol mundial, mas também celebra o espírito do esporte em sua forma mais pura e promissora.",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Colégio Fereguetti",
    Título: "Colégio Fereguetti",
    Subtítulo: "",
    YouTube: "https://youtu.be/o3n7edzFD8Y",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1Ms44cYkMjOrTPN9OC8-dwC2Nb9CNmYy7=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1OL_PkSEHp6NzzKAJZac1_FZa-EvrPorE=k",
    Texto:
      "Realizada pela SimonSays Filmes, foi um projeto que destacou a excelência em storytelling e habilidades técnicas. Com duas diárias intensas de filmagem, a equipe da SimonSays conseguiu captar a essência e os valores do colégio. O conceito e roteiro, criados internamente pela SimonSays, refletiram a missão educacional do colégio e sua abordagem inovadora. A atenção aos detalhes na produção, desde a escolha dos locais até a edição final, garantiu que cada cena transmitisse a mensagem de crescimento, comunidade e tecnologia no contexto educacional.",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Sonda",
    Título: "Sonda Supermercados Nova Loja",
    Subtítulo: "",
    YouTube: "https://youtu.be/Va2BAjOoWuQ",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1P0FeFokrcWYpO91pKTgi7FegLEU_WdSi=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1OtM8qMotm7hYLLkfLz_zPwA3aC0zLLIC=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "FTD Educação",
    Título: "Campanha FTD Sistema de Ensino",
    Subtítulo: "",
    YouTube: "https://youtu.be/npPlOnwgs5g?si=LjtkAjKPd4SSbAkA",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/13en0y9PYCJo06vj4H--6ppDqj5y2zVUl=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/13sS6XIoM33L8vZuPRo16YDElBbSiLcXB=k",
    Texto:
      "A SimonSays Filmes teve o privilégio de trabalhar com Felipe Castanhari em um projeto inovador. Para atender à agenda movimentada de Castanhari, montamos um estúdio dentro de um resort e fechamos um autódromo, criando cenas espetaculares de carros em alta velocidade. Empregamos tecnologias avançadas, como drones, microcâmeras e câmeras de cinema, complementadas por motion graphics sofisticados. O roteiro, tanto inovador quanto cativante, juntamente com a presença magnética de Castanhari, culminou em uma campanha bem-sucedida que harmonizou educação, entretenimento e excelência técnica.",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Goodyear",
    Título: "DogDoll",
    Subtítulo: "",
    YouTube: "https://youtu.be/BYxS6HxtwkQ",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/146WBylhHMal1gCc2ZDtAQeZzp1L9tWli=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/146fohX2XvEJiRpfFEtKCDyYnknokAIWj=k",
    Texto:
      "Apresentamos com orgulho três filmes distintos, produzidos para a Goodyear, na sua pista de provas. Cada filme é uma ode à excelência da Goodyear em diferentes categorias de pneus: alta performance, off-road e um inovador filme que combina velocidade com efeitos em 3D. Utilizamos drones, camera car e grua para capturar cenas vibrantes em pistas secas, molhadas e em terrenos desafiadores como terra e pedras. Esta trilogia não só demonstra a qualidade superior dos pneus Goodyear, mas também a habilidade da SimonSays Filmes em criar experiências visuais imersivas e dinâmicas, ressaltando a fusão entre alta tecnologia e design inovador dos produtos Goodyear.",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Goodyear",
    Título: "Lama",
    Subtítulo: "",
    YouTube: "https://youtu.be/VECwYo9c8Vg",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1487WUajGV9wnetBkT4WHdkEwF4ceJOM0=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/148h3ZWq0grwg0xI5QIn2XB7hhymZJmaJ=k",
    Texto:
      "Apresentamos com orgulho três filmes distintos, produzidos para a Goodyear, na sua pista de provas. Cada filme é uma ode à excelência da Goodyear em diferentes categorias de pneus: alta performance, off-road e um inovador filme que combina velocidade com efeitos em 3D. Utilizamos drones, camera car e grua para capturar cenas vibrantes em pistas secas, molhadas e em terrenos desafiadores como terra e pedras. Esta trilogia não só demonstra a qualidade superior dos pneus Goodyear, mas também a habilidade da SimonSays Filmes em criar experiências visuais imersivas e dinâmicas, ressaltando a fusão entre alta tecnologia e design inovador dos produtos Goodyear.",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Goodyear",
    Título: "Perfomance",
    Subtítulo: "",
    YouTube: "https://youtu.be/rcL684GaVZs",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1QJ6_jOxCL3EY08Er9TNG2gvFLRlpkTRB=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1QA4yAdEkc4wMRGZqZC9FRKk5xgT7F-g2=k",
    Texto:
      "Apresentamos com orgulho três filmes distintos, produzidos para a Goodyear, na sua pista de provas. Cada filme é uma ode à excelência da Goodyear em diferentes categorias de pneus: alta performance, off-road e um inovador filme que combina velocidade com efeitos em 3D. Utilizamos drones, camera car e grua para capturar cenas vibrantes em pistas secas, molhadas e em terrenos desafiadores como terra e pedras. Esta trilogia não só demonstra a qualidade superior dos pneus Goodyear, mas também a habilidade da SimonSays Filmes em criar experiências visuais imersivas e dinâmicas, ressaltando a fusão entre alta tecnologia e design inovador dos produtos Goodyear.",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Sanasa",
    Título: "Uso Consciente da Água",
    Subtítulo: "Vazamento",
    YouTube: "https://youtu.be/Ju3oha2e68E",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/14HoLT57DaMsrtSuId44_zkCFhwrsk1pE=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/14B0sAVpGMn2CO64glfQQG9lX1kB1bZLR=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Sanasa",
    Título: "Uso Consciente da Água",
    Subtítulo: "Rede de Esgoto",
    YouTube: "https://youtu.be/j51jlCYcKms",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/14QQX44FY8kVV9mSJt-_ahjHmMU6sU0j0=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/14Qdud-VFaTp_WYjfXey1YwrMRZmKVSHb=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Sanasa",
    Título: "Uso Consciente da Água",
    Subtítulo: "Construção",
    YouTube: "https://youtu.be/e4Bt54HRUOU",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/14UmHkNwIZoPBYZ8nfdFneHXisM_Avpcl=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/14Sobr10Oz0kBjJwZDrbRa26EATpOVnif=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Sanasa",
    Título: "Uso Consciente da Água",
    Subtítulo: "Uso Correto",
    YouTube: "https://youtu.be/bf13dUmr_Xs?si=8w6d0Zon9teGGqM-",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/14cb_-nybrpZUk9lAHcanSfXkWOExzKFS=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/14ZeKqLE1M3_UUmpdvQ1iiCIm7zR8kfOO=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "FTD Educação",
    Título: "Lançamento FTD Sistema de Ensino",
    Subtítulo: "",
    YouTube: "https://www.youtube.com/watch?v=6jovYBPkfSg",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/15IfodJgvXC2AHoYh5B6l1XyMo95nHCVb=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/15BVOo4NEdlJ2lhfxvxznjMM9oDGieYUA=k",
    Texto:
      "A SimonSays Filmes teve o privilégio de trabalhar com Felipe Castanhari em um projeto inovador. Para atender à agenda movimentada de Castanhari, montamos um estúdio dentro de um resort e fechamos um autódromo, criando cenas espetaculares de carros em alta velocidade. Empregamos tecnologias avançadas, como drones, microcâmeras e câmeras de cinema, complementadas por motion graphics sofisticados. O roteiro, tanto inovador quanto cativante, juntamente com a presença magnética de Castanhari, culminou em uma campanha bem-sucedida que harmonizou educação, entretenimento e excelência técnica.",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: true,

    Cliente: "Ministério da Saúde",
    Título: "Doutor Gotinha Responde",
    Subtítulo: "Parte 1",
    YouTube: "https://youtube.com/shorts/mEkDrrGJw4g",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1S0x--Uvjnc2GvIOqq7ICjo26myP2X84U=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1--N84fqSicrhERQfZWzvwvOpcQw5nXuC=k",
    Texto:
      'Para a campanha "Dr. Gotinha Responde" do Ministério da Saúde, a SimonSays Filmes desenvolveu quatro filmes distintos, filmados em 4K para garantir a mais alta qualidade visual. A produção contou com a participação de um elenco real, adicionando autenticidade e impacto às mensagens sobre a importância da vacinação. Utilizando tecnologias de ponta como motion graphics e animação 3D, a equipe trouxe o Zé Gotinha à vida, criando um ambiente educativo e cativante. Essa série, eficientemente produzida em uma única diária, exemplifica a capacidade da SimonSays Filmes de combinar conteúdo relevante com excelência técnica, ',
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Ministério da Saúde",
    Título: "Doutor Gotinha Responde",
    Subtítulo: "Parte 2",
    YouTube: "https://youtube.com/shorts/8xM6s64ckmo",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1ZfgWRWgm0PsaM0vc_E1w27Tir35oDt3b=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1N_vM6Yx1jEoFvQMAU1T6_NfCEV5QzesF=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Ministério da Saúde",
    Título: "Doutor Gotinha Responde",
    Subtítulo: "Parte 3",
    YouTube: "https://youtube.com/shorts/hBJHLsjCxNU",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1NkQVBWmByFSNvvhGV19EXgtByvlN4MdA=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1hdsVXakE_HVVI9uAb1DAGMg_O4jWiWVr=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Ministério da Saúde",
    Título: "Doutor Gotinha Responde",
    Subtítulo: "Parte 4",
    YouTube: "https://youtube.com/shorts/MNjIHkmqkBg",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1V6HU74gyBi1IA2iQPAWFHjKUJsvUzFCK=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1G8iqWRlpBNyJa3pdlY2RKuCOIhrkmkyM=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Mini",
    Título: "Mini Connected",
    Subtítulo: "",
    YouTube: "https://youtu.be/Cm6l8FyxM4Y",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/14zY_uep4BlyNwplVWPwF127W8cZdG2TV=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/156VT8RsIdeexcKOtYKSPw2cDKpovHMfu=k",
    Texto:
      "Para a campanha do Mini Connected, a SimonSays Filmes produziu uma série de filmes que incluem dois principais de 60 e 30 segundos, juntamente com versões estendidas de 80 segundos para a internet, além de sete filmes específicos para redes sociais. A produção ocorreu em um estúdio espaçoso, equipado com recursos como grua, dolly e iluminação especial, garantindo que o Mini Connected fosse o destaque.\n\nNa pós-produção, houve um foco dedicado à edição de alta qualidade, gráficos e efeitos visuais, garantindo um resultado final impressionante.\n\nAlém disso, a campanha contou com um elenco diversificado composto por mais de 10 pessoas. A produção meticulosa de acessórios, como relógios, anéis e paletós, foi essencial para personificar o usuário do Mini Connected. Esses detalhes adicionaram autenticidade e sofisticação à produção, destacando a precisão e o requinte do trabalho realizado.",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Mini",
    Título: "Mini Connected",
    Subtítulo: "Redes Sociais",
    YouTube: "https://youtu.be/wwfQtI3PwTg",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/158aLvgJ67HEXuSNN3jS5N4TbDyURfXtl=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/159tvEBYOTgfz0HD7cJhkPQTnlz94949r=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Localiza",
    Título: "Localiza e você na mesma direção",
    Subtítulo: "Carreto",
    YouTube: "https://youtu.be/OdLYJKvYSMc",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/18oEM10Ux6g9byl4-6IDTQIcutAtVKuRz=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/18pEa5E9IGWVhwf1Ybul_mz5fHqEcarPc=k",
    Texto:
      "Para a campanha da Localiza Rent a Car, a SimonSays Filmes produziu uma série de sete filmes, cada um com 30 segundos de duração para a internet no formato 16:9. A produção foi realizada em um estúdio especialmente preparado para filmar dentro de um carro, proporcionando uma experiência única. Com um grande elenco e roteiros variados, cada filme destacou diferentes aspectos dos serviços e acomodações da Localiza. A produção incluiu iluminação especial para realçar a qualidade dos carros e serviços da Localiza, além de pós-produção de alta qualidade para garantir mensagens claras e envolventes.",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Localiza",
    Título: "Localiza e você na mesma direção",
    Subtítulo: "Uber",
    YouTube: "https://youtu.be/RDc2N2TWzqo",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/18pPYd4Yyb-Y-hOqbeFf-FmwUT6A9ZmTN=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/18qUISd38Sbu-WH7MVmEhqIL2n6QQ-kYB=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Localiza",
    Título: "Localiza e você na mesma direção",
    Subtítulo: "Lolla",
    YouTube: "https://youtu.be/Uhot7M6iFZE",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/18rLFrT3B0ugipJbSyhv5SfLWQyqHqRSj=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/18r9LC-gHvQUUdKQwd0qAvaOWJYHQrBgx=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Localiza",
    Título: "Localiza e você na mesma direção",
    Subtítulo: "Bira",
    YouTube: "https://youtu.be/aHRBv9DyA9Q",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/18xskW2vF8d-lbkpzcPkYy4VTu7DtDZ0o=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/18vBNi2ZnpOctlsQ4R5uVgA4jG1gStltf=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Localiza",
    Título: "Localiza e você na mesma direção",
    Subtítulo: "Peruas",
    YouTube: "https://youtu.be/azRulD189NA",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/18zRA2xY-zv4p7tnTVfCaT5KQyMR_VVJA=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/18yYyk3P4im4qZ6LOWpc1tyDU2MSNQMTR=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Localiza",
    Título: "Localiza e você na mesma direção",
    Subtítulo: "Vampiro",
    YouTube: "https://youtu.be/BM8H7VPJ-Yk",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/19-2JVkzClnWm2r25HztwO11i1k3zRqTm=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/19-LzxOhgPuXNudqg5VTqc8sK1t1fwlqV=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Prefeitura de Osasco",
    Título: "Osasco 58 anos",
    Subtítulo: "",
    YouTube: "https://youtu.be/IVTuwKnBqe8",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1IQQ8rD56CNAztlP0d_TrBBvXtWQKIR39=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1IPKrO4Q7170jnrgQyHOcJqqmXp7ZNgzt=k",
    Texto:
      "A produção de um filme especial para comemorar os 58 anos da cidade de Osasco foi uma celebração da identidade e comunidade local. O filme contou com um elenco composto exclusivamente por cidadãos osasquenses, destacando a autenticidade da cidade. Locações icônicas de Osasco foram escolhidas como cenários, permitindo que os espectadores se reconhecessem na paisagem. Além disso, a colaboração ativa da comunidade enriqueceu a narrativa, refletindo o espírito comunitário que define Osasco.\n\nEssa produção representa o compromisso da SimonSays Filmes em criar conteúdo que conecta e celebra comunidades, destacando a identidade única de Osasco e seu compromisso com a autenticidade e a colaboração.",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Prefeitura de Osasco",
    Título: "Participa Osasco",
    Subtítulo: "",
    YouTube: "https://youtu.be/7AIKyaTdd28",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1COr_wBD_w2YuZz_cAFpN2-iZawGTz30a=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1CJ0DT2qTBawFGdJrzHCsAWfTk5H7ey43=k",
    Texto:
      "A SimonSays Filmes criou uma série de quatro filmes para o programa PARTICIPA OSASCO. Cada filme é como uma peça de um quebra-cabeça que revela a imagem completa da comunidade osasquense, destacando programas-chave da prefeitura, como saúde, habitação, educação e segurança. Com meticulosidade na montagem das peças, esses filmes ressaltam a importância desses programas na vida da comunidade. A produção exemplifica o compromisso da SimonSays Filmes em criar conteúdo envolvente e de qualidade.",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Fumcad",
    Título: "Reflexo",
    Subtítulo: "",
    YouTube: "https://youtu.be/sYX20-XYA3o",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/12yvIaSWQMdzVHZqkvroDRr6GVxyCNw8V=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/12yILVSDNB502WnwwJv9-MuCjKnyFuL8W=k",
    Texto:
      "Filme encomendado pela Prefeitura de Osasco é uma produção de alta qualidade, filmado em locações cuidadosamente selecionadas, com um elenco e figurinos bem escolhidos. Além disso, a produção incluiu a produção de objetos especiais para enriquecer a narrativa, demonstrando o compromisso com a excelência.",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Fumcad",
    Título: "Dragão",
    Subtítulo: "",
    YouTube: "https://youtu.be/qPAgY2A0IKk",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/14sdCW4VPVtxCl0LwlqBY4kHjoJZ1qeIJ=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/14xJ3PYKrwLc76UytUhd5c43ooVWPijth=k",
    Texto:
      "Fundo Municipal dos Direitos da Criança e do Adolescente (FUMCAD) da Prefeitura de São Paulo busca beneficiar projetos de entidades aprovados pelo Conselho Municipal dos Direitos da Criança e Adolescente (CMDCA). São muitos projetos de assistência, educação e etc visando o desenvolvimento da criança e do adolescente. A SimonSays teve a oportunidade de produzir um vídeo para o Fumcad Osasco conscientizar e solicitar doações ao projeto.",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Zeiss",
    Título: "Zeiss UV Protect",
    Subtítulo: "",
    YouTube: "https://youtu.be/G1phj3AbeZI",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1B78B7rJoIVgJsvnOKiDB-dUh7Dz1VQe_=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1B0xHvj_440unXT3DI82tAlrSe2loS0Zj=k",
    Texto:
      "Nossa produção para a Campanha Zeiss | UV Protect é uma perfeita harmonia entre tecnologia e criatividade. Utilizando técnicas avançadas de chroma-key e a eficaz ferramenta NUKE, transportamos nosso elenco para cenários deslumbrantes a partir de imagens reais de banco de imagens. Cada cena é uma obra-prima visual que destaca a importância da proteção UV.",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Starbucks",
    Título: "Starbucks Refreshers",
    Subtítulo: "",
    YouTube: "https://youtu.be/VdadW8Ygo_o",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1BdhEzBYcXDwHfzv5cUjeX2qADNdxEOPD=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1Ba2cbbLHUrs6L5R-zQwOKPmb84UCcHo4=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "ESPM",
    Título: "ESPM Transforma o seu Mundo",
    Subtítulo: "",
    YouTube: "https://youtu.be/diH5bJwSvoo",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1CeXFz5cOsTjAUQLDb2ZMFRg0HtlJFCda=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1CZm8DEi--zzxKqVxExDNGloqQ61xdbwl=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Safra",
    Título: "SafraPay Eu Escolhi",
    Subtítulo: "Melhores Condições",
    YouTube: "https://youtu.be/6tq-gbcv0Qw",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1LczmUlt5ZYouUN5vTURFakP-V0ExZVoF=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1LZY5NffRIM0x0m0SplWU1i_UDshRmzE6=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Safra",
    Título: "SafraPay Eu Escolhi",
    Subtítulo: "Atendimento Personalizado",
    YouTube: "https://youtu.be/P-hUb4TqHS0",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1LTyxa6JbjMQYlhewxMHu7klJNqqthZaD=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1LJt4V7hVe-6xZ0dG2yMIBIoAbFn1LmOQ=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Safra",
    Título: "SafraPay Eu Escolhi",
    Subtítulo: "Pagar Menos",
    YouTube: "https://youtu.be/EZS-Fq7zpZk",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1LHodyGben5e3AGY2Rk35ovq4Ug3qI-MZ=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1LAtAgQFURu_j8Be48KhixsO-h7GF83jR=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Central Farma",
    Título: "Central Farma - Central Nutrition",
    Subtítulo: "",
    YouTube: "https://youtu.be/0_lYCEf9nYs",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1BZPCO-Hs-E5RlimkyGYDh0KuDgl2SwtB=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1B_njizblOIAMI-S7g0JTVBcrBV8qzwAj=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Osasco",
    Título: "Corona Abraço",
    Subtítulo: "",
    YouTube: "https://youtu.be/-OOlYhhJMqM",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1N3NnXDTnJ95TnumYvJg5mcXf46mglzUY=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1N382TQ4hr3BHgz9yaufEURcrzS6F_fJ7=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Sanasa ",
    Título: "Dia Mundial da Água",
    Subtítulo: "",
    YouTube: "https://youtu.be/PPDwmfTR1oM",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1Oi-N9Bqt_jSeCa2k5UKPavKt02HE9y6u=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1OfYSx2d6_z7CQSqFF5e44X5u9w8O811Q=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Prefeitura de Cotia",
    Título: "Cotia como você nunca viu!",
    Subtítulo: "Saúde",
    YouTube: "https://youtu.be/T9L3GzMAg7A",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/18P_Ic99lMSIh3hRUSLD_u-5w9nF7nRXn=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/18PK0i7ems8hobRc938vog9_Lfe0mRR3p=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Prefeitura de Cotia",
    Título: "Cotia como você nunca viu!",
    Subtítulo: "Cidadania",
    YouTube: "https://youtu.be/0uw2Gk-WRk4",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/18fF45jdEL4x_qF3SGWRy_Ec1e97qMEex=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/18YaklCjnzzDB8Bs6TeVas25RELLge0UD=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Prefeitura de Cotia",
    Título: "Cotia como você nunca viu!",
    Subtítulo: "Mobilidade Urbana",
    YouTube: "https://youtu.be/OUJwEFvpeKY",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/18Y3FKF35Z9V7biV8DVcSsSUWqbLVzrAR=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/18Wsqg7Ws9rZIyyXmAU58YfC7MUI1q3Xd=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Prefeitura de Cotia",
    Título: "Cotia como você nunca viu!",
    Subtítulo: "Educaçao",
    YouTube: "https://youtu.be/MOV2jA3CsnE",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/18VGQQyzDOypQdUYbwpZIXgdTtTkgQagb=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/18Sfy7xef4vb4CPVcHc5iVM2hZM3aMtSW=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Prefeitura de Cotia",
    Título: "Cotia como você nunca viu!",
    Subtítulo: "Investimento",
    YouTube: "https://youtu.be/ASFmEnW8dnE",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/18mVGP0-cznfByxIedqba7ptpVhKC7XI8=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/18fFOAXxdM8rnCDaZoMDHI9U0JXQ5GreP=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Prefeitura de Cotia",
    Título: "Cotia como você nunca viu!",
    Subtítulo: "Mãe Cotiana",
    YouTube: "https://youtu.be/trpBwU78zP8",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/18mcTUQ9iEuJMMuyUehgWXY7x3J68F9av=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/18mVm_cRe9Tj9CZVWywtmlAHG8-dG7uLh=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "CFM",
    Título: "Saúde no Brasil",
    Subtítulo: "",
    YouTube: "https://youtu.be/Tau6KXDVAIM",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1QUQXvgRbmTFoj66Qde0p4YKzswiEeZQD=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1QPm-BmUoyVaZX2iwSz-qoBPH1ZFGlcgB=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "FMU ",
    Título: "Vestibular FMU",
    Subtítulo: "",
    YouTube: "https://youtu.be/AJ3gIFJMqJ8",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1O7Yn70d18UfPdV0PCR66l7ijVNe3r36V=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1Ny9Q1xaGoKlPR4Bkz_eFX5s07DApKIo-=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Safra",
    Título: "Ajuda o Dono",
    Subtítulo: "Imposto de Renda do Pequeno",
    YouTube: "https://youtu.be/R4_XcqXjXcI",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1XuwRnJOChHiuN9pJCsvn4PxfaVvzAXrV=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1Xsfsh5M5oSH_ccrJwzQ2LXdWLUusB0md=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Safra",
    Título: "Ajuda o Dono",
    Subtítulo: "Declaração anual do MEI",
    YouTube: "https://youtu.be/f93HCQ8D6TA",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1YNtFIEpem7l4kFphU5DJmyK0djUUPh0t=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1YCv4qFtOw0_kj71B4kBi3dj_bwTRuJ-2=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Safra",
    Título: "Ajuda o Dono",
    Subtítulo: "O empreendedor é obrigado a emitir a nota fiscal eletrônica?",
    YouTube: "https://youtu.be/HkyPf3soK0A",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1Y4dIAKky60JqH5xVvDGfaYCZo2hE9r3v=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1Y3CsUWz-Hz_SSkNPzI9Ve2kDwjsA-0Gr=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Safra",
    Título: "Ajuda o Dono",
    Subtítulo: "Direitos e deveres do MEI",
    YouTube: "https://youtu.be/kw9xpbLgv-8",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1Y2z6mP0VhvX8AYeQsnHpnr6Zk_QldGSR=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1XyGCSu6Y2919YH_0i1J9eUQ3Xayf35F4=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Batata Inglesa",
    Título: "Batata Inglesa",
    Subtítulo: "",
    YouTube: "https://youtu.be/GSqPxtuw3Zo",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1CPUv_hVXIqXQQZb5fw60wZ__pOFthPrw=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1CRB2-K46SxwRi4XsfW34WQLWsuShldzn=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Di Pollini",
    Título: "Di Pollini Artesão",
    Subtítulo: "",
    YouTube: "https://youtu.be/4-YUNaCCXBM",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1NnpnsNYZJaIf0d5JGwTVmdgZcCxPott4=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1NlmTTyZ79SF7x1NaYp9SHZ3-y654f4sN=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Guarani",
    Título: "Independência",
    Subtítulo: "",
    YouTube: "https://youtu.be/l-OpiotvaaU",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1DhY_x76HoHDeNxiH6gnQDVXas713zFkb=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1DpCAioDQKELkL7C2XLjjcgDEZ48aiQbj=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Tecnhos",
    Título: "Technos Skydiver",
    Subtítulo: "",
    YouTube: "https://youtu.be/INxoXJeuFeM",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1Dsh5cEBo_s7hASVnjVMB2dl19gC8DgEM=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1DulN-NB58zpONZ-8UifCMBvId9NzHQXA=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Lifan",
    Título: "Vendas Lifan",
    Subtítulo: "",
    YouTube: "https://youtu.be/Yoi9W6sAfI0",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1IKPn_yFJxHu4VaAlEJoXPhlype1EMa2b=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1IF-g_cZMaPMkuqp5-rdIoVJVvmxEz1SN=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Pfizer",
    Título: "Geração Z",
    Subtítulo: "",
    YouTube: "https://youtu.be/wFkh479tVEo",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1GYafmAhrs4z5m7JDa7SOZiRKZy8jttL1=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1Gj6Gmu-jZlfrdDljyIWdXrEb4oNEhrjS=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Gou Odonto",
    Título: "Gou odonto | Clínicas de Odontologia",
    Subtítulo: "",
    YouTube: "https://youtu.be/kE1ZdLrqSII",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1NdIzsEp5Aqu7YvkDx00CP9Nh0ZTXp-Fk=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1NXEUlls-LyxZVls-z_2vfs72rJotRvPj=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "BMW",
    Título: "BMW Motorrad R1200",
    Subtítulo: "",
    YouTube: "https://youtu.be/H9bQfGkji0c",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1OFGYWFeMiMXcMtJBAzOAsLFmRZ5yBm3Q=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1O7o_t4dwv9VNbUMNV1Dn9BgtBGrK8Xtm=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Forma",
    Título: "Camp Experience",
    Subtítulo: "",
    YouTube: "https://youtu.be/uphz4Ixfnc0",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1V9aDg-S0yit0m-mb08n7LkWbv-uinIiU=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1V-zPZtYsnW3dKh8qOERV7BNfA-rq5j4C=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Rio Branco",
    Título: "Construtora Rio Branco",
    Subtítulo: "",
    YouTube: "https://youtu.be/2tUGBwqqVjQ",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1L5URwJmnV-S7AJlFurwoL7xyZ31vP8CS=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1KzQJHOkbyWCGlSTV22MyggECl40hY0HI=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Dailus",
    Título: "Dailus Colors",
    Subtítulo: '"',
    YouTube: '"',
    "Thumb miniatura": "https://youtu.be/bgRoj0I_F_o",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1Ob-3aY1ZD7Q0hxOlGA65iGyvXEXGV7rV=k",
    Texto: "https://lh3.google.com/u/0/d/1OQfFqI5eId70VE4K4g2SmtLVHo9hdV2m=k",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Yamaha",
    Título: "Mega Feirão Yamaha",
    Subtítulo: "",
    YouTube: "https://youtu.be/BOFxu8m9d8U",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1NWhW2eq9fCFfUlI4o3SccLY6rPFaqboZ=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1NUx_SWx-fBJVY_8PZDazWB10FNOA12wA=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Forma",
    Título: "Viajem da sua vida",
    Subtítulo: "",
    YouTube: "https://youtu.be/aLVN2soaevs",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1NMd6VMAiCHejFMB647vyCGdpOb1UTkST=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1NLsqE27pQiBB9fq2FYwn1lhWcC8pBpOJ=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Agaxtur",
    Título: "Viajar é Preciso",
    Subtítulo: "",
    YouTube: "https://youtu.be/t_Z5F15b5cI",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1NkskHfSnXDVyszYFEZNy-A-V_5YRJi3w=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1MqL7xLmZN3UC0DnB-h5iAeUAr4xt_8l1=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Café Brasileiro",
    Título: "Café Brasileiro",
    Subtítulo: "",
    YouTube: "https://youtu.be/DjKN85z0wjU",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1ZAGbaYzBvrzRw4MiniChjxQtAotlnb1M=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1ZC0rdWboUvDEncG4KQ21c1cO9THilD9n=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Yamaha",
    Título: "Sonhos",
    Subtítulo: "",
    YouTube: "https://youtu.be/t9EBdlC5cRU",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1Q3rHovWfUw3g4DoGRtqIyU_YhTzycOeD=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1Q3lgiKmrGW2xMfujpVU3jYoTQoHAzsSN=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Ministério da Educaçào",
    Título: "OBMEP | Olimpíadas de Matemática",
    Subtítulo: "",
    YouTube: "https://youtu.be/Kjwyn0puhMs",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1PLt0lX-hWmvt4nV0oFPZl7ZjoZrOhfgS=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1PKmOav3aB4tGqoBZQzBKvsOAUPScY_a8=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Colégio Marista",
    Título: "Colégio Marista",
    Subtítulo: "",
    YouTube: "https://youtu.be/2eQh4fPHti8",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1PFUVIXxgCZsKXsKpT35f0fH1C-wN7gL6=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1PAtyb2Sz-ESvi037jmHnBABw0Kna_HrO=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Pastelândia",
    Título: "Pastelândia",
    Subtítulo: "",
    YouTube: "https://youtu.be/-p5mkinE48E",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1P7eOtdhjsBPt_kC0_HmByGkzYnza9xxf=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1P4qijgD-qCxv8wFSiqT2iAuLf_wSJeum=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Goodyear",
    Título: "Boas Festas",
    Subtítulo: "",
    YouTube: "https://youtu.be/jjqO8xembx4",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1Murb7S6qwV9anrrtR_rQKyctduDOnhLk=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1MsDQdA6tHNQPVWpodWC1KtM3NYmVWIOi=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: true,

    Cliente: "CBC",
    Título: "Institucional 96 Anos",
    Subtítulo: "",
    YouTube: "https://youtu.be/peB2AldqgpQ",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/13WDZ4Ag-bQS3JMsmFvG1UIPeCC4AllO8=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/13Y3Gmm1rm4tXw8pgodsYN8dQTH16OFk2=k",
    Texto:
      "Uma produção notável da SimonSays Filmes, criada para celebrar os 96 anos de história e excelência da CBC - Companhia Brasileira de Cartuchos. Realizado em locações impressionantes em São Paulo, Ribeirão Pires e Porto Alegre, este projeto de quatro dias capturou a essência e o legado da CBC através de cenas aéreas espetaculares e cinematografia de alta qualidade.\n\nO roteiro, desenvolvido por nossa equipe interna, foi meticulosamente criado para destacar a força, precisão e confiabilidade dos produtos da CBC, refletindo seu compromisso com a inovação e segurança. Além disso, visando alcançar uma audiência global, produzimos versões do filme em inglês e espanhol. Esta iniciativa sublinha o compromisso da SimonSays Filmes com a criação de conteúdos audiovisuais que combinam qualidade, criatividade e apelo internacional.",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: true,

    Cliente: "Protege",
    Título: "Institucional Protege 50 Anos",
    Subtítulo: "",
    YouTube: "https://youtu.be/qnQeiOs3JHE",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1AxQPnmkx8j6NCG5mrhPkDyUQQwZJai_e=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1Af3QOfV0jGG6-vvZJ35EjizFLFEn2kk9=k",
    Texto:
      "Criada para celebrar cinco décadas de história e excelência do Grupo Protege. Filmado nas impressionantes locações da sede da Protege em São Paulo, esse projeto de tres dias capturou a essência e o legado da Protege com cenas aéreas espetaculares e cinematografia de alta qualidade.\n\nNosso roteiro, meticulosamente elaborado por nossa equipe interna, destaca o compromisso da Protege com segurança e logística.",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "CBF",
    Título: "CBF Academy",
    Subtítulo: "",
    YouTube: "https://youtu.be/OTXms7cTxWw",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/11ssLV_gOyod9H5acyEioCcGoqAoC_9jM=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/11vtc78bhLZRsWTVRdS0T1xwCNgYzjuNb=k",
    Texto:
      "Produzido para a CBC Academy, que reúne jogadores, juízes e líderes da CBC. Filmamos nas impressionantes locações da sede da CBC no Rio de Janeiro, esse projeto de quatro dias capturou a essência e o legado da CBC Academy com cenas aéreas espetaculares e cinematografia de alta qualidade.\n\nNosso roteiro, meticulosamente elaborado por nossa equipe interna, destaca o compromisso da CBC Academy com o desenvolvimento esportivo. Cada quadro reflete a dedicação em promover o esporte e a formação de novos talentos, reforçando que, para nós, não se trata apenas de uma produção, mas sim de uma parceria dedicada ao sucesso no esporte.",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Eucatex",
    Título: "MDP Perfect",
    Subtítulo: "",
    YouTube: "https://youtu.be/rfa3o3qmbD4",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/13wM9wntW3ujTn9_ZQVNc6o8gkEyyHUi4=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/140HTOUXvip_AGtyha06B3YLL0D7dyFgi=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Vtex",
    Título: "Vtex Live Shopping",
    Subtítulo: "",
    YouTube: "https://youtu.be/FKcbcxzmOhE",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1T68gBE6cHMUauEpo4JVBAOWFHoS_hsbX=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1TiUWdQdmp7OuF1G2yn2umfwdlnrUVx81=k",
    Texto:
      "O VTEX Live Shopping App é a solução nativa de experiências de compras ao vivo que está revolucionando o mercado global, e a SimonSays teve o privilégio de produzir um vídeo promocional para a plataforma em inglês, que também foi traduzido para o português, croata, francês e espanhol. Além disso, conduzimos uma transmissão ao vivo completa em inglês sobre a plataforma, com tradução simultânea para o português.\n\nAtualmente, mais de 100 empresas de 10 países já adotaram a ferramenta da VTEX, demonstrando a expansão global e o impacto dessa plataforma inovadora.",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Localiza",
    Título: "Fidelidade",
    Subtítulo: "",
    YouTube: "https://youtu.be/gbRKmnF_oM4",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/199sdGQeiH9PjUn8gwNj0K91pM6mcGhZ3=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/195Efa9OEIB2qHvFnpscmJ0w9fAqnaL7w=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Cabos Cordeiro",
    Título: "Institucional Cabos Cordeiro",
    Subtítulo: "",
    YouTube: "https://youtu.be/VmPMAS_4e1Q",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1GNVxGIqMU5Zt7b7uzNrPOIycJHz_XnIn=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1GMnnyTETxH74n-w21xQcIzhDAuXu4QJ4=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Sanasa",
    Título: "Institucional Sanasa",
    Subtítulo: "",
    YouTube: "https://youtu.be/UF2Rs63dB78",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1KxVwJMY3WrY6EolpWIikJFm60vehFKWH=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1KwPhwMYrUM7FjyVf_zwj-Fj9qz2NZuja=k",
    Texto:
      "Neste projeto, mergulhamos nas operações da SANASA para desvendar o processo de purificação da água que abastece a cidade.\n\nForam três dias de intensa filmagem, durante os quais capturamos cada etapa do complexo processo de tratamento da água, desde a captação até a distribuição segura para a população.",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Caoa Chery",
    Título: "Lançamento Tiggo 7 Pro",
    Subtítulo: "",
    YouTube: "https://youtu.be/XNMQb7M8G6g?si=e4jIlZchDVQO4-Z1",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/13azsuee5BXEiqeaJ80wEQ6GRq_5LUiaJ=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/13cYaEMxR0lOrR7JLSbAASE5CcKQbl-vj=k",
    Texto:
      "Vídeo exclusivo de Lançamento do novo Tiggo 7 Pro , totalmente produzido pela Simonsays Filmes. Além do vídeo de lançamento explicando todas as características do carro produzimos também 35 pílulas para as redes sociais.",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Cosmotec",
    Título: "Institucional Cosmotec",
    Subtítulo: "",
    YouTube: "https://youtu.be/fzDu3oVEQ0E",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1BC6NAJL52oAMj4K-mNqbOK4KVlDSFARP=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1BDjDsR0N8M8dyU0yFTPkHVuPsorxTb08=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Du Pond",
    Título: "Kevlar Du Pond",
    Subtítulo: "",
    YouTube: "https://youtu.be/InsZ9ndKiWM",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1KXstFu_XVeXltiuI2ysDw748kbRuRXk5=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1KXUwClFGEc99f18b2CRxVuEODJnWNKEp=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Oxiteno",
    Título: "Oxiteno",
    Subtítulo: "",
    YouTube: "https://youtu.be/DX1KA1PNCCA",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1Jy3EJ34kLBSdT1jyNmknpNfHDMOSsa1P=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1JwLZVOS9bTVNinY3oN_vtLh4UxfIaZ-Y=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Abbvie",
    Título: "Humanizar",
    Subtítulo: "",
    YouTube: "https://youtu.be/06W0PrmIEaI",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1XHkvxaZtyqajiAF34heJOlhkeOqGCIw6=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1XQCsWwAq7Pc_fgHzQQo7CyY6S27Z_eiP=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Caixa",
    Título: "Caixa Mastercard Promoção de Casa Cheia",
    Subtítulo: "",
    YouTube: "https://youtu.be/xW86zIbDqig",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1Ivr0jCkzCimpJGcRZFQm25f7gzC7bGJ2=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1It3WMCG6I4oiPwdgeyjfMCP2XUm0-Xeb=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Abbvie",
    Título: "Retocolite Ulcerativa",
    Subtítulo: "",
    YouTube: "https://youtu.be/r9O-rMJN658",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1XYWz9S4FTJ2UgcWzcpYEvdtQcQ_6dJQg=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1XUVVG0jQ6HFcVeDgmzv88NFek8HGrmZy=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Caixa",
    Título: "Caixa Mastercard Afluent",
    Subtítulo: "",
    YouTube: "https://youtu.be/AGybaRT1PQo",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1ITU5iBEOpEUx8KqYx5H7GwVDT8D3PLB3=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1Iz-l2ilSav1u62pNR4y8mP7FNYz9c9Jb=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Petronas",
    Título: "Institucional Petronas",
    Subtítulo: "",
    YouTube: "https://youtu.be/FEuQ_3SzY08",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1BHkJHXp-FyjUosKkpz_Hds9s7TEHx9YO=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1BPe6rbLQe3YHwprcfHqg75rdrBI0fPQ4=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Mccain",
    Título: "Mccain Chef SureCrisp",
    Subtítulo: "",
    YouTube: "https://youtu.be/wJ6J0xGLPLc",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1Cz5W6r5HTk-2IqcRe-zTSC5RTAbNIWHu=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1D-ph3MVoD1FRkxbTVf9-bKPaMzCrCL1s=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Enxuto",
    Título: "Enxuto 60 anos",
    Subtítulo: "",
    YouTube: "https://youtu.be/BziKQe2igyw",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1Wu4JOzsWBaAvKEksnlswan1enrwQ0sI1=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1WsOd4FmcEY5529iyZXgofRUiiSz1LQZF=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Jeep",
    Título: "Jeep Experience",
    Subtítulo: "Curitiba",
    YouTube: "https://youtu.be/LqdiYDm79g8",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1StIV6cszGh3XgSYq-DFuZtxCX8AyUBXz=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1SsZoBr781VUQj7uoxISN_KS6KFUNlB2o=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Jeep",
    Título: "Jeep Experience",
    Subtítulo: "Belo Horizonte",
    YouTube: "https://youtu.be/Rm6TlsuJuQ4",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1SrsvoVfKmC-b4Eg0BwtEEQZj0qI-c9aL=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1SriU80gEp-njLcqazHMiajNqgaNxiVzg=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Cognita",
    Título: "Colégio Cidade Jardim Playpen",
    Subtítulo: "Matrículas Abertas",
    YouTube: "https://youtu.be/KO1t7eT_wRU",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1W5UA2oBmllFDacKefHUMi-YZJnYYtAdX=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1WSd4gV8D-8ShG7LLW-6v2hUltHfB3O85=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Cognita",
    Título: "Colégio Cidade Jardim Playpen",
    Subtítulo: "Matrículas Abertas 30s",
    YouTube: "https://youtu.be/DdMGp1PiPwc",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1WOWCyd3gKLMyMn-wq58NuS-uwH8NKZWl=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1WN5z4cDzhQAnESWjVHtc0fK-qksOh0tM=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Cognita",
    Título: "Colégio Cidade Jardim Playpen",
    Subtítulo: "Matrículas Abertas 9x16",
    YouTube: "https://youtu.be/k4us-DrBoww",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1WIX3_xl8wAl2RkpKDb8nN-nxjG-q4njq=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1WGzwCTcIY-TMxS0nfeapdRjTOIMSM6-5=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Cognita",
    Título: "Colégio Cidade Jardim Playpen",
    Subtítulo: "Matrículas Abertas 30s 9x16",
    YouTube: "https://youtube.com/shorts/Bh1bm1tJjXA",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1WBeCmFCxQqqo_bwoJ0oTJzKdUEmenYP5=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1WBVhDNRdEDChdyDWCY3Nl8-dmoYl9Xfd=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "XP Investimentos",
    Título: "Investir Juntos",
    Subtítulo: "",
    YouTube: "https://youtu.be/F_2qsnnKIKU",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1CkiETHpigYSJjHKO_qcC4peoXg7cLeVf=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1Cpu9yCZ5sWku-6lCrdpp1vPkrhZAWfUH=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Cognita",
    Título: "Colégio Villares",
    Subtítulo: "Escolha para a Vida",
    YouTube: "https://youtu.be/AK2HkF4cliQ",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1WXO374uY2uLeJ8ZIAHoEPQLZ_wJZmg_R=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1WozYWXyfqJNt5jZ6USTV6uhHIy6-0LF2=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Cognita",
    Título: "Colégio Villares",
    Subtítulo: "Escolha para a Vida 9x16",
    YouTube: "https://youtu.be/c9-XTy-OwSo",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1Wov3ihlDTb_bByLwMcv5S8OtxCz5MKDH=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1WnPitEDTe07_Ihk226a2Bgr3ogIWFVAu=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Cognita",
    Título: "Colégio Villares",
    Subtítulo: "Escolha para a Vida 30s",
    YouTube: "https://youtu.be/8vqFludlQbc",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1Wmr5V_0RbZJeJsB0wcCsoBQqcF82J5B9=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1Wm9k-vSGmivGnSAy0VMJjyzIbFZ1np26=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Cognita",
    Título: "Colégio Villares",
    Subtítulo: "Escolha para a Vida 30sd 9x16",
    YouTube: "https://youtube.com/shorts/bHzaNlwUXdU",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1WkBAO-SVgNE3iX1h5n00KRsg3Yj_4sJ5=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1WjWMHQRqq3AWCKN-3vTkH6w0f43jM9Wu=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Travel Rock",
    Título: "Travel Rock",
    Subtítulo: "",
    YouTube: "https://youtu.be/WsYkhyVR_KQ",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1HzI-tvKVmQtAAzsH1Fv3jSgm1phGFvwv=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1Hwnupnd_VVd_Au0Xn5rqcDUKE220krYy=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Osasco",
    Título: "Osasco Depoimentos Coronavírus",
    Subtítulo: "Video 1",
    YouTube: "https://youtu.be/XZwo3OHTUL4",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1XcgDF2yQdY1ajkYxaE3YIymwj8v3jAs2=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1Xs20lGtb1lrR7zRq9c1eaBKB9Xugcxgr=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Osasco",
    Título: "Osasco Depoimentos Coronavírus",
    Subtítulo: "Video 2",
    YouTube: "https://youtu.be/nDDM3t-DQkg",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1XoiWoyHCpaWVjozLCuSAWE95zKFxdOUy=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1XoXUfQ7w7KYdd_gbwiGlaqFrUxJawcw3=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Osasco",
    Título: "Osasco Depoimentos Coronavírus",
    Subtítulo: "Video 3",
    YouTube: "https://youtu.be/6k27tS3T-Hw",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1Xdiwfm2_GvJ7zeIylDxl3bLuK8Wvl1TN=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1XdO7b1la_bTmTbxwTc85Kgs5MBOq9Riz=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "CBC",
    Título: "Novas Armas CBC by Khan",
    Subtítulo: "",
    YouTube: "https://youtu.be/7ipDJi3Amy8",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1BgltH2f6tSLlWu--ayvrGpl2JImK1GfE=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1BjP7sA8O0ZNwa17f-3Mz8iRly_-KrvMU=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "CBC",
    Título: "Review Munição NTA",
    Subtítulo: "",
    YouTube: "https://youtu.be/uuS9N_90yiY",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1BwgX4AG9RamTy5WYFwCTSFh_lFWznhuA=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1BxPJX1UbbeALrvEK3MYqPzdPeegAX5xZ=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Taurus",
    Título: "Review TS9",
    Subtítulo: "",
    YouTube: "https://youtu.be/dUtdgk4llMU",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1C4Bke4GtS1KKhsVuy4ywdK8tCmoCWUkd=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1By5lYnx3ULD8kSw9bvqAnqMGmUrCDtLf=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Happiness",
    Título: "Curso de formação Happiness",
    Subtítulo: "",
    YouTube: "https://youtu.be/uQl21HXigr8",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1PeJMJ0Krs3Bsq6Igb_uq8YoU0gwBox8g=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1PcVfwRDUba3vIuefgxEzDph1JvBIA9jv=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Happiness",
    Título: "Apresentação Método Happiness",
    Subtítulo: "",
    YouTube: "https://youtu.be/u23WHzTARIM",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1PaeuZKttMXMnjZeOUe6EkiZKkjO-4639=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1REwdRt_5sriQ0s5Nbu_iNBes-Rlt0ft9=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Fernandez Mera",
    Título: "Fernandez Mera | Dia do Corretor",
    Subtítulo: "",
    YouTube: "https://youtu.be/p3VLxw8ispc",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1NF1FKYZsXUkQ1rmmKqiIeFjZ9c-P_9j6=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1NCU8IwEPVM_VPERpDWKG_4W1_-ygVdkE=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Credpago",
    Título: "Credpago",
    Subtítulo: "",
    YouTube: "https://youtu.be/XKSFJNNaAzY",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1IEGYw9xEPn2NdqnFcY9PeHFsXC4aErI1=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1ID2ftjmBLhwiOzdprGFjDwSQRDyzg3SO=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Abbvie",
    Título: "SinChronia",
    Subtítulo: "",
    YouTube: "https://youtu.be/sUPHEyWKxQM",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1XaWBKUy2ZQcvzmS_j3-R4z8hcm9GbsGx=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1Xc6K5F6sl9Bo3BteWJUKRO-UY9yBYhIl=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "FACSP",
    Título: "Institucional FACSP",
    Subtítulo: "",
    YouTube: "https://youtu.be/DNsD-w4h1Cc",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1GAqF6yNmKCJ8A89-t5F2CHY3lnqWSkwB=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1GBxTEoG93hSBNLNmbvpXuOJHhPuuLbKe=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Cielo",
    Título: "Empresas Cielo",
    Subtítulo: "",
    YouTube: "https://youtu.be/Qs9YIJ5XzQ0",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1IbZ-N0JMyAMGRYkwv678BYhyW5Y8FPB6=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1Ib5yhJ2bBy_xN2D2DxODkrj5JLdKnErt=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Safra",
    Título: "Longevidade",
    Subtítulo: "Video 1",
    YouTube: "https://youtu.be/_ImamSSlVZE",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1U2aTrS9f66I0qOwl3xMMiKQLlXm3tKok=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1TyVAaV8RADunaAfAOs9Wt8JpsXV_P0nR=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Safra",
    Título: "Longevidade",
    Subtítulo: "Video 2",
    YouTube: "https://youtu.be/2Vqk8jwDvA4",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1TwDscYOqsEuSWhRgf-8ZWTaN8sa2e_dV=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1TqTk_i544ejXDAk_RgGzihO4lh-jgBKk=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Inspirali",
    Título: "O que te inspira na medicina?",
    Subtítulo: "Episódio 1",
    YouTube: "https://youtu.be/uUmSN6TRIJY",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/19D6483Qqs2CChNqoHzkoSgKWLcQ6uf9Y=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1A0e7EY0juB57BLrbYqK-RxLGeYoE1w6t=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Inspirali",
    Título: "O que te inspira na medicina?",
    Subtítulo: "Episódio 2",
    YouTube: "https://youtu.be/jinIQoKGEl4",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1A0XqrH1laTienXxKzXRDh_ddg-l9tXre=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1A-tss43EfnKNaI3svqQfMis_lkeNgBQn=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Inspirali",
    Título: "O que te inspira na medicina?",
    Subtítulo: "Episódio 3",
    YouTube: "https://youtu.be/5Ve8FjPuowE",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/19klB9u2G0qAuMLCEp27XofgmMPEreYVq=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/19jJ6m0QpZcczUuPtGuJ5RmgxColbEfvX=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Inspirali",
    Título: "O que te inspira na medicina?",
    Subtítulo: "Episódio 4",
    YouTube: "https://youtu.be/i6ofRMad71A",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/19aLgwNiOovNQXKUS1W37vEo1UkFIPLnE=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/19_UABzmWjhG4gPpyv6qaFNYNPeneQJbx=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Inspirali",
    Título: "O que te inspira na medicina?",
    Subtítulo: "Episódio 5",
    YouTube: "https://youtu.be/AZIZrJV7JOQ",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/19O6tVjK-jNz6CESbV7dFvS6vmAgjmAIn=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/19EKg1GBagiDFYyCGkouFxGSh5u5SzlOq=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Prefeitura de Cotia",
    Título: "Cotia 166 Anos",
    Subtítulo: "Video 1",
    YouTube: "https://youtu.be/Y7wyVVbjdqE",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/13n_dZ7yw7Ar1ydIz54_G0b8Je-q-B1YS=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/13sw7Sbj5ozh3VIYoIExxYVl0fTpiejjV=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Prefeitura de Cotia",
    Título: "Cotia 166 Anos",
    Subtítulo: "Video 2",
    YouTube: "https://youtu.be/cnREagPUkRE",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/13saO-_xvgUyk4e3ZJHVKcq6xqIDSEwAs=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/13p2zB9gKJ_WqsPRSh-1Uw28-aJibQ38J=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Solução Mais",
    Título: "Institucional Solução Mais",
    Subtítulo: "",
    YouTube: "https://youtu.be/wirYreRTQzI",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1K5i21TvN4aLKeMVNrkkfpJtwGE-I0yXV=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1K4Bz6uwyL6RKGJU84w9jfvB18LS2WnSg=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Solução Mais ",
    Título: "Solução Mais Manifesto",
    Subtítulo: "",
    YouTube: "https://youtu.be/MYVvDjXCwvs",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1VACPTIWsy9z5yb3cXRW5mT39cmFxd-OH=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1TCYgSmuoidMIhtn9NqSvKamyMrMOF0kG=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Dynamis",
    Título: "D-Flame",
    Subtítulo: "",
    YouTube: "https://youtu.be/vZUZoeD1zq4",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1VmLu4ZOtT_xMeTpWEn6bR85mmxTTbQGk=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1VU6WBPkt2vezHrQ4U7QYsIbVd5egx1Cf=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Dynamis",
    Título: "Dynamis | Gasifire",
    Subtítulo: "",
    YouTube: "https://youtu.be/F29zu-LKYl0",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1TNMvzMy5g6vMVGqwvlU70DyFNcTaQSnd=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1TFGokRqVT4zDNNX7IkbeOQMyMVPeIfWr=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Dynamis",
    Título: "Institucional Dynamis",
    Subtítulo: "",
    YouTube: "https://youtu.be/AXgYUXh5gGw",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1VmxN1vId8FAdQ1ftcccrvkU5j9JPfepC=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1VmkwldgV247-3DtWRjUTD83t2GnLtwqt=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Phoenix Tower International",
    Título: "PTI Stronger Institutional",
    Subtítulo: "",
    YouTube: "https://youtu.be/GghXE3kuwAE",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1GoguidFZawoL--ChleXrUZYb0xSrQkEZ=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1GrID7bEgxdN24Kw6y9BgXZNtl9mqfPTF=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "PayGo",
    Título: "PayGo Manifesto",
    Subtítulo: "",
    YouTube: "https://youtu.be/3_vPuMdfAj8",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1RFHNK1D6ovJE2QCvyDKC67QnVQlzrFA5=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1T3SrwVc2NoMdI3kxpIyJ2glOQCDiMmuI=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Puma ",
    Título: "Secret Running Society",
    Subtítulo: "",
    YouTube: "https://youtu.be/MA9kES3cpLc",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1Qjw2Eke800oBN1URyPAyea5rG5S_qXiX=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1QbPQmGWEVxpQaMwJbAQFMa8gbpnvJW1x=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Puma ",
    Título: "Forever Fast",
    Subtítulo: "",
    YouTube: "https://youtu.be/D77_5_Jb4RA",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1QaaHCDl9oHsVReGWBUjOleRQa2OlNEPb=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1QVc3PAZOt9MWGGbPCD3TSEavfCw6227P=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Puma ",
    Título: "Forever Faster Making of",
    Subtítulo: "",
    YouTube: "https://youtu.be/47bbJig1Af4",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1Rrxn__LtM0LFrzebGz7rtqHakdHVKj2N=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1RruplE2udPvrtFEA8G2JtPl8qf_EJ7yA=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Abbvie",
    Título: "Nova Empresa",
    Subtítulo: "",
    YouTube: "https://youtu.be/utkRaGUohlY",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1KKded4Z7_WsFTEE6H_5_zMpzZr6busTr=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1KHyxcLCr1BK8Nxb4Bf1wzOTrYAnrqKRQ=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "New IT",
    Título: "New//It Manifesto",
    Subtítulo: "",
    YouTube: "https://youtu.be/UUqQ0QuAdv4",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1RSwEoyS31yC8txKEZoZXeqe9WSUkd6HU=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1RPzoZsxUFeJ-IsHs1vrgZ0MNaKAO8Hy2=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Labbyes",
    Título: "Labbyes",
    Subtítulo: "",
    YouTube: "https://youtu.be/pNTR9zLy66c",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1TbswxhamChEWxRrJpRViu8p9AOfMHJln=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1T_VtB3wxwCYpvQfDv7jdj5ve6tHYJV-h=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Zemplar ",
    Título: "Zemplar Hemodiálise",
    Subtítulo: "",
    YouTube: "https://youtu.be/k-WXjn8Y3Xo",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1TXehBNiNUa9ISrYjrkqfuODHpo2AFAJ4=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1TSqzVFlamWAyUnYle0t1Q-3Sxw12Epxl=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Viação Amarelinho",
    Título: "Prevenção Covid 19",
    Subtítulo: "",
    YouTube: "https://youtu.be/z6NqK2kb-_0",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1TgR8BjE7aQaQ9fLThfSWlF8YmOgh-6U3=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1TfS9fJnMZL6UJgLmEy7Zs7_5hGTX2VMF=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Colégio Santana",
    Título: "Viemos para Servir | Ação Social",
    Subtítulo: "",
    YouTube: "https://youtu.be/1WtZCpnBSgU",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1TRcLWkcjwlSHkop0BAXUK1-NaOEKWZfm=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1TPmZZcaTpnT0ZF41XA86Tz1vpDN2in4A=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Grupo Cometa",
    Título: "Institucional Grupo Cometa",
    Subtítulo: "",
    YouTube: "https://youtu.be/7yzD3uMZGdk",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1AdEvJdB7aozU0bboT7IloJX7cfozuqHH=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1Ae-dQbjTvaCMvCvMIYRD1X8A-3kaABtl=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Z11 Group",
    Título: "z11 Group",
    Subtítulo: "",
    YouTube: "https://youtu.be/RIaUK5DmBww",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1ICxFR-mBGPNqz0bh0jPXo8XX-CPXAlJ3=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1I419tU2aO9raCuslj2A8LpBe1dGwqdgU=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Ministério da Saúde",
    Título: "Movimento Vacina Brasil",
    Subtítulo: "Sarampo",
    YouTube: "https://youtu.be/mwxQtfxZT2I",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/135lNeJewaHMHL3uUy8-GQMIQtq_i9EOA=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/135gmu5QNZ454mEth7lLADX8DwSK8VSte=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Ministério da Saúde",
    Título: "Movimento Vacina Brasil",
    Subtítulo: "HPV",
    YouTube: "https://youtube.com/shorts/n_CV_gu4q4I",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/136OoB_4rO5sI4EPEMPvCsz4tkdC-zz7o=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/13AIUOPW25B-cesOm2bnIYIbI6r31wNsw=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Ministério da Saúde",
    Título: "Movimento Vacina Brasil",
    Subtítulo: "Poliomielite",
    YouTube: "https://youtube.com/shorts/_BQOQr46qaI",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/13DKt4bPQHlIkUwc-8miWW1sggbWc6coP=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/13DJeU40vh2B45G31qH6b6rAN8a284oG3=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Ministério da Saúde",
    Título: "Movimento Vacina Brasil",
    Subtítulo: "Caxumba",
    YouTube: "https://youtube.com/shorts/f8WfbCGA_8k",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/13EFA2vEHElWO2ohS51ktE9Qggp62qaPT=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/13EslE_1D-zG2h7OeuVOk7qj3kQ2yi9WU=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: true,

    Cliente:
      "Ministério do Desenvolvimento e Assistência Social, Família e Combate à fome",
    Título: "Cadastro Único",
    Subtítulo: "Você conhece o Cadastro Único?",
    YouTube: "https://youtu.be/WNmHP1f3LFY",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1Ws7A1QXsaNKAjuRpVi1yJojMixQ4RlmU=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1X8JQzyq1SdeYg9CWaqgFRoM7Wecgy8u4=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente:
      "Ministério do Desenvolvimento e Assistência Social, Família e Combate à fome",
    Título: "Cadastro Único",
    Subtítulo: "Você conhece o Cadastro Único? 9x16",
    YouTube: "https://youtube.com/shorts/nrA_XJX4ovo",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1Ws7A1QXsaNKAjuRpVi1yJojMixQ4RlmU=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1X8JQzyq1SdeYg9CWaqgFRoM7Wecgy8u4=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente:
      "Ministério do Desenvolvimento e Assistência Social, Família e Combate à fome",
    Título: "Cadastro Único",
    Subtítulo: "Como é feito o cadastramento?",
    YouTube: "https://youtu.be/Le6sdflOQlo",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1X7Q6kyzp6tLP4lQQtAVWJtq1PFF8LJxJ=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1X0Ya7kPRxAhpsRCO_eXCqVHbzy-XD6cX=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente:
      "Ministério do Desenvolvimento e Assistência Social, Família e Combate à fome",
    Título: "Cadastro Único",
    Subtítulo: "Como é feito o cadastramento? 9x16",
    YouTube: "https://youtube.com/shorts/_MipRzDabQU",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1X7Q6kyzp6tLP4lQQtAVWJtq1PFF8LJxJ=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1X0Ya7kPRxAhpsRCO_eXCqVHbzy-XD6cX=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente:
      "Ministério do Desenvolvimento e Assistência Social, Família e Combate à fome",
    Título: "Cadastro Único",
    Subtítulo:
      "Por que o governo está avaliando os cadastros de quem mora sozinho?",
    YouTube: "https://youtu.be/pQ5fYneVoiQ",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1WztYQJYB0057kLX5oE2AkyxJuHK5UX0I=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1Wz2RspIzx2SSJ9PdP1odbyF_ct1Abg8d=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente:
      "Ministério do Desenvolvimento e Assistência Social, Família e Combate à fome",
    Título: "Cadastro Único",
    Subtítulo:
      "Por que o governo está avaliando os cadastros de quem mora sozinho? 9x16",
    YouTube: "https://youtube.com/shorts/n_rIv_OEOrI",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1WztYQJYB0057kLX5oE2AkyxJuHK5UX0I=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1Wz2RspIzx2SSJ9PdP1odbyF_ct1Abg8d=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente:
      "Ministério do Desenvolvimento e Assistência Social, Família e Combate à fome",
    Título: "Cadastro Único",
    Subtítulo: "Como manter o cadastro atualizado?",
    YouTube: "https://youtu.be/J-HGHqMJCwM",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1WyMsCYVpzfPZq9z3g7h80zcBT1zXIgX1=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1Wwhw9o2yzeKq-ZcpOpC9diPjlJz1ayZU=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente:
      "Ministério do Desenvolvimento e Assistência Social, Família e Combate à fome",
    Título: "Cadastro Único",
    Subtítulo: "Como manter o cadastro atualizado? 9x16",
    YouTube: "https://youtube.com/shorts/Y2ZDux56j4c",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1WyMsCYVpzfPZq9z3g7h80zcBT1zXIgX1=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1Wwhw9o2yzeKq-ZcpOpC9diPjlJz1ayZU=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Ministério da Saúde",
    Título: "Cuida Mais Brasil",
    Subtítulo: "Agora você tem Pediatria na Atenção Primária",
    YouTube: "https://youtu.be/uYJHh4A_aRk",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1IsjzKPK7wFm35XULqJHzvnwmAjLRztwm=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1IqqN6gVubtGBj4fVO68RosQOCLWyDZ3q=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Ministério da Saúde",
    Título: "Cuida Mais Brasil",
    Subtítulo: "O que é a Atenção Primária a Saúde",
    YouTube: "https://youtube.com/shorts/uTHy_upHLHI",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1IpaA19uGknSrKSGyZesBqWcw66jaS39-=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1ImJ61kXRarKxPumA9DIEpPa7i1en8dyZ=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Ministério da Saúde",
    Título: "Cuida Mais Brasil",
    Subtítulo: "Como funciona a Atenção Primária a Saúde",
    YouTube: "https://youtu.be/QIhJHldrlbI",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1Il9VaAmQFDJZT_3AYAM-zc1r3qeYuvhu=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1IhqLb5405CanIlTg8DZJXhsYfDpyeXGh=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Ministério da Saúde",
    Título: "Cuida Mais Brasil",
    Subtítulo: "Quais as diferenças entre Atenção Primária e Especializada",
    YouTube: "https://youtu.be/xrNZQlNVywg",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1If2dvTvk8VW0Fy66pBDfPkH_kwrXac-H=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1Idzkla_X8Uz4pjqIQj-0kH9K8IB_iQm1=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: true,

    Cliente: "Caixa",
    Título: "SIM Digital Crédito Caixa Tem",
    Subtítulo: "Pra quem é o crédito?",
    YouTube: "https://youtu.be/0hGhFCLvjsA",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1-66hNw8HORWvd3KXwZTd5E5G7SmEiNiF=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1-9IqllTifD96zS2piJnHf7k7-Md-8qKW=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Caixa",
    Título: "SIM Digital Crédito Caixa Tem",
    Subtítulo: "Meu Caixa Tem bloqueou, o que fazer?",
    YouTube: "https://youtu.be/vpBLSu3ip4o",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/10LwYoWdqnmFWyc16r_p8VZ1P_AwS07Bs=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/10K7VroV8qfVFPShidNSXf48M8ifxf_As=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Caixa",
    Título: "SIM Digital Crédito Caixa Tem",
    Subtítulo: "Condições e documentação para Pessoa Física",
    YouTube: "https://youtu.be/OVgqmSOk5ag",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/108wiyD_leOoFUkKs38sjuHbnTXSuG6i0=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/108HT7_3Y1xMcSTYaQPWFpt4osMdROgBP=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Caixa",
    Título: "SIM Digital Crédito Caixa Tem",
    Subtítulo: "Condições e documentação para MEI",
    YouTube: "https://youtu.be/MR7o_sL_vpI",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/107ZZVAX82-Qoz0MKEmHkGyguJpJu6Udx=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1-yyZWyas6WXplUp6eKq1MsfexMwGePF1=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Caixa",
    Título: "SIM Digital Crédito Caixa Tem",
    Subtítulo: "Redefinição de senha",
    YouTube: "https://youtu.be/-gRuT3IEVac",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1-uzwyX9VWa3OrL5JJ9K9nPp2Fw4TYRUv=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1-qHWGf88vKcIBpa9aMxJSoi5Rk60XbCG=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Caixa",
    Título: "SIM Digital Crédito Caixa Tem",
    Subtítulo: "Dicas para envio da documentação cadastral",
    YouTube: "https://youtu.be/TmLhi9gDtN4",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1-q1x9FbQFCXBGkt--irHmol4lABmI8Bj=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1-nXXe0AEbk0t5LvVvCPZrIYWBZlLQZCb=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Caixa",
    Título: "SIM Digital Crédito Caixa Tem",
    Subtítulo: "Informe de renda no Caixa Tem",
    YouTube: "https://youtu.be/MdkoJPeyV2w",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1-jNtR_l0iJNnwv4pj3CJpTf17518eJch=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1-ir0OhhggZZQ4fXmBxkdTt4XyfH90not=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Caixa",
    Título: "SIM Digital Crédito Caixa Tem",
    Subtítulo: "Confirmação da atualização cadastral",
    YouTube: "https://youtu.be/-l2XqOL2igo",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1-Yc56e7PhXgAcYCtwnGB-p75P68LSdGG=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1-T6qbyiMbeVPtmqU9QA272Ygh3Rv2TRs=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Caixa",
    Título: "SIM Digital Crédito Caixa Tem",
    Subtítulo: "Como solicitar o empréstimo?",
    YouTube: "https://youtu.be/fw9w2_CFjbA",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1-SDAMA_JvL4Og5yG-Ltfnk3gmWWiwL69=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1-RV-dueMJ1EUVafMVnufqWF_toEWmY4d=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Caixa",
    Título: "SIM Digital Crédito Caixa Tem",
    Subtítulo: "Status da solicitação de crédito",
    YouTube: "https://youtu.be/a-Mg1L-ke3s",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1-HaJJsZmAawC3YdbGytiBNYadvstkDKs=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1-ALG8U7bK9JuzEHfo3aQuWab4XOBiRYF=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Mnistério da Cidadania",
    Título: "Brasil Fraterno - Comida no Prato",
    Subtítulo: "Video 1",
    YouTube: "https://youtu.be/kphdJaCtSq8",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1AVqN7acoerr6Wcfq6VmHCT4P9ZDYF0e5=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1ATHMYtDB-D5SmlL7f5uuOFhNDLRFrL0p=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Mnistério da Cidadania",
    Título: "Brasil Fraterno - Comida no Prato",
    Subtítulo: "Video 2",
    YouTube: "https://youtu.be/IOAmhOGRWj0",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1ARf2xc5exJLT38POZN7AJl9JMRl-B62G=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1AO_dVuWj4EV2tRy9Qk7qRIe7OdbWHR4k=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Mnistério da Cidadania",
    Título: "Brasil Fraterno - Comida no Prato",
    Subtítulo: "Video 3",
    YouTube: "https://youtu.be/FNx-wJaOcbA",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1AK-ZKFGc1AHNsxE_UNuU32hTyaB6awjV=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1AJPUiVeYPyVd5-rvowzYryf0sLIvszjW=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Tokio Marine",
    Título: "Tokio Marine",
    Subtítulo: "Vida em Grupo",
    YouTube: "https://youtu.be/d_XhBGyxoIo",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/13SBsXHPMpK3uUfbM6k0xT3bTfApJWyxv=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/13SvYvMxaPDFAxLAGZrESpT_qxxYFU0qf=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Tokio Marine",
    Título: "Tokio Marine",
    Subtítulo: "Residencial",
    YouTube: "https://youtu.be/KKwTswlMn5w",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/13WxMo61YHyH-udiVeYKJh1CbOckLkCbH=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/13VYwPQRjkWu7rhYV2FBjUsvAzBB7Nzoq=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: true,

    Cliente: "Tokio Marine",
    Título: "Tokio Marine",
    Subtítulo: "Responsabilidade Cívil",
    YouTube: "https://youtu.be/OrAfiGEwQAU",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/13b2lOBgxVDPATkYU6rO6KyrmfT7N0jM1=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/13YG-ycDJQnXCCxngxvcUnIu1Bdsh6fOr=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: true,

    Cliente: "Tokio Marine",
    Título: "Tokio Marine",
    Subtítulo: "Zika e Dengue",
    YouTube: "https://youtu.be/z2Stw81RhKg",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/13iYXX7q_s-xlTHH1E0HhtRILqTQiRSmn=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/13blVlQvLpc9BeG_gFG487kLltWxODdC9=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Tokio Marine",
    Título: "Tokio Marine",
    Subtítulo: "Auto",
    YouTube: "https://youtu.be/32mwdUP6AJQ",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1ZgF7wfONkaVfWGkRtqlUqy9DqtwNEIma=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1wwat5-3vo39Htn8WGmD3mtlQ-eCpQ1_4=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Tokio Marine",
    Título: "Tokio Marine",
    Subtítulo: "Danos e Riscos PJ",
    YouTube: "https://youtu.be/ytfCfKe9T1A",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/13PX6NCYhx6B7TywbiceperXcnIloxOGI=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/13Lk7SupYJQpfza9gGPzJgWH3gD64jNCG=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Moura",
    Título: "Nova Bateria Moura",
    Subtítulo: "",
    YouTube: "https://youtu.be/wLOpoOKyl7I",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1Cxn2b1pkbD1HaDOCYv6-x7T6Qfcy1LyU=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1Cxi1E4NR2yBGrq-fsm6-opqbppLz0wcu=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Ministério da Saúde",
    Título: "Saúde da Mulher",
    Subtítulo: "Atenção Primária à Saúde",
    YouTube: "https://youtu.be/jBfsAszS_gQ",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/12ANLBMlblktXWwg4a9dJ1-HgwrrHj3we=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/120f5dybJU-ADmB8SukA-j04bE9Vm3e1U=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Ministério da Saúde",
    Título: "Saúde da Mulher",
    Subtítulo: "Câncer",
    YouTube: "https://youtu.be/QTxpSC5IWQs",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/12xN0YLcLe35sl7EINO1bG1K1UfBa3Udc=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/12vkbbgAJrWAEsj3V6jJDQLvcLzu-Pi3y=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Ministério da Saúde",
    Título: "Saúde da Mulher",
    Subtítulo: "Pré-natal",
    YouTube: "https://youtu.be/w_JjyFjwM4w",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/12tTmmoe2pkfy3odvxDxXXopCv-hhVEWK=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/12lwoZUZdy_dp0UkDU0A8LzM73WkApejw=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Ministério da Saúde",
    Título: "Saúde da Mulher",
    Subtítulo: "Sexualidade e planejamento familiar",
    YouTube: "https://youtu.be/IB-xoIJYXpQ",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/12eV9UFLdeNNa32y-hV0WPLnD7dQh1fTl=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/12gkpJVbjx912InVCOBXlgh6Tauk7K1JB=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Ministério da Saúde",
    Título: "Saúde da Mulher",
    Subtítulo: "ISTs",
    YouTube: "https://youtu.be/eoDVaRUcnrA",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/12OGn-ng7HIuMnSsQjYve5YDvxOrPoQM3=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/12OfyiKv_uSFmIdASt-_PcOvWyhya_TQB=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Ministério da Saúde",
    Título: "Saúde da Mulher",
    Subtítulo: "Pré-natal odontológico",
    YouTube: "https://youtu.be/3Vy70mMTozw",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/12EnatW7jO6guI1SDfS0K0pX7w5yMsOWf=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/12NECpUYpACzRuGq7wxtJDsubwSUCv6lC=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Abac",
    Título: "Consórcio de A a Z",
    Subtítulo: "O que é grupo de consórcio?",
    YouTube: "https://youtu.be/mQn14e2YtNU",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/14rr7HnYm495IxyHwiGOqMRtMJoLrA9h5=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/14ppsK7NhdfYJjk5jVz3MPeXij_q_a6Hq=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Abac",
    Título: "Consórcio de A a Z",
    Subtítulo: "Como funciona o consórcio?",
    YouTube: "https://youtu.be/tCGQGFQGze8",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1419-Et95huH6KguJXyOpalrPfLN05XAH=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/14urW2G7joFkkfAGFrDAVwRFVvtNnBnK3=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Abac",
    Título: "Consórcio de A a Z",
    Subtítulo: "Por que ler o contrato é importante?",
    YouTube: "https://youtu.be/Ed77aLHVoPM",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/14obNBHir2WmPT3BZ0DNgwOtd3a4KdySG=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/14oHW5KV6RA_sTOTLL-cNSWg1mma9wjp1=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Abac",
    Título: "Consórcio de A a Z",
    Subtítulo: "Como funcionam as assembléias?",
    YouTube: "https://youtu.be/eVcPXSQCWGU",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/14lGLnY3NSl_79QphxL5NmrYRcuZs9o43=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/14Zs8RP1uYUgGDYGhsCiuoSp4Vgtmrybd=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Abac",
    Título: "Consórcio de A a Z",
    Subtítulo: "Quais as formas de contemplação?",
    YouTube: "https://youtu.be/U9MpkudI20I",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/14O9Sn3RB8c2Eaw0T3kX3OWxQXEhMaz8z=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/14Mg84sHAERPjVZS87qgounyXmhCyZG0c=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Abac",
    Título: "Consórcio de A a Z",
    Subtítulo: "O que é lance embutido?",
    YouTube: "https://youtu.be/XjbrcBCuLDI",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/14KbJwGx12Q0RX8ED3bVvvdPOxKNVOuZR=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/14I6uK7zQwSet9V-AkpwFxzAsp5FoHyI8=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Abac",
    Título: "Consórcio de A a Z",
    Subtítulo: "Para que servem as garantias?",
    YouTube: "https://youtu.be/g5s-r3BB8Us",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/14DkUx1J7HX9ulaIZnegyEGN2NmLk7-C_=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/148_3iFFkwHNHh5wDwA3VpLO_xW7A0xLI=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Abac",
    Título: "Consórcio de A a Z",
    Subtítulo: "É possível comprar o que quiser com o crédito?",
    YouTube: "https://youtu.be/r4Y1Lsl3j3w",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/143RlTVcrifEkF0RRzlddrgov7eg1YNhe=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/142awM7g055ARxVevofUvOAJN3G4cuj6A=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Abac",
    Título: "Consórcio de A a Z",
    Subtítulo: "Comprar bem de menor valor",
    YouTube: "https://youtu.be/xYl-rU8V-IA",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/15j2kI6eZ4kpcr3iEmQHfXvCiraak5QIM=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/15d_YPNQfuI7149G4Y_O7KBmIsUhewbzF=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Abac",
    Título: "Consórcio de A a Z",
    Subtítulo: "O que é taxa de admnistração?",
    YouTube: "https://youtu.be/cChO8Iypd2k",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/15SDuPXMMuUoZ_TF16ETUYR6DqWUDA-kJ=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/15MZkdD4WdhV0BFf-E1Kh2H8McUjQZ4IJ=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Abac",
    Título: "Consórcio de A a Z",
    Subtítulo: "O que é fundo de reserva?",
    YouTube: "https://youtu.be/9065MTYf1bQ",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/15LI7es0ZEgDb3ldGc9ZebHM7IeNJE0W5=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/15LI7es0ZEgDb3ldGc9ZebHM7IeNJE0W5=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Abac",
    Título: "Consórcio de A a Z",
    Subtítulo: "Parcela do consórcio",
    YouTube: "https://youtu.be/qBZSMHS4x44",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/15L6o_6jVez5Q_9R3K7Liv6WXx91kPU5p=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/15ISJxBPYTCEJ6u5STNQlnKpUKdvL78qX=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Abac",
    Título: "Consórcio de A a Z",
    Subtítulo: "O valor do crédito e das parcelas muda?",
    YouTube: "https://youtu.be/Upb1Lw25bjc",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/15BDvzxTkjxQggMZWJhvdq8LRNNEioc_2=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/15AbY3y50dHbvEOE6a9jWG2w5XUyjmsw7=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Abac",
    Título: "Consórcio de A a Z",
    Subtítulo: "O que acontece ao antecipar o pagamento?",
    YouTube: "https://youtu.be/jmhMuM1bkZ8",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/156x0vHukZpQGfwFu0_octTsRdKJb62VP=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/16tM8YfkCIwHEc2u_FySTGDmP2Wx7MObc=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Abac",
    Título: "Consórcio de A a Z",
    Subtítulo: "É permitido receber o crédito em dinheiro?",
    YouTube: "https://youtu.be/q9sok_z8xHs",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/14z2MFPEItnV5yLUgUEpi3wFj5exRpr2K=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/16fhadSi2tl7WHZRDqoV504GkV13SveGG=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Abac",
    Título: "Consórcio de A a Z",
    Subtítulo: "E se atrasar o pagamento da parcela?",
    YouTube: "https://youtu.be/1l0AxoqoLc8",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/16fDaqZg74FGTngEYWk_59deKjzMwzI-F=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/18MG9Cku6osMk_PB5jDbMAXbS3rVO_wd8=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Abac",
    Título: "Consórcio de A a Z",
    Subtítulo: "Desistência",
    YouTube: "https://youtu.be/Yl90NgXy-iE",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/18J0dFfExOOlaR9szLZmEfZiQ-6uoSXEc=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/18HayUmuPjDlsrA5E1L2wEJoerEptqHOw=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Abac",
    Título: "Consórcio de A a Z",
    Subtítulo: "Transferência",
    YouTube: "https://youtu.be/x21HfmDhB6M",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/180A67E1P7RjnvCPxTJMRbf3X9hmwho5U=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/17xJkAHufmr1ewcKKRS7j1VQRlYef_Pip=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Abac",
    Título: "Consórcio de A a Z",
    Subtítulo: "Cota contemplada",
    YouTube: "https://youtu.be/9eAF4p1aElE",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/17wADbMm8ychD0nHYzOo173apYn9-SDoF=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/17usUSs9-HODsJIrQbmkfVEIpIj2fGUGG=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Abac",
    Título: "Consórcio de A a Z",
    Subtítulo: "Posso voltar a pagar meu consórcio?",
    YouTube: "https://youtu.be/8sPHxR5_XuM",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/17aEXJr3svESS4IJ-dhP0ojzXahNexF-T=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/17ZnTk8z_nKhcHjo6gcnHxSzm0OxWZARL=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Smiles",
    Título: "Novo Cartão Smiles",
    Subtítulo: "",
    YouTube: "https://youtu.be/vCTBEtMoUWY",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1G0Gps3ZQHe-HYhVSwEmNTnjztShJ1TQM=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1G6aR2EjmX4HjdAL55efVslLDnN9tFjf5=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Lactulona",
    Título: "Lactulona",
    Subtítulo: "",
    YouTube: "https://youtu.be/5szuxXRnj80",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1JoeGD7msWdy9z2D6IkNhNqe9mBSpVhA5=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1Jo6gFW6koMxKTyeIImAWtFBjhAUDgpyY=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Lactulona",
    Título: "Lactulona Casa",
    Subtítulo: "",
    YouTube: "https://youtu.be/_wjRNbLV23o",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1Ji6szn4u_c3Tl-xmZyi0Lp7mEy388OiY=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1Jg0cuiJBtq8PZAP7Z2fgzL8NH558ZvEs=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Semp Toshiba",
    Título: "4k SEMP Lançamento",
    Subtítulo: "",
    YouTube: "https://youtu.be/k4Ua7PJo8LU",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1Q2I3WC42v9fzPVvOaMmhJkek3pzL-qyo=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1PtK4IEY4nf8SfCpRVfbEVeQhI3PHK3f-=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Safra",
    Título: "SafraPay Te Conta",
    Subtítulo: "Como reforçar o caixa da empresa?",
    YouTube: "https://youtu.be/RkhcBsmRB0M",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1M5ijcbP63CqCWH6t4BhEpE4UwFOKde_o=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1LyROFXoiSi0D8qYEnKp5T0GjZmirFLCB=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Safra",
    Título: "SafraPay Te Conta",
    Subtítulo: "Como vender pelo whatsapp e redes sociais?",
    YouTube: "https://youtu.be/CRuHnwvWhoo",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1LvSFOgj2j9G8AmT76skDafSmBWfW7D95=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1Lm3bQ6rdioi0Y_6Y1B5L9pKZJZihncc5=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Safra",
    Título: "SafraPay Te Conta",
    Subtítulo: "Como diminuir custos?",
    YouTube: "https://youtu.be/NC-mrDbmTEU",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1MMvMz-fuxFBUpRPzEPv7RKyGebTYQ-R2=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1MMtvWeynqTUBpxE7uLJGXfxEpEmV-Ktj=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Safra",
    Título: "SafraPay Te Conta",
    Subtítulo: "Como impulsionar suas vendas?",
    YouTube: "https://youtu.be/aIEnXczUQzQ",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1MITqhpPNpTPz1ZhPMNEWC6KWL8-EPBzp=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1MEyXsZy9f4h4yFdt6Enh0G60F1NYAISg=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Safra",
    Título: "SafraPay Te Conta",
    Subtítulo: "O que são canais de venda?",
    YouTube: "https://youtu.be/obifSlFi1dY",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1M8u7KJlV-YV5Pl06dnT9xy02HU2nwYix=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1M8qTN8pd9tNxFckSgoAf2PHBehMlzNmo=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Safra",
    Título: "SafraPay Te Conta",
    Subtítulo: "Como expandir uma pequena empresa e faturar mais?",
    YouTube: "https://youtu.be/KiXc8-seOtI",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1MEBFIBJ4EMW_3afz-aHBnvXgZ7HgdnSY=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1MCGNj382pr7D5VqvhPsY0PPPSCIqfuuf=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Safra",
    Título: "SafraPay Te Conta",
    Subtítulo: "Como usar a tecnologia a favor da sua empresa?",
    YouTube: "https://youtu.be/SlliV8vVR58",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1LjyvUwiObht6iSXVtEaL_U3JoOTv-HUQ=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1IU6yUdxA4j3PPOZy2pR4i0empowxBso2=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Ministério da Saúde",
    Título: "A Culpa não é dos Macacos",
    Subtítulo: "",
    YouTube: "https://youtu.be/nf1-4crRp40",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1ZI_GQ7NLH9wIzxDistjNzmol4cfeuGIh=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1ZJHFSnYZ9NGUnVvQr2pDq1ed_-9EylXu=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: true,

    Cliente: "Ministério da Saúde",
    Título: "Combate Aedes/Dengue",
    Subtítulo: "Vídeo 1",
    YouTube: "https://youtu.be/kAy0DVQy94Y",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/10jBDDsMxqBkKvZcECNPLphAkje1qER0f=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1zvlyhxkxfld2hmotOgfPUwMACTTrfIOj=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Abbvie",
    Título: "Farmacovigilância",
    Subtítulo: "Segurança para o paciente",
    YouTube: "https://youtu.be/cl9SvhrSO_I",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1DN8kMtLjhcfp28xP83EY31U7XWa8zLHC=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1DKkUsQ5BZq56A3CC4nPVLlTpSbrPiujs=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Abbvie",
    Título: "Farmacovigilância",
    Subtítulo: "Farmacovigilância na terapia biológica",
    YouTube: "https://youtu.be/-cYCJsVG5J0",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1DgXeob7I5VthpcqDN0HvJLQASzxkLi4x=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1DgDk6SY1uofoDil6IWMitpr458HWNcW5=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Abbvie",
    Título: "Farmacovigilância",
    Subtítulo: "Transporte e armazenamento",
    YouTube: "https://youtu.be/ZVdqE22Q9O8",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1DQyIS1kMaervZPQYKWyw7cnOcQqTNxBU=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1DPn1RNIhzVI3A37L8650hcXnTIEFZVy8=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "C&A",
    Título: "C&A & Vc",
    Subtítulo: "",
    YouTube: "https://youtu.be/tEGXq7yKNZk",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1AIB1LXiCuSkqDXXbCRypU0qO3zHfIPuZ=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1AD6oj79iA8MVPWzme9iHe8tE6J1FWBY3=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Elma Chips",
    Título: "Guia de Exibição Controlada",
    Subtítulo: "",
    YouTube: "https://youtu.be/nRgBxOfIlY4",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1So35ZEuco2HFY7gQcNFeLcvejj0pAJZ8=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1Sj7K9aT9bJH7whFFiimxjHUIyQBytJdf=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Coca-Cola",
    Título: "John Pembertton | Coca-Cola 3d",
    Subtítulo: "",
    YouTube: "https://youtube.com/shorts/eXWLjP_o5lg",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1ElYDRtulxgP_QliP3uPTfEO35cYljOht=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1Eq0iuB182lAWBptkjxaYpRrYPjjztQxd=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "FTD Educação ",
    Título: "FTD 120 Anos",
    Subtítulo: "",
    YouTube: "https://youtu.be/53dGdk68sgc",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1jSfNgKhXHsUJbs1Tm7p_IN1Un6ss8-iW=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1MNfPoPtBxdf006hkSS01n_t-tYs4lht8=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Osasco",
    Título: "Incentivo ao comércio local",
    Subtítulo: "",
    YouTube: "https://youtu.be/la_nkAORFtc",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1NSlUVvsztNymGkKCnespUiOZzKvaZ5W7=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1NPszr9j2ZWxqrV2YbyiqZqs-dt-jyT2M=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "TecBan",
    Título: "Todo dia é dia",
    Subtítulo: "Campanha",
    YouTube: "https://youtu.be/wFaMHZtoNiQ",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1F1TrIfUoaNJVAODy0vSlSn9dWmlOw3JR=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1F0iVVxt3nbZUM2XCePvBq8Mcr07HJxAs=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "TecBan",
    Título: "Todo dia é dia",
    Subtítulo: "Segunda-Feira",
    YouTube: "https://youtu.be/R4YmOVAXwmE",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1F4RnQjSHZ1ledl0b4UJ6tPr7bi60yHJW=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1F7Dm1PhT2cFad6yOSAKnHL3dAn0b5Yie=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "TecBan",
    Título: "Todo dia é dia",
    Subtítulo: "Terça-Feira",
    YouTube: "https://youtu.be/mmcy2_64k94",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1FTXICcxNzkc0tfHNqxb4FQct_Y6pL94U=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1FO2QNbb7cmHDCLMkduiaLcAJ5uzmQDQ7=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "TecBan",
    Título: "Todo dia é dia",
    Subtítulo: "Quarta-Feira",
    YouTube: "https://youtu.be/WQAhIsPQ82Y",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1FUym21QcGTTdiZKXgRgcMy3xBGYsCSd8=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1FUrFleS82hpNk0Wac6PyBKoHUEpq07Or=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "TecBan",
    Título: "Todo dia é dia",
    Subtítulo: "Quinta-Feira",
    YouTube: "https://youtu.be/41hYMCzUmzM",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1Fsw6FPGCbc0AD3wAvlcopeSsdFXHhf9u=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1Fr7s6XV2m89ZEwjdrbv8d6V39nByZs6I=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "TecBan",
    Título: "Todo dia é dia",
    Subtítulo: "Sexta-Feira",
    YouTube: "https://youtu.be/2fxnXoz3hAc",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1Ffzn56whDFrRaZq2EPlOId6zogX4JmO_=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1FcRNrUVnMUB-LRBQ5tSb6hw0sRw2xJrf=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "TecBan",
    Título: "Todo dia é dia",
    Subtítulo: "Fim de Semana",
    YouTube: "https://youtu.be/wLwy-a08gB4",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1FbncrMFOpSY-n6YI4QtbYR86S89-QrZt=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1FY7gRzOQ52OTQB190x0oGIKzzUoW6RJA=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Safra",
    Título: "Tutorial SafraPay",
    Subtítulo: "MÁQUINA BLUETOOTH E APP SAFRAPAY",
    YouTube: "https://youtu.be/_RAodw87-g8",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1Z3RQOWFRBbs2qMPb0UENioJ9bUz6mfMg=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1Z1yAmz2RvKpDdkyMmw0VOxv5MdpvEYyP=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Safra",
    Título: "Tutorial SafraPay",
    Subtítulo: "MÁQUINA COM BOBINA",
    YouTube: "https://youtu.be/CgMIgcHNpD4",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1Z1JeuPcMFeCH0ICb00Y_6mJl_Y42EYJ7=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1Z0b3gBu7TzSWIZyFRRUIbk80N0DOor-X=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Safra",
    Título: "Tutorial SafraPay",
    Subtítulo: "MÁQUINA MÓVEL SEM BOBINA GPRS",
    YouTube: "https://youtu.be/gqEECE64rGk",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1YzI75NPiW8wgtwNFtp2IRq_bMU5dCPhm=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1YxUyP62rqc7tnJ_242btnGZ9cN3X-xGX=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Safra",
    Título: "Tutorial SafraPay",
    Subtítulo: "MÁQUINA SEM BOBINA",
    YouTube: "https://youtu.be/RmwrqexiRYk",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1Ydp0VHjhoXZntQuM4vZBAcpZlCwHq4gB=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1YcIRfeeVissD7jPp-59ETn43dLKGvPIf=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Safra",
    Título: "Tutorial SafraPay",
    Subtítulo: "CONHEÇA NOSSAS MÁQUINAS",
    YouTube: "https://youtu.be/4LQA6yM_fN4",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1YbFIbwJALejAnfHSumuazH4lgQUDPAyP=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1YbANNYrYaBE60Ct5bxQLt-mExepp71nL=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Safra",
    Título: "Tutorial SafraPay",
    Subtítulo: "TUTORIAL SMART",
    YouTube: "https://youtu.be/03bmYeabOOs",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1YZQT-cFK_ItFdQMXSRSlGhCY48YwuixK=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1YYBO_3LFZ8Q03t7-lc5IFm7EIBkPIobM=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Stopmatic",
    Título: "Stopmatic",
    Subtítulo: "",
    YouTube: "https://youtu.be/2Ux2tMAqINk",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1IYO6jd8dy5AYvP0PdePc3pGmFh45IAFL=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1IWciI-ODckAjKWRsTEMsR8zcIiu5djcg=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Abbvie",
    Título: "Artrite Reumatoide",
    Subtítulo: "",
    YouTube: "https://youtu.be/4eJ_gCYk6d4",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1JdZd21r2r6RffQOYoA8AHMSD8iGAyAlz=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1JFpfz5OVlvAh5QeFRpbqiCGYIw4xKZnw=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Safra",
    Título: "Safra Crédito Consignado",
    Subtítulo: "",
    YouTube: "https://youtu.be/Fs_CgAiTT4M",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1G71Rs-rEKuVPvMcUO8GTxof9-amFvd6E=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1G7HpgkkXYfBPIdg74KRWORKxDefs7577=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Nakata",
    Título: "Amortecedores Nakata",
    Subtítulo: "",
    YouTube: "https://youtu.be/E54WkAJdj7c",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1G9IAjPQJuhyO5Ax3k7Pki4-jUt6RWRNZ=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1GALgX15g2AhNZJqDapw1oiy26SpDZQaL=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Safra",
    Título: "Formalização Digital Safra Financeira",
    Subtítulo: "",
    YouTube: "https://youtu.be/y-1sn6IhjOM",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1H2oiVmHeID3rgMtAXT9rZlUuK_9_lKFH=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1H1sxy5qgdB3DqZy67EovUc2uuTgzue_u=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Unipar",
    Título: "Unipar",
    Subtítulo: "",
    YouTube: "https://youtu.be/L37alrJUdNU",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1H0h8X6ziLr_7AvRYuCprIKW8c4FuzZ26=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1Gtorc-DztK2BNSDWHvyZR5WwtoZOuQAI=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Abbvie",
    Título: "Uso do Survanta",
    Subtítulo: "",
    YouTube: "https://youtu.be/E33POXhgClI",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1DwjecPaa3ot8wpiTxbRMevO_D_yuCVu7=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1Dv5jEKSSOAyLtdLvAyQ6eCep9AFkDkc5=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Abbvie",
    Título: "Biossimilares",
    Subtítulo: "",
    YouTube: "https://youtu.be/I0u9mCtw2X4",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1DxzjfsDFCxcasmlAGzaAfDGKgdLAupEL=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1E3x5m47_-TcPwsRmPx21B8RHC3GttB7g=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Abbive",
    Título: "Biológicos",
    Subtítulo: "",
    YouTube: "https://youtu.be/7wS2uC0saZI",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1E549WYPO_0CGFg6fSR6CB5xmwd-PSd8r=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1E7kiF58Aoyb8P5Sp7PkkNeDfa_OrHKLw=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Safra",
    Título: "Nova Jornada de Pagamento Safra Financeira",
    Subtítulo: "",
    YouTube: "https://youtu.be/QWkp332MrRE",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1DCnNoI2U1rcVKy_2gnR4kefvOZfNsbLK=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1D4EqQqj_kyv25vBcKi6YWgZvEubz0VDf=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Suvinil",
    Título: "Sou Mais",
    Subtítulo: "",
    YouTube: "https://youtu.be/J5Ix4dkujAA",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1UAc2pQn5d7J2rZaOHGdeEXLadITmxSXc=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1UAbaqy5lESapoGCyv-H3Oka3eAEb1Q-R=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Safra",
    Título: "Tutorial SafraPay",
    Subtítulo: "TIPOS DE MÁQUINA",
    YouTube: "https://youtu.be/vPQ3Cn8wpWo",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1YOI8lTT8MQOTaPh-u_RnuFkWVapGUSWb=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1YW4KHdMy7e3JnRdQvKe3dK-2mWw0dPXG=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Safra",
    Título: "Autônomos",
    Subtítulo: "Video 1",
    YouTube: "https://youtu.be/D6qubBVopxI",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1Tj0VMRu22fkpY0Ei2CPK9e3CzjXKNhwg=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1VR4I7kumfDQMYqGiwxop79pL6MGEcV-G=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Safra",
    Título: "Autônomos",
    Subtítulo: "Video 2",
    YouTube: "https://youtu.be/GVjkKfn5dGM",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1VO8DMlM9bes-Oog_XUX_VH9sWvCE57ni=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1VNnHWnlualxgHn4z_pkcY7Wt70ohFpSH=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Safra",
    Título: "Autônomos",
    Subtítulo: "Video 3",
    YouTube: "https://youtu.be/Dx-djMWXI1s",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1VJprtXqLUMqjmrPOAs3lvrMnO4vz0gGb=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1VFuuTcPWXrBd3GL9N2ZbDHMve7lA7jJD=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Safra",
    Título: "Autônomos",
    Subtítulo: "Video 4",
    YouTube: "https://youtu.be/rFmcmmYmay8",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1VF_Sru6iZw0zHYkOtpDgGMZketyDDe9N=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1VDo48kzsg9wgEurvTO2630uPdyJdJCFn=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Pedidos Já",
    Título: "Pedidos Já",
    Subtítulo: "",
    YouTube: "https://youtu.be/tV_EHu6z7Bs",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1JEbq4nRTTgjrsAdU1v7FrE_j9yZ6uZYy=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1JEXfFWNWiTiEr2OoJTKEAOSLB_soxX7t=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Eucatex",
    Título: "Formobile Eucatex",
    Subtítulo: "",
    YouTube: "https://youtu.be/R0rHKngDG14",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1IzYnc11ZmN8Yj7WIpgh6psKx-YP4YKw7=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1KZdbzjdYkSLehXucQ4CLKyMpzMbGlzSw=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Unilever",
    Título: "Unilever Missões",
    Subtítulo: "",
    YouTube: "https://youtu.be/cYslQsG9MZs",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1JvX7sJXOQ8HSxuHT-9PAJZ5LIdJxrGtG=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1JvHicDJmQ9FPGBcyOl2N9WsyX47KKqQU=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Spartan",
    Título: "Spartan Brasil",
    Subtítulo: "",
    YouTube: "https://youtu.be/3xu9DV1aHik",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1Ju7F_5DLX7pyAAG24QF9xMlIFM6ItBo3=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1Jrul0W8T4K_gWJ7WNI8e42OfnEKp5ZF7=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Itaú",
    Título: "Portal Vitrine Rede",
    Subtítulo: "",
    YouTube: "https://youtu.be/qrdorGCG2kI",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1MZ9h9JgCnefMujpcElAioc4hQgROP64t=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1MXUWXsH0IvbcqlS9OSlEshsHzxhP1mmI=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "St. Marche",
    Título: "Promoção Mini St Marche",
    Subtítulo: "",
    YouTube: "https://youtube.com/shorts/oVdaEbWNex0",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1Ph9mYC4y1FU-HqjgQjoF4fTKz1WeWuqZ=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1Peg1_uIO9AD-cVEKEiZikTRI3u5fcCtq=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Semp Toshiba",
    Título: "SEMP GO",
    Subtítulo: "",
    YouTube: "https://youtube.com/shorts/4njLIHIQgwc",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1PrYGltZfV385rv5rwh2aoT3pEObF6v9f=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1PjNkN6iP8LprSREBhF9eIwLVna1wIPLQ=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Omron",
    Título: "Omron Nebulizadores",
    Subtítulo: "",
    YouTube: "https://youtu.be/8fHJV-BHSzY",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1ShrN23icV6-SWvFnkjm2HXg5aMkj3tVf=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1Sft8Kz9z5BkEIJJiV0hQj3Uradzb0HRS=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Rádio Disney",
    Título: "Rádio Disney",
    Subtítulo: "",
    YouTube: "https://youtu.be/5ZgBHZxfxqk",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1Sb3AbBVdPzIFrNnrwH6uxjfxLm7B6DTS=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1SFMAoORtq30cD-mkLyQDVXSD9UwPw22k=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "CNN",
    Título: "CNN | 3D",
    Subtítulo: "",
    YouTube: "https://youtu.be/9Wpahnm-GsU",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1SF6rQ5ZcYhCfr_oLACxj5YwsEbd2SHLM=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1S4Eofc6Ove80c_rrKLSbDTG0IWTNpFb0=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Teva",
    Título: "Teva | Farmacovigilância",
    Subtítulo: "",
    YouTube: "https://youtu.be/TU97HK_0jrg",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1S3oLzQ4ql-wTwQ-H9Yp17UkTHEFNcUrz=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1Rzm20h_zC8qKzkM98q-SnTvPICBc5yHU=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Teva",
    Título: "This is Teva",
    Subtítulo: "",
    YouTube: "https://youtu.be/DlFYwNQBPSE",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1RuagUUITjkXhRry8iUt94zzGm-DhfTFb=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1PUZlDd32am0obuNmuZqjzQ-x9tFIweKg=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Abbvie",
    Título: "Projeto Doors",
    Subtítulo: "",
    YouTube: "https://youtu.be/-o4QOuxl6Sc",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1UvVFMsQ6OtrksPNWJqxUJECg1MkJnYs-=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1UuHzym4kMa6Tlhh-_Ft_O0M6wrSzPPo5=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Abbvie",
    Título: "Humira Pen - Guia de Aplicação",
    Subtítulo: "",
    YouTube: "https://youtu.be/4zBoJaYFztg",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1EItgBK5vf7Hvg1T-AKdX0NrTMbMw8WNy=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1EO5adVe1qC0ZE2E475SKx2pQfScVTvlG=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Moderna",
    Título: "Set Brasil | Ed. Moderna",
    Subtítulo: "",
    YouTube: "https://youtu.be/Q_eROVm9HmI",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1EV_v2TwLmKBrtUVwLHkuJ7Et5tANddcL=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1EZji2_uPBzZEfWh2B1EFsnnxHISGzHeL=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "ABAC",
    Título: "ABAC",
    Subtítulo: "",
    YouTube: "https://youtu.be/TDNvvWlPJeE",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1EZtpME_lNpY5K3K1b_SxXSmI7Eql8yK7=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1EjEgpjTVlBzc6O9AI0aFwwA2Z_BY8MqN=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Smiles",
    Título: "SMILES & SHELL",
    Subtítulo: "",
    YouTube: "https://youtu.be/Jx-yd8jrrY4",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1ZLDsEEthE6GtBfxDoHRoEvWtisMy1637=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1ZZEZHuXk-_tI4zizPy5HhckxH2qBvJpQ=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2D/3D",
  },
  {
    FilmId: uuid(),
    Home: true,

    Cliente: "Armored Dawn",
    Título: "Clipe S.O.S",
    Subtítulo: "",
    YouTube: "https://youtu.be/iwIus7Z3GTo",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/12vLZ-QckNNZBjZ7KUKFQxs31GRaNiKg_=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/12ssuk9i4W1JsGYcJauK1AXZZfrqL9qRE=k",
    Texto:
      "O videoclipe de “S.O.S.” da banda brasileira de Metal Progressivo ARMORED DAWN foi dirigido por *Kahue Rozzi*, da SimonSays Filmes. O vídeo mostra o encontro de diferentes facetas e personalidades de uma criança interior, uma personagem solitária e depressiva que é tanto a heroína quanto a vilã de sua própria história.\nMixado por *Chris Lord Alge* (Muse, Green Day, Nickelback) e masterizado por *Ted Jensen* (Bring Me The Horizon, Evanescence, Metallica).\nA formação atual do Armored Dawn, que inclui *Eduardo Parras* (vocal), Tiago de Moura e Timo Kaarkoski (guitarras), Heros Trench (baixo), Rafael Agostino (teclados) e Chris Oliveira (bateria).\nA musica “S.O.S.” foi escrita por *Carolina Angeli* e pelo ex-baterista do grupo, Rodrigo Oliveira.",
    Diretor: "Kahue Rozzi",
    Categorias: "Clipes de Música",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Rodhanna",
    Título: "Disco Rodhanna",
    Subtítulo: "",
    YouTube: "https://youtu.be/ju3iwtluAmw",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1RAoYtYccRRhE2ngMO53SDVDM2tRWiczM=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1RATJ10_wUkAcbqJSJ-50faGxOurO5MyM=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Clipes de Música",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Acústicos & Valvulados",
    Título: "Cinco Frases",
    Subtítulo: "",
    YouTube: "https://youtu.be/1Jb1NKfdzfw",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1R9lBdAbK9N0yi2JwYvlaWrHdV2G3E0xC=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1R6RrOrNnfbsPGTAa_i6hIrXYcB2aSF55=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Clipes de Música",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Acústicos & Valvulados",
    Título: "Deus Quis",
    Subtítulo: "",
    YouTube: "https://youtu.be/eWkaCqpXAPc",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1QvGihAHGf3HwDcycSByIuFI6GUhQ8o_k=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1Qula4dLk-O7PC4cLcqhgJeP-if8Mkpok=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Clipes de Música",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "AACC",
    Título: "Capital Inicial - Ajudar crianças com Cancer faz bem ao coração!",
    Subtítulo: "",
    YouTube: "https://youtu.be/xTg14JSAWiw",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1RDylXTStJVIKkCrS28lJA2h7YxtDRFn4=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1RCXKfj_Cb3MRkXIsCB-HdYRIMkFVaWmj=k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Clipes de Música",
  },
  {
    FilmId: uuid(),
    Home: true,
    Cliente: "DOC",
    Título: "Teaser Dalva de Oliveira",
    Subtítulo: "",
    YouTube: "https://youtu.be/pgqAaXO9lIs",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/132OQQdY28_YKlrPmXWZnOqMXr1RU3wvq=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/135Dkjxgae5o5jcmwVml4h_8FfNCjvuwR=k",
    Texto:
      'Estamos empolgados em compartilhar com todos vocês o nosso documentário em fase final de montagem sobre a vida e carreira da inesquecível Dalva de Oliveira. Este projeto é uma colaboração brilhante entre o diretor Bernardo Martins, neto da artista, e Kahue Campion Rozzi da SimonSays Filmes.\n\nNossa equipe teve a honra de entrevistar personalidades icônicas da cultura brasileira, incluindo a renomada Maria Bethânia, pessoas que compartilharam momentos preciosos com Dalva, e até mesmo figuras como Agnaldo Timóteo. Cada depoimento traz uma perspectiva única sobre a influência e legado de Dalva de Oliveira.\n\nMais do que apenas um registro histórico, este filme é uma celebração do impacto duradouro da "Rainha do Rádio" e de como sua música transcende gerações. Fiquem atentos para o lançamento, pois esta produção promete emocionar e inspirar a todos.\n\nAguardem! Em breve, vocês serão convidados a fazer parte desta jornada através das telas.',
    Diretor: "Bernardo Martins, Kahue Rozzi",
    Categorias: "Entretenimento",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Séries",
    Título: "Fábrica de Sonhos",
    Subtítulo: "",
    YouTube: "https://youtu.be/ikSQsYlxqkk",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/17RnuL6w84QFWzyrsZGY75zQ92FTQSwim=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1uuJ4eP_OenAOH-iA1JVZeCzCDzLHjxe6=k",
    Texto:
      "Prepare-se para mergulhar na fascinante história do design de móveis no Brasil nesta série de 10 episódios, com 55 minutos cada, que é uma co-produção entre a SimonSays Filmes e a Total Filmes. Destaque nos Episódios: Joaquim Tenreiro, Lina Bo Bardi, José Zanine Caldas, Sergio Rodrigues, Jorge Zalszupin, Oscar Niemeyer, Paulo Mendes da Rocha, Geraldo de Barros, Michel Arnoult e Maurício Azeredo. Cada episódio mergulhará profundamente na vida, obra e legado desses designers, revelando como eles moldaram a história do design de móveis no Brasil em um contexto de adaptação à economia e política da época. Descubra como a escolha de materiais e as abordagens criativas desses designers refletiram as transformações sociais e econômicas do país. Prepare-se para uma jornada fascinante por meio de imagens de arquivo, entrevistas e narrativas envolventes enquanto exploramos a rica herança do design brasileiro",
    Diretor: "Kahue Rozzi",
    Categorias: "Entretenimento",
  },
  {
    FilmId: uuid(),
    Home: true,
    Cliente: "Total Filmes",
    Título: "Mamonas Assassinas - O Filme",
    Subtítulo: "Serviço de Produção",
    YouTube: "https://youtu.be/n_TmFQ5XfHc",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/161SjIv61fApwDnEvJMJCIlN5vM6W6IdZ=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1rO4yWXkZIqBwcSPz9ZH3mSV0NGr4oeNd=k",
    Texto: "",
    Diretor: "Edson Spinelo",
    Categorias: "Entretenimento",
  },
  {
    FilmId: uuid(),
    Cliente: "Total Filmes",
    Título: "Mamonas Assassinas - A Série",
    Subtítulo: "Em Produção",
    YouTube: "https://youtu.be/_8G5VT4Z4G8",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1Nv5XC5sCCf5HCLXfpF_Mve2IWmW9GLJn=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/13T5K98MIgxuhDrVJl81raaTrhKSdDGTo=k",
    Texto:
      'Mamonas Assassinas: A Série - Uma Parceria de sucesso entre Total Filmes e a SimonSays Filmes.\n\nNossa parceria não apenas incluiu a produção das vinhetas de abertura e as passagens em motion graphics, mas também se estendeu para além, abrangendo toda a pós-produção da série.\n\nSomos responsáveis por uma série de aspectos cruciais da série, incluindo a montagem cuidadosa de cada episódio, a trilha sonora que envolve e emociona, a finalização impecável que garante qualidade e coesão, além da pós-produção que eleva o nível do projeto. Nossa equipe também desempenhou um papel fundamental na correção de cor e masterização, garantindo que cada detalhe visual e auditivo seja perfeito.\n\n\"Mamonas Assassinas: A Série\" promete cativar o público em cinco emocionantes episódios que celebram a trajetória única da banda que conquistou o coração de todos. É uma honra fazer parte deste projeto e contribuir com nossa experiência para criar uma série que será lembrada.\n\nA SimonSays Filmes agradece à Total Filmes pela parceria duradoura e pela confiança em nossa capacidade de entregar excelência em cada etapa da produção. Esperamos ansiosamente que esta série seja mais um marco em nossa colaboração frutífera.',
    Diretor: "Edson Spinelo",
    Categorias: "Entretenimento",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "",
    Título: "Mundo da Nina",
    Subtítulo: "",
    YouTube:
      "https://www.youtube.com/watch?v=kBrN-pTKonc&list=PLfpbyDuHNTPknb7yiNDRzV2h0SL-2zEPm",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1DLaewd1Bq1iEGPzmJMUTzj4GqZScDijG=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/11RVYlylJnhZjKsgZS6leZUQi1dr867Zh=k",
    Texto:
      'O Mundo da Nina - Uma Produção Especial da SimonSays Filmes\n\nEm "O Mundo da Nina", a SimonSays Filmes teve a honra de criar uma série animada infantil e musical que cativa crianças e suas famílias. Nossa equipe dedicada trabalhou arduamente para desenvolver todos os personagens, animações e músicas que dão vida a este mundo encantador.\n\nAs incríveis músicas que você ouve são criações do talentoso Rodrigo Água, enquanto as ilustrações espetaculares ficaram a cargo do renomado Sergio Gaiolas. A ideia brilhante e a direção criativa que guiam a série são cortesia de Kahue Rozzi.\n\nAtualmente, você pode encontrar "O Mundo da Nina" no YouTube e no canal VIVAX, onde oferecemos conteúdo que visa proporcionar entretenimento e educação. Nosso canal apresenta músicas infantis e animações que estimulam todos os sentidos das crianças, encorajando-as a dançar, cantar e interagir!\n\nOs adoráveis personagens - Momô, Duuk, Dona Tuur, Unik e Ripa - viajam por todos os lugares, trazendo diversão para todas as crianças. "O Mundo da Nina" é o seu novo destino para música infantil e entretenimento familiar de alta qualidade.\n\nConvidamos você a se juntar ao "Mundo da Nina", onde a magia da música e da diversão nunca termina.',
    Diretor: "Kahue Rozzi",
    Categorias: "Entretenimento",
  },
  {
    FilmId: uuid(),
    Home: false,
    Cliente: "Série",
    Título: "C11 - DISNEY",
    Subtítulo: "College 11 - Serviço de Produção",
    YouTube: "https://youtu.be/NLEAVgq2WzE",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1zRwyQ6TJHqXN4XvmXDRPOenQJG9XjYbJ=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1G-_7fR4_3eaC5_A3Vvizm03wLj_MUqeC=k",
    Texto:
      'A SimonSays Filmes teve a honra de realizar seu primeiro serviço de produção para outra produtora parceira no projeto "Que Talento!" do Disney Channel. Kahue desempenhou um papel fundamental no desenvolvimento da linguagem, na direção de arte e na edição de todos os 26 episódios, incluindo as versões em espanhol. Este trabalho marcou nosso compromisso com a qualidade e criatividade em produções audiovisuais.',
    Diretor: "",
    Categorias: "Entretenimento",
  },
  {
    FilmId: uuid(),
    Home: true,
    Cliente: "",
    Título: "Sexo Sem Medo",
    Subtítulo: "",
    YouTube: "https://www.youtube.com/watch?v=VUEWs9UVO5Q",
    "Thumb miniatura":
      "https://lh3.google.com/u/0/d/1PjQqBPyiO8E7XUfN6AQezZs_H6fIqeUP=k",
    "Thumb principal":
      "https://lh3.google.com/u/0/d/1XUi_z_z0F_yLL-9Ulodb2HhwqPrjugnF=k",
    Texto: "",
    Diretor: "",
    Categorias: "Entretenimento",
  },
];

filmsArray.forEach((film, index) => {
  film.FilmId = (index + 1).toString();
});

const categoriasSet: Set<string> = new Set();
categoriasSet.add("Todos");
filmsArray.forEach((film) => {
  categoriasSet.add(film.Categorias);
});

export const categorias: string[] = Array.from(categoriasSet);

export default filmsArray;
