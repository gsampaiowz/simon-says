import { v4 as uuid } from "uuid";

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

type filmsArrayProps = {
  Idioma: string;
  Films: {
    FilmId: string;
    Home: boolean;
    Cliente: string;
    Título: string;
    Subtítulo: string;
    YouTube: string;
    "Thumb miniatura": string;
    "Thumb principal": string;
    Texto: string;
    Diretor: string;
    Categorias: string;
  }[];
}[];

const filmsArray: filmsArrayProps = [
  {
    Idioma: "BR",
    Films: [
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
        Home: false,
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
        Home: false,
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
        Subtítulo:
          "O empreendedor é obrigado a emitir a nota fiscal eletrônica?",
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
        Subtítulo: "",
        YouTube: "https://youtu.be/bgRoj0I_F_o",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1Ob-3aY1ZD7Q0hxOlGA65iGyvXEXGV7rV=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1OQfFqI5eId70VE4K4g2SmtLVHo9hdV2m=k",
        Texto: "",
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
        YouTube: "https://youtu.be/Ed77aLHVoP",
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
          'O videoclipe de "S.O.S." da banda brasileira de Metal Progressivo ARMORED DAWN foi dirigido por *Kahue Rozzi*, da SimonSays Filmes. O vídeo mostra o encontro de diferentes facetas e personalidades de uma criança interior, uma personagem solitária e depressiva que é tanto a heroína quanto a vilã de sua própria história.\nMixado por *Chris Lord Alge* (Muse, Green Day, Nickelback) e masterizado por *Ted Jensen* (Bring Me The Horizon, Evanescence, Metallica).\nA formação atual do Armored Dawn, que inclui *Eduardo Parras* (vocal), Tiago de Moura e Timo Kaarkoski (guitarras), Heros Trench (baixo), Rafael Agostino (teclados) e Chris Oliveira (bateria).\nA musica "S.O.S." foi escrita por *Carolina Angeli* e pelo ex-baterista do grupo, Rodrigo Oliveira.',
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
        Título:
          "Capital Inicial - Ajudar crianças com Cancer faz bem ao coração!",
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
        Home: false,
        Cliente: "Total Filmes",
        Título: "Mamonas Assassinas - A Série",
        Subtítulo: "Em Produção",
        YouTube: "https://youtu.be/_8G5VT4Z4G8",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1Nv5XC5sCCf5HCLXfpF_Mve2IWmW9GLJn=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/13T5K98MIgxuhDrVJl81raaTrhKSdDGTo=k",
        Texto:
          'Mamonas Assassinas: A Série - Uma Parceria de sucesso entre Total Filmes e a SimonSays Filmes.\n\nNossa parceria não apenas incluiu a produção das vinhetas de abertura e as passagens em motion graphics, mas também se estendeu para além, abrangendo toda a pós-produção da série.\n\nSomos responsáveis por uma série de aspectos cruciais da série, incluindo a montagem cuidadosa de cada episódio, a trilha sonora que envolve e emociona, a finalização impecável que garante qualidade e coesão, além da pós-produção que eleva o nível do projeto. Nossa equipe também desempenhou um papel fundamental na correção de cor e masterização, garantindo que cada detalhe visual e auditivo seja perfeito.\n\n"Mamonas Assassinas: A Série" promete cativar o público em cinco emocionantes episódios que celebram a trajetória única da banda que conquistou o coração de todos. É uma honra fazer parte deste projeto e contribuir com nossa experiência para criar uma série que será lembrada.\n\nA SimonSays Filmes agradece à Total Filmes pela parceria duradoura e pela confiança em nossa capacidade de entregar excelência em cada etapa da produção. Esperamos ansiosamente que esta série seja mais um marco em nossa colaboração frutífera.',
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
    ],
  },
  {
    Idioma: "EN",
    Films: [
      {
        FilmId: uuid(),
        Home: true,
        Cliente: "CLDF",
        Título: "CLDF Flags",
        Subtítulo: "For each one, for all of us",
        YouTube: "https://youtu.be/3vYC8VUyEOY",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/168aC9jpU9N0X8Y7LatOVquBKsy2v3kur=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1ZW593XJKCAWSLNI4ryL2DT0PF5UcD1Xn=k",
        Texto:
          'CLDFs "Flag" campaign was carried out in the iconic settings of Brasília, directed by Kahue Rozzi. The film was carefully produced in 3 days, involving more than 35 team members, with teams from São Paulo and Brasília working together. In addition to having a cast of 70 members, the production stood out for its efficient collaboration between the teams and for capturing the unique essence of the Brazilian capital.',
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "CLDF",
        Título: "CLDF Flags",
        Subtítulo: "For each one for all of us | 30s",
        YouTube: "https://youtu.be/zYROSHwZYQw",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1li1P1KSHWRLuXkIxGWNUr6COcjISh-Rf=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1nInlf6bXispn84wvGXClVfRujE7olDSs=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "CLDF",
        Título: "CLDF Flags",
        Subtítulo: "For each one for all of us | Stories",
        YouTube: "https://youtube.com/shorts/s5rK9fchTQM",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1UpXYN4QZj9Odp2B7ntOjPlOsGHK7CNEN=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1Lq5P1hTPTP4IzvB9-0P-n3NrFPWQLBqz=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: true,

        Cliente: "Cereser",
        Título: "Come Toast with Cereser Promotion",
        Subtítulo: "",
        YouTube: "https://youtu.be/nMD3m_bd2aU",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1Vo0ELtrT5xJqe9QsT-uyJM-8zklVQ3bT=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1Vr4jzgwm3L3kw_Rf0kNhjs1ZaGe0JVAt=k",
        Texto:
          'Discover the magic behind the production of Cereser\'s "Vem Brindar" campaign with SimonSays Filmes. A charming film that was conceived in just 1 day, with a team of renowned professionals led by the talented Director Kahue Rozzi. With the charismatic presence of Celso Portiolli, the film was captured in 6K cinema format, guaranteeing exceptional visual quality.\n\nProduction was not limited to filming alone, but included careful finishing, color grading and a custom-composed soundtrack . By participating in the Vem Brindar com Cereser 2023 Promotion, you not only compete for an incredible R$350,000 in prizes, but you also connect to a unique cinematic experience, full of emotion and technical quality. Come toast with us!',
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: true,

        Cliente: "Audionova",
        Título: "Listen more with your heart",
        Subtítulo: "War",
        YouTube: "https://youtu.be/fIQRZxDXjMk",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1jq7kf9a-Keb1HMHsaoJjzXIsk38JhlTz=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1S6AM48APJGeCCt1ykE28Av7o3xQQS4iY=k",
        Texto:
          "In dark times of war, nothing like poetry and art to make us see a version of how to have peace with a simple gesture. *@rebornyourself_* created this campaign for AudioNova and we were lucky enough to be the ones who produced it. n*Directed by: @kahue Rozzi\nPhotography: @cellobarillari*",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Audionova",
        Título: "Listen more with your heart",
        Subtítulo: "Religion",
        YouTube: "https://youtu.be/olJRbx13aZw",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1mP3euStYgY1hFD6I7oF3yPzPTd5p7R4j=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1TcyU0CuBlcyR_gWVKPpJZWZW_ouIhCUF=k",
        Texto:
          'This powerful film tells the compelling story of two individuals from different worlds: one Jewish and one Arab. Meeting on the city\'s pulsating streets, their lives initially intersect under a veil of disagreement. However, as the narrative unfolds, an unexpected and genuine connection forms between them, culminating in a moment of mutual understanding and a shared smile.\n\nThis symbolic moment carries with it a profound message: "Listen More with Your Heart" . The film is a poignant reminder that, beyond our cultural or religious differences, lies a common humanity that unites us. It exemplifies the power of cinema not just as an art form, but as a means of fostering understanding, respect and empathy between people.',
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Audionova",
        Título: "Listen more with your heart",
        Subtítulo: "Family",
        YouTube: "https://youtu.be/OFUoGu-dlTs",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1sAssmgxtKR-_x7dS-po5xYngXsEjqlks=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1KEfAWPUmxrNbx3Rf8_NRFbpOCpukjanu=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Audionova",
        Título: "Listen more with your heart",
        Subtítulo: "Couple",
        YouTube: "https://youtu.be/d9-JiwdhQ9k",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1HJ821_IJgeUNmW-J2CjYNf1K_NJ7acD-=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1kSwnSJM_kFQT_bUnX4ldFNI0DY8EqW_v=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Audionova",
        Título: "Listen more with your heart",
        Subtítulo: "Lord",
        YouTube: "https://youtu.be/LAIwz6xrLOI",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1s4JwbDCxZqKOEoMvs0-lsbFr0q62XVDf=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1l20qRtWSn8h5dnQ9WpvmltYPZ1-jtxg6=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Universo Ambipar",
        Título: "Ambipar Universe",
        Subtítulo: "Larissa Manoela tells what Universo is",
        YouTube: "https://youtu.be/VbJLzXdw7PE",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1e8gR_bpCcEpJ72zPfiZCD9gkVRB27sRp=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1Rxlu9GCnE0p6AopFq4_6V6ExTiRMz5ly=k",
        Texto:
          "Universus stands out for transforming waste into innovative biodegradable products, and to highlight this initiative, SimonSays Filmes produced a series of films for social media, starring the charismatic Larissa Manoela. Filmed at the Universo store in São Paulo, the campaign resulted in more than 80 pills and a main film, highlighting the importance of sustainability. The essence of Universo's message, combining talent, creativity and environmental commitment.",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Universo Ambipar",
        Título: "Ambipar Universe",
        Subtítulo: "Presentation",
        YouTube: "https://youtu.be/d5s4V_aj-T4",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/11Ha652rn7y_zHE3QFV6TyNsns4dU9QLk=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1TQeMF1dT8v-58AH-s8uPInvsUSEKO4bS=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Universo Ambipar",
        Título: "Ambipar Universe",
        Subtítulo: "Ecological Alcohol",
        YouTube: "https://youtu.be/POctFA30l7Y",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1uMFpH49_uN3C-BK1NGQXTKkvtENZhATY=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1qOK9BCaqyz48EC4uZRTq6i7JbJByIl0i=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Universo Ambipar",
        Título: "Ambipar Universe",
        Subtítulo: "Biocapsules",
        YouTube: "https://youtu.be/EObdGTPCdko",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1ixFIgHhuVq1WRZWHTrOYPtTLwT5BKzBm=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1El766VJJl1IA7Tt7bmIh8coy8dfzNsuB=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Universo Ambipar",
        Título: "Ambipar Universe",
        Subtítulo: "Biombo",
        YouTube: "https://youtu.be/DhyJmAt3EKU",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1Lf6Ks4IAS_6-tASkH1tCtMT835s2xNj1=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1IJp03sJsLrWTV0s9mC07a10jxav9zNNE=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Universo Ambipar",
        Título: "Ambipar Universe",
        Subtítulo: "Conditioner",
        YouTube: "https://youtu.be/HtfPs82m8eg",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/13eQFBYHFqtogivlKkEiSbZNVkeCp_AFg=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1ymSQbWfg0g18g01rxmEaKaz3Ig_W-OFz=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Universo Ambipar",
        Título: "Ambipar Universe",
        Subtítulo: "Ecosolo",
        YouTube: "https://youtu.be/DkEhZZcvOsk",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1dT9ZKXmvqrRzO3kJNBkhuw9TuLwmqGhQ=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1mGjWyM-jekC7aUDYwyeYjfUS6jFyxpr-=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Universo Ambipar",
        Título: "Ambipar Universe",
        Subtítulo: "3D Luminaire",
        YouTube: "https://youtu.be/GyFOWHyjytw",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1mk16DyAkEmktbZ2Zk1xrk4OqL5sJqgD5=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1sQGqIoVeY2mCWlZf-7YhmCDEEUiBmdJw=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Universo Ambipar",
        Título: "Ambipar Universe",
        Subtítulo: "Luminaires",
        YouTube: "https://youtu.be/4RimYS5c-yQ",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/13Fs3ssWlQ8PEVtPB9jq6O0GKG3Gyx5xO=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1lboiIgItX9eblwoHQg0U4JXB29vS66N1=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Universo Ambipar",
        Título: "Ambipar Universe",
        Subtítulo: "Jumpsuit",
        YouTube: "https://youtu.be/NQrd0BWCXlY",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/12O9vmQzQn6Qc0v0xMAf8fUJtN_l-j1nt=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/19cZLEKZ3mY-wVSlCfbRWA79cNYNxLlip=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Universo Ambipar",
        Título: "Ambipar Universe",
        Subtítulo: "Bedside Table",
        YouTube: "https://youtu.be/cr9tVH4t48o",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/109fszHeYvEVY_7wN9ScaZJAiL4Xx2mCQ=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1N9ct-JbN2oo4VZE0OHr7qGNqUneqVfe5=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Universo Ambipar",
        Título: "Ambipar Universe",
        Subtítulo: "Obsolescence",
        YouTube: "https://youtu.be/vugRJ_CuBCg",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1DbwV7kOzh-BsmFpESZGJd_7-2mrpLrAS=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1eiVVTXbTQ93an8Iuo62uepLU3aGLIWAP=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Universo Ambipar",
        Título: "Ambipar Universe",
        Subtítulo: "Bubble Wrap",
        YouTube: "https://youtu.be/S-2X_6ikYyQ",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1Rij61v-Gs0AWGspwIIx9geYzIfIfGLan=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1mixImKW8sRsAbgxLeWPelOm2tQ4_kjCi=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Universo Ambipar",
        Título: "Ambipar Universe",
        Subtítulo: "Soap",
        YouTube: "https://youtu.be/phfZQy8BOeI",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/12VRu9QKKkuuzOOQIhPNQRfHsBECFDrZX=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/12WLYtwrVmM6loeazWDVUTQtwctMro22W=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Universo Ambipar",
        Título: "Ambipar Universe",
        Subtítulo: "Shampoo",
        YouTube: "https://youtu.be/N69qxe6lsDc",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/12YLcM96gA_Ynh6ZzhNNS4c4kkr-mSnFl=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/12m1stWCdKKGZS9nsnjL8f6LKk6B_Y7pe=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "CBF",
        Título: "Solidarity Selection",
        Subtítulo: "",
        YouTube: "https://youtu.be/HZNBeWBg4yo",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1CYBP_c2LcPaL4Wb7lI7Ig-Bgcpc5AXHt=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1CUsB82BrRdKxJBXrA7OvMwiv60LAYw2c=k",
        Texto:
          'The film "Movimento Seleção Solidária", a production by SimonSays Filmes, is a powerful cinematic representation of Brazilian football\'s solidarity response during the pandemic. While the production, direction and technical realization were led by our team, the script was expertly developed to capture the essence of the campaign, which brought together renowned players and the CBF in a joint effort to help families affected by the crisis. The film movingly portrays unity, solidarity and hope, reflecting the spirit of collaboration that emerged in a challenging period. The campaign not only achieved its financial goal, but also strengthened the connection between sport and social action, highlighting how football can be a positive force for change in society.',
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "CBF",
        Título: "CBF Ídolos 1970 World Cup",
        Subtítulo: "",
        YouTube: "https://youtu.be/Hhrjj1fKXOM",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1A5bpRg_qa5-4Zh2lnc6Vbrn9kW8xK8N1=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1A6A1UdtcI8ScXKBVKylDfzp9hjwv9_Bu=k",
        Texto:
          "For CBF, SimonSays Filmes produced an exciting film in homage to the 1970 Brazilian team and their victory of the world Título. This project involved detailed image research, careful editing, and the development of a unique visual language. We carried out processing of images and included motion graphics to bring the historical scenes to modern life. The production was enriched with an impactful soundtrack and an engaging voiceover, capturing the essence and triumphant spirit of that legendary team.",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "CBF",
        Título: "CBF Sub-17",
        Subtítulo: "",
        YouTube: "https://youtu.be/J9Tmup0KbcQ",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1A8F2OQh_XVg1CXoC31Gsn2SL0SKecZtP=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1A6Z227ZNmBJ6EaPte8N6Khmfl61UDMNV=k",
        Texto:
          "In a unique collaboration with Rede Globo, SimonSays Filmes had the opportunity to produce a vibrant and inspiring campaign for the FIFA U-17 Championship. Thanks to exclusive access to a collection of high-quality images provided by Rede Globo, we were able to create an impactful visual narrative that captures the energy and emerging talent of this exciting youth football tournament. This campaign not only highlights the young talents of world football, but also celebrates the spirit of the sport in its purest and most promising form.",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Colegio Fereguetti",
        Título: "Fereguetti School",
        Subtítulo: "",
        YouTube: "https://youtu.be/o3n7edzFD8Y",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1Ms44cYkMjOrTPN9OC8-dwC2Nb9CNmYy7=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1OL_PkSEHp6NzzKAJZac1_FZa-EvrPorE=k",
        Texto:
          "Carried out by SimonSays Filmes, it was a project that highlighted excellence in storytelling and technical skills. With two intense days of filming, the SimonSays team managed to capture the essence and values of the school. The concept and script, created internally by SimonSays, reflected the college's educational mission and innovative approach. Attention to detail in the production, from location selection to final editing, ensured that each scene conveyed the message of growth, community and technology in an educational conTexto.",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Probe",
        Título: "Sonda Supermercados Nova Loja",
        Subtítulo: "",
        YouTube: "https://youtu.be/Va2BAjOoWuQ",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1P0FeFokrcWYpO91pKTgi7FegLEU_WdSi=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1OtM8qMotm7hYLLkfLz_zPwA3aC0zLLIC=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "FTD Educação",
        Título: "FTD Education System Campaign",
        Subtítulo: "",
        YouTube: "https://youtu.be/npPlOnwgs5g?si=LjtkAjKPd4SSbAkA",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/13en0y9PYCJo06vj4H--6ppDqj5y2zVUl=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/13sS6XIoM33L8vZuPRo16YDElBbSiLcXB=k",
        Texto:
          "SimonSays Filmes had the privilege of working with Felipe Castanhari on an innovative project. To meet Castanhari's busy schedule, we set up a studio inside a resort and enclosed a race track, creating spectacular scenes of cars at high speed. We employ advanced technologies, such as drones, micro cameras and cinema cameras, complemented by sophisticated motion graphics. The script, both innovative and captivating, together with Castanhari's magnetic presence, culminated in a successful campaign that harmonized education, entertainment and technical excellence.",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
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
          "We proudly present three distinct films, produced for Goodyear, at its test track. Each film is an ode to Goodyear's excellence in different tire Categorias: high performance, off-road and an innovative film that combines speed with effects in 3D. We use drones, camera cars and cranes to capture vibrant scenes on dry and wet tracks and on challenging terrain such as dirt and rocks. This trilogy not only demonstrates the superior quality of Goodyear tires, but also SimonSays Filmes' ability to create visual experiences immersive and dynamic, highlighting the fusion between high technology and innovative design of Goodyear products.",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Goodyear",
        Título: "Mud",
        Subtítulo: "",
        YouTube: "https://youtu.be/VECwYo9c8Vg",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1487WUajGV9wnetBkT4WHdkEwF4ceJOM0=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/148h3ZWq0grwg0xI5QIn2XB7hhymZJmaJ=k",
        Texto:
          "We proudly present three distinct films, produced for Goodyear, at its test track. Each film is an ode to Goodyear's excellence in different tire Categorias: high performance, off-road and an innovative film that combines speed with effects in 3D. We use drones, camera cars and cranes to capture vibrant scenes on dry and wet tracks and on challenging terrain such as dirt and rocks. This trilogy not only demonstrates the superior quality of Goodyear tires, but also SimonSays Filmes' ability to create visual experiences immersive and dynamic, highlighting the fusion between high technology and innovative design of Goodyear products.",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
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
          "We proudly present three distinct films, produced for Goodyear, at its test track. Each film is an ode to Goodyear's excellence in different tire Categorias: high performance, off-road and an innovative film that combines speed with effects in 3D. We use drones, camera cars and cranes to capture vibrant scenes on dry and wet tracks and on challenging terrain such as dirt and rocks. This trilogy not only demonstrates the superior quality of Goodyear tires, but also SimonSays Filmes' ability to create visual experiences immersive and dynamic, highlighting the fusion between high technology and innovative design of Goodyear products.",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Sanasa",
        Título: "Conscious Use of Water",
        Subtítulo: "Leak",
        YouTube: "https://youtu.be/Ju3oha2e68E",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/14HoLT57DaMsrtSuId44_zkCFhwrsk1pE=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/14B0sAVpGMn2CO64glfQQG9lX1kB1bZLR=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Sanasa",
        Título: "Conscious Use of Water",
        Subtítulo: "Sewage Network",
        YouTube: "https://youtu.be/j51jlCYcKms",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/14QQX44FY8kVV9mSJt-_ahjHmMU6sU0j0=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/14Qdud-VFaTp_WYjfXey1YwrMRZmKVSHb=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Sanasa",
        Título: "Conscious Use of Water",
        Subtítulo: "Construction",
        YouTube: "https://youtu.be/e4Bt54HRUOU",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/14UmHkNwIZoPBYZ8nfdFneHXisM_Avpcl=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/14Sobr10Oz0kBjJwZDrbRa26EATpOVnif=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Sanasa",
        Título: "Conscious Use of Water",
        Subtítulo: "Correct Use",
        YouTube: "https://youtu.be/bf13dUmr_Xs?si=8w6d0Zon9teGGqM-",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/14cb_-nybrpZUk9lAHcanSfXkWOExzKFS=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/14ZeKqLE1M3_UUmpdvQ1iiCIm7zR8kfOO=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "FTD Educação",
        Título: "FTD Education System Launch",
        Subtítulo: "",
        YouTube: "https://www.youtube.com/watch?v=6jovYBPkfSg",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/15IfodJgvXC2AHoYh5B6l1XyMo95nHCVb=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/15BVOo4NEdlJ2lhfxvxznjMM9oDGieYUA=k",
        Texto:
          "SimonSays Filmes had the privilege of working with Felipe Castanhari on an innovative project. To meet Castanhari's busy schedule, we set up a studio inside a resort and enclosed a race track, creating spectacular scenes of cars at high speed. We employ advanced technologies, such as drones, micro cameras and cinema cameras, complemented by sophisticated motion graphics. The script, both innovative and captivating, together with Castanhari's magnetic presence, culminated in a successful campaign that harmonized education, entertainment and technical excellence.",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: true,

        Cliente: "Ministry of Health",
        Título: "Doctor Gotinha Responds",
        Subtítulo: "Part 1",
        YouTube: "https://youtube.com/shorts/mEkDrrGJw4g",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1S0x--Uvjnc2GvIOqq7ICjo26myP2X84U=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1--N84fqSicrhERQfZWzvwvOpcQw5nXuC=k",
        Texto:
          "For the Ministry of Health's \"Dr. Gotinha Responde\" campaign, SimonSays Filmes developed four distinct films, filmed in 4K to guarantee the highest visual quality. The production featured a real cast, adding authenticity and impact to the messages about the importance of vaccination. Using cutting-edge technologies such as motion graphics and 3D animation, the team brought Zé Gotinha to life, creating an educational and captivating environment. This series, efficiently produced in a single day, exemplifies SimonSays Filmes' ability to combine relevant content with technical excellence",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Ministry of Health",
        Título: "Doctor Gotinha Responds",
        Subtítulo: "Part 2",
        YouTube: "https://youtube.com/shorts/8xM6s64ckmo",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1ZfgWRWgm0PsaM0vc_E1w27Tir35oDt3b=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1N_vM6Yx1jEoFvQMAU1T6_NfCEV5QzesF=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Ministry of Health",
        Título: "Doctor Gotinha Responds",
        Subtítulo: "Part 3",
        YouTube: "https://youtube.com/shorts/hBJHLsjCxNU",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1NkQVBWmByFSNvvhGV19EXgtByvlN4MdA=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1hdsVXakE_HVVI9uAb1DAGMg_O4jWiWVr=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Ministry of Health",
        Título: "Doctor Gotinha Responds",
        Subtítulo: "Part 4",
        YouTube: "https://youtube.com/shorts/MNjIHkmqkBg",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1V6HU74gyBi1IA2iQPAWFHjKUJsvUzFCK=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1G8iqWRlpBNyJa3pdlY2RKuCOIhrkmkyM=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
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
          "For the Mini Connected campaign, SimonSays Filmes produced a series of films that include two main films of 60 and 30 seconds, along with extended 80-second versions for the internet, as well as seven specific films for social media. Production took place in a spacious studio, equipped with features such as a crane, dolly and special lighting, ensuring that Mini Connected was the highlight.\n\nIn post-production, there was a dedicated focus on high-quality editing, graphics and visual effects, ensuring a stunning finale.\n\nAdditionally, the campaign featured a diverse cast made up of over 10 people. The meticulous production of accessories such as watches, rings and jackets were essential to personifying the Mini Connected user. These details added authenticity and sophistication to production, highlighting the precision and refinement of the work carried out.",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Mini",
        Título: "Mini Connected",
        Subtítulo: "Social Networks",
        YouTube: "https://youtu.be/wwfQtI3PwTg",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/158aLvgJ67HEXuSNN3jS5N4TbDyURfXtl=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/159tvEBYOTgfz0HD7cJhkPQTnlz94949r=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Locate",
        Título: "Locates and you in the same direction",
        Subtítulo: "Carreto",
        YouTube: "https://youtu.be/OdLYJKvYSMc",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/18oEM10Ux6g9byl4-6IDTQIcutAtVKuRz=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/18pEa5E9IGWVhwf1Ybul_mz5fHqEcarPc=k",
        Texto:
          "For the Localiza Rent a Car campaign, SimonSays Filmes produced a series of seven films, each 30 seconds long for the internet in 16:9 format. Production was carried out in a studio specially prepared to film within a car, providing a unique experience. With a large cast and varied scripts, each film highlighted different aspects of Localiza's services and accommodations. The production included special lighting to highlight the quality of Localiza's cars and services, as well as high-quality post-production quality to ensure clear and engaging messages.",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Locate",
        Título: "Locates and you in the same direction",
        Subtítulo: "Uber",
        YouTube: "https://youtu.be/RDc2N2TWzqo",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/18pPYd4Yyb-Y-hOqbeFf-FmwUT6A9ZmTN=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/18qUISd38Sbu-WH7MVmEhqIL2n6QQ-kYB=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Locate",
        Título: "Locates and you in the same direction",
        Subtítulo: "Lolla",
        YouTube: "https://youtu.be/Uhot7M6iFZE",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/18rLFrT3B0ugipJbSyhv5SfLWQyqHqRSj=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/18r9LC-gHvQUUdKQwd0qAvaOWJYHQrBgx=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Locate",
        Título: "Locates and you in the same direction",
        Subtítulo: "Bira",
        YouTube: "https://youtu.be/aHRBv9DyA9Q",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/18xskW2vF8d-lbkpzcPkYy4VTu7DtDZ0o=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/18vBNi2ZnpOctlsQ4R5uVgA4jG1gStltf=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Locate",
        Título: "Locates and you in the same direction",
        Subtítulo: "Station wagons",
        YouTube: "https://youtu.be/azRulD189NA",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/18zRA2xY-zv4p7tnTVfCaT5KQyMR_VVJA=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/18yYyk3P4im4qZ6LOWpc1tyDU2MSNQMTR=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Locate",
        Título: "Locates and you in the same direction",
        Subtítulo: "Vampire",
        YouTube: "https://youtu.be/BM8H7VPJ-Yk",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/19-2JVkzClnWm2r25HztwO11i1k3zRqTm=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/19-LzxOhgPuXNudqg5VTqc8sK1t1fwlqV=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Prefeitura de Osasco",
        Título: "Osasco 58 years",
        Subtítulo: "",
        YouTube: "https://youtu.be/IVTuwKnBqe8",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1IQQ8rD56CNAztlP0d_TrBBvXtWQKIR39=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1IPKrO4Q7170jnrgQyHOcJqqmXp7ZNgzt=k",
        Texto:
          "The production of a special film to celebrate the 58th anniversary of the city of Osasco was a celebration of the local identity and community. The film featured a cast composed exclusively of Osasco citizens, highlighting the authenticity of the city. Iconic locations in Osasco were chosen as scenarios, allowing viewers to recognize themselves in the landscape. Additionally, active community collaboration enriched the narrative, reflecting the community spirit that defines Osasco.\n\nThis production represents SimonSays Filmes' commitment to creating content that connects and celebrates communities , highlighting Osasco's unique identity and its commitment to authenticity and collaboration.",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Prefeitura de Osasco",
        Título: "Participates Osasco",
        Subtítulo: "",
        YouTube: "https://youtu.be/7AIKyaTdd28",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1COr_wBD_w2YuZz_cAFpN2-iZawGTz30a=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1CJ0DT2qTBawFGdJrzHCsAWfTk5H7ey43=k",
        Texto:
          "SimonSays Filmes created a series of four films for the PARTICIPA OSASCO program. Each film is like a piece of a puzzle that reveals the complete picture of the Osasquense community, highlighting key city hall programs such as health, housing, education and safety. With meticulous assembly of the pieces, these films highlight the importance of these programs in the life of the community. The production exemplifies SimonSays Filmes' commitment to creating engaging and quality content.",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Fumcad",
        Título: "Reflection",
        Subtítulo: "",
        YouTube: "https://youtu.be/sYX20-XYA3o",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/12yvIaSWQMdzVHZqkvroDRr6GVxyCNw8V=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/12yILVSDNB502WnwwJv9-MuCjKnyFuL8W=k",
        Texto:
          "The film commissioned by the City of Osasco is a high quality production, filmed in carefully selected locations, with a well-chosen cast and costumes. Furthermore, the production included the production of special objects to enrich the narrative, demonstrating the commitment to excellence .",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Fumcad",
        Título: "Dragon",
        Subtítulo: "",
        YouTube: "https://youtu.be/qPAgY2A0IKk",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/14sdCW4VPVtxCl0LwlqBY4kHjoJZ1qeIJ=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/14xJ3PYKrwLc76UytUhd5c43ooVWPijth=k",
        Texto:
          "Municipal Fund for the Rights of Children and Adolescents (FUMCAD) of the City of São Paulo seeks to benefit projects from entities approved by the Municipal Council for the Rights of Children and Adolescents (CMDCA). There are many assistance, education, etc. projects aimed at the development of children and adolescents. SimonSays had the opportunity to produce a video for Fumcad Osasco to raise awareness and request donations to the project.",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
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
          "Our production for the Zeiss | UV Protect Campaign is a perfect harmony between technology and creativity. Using advanced chroma-key techniques and the effective NUKE tool, we transport our cast to stunning settings based on real stock images. Each scene is a visual masterpiece that highlights the importance of UV protection.",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
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
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "ESPM",
        Título: "ESPM Transforms your World",
        Subtítulo: "",
        YouTube: "https://youtu.be/diH5bJwSvoo",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1CeXFz5cOsTjAUQLDb2ZMFRg0HtlJFCda=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1CZm8DEi--zzxKqVxExDNGloqQ61xdbwl=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Safra",
        Título: "SafraPay I Chose",
        Subtítulo: "Best Conditions",
        YouTube: "https://youtu.be/6tq-gbcv0Qw",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1LczmUlt5ZYouUN5vTURFakP-V0ExZVoF=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1LZY5NffRIM0x0m0SplWU1i_UDshRmzE6=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Safra",
        Título: "SafraPay I Chose",
        Subtítulo: "Personalized Service",
        YouTube: "https://youtu.be/P-hUb4TqHS0",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1LTyxa6JbjMQYlhewxMHu7klJNqqthZaD=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1LJt4V7hVe-6xZ0dG2yMIBIoAbFn1LmOQ=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Safra",
        Título: "SafraPay I Chose",
        Subtítulo: "Pay Less",
        YouTube: "https://youtu.be/EZS-Fq7zpZk",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1LHodyGben5e3AGY2Rk35ovq4Ug3qI-MZ=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1LAtAgQFURu_j8Be48KhixsO-h7GF83jR=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
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
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Osasco",
        Título: "Corona Hug",
        Subtítulo: "",
        YouTube: "https://youtu.be/-OOlYhhJMqM",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1N3NnXDTnJ95TnumYvJg5mcXf46mglzUY=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1N382TQ4hr3BHgz9yaufEURcrzS6F_fJ7=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Sanasa",
        Título: "World Water Day",
        Subtítulo: "",
        YouTube: "https://youtu.be/PPDwmfTR1oM",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1Oi-N9Bqt_jSeCa2k5UKPavKt02HE9y6u=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1OfYSx2d6_z7CQSqFF5e44X5u9w8O811Q=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Prefeitura de Cotia",
        Título: "Cotia like you've never seen!",
        Subtítulo: "Health",
        YouTube: "https://youtu.be/T9L3GzMAg7A",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/18P_Ic99lMSIh3hRUSLD_u-5w9nF7nRXn=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/18PK0i7ems8hobRc938vog9_Lfe0mRR3p=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Prefeitura de Cotia",
        Título: "Cotia like you've never seen!",
        Subtítulo: "Citizenship",
        YouTube: "https://youtu.be/0uw2Gk-WRk4",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/18fF45jdEL4x_qF3SGWRy_Ec1e97qMEex=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/18YaklCjnzzDB8Bs6TeVas25RELLge0UD=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Prefeitura de Cotia",
        Título: "Cotia like you've never seen!",
        Subtítulo: "Urban Mobility",
        YouTube: "https://youtu.be/OUJwEFvpeKY",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/18Y3FKF35Z9V7biV8DVcSsSUWqbLVzrAR=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/18Wsqg7Ws9rZIyyXmAU58YfC7MUI1q3Xd=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Prefeitura de Cotia",
        Título: "Cotia like you've never seen!",
        Subtítulo: "Education",
        YouTube: "https://youtu.be/MOV2jA3CsnE",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/18VGQQyzDOypQdUYbwpZIXgdTtTkgQagb=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/18Sfy7xef4vb4CPVcHc5iVM2hZM3aMtSW=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Prefeitura de Cotia",
        Título: "Cotia like you've never seen!",
        Subtítulo: "Investment",
        YouTube: "https://youtu.be/ASFmEnW8dnE",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/18mVGP0-cznfByxIedqba7ptpVhKC7XI8=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/18fFOAXxdM8rnCDaZoMDHI9U0JXQ5GreP=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Prefeitura de Cotia",
        Título: "Cotia like you've never seen!",
        Subtítulo: "Daily Mother",
        YouTube: "https://youtu.be/trpBwU78zP8",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/18mcTUQ9iEuJMMuyUehgWXY7x3J68F9av=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/18mVm_cRe9Tj9CZVWywtmlAHG8-dG7uLh=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "CFM",
        Título: "Health in Brazil",
        Subtítulo: "",
        YouTube: "https://youtu.be/Tau6KXDVAIM",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1QUQXvgRbmTFoj66Qde0p4YKzswiEeZQD=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1QPm-BmUoyVaZX2iwSz-qoBPH1ZFGlcgB=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "FMU",
        Título: "FMU Entrance Exam",
        Subtítulo: "",
        YouTube: "https://youtu.be/AJ3gIFJMqJ8",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1O7Yn70d18UfPdV0PCR66l7ijVNe3r36V=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1Ny9Q1xaGoKlPR4Bkz_eFX5s07DApKIo-=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Safra",
        Título: "Help the Owner",
        Subtítulo: "Small Income Tax",
        YouTube: "https://youtu.be/R4_XcqXjXcI",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1XuwRnJOChHiuN9pJCsvn4PxfaVvzAXrV=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1Xsfsh5M5oSH_ccrJwzQ2LXdWLUusB0md=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Safra",
        Título: "Help the Owner",
        Subtítulo: "MEI annual statement",
        YouTube: "https://youtu.be/f93HCQ8D6TA",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1YNtFIEpem7l4kFphU5DJmyK0djUUPh0t=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1YCv4qFtOw0_kj71B4kBi3dj_bwTRuJ-2=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Safra",
        Título: "Help the Owner",
        Subtítulo:
          "Is the entrepreneur obliged to issue an electronic invoice?",
        YouTube: "https://youtu.be/HkyPf3soK0A",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1Y4dIAKky60JqH5xVvDGfaYCZo2hE9r3v=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1Y3CsUWz-Hz_SSkNPzI9Ve2kDwjsA-0Gr=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Safra",
        Título: "Help the Owner",
        Subtítulo: "MEI rights and duties",
        YouTube: "https://youtu.be/kw9xpbLgv-8",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1Y2z6mP0VhvX8AYeQsnHpnr6Zk_QldGSR=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1XyGCSu6Y2919YH_0i1J9eUQ3Xayf35F4=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Batata Inglesa",
        Título: "English Potato",
        Subtítulo: "",
        YouTube: "https://youtu.be/GSqPxtuw3Zo",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1CPUv_hVXIqXQQZb5fw60wZ__pOFthPrw=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1CRB2-K46SxwRi4XsfW34WQLWsuShldzn=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Di Pollini",
        Título: "Di Pollini Artisan",
        Subtítulo: "",
        YouTube: "https://youtu.be/4-YUNaCCXBM",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1NnpnsNYZJaIf0d5JGwTVmdgZcCxPott4=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1NlmTTyZ79SF7x1NaYp9SHZ3-y654f4sN=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Guarani",
        Título: "Independence",
        Subtítulo: "",
        YouTube: "https://youtu.be/l-OpiotvaaU",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1DhY_x76HoHDeNxiH6gnQDVXas713zFkb=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1DpCAioDQKELkL7C2XLjjcgDEZ48aiQbj=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
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
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Lifan",
        Título: "Lifan Sales",
        Subtítulo: "",
        YouTube: "https://youtu.be/Yoi9W6sAfI0",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1IKPn_yFJxHu4VaAlEJoXPhlype1EMa2b=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1IF-g_cZMaPMkuqp5-rdIoVJVvmxEz1SN=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Pfizer",
        Título: "Generation Z",
        Subtítulo: "",
        YouTube: "https://youtu.be/wFkh479tVEo",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1GYafmAhrs4z5m7JDa7SOZiRKZy8jttL1=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1Gj6Gmu-jZlfrdDljyIWdXrEb4oNEhrjS=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Gou Odonto",
        Título: "Gou dentistry | Dental Clinics",
        Subtítulo: "",
        YouTube: "https://youtu.be/kE1ZdLrqSII",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1NdIzsEp5Aqu7YvkDx00CP9Nh0ZTXp-Fk=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1NXEUlls-LyxZVls-z_2vfs72rJotRvPj=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
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
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Shape",
        Título: "Camp Experience",
        Subtítulo: "",
        YouTube: "https://youtu.be/uphz4Ixfnc0",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1V9aDg-S0yit0m-mb08n7LkWbv-uinIiU=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1V-zPZtYsnW3dKh8qOERV7BNfA-rq5j4C=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Rio Branco",
        Título: "Constructora Rio Branco",
        Subtítulo: "",
        YouTube: "https://youtu.be/2tUGBwqqVjQ",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1L5URwJmnV-S7AJlFurwoL7xyZ31vP8CS=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1KzQJHOkbyWCGlSTV22MyggECl40hY0HI=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Dailus",
        Título: "Dailus Colors",
        Subtítulo: "",
        YouTube: "https://youtu.be/bgRoj0I_F_o",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1Ob-3aY1ZD7Q0hxOlGA65iGyvXEXGV7rV=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1OQfFqI5eId70VE4K4g2SmtLVHo9hdV2m=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
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
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Shape",
        Título: "Trip of a lifetime",
        Subtítulo: "",
        YouTube: "https://youtu.be/aLVN2soaevs",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1NMd6VMAiCHejFMB647vyCGdpOb1UTkST=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1NLsqE27pQiBB9fq2FYwn1lhWcC8pBpOJ=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Agaxtur",
        Título: "Travel is Necessary",
        Subtítulo: "",
        YouTube: "https://youtu.be/t_Z5F15b5cI",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1NkskHfSnXDVyszYFEZNy-A-V_5YRJi3w=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1MqL7xLmZN3UC0DnB-h5iAeUAr4xt_8l1=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Café Brasileiro",
        Título: "Brazilian Coffee",
        Subtítulo: "",
        YouTube: "https://youtu.be/DjKN85z0wjU",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1ZAGbaYzBvrzRw4MiniChjxQtAotlnb1M=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1ZC0rdWboUvDEncG4KQ21c1cO9THilD9n=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Yamaha",
        Título: "Dreams",
        Subtítulo: "",
        YouTube: "https://youtu.be/t9EBdlC5cRU",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1Q3rHovWfUw3g4DoGRtqIyU_YhTzycOeD=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1Q3lgiKmrGW2xMfujpVU3jYoTQoHAzsSN=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Ministry of Education",
        Título: "OBMEP | Mathematics Olympiads",
        Subtítulo: "",
        YouTube: "https://youtu.be/Kjwyn0puhMs",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1PLt0lX-hWmvt4nV0oFPZl7ZjoZrOhfgS=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1PKmOav3aB4tGqoBZQzBKvsOAUPScY_a8=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Colégio Marista",
        Título: "Marist College",
        Subtítulo: "",
        YouTube: "https://youtu.be/2eQh4fPHti8",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1PFUVIXxgCZsKXsKpT35f0fH1C-wN7gL6=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1PAtyb2Sz-ESvi037jmHnBABw0Kna_HrO=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
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
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Goodyear",
        Título: "Happy Holidays",
        Subtítulo: "",
        YouTube: "https://youtu.be/jjqO8xembx4",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1Murb7S6qwV9anrrtR_rQKyctduDOnhLk=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1MsDQdA6tHNQPVWpodWC1KtM3NYmVWIOi=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: true,

        Cliente: "CBC",
        Título: "Institutional 96 Years",
        Subtítulo: "",
        YouTube: "https://youtu.be/peB2AldqgpQ",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/13WDZ4Ag-bQS3JMsmFvG1UIPeCC4AllO8=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/13Y3Gmm1rm4tXw8pgodsYN8dQTH16OFk2=k",
        Texto:
          "A remarkable production by SimonSays Filmes, created to celebrate CBC - Companhia Brasileira de Cartuchos' 96 years of history and excellence. Taking place in stunning locations in São Paulo, Ribeirão Pires and Porto Alegre, this four-day project captured the essence and CBC's legacy through spectacular aerial shots and high-quality cinematography.\n\nThe script, developed by our in-house team, was meticulously crafted to highlight the strength, precision and reliability of CBC's products, reflecting its commitment to innovation and safety . Additionally, aiming to reach a global audience, we produced versions of the film in English and Spanish. This initiative underlines SimonSays Filmes' commitment to creating audiovisual content that combines quality, creativity and international appeal.",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: true,

        Cliente: "Protect",
        Título: "Institutional Protects 50 Years",
        Subtítulo: "",
        YouTube: "https://youtu.be/qnQeiOs3JHE",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1AxQPnmkx8j6NCG5mrhPkDyUQQwZJai_e=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1Af3QOfV0jGG6-vvZJ35EjizFLFEn2kk9=k",
        Texto:
          "Created to celebrate five decades of Protege Group's history and excellence. Filmed on location at Protege's stunning headquarters in São Paulo, this three-day project captured the essence and legacy of Protege with spectacular aerial shots and high-quality cinematography. n\nOur roadmap, meticulously prepared by our in-house team, highlights Protege's commitment to safety and logistics.",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
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
          "Produced for the CBC Academy, which brings together CBC players, judges and leaders. Filmed on location at the stunning CBC headquarters in Rio de Janeiro, this four-day project captured the essence and legacy of the CBC Academy with spectacular aerial shots and cinematography of high quality.\n\nOur script, meticulously crafted by our in-house team, highlights CBC Academy's commitment to sports development. Each board reflects the dedication to promoting sport and nurturing new talent, reinforcing that, for us, This is not just a production, but a partnership dedicated to success in the sport.",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
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
        Categorias: "Institutional",
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
          "The VTEX Live Shopping App is the native live shopping experience solution that is revolutionizing the global market, and SimonSays had the privilege of producing a promotional video for the platform in English, which was also translated into Portuguese, Croatian, French and Spanish. In addition, we conduct a full live broadcast in English on the platform, with simultaneous translation into Portuguese.\n\nCurrently, more than 100 companies from 10 countries have already adopted the VTEX tool, demonstrating the global expansion and the impact of this innovative platform.",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Locate",
        Título: "Fidelity",
        Subtítulo: "",
        YouTube: "https://youtu.be/gbRKmnF_oM4",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/199sdGQeiH9PjUn8gwNj0K91pM6mcGhZ3=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/195Efa9OEIB2qHvFnpscmJ0w9fAqnaL7w=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
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
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Sanasa",
        Título: "Institutional Sanasa",
        Subtítulo: "",
        YouTube: "https://youtu.be/UF2Rs63dB78",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1KxVwJMY3WrY6EolpWIikJFm60vehFKWH=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1KwPhwMYrUM7FjyVf_zwj-Fj9qz2NZuja=k",
        Texto:
          "In this project, we delved into SANASA's operations to unveil the process of purifying the water that supplies the city.\n\nThere were three days of intense filming, during which we captured each stage of the complex water treatment process, from collection to safe distribution to the population.",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Caoa Chery",
        Título: "Tiggo 7 Pro Launch",
        Subtítulo: "",
        YouTube: "https://youtu.be/XNMQb7M8G6g?si=e4jIlZchDVQO4-Z1",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/13azsuee5BXEiqeaJ80wEQ6GRq_5LUiaJ=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/13cYaEMxR0lOrR7JLSbAASE5CcKQbl-vj=k",
        Texto:
          "Exclusive launch video of the new Tiggo 7 Pro, entirely produced by Simonsays Filmes. In addition to the launch video explaining all the car's features, we also produced 35 pills for social media.",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Cosmotec",
        Título: "Cosmotec Institutional",
        Subtítulo: "",
        YouTube: "https://youtu.be/fzDu3oVEQ0E",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1BC6NAJL52oAMj4K-mNqbOK4KVlDSFARP=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1BDjDsR0N8M8dyU0yFTPkHVuPsorxTb08=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
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
        Categorias: "Institutional",
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
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Abbvie",
        Título: "Humanize",
        Subtítulo: "",
        YouTube: "https://youtu.be/06W0PrmIEaI",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1XHkvxaZtyqajiAF34heJOlhkeOqGCIw6=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1XQCsWwAq7Pc_fgHzQQo7CyY6S27Z_eiP=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Cashier",
        Título: "Mastercard Full House Promotion Box",
        Subtítulo: "",
        YouTube: "https://youtu.be/xW86zIbDqig",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1Ivr0jCkzCimpJGcRZFQm25f7gzC7bGJ2=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1It3WMCG6I4oiPwdgeyjfMCP2XUm0-Xeb=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Abbvie",
        Título: "Ulcerative colitis",
        Subtítulo: "",
        YouTube: "https://youtu.be/r9O-rMJN658",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1XYWz9S4FTJ2UgcWzcpYEvdtQcQ_6dJQg=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1XUVVG0jQ6HFcVeDgmzv88NFek8HGrmZy=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Cashier",
        Título: "Affluent Mastercard Cashier",
        Subtítulo: "",
        YouTube: "https://youtu.be/AGybaRT1PQo",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1ITU5iBEOpEUx8KqYx5H7GwVDT8D3PLB3=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1Iz-l2ilSav1u62pNR4y8mP7FNYz9c9Jb=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Petronas",
        Título: "Petronas Institutional",
        Subtítulo: "",
        YouTube: "https://youtu.be/FEuQ_3SzY08",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1BHkJHXp-FyjUosKkpz_Hds9s7TEHx9YO=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1BPe6rbLQe3YHwprcfHqg75rdrBI0fPQ4=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "McCain",
        Título: "McCain Chef SureCrisp",
        Subtítulo: "",
        YouTube: "https://youtu.be/wJ6J0xGLPLc",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1Cz5W6r5HTk-2IqcRe-zTSC5RTAbNIWHu=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1D-ph3MVoD1FRkxbTVf9-bKPaMzCrCL1s=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Lean",
        Título: "Lean 60 years",
        Subtítulo: "",
        YouTube: "https://youtu.be/BziKQe2igyw",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1Wu4JOzsWBaAvKEksnlswan1enrwQ0sI1=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1WsOd4FmcEY5529iyZXgofRUiiSz1LQZF=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
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
        Categorias: "Institutional",
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
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Cognita",
        Título: "Colegio Cidade Jardim Playpen",
        Subtítulo: "Open Enrollments",
        YouTube: "https://youtu.be/KO1t7eT_wRU",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1W5UA2oBmllFDacKefHUMi-YZJnYYtAdX=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1WSd4gV8D-8ShG7LLW-6v2hUltHfB3O85=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Cognita",
        Título: "Colegio Cidade Jardim Playpen",
        Subtítulo: "Open Enrollments 30s",
        YouTube: "https://youtu.be/DdMGp1PiPwc",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1WOWCyd3gKLMyMn-wq58NuS-uwH8NKZWl=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1WN5z4cDzhQAnESWjVHtc0fK-qksOh0tM=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Cognita",
        Título: "Colegio Cidade Jardim Playpen",
        Subtítulo: "Open Enrollments 9x16",
        YouTube: "https://youtu.be/k4us-DrBoww",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1WIX3_xl8wAl2RkpKDb8nN-nxjG-q4njq=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1WGzwCTcIY-TMxS0nfeapdRjTOIMSM6-5=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Cognita",
        Título: "Colegio Cidade Jardim Playpen",
        Subtítulo: "Open Enrollments 30s 9x16",
        YouTube: "https://youtube.com/shorts/Bh1bm1tJjXA",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1WBeCmFCxQqqo_bwoJ0oTJzKdUEmenYP5=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1WBVhDNRdEDChdyDWCY3Nl8-dmoYl9Xfd=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "XP Investimentos",
        Título: "Investing Together",
        Subtítulo: "",
        YouTube: "https://youtu.be/F_2qsnnKIKU",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1CkiETHpigYSJjHKO_qcC4peoXg7cLeVf=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1Cpu9yCZ5sWku-6lCrdpp1vPkrhZAWfUH=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Cognita",
        Título: "College Villares",
        Subtítulo: "Choice for Life",
        YouTube: "https://youtu.be/AK2HkF4cliQ",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1WXO374uY2uLeJ8ZIAHoEPQLZ_wJZmg_R=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1WozYWXyfqJNt5jZ6USTV6uhHIy6-0LF2=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Cognita",
        Título: "College Villares",
        Subtítulo: "Choice for Life 9x16",
        YouTube: "https://youtu.be/c9-XTy-OwSo",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1Wov3ihlDTb_bByLwMcv5S8OtxCz5MKDH=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1WnPitEDTe07_Ihk226a2Bgr3ogIWFVAu=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Cognita",
        Título: "College Villares",
        Subtítulo: "Choice for Life 30s",
        YouTube: "https://youtu.be/8vqFludlQbc",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1Wmr5V_0RbZJeJsB0wcCsoBQqcF82J5B9=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1Wm9k-vSGmivGnSAy0VMJjyzIbFZ1np26=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Cognita",
        Título: "College Villares",
        Subtítulo: "Choice for Life 30sd 9x16",
        YouTube: "https://youtube.com/shorts/bHzaNlwUXdU",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1WkBAO-SVgNE3iX1h5n00KRsg3Yj_4sJ5=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1WjWMHQRqq3AWCKN-3vTkH6w0f43jM9Wu=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
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
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Osasco",
        Título: "Osasco Testimonials Coronavirus",
        Subtítulo: "Video 1",
        YouTube: "https://youtu.be/XZwo3OHTUL4",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1XcgDF2yQdY1ajkYxaE3YIymwj8v3jAs2=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1Xs20lGtb1lrR7zRq9c1eaBKB9Xugcxgr=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Osasco",
        Título: "Osasco Testimonials Coronavirus",
        Subtítulo: "Video 2",
        YouTube: "https://youtu.be/nDDM3t-DQkg",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1XoiWoyHCpaWVjozLCuSAWE95zKFxdOUy=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1XoXUfQ7w7KYdd_gbwiGlaqFrUxJawcw3=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Osasco",
        Título: "Osasco Testimonials Coronavirus",
        Subtítulo: "Video 3",
        YouTube: "https://youtu.be/6k27tS3T-Hw",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1Xdiwfm2_GvJ7zeIylDxl3bLuK8Wvl1TN=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1XdO7b1la_bTmTbxwTc85Kgs5MBOq9Riz=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "CBC",
        Título: "New Weapons CBC by Khan",
        Subtítulo: "",
        YouTube: "https://youtu.be/7ipDJi3Amy8",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1BgltH2f6tSLlWu--ayvrGpl2JImK1GfE=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1BjP7sA8O0ZNwa17f-3Mz8iRly_-KrvMU=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "CBC",
        Título: "NTA Ammunition Review",
        Subtítulo: "",
        YouTube: "https://youtu.be/uuS9N_90yiY",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1BwgX4AG9RamTy5WYFwCTSFh_lFWznhuA=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1BxPJX1UbbeALrvEK3MYqPzdPeegAX5xZ=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Taurus",
        Título: "TS9 Review",
        Subtítulo: "",
        YouTube: "https://youtu.be/dUtdgk4llMU",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1C4Bke4GtS1KKhsVuy4ywdK8tCmoCWUkd=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1By5lYnx3ULD8kSw9bvqAnqMGmUrCDtLf=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Happiness",
        Título: "Happiness training course",
        Subtítulo: "",
        YouTube: "https://youtu.be/uQl21HXigr8",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1PeJMJ0Krs3Bsq6Igb_uq8YoU0gwBox8g=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1PcVfwRDUba3vIuefgxEzDph1JvBIA9jv=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Happiness",
        Título: "Happiness Method Presentation",
        Subtítulo: "",
        YouTube: "https://youtu.be/u23WHzTARIM",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1PaeuZKttMXMnjZeOUe6EkiZKkjO-4639=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1REwdRt_5sriQ0s5Nbu_iNBes-Rlt0ft9=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Fernandez Mera",
        Título: "Fernandez Mera | Broker's Day",
        Subtítulo: "",
        YouTube: "https://youtu.be/p3VLxw8ispc",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1NF1FKYZsXUkQ1rmmKqiIeFjZ9c-P_9j6=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1NCU8IwEPVM_VPERpDWKG_4W1_-ygVdkE=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
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
        Categorias: "Institutional",
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
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "FACSP",
        Título: "Institutional FACSP",
        Subtítulo: "",
        YouTube: "https://youtu.be/DNsD-w4h1Cc",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1GAqF6yNmKCJ8A89-t5F2CHY3lnqWSkwB=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1GBxTEoG93hSBNLNmbvpXuOJHhPuuLbKe=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Cielo",
        Título: "Cielo Companies",
        Subtítulo: "",
        YouTube: "https://youtu.be/Qs9YIJ5XzQ0",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1IbZ-N0JMyAMGRYkwv678BYhyW5Y8FPB6=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1Ib5yhJ2bBy_xN2D2DxODkrj5JLdKnErt=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Safra",
        Título: "Longevity",
        Subtítulo: "Video 1",
        YouTube: "https://youtu.be/_ImamSSlVZE",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1U2aTrS9f66I0qOwl3xMMiKQLlXm3tKok=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1TyVAaV8RADunaAfAOs9Wt8JpsXV_P0nR=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Safra",
        Título: "Longevity",
        Subtítulo: "Video 2",
        YouTube: "https://youtu.be/2Vqk8jwDvA4",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1TwDscYOqsEuSWhRgf-8ZWTaN8sa2e_dV=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1TqTk_i544ejXDAk_RgGzihO4lh-jgBKk=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Inspirali",
        Título: "What inspires you about medicine?",
        Subtítulo: "Episode 1",
        YouTube: "https://youtu.be/uUmSN6TRIJY",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/19D6483Qqs2CChNqoHzkoSgKWLcQ6uf9Y=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1A0e7EY0juB57BLrbYqK-RxLGeYoE1w6t=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Inspirali",
        Título: "What inspires you about medicine?",
        Subtítulo: "Episode 2",
        YouTube: "https://youtu.be/jinIQoKGEl4",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1A0XqrH1laTienXxKzXRDh_ddg-l9tXre=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1A-tss43EfnKNaI3svqQfMis_lkeNgBQn=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Inspirali",
        Título: "What inspires you about medicine?",
        Subtítulo: "Episode 3",
        YouTube: "https://youtu.be/5Ve8FjPuowE",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/19klB9u2G0qAuMLCEp27XofgmMPEreYVq=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/19jJ6m0QpZcczUuPtGuJ5RmgxColbEfvX=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Inspirali",
        Título: "What inspires you about medicine?",
        Subtítulo: "Episode 4",
        YouTube: "https://youtu.be/i6ofRMad71A",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/19aLgwNiOovNQXKUS1W37vEo1UkFIPLnE=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/19_UABzmWjhG4gPpyv6qaFNYNPeneQJbx=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Inspirali",
        Título: "What inspires you about medicine?",
        Subtítulo: "Episode 5",
        YouTube: "https://youtu.be/AZIZrJV7JOQ",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/19O6tVjK-jNz6CESbV7dFvS6vmAgjmAIn=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/19EKg1GBagiDFYyCGkouFxGSh5u5SzlOq=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Prefeitura de Cotia",
        Título: "Cotia 166 Years",
        Subtítulo: "Video 1",
        YouTube: "https://youtu.be/Y7wyVVbjdqE",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/13n_dZ7yw7Ar1ydIz54_G0b8Je-q-B1YS=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/13sw7Sbj5ozh3VIYoIExxYVl0fTpiejjV=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Prefeitura de Cotia",
        Título: "Cotia 166 Years",
        Subtítulo: "Video 2",
        YouTube: "https://youtu.be/cnREagPUkRE",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/13saO-_xvgUyk4e3ZJHVKcq6xqIDSEwAs=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/13p2zB9gKJ_WqsPRSh-1Uw28-aJibQ38J=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "More Solution",
        Título: "Institutional Solution More",
        Subtítulo: "",
        YouTube: "https://youtu.be/wirYreRTQzI",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1K5i21TvN4aLKeMVNrkkfpJtwGE-I0yXV=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1K4Bz6uwyL6RKGJU84w9jfvB18LS2WnSg=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "More Solution",
        Título: "More Manifest Solution",
        Subtítulo: "",
        YouTube: "https://youtu.be/MYVvDjXCwvs",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1VACPTIWsy9z5yb3cXRW5mT39cmFxd-OH=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1TCYgSmuoidMIhtn9NqSvKamyMrMOF0kG=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
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
        Categorias: "Institutional",
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
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Dynamis",
        Título: "Institutional Dynamis",
        Subtítulo: "",
        YouTube: "https://youtu.be/AXgYUXh5gGw",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1VmxN1vId8FAdQ1ftcccrvkU5j9JPfepC=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1VmkwldgV247-3DtWRjUTD83t2GnLtwqt=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
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
        Categorias: "Institutional",
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
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Puma",
        Título: "Secret Running Society",
        Subtítulo: "",
        YouTube: "https://youtu.be/MA9kES3cpLc",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1Qjw2Eke800oBN1URyPAyea5rG5S_qXiX=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1QbPQmGWEVxpQaMwJbAQFMa8gbpnvJW1x=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Puma",
        Título: "Forever Fast",
        Subtítulo: "",
        YouTube: "https://youtu.be/D77_5_Jb4RA",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1QaaHCDl9oHsVReGWBUjOleRQa2OlNEPb=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1QVc3PAZOt9MWGGbPCD3TSEavfCw6227P=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Puma",
        Título: "Forever Faster Making of",
        Subtítulo: "",
        YouTube: "https://youtu.be/47bbJig1Af4",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1Rrxn__LtM0LFrzebGz7rtqHakdHVKj2N=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1RruplE2udPvrtFEA8G2JtPl8qf_EJ7yA=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Abbvie",
        Título: "New Company",
        Subtítulo: "",
        YouTube: "https://youtu.be/utkRaGUohlY",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1KKded4Z7_WsFTEE6H_5_zMpzZr6busTr=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1KHyxcLCr1BK8Nxb4Bf1wzOTrYAnrqKRQ=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
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
        Categorias: "Institutional",
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
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Zemplar",
        Título: "Zemplar Hemodialysis",
        Subtítulo: "",
        YouTube: "https://youtu.be/k-WXjn8Y3Xo",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1TXehBNiNUa9ISrYjrkqfuODHpo2AFAJ4=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1TSqzVFlamWAyUnYle0t1Q-3Sxw12Epxl=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Viação Amarelinho",
        Título: "Covid 19 Prevention",
        Subtítulo: "",
        YouTube: "https://youtu.be/z6NqK2kb-_0",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1TgR8BjE7aQaQ9fLThfSWlF8YmOgh-6U3=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1TfS9fJnMZL6UJgLmEy7Zs7_5hGTX2VMF=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Colegio Santana",
        Título: "We Came to Serve | Social Action",
        Subtítulo: "",
        YouTube: "https://youtu.be/1WtZCpnBSgU",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1TRcLWkcjwlSHkop0BAXUK1-NaOEKWZfm=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1TPmZZcaTpnT0ZF41XA86Tz1vpDN2in4A=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Grupo Cometa",
        Título: "Institutional Grupo Cometa",
        Subtítulo: "",
        YouTube: "https://youtu.be/7yzD3uMZGdk",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1AdEvJdB7aozU0bboT7IloJX7cfozuqHH=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1Ae-dQbjTvaCMvCvMIYRD1X8A-3kaABtl=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institutional",
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
        Categorias: "Institutional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Ministry of Health",
        Título: "Brazil Vaccine Movement",
        Subtítulo: "Measles",
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
        Cliente: "Ministry of Health",
        Título: "Brazil Vaccine Movement",
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
        Cliente: "Ministry of Health",
        Título: "Brazil Vaccine Movement",
        Subtítulo: "Poliomyelitis",
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
        Cliente: "Ministry of Health",
        Título: "Brazil Vaccine Movement",
        Subtítulo: "Mumps",
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
          "Ministry of Development and Social Assistance, Family and Fight against Hunger",
        Título: "Single Registry",
        Subtítulo: "Do you know the Single Registry?",
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
          "Ministry of Development and Social Assistance, Family and Fight against Hunger",
        Título: "Single Registry",
        Subtítulo: "Do you know the Single Registry? 9x16",
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
          "Ministry of Development and Social Assistance, Family and Fight against Hunger",
        Título: "Single Registry",
        Subtítulo: "How is registration done?",
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
          "Ministry of Development and Social Assistance, Family and Fight against Hunger",
        Título: "Single Registry",
        Subtítulo: "How is registration done? 9x16",
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
          "Ministry of Development and Social Assistance, Family and Fight against Hunger",
        Título: "Single Registry",
        Subtítulo:
          "Why is the government evaluating the records of those who live alone?",
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
          "Ministry of Development and Social Assistance, Family and Fight against Hunger",
        Título: "Single Registry",
        Subtítulo:
          "Why is the government evaluating the records of those who live alone? 9x16",
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
          "Ministry of Development and Social Assistance, Family and Fight against Hunger",
        Título: "Single Registry",
        Subtítulo: "How to keep your registration up to date?",
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
          "Ministry of Development and Social Assistance, Family and Fight against Hunger",
        Título: "Single Registry",
        Subtítulo: "How to keep your registration updated? 9x16",
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
        Cliente: "Ministry of Health",
        Título: "Take Care of Brazil",
        Subtítulo: "Now you have Pediatrics in Primary Care",
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
        Cliente: "Ministry of Health",
        Título: "Take Care of Brazil",
        Subtítulo: "What is Primary Health Care",
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
        Cliente: "Ministry of Health",
        Título: "Take Care of Brazil",
        Subtítulo: "How Primary Health Care works",
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
        Cliente: "Ministry of Health",
        Título: "Take Care of Brazil",
        Subtítulo:
          "What are the differences between Primary and Specialized Care",
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

        Cliente: "Cashier",
        Título: "SIM Digital Crédito Caixa Tem",
        Subtítulo: "Who is the credit for?",
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
        Cliente: "Cashier",
        Título: "SIM Digital Crédito Caixa Tem",
        Subtítulo: "My Caixa has been blocked, what should I do?",
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
        Cliente: "Cashier",
        Título: "SIM Digital Crédito Caixa Tem",
        Subtítulo: "Conditions and documentation for Individuals",
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
        Cliente: "Cashier",
        Título: "SIM Digital Crédito Caixa Tem",
        Subtítulo: "Conditions and documentation for MEI",
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
        Cliente: "Cashier",
        Título: "SIM Digital Crédito Caixa Tem",
        Subtítulo: "Password Reset",
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
        Cliente: "Cashier",
        Título: "SIM Digital Crédito Caixa Tem",
        Subtítulo: "Tips for sending registration documentation",
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
        Cliente: "Cashier",
        Título: "SIM Digital Crédito Caixa Tem",
        Subtítulo: "Income report at Caixa Tem",
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
        Cliente: "Cashier",
        Título: "SIM Digital Crédito Caixa Tem",
        Subtítulo: "Confirmation of registration update",
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
        Cliente: "Cashier",
        Título: "SIM Digital Crédito Caixa Tem",
        Subtítulo: "How to apply for a loan?",
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
        Cliente: "Cashier",
        Título: "SIM Digital Crédito Caixa Tem",
        Subtítulo: "Credit application status",
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
        Cliente: "Ministry of Citizenship",
        Título: "Fraternal Brazil - Food on the Plate",
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
        Cliente: "Ministry of Citizenship",
        Título: "Fraternal Brazil - Food on the Plate",
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
        Cliente: "Ministry of Citizenship",
        Título: "Fraternal Brazil - Food on the Plate",
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
        Subtítulo: "Group Life",
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
        Subtítulo: "Residential",
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
        Subtítulo: "Civil Responsibility",
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
        Subtítulo: "Zika and Dengue",
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
        Subtítulo: "PJ Damages and Risks",
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
        Título: "New Moura Battery",
        Subtítulo: "",
        YouTube: "https://youtu.be/wLOpoOKyl7I",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1Cxn2b1pkbD1HaDOCYv6-x7T6Qfcy1LyU=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1Cxi1E4NR2yBGrq-fsm6-opqbppLz0wcu=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Advertising",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Ministry of Health",
        Título: "Women's Health",
        Subtítulo: "Primary Health Care",
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
        Cliente: "Ministry of Health",
        Título: "Women's Health",
        Subtítulo: "Cancer",
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
        Cliente: "Ministry of Health",
        Título: "Women's Health",
        Subtítulo: "Prenatal",
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
        Cliente: "Ministry of Health",
        Título: "Women's Health",
        Subtítulo: "Sexuality and family planning",
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
        Cliente: "Ministry of Health",
        Título: "Women's Health",
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
        Cliente: "Ministry of Health",
        Título: "Women's Health",
        Subtítulo: "Dental prenatal",
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
        Título: "Consortium from A to Z",
        Subtítulo: "What is a consortium group?",
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
        Título: "Consortium from A to Z",
        Subtítulo: "How does the consortium work?",
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
        Título: "Consortium from A to Z",
        Subtítulo: "Why is reading the contract important?",
        YouTube: "https://youtu.be/Ed77aLHVoP",
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
        Título: "Consortium from A to Z",
        Subtítulo: "How do assemblies work?",
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
        Título: "Consortium from A to Z",
        Subtítulo: "What are the forms of contemplation?",
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
        Título: "Consortium from A to Z",
        Subtítulo: "What is embedded bidding?",
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
        Título: "Consortium from A to Z",
        Subtítulo: "What are guarantees for?",
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
        Título: "Consortium from A to Z",
        Subtítulo: "Is it possible to buy what you want with credit?",
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
        Título: "Consortium from A to Z",
        Subtítulo: "Buy a good of lesser value",
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
        Título: "Consortium from A to Z",
        Subtítulo: "What is an administration fee?",
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
        Título: "Consortium from A to Z",
        Subtítulo: "What is a reserve fund?",
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
        Título: "Consortium from A to Z",
        Subtítulo: "Consortium installment",
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
        Título: "Consortium from A to Z",
        Subtítulo: "Does the value of credit and installments change?",
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
        Título: "Consortium from A to Z",
        Subtítulo: "What happens when you pay in advance?",
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
        Título: "Consortium from A to Z",
        Subtítulo: "Is it allowed to receive credit in cash?",
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
        Título: "Consortium from A to Z",
        Subtítulo: "What if the installment payment is late?",
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
        Título: "Consortium from A to Z",
        Subtítulo: "Withdrawal",
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
        Título: "Consortium from A to Z",
        Subtítulo: "Transfer",
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
        Título: "Consortium from A to Z",
        Subtítulo: "Quota contemplated",
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
        Título: "Consortium from A to Z",
        Subtítulo: "Can I pay my consortium again?",
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
        Título: "New Smiles Card",
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
        Título: "Lactulone",
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
        Título: "4k SEMP Launch",
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
        Subtítulo: "How to reinforce the company's cash flow?",
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
        Subtítulo: "How to sell via WhatsApp and social media?",
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
        Subtítulo: "How to reduce costs?",
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
        Subtítulo: "How to boost your sales?",
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
        Subtítulo: "What are sales channels?",
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
        Subtítulo: "How to expand a small business and earn more?",
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
        Subtítulo: "How to use technology to benefit your company?",
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
        Cliente: "Ministry of Health",
        Título: "It's Not the Monkeys' Fault",
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

        Cliente: "Ministry of Health",
        Título: "Fight Aedes/Dengue",
        Subtítulo: "Video 1",
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
        Título: "Pharmacovigilance",
        Subtítulo: "Patient safety",
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
        Título: "Pharmacovigilance",
        Subtítulo: "Pharmacovigilance in biological therapy",
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
        Título: "Pharmacovigilance",
        Subtítulo: "Transport and storage",
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
        Título: "Controlled Display Guide",
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
        Cliente: "FTD Educação",
        Título: "FTD 120 Years",
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
        Título: "Incentive to local commerce",
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
        Título: "Every day is day",
        Subtítulo: "Campaign",
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
        Título: "Every day is day",
        Subtítulo: "Monday",
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
        Título: "Every day is day",
        Subtítulo: "Tuesday",
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
        Título: "Every day is day",
        Subtítulo: "Wednesday",
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
        Título: "Every day is day",
        Subtítulo: "Thursday",
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
        Título: "Every day is day",
        Subtítulo: "Friday",
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
        Título: "Every day is day",
        Subtítulo: "Weekend",
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
        Título: "SafraPay Tutorial",
        Subtítulo: "BLUETOOTH MACHINE AND SAFRAPAY APP",
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
        Título: "SafraPay Tutorial",
        Subtítulo: "MACHINE WITH COIL",
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
        Título: "SafraPay Tutorial",
        Subtítulo: "MOBILE MACHINE WITHOUT GPRS COIL",
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
        Título: "SafraPay Tutorial",
        Subtítulo: "MACHINE WITHOUT COIL",
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
        Título: "SafraPay Tutorial",
        Subtítulo: "GET TO KNOW OUR MACHINES",
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
        Título: "SafraPay Tutorial",
        Subtítulo: "SMART TUTORIAL",
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
        Título: "Rheumatoid Arthritis",
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
        Título: "Consigned Credit Harvest",
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
        Título: "Nakata Shock Absorbers",
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
        Título: "Digital Formalization Safra Financeira",
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
        Título: "Use of Survanta",
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
        Título: "Biosimilars",
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
        Título: "Biological",
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
        Título: "New Harvest Financial Payment Day",
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
        Título: "I'm More",
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
        Título: "SafraPay Tutorial",
        Subtítulo: "MACHINE TYPES",
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
        Título: "Autonomous",
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
        Título: "Autonomous",
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
        Título: "Autonomous",
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
        Título: "Autonomous",
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
        Cliente: "Orders Now",
        Título: "Orders Now",
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
        Título: "Unilever Missions",
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
        Título: "Spartan Brazil",
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
        Título: "Mini St Marche Promotion",
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
        Título: "Omron Nebulizers",
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
        Cliente: "Radio Disney",
        Título: "Disney Radio",
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
        Título: "Teva | Pharmacovigilance",
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
        Título: "Doors Project",
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
        Título: "Humira Pen - Application Guide",
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
        Título: "Set Brasil | Modern Ed.",
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
        Título: "SOS Clip",
        Subtítulo: "",
        YouTube: "https://youtu.be/iwIus7Z3GTo",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/12vLZ-QckNNZBjZ7KUKFQxs31GRaNiKg_=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/12ssuk9i4W1JsGYcJauK1AXZZfrqL9qRE=k",
        Texto:
          'The music video for "SOS" by the Brazilian Progressive Metal band ARMORED DAWN was directed by *Kahue Rozzi*, from SimonSays Filmes. The video shows the meeting of different facets and personalities of an inner child, a lonely and depressive character who is both both the heroine and the villain of her own story.\nMixed by *Chris Lord Alge* (Muse, Green Day, Nickelback) and mastered by *Ted Jensen* (Bring Me The Horizon, Evanescence, Metallica).\nThe current lineup of Armored Dawn, which includes *Eduardo Parras* (vocals), Tiago de Moura and Timo Kaarkoski (guitars), Heros Trench (bass), Rafael Agostino (keyboards) and Chris Oliveira (drums).\nThe song "SOS" was written by * Carolina Angeli* and the group\'s former drummer, Rodrigo Oliveira.',
        Diretor: "Kahue Rozzi",
        Categorias: "Music Clips",
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
        Categorias: "Music Clips",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Acoustics & Valves",
        Título: "Five Phrases",
        Subtítulo: "",
        YouTube: "https://youtu.be/1Jb1NKfdzfw",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1R9lBdAbK9N0yi2JwYvlaWrHdV2G3E0xC=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1R6RrOrNnfbsPGTAa_i6hIrXYcB2aSF55=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Music Clips",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Acoustics & Valves",
        Título: "God Wanted",
        Subtítulo: "",
        YouTube: "https://youtu.be/eWkaCqpXAPc",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1QvGihAHGf3HwDcycSByIuFI6GUhQ8o_k=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1Qula4dLk-O7PC4cLcqhgJeP-if8Mkpok=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Music Clips",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "AACC",
        Título:
          "Starting Capital - Helping children with Cancer is good for the heart!",
        Subtítulo: "",
        YouTube: "https://youtu.be/xTg14JSAWiw",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1RDylXTStJVIKkCrS28lJA2h7YxtDRFn4=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1RCXKfj_Cb3MRkXIsCB-HdYRIMkFVaWmj=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Music Clips",
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
          "We are excited to share with all of you our documentary in the final stages of editing about the life and career of the unforgettable Dalva de Oliveira. This project is a brilliant collaboration between Director Bernardo Martins, the artist's grandson, and Kahue Campion Rozzi from SimonSays Filmes.\n\nOur team had the honor of interviewing iconic personalities from Brazilian culture, including the renowned Maria Bethânia, people who shared moments precious with Dalva, and even figures like Agnaldo Timóteo. Each statement brings a unique perspective on Dalva de Oliveira's influence and legacy.\n\nMore than just a historical record, this film is a celebration of the lasting impact of the \"Queen of Radio\" and how her music transcends generations. Stay tuned for the launch, as this production promises to move and inspire everyone.\n\nStay tuned! Soon, you will be invited to be part of this journey through screens.",
        Diretor: "Bernardo Martins, Kahue Rozzi",
        Categorias: "Entertainment",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Series",
        Título: "Dream Factory",
        Subtítulo: "",
        YouTube: "https://youtu.be/ikSQsYlxqkk",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/17RnuL6w84QFWzyrsZGY75zQ92FTQSwim=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1uuJ4eP_OenAOH-iA1JVZeCzCDzLHjxe6=k",
        Texto:
          "Get ready to delve into the fascinating history of furniture design in Brazil in this series of 10 episodes, 55 minutes each, which is a co-production between SimonSays Filmes and Total Filmes. Featured Episodes: Joaquim Tenreiro, Lina Bo Bardi, José Zanine Caldas, Sergio Rodrigues, Jorge Zalszupin, Oscar Niemeyer, Paulo Mendes da Rocha, Geraldo de Barros, Michel Arnoult and Maurício Azeredo. Each episode will delve deeply into the lives, work and legacy of these designers, revealing how they shaped the history of furniture design in Brazil in a context of adaptation to the economy and politics of the time. Discover how these designers' choice of materials and creative approaches reflected the country's social and economic transformations. Get ready for a fascinating journey through images of archive, interviews and engaging narratives as we explore the rich heritage of Brazilian design",
        Diretor: "Kahue Rozzi",
        Categorias: "Entertainment",
      },
      {
        FilmId: uuid(),
        Home: true,
        Cliente: "Total Filmes",
        Título: "Killer Mamonas - The Movie",
        Subtítulo: "Production Service",
        YouTube: "https://youtu.be/n_TmFQ5XfHc",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/161SjIv61fApwDnEvJMJCIlN5vM6W6IdZ=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1rO4yWXkZIqBwcSPz9ZH3mSV0NGr4oeNd=k",
        Texto: "",
        Diretor: "Edson Spinelo",
        Categorias: "Entertainment",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Total Filmes",
        Título: "Mamonas Assassinas - The Series",
        Subtítulo: "In Production",
        YouTube: "https://youtu.be/_8G5VT4Z4G8",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1Nv5XC5sCCf5HCLXfpF_Mve2IWmW9GLJn=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/13T5K98MIgxuhDrVJl81raaTrhKSdDGTo=k",
        Texto:
          "Mamonas Assassinas: The Series - A successful partnership between Total Filmes and SimonSays Filmes.\n\nOur partnership not only included the production of the opening vignettes and the motion graphics passages, but also extended beyond, covering the entire post-production of the series.\n\nWe are responsible for a number of crucial aspects of the series, including the careful editing of each episode, the soundtrack that involves and moves, the impeccable finishing that guarantees quality and cohesion, in addition to post-production which raises the level of the project. Our team also played a key role in color correction and mastering, ensuring that every visual and auditory detail is perfect.\n\n\"Mamonas Assassinas: A Série\" promises to captivate audiences in five exciting episodes that celebrate the band's unique trajectory who won everyone's hearts. It is an honor to be part of this project and contribute with our experience to create a series that will be remembered.\n\nSimonSays Filmes thanks Total Filmes for the lasting partnership and for the trust in our ability to deliver excellence at each stage of production. We look forward to this series being another milestone in our fruitful collaboration.",
        Diretor: "Edson Spinelo",
        Categorias: "Entertainment",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "",
        Título: "Nina's World",
        Subtítulo: "",
        YouTube:
          "https://www.youtube.com/watch?v=kBrN-pTKonc&list=PLfpbyDuHNTPknb7yiNDRzV2h0SL-2zEPm",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1DLaewd1Bq1iEGPzmJMUTzj4GqZScDijG=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/11RVYlylJnhZjKsgZS6leZUQi1dr867Zh=k",
        Texto:
          "Nina's World - A Special Production by SimonSays Filmes\n\nIn \"Nina's World\", SimonSays Filmes had the honor of creating an animated children's and musical series that captivates children and their families. Our dedicated team worked hard to develop all the characters, animations and music that bring this enchanting world to life.\n\nThe incredible music you hear is the creation of the talented Rodrigo Água, while the spectacular illustrations were created by the renowned Sergio Gaiolas. The brilliant idea and creative direction driving the series comes courtesy of Kahue Rozzi.\n\nCurrently, you can find \"Nina's World\" on YouTube and the VIVAX channel, where we offer content that aims to provide entertainment and education. Our channel features children's songs and animations that stimulate all of children's senses, encouraging them to dance, sing and interact!\n\nThe adorable characters - Momô, Duuk, Dona Tuur, Unik and Ripa - travel everywhere, bringing fun for all children. 'Nina's World' is your new destination for high-quality children's music and family entertainment.\n\nWe invite you to join 'Nina's World' where the magic of music and fun never ends.",
        Diretor: "Kahue Rozzi",
        Categorias: "Entertainment",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Series",
        Título: "C11 - DISNEY",
        Subtítulo: "College 11 - Production Service",
        YouTube: "https://youtu.be/NLEAVgq2WzE",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1zRwyQ6TJHqXN4XvmXDRPOenQJG9XjYbJ=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1G-_7fR4_3eaC5_A3Vvizm03wLj_MUqeC=k",
        Texto:
          'SimonSays Filmes had the honor of carrying out its first production service for another partner production company in the project "Que Talento!" from Disney Channel. Kahue played a key role in developing the language, art direction and editing of all 26 episodes, including the Spanish versions. This work marked our commitment to quality and creativity in audiovisual productions.',
        Diretor: "",
        Categorias: "Entertainment",
      },
      {
        FilmId: uuid(),
        Home: true,
        Cliente: "",
        Título: "Fearless Sex",
        Subtítulo: "",
        YouTube: "https://www.youtube.com/watch?v=VUEWs9UVO5Q",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1PjQqBPyiO8E7XUfN6AQezZs_H6fIqeUP=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1XUi_z_z0F_yLL-9Ulodb2HhwqPrjugnF=k",
        Texto: "",
        Diretor: "",
        Categorias: "Entertainment",
      },
    ],
  },
  {
    Idioma: "ESP",
    Films: [
      {
        FilmId: uuid(),
        Home: true,
        Cliente: "CLDF",
        Título: "Banderas CLDF",
        Subtítulo: "Para cada uno, para todos nosotros",
        YouTube: "https://youtu.be/3vYC8VUyEOY",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/168aC9jpU9N0X8Y7LatOVquBKsy2v3kur=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1ZW593XJKCAWSLNI4ryL2DT0PF5UcD1Xn=k",
        Texto:
          'La campaña "Bandera" de CLDF se llevó a cabo en escenarios icónicos de Brasilia, dirigida por Kahue Rozzi. La película fue cuidadosamente producida en 3 días, involucrando a más de 35 miembros del equipo, con equipos de São Paulo y Brasilia trabajando juntos. Además de contar con un elenco de 70 integrantes, la producción se destacó por la eficiente colaboración entre los equipos y por captar la esencia única de la capital brasileña.',
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "CLDF",
        Título: "Banderas CLDF",
        Subtítulo: "Para cada uno para todos | 30s",
        YouTube: "https://youtu.be/zYROSHwZYQw",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1li1P1KSHWRLuXkIxGWNUr6COcjISh-Rf=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1nInlf6bXispn84wvGXClVfRujE7olDSs=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "CLDF",
        Título: "Banderas CLDF",
        Subtítulo: "Para cada uno para todos | Historias",
        YouTube: "https://youtube.com/shorts/s5rK9fchTQM",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1UpXYN4QZj9Odp2B7ntOjPlOsGHK7CNEN=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1Lq5P1hTPTP4IzvB9-0P-n3NrFPWQLBqz=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: true,

        Cliente: "Cereser",
        Título: "Ven a Brindar con la Promoción Cereser",
        Subtítulo: "",
        YouTube: "https://youtu.be/nMD3m_bd2aU",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1Vo0ELtrT5xJqe9QsT-uyJM-8zklVQ3bT=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1Vr4jzgwm3L3kw_Rf0kNhjs1ZaGe0JVAt=k",
        Texto:
          'Descubre la magia detrás de la producción de la campaña "Vem Brindar" de Cereser con SimonSays Filmes. Una encantadora película que fue concebida en tan solo 1 día, con un equipo de reconocidos profesionales liderados por el talentoso Director Kahue Rozzi. Con la carismática presencia de Celso Portiolli, la película fue capturada en formato cinematográfico 6K, lo que garantiza una calidad visual excepcional.\n\nLa producción no se limitó únicamente al rodaje, sino que incluyó un cuidadoso acabado, etalonaje y una banda sonora compuesta a medida. Al participar de la Promoción Vem Brindar com Cereser 2023, no sólo compites por increíbles R$ 350.000 en premios, sino que también te conectas a una experiencia cinematográfica única, llena de emoción y calidad técnica. ¡Ven a brindar con nosotros!',
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: true,

        Cliente: "Audionova",
        Título: "Escucha más con el corazón",
        Subtítulo: "Guerra",
        YouTube: "https://youtu.be/fIQRZxDXjMk",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1jq7kf9a-Keb1HMHsaoJjzXIsk38JhlTz=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1S6AM48APJGeCCt1ykE28Av7o3xQQS4iY=k",
        Texto:
          "En tiempos oscuros de guerra, nada como la poesía y el arte para hacernos ver una versión de cómo tener paz con un simple gesto. *@rebornyourself_* creó esta campaña para AudioNova y tuvimos la suerte de ser quienes la producimos.  n*Dirigida por: @kahue Rozzi\nFotografía: @cellobarillari*",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Audionova",
        Título: "Escucha más con el corazón",
        Subtítulo: "Religión",
        YouTube: "https://youtu.be/olJRbx13aZw",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1mP3euStYgY1hFD6I7oF3yPzPTd5p7R4j=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1TcyU0CuBlcyR_gWVKPpJZWZW_ouIhCUF=k",
        Texto:
          'Esta poderosa película cuenta la convincente historia de dos personas de mundos diferentes: uno judío y otro árabe. Reunidos en las vibrantes calles de la ciudad, sus vidas inicialmente se cruzan bajo un velo de desacuerdo. Sin embargo, a medida que se desarrolla la narración, se forma una conexión inesperada y genuina entre ellos, que culmina en un momento de comprensión mutua y una sonrisa compartida.\n\nEste momento simbólico lleva consigo un mensaje profundo: "Escucha más con tu corazón". La película es un conmovedor recordatorio de que, más allá de nuestras diferencias culturales o religiosas, existe una humanidad común que nos une. Ejemplifica el poder del cine no sólo como forma de arte, sino también como medio para fomentar la comprensión, el respeto y la empatía entre las personas.',
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Audionova",
        Título: "Escucha más con el corazón",
        Subtítulo: "Familia",
        YouTube: "https://youtu.be/OFUoGu-dlTs",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1sAssmgxtKR-_x7dS-po5xYngXsEjqlks=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1KEfAWPUmxrNbx3Rf8_NRFbpOCpukjanu=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Audionova",
        Título: "Escucha más con el corazón",
        Subtítulo: "Pareja",
        YouTube: "https://youtu.be/d9-JiwdhQ9k",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1HJ821_IJgeUNmW-J2CjYNf1K_NJ7acD-=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1kSwnSJM_kFQT_bUnX4ldFNI0DY8EqW_v=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Audionova",
        Título: "Escucha más con el corazón",
        Subtítulo: "Señor",
        YouTube: "https://youtu.be/LAIwz6xrLOI",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1s4JwbDCxZqKOEoMvs0-lsbFr0q62XVDf=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1l20qRtWSn8h5dnQ9WpvmltYPZ1-jtxg6=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Universo Ambipar",
        Título: "Universo Ambipar",
        Subtítulo: "Larissa Manoela cuenta qué es Universo",
        YouTube: "https://youtu.be/VbJLzXdw7PE",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1e8gR_bpCcEpJ72zPfiZCD9gkVRB27sRp=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1Rxlu9GCnE0p6AopFq4_6V6ExTiRMz5ly=k",
        Texto:
          "Universus se destaca por transformar residuos en innovadores productos biodegradables y, para resaltar esta iniciativa, SimonSays Filmes produjo una serie de películas para las redes sociales, protagonizadas por la carismática Larissa Manoela. Filmada en la tienda Universo de São Paulo, la campaña generó más de 80 pastillas y un vídeo principal, destacando la importancia de la sostenibilidad. La esencia del mensaje de Universo, combinando talento, creatividad y compromiso medioambiental.",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Universo Ambipar",
        Título: "Universo Ambipar",
        Subtítulo: "Presentación",
        YouTube: "https://youtu.be/d5s4V_aj-T4",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/11Ha652rn7y_zHE3QFV6TyNsns4dU9QLk=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1TQeMF1dT8v-58AH-s8uPInvsUSEKO4bS=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Universo Ambipar",
        Título: "Universo Ambipar",
        Subtítulo: "Alcohol Ecológico",
        YouTube: "https://youtu.be/POctFA30l7Y",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1uMFpH49_uN3C-BK1NGQXTKkvtENZhATY=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1qOK9BCaqyz48EC4uZRTq6i7JbJByIl0i=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
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
        Categorias: "Publicidad",
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
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Universo Ambipar",
        Título: "Universo Ambipar",
        Subtítulo: "Acondicionador",
        YouTube: "https://youtu.be/HtfPs82m8eg",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/13eQFBYHFqtogivlKkEiSbZNVkeCp_AFg=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1ymSQbWfg0g18g01rxmEaKaz3Ig_W-OFz=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
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
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Universo Ambipar",
        Título: "Universo Ambipar",
        Subtítulo: "Luminaria 3D",
        YouTube: "https://youtu.be/GyFOWHyjytw",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1mk16DyAkEmktbZ2Zk1xrk4OqL5sJqgD5=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1sQGqIoVeY2mCWlZf-7YhmCDEEUiBmdJw=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Universo Ambipar",
        Título: "Universo Ambipar",
        Subtítulo: "Luminarias",
        YouTube: "https://youtu.be/4RimYS5c-yQ",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/13Fs3ssWlQ8PEVtPB9jq6O0GKG3Gyx5xO=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1lboiIgItX9eblwoHQg0U4JXB29vS66N1=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Universo Ambipar",
        Título: "Universo Ambipar",
        Subtítulo: "Mono",
        YouTube: "https://youtu.be/NQrd0BWCXlY",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/12O9vmQzQn6Qc0v0xMAf8fUJtN_l-j1nt=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/19cZLEKZ3mY-wVSlCfbRWA79cNYNxLlip=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Universo Ambipar",
        Título: "Universo Ambipar",
        Subtítulo: "Mesita de noche",
        YouTube: "https://youtu.be/cr9tVH4t48o",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/109fszHeYvEVY_7wN9ScaZJAiL4Xx2mCQ=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1N9ct-JbN2oo4VZE0OHr7qGNqUneqVfe5=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Universo Ambipar",
        Título: "Universo Ambipar",
        Subtítulo: "Obsolescencia",
        YouTube: "https://youtu.be/vugRJ_CuBCg",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1DbwV7kOzh-BsmFpESZGJd_7-2mrpLrAS=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1eiVVTXbTQ93an8Iuo62uepLU3aGLIWAP=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Universo Ambipar",
        Título: "Universo Ambipar",
        Subtítulo: "Papel de burbujas",
        YouTube: "https://youtu.be/S-2X_6ikYyQ",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1Rij61v-Gs0AWGspwIIx9geYzIfIfGLan=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1mixImKW8sRsAbgxLeWPelOm2tQ4_kjCi=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Universo Ambipar",
        Título: "Universo Ambipar",
        Subtítulo: "Jabón",
        YouTube: "https://youtu.be/phfZQy8BOeI",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/12VRu9QKKkuuzOOQIhPNQRfHsBECFDrZX=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/12WLYtwrVmM6loeazWDVUTQtwctMro22W=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Universo Ambipar",
        Título: "Universo Ambipar",
        Subtítulo: "Champú",
        YouTube: "https://youtu.be/N69qxe6lsDc",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/12YLcM96gA_Ynh6ZzhNNS4c4kkr-mSnFl=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/12m1stWCdKKGZS9nsnjL8f6LKk6B_Y7pe=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "CBF",
        Título: "Selección Solidaria",
        Subtítulo: "",
        YouTube: "https://youtu.be/HZNBeWBg4yo",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1CYBP_c2LcPaL4Wb7lI7Ig-Bgcpc5AXHt=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1CUsB82BrRdKxJBXrA7OvMwiv60LAYw2c=k",
        Texto:
          'La película "Movimento Seleção Solidária", una producción de SimonSays Filmes, es una poderosa representación cinematográfica de la respuesta solidaria del fútbol brasileño durante la pandemia. Si bien la producción, dirección y realización técnica estuvieron a cargo de nuestro equipo, el guión fue desarrollado con habilidad para capturar la esencia de la campaña, que reunió a jugadores de renombre y a la CBF en un esfuerzo conjunto para ayudar a las familias afectadas por la crisis. La película retrata de manera conmovedora la unidad, la solidaridad y la esperanza, reflejando el espíritu de colaboración que surgió en un período desafiante. La campaña no sólo logró su objetivo financiero, sino que también fortaleció la conexión entre el deporte y la acción social, destacando cómo el fútbol puede ser una fuerza positiva para el cambio en la sociedad.',
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "CBF",
        Título: "Mundial CBF Ídolos 1970",
        Subtítulo: "",
        YouTube: "https://youtu.be/Hhrjj1fKXOM",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1A5bpRg_qa5-4Zh2lnc6Vbrn9kW8xK8N1=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1A6A1UdtcI8ScXKBVKylDfzp9hjwv9_Bu=k",
        Texto:
          "Para la CBF, SimonSays Filmes produjo una emocionante película en homenaje a la selección brasileña de 1970 y su victoria en el título mundial. Este proyecto implicó una investigación detallada de las imágenes, una edición cuidadosa y el desarrollo de un lenguaje visual único. Llevamos a cabo el procesamiento de imágenes e incluyó gráficos en movimiento para llevar las escenas históricas a la vida moderna. La producción se enriqueció con una banda sonora impactante y una voz en off atractiva, capturando la esencia y el espíritu triunfante de ese equipo legendario",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "CBF",
        Título: "CBF Sub-17",
        Subtítulo: "",
        YouTube: "https://youtu.be/J9Tmup0KbcQ",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1A8F2OQh_XVg1CXoC31Gsn2SL0SKecZtP=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1A6Z227ZNmBJ6EaPte8N6Khmfl61UDMNV=k",
        Texto:
          "En una colaboración única con Rede Globo, SimonSays Filmes tuvo la oportunidad de producir una campaña vibrante e inspiradora para el Campeonato de la FIFA Sub-17. Gracias al acceso exclusivo a una colección de imágenes de alta calidad proporcionada por Rede Globo, pudimos cree una narrativa visual impactante que capture la energía y el talento emergente de este emocionante torneo de fútbol juvenil. Esta campaña no solo destaca a los jóvenes talentos del fútbol mundial, sino que también celebra el espíritu del deporte en su forma más pura y prometedora",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Colegio Fereguetti",
        Título: "Escuela Fereguetti",
        Subtítulo: "",
        YouTube: "https://youtu.be/o3n7edzFD8Y",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1Ms44cYkMjOrTPN9OC8-dwC2Nb9CNmYy7=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1OL_PkSEHp6NzzKAJZac1_FZa-EvrPorE=k",
        Texto:
          "Realizado por SimonSays Filmes, fue un proyecto que destacó la excelencia en la narración y las habilidades técnicas. Con dos intensos días de rodaje, el equipo de SimonSays logró captar la esencia y los valores de la escuela. El concepto y el guión, creados internamente de SimonSays, reflejó la misión educativa y el enfoque innovador de la universidad. La atención al detalle en la producción, desde la selección de la ubicación hasta la edición final, aseguró que cada escena transmitiera el mensaje de crecimiento, comunidad y tecnología en un contexto educativo",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
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
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "FTD Educação",
        Título: "Campaña del Sistema Educativo FTD",
        Subtítulo: "",
        YouTube: "https://youtu.be/npPlOnwgs5g?si=LjtkAjKPd4SSbAkA",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/13en0y9PYCJo06vj4H--6ppDqj5y2zVUl=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/13sS6XIoM33L8vZuPRo16YDElBbSiLcXB=k",
        Texto:
          "SimonSays Filmes tuvo el privilegio de trabajar con Felipe Castanhari en un proyecto innovador. Para cumplir con la apretada agenda de Castanhari, instalamos un estudio dentro de un resort y cercamos una pista de carreras, creando escenas espectaculares de autos a alta velocidad. Empleamos tecnologías avanzadas, drones, microcámaras y cámaras de cine, complementados con sofisticados gráficos en movimiento. El guión, innovador y cautivador, junto con la presencia magnética de Castanhari, culminó en una exitosa campaña que armonizó educación, entretenimiento y excelencia técnica",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
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
          "Estamos orgullosos de presentar tres películas distintas, producidas para Goodyear, en su pista de pruebas. Cada película es una oda a la excelencia de Goodyear en diferentes categorías de neumáticos: alto rendimiento, todoterreno y una película innovadora que combina velocidad con efectos en 3D. Utilizamos drones, coches con cámara y grúas para capturar escenas vibrantes en pistas secas y mojadas y en terrenos desafiantes como tierra y rocas. Esta trilogía no sólo demuestra la calidad superior de los neumáticos Goodyear, sino también la capacidad de SimonSays Filmes para crear experiencias visuales inmersivas y dinámicas. , destacando la fusión entre alta tecnología y diseño innovador de los productos Goodyear.",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Goodyear",
        Título: "Barro",
        Subtítulo: "",
        YouTube: "https://youtu.be/VECwYo9c8Vg",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1487WUajGV9wnetBkT4WHdkEwF4ceJOM0=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/148h3ZWq0grwg0xI5QIn2XB7hhymZJmaJ=k",
        Texto:
          "Estamos orgullosos de presentar tres películas distintas, producidas para Goodyear, en su pista de pruebas. Cada película es una oda a la excelencia de Goodyear en diferentes categorías de neumáticos: alto rendimiento, todoterreno y una película innovadora que combina velocidad con efectos en 3D. Utilizamos drones, coches con cámara y grúas para capturar escenas vibrantes en pistas secas y mojadas y en terrenos desafiantes como tierra y rocas. Esta trilogía no sólo demuestra la calidad superior de los neumáticos Goodyear, sino también la capacidad de SimonSays Filmes para crear experiencias visuales inmersivas y dinámicas. , destacando la fusión entre alta tecnología y diseño innovador de los productos Goodyear.",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Goodyear",
        Título: "Actuación",
        Subtítulo: "",
        YouTube: "https://youtu.be/rcL684GaVZs",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1QJ6_jOxCL3EY08Er9TNG2gvFLRlpkTRB=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1QA4yAdEkc4wMRGZqZC9FRKk5xgT7F-g2=k",
        Texto:
          "Estamos orgullosos de presentar tres películas distintas, producidas para Goodyear, en su pista de pruebas. Cada película es una oda a la excelencia de Goodyear en diferentes categorías de neumáticos: alto rendimiento, todoterreno y una película innovadora que combina velocidad con efectos en 3D. Utilizamos drones, coches con cámara y grúas para capturar escenas vibrantes en pistas secas y mojadas y en terrenos desafiantes como tierra y rocas. Esta trilogía no sólo demuestra la calidad superior de los neumáticos Goodyear, sino también la capacidad de SimonSays Filmes para crear experiencias visuales inmersivas y dinámicas. , destacando la fusión entre alta tecnología y diseño innovador de los productos Goodyear.",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Sanasa",
        Título: "Uso Consciente del Agua",
        Subtítulo: "Fuga",
        YouTube: "https://youtu.be/Ju3oha2e68E",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/14HoLT57DaMsrtSuId44_zkCFhwrsk1pE=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/14B0sAVpGMn2CO64glfQQG9lX1kB1bZLR=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Sanasa",
        Título: "Uso Consciente del Agua",
        Subtítulo: "Red de alcantarillado",
        YouTube: "https://youtu.be/j51jlCYcKms",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/14QQX44FY8kVV9mSJt-_ahjHmMU6sU0j0=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/14Qdud-VFaTp_WYjfXey1YwrMRZmKVSHb=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Sanasa",
        Título: "Uso Consciente del Agua",
        Subtítulo: "Construcción",
        YouTube: "https://youtu.be/e4Bt54HRUOU",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/14UmHkNwIZoPBYZ8nfdFneHXisM_Avpcl=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/14Sobr10Oz0kBjJwZDrbRa26EATpOVnif=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Sanasa",
        Título: "Uso Consciente del Agua",
        Subtítulo: "Uso correcto",
        YouTube: "https://youtu.be/bf13dUmr_Xs?si=8w6d0Zon9teGGqM-",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/14cb_-nybrpZUk9lAHcanSfXkWOExzKFS=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/14ZeKqLE1M3_UUmpdvQ1iiCIm7zR8kfOO=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "FTD Educação",
        Título: "Lanzamiento del sistema educativo FTD",
        Subtítulo: "",
        YouTube: "https://www.youtube.com/watch?v=6jovYBPkfSg",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/15IfodJgvXC2AHoYh5B6l1XyMo95nHCVb=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/15BVOo4NEdlJ2lhfxvxznjMM9oDGieYUA=k",
        Texto:
          "SimonSays Filmes tuvo el privilegio de trabajar con Felipe Castanhari en un proyecto innovador. Para cumplir con la apretada agenda de Castanhari, instalamos un estudio dentro de un resort y cercamos una pista de carreras, creando escenas espectaculares de autos a alta velocidad. Empleamos tecnologías avanzadas, drones, microcámaras y cámaras de cine, complementados con sofisticados gráficos en movimiento. El guión, innovador y cautivador, junto con la presencia magnética de Castanhari, culminó en una exitosa campaña que armonizó educación, entretenimiento y excelencia técnica",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: true,

        Cliente: "Ministerio de Salud",
        Título: "El Doctor Gotinha Responde",
        Subtítulo: "Parte 1",
        YouTube: "https://youtube.com/shorts/mEkDrrGJw4g",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1S0x--Uvjnc2GvIOqq7ICjo26myP2X84U=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1--N84fqSicrhERQfZWzvwvOpcQw5nXuC=k",
        Texto:
          'Para la campaña "Dr. Gotinha Responde" del Ministerio de Salud, SimonSays Filmes desarrolló cuatro películas distintas, filmadas en 4K para garantizar la máxima calidad visual. La producción contó con un elenco real, agregando autenticidad e impacto a los mensajes sobre la importancia de la vacunación. Utilizando tecnologías de vanguardia como gráficos en movimiento y animación 3D, el equipo dio vida a Zé Gotinha, creando un ambiente educativo y cautivador. Esta serie, producida de manera eficiente en un solo día, ejemplifica la capacidad de SimonSays Filmes para combinar contenido relevante con excelencia técnica, ',
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Ministerio de Salud",
        Título: "El Doctor Gotinha Responde",
        Subtítulo: "Parte 2",
        YouTube: "https://youtube.com/shorts/8xM6s64ckmo",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1ZfgWRWgm0PsaM0vc_E1w27Tir35oDt3b=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1N_vM6Yx1jEoFvQMAU1T6_NfCEV5QzesF=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Ministerio de Salud",
        Título: "El Doctor Gotinha Responde",
        Subtítulo: "Parte 3",
        YouTube: "https://youtube.com/shorts/hBJHLsjCxNU",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1NkQVBWmByFSNvvhGV19EXgtByvlN4MdA=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1hdsVXakE_HVVI9uAb1DAGMg_O4jWiWVr=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Ministerio de Salud",
        Título: "El Doctor Gotinha Responde",
        Subtítulo: "Parte 4",
        YouTube: "https://youtube.com/shorts/MNjIHkmqkBg",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1V6HU74gyBi1IA2iQPAWFHjKUJsvUzFCK=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1G8iqWRlpBNyJa3pdlY2RKuCOIhrkmkyM=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Mini",
        Título: "Mini Conectado",
        Subtítulo: "",
        YouTube: "https://youtu.be/Cm6l8FyxM4Y",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/14zY_uep4BlyNwplVWPwF127W8cZdG2TV=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/156VT8RsIdeexcKOtYKSPw2cDKpovHMfu=k",
        Texto:
          "Para la campaña Mini Connected, SimonSays Filmes produjo una serie de películas que incluyen dos películas principales de 60 y 30 segundos, además de versiones extendidas de 80 segundos para Internet, así como siete películas específicas para las redes sociales. La producción tuvo lugar en un estudio espacioso, equipado con características como una grúa, plataforma rodante e iluminación especial, lo que garantizaba que Mini Connected fuera lo más destacado.\n\nEn la postproducción, hubo un enfoque dedicado en la edición, los gráficos y los efectos visuales de alta calidad, asegurando un final impresionante.\n\nAdemás, la campaña contó con un elenco diverso compuesto por más de 10 personas. La meticulosa producción de accesorios como relojes, anillos y chaquetas fueron esenciales para personificar al usuario de Mini Connected. Estos detalles agregaron autenticidad y sofisticación a producción, destacando la precisión y refinamiento del trabajo realizado.",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Mini",
        Título: "Mini Conectado",
        Subtítulo: "Redes Sociales",
        YouTube: "https://youtu.be/wwfQtI3PwTg",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/158aLvgJ67HEXuSNN3jS5N4TbDyURfXtl=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/159tvEBYOTgfz0HD7cJhkPQTnlz94949r=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Localizar",
        Título: "Te ubica y en la misma dirección",
        Subtítulo: "Carreto",
        YouTube: "https://youtu.be/OdLYJKvYSMc",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/18oEM10Ux6g9byl4-6IDTQIcutAtVKuRz=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/18pEa5E9IGWVhwf1Ybul_mz5fHqEcarPc=k",
        Texto:
          "Para la campaña de Localiza Rent a Car, SimonSays Filmes produjo una serie de siete películas, cada una de 30 segundos de duración, para internet en formato 16:9. La producción se llevó a cabo en un estudio especialmente preparado para filmar dentro de un automóvil, brindando una experiencia única. . Con un elenco numeroso y guiones variados, cada película destacó diferentes aspectos de los servicios y alojamientos de Localiza. La producción incluyó iluminación especial para resaltar la calidad de los autos y servicios de Localiza, así como una calidad de postproducción de alta calidad para garantizar una visión clara y atractiva. mensajes.",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Localizar",
        Título: "Te ubica y en la misma dirección",
        Subtítulo: "Uber",
        YouTube: "https://youtu.be/RDc2N2TWzqo",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/18pPYd4Yyb-Y-hOqbeFf-FmwUT6A9ZmTN=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/18qUISd38Sbu-WH7MVmEhqIL2n6QQ-kYB=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Localizar",
        Título: "Te ubica y en la misma dirección",
        Subtítulo: "Lolla",
        YouTube: "https://youtu.be/Uhot7M6iFZE",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/18rLFrT3B0ugipJbSyhv5SfLWQyqHqRSj=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/18r9LC-gHvQUUdKQwd0qAvaOWJYHQrBgx=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Localizar",
        Título: "Te ubica y en la misma dirección",
        Subtítulo: "Bira",
        YouTube: "https://youtu.be/aHRBv9DyA9Q",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/18xskW2vF8d-lbkpzcPkYy4VTu7DtDZ0o=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/18vBNi2ZnpOctlsQ4R5uVgA4jG1gStltf=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Localizar",
        Título: "Te ubica y en la misma dirección",
        Subtítulo: "Camionetas",
        YouTube: "https://youtu.be/azRulD189NA",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/18zRA2xY-zv4p7tnTVfCaT5KQyMR_VVJA=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/18yYyk3P4im4qZ6LOWpc1tyDU2MSNQMTR=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Localizar",
        Título: "Te ubica y en la misma dirección",
        Subtítulo: "Vampiro",
        YouTube: "https://youtu.be/BM8H7VPJ-Yk",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/19-2JVkzClnWm2r25HztwO11i1k3zRqTm=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/19-LzxOhgPuXNudqg5VTqc8sK1t1fwlqV=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Prefeitura de Osasco",
        Título: "Osasco 58 años",
        Subtítulo: "",
        YouTube: "https://youtu.be/IVTuwKnBqe8",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1IQQ8rD56CNAztlP0d_TrBBvXtWQKIR39=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1IPKrO4Q7170jnrgQyHOcJqqmXp7ZNgzt=k",
        Texto:
          "La producción de una película especial para celebrar el 58º aniversario de la ciudad de Osasco fue una celebración de la identidad y la comunidad local. La película contó con un elenco compuesto exclusivamente por ciudadanos de Osasco, destacando la autenticidad de la ciudad. Lugares icónicos de Osasco fueron elegidos como escenarios, permitiendo a los espectadores reconocerse en el paisaje. Además, la colaboración comunitaria activa enriqueció la narrativa, reflejando el espíritu comunitario que define a Osasco.\n\nEsta producción representa el compromiso de SimonSays Filmes de crear contenido que conecte y celebre las comunidades, destacando La identidad única de Osasco y su compromiso con la autenticidad y la colaboración.",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
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
          "SimonSays Filmes creó una serie de cuatro películas para el programa PARTICIPA OSASCO. Cada película es como una pieza de un rompecabezas que revela el panorama completo de la comunidad osasquense, destacando programas clave del ayuntamiento como salud, vivienda, educación y seguridad. Con un meticuloso montaje de las piezas, estas películas resaltan la importancia de estos programas en la vida de la comunidad. La producción ejemplifica el compromiso de SimonSays Filmes con la creación de contenidos atractivos y de calidad.",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Fumcad",
        Título: "Reflexión",
        Subtítulo: "",
        YouTube: "https://youtu.be/sYX20-XYA3o",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/12yvIaSWQMdzVHZqkvroDRr6GVxyCNw8V=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/12yILVSDNB502WnwwJv9-MuCjKnyFuL8W=k",
        Texto:
          "La película encargada por la Ciudad de Osasco es una producción de alta calidad, filmada en locaciones cuidadosamente seleccionadas, con un elenco y vestuario bien elegidos. Además, la producción incluyó la producción de objetos especiales para enriquecer la narrativa, demostrando el compromiso con la excelencia. .",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Fumcad",
        Título: "Dragón",
        Subtítulo: "",
        YouTube: "https://youtu.be/qPAgY2A0IKk",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/14sdCW4VPVtxCl0LwlqBY4kHjoJZ1qeIJ=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/14xJ3PYKrwLc76UytUhd5c43ooVWPijth=k",
        Texto:
          "El Fondo Municipal por los Derechos del Niño y del Adolescente (FUMCAD) de la Ciudad de São Paulo busca beneficiar proyectos de entidades aprobadas por el Consejo Municipal por los Derechos del Niño y del Adolescente (CMDCA). Son muchos los de asistencia, educación, etc. proyectos dirigidos al desarrollo de niños y adolescentes. SimonSays tuvo la oportunidad de producir un video para Fumcad Osasco para crear conciencia y solicitar donaciones para el proyecto.",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
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
          "Nuestra producción para Zeiss | Campaña de protección UV es una armonía perfecta entre tecnología y creatividad. Utilizando técnicas avanzadas de croma y la efectiva herramienta NUKE, transportamos a nuestro elenco a escenarios impresionantes basados en imágenes de archivo reales. Cada escena es una obra maestra visual que resalta la importancia de la protección UV.",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Starbucks",
        Título: "Refrescos de Starbucks",
        Subtítulo: "",
        YouTube: "https://youtu.be/VdadW8Ygo_o",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1BdhEzBYcXDwHfzv5cUjeX2qADNdxEOPD=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1Ba2cbbLHUrs6L5R-zQwOKPmb84UCcHo4=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "ESPM",
        Título: "ESPM Transforma tu Mundo",
        Subtítulo: "",
        YouTube: "https://youtu.be/diH5bJwSvoo",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1CeXFz5cOsTjAUQLDb2ZMFRg0HtlJFCda=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1CZm8DEi--zzxKqVxExDNGloqQ61xdbwl=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Safra",
        Título: "Elegí SafraPay",
        Subtítulo: "Mejores condiciones",
        YouTube: "https://youtu.be/6tq-gbcv0Qw",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1LczmUlt5ZYouUN5vTURFakP-V0ExZVoF=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1LZY5NffRIM0x0m0SplWU1i_UDshRmzE6=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Safra",
        Título: "Elegí SafraPay",
        Subtítulo: "Servicio personalizado",
        YouTube: "https://youtu.be/P-hUb4TqHS0",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1LTyxa6JbjMQYlhewxMHu7klJNqqthZaD=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1LJt4V7hVe-6xZ0dG2yMIBIoAbFn1LmOQ=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Safra",
        Título: "Elegí SafraPay",
        Subtítulo: "Pague menos",
        YouTube: "https://youtu.be/EZS-Fq7zpZk",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1LHodyGben5e3AGY2Rk35ovq4Ug3qI-MZ=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1LAtAgQFURu_j8Be48KhixsO-h7GF83jR=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Farma Central",
        Título: "Farma Central - Central Nutrición",
        Subtítulo: "",
        YouTube: "https://youtu.be/0_lYCEf9nYs",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1BZPCO-Hs-E5RlimkyGYDh0KuDgl2SwtB=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1B_njizblOIAMI-S7g0JTVBcrBV8qzwAj=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Osasco",
        Título: "Abrazo Corona",
        Subtítulo: "",
        YouTube: "https://youtu.be/-OOlYhhJMqM",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1N3NnXDTnJ95TnumYvJg5mcXf46mglzUY=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1N382TQ4hr3BHgz9yaufEURcrzS6F_fJ7=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Sanasa",
        Título: "Día Mundial del Agua",
        Subtítulo: "",
        YouTube: "https://youtu.be/PPDwmfTR1oM",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1Oi-N9Bqt_jSeCa2k5UKPavKt02HE9y6u=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1OfYSx2d6_z7CQSqFF5e44X5u9w8O811Q=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Prefeitura de Cotia",
        Título: "¡Cotia como nunca la has visto!",
        Subtítulo: "Salud",
        YouTube: "https://youtu.be/T9L3GzMAg7A",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/18P_Ic99lMSIh3hRUSLD_u-5w9nF7nRXn=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/18PK0i7ems8hobRc938vog9_Lfe0mRR3p=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Prefeitura de Cotia",
        Título: "¡Cotia como nunca la has visto!",
        Subtítulo: "Ciudadanía",
        YouTube: "https://youtu.be/0uw2Gk-WRk4",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/18fF45jdEL4x_qF3SGWRy_Ec1e97qMEex=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/18YaklCjnzzDB8Bs6TeVas25RELLge0UD=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Prefeitura de Cotia",
        Título: "¡Cotia como nunca la has visto!",
        Subtítulo: "Movilidad Urbana",
        YouTube: "https://youtu.be/OUJwEFvpeKY",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/18Y3FKF35Z9V7biV8DVcSsSUWqbLVzrAR=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/18Wsqg7Ws9rZIyyXmAU58YfC7MUI1q3Xd=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Prefeitura de Cotia",
        Título: "¡Cotia como nunca la has visto!",
        Subtítulo: "Educación",
        YouTube: "https://youtu.be/MOV2jA3CsnE",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/18VGQQyzDOypQdUYbwpZIXgdTtTkgQagb=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/18Sfy7xef4vb4CPVcHc5iVM2hZM3aMtSW=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Prefeitura de Cotia",
        Título: "¡Cotia como nunca la has visto!",
        Subtítulo: "Inversión",
        YouTube: "https://youtu.be/ASFmEnW8dnE",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/18mVGP0-cznfByxIedqba7ptpVhKC7XI8=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/18fFOAXxdM8rnCDaZoMDHI9U0JXQ5GreP=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Prefeitura de Cotia",
        Título: "¡Cotia como nunca la has visto!",
        Subtítulo: "Diario Madre",
        YouTube: "https://youtu.be/trpBwU78zP8",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/18mcTUQ9iEuJMMuyUehgWXY7x3J68F9av=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/18mVm_cRe9Tj9CZVWywtmlAHG8-dG7uLh=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "CFM",
        Título: "Salud en Brasil",
        Subtítulo: "",
        YouTube: "https://youtu.be/Tau6KXDVAIM",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1QUQXvgRbmTFoj66Qde0p4YKzswiEeZQD=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1QPm-BmUoyVaZX2iwSz-qoBPH1ZFGlcgB=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "FMU",
        Título: "Examen de ingreso a la FMU",
        Subtítulo: "",
        YouTube: "https://youtu.be/AJ3gIFJMqJ8",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1O7Yn70d18UfPdV0PCR66l7ijVNe3r36V=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1Ny9Q1xaGoKlPR4Bkz_eFX5s07DApKIo-=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Safra",
        Título: "Ayude al propietario",
        Subtítulo: "Impuesto sobre la pequeña renta",
        YouTube: "https://youtu.be/R4_XcqXjXcI",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1XuwRnJOChHiuN9pJCsvn4PxfaVvzAXrV=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1Xsfsh5M5oSH_ccrJwzQ2LXdWLUusB0md=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Safra",
        Título: "Ayude al propietario",
        Subtítulo: "Declaración anual de MEI",
        YouTube: "https://youtu.be/f93HCQ8D6TA",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1YNtFIEpem7l4kFphU5DJmyK0djUUPh0t=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1YCv4qFtOw0_kj71B4kBi3dj_bwTRuJ-2=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Safra",
        Título: "Ayude al propietario",
        Subtítulo: "¿Está obligado el empresario a emitir factura electrónica?",
        YouTube: "https://youtu.be/HkyPf3soK0A",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1Y4dIAKky60JqH5xVvDGfaYCZo2hE9r3v=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1Y3CsUWz-Hz_SSkNPzI9Ve2kDwjsA-0Gr=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Safra",
        Título: "Ayude al propietario",
        Subtítulo: "Derechos y deberes de MEI",
        YouTube: "https://youtu.be/kw9xpbLgv-8",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1Y2z6mP0VhvX8AYeQsnHpnr6Zk_QldGSR=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1XyGCSu6Y2919YH_0i1J9eUQ3Xayf35F4=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Batata Inglesa",
        Título: "Patata inglesa",
        Subtítulo: "",
        YouTube: "https://youtu.be/GSqPxtuw3Zo",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1CPUv_hVXIqXQQZb5fw60wZ__pOFthPrw=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1CRB2-K46SxwRi4XsfW34WQLWsuShldzn=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Di Pollini",
        Título: "Di Pollini Artesano",
        Subtítulo: "",
        YouTube: "https://youtu.be/4-YUNaCCXBM",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1NnpnsNYZJaIf0d5JGwTVmdgZcCxPott4=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1NlmTTyZ79SF7x1NaYp9SHZ3-y654f4sN=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Guaraní",
        Título: "Independencia",
        Subtítulo: "",
        YouTube: "https://youtu.be/l-OpiotvaaU",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1DhY_x76HoHDeNxiH6gnQDVXas713zFkb=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1DpCAioDQKELkL7C2XLjjcgDEZ48aiQbj=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Tecnhos",
        Título: "Paracaidista Technos",
        Subtítulo: "",
        YouTube: "https://youtu.be/INxoXJeuFeM",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1Dsh5cEBo_s7hASVnjVMB2dl19gC8DgEM=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1DulN-NB58zpONZ-8UifCMBvId9NzHQXA=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Lifan",
        Título: "Ventas de Lifan",
        Subtítulo: "",
        YouTube: "https://youtu.be/Yoi9W6sAfI0",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1IKPn_yFJxHu4VaAlEJoXPhlype1EMa2b=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1IF-g_cZMaPMkuqp5-rdIoVJVvmxEz1SN=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Pfizer",
        Título: "Generación Z",
        Subtítulo: "",
        YouTube: "https://youtu.be/wFkh479tVEo",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1GYafmAhrs4z5m7JDa7SOZiRKZy8jttL1=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1Gj6Gmu-jZlfrdDljyIWdXrEb4oNEhrjS=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Gou Odonto",
        Título: "Odontología Gou | Clínicas Dentales",
        Subtítulo: "",
        YouTube: "https://youtu.be/kE1ZdLrqSII",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1NdIzsEp5Aqu7YvkDx00CP9Nh0ZTXp-Fk=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1NXEUlls-LyxZVls-z_2vfs72rJotRvPj=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
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
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Forma",
        Título: "Experiencia de campamento",
        Subtítulo: "",
        YouTube: "https://youtu.be/uphz4Ixfnc0",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1V9aDg-S0yit0m-mb08n7LkWbv-uinIiU=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1V-zPZtYsnW3dKh8qOERV7BNfA-rq5j4C=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Rio Branco",
        Título: "Constructora Río Branco",
        Subtítulo: "",
        YouTube: "https://youtu.be/2tUGBwqqVjQ",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1L5URwJmnV-S7AJlFurwoL7xyZ31vP8CS=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1KzQJHOkbyWCGlSTV22MyggECl40hY0HI=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Dailus",
        Título: "Dailus Colores",
        Subtítulo: "",
        YouTube: "https://youtu.be/bgRoj0I_F_o",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1Ob-3aY1ZD7Q0hxOlGA65iGyvXEXGV7rV=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1OQfFqI5eId70VE4K4g2SmtLVHo9hdV2m=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
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
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Forma",
        Título: "El viaje de su vida",
        Subtítulo: "",
        YouTube: "https://youtu.be/aLVN2soaevs",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1NMd6VMAiCHejFMB647vyCGdpOb1UTkST=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1NLsqE27pQiBB9fq2FYwn1lhWcC8pBpOJ=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Agaxtur",
        Título: "Viajar es necesario",
        Subtítulo: "",
        YouTube: "https://youtu.be/t_Z5F15b5cI",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1NkskHfSnXDVyszYFEZNy-A-V_5YRJi3w=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1MqL7xLmZN3UC0DnB-h5iAeUAr4xt_8l1=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Café Brasileiro",
        Título: "Café Brasileño",
        Subtítulo: "",
        YouTube: "https://youtu.be/DjKN85z0wjU",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1ZAGbaYzBvrzRw4MiniChjxQtAotlnb1M=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1ZC0rdWboUvDEncG4KQ21c1cO9THilD9n=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Yamaha",
        Título: "Sueños",
        Subtítulo: "",
        YouTube: "https://youtu.be/t9EBdlC5cRU",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1Q3rHovWfUw3g4DoGRtqIyU_YhTzycOeD=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1Q3lgiKmrGW2xMfujpVU3jYoTQoHAzsSN=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Ministerio de Educación",
        Título: "OBMEP | Olimpíadas de Matemáticas",
        Subtítulo: "",
        YouTube: "https://youtu.be/Kjwyn0puhMs",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1PLt0lX-hWmvt4nV0oFPZl7ZjoZrOhfgS=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1PKmOav3aB4tGqoBZQzBKvsOAUPScY_a8=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Colegio Marista",
        Título: "Colegio Marista",
        Subtítulo: "",
        YouTube: "https://youtu.be/2eQh4fPHti8",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1PFUVIXxgCZsKXsKpT35f0fH1C-wN7gL6=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1PAtyb2Sz-ESvi037jmHnBABw0Kna_HrO=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
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
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Goodyear",
        Título: "Felices vacaciones",
        Subtítulo: "",
        YouTube: "https://youtu.be/jjqO8xembx4",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1Murb7S6qwV9anrrtR_rQKyctduDOnhLk=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1MsDQdA6tHNQPVWpodWC1KtM3NYmVWIOi=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: true,

        Cliente: "CBC",
        Título: "96 Años Institucional",
        Subtítulo: "",
        YouTube: "https://youtu.be/peB2AldqgpQ",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/13WDZ4Ag-bQS3JMsmFvG1UIPeCC4AllO8=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/13Y3Gmm1rm4tXw8pgodsYN8dQTH16OFk2=k",
        Texto:
          "Una notable producción de SimonSays Filmes, creada para celebrar los 96 años de historia y excelencia de CBC - Companhia Brasileira de Cartuchos. Teniendo lugar en impresionantes lugares de São Paulo, Ribeirão Pires y Porto Alegre, este proyecto de cuatro días capturó la esencia y el espíritu de CBC. legado a través de espectaculares tomas aéreas y cinematografía de alta calidad.\n\nEl guión, desarrollado por nuestro equipo interno, fue elaborado meticulosamente para resaltar la fuerza, precisión y confiabilidad de los productos de CBC, lo que refleja su compromiso con la innovación y la seguridad. Con el objetivo de llegar a una audiencia global, produjimos versiones de la película en inglés y español. Esta iniciativa subraya el compromiso de SimonSays Filmes de crear contenido audiovisual que combine calidad, creatividad y atractivo internacional.",
        Diretor: "Kahue Rozzi",
        Categorias: "Institucional",
      },
      {
        FilmId: uuid(),
        Home: true,

        Cliente: "Proteger",
        Título: "Institucional Protege 50 Años",
        Subtítulo: "",
        YouTube: "https://youtu.be/qnQeiOs3JHE",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1AxQPnmkx8j6NCG5mrhPkDyUQQwZJai_e=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1Af3QOfV0jGG6-vvZJ35EjizFLFEn2kk9=k",
        Texto:
          "Creado para celebrar cinco décadas de historia y excelencia del Grupo Protege. Filmado en la impresionante sede de Protege en São Paulo, este proyecto de tres días capturó la esencia y el legado de Protege con espectaculares tomas aéreas y cinematografía de alta calidad. n\nNuestro La hoja de ruta, meticulosamente preparada por nuestro equipo interno, destaca el compromiso de Protege con la seguridad y la logística.",
        Diretor: "Kahue Rozzi",
        Categorias: "Institucional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "CBF",
        Título: "Academia CBF",
        Subtítulo: "",
        YouTube: "https://youtu.be/OTXms7cTxWw",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/11ssLV_gOyod9H5acyEioCcGoqAoC_9jM=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/11vtc78bhLZRsWTVRdS0T1xwCNgYzjuNb=k",
        Texto:
          "Producido para la Academia CBC, que reúne a jugadores, jueces y líderes de CBC. Filmado en la impresionante sede de CBC en Río de Janeiro, este proyecto de cuatro días capturó la esencia y el legado de la Academia CBC con espectaculares tomas aéreas y cinematografía. de alta calidad.\n\nNuestro guión, meticulosamente elaborado por nuestro equipo interno, destaca el compromiso de CBC Academy con el desarrollo deportivo. Cada tablero refleja la dedicación a promover el deporte y nutrir nuevos talentos, reforzando que, para nosotros, esto no es solo una producción, sino una asociación dedicada al éxito en el deporte.",
        Diretor: "Kahue Rozzi",
        Categorias: "Institucional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Eucatex",
        Título: "MDP Perfecto",
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
        Título: "Vtex Compras en Vivo",
        Subtítulo: "",
        YouTube: "https://youtu.be/FKcbcxzmOhE",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1T68gBE6cHMUauEpo4JVBAOWFHoS_hsbX=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1TiUWdQdmp7OuF1G2yn2umfwdlnrUVx81=k",
        Texto:
          "La aplicación VTEX Live Shopping es la solución nativa de experiencia de compras en vivo que está revolucionando el mercado global, y SimonSays tuvo el privilegio de producir un video promocional para la plataforma en inglés, que también fue traducido al portugués, croata, francés y español. Además, realizamos una transmisión completa en vivo en inglés en la plataforma, con traducción simultánea al portugués.\n\nActualmente, más de 100 empresas de 10 países ya adoptaron la herramienta VTEX, lo que demuestra la expansión global y el impacto de esta innovadora plataforma. .",
        Diretor: "Kahue Rozzi",
        Categorias: "Institucional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Localizar",
        Título: "Fidelidad",
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
        Título: "Sanasa Institucional",
        Subtítulo: "",
        YouTube: "https://youtu.be/UF2Rs63dB78",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1KxVwJMY3WrY6EolpWIikJFm60vehFKWH=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1KwPhwMYrUM7FjyVf_zwj-Fj9qz2NZuja=k",
        Texto:
          "En este proyecto profundizamos en las operaciones de SANASA para dar a conocer el proceso de potabilización del agua que abastece a la ciudad.\n\nFueron tres días de intenso rodaje, durante los cuales capturamos cada etapa del complejo proceso de tratamiento del agua, desde la recolección hasta distribución segura a la población.",
        Diretor: "Kahue Rozzi",
        Categorias: "Institucional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Caoa Chery",
        Título: "Lanzamiento de Tiggo 7 Pro",
        Subtítulo: "",
        YouTube: "https://youtu.be/XNMQb7M8G6g?si=e4jIlZchDVQO4-Z1",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/13azsuee5BXEiqeaJ80wEQ6GRq_5LUiaJ=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/13cYaEMxR0lOrR7JLSbAASE5CcKQbl-vj=k",
        Texto:
          "Vídeo de lanzamiento exclusivo del nuevo Tiggo 7 Pro, producido íntegramente por Simonsays Filmes. Además del vídeo de lanzamiento que explica todas las características del coche, también hemos producido 35 pastillas para las redes sociales.",
        Diretor: "Kahue Rozzi",
        Categorias: "Institucional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Cosmotec",
        Título: "Cosmotec Institucional",
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
        Cliente: "Cajero",
        Título: "Caja Promoción Casa Llena Mastercard",
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
        Título: "Colitis ulcerosa",
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
        Cliente: "Cajero",
        Título: "Cajero adinerado de Mastercard",
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
        Título: "Petronas Institucional",
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
        Cliente: "McCain",
        Título: "McCain Chef SureCrisp",
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
        Cliente: "Lean",
        Título: "60 años de Lean",
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
        Título: "Experiencia Jeep",
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
        Título: "Experiencia Jeep",
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
        Título: "Parque Infantil Colegio Cidade Jardim",
        Subtítulo: "Inscripciones Abiertas",
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
        Título: "Parque Infantil Colegio Cidade Jardim",
        Subtítulo: "Inscripciones Abiertas 30s",
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
        Título: "Parque Infantil Colegio Cidade Jardim",
        Subtítulo: "Inscripciones Abiertas 9x16",
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
        Título: "Parque Infantil Colegio Cidade Jardim",
        Subtítulo: "Inscripciones Abiertas 30s 9x16",
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
        Título: "Invertir juntos",
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
        Título: "Colegio Villares",
        Subtítulo: "Elección de vida",
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
        Título: "Colegio Villares",
        Subtítulo: "Elección de vida 9x16",
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
        Título: "Colegio Villares",
        Subtítulo: "Elección de vida años 30",
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
        Título: "Colegio Villares",
        Subtítulo: "Elección de vida 30sd 9x16",
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
        Título: "Roca de viaje",
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
        Título: "Testimonios de Osasco Coronavirus",
        Subtítulo: "Vídeo 1",
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
        Título: "Testimonios de Osasco Coronavirus",
        Subtítulo: "Vídeo 2",
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
        Título: "Testimonios de Osasco Coronavirus",
        Subtítulo: "Vídeo 3",
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
        Título: "Nuevas armas CBC de Khan",
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
        Título: "Revisión de municiones de la NTA",
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
        Cliente: "Tauro",
        Título: "Revisión TS9",
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
        Cliente: "Felicidad",
        Título: "Curso de formación en felicidad",
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
        Cliente: "Felicidad",
        Título: "Presentación del Método de la Felicidad",
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
        Cliente: "Fernández Mera",
        Título: "Fernández Mera | Día del Corredor",
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
        Título: "SinCronía",
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
        Título: "FACSP Institucional",
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
        Título: "Longevidad",
        Subtítulo: "Vídeo 1",
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
        Título: "Longevidad",
        Subtítulo: "Vídeo 2",
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
        Título: "¿Qué te inspira de la medicina?",
        Subtítulo: "Episodio 1",
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
        Título: "¿Qué te inspira de la medicina?",
        Subtítulo: "Episodio 2",
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
        Título: "¿Qué te inspira de la medicina?",
        Subtítulo: "Episodio 3",
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
        Título: "¿Qué te inspira de la medicina?",
        Subtítulo: "Episodio 4",
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
        Título: "¿Qué te inspira de la medicina?",
        Subtítulo: "Episodio 5",
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
        Título: "Cotia 166 Años",
        Subtítulo: "Vídeo 1",
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
        Título: "Cotia 166 Años",
        Subtítulo: "Vídeo 2",
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
        Cliente: "Más solución",
        Título: "Solución Institucional Más",
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
        Cliente: "Más solución",
        Título: "Solución más manifiesta",
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
        Título: "Dinamis Institucional",
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
        Título: "PTI Institucional Más Fuerte",
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
        Título: "Manifiesto PayGo",
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
        Cliente: "Puma",
        Título: "Sociedad de corredores secretos",
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
        Cliente: "Puma",
        Título: "Siempre rápido",
        Subtítulo: "",
        YouTube: "https://youtu.be/D77_5_Jb4RA",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1QaaHCDl9oHsVReGWBUjOleRQa2OlNEPb=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1QVc3PAZOt9MWGGbPCD3TSEAvfCw6227P=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Institucional",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Puma",
        Título: "Hacerse cada vez más rápido",
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
        Título: "Nueva Empresa",
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
        Cliente: "Nueva TI",
        Título: "Nuevo//Manifiesto It",
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
        Cliente: "Zemplar",
        Título: "Hemodiálisis Zemplar",
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
        Título: "Prevención del Covid 19",
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
        Cliente: "Colegio Santana",
        Título: "Vinimos a Servir | Acción Social",
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
        Título: "Grupo Institucional Cometa",
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
        Cliente: "Grupo Z11",
        Título: "Grupo z11",
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
        Cliente: "Ministerio de Salud",
        Título: "Movimiento Brasileño por las Vacunas",
        Subtítulo: "Sarampión",
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
        Cliente: "Ministerio de Salud",
        Título: "Movimiento Brasileño por las Vacunas",
        Subtítulo: "VPH",
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
        Cliente: "Ministerio de Salud",
        Título: "Movimiento Brasileño por las Vacunas",
        Subtítulo: "Poliomielitis",
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
        Cliente: "Ministerio de Salud",
        Título: "Movimiento Brasileño por las Vacunas",
        Subtítulo: "Paperas",
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
          "Ministerio de Desarrollo y Asistencia Social, Familia y Lucha contra el Hambre",
        Título: "Registro Único",
        Subtítulo: "¿Conoce el Registro Único?",
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
          "Ministerio de Desarrollo y Asistencia Social, Familia y Lucha contra el Hambre",
        Título: "Registro Único",
        Subtítulo: "¿Conoce el Registro Único? 9x16",
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
          "Ministerio de Desarrollo y Asistencia Social, Familia y Lucha contra el Hambre",
        Título: "Registro Único",
        Subtítulo: "¿Cómo se realiza el registro?",
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
          "Ministerio de Desarrollo y Asistencia Social, Familia y Lucha contra el Hambre",
        Título: "Registro Único",
        Subtítulo: "¿Cómo se hace el registro? 9x16",
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
          "Ministerio de Desarrollo y Asistencia Social, Familia y Lucha contra el Hambre",
        Título: "Registro Único",
        Subtítulo:
          "¿Por qué el gobierno evalúa los registros de quienes viven solos?",
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
          "Ministerio de Desarrollo y Asistencia Social, Familia y Lucha contra el Hambre",
        Título: "Registro Único",
        Subtítulo:
          "¿Por qué el gobierno evalúa los registros de quienes viven solos? 9x16",
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
          "Ministerio de Desarrollo y Asistencia Social, Familia y Lucha contra el Hambre",
        Título: "Registro Único",
        Subtítulo: "¿Cómo mantener actualizado tu registro?",
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
          "Ministerio de Desarrollo y Asistencia Social, Familia y Lucha contra el Hambre",
        Título: "Registro Único",
        Subtítulo: "¿Cómo mantener actualizado tu registro? 9x16",
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
        Cliente: "Ministerio de Salud",
        Título: "Cuidemos Brasil",
        Subtítulo: "Ahora tienes Pediatría en Atención Primaria",
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
        Cliente: "Ministerio de Salud",
        Título: "Cuidemos Brasil",
        Subtítulo: "Qué es la Atención Primaria de Salud",
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
        Cliente: "Ministerio de Salud",
        Título: "Cuidemos Brasil",
        Subtítulo: "Cómo funciona la Atención Primaria de Salud",
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
        Cliente: "Ministerio de Salud",
        Título: "Cuidemos Brasil",
        Subtítulo:
          "Cuáles son las diferencias entre Atención Primaria y Especializada",
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

        Cliente: "Cajero",
        Título: "SIM Digital Crédito Caixa Tem",
        Subtítulo: "¿Para quién es el crédito?",
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
        Cliente: "Cajero",
        Título: "SIM Digital Crédito Caixa Tem",
        Subtítulo: "Mi Caixa ha sido bloqueada, ¿qué debo hacer?",
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
        Cliente: "Cajero",
        Título: "SIM Digital Crédito Caixa Tem",
        Subtítulo: "Condiciones y documentación para Particulares",
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
        Cliente: "Cajero",
        Título: "SIM Digital Crédito Caixa Tem",
        Subtítulo: "Condiciones y documentación para MEI",
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
        Cliente: "Cajero",
        Título: "SIM Digital Crédito Caixa Tem",
        Subtítulo: "Restablecer contraseña",
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
        Cliente: "Cajero",
        Título: "SIM Digital Crédito Caixa Tem",
        Subtítulo: "Consejos para el envío de documentación de registro",
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
        Cliente: "Cajero",
        Título: "SIM Digital Crédito Caixa Tem",
        Subtítulo: "Informe de resultados de Caixa Tem",
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
        Cliente: "Cajero",
        Título: "SIM Digital Crédito Caixa Tem",
        Subtítulo: "Confirmación de actualización de registro",
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
        Cliente: "Cajero",
        Título: "SIM Digital Crédito Caixa Tem",
        Subtítulo: "¿Cómo solicitar un préstamo?",
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
        Cliente: "Cajero",
        Título: "SIM Digital Crédito Caixa Tem",
        Subtítulo: "Estado de la solicitud de crédito",
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
        Cliente: "Ministerio de Ciudadanía",
        Título: "Brasil Fraterno - Comida en el Plato",
        Subtítulo: "Vídeo 1",
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
        Cliente: "Ministerio de Ciudadanía",
        Título: "Brasil Fraterno - Comida en el Plato",
        Subtítulo: "Vídeo 2",
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
        Cliente: "Ministerio de Ciudadanía",
        Título: "Brasil Fraterno - Comida en el Plato",
        Subtítulo: "Vídeo 3",
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
        Subtítulo: "Vida de grupo",
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
        Subtítulo: "Responsabilidad Civil",
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
        Subtítulo: "Zika y Dengue",
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
        Subtítulo: "Automático",
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
        Subtítulo: "Daños y Riesgos PJ",
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
        Título: "Nueva Batería Moura",
        Subtítulo: "",
        YouTube: "https://youtu.be/wLOpoOKyl7I",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1Cxn2b1pkbD1HaDOCYv6-x7T6Qfcy1LyU=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1Cxi1E4NR2yBGrq-fsm6-opqbppLz0wcu=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Publicidad",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Ministerio de Salud",
        Título: "Salud de la Mujer",
        Subtítulo: "Atención Primaria de Salud",
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
        Cliente: "Ministerio de Salud",
        Título: "Salud de la Mujer",
        Subtítulo: "Cáncer",
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
        Cliente: "Ministerio de Salud",
        Título: "Salud de la Mujer",
        Subtítulo: "Prenatal",
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
        Cliente: "Ministerio de Salud",
        Título: "Salud de la Mujer",
        Subtítulo: "Sexualidad y planificación familiar",
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
        Cliente: "Ministerio de Salud",
        Título: "Salud de la Mujer",
        Subtítulo: "IST",
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
        Cliente: "Ministerio de Salud",
        Título: "Salud de la Mujer",
        Subtítulo: "Prenatal dental",
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
        Título: "Consorcio de la A a la Z",
        Subtítulo: "¿Qué es un grupo consorcio?",
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
        Título: "Consorcio de la A a la Z",
        Subtítulo: "¿Cómo funciona el consorcio?",
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
        Título: "Consorcio de la A a la Z",
        Subtítulo: "¿Por qué es importante leer el contrato?",
        YouTube: "https://youtu.be/Ed77aLHVoP",
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
        Título: "Consorcio de la A a la Z",
        Subtítulo: "¿Cómo funcionan los ensamblajes?",
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
        Título: "Consorcio de la A a la Z",
        Subtítulo: "¿Cuáles son las formas de contemplación?",
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
        Título: "Consorcio de la A a la Z",
        Subtítulo: "¿Qué son las ofertas integradas?",
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
        Título: "Consorcio de la A a la Z",
        Subtítulo: "¿Para qué sirven las garantías?",
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
        Título: "Consorcio de la A a la Z",
        Subtítulo: "¿Es posible comprar lo que quieres con crédito?",
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
        Título: "Consorcio de la A a la Z",
        Subtítulo: "Comprar un bien de menor valor",
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
        Título: "Consorcio de la A a la Z",
        Subtítulo: "¿Qué es una tarifa administrativa?",
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
        Título: "Consorcio de la A a la Z",
        Subtítulo: "¿Qué es un fondo de reserva?",
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
        Título: "Consorcio de la A a la Z",
        Subtítulo: "Cuota del Consorcio",
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
        Título: "Consorcio de la A a la Z",
        Subtítulo: "¿Cambia el valor del crédito y las cuotas?",
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
        Título: "Consorcio de la A a la Z",
        Subtítulo: "¿Qué pasa cuando pagas por adelantado?",
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
        Título: "Consorcio de la A a la Z",
        Subtítulo: "¿Está permitido recibir crédito en efectivo?",
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
        Título: "Consorcio de la A a la Z",
        Subtítulo: "¿Qué pasa si el pago de la cuota se retrasa?",
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
        Título: "Consorcio de la A a la Z",
        Subtítulo: "Retirada",
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
        Título: "Consorcio de la A a la Z",
        Subtítulo: "Transferencia",
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
        Título: "Consorcio de la A a la Z",
        Subtítulo: "Cuota contemplada",
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
        Título: "Consorcio de la A a la Z",
        Subtítulo: "¿Puedo volver a pagarle a mi consorcio?",
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
        Cliente: "Sonrisas",
        Título: "Nueva Tarjeta Sonrisas",
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
        Título: "Casa Lactulona",
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
        Título: "Lanzamiento de SEMP 4k",
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
        Subtítulo: "¿Cómo reforzar el flujo de caja de la empresa?",
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
        Subtítulo: "¿Cómo vender por WhatsApp y redes sociales?",
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
        Subtítulo: "¿Cómo reducir costos?",
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
        Subtítulo: "¿Cómo aumentar tus ventas?",
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
        Subtítulo: "¿Qué son los canales de venta?",
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
        Subtítulo: "¿Cómo expandir una pequeña empresa y ganar más?",
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
        Subtítulo: "¿Cómo utilizar la tecnología en beneficio de su empresa?",
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
        Cliente: "Ministerio de Salud",
        Título: "No es culpa de los monos",
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

        Cliente: "Ministerio de Salud",
        Título: "Lucha contra el Aedes/Dengue",
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
        Título: "Farmacovigilancia",
        Subtítulo: "Seguridad del paciente",
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
        Título: "Farmacovigilancia",
        Subtítulo: "Farmacovigilancia en terapia biológica",
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
        Título: "Farmacovigilancia",
        Subtítulo: "Transporte y almacenamiento",
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
        Título: "Guía de visualización controlada",
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
        Cliente: "FTD Educação",
        Título: "FTD 120 Años",
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
        Título: "Incentivo al comercio local",
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
        Título: "Cada día es día",
        Subtítulo: "Campaña",
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
        Título: "Cada día es día",
        Subtítulo: "lunes",
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
        Título: "Cada día es día",
        Subtítulo: "Martes",
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
        Título: "Cada día es día",
        Subtítulo: "Miércoles",
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
        Título: "Cada día es día",
        Subtítulo: "Jueves",
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
        Título: "Cada día es día",
        Subtítulo: "Viernes",
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
        Título: "Cada día es día",
        Subtítulo: "Fin de semana",
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
        Título: "Tutorial de SafraPay",
        Subtítulo: "MAQUINA BLUETOOTH Y APP SAFRAPAY",
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
        Título: "Tutorial de SafraPay",
        Subtítulo: "MÁQUINA CON BOBINA",
        YouTube: "https://youtu.be/CgMIgcHNpD4",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1Z1JeuPcMFeCH0ICb00Y_6mJl_Y42EYJ7=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1Z0b3gBu7TzSWIZyFRRUIBk80N0DOor-X=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Motion 2D/3D",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Safra",
        Título: "Tutorial de SafraPay",
        Subtítulo: "MÁQUINA MÓVIL SIN BOBINA GPRS",
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
        Título: "Tutorial de SafraPay",
        Subtítulo: "MÁQUINA SIN BOBINA",
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
        Título: "Tutorial de SafraPay",
        Subtítulo: "CONOCE NUESTRAS MÁQUINAS",
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
        Título: "Tutorial de SafraPay",
        Subtítulo: "TUTORIAL INTELIGENTE",
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
        Título: "Artritis reumatoide",
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
        Título: "Cosecha de Créditos Consignados",
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
        Título: "Amortiguadores Nakata",
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
        Título: "Formalización Digital Safra Financeira",
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
        Título: "Uso de Survanta",
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
        Título: "Biosimilares",
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
        Título: "Biológico",
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
        Título: "Día de Pago Financiero Nueva Cosecha",
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
        Título: "Soy Más",
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
        Título: "Tutorial de SafraPay",
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
        Título: "Autónomo",
        Subtítulo: "Vídeo 1",
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
        Título: "Autónomo",
        Subtítulo: "Vídeo 2",
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
        Título: "Autónomo",
        Subtítulo: "Vídeo 3",
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
        Título: "Autónomo",
        Subtítulo: "Vídeo 4",
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
        Cliente: "Pedidos ahora",
        Título: "Pedidos ahora",
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
        Título: "Misiones Unilever",
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
        Cliente: "Espartano",
        Título: "Brasil espartano",
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
        Título: "Promoción Mini St Marche",
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
        Título: "Nebulizadores Omron",
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
        Cliente: "Radio Disney",
        Título: "Radio Disney",
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
        Título: "Teva | Farmacovigilancia",
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
        Título: "Esto es Teva",
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
        Título: "Proyecto Puertas",
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
        Título: "Humira Pen - Guía de aplicación",
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
        Título: "Set Brasil | Ed. Moderna.",
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
        Cliente: "Sonrisas",
        Título: "SONRISAS Y CONCHA",
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

        Cliente: "Amanecer Blindado",
        Título: "Clip SOS",
        Subtítulo: "",
        YouTube: "https://youtu.be/iwIus7Z3GTo",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/12vLZ-QckNNZBjZ7KUKFQxs31GRaNiKg_=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/12ssuk9i4W1JsGYcJauK1AXZZfrqL9qRE=k",
        Texto:
          'El video musical de "SOS" de la banda brasileña de Metal Progresivo ARMORED DAWN fue dirigido por *Kahue Rozzi*, de SimonSays Filmes. El video muestra el encuentro de diferentes facetas y personalidades de un niño interior, un personaje solitario y depresivo que tanto la heroína como el villano de su propia historia.\nMezclado por *Chris Lord Alge* (Muse, Green Day, Nickelback) y masterizado por *Ted Jensen* (Bring Me The Horizon, Evanescent, Metallica).\nLa formación actual de Armored Dawn, que incluye a *Eduardo Parras* (voz), Tiago de Moura y Timo Kaarkoski (guitarras), Heros Trench (bajo), Rafael Agostino (teclados) y Chris Oliveira (batería).\nLa canción "SOS" fue escrita por *Carolina Angeli* y el ex baterista del grupo, Rodrigo Oliveira.',
        Diretor: "Kahue Rozzi",
        Categorias: "Clips musicales",
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
        Categorias: "Clips musicales",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Acústica y Válvulas",
        Título: "Cinco Frases",
        Subtítulo: "",
        YouTube: "https://youtu.be/1Jb1NKfdzfw",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1R9lBdAbK9N0yi2JwYvlaWrHdV2G3E0xC=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1R6RrOrNnfbsPGTAa_i6hIrXYcB2aSF55=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Clips musicales",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Acústica y Válvulas",
        Título: "Dios Quería",
        Subtítulo: "",
        YouTube: "https://youtu.be/eWkaCqpXAPc",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1QvGihAHGf3HwDcycSByIuFI6GUhQ8o_k=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1Qula4dLk-O7PC4cLcqhgJeP-if8Mkpok=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Clips musicales",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "AACC",
        Título:
          "Capital inicial - ¡Ayudar a los niños con cáncer es bueno para el corazón!",
        Subtítulo: "",
        YouTube: "https://youtu.be/xTg14JSAWiw",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1RDylXTStJVIKkCrS28lJA2h7YxtDRFn4=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1RCXKfj_Cb3MRkXIsCB-HdYRIMkFVaWmj=k",
        Texto: "",
        Diretor: "Kahue Rozzi",
        Categorias: "Clips musicales",
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
          'Estamos emocionados de compartir con todos ustedes nuestro documental en las etapas finales de edición sobre la vida y carrera de la inolvidable Dalva de Oliveira. Este proyecto es una brillante colaboración entre el Director Bernardo Martins, nieto del artista, y Kahue Campion Rozzi de SimonSays Filmes.\n\nNuestro equipo tuvo el honor de entrevistar a personalidades icónicas de la cultura brasileña, incluida la reconocida Maria Bethânia, personas que compartieron momentos preciosos con Dalva, e incluso figuras como Agnaldo Timóteo. Cada declaración aporta una perspectiva única sobre la influencia y el legado de Dalva de Oliveira.\n\nMás que un simple registro histórico, esta película es una celebración del impacto duradero de la "Reina de la Radio" y de cómo su música trasciende generaciones. Estén atentos al lanzamiento, ya que esta producción promete conmover e inspirar a todos.\n\n¡Estén atentos! Pronto serás invitado a ser parte de este viaje a través de las pantallas.',
        Diretor: "Bernardo Martins, Kahue Rozzi",
        Categorias: "Entretenimiento",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Serie",
        Título: "Fábrica de sueños",
        Subtítulo: "",
        YouTube: "https://youtu.be/ikSQsYlxqkk",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/17RnuL6w84QFWzyrsZGY75zQ92FTQSwim=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1uuJ4eP_OenAOH-iA1JVZeCzCDzLHjxe6=k",
        Texto:
          "Prepárate para profundizar en la fascinante historia del diseño de muebles en Brasil en esta serie de 10 episodios de 55 minutos cada uno, que es una coproducción entre SimonSays Filmes y Total Filmes. Episodios destacados: Joaquim Tenreiro, Lina Bo Bardi, José Zanine Caldas, Sergio Rodrigues, Jorge Zalszupin, Oscar Niemeyer, Paulo Mendes da Rocha, Geraldo de Barros, Michel Arnoult y Maurício Azeredo. Cada episodio profundizará en la vida, el trabajo y el legado de estos diseñadores, revelando cómo dieron forma a la historia del mueble. diseño en Brasil en un contexto de adaptación a la economía y la política de la época. Descubra cómo la elección de materiales y enfoques creativos de estos diseñadores reflejaron las transformaciones sociales y económicas del país. Prepárese para un viaje fascinante a través de imágenes de archivo, entrevistas y experiencias interesantes. narrativas mientras exploramos la rica herencia del diseño brasileño",
        Diretor: "Kahue Rozzi",
        Categorias: "Entretenimiento",
      },
      {
        FilmId: uuid(),
        Home: true,
        Cliente: "Total Filmes",
        Título: "Killer Mamonas - La Película",
        Subtítulo: "Servicio de producción",
        YouTube: "https://youtu.be/n_TmFQ5XfHc",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/161SjIv61fApwDnEvJMJCIlN5vM6W6IdZ=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1rO4yWXkZIqBwcSPz9ZH3mSV0NGr4oeNd=k",
        Texto: "",
        Diretor: "Edson Spinelo",
        Categorias: "Entretenimiento",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Total Filmes",
        Título: "Mamonas Assassinas - La Serie",
        Subtítulo: "En producción",
        YouTube: "https://youtu.be/_8G5VT4Z4G8",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1Nv5XC5sCCf5HCLXfpF_Mve2IWmW9GLJn=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/13T5K98MIgxuhDrVJl81raaTrhKSdDGTo=k",
        Texto:
          'Mamonas Assassinas: The Series - Una asociación exitosa entre Total Filmes y SimonSays Filmes.\n\nNuestra asociación no solo incluyó la producción de las viñetas iniciales y los pasajes de gráficos en movimiento, sino que también se extendió más allá, abarcando toda la postproducción de la serie.\n\nSomos responsables de una serie de aspectos cruciales de la serie, incluyendo el cuidadoso montaje de cada episodio, la banda sonora que involucra y conmueve, el acabado impecable que garantiza calidad y cohesión, además de la postproducción que plantea el nivel del proyecto. Nuestro equipo también jugó un papel clave en la corrección y masterización del color, asegurando que cada detalle visual y auditivo sea perfecto.\n\n"Mamonas Assassinas: A Série" promete cautivar al público en cinco emocionantes episodios que celebran la trayectoria única de la banda que ganó los corazones de todos. Es un honor ser parte de este proyecto y contribuir con nuestra experiencia para crear una serie que será recordada.\n\nSimonSays Filmes agradece a Total Filmes por la asociación duradera y por la confianza en nuestra capacidad para ofrecer excelencia en cada etapa de producción. Esperamos que esta serie sea otro hito en nuestra fructífera colaboración.',
        Diretor: "Edson Spinelo",
        Categorias: "Entretenimiento",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "",
        Título: "El mundo de Nina",
        Subtítulo: "",
        YouTube:
          "https://www.youtube.com/watch?v=kBrN-pTKonc&list=PLfpbyDuHNTPknb7yiNDRzV2h0SL-2zEPm",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1DLaewd1Bq1iEGPzmJMUTzj4GqZScDijG=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/11RVYlylJnhZjKsgZS6leZUQi1dr867Zh=k",
        Texto:
          "Nina's World - Una producción especial de SimonSays Filmes\n\nEn \"Nina's World\", SimonSays Filmes tuvo el honor de crear una serie animada infantil y musical que cautiva a los niños y sus familias. Nuestro dedicado equipo trabajó arduamente para desarrollar todos los personajes, animaciones y música que dan vida a este mundo encantador.\n\nLa increíble música que escuchas es creación del talentoso Rodrigo Água, mientras que las espectaculares ilustraciones fueron creadas por el renombrado Sergio Gaiolas. . La brillante idea y la dirección creativa que impulsan la serie son cortesía de Kahue Rozzi.\n\nActualmente, puedes encontrar \"Nina's World\" en YouTube y el canal VIVAX, donde ofrecemos contenido cuyo objetivo es brindar entretenimiento y educación. ¡Nuestro canal presenta canciones y animaciones infantiles que estimulan todos los sentidos de los niños, animándolos a bailar, cantar e interactuar!\n\nLos adorables personajes, Momô, Duuk, Dona Tuur, Unik y Ripa, viajan a todas partes, brindando diversión a todos los niños. 'Nina's World' es tu nuevo destino para música infantil y entretenimiento familiar de alta calidad.\n\nTe invitamos a unirte a 'Nina's World', donde la magia de la música y la diversión nunca termina",
        Diretor: "Kahue Rozzi",
        Categorias: "Entretenimiento",
      },
      {
        FilmId: uuid(),
        Home: false,
        Cliente: "Serie",
        Título: "C11 - DISNEY",
        Subtítulo: "Colegio 11 - Servicio de Producción",
        YouTube: "https://youtu.be/NLEAVgq2WzE",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1zRwyQ6TJHqXN4XvmXDRPOenQJG9XjYbJ=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1G-_7fR4_3eaC5_A3Vvizm03wLj_MUqeC=k",
        Texto:
          'SimonSays Filmes tuvo el honor de realizar su primer servicio de producción para otra productora colaboradora en el proyecto "Que Talento!" del canal Disney. Kahue jugó un papel clave en el desarrollo del lenguaje, la dirección de arte y la edición de los 26 episodios, incluidas las versiones en español. Este trabajo marcó nuestro compromiso con la calidad y la creatividad en las producciones audiovisuales.',
        Diretor: "",
        Categorias: "Entretenimiento",
      },
      {
        FilmId: uuid(),
        Home: true,
        Cliente: "",
        Título: "Sexo sin miedo",
        Subtítulo: "",
        YouTube: "https://www.youtube.com/watch?v=VUEWs9UVO5Q",
        "Thumb miniatura":
          "https://lh3.google.com/u/0/d/1PjQqBPyiO8E7XUfN6AQezZs_H6fIqeUP=k",
        "Thumb principal":
          "https://lh3.google.com/u/0/d/1XUi_z_z0F_yLL-9Ulodb2HhwqPrjugnF=k",
        Texto: "",
        Diretor: "",
        Categorias: "Entretenimiento",
      },
    ],
  },
];

type filmsProps = {
  FilmId: string;
  Home: boolean;
  Cliente: string;
  Título: string;
  Subtítulo: string;
  YouTube: string;
  "Thumb miniatura": string;
  "Thumb principal": string;
  Texto: string;
  Diretor: string;
  Categorias: string;
}[];

let categoriasSet: Set<string> = new Set();


let filmsInLanguage: filmsProps = [];

const arrayTranslated = filmsArray.find(
  (films) => films.Idioma === localStorage.getItem("idioma")
)?.Films;
filmsInLanguage = arrayTranslated ? arrayTranslated : filmsArray[0].Films;

filmsInLanguage.forEach((film, index) => {
  film.FilmId = (index + 1).toString();
});

categoriasSet.add("Todos");

filmsInLanguage.forEach((film) => {
  categoriasSet.add(film.Categorias);
});

export const categorias: string[] = Array.from(categoriasSet);

export default filmsArray;
