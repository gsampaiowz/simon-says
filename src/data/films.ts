import { v4 as uuid  } from "uuid";

const filmsArray = [
  {
    FilmId: uuid(),
    Cliente: "CLDF",
    Título: "CLDF Bandeiras",
    Subtítulo: "Por Cada um por todos nós",
    YouTube: "https://youtu.be/3vYC8VUyEOY",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=168aC9jpU9N0X8Y7LatOVquBKsy2v3kur",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1ZW593XJKCAWSLNI4ryL2DT0PF5UcD1Xn",
    Texto:
      "https://docs.google.com/document/d/1kkYtCKIxMlT-TIyTOI9TdRDl7ON7v4lsRGo2vY3ouLU/edit?usp=drive_link",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Cereser",
    Título: "Promoção Vem Brindar com Cereser",
    Subtítulo: "",
    YouTube: "https://youtu.be/nMD3m_bd2aU",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1Vo0ELtrT5xJqe9QsT-uyJM-8zklVQ3bT",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1Vr4jzgwm3L3kw_Rf0kNhjs1ZaGe0JVAt",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Pay4Fun",
    Título: "Pay4Fun Pode Apostar ",
    Subtítulo: "Manifesto",
    YouTube: "https://youtu.be/luErIdsU7ds",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1W51LbgUAJDz-TPFM9CYp0MJe_eYlJNDS",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1W4jxpcLQGoepMeffMP3aAHQM-f6Nn9Wl",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Pay4Fun",
    Título: "Pay4Fun Pode Apostar ",
    Subtítulo: "Manifesto 30s",
    YouTube: "https://youtu.be/zihZU2mHPQE",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1W2Gf-1qwFmYeuP6jTalJsFcJkPGUv1WE",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1Vy_19CX64whNB_B-0VnG3SeZvY-uV4Kb",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Pay4Fun",
    Título: "Pay4Fun Pode Apostar ",
    Subtítulo: "Manifesto 30s 9x16",
    YouTube: "https://youtube.com/shorts/WcDH2HsUDGo",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1VxNWeZ8-nqQ54igBGiWaq_bOhCCv1ZAE",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1VxGb7m2AZ_4vrq9NutRy3fACiYW4eZun",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Audionova",
    Título: "Ouça mais com o coração",
    Subtítulo: "Guerra",
    YouTube: "https://youtu.be/fIQRZxDXjMk",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1jq7kf9a-Keb1HMHsaoJjzXIsk38JhlTz",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1S6AM48APJGeCCt1ykE28Av7o3xQQS4iY",
    Texto:
      "https://docs.google.com/document/d/1yfIn5GlDsUDRrLOuxTyGZKzJqzO-90BKtOO4rMq1JwM/edit?usp=drive_link",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Audionova",
    Título: "Ouça mais com o coração",
    Subtítulo: "Religião",
    YouTube: "https://youtu.be/olJRbx13aZw",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1mP3euStYgY1hFD6I7oF3yPzPTd5p7R4j",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1TcyU0CuBlcyR_gWVKPpJZWZW_ouIhCUF",
    Texto:
      "https://docs.google.com/document/d/1wl_JYL5OD7bHq_lEJG7G__GrkhkdRluScPSYLT8hmRY/edit?usp=drive_link",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Audionova",
    Título: "Ouça mais com o coração",
    Subtítulo: "Família",
    YouTube: "https://youtu.be/OFUoGu-dlTs",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1sAssmgxtKR-_x7dS-po5xYngXsEjqlks",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1KEfAWPUmxrNbx3Rf8_NRFbpOCpukjanu",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Audionova",
    Título: "Ouça mais com o coração",
    Subtítulo: "Casal",
    YouTube: "https://youtu.be/d9-JiwdhQ9k",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1HJ821_IJgeUNmW-J2CjYNf1K_NJ7acD-",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1kSwnSJM_kFQT_bUnX4ldFNI0DY8EqW_v",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Audionova",
    Título: "Ouça mais com o coração",
    Subtítulo: "Senhor",
    YouTube: "https://youtu.be/LAIwz6xrLOI",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1s4JwbDCxZqKOEoMvs0-lsbFr0q62XVDf",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1l20qRtWSn8h5dnQ9WpvmltYPZ1-jtxg6",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Enxuto",
    Título: "Enxuto 60 anos",
    Subtítulo: "",
    YouTube: "https://youtu.be/BziKQe2igyw",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1Wu4JOzsWBaAvKEksnlswan1enrwQ0sI1",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1WsOd4FmcEY5529iyZXgofRUiiSz1LQZF",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Enxuto",
    Título: "Enxuto 60 anos",
    Subtítulo: "9x16",
    YouTube: "https://youtu.be/nsffSAxJEFU",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1Wu4JOzsWBaAvKEksnlswan1enrwQ0sI1",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1WsOd4FmcEY5529iyZXgofRUiiSz1LQZF",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Universo Ambipar",
    Título: "Universo Ambipar",
    Subtítulo: "Larissa Manoela conta o que é a Universo",
    YouTube: "https://youtu.be/VbJLzXdw7PE",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1e8gR_bpCcEpJ72zPfiZCD9gkVRB27sRp",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1Rxlu9GCnE0p6AopFq4_6V6ExTiRMz5ly",
    Texto:
      "https://docs.google.com/document/d/1DlQMqNeFa9iXlJ9JdO9Rn5b6MQhm_oMx4BWLt-cXFbo/edit?usp=drive_link",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Universo Ambipar",
    Título: "Universo Ambipar",
    Subtítulo: "Apresentação",
    YouTube: "https://youtu.be/d5s4V_aj-T4",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=11Ha652rn7y_zHE3QFV6TyNsns4dU9QLk",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1TQeMF1dT8v-58AH-s8uPInvsUSEKO4bS",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Universo Ambipar",
    Título: "Universo Ambipar",
    Subtítulo: "Álcool Ecológico",
    YouTube: "https://youtu.be/POctFA30l7Y",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1uMFpH49_uN3C-BK1NGQXTKkvtENZhATY",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1qOK9BCaqyz48EC4uZRTq6i7JbJByIl0i",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Universo Ambipar",
    Título: "Universo Ambipar",
    Subtítulo: "Biocápsulas",
    YouTube: "https://youtu.be/EObdGTPCdko",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1ixFIgHhuVq1WRZWHTrOYPtTLwT5BKzBm",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1El766VJJl1IA7Tt7bmIh8coy8dfzNsuB",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Universo Ambipar",
    Título: "Universo Ambipar",
    Subtítulo: "Biombo",
    YouTube: "https://youtu.be/DhyJmAt3EKU",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1Lf6Ks4IAS_6-tASkH1tCtMT835s2xNj1",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1IJp03sJsLrWTV0s9mC07a10jxav9zNNE",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Universo Ambipar",
    Título: "Universo Ambipar",
    Subtítulo: "Condicionador",
    YouTube: "https://youtu.be/HtfPs82m8eg",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=13eQFBYHFqtogivlKkEiSbZNVkeCp_AFg",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1ymSQbWfg0g18g01rxmEaKaz3Ig_W-OFz",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Universo Ambipar",
    Título: "Universo Ambipar",
    Subtítulo: "Ecosolo",
    YouTube: "https://youtu.be/DkEhZZcvOsk",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1dT9ZKXmvqrRzO3kJNBkhuw9TuLwmqGhQ",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1mGjWyM-jekC7aUDYwyeYjfUS6jFyxpr-",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Universo Ambipar",
    Título: "Universo Ambipar",
    Subtítulo: "Luminária 3D",
    YouTube: "https://youtu.be/GyFOWHyjytw",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1mk16DyAkEmktbZ2Zk1xrk4OqL5sJqgD5",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1sQGqIoVeY2mCWlZf-7YhmCDEEUiBmdJw",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Universo Ambipar",
    Título: "Universo Ambipar",
    Subtítulo: "Luminárias",
    YouTube: "https://youtu.be/4RimYS5c-yQ",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=13Fs3ssWlQ8PEVtPB9jq6O0GKG3Gyx5xO",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1lboiIgItX9eblwoHQg0U4JXB29vS66N1",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Universo Ambipar",
    Título: "Universo Ambipar",
    Subtítulo: "Macacão",
    YouTube: "https://youtu.be/NQrd0BWCXlY",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=12O9vmQzQn6Qc0v0xMAf8fUJtN_l-j1nt",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=19cZLEKZ3mY-wVSlCfbRWA79cNYNxLlip",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Universo Ambipar",
    Título: "Universo Ambipar",
    Subtítulo: "Mesa de Cabeceira",
    YouTube: "https://youtu.be/cr9tVH4t48o",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=109fszHeYvEVY_7wN9ScaZJAiL4Xx2mCQ",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1N9ct-JbN2oo4VZE0OHr7qGNqUneqVfe5",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Universo Ambipar",
    Título: "Universo Ambipar",
    Subtítulo: "Obsolescência",
    YouTube: "https://youtu.be/vugRJ_CuBCg",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1DbwV7kOzh-BsmFpESZGJd_7-2mrpLrAS",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1eiVVTXbTQ93an8Iuo62uepLU3aGLIWAP",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Universo Ambipar",
    Título: "Universo Ambipar",
    Subtítulo: "Plástico Bolha",
    YouTube: "https://youtu.be/S-2X_6ikYyQ",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1Rij61v-Gs0AWGspwIIx9geYzIfIfGLan",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1mixImKW8sRsAbgxLeWPelOm2tQ4_kjCi",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Universo Ambipar",
    Título: "Universo Ambipar",
    Subtítulo: "Sabonete",
    YouTube: "https://youtu.be/phfZQy8BOeI",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=12VRu9QKKkuuzOOQIhPNQRfHsBECFDrZX",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=12WLYtwrVmM6loeazWDVUTQtwctMro22W",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Universo Ambipar",
    Título: "Universo Ambipar",
    Subtítulo: "Shampoo",
    YouTube: "https://youtu.be/N69qxe6lsDc",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=12YLcM96gA_Ynh6ZzhNNS4c4kkr-mSnFl",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=12m1stWCdKKGZS9nsnjL8f6LKk6B_Y7pe",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Cognita",
    Título: "Colégio Cidade Jardim Playpen",
    Subtítulo: "Matrículas Abertas",
    YouTube: "https://youtu.be/KO1t7eT_wRU",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1W5UA2oBmllFDacKefHUMi-YZJnYYtAdX",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1WSd4gV8D-8ShG7LLW-6v2hUltHfB3O85",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Cognita",
    Título: "Colégio Cidade Jardim Playpen",
    Subtítulo: "Matrículas Abertas 30s",
    YouTube: "https://youtu.be/DdMGp1PiPwc",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1WOWCyd3gKLMyMn-wq58NuS-uwH8NKZWl",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1WN5z4cDzhQAnESWjVHtc0fK-qksOh0tM",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Cognita",
    Título: "Colégio Cidade Jardim Playpen",
    Subtítulo: "Matrículas Abertas 9x16",
    YouTube: "https://youtu.be/k4us-DrBoww",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1WIX3_xl8wAl2RkpKDb8nN-nxjG-q4njq",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1WGzwCTcIY-TMxS0nfeapdRjTOIMSM6-5",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Cognita",
    Título: "Colégio Cidade Jardim Playpen",
    Subtítulo: "Matrículas Abertas 30s 9x16",
    YouTube: "https://youtube.com/shorts/Bh1bm1tJjXA",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1WBeCmFCxQqqo_bwoJ0oTJzKdUEmenYP5",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1WBVhDNRdEDChdyDWCY3Nl8-dmoYl9Xfd",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Cognita",
    Título: "Colégio Villares",
    Subtítulo: "Escolha para a Vida",
    YouTube: "https://youtu.be/AK2HkF4cliQ",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1WXO374uY2uLeJ8ZIAHoEPQLZ_wJZmg_R",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1WozYWXyfqJNt5jZ6USTV6uhHIy6-0LF2",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Cognita",
    Título: "Colégio Villares",
    Subtítulo: "Escolha para a Vida 9x16",
    YouTube: "https://youtu.be/c9-XTy-OwSo",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1Wov3ihlDTb_bByLwMcv5S8OtxCz5MKDH",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1WnPitEDTe07_Ihk226a2Bgr3ogIWFVAu",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Cognita",
    Título: "Colégio Villares",
    Subtítulo: "Escolha para a Vida 30s",
    YouTube: "https://youtu.be/8vqFludlQbc",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1Wmr5V_0RbZJeJsB0wcCsoBQqcF82J5B9",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1Wm9k-vSGmivGnSAy0VMJjyzIbFZ1np26",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Cognita",
    Título: "Colégio Villares",
    Subtítulo: "Escolha para a Vida 30sd 9x16",
    YouTube: "https://youtube.com/shorts/bHzaNlwUXdU",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1WkBAO-SVgNE3iX1h5n00KRsg3Yj_4sJ5",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1WjWMHQRqq3AWCKN-3vTkH6w0f43jM9Wu",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Mccain",
    Título: "Mccain Chef SureCrisp",
    Subtítulo: "",
    YouTube: "https://youtu.be/wJ6J0xGLPLc",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1Cz5W6r5HTk-2IqcRe-zTSC5RTAbNIWHu",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1D-ph3MVoD1FRkxbTVf9-bKPaMzCrCL1s",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Vtex",
    Título: "Vtex Live Shopping",
    Subtítulo: "",
    YouTube: "https://youtu.be/FKcbcxzmOhE",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1T68gBE6cHMUauEpo4JVBAOWFHoS_hsbX",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1TiUWdQdmp7OuF1G2yn2umfwdlnrUVx81",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Caoa Chery",
    Título: "Lançamento Tiggo 7 Pro",
    Subtítulo: "",
    YouTube: "https://youtu.be/XNMQb7M8G6g?si=e4jIlZchDVQO4-Z1",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=13azsuee5BXEiqeaJ80wEQ6GRq_5LUiaJ",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=13cYaEMxR0lOrR7JLSbAASE5CcKQbl-vj",
    Texto:
      "https://docs.google.com/document/d/1jQH80tluOtoNoRNWxmu-PLrwNAIXEAbSObsfPvaP-QI/edit?usp=drive_link",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "FTD Educação",
    Título: "Campanha FTD Sistema de Ensino",
    Subtítulo: "",
    YouTube: "https://youtu.be/npPlOnwgs5g?si=LjtkAjKPd4SSbAkA",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=13en0y9PYCJo06vj4H--6ppDqj5y2zVUl",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=13sS6XIoM33L8vZuPRo16YDElBbSiLcXB",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Goodyear",
    Título: "DogDoll",
    Subtítulo: "",
    YouTube: "https://youtu.be/BYxS6HxtwkQ",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=146WBylhHMal1gCc2ZDtAQeZzp1L9tWli",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=146fohX2XvEJiRpfFEtKCDyYnknokAIWj",
    Texto:
      "https://docs.google.com/document/d/1GKP3-h_Wgt46plE5LUPGBl7Q-RP89kldu02UsbnZLcU/edit?usp=drive_link",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Goodyear",
    Título: "Lama",
    Subtítulo: "",
    YouTube: "https://youtu.be/VECwYo9c8Vg",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1487WUajGV9wnetBkT4WHdkEwF4ceJOM0",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=148h3ZWq0grwg0xI5QIn2XB7hhymZJmaJ",
    Texto:
      "https://docs.google.com/document/d/1OPKJPDSZTHFLFNk25ISER5MbuiPra6k_nrFAGEsPV_o/edit?usp=drive_link",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Sanasa",
    Título: "Uso Consciente da Água",
    Subtítulo: "Vazamento",
    YouTube: "https://youtu.be/Ju3oha2e68E",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=14HoLT57DaMsrtSuId44_zkCFhwrsk1pE",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=14B0sAVpGMn2CO64glfQQG9lX1kB1bZLR",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Sanasa",
    Título: "Uso Consciente da Água",
    Subtítulo: "Rede de Esgoto",
    YouTube: "https://youtu.be/j51jlCYcKms",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=14QQX44FY8kVV9mSJt-_ahjHmMU6sU0j0",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=14Qdud-VFaTp_WYjfXey1YwrMRZmKVSHb",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Sanasa",
    Título: "Uso Consciente da Água",
    Subtítulo: "Construção",
    YouTube: "https://youtu.be/e4Bt54HRUOU",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=14UmHkNwIZoPBYZ8nfdFneHXisM_Avpcl",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=14Sobr10Oz0kBjJwZDrbRa26EATpOVnif",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Sanasa",
    Título: "Uso Consciente da Água",
    Subtítulo: "Uso Correto",
    YouTube: "https://youtu.be/bf13dUmr_Xs?si=8w6d0Zon9teGGqM-",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=14cb_-nybrpZUk9lAHcanSfXkWOExzKFS",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=14ZeKqLE1M3_UUmpdvQ1iiCIm7zR8kfOO",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "FTD Educação",
    Título: "Lançamento FTD Sistema de Ensino",
    Subtítulo: "",
    YouTube: "https://www.youtube.com/watch?v=6jovYBPkfSg",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=15IfodJgvXC2AHoYh5B6l1XyMo95nHCVb/view?usp=sharing",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=15BVOo4NEdlJ2lhfxvxznjMM9oDGieYUA/view?usp=sharing",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Fumcad",
    Título: "Reflexo",
    Subtítulo: "",
    YouTube: "https://youtu.be/sYX20-XYA3o",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=12yvIaSWQMdzVHZqkvroDRr6GVxyCNw8V",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=12yILVSDNB502WnwwJv9-MuCjKnyFuL8W",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Starbucks",
    Título: "Starbucks Refreshers",
    Subtítulo: "",
    YouTube: "https://youtu.be/VdadW8Ygo_o",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1BdhEzBYcXDwHfzv5cUjeX2qADNdxEOPD",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1Ba2cbbLHUrs6L5R-zQwOKPmb84UCcHo4",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "CBC",
    Título: "Novas Armas CBC by Khan",
    Subtítulo: "",
    YouTube: "https://youtu.be/7ipDJi3Amy8",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1BgltH2f6tSLlWu--ayvrGpl2JImK1GfE",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1BjP7sA8O0ZNwa17f-3Mz8iRly_-KrvMU",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "CBC",
    Título: "Review Munição NTA",
    Subtítulo: "",
    YouTube: "https://youtu.be/uuS9N_90yiY",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1BwgX4AG9RamTy5WYFwCTSFh_lFWznhuA",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1BxPJX1UbbeALrvEK3MYqPzdPeegAX5xZ",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Taurus",
    Título: "Review TS9",
    Subtítulo: "",
    YouTube: "https://youtu.be/dUtdgk4llMU",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1C4Bke4GtS1KKhsVuy4ywdK8tCmoCWUkd",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1By5lYnx3ULD8kSw9bvqAnqMGmUrCDtLf",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Goodyear",
    Título: "Perfomance",
    Subtítulo: "",
    YouTube: "https://youtu.be/rcL684GaVZs",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1QJ6_jOxCL3EY08Er9TNG2gvFLRlpkTRB",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1QA4yAdEkc4wMRGZqZC9FRKk5xgT7F-g2",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Fumcad",
    Título: "Dragão",
    Subtítulo: "",
    YouTube: "https://youtu.be/qPAgY2A0IKk",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=14sdCW4VPVtxCl0LwlqBY4kHjoJZ1qeIJ",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=14xJ3PYKrwLc76UytUhd5c43ooVWPijth",
    Texto:
      "https://docs.google.com/document/d/1BxJYdUKqk5nlP5Wd81U1g-ITIZ41M6k9-b7Hz9Hgl1I/edit?usp=drive_link",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "CBF",
    Título: "CBF Ídolos 1970 Copa do Mundo",
    Subtítulo: "",
    YouTube: "https://youtu.be/Hhrjj1fKXOM",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1A5bpRg_qa5-4Zh2lnc6Vbrn9kW8xK8N1",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1A6A1UdtcI8ScXKBVKylDfzp9hjwv9_Bu",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "CBF ",
    Título: "CBF Sub-17",
    Subtítulo: "",
    YouTube: "https://youtu.be/J9Tmup0KbcQ",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1A8F2OQh_XVg1CXoC31Gsn2SL0SKecZtP",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1A6Z227ZNmBJ6EaPte8N6Khmfl61UDMNV",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "C&A",
    Título: "C&A & Vc",
    Subtítulo: "",
    YouTube: "https://youtu.be/tEGXq7yKNZk",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1AIB1LXiCuSkqDXXbCRypU0qO3zHfIPuZ",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1AD6oj79iA8MVPWzme9iHe8tE6J1FWBY3",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Prefeitura de Osasco",
    Título: "Participa Osasco",
    Subtítulo: "",
    YouTube: "https://youtu.be/7AIKyaTdd28",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1COr_wBD_w2YuZz_cAFpN2-iZawGTz30a",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1CJ0DT2qTBawFGdJrzHCsAWfTk5H7ey43",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "ESPM",
    Título: "ESPM Transforma o seu Mundo",
    Subtítulo: "",
    YouTube: "https://youtu.be/diH5bJwSvoo",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1CeXFz5cOsTjAUQLDb2ZMFRg0HtlJFCda",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1CZm8DEi--zzxKqVxExDNGloqQ61xdbwl",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Moura",
    Título: "Nova Bateria Moura",
    Subtítulo: "",
    YouTube: "https://youtu.be/wLOpoOKyl7I",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1Cxn2b1pkbD1HaDOCYv6-x7T6Qfcy1LyU",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1Cxi1E4NR2yBGrq-fsm6-opqbppLz0wcu",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Nissin",
    Título: "Nissin do seu jeito",
    Subtítulo: "",
    YouTube: "https://youtu.be/GortQEUOYXw",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1KTjZn1wN5Y-tG9wa9iSpjY1yM96h0cp_",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1KSSc3ir5J1LwZJke5q1rdt9oePMaXcIe",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Zeiss",
    Título: "Zeiss UV Protect",
    Subtítulo: "",
    YouTube: "https://youtu.be/G1phj3AbeZI",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1B78B7rJoIVgJsvnOKiDB-dUh7Dz1VQe_",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1B0xHvj_440unXT3DI82tAlrSe2loS0Zj",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "XP Investimentos",
    Título: "Investir Juntos",
    Subtítulo: "",
    YouTube: "https://youtu.be/F_2qsnnKIKU",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1CkiETHpigYSJjHKO_qcC4peoXg7cLeVf",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1Cpu9yCZ5sWku-6lCrdpp1vPkrhZAWfUH",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Colégio Fereguetti",
    Título: "Colégio Fereguetti",
    Subtítulo: "",
    YouTube: "https://youtu.be/o3n7edzFD8Y",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1Ms44cYkMjOrTPN9OC8-dwC2Nb9CNmYy7",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1OL_PkSEHp6NzzKAJZac1_FZa-EvrPorE",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Central Farma",
    Título: "Central Farma - Central Nutrition",
    Subtítulo: "",
    YouTube: "https://youtu.be/0_lYCEf9nYs",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1BZPCO-Hs-E5RlimkyGYDh0KuDgl2SwtB",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1B_njizblOIAMI-S7g0JTVBcrBV8qzwAj",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "CBF",
    Título: "Seleção Solidária",
    Subtítulo: "",
    YouTube: "https://youtu.be/HZNBeWBg4yo",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1CYBP_c2LcPaL4Wb7lI7Ig-Bgcpc5AXHt",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1CUsB82BrRdKxJBXrA7OvMwiv60LAYw2c",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Sonda",
    Título: "Sonda Supermercados Nova Loja",
    Subtítulo: "",
    YouTube: "https://youtu.be/Va2BAjOoWuQ",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1P0FeFokrcWYpO91pKTgi7FegLEU_WdSi",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1OtM8qMotm7hYLLkfLz_zPwA3aC0zLLIC",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Jeep",
    Título: "Jeep Experience",
    Subtítulo: "Curitiba",
    YouTube: "https://youtu.be/LqdiYDm79g8",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1StIV6cszGh3XgSYq-DFuZtxCX8AyUBXz",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1SsZoBr781VUQj7uoxISN_KS6KFUNlB2o",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Jeep",
    Título: "Jeep Experience",
    Subtítulo: "Belo Horizonte",
    YouTube: "https://youtu.be/Rm6TlsuJuQ4",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1SrsvoVfKmC-b4Eg0BwtEEQZj0qI-c9aL",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1SriU80gEp-njLcqazHMiajNqgaNxiVzg",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Safra",
    Título: "SafraPay Eu Escolhi",
    Subtítulo: "Melhores Condições",
    YouTube: "https://youtu.be/6tq-gbcv0Qw",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1LczmUlt5ZYouUN5vTURFakP-V0ExZVoF",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1LZY5NffRIM0x0m0SplWU1i_UDshRmzE6",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Safra",
    Título: "SafraPay Eu Escolhi",
    Subtítulo: "Atendimento Personalizado",
    YouTube: "https://youtu.be/P-hUb4TqHS0",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1LTyxa6JbjMQYlhewxMHu7klJNqqthZaD",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1LJt4V7hVe-6xZ0dG2yMIBIoAbFn1LmOQ",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Safra",
    Título: "SafraPay Eu Escolhi",
    Subtítulo: "Pagar Menos",
    YouTube: "https://youtu.be/EZS-Fq7zpZk",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1LHodyGben5e3AGY2Rk35ovq4Ug3qI-MZ",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1LAtAgQFURu_j8Be48KhixsO-h7GF83jR",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Travel Rock",
    Título: "Travel Rock",
    Subtítulo: "",
    YouTube: "https://youtu.be/WsYkhyVR_KQ",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1HzI-tvKVmQtAAzsH1Fv3jSgm1phGFvwv",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1Hwnupnd_VVd_Au0Xn5rqcDUKE220krYy",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Safra",
    Título: "Longevidade",
    Subtítulo: "Video 1",
    YouTube: "https://youtu.be/_ImamSSlVZE",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1U2aTrS9f66I0qOwl3xMMiKQLlXm3tKok",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1TyVAaV8RADunaAfAOs9Wt8JpsXV_P0nR",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Safra",
    Título: "Longevidade",
    Subtítulo: "Video 2",
    YouTube: "https://youtu.be/2Vqk8jwDvA4",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1TwDscYOqsEuSWhRgf-8ZWTaN8sa2e_dV",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1TqTk_i544ejXDAk_RgGzihO4lh-jgBKk",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Osasco",
    Título: "Corona Abraço",
    Subtítulo: "",
    YouTube: "https://youtu.be/-OOlYhhJMqM",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1N3NnXDTnJ95TnumYvJg5mcXf46mglzUY",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1N382TQ4hr3BHgz9yaufEURcrzS6F_fJ7",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Localiza",
    Título: "Localiza e você na mesma direção",
    Subtítulo: "Carreto",
    YouTube: "https://youtu.be/OdLYJKvYSMc",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=18oEM10Ux6g9byl4-6IDTQIcutAtVKuRz",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=18pEa5E9IGWVhwf1Ybul_mz5fHqEcarPc",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Localiza",
    Título: "Localiza e você na mesma direção",
    Subtítulo: "Uber",
    YouTube: "https://youtu.be/RDc2N2TWzqo",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=18pPYd4Yyb-Y-hOqbeFf-FmwUT6A9ZmTN",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=18qUISd38Sbu-WH7MVmEhqIL2n6QQ-kYB",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Localiza",
    Título: "Localiza e você na mesma direção",
    Subtítulo: "Lolla",
    YouTube: "https://youtu.be/Uhot7M6iFZE",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=18rLFrT3B0ugipJbSyhv5SfLWQyqHqRSj",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=18r9LC-gHvQUUdKQwd0qAvaOWJYHQrBgx",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Localiza",
    Título: "Localiza e você na mesma direção",
    Subtítulo: "Bira",
    YouTube: "https://youtu.be/aHRBv9DyA9Q",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=18xskW2vF8d-lbkpzcPkYy4VTu7DtDZ0o",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=18vBNi2ZnpOctlsQ4R5uVgA4jG1gStltf",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Localiza",
    Título: "Localiza e você na mesma direção",
    Subtítulo: "Peruas",
    YouTube: "https://youtu.be/azRulD189NA",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=18zRA2xY-zv4p7tnTVfCaT5KQyMR_VVJA",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=18yYyk3P4im4qZ6LOWpc1tyDU2MSNQMTR",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Localiza",
    Título: "Localiza e você na mesma direção",
    Subtítulo: "Vampiro",
    YouTube: "https://youtu.be/BM8H7VPJ-Yk",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=19-2JVkzClnWm2r25HztwO11i1k3zRqTm",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=19-LzxOhgPuXNudqg5VTqc8sK1t1fwlqV",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Prefeitura de Osasco",
    Título: "Osasco 58 anos",
    Subtítulo: "",
    YouTube: "https://youtu.be/IVTuwKnBqe8",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1IQQ8rD56CNAztlP0d_TrBBvXtWQKIR39",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1IPKrO4Q7170jnrgQyHOcJqqmXp7ZNgzt",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Sanasa ",
    Título: "Dia Mundial da Água",
    Subtítulo: "",
    YouTube: "https://youtu.be/PPDwmfTR1oM",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1Oi-N9Bqt_jSeCa2k5UKPavKt02HE9y6u",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1OfYSx2d6_z7CQSqFF5e44X5u9w8O811Q",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Safra",
    Título: "Ajuda o Dono",
    Subtítulo: "Imposto de Renda do Pequeno",
    YouTube: "https://youtu.be/R4_XcqXjXcI",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1XuwRnJOChHiuN9pJCsvn4PxfaVvzAXrV",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1Xsfsh5M5oSH_ccrJwzQ2LXdWLUusB0md",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Safra",
    Título: "Ajuda o Dono",
    Subtítulo: "Declaração anual do MEI",
    YouTube: "https://youtu.be/f93HCQ8D6TA",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1YNtFIEpem7l4kFphU5DJmyK0djUUPh0t",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1YCv4qFtOw0_kj71B4kBi3dj_bwTRuJ-2",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Safra",
    Título: "Ajuda o Dono",
    Subtítulo: "O empreendedor é obrigado a emitir a nota fiscal eletrônica?",
    YouTube: "https://youtu.be/HkyPf3soK0A",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1Y4dIAKky60JqH5xVvDGfaYCZo2hE9r3v",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1Y3CsUWz-Hz_SSkNPzI9Ve2kDwjsA-0Gr",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Safra",
    Título: "Ajuda o Dono",
    Subtítulo: "Direitos e deveres do MEI",
    YouTube: "https://youtu.be/kw9xpbLgv-8",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1Y2z6mP0VhvX8AYeQsnHpnr6Zk_QldGSR",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1XyGCSu6Y2919YH_0i1J9eUQ3Xayf35F4",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Mini",
    Título: "Mini Connected",
    Subtítulo: "",
    YouTube: "https://youtu.be/Cm6l8FyxM4Y",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=14zY_uep4BlyNwplVWPwF127W8cZdG2TV",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=156VT8RsIdeexcKOtYKSPw2cDKpovHMfu",
    Texto:
      "https://docs.google.com/document/d/10X6xb3gugEaBN94aqAIkK6_DhJwn0uZu3YSohO40V38/edit?usp=drive_link",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Mini",
    Título: "Mini Connected",
    Subtítulo: "Redes Sociais",
    YouTube: "https://youtu.be/wwfQtI3PwTg",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=158aLvgJ67HEXuSNN3jS5N4TbDyURfXtl",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=159tvEBYOTgfz0HD7cJhkPQTnlz94949r",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Osasco",
    Título: "Osasco Depoimentos Coronavírus",
    Subtítulo: "Video 1",
    YouTube: "https://youtu.be/XZwo3OHTUL4",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1XcgDF2yQdY1ajkYxaE3YIymwj8v3jAs2",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1Xs20lGtb1lrR7zRq9c1eaBKB9Xugcxgr",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Osasco",
    Título: "Osasco Depoimentos Coronavírus",
    Subtítulo: "Video 2",
    YouTube: "https://youtu.be/nDDM3t-DQkg",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1XoiWoyHCpaWVjozLCuSAWE95zKFxdOUy",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1XoXUfQ7w7KYdd_gbwiGlaqFrUxJawcw3",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Osasco",
    Título: "Osasco Depoimentos Coronavírus",
    Subtítulo: "Video 3",
    YouTube: "https://youtu.be/6k27tS3T-Hw",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1Xdiwfm2_GvJ7zeIylDxl3bLuK8Wvl1TN",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1XdO7b1la_bTmTbxwTc85Kgs5MBOq9Riz",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Batata Inglesa",
    Título: "Batata Inglesa",
    Subtítulo: "",
    YouTube: "https://youtu.be/GSqPxtuw3Zo",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1CPUv_hVXIqXQQZb5fw60wZ__pOFthPrw",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1CRB2-K46SxwRi4XsfW34WQLWsuShldzn",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Di Pollini",
    Título: "Di Pollini Artesão",
    Subtítulo: "",
    YouTube: "https://youtu.be/4-YUNaCCXBM",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1NnpnsNYZJaIf0d5JGwTVmdgZcCxPott4",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1NlmTTyZ79SF7x1NaYp9SHZ3-y654f4sN",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Lifan",
    Título: "Vendas Lifan",
    Subtítulo: "",
    YouTube: "https://youtu.be/Yoi9W6sAfI0",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1IKPn_yFJxHu4VaAlEJoXPhlype1EMa2b",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1IF-g_cZMaPMkuqp5-rdIoVJVvmxEz1SN",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Credpago",
    Título: "Credpago",
    Subtítulo: "",
    YouTube: "https://youtu.be/XKSFJNNaAzY",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1IEGYw9xEPn2NdqnFcY9PeHFsXC4aErI1",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1ID2ftjmBLhwiOzdprGFjDwSQRDyzg3SO",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Pfizer",
    Título: "Geração Z",
    Subtítulo: "",
    YouTube: "https://youtu.be/wFkh479tVEo",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1GYafmAhrs4z5m7JDa7SOZiRKZy8jttL1",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1Gj6Gmu-jZlfrdDljyIWdXrEb4oNEhrjS",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Cielo",
    Título: "Empresas Cielo",
    Subtítulo: "",
    YouTube: "https://youtu.be/Qs9YIJ5XzQ0",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1IbZ-N0JMyAMGRYkwv678BYhyW5Y8FPB6",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1Ib5yhJ2bBy_xN2D2DxODkrj5JLdKnErt",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Gou Odonto",
    Título: "Gou odonto | Clínicas de Odontologia",
    Subtítulo: "",
    YouTube: "https://youtu.be/kE1ZdLrqSII",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1NdIzsEp5Aqu7YvkDx00CP9Nh0ZTXp-Fk",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1NXEUlls-LyxZVls-z_2vfs72rJotRvPj",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Caixa",
    Título: "Caixa Mastercard Afluent",
    Subtítulo: "",
    YouTube: "https://youtu.be/AGybaRT1PQo",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1ITU5iBEOpEUx8KqYx5H7GwVDT8D3PLB3",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1Iz-l2ilSav1u62pNR4y8mP7FNYz9c9Jb",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Caixa",
    Título: "Caixa Mastercard Promoção de Casa Cheia",
    Subtítulo: "",
    YouTube: "https://youtu.be/xW86zIbDqig",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1Ivr0jCkzCimpJGcRZFQm25f7gzC7bGJ2",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1It3WMCG6I4oiPwdgeyjfMCP2XUm0-Xeb",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Happiness",
    Título: "Curso de formação Happiness",
    Subtítulo: "",
    YouTube: "https://youtu.be/uQl21HXigr8",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1PeJMJ0Krs3Bsq6Igb_uq8YoU0gwBox8g",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1PcVfwRDUba3vIuefgxEzDph1JvBIA9jv",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Happiness",
    Título: "Apresentação Método Happiness",
    Subtítulo: "",
    YouTube: "https://youtu.be/u23WHzTARIM",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1PaeuZKttMXMnjZeOUe6EkiZKkjO-4639",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1REwdRt_5sriQ0s5Nbu_iNBes-Rlt0ft9",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Abbvie",
    Título: "Humanizar",
    Subtítulo: "",
    YouTube: "https://youtu.be/06W0PrmIEaI",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1XHkvxaZtyqajiAF34heJOlhkeOqGCIw6",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1XQCsWwAq7Pc_fgHzQQo7CyY6S27Z_eiP",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Abbvie",
    Título: "Retocolite Ulcerativa",
    Subtítulo: "",
    YouTube: "https://youtu.be/r9O-rMJN658",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1XYWz9S4FTJ2UgcWzcpYEvdtQcQ_6dJQg",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1XUVVG0jQ6HFcVeDgmzv88NFek8HGrmZy",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Guarani",
    Título: "Independência",
    Subtítulo: "",
    YouTube: "https://youtu.be/l-OpiotvaaU",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1DhY_x76HoHDeNxiH6gnQDVXas713zFkb",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1DpCAioDQKELkL7C2XLjjcgDEZ48aiQbj",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Tecnhos",
    Título: "Technos Skydiver",
    Subtítulo: "",
    YouTube: "https://youtu.be/INxoXJeuFeM",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1Dsh5cEBo_s7hASVnjVMB2dl19gC8DgEM",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1DulN-NB58zpONZ-8UifCMBvId9NzHQXA",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Du Pond",
    Título: "Kevlar Du Pond",
    Subtítulo: "",
    YouTube: "https://youtu.be/InsZ9ndKiWM",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1KXstFu_XVeXltiuI2ysDw748kbRuRXk5",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1KXUwClFGEc99f18b2CRxVuEODJnWNKEp",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "BMW",
    Título: "BMW Motorrad R1200",
    Subtítulo: "",
    YouTube: "https://youtu.be/H9bQfGkji0c",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1OFGYWFeMiMXcMtJBAzOAsLFmRZ5yBm3Q",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1O7o_t4dwv9VNbUMNV1Dn9BgtBGrK8Xtm",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Puma ",
    Título: "Secret Running Society",
    Subtítulo: "",
    YouTube: "https://youtu.be/MA9kES3cpLc",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1Qjw2Eke800oBN1URyPAyea5rG5S_qXiX",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1QbPQmGWEVxpQaMwJbAQFMa8gbpnvJW1x",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Puma ",
    Título: "Forever Fast",
    Subtítulo: "",
    YouTube: "https://youtu.be/D77_5_Jb4RA",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1QaaHCDl9oHsVReGWBUjOleRQa2OlNEPb",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1QVc3PAZOt9MWGGbPCD3TSEavfCw6227P",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Puma ",
    Título: "Forever Faster Making of",
    Subtítulo: "",
    YouTube: "https://youtu.be/47bbJig1Af4",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1Rrxn__LtM0LFrzebGz7rtqHakdHVKj2N",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1RruplE2udPvrtFEA8G2JtPl8qf_EJ7yA",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Adidas",
    Título: "Polo Collection",
    Subtítulo: "",
    YouTube: "https://youtu.be/d0fg1BtsY2s",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1RrfYv4zAcRQjwKyTo2hQn5hRBuhLseDJ",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1RoL4LO9Oqf8GcCBjXOg-aKi9kVS3AWPF",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Adidas",
    Título: "Adidas Originals | Lollapalloza",
    Subtítulo: "",
    YouTube: "https://youtu.be/8vz9NFOH9ZA",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1Rnd4-LY11h7Rjy_fwS4eBhPLg22bUI8a",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1Rm4ZnSYEW15ubLoGyjPF5fnvf7Pyc_Xp",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Adidas",
    Título: "Adidas Originals | Party",
    Subtítulo: "",
    YouTube: "https://youtu.be/tWqzHeN08bg",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1Rls30qqItEC90IqK5qAqMxS5pLtKEF3h",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1RkR6eikCbGca4dyBoeZScqfEH2r0TWJk",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Abbvie",
    Título: "Nova Empresa",
    Subtítulo: "",
    YouTube: "https://youtu.be/utkRaGUohlY",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1KKded4Z7_WsFTEE6H_5_zMpzZr6busTr",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1KHyxcLCr1BK8Nxb4Bf1wzOTrYAnrqKRQ",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "New IT",
    Título: "New//It Manifesto",
    Subtítulo: "",
    YouTube: "https://youtu.be/UUqQ0QuAdv4",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1RSwEoyS31yC8txKEZoZXeqe9WSUkd6HU",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1RPzoZsxUFeJ-IsHs1vrgZ0MNaKAO8Hy2",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "PayGo",
    Título: "PayGo Manifesto",
    Subtítulo: "",
    YouTube: "https://youtu.be/3_vPuMdfAj8",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1RFHNK1D6ovJE2QCvyDKC67QnVQlzrFA5",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1T3SrwVc2NoMdI3kxpIyJ2glOQCDiMmuI",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Viação Amarelinho",
    Título: "Prevenção Covid 19",
    Subtítulo: "",
    YouTube: "https://youtu.be/z6NqK2kb-_0",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1TgR8BjE7aQaQ9fLThfSWlF8YmOgh-6U3",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1TfS9fJnMZL6UJgLmEy7Zs7_5hGTX2VMF",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Labbyes",
    Título: "Labbyes",
    Subtítulo: "",
    YouTube: "https://youtu.be/pNTR9zLy66c",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1TbswxhamChEWxRrJpRViu8p9AOfMHJln",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1T_VtB3wxwCYpvQfDv7jdj5ve6tHYJV-h",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Zemplar ",
    Título: "Zemplar Hemodiálise",
    Subtítulo: "",
    YouTube: "https://youtu.be/k-WXjn8Y3Xo",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1TXehBNiNUa9ISrYjrkqfuODHpo2AFAJ4",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1TSqzVFlamWAyUnYle0t1Q-3Sxw12Epxl",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Colégio Santana",
    Título: "Viemos para Servir | Ação Social",
    Subtítulo: "",
    YouTube: "https://youtu.be/1WtZCpnBSgU",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1TRcLWkcjwlSHkop0BAXUK1-NaOEKWZfm",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1TPmZZcaTpnT0ZF41XA86Tz1vpDN2in4A",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Dynamis",
    Título: "Dynamis | Gasifire",
    Subtítulo: "",
    YouTube: "https://youtu.be/F29zu-LKYl0",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1TNMvzMy5g6vMVGqwvlU70DyFNcTaQSnd",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1TFGokRqVT4zDNNX7IkbeOQMyMVPeIfWr",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Forma",
    Título: "Camp Experience",
    Subtítulo: "",
    YouTube: "https://youtu.be/uphz4Ixfnc0",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1V9aDg-S0yit0m-mb08n7LkWbv-uinIiU",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1V-zPZtYsnW3dKh8qOERV7BNfA-rq5j4C",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Rio Branco",
    Título: "Construtora Rio Branco",
    Subtítulo: "",
    YouTube: "https://youtu.be/2tUGBwqqVjQ",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1L5URwJmnV-S7AJlFurwoL7xyZ31vP8CS",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1KzQJHOkbyWCGlSTV22MyggECl40hY0HI",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Stopmatic",
    Título: "Stopmatic",
    Subtítulo: "",
    YouTube: "https://youtu.be/2Ux2tMAqINk",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1IYO6jd8dy5AYvP0PdePc3pGmFh45IAFL",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1IWciI-ODckAjKWRsTEMsR8zcIiu5djcg",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Midea",
    Título: "Midea Convenção",
    Subtítulo: "",
    YouTube: "https://youtu.be/EwM8hjzT018",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1JrQVJVcJTS_b_3j96DPFAvQoNqNHkM1Z",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1JqAHBMJdLFTZ9IlBgTqZNBryVTtMR0h_",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Lactulona",
    Título: "Lactulona",
    Subtítulo: "",
    YouTube: "https://youtu.be/5szuxXRnj80",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1JoeGD7msWdy9z2D6IkNhNqe9mBSpVhA5",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1Jo6gFW6koMxKTyeIImAWtFBjhAUDgpyY",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Lactulona",
    Título: "Lactulona Casa",
    Subtítulo: "",
    YouTube: "https://youtu.be/_wjRNbLV23o",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1Ji6szn4u_c3Tl-xmZyi0Lp7mEy388OiY",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1Jg0cuiJBtq8PZAP7Z2fgzL8NH558ZvEs",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Oxiteno",
    Título: "Oxiteno",
    Subtítulo: "",
    YouTube: "https://youtu.be/DX1KA1PNCCA",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1Jy3EJ34kLBSdT1jyNmknpNfHDMOSsa1P",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1JwLZVOS9bTVNinY3oN_vtLh4UxfIaZ-Y",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Zíriga",
    Título: "Zíriga",
    Subtítulo: "",
    YouTube: "https://youtu.be/5W3ehxT4kA0",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1Rf2Kiu8gshCnOzrSYRm_tSI818-ql4wg",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1R_cEPV0Kqa94vGHDVneGtjLqe4gLlLxC",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "johnson & johnson",
    Título: "Sundown",
    Subtítulo: "",
    YouTube: "https://youtu.be/nUBafnmNhP4",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1RVlfa2OsAsoBcXvRSkEZi0wQxDAvs4vo",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1RTdp-wohRoFQ4G6LW96GAy0XkMJUbx8H",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Dynamis",
    Título: "D-Flame",
    Subtítulo: "",
    YouTube: "https://youtu.be/vZUZoeD1zq4",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1VmLu4ZOtT_xMeTpWEn6bR85mmxTTbQGk",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1VU6WBPkt2vezHrQ4U7QYsIbVd5egx1Cf",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Yamaha",
    Título: "Mega Feirão Yamaha",
    Subtítulo: "",
    YouTube: "https://youtu.be/BOFxu8m9d8U",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1NWhW2eq9fCFfUlI4o3SccLY6rPFaqboZ",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1NUx_SWx-fBJVY_8PZDazWB10FNOA12wA",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Forma",
    Título: "Viajem da sua vida",
    Subtítulo: "",
    YouTube: "https://youtu.be/aLVN2soaevs",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1NMd6VMAiCHejFMB647vyCGdpOb1UTkST",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1NLsqE27pQiBB9fq2FYwn1lhWcC8pBpOJ",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Fernandez Mera",
    Título: "Fernandez Mera | Dia do Corretor",
    Subtítulo: "",
    YouTube: "https://youtu.be/p3VLxw8ispc",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1NF1FKYZsXUkQ1rmmKqiIeFjZ9c-P_9j6",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1NCU8IwEPVM_VPERpDWKG_4W1_-ygVdkE",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Agaxtur",
    Título: "Viajar é Preciso",
    Subtítulo: "",
    YouTube: "https://youtu.be/t_Z5F15b5cI",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1NkskHfSnXDVyszYFEZNy-A-V_5YRJi3w",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1MqL7xLmZN3UC0DnB-h5iAeUAr4xt_8l1",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Café Brasileiro",
    Título: "Café Brasileiro",
    Subtítulo: "",
    YouTube: "https://youtu.be/DjKN85z0wjU",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1ZAGbaYzBvrzRw4MiniChjxQtAotlnb1M",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1ZC0rdWboUvDEncG4KQ21c1cO9THilD9n",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Goodyear",
    Título: "Boas Festas",
    Subtítulo: "",
    YouTube: "https://youtu.be/jjqO8xembx4",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1Murb7S6qwV9anrrtR_rQKyctduDOnhLk",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1MsDQdA6tHNQPVWpodWC1KtM3NYmVWIOi",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Yamaha",
    Título: "Sonhos",
    Subtítulo: "",
    YouTube: "https://youtu.be/t9EBdlC5cRU",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1Q3rHovWfUw3g4DoGRtqIyU_YhTzycOeD",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1Q3lgiKmrGW2xMfujpVU3jYoTQoHAzsSN",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Ministério da Educaçào",
    Título: "OBMEP | Olimpíadas de Matemática",
    Subtítulo: "",
    YouTube: "https://youtu.be/Kjwyn0puhMs",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1PLt0lX-hWmvt4nV0oFPZl7ZjoZrOhfgS",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1PKmOav3aB4tGqoBZQzBKvsOAUPScY_a8",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Colégio Marista",
    Título: "Colégio Marista",
    Subtítulo: "",
    YouTube: "https://youtu.be/2eQh4fPHti8",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1PFUVIXxgCZsKXsKpT35f0fH1C-wN7gL6",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1PAtyb2Sz-ESvi037jmHnBABw0Kna_HrO",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Pastelândia",
    Título: "Pastelândia",
    Subtítulo: "",
    YouTube: "https://youtu.be/-p5mkinE48E",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1P7eOtdhjsBPt_kC0_HmByGkzYnza9xxf",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1P4qijgD-qCxv8wFSiqT2iAuLf_wSJeum",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Dailus",
    Título: "Dailus Colors",
    Subtítulo: '"',
    YouTube: '"',
    "Thumb miniatura": "https://youtu.be/bgRoj0I_F_o",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1Ob-3aY1ZD7Q0hxOlGA65iGyvXEXGV7rV",
    Texto:
      "https://drive.google.com/uc?export=view&id=1OQfFqI5eId70VE4K4g2SmtLVHo9hdV2m",
    Diretor: "",
    Categorias: "Kahue Rozzi",
  },
  {
    FilmId: uuid(),
    Cliente: "CFM",
    Título: "Saúde no Brasil",
    Subtítulo: "",
    YouTube: "https://youtu.be/Tau6KXDVAIM",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1QUQXvgRbmTFoj66Qde0p4YKzswiEeZQD",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1QPm-BmUoyVaZX2iwSz-qoBPH1ZFGlcgB",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "Semp Toshiba",
    Título: "4k SEMP Lançamento",
    Subtítulo: "",
    YouTube: "https://youtu.be/k4Ua7PJo8LU",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1Q2I3WC42v9fzPVvOaMmhJkek3pzL-qyo",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1PtK4IEY4nf8SfCpRVfbEVeQhI3PHK3f-",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "FMU ",
    Título: "Vestibular FMU",
    Subtítulo: "",
    YouTube: "https://youtu.be/AJ3gIFJMqJ8",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1O7Yn70d18UfPdV0PCR66l7ijVNe3r36V",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1Ny9Q1xaGoKlPR4Bkz_eFX5s07DApKIo-",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Publicidade",
  },
  {
    FilmId: uuid(),
    Cliente: "CBC",
    Título: "Institucional 96 Anos",
    Subtítulo: "",
    YouTube: "https://youtu.be/peB2AldqgpQ",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=13WDZ4Ag-bQS3JMsmFvG1UIPeCC4AllO8",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=13Y3Gmm1rm4tXw8pgodsYN8dQTH16OFk2",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Cliente: "Protege",
    Título: "Institucional Protege 50 Anos",
    Subtítulo: "",
    YouTube: "https://youtu.be/qnQeiOs3JHE",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1AxQPnmkx8j6NCG5mrhPkDyUQQwZJai_e",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1Af3QOfV0jGG6-vvZJ35EjizFLFEn2kk9",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Cliente: "Cabos Cordeiro",
    Título: "Institucional Cabos Cordeiro",
    Subtítulo: "",
    YouTube: "https://youtu.be/VmPMAS_4e1Q",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1GNVxGIqMU5Zt7b7uzNrPOIycJHz_XnIn",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1GMnnyTETxH74n-w21xQcIzhDAuXu4QJ4",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Cliente: "Sanasa",
    Título: "Institucional Sanasa",
    Subtítulo: "",
    YouTube: "https://youtu.be/UF2Rs63dB78",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1KxVwJMY3WrY6EolpWIikJFm60vehFKWH",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1KwPhwMYrUM7FjyVf_zwj-Fj9qz2NZuja",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Cliente: "CBF",
    Título: "CBF Academy",
    Subtítulo: "",
    YouTube: "https://youtu.be/OTXms7cTxWw",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=11ssLV_gOyod9H5acyEioCcGoqAoC_9jM",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=11vtc78bhLZRsWTVRdS0T1xwCNgYzjuNb",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Cliente: "Prefeitura de Cotia",
    Título: "Cotia como você nunca viu!",
    Subtítulo: "Saúde",
    YouTube: "https://youtu.be/T9L3GzMAg7A",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=18P_Ic99lMSIh3hRUSLD_u-5w9nF7nRXn",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=18PK0i7ems8hobRc938vog9_Lfe0mRR3p",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Cliente: "Prefeitura de Cotia",
    Título: "Cotia como você nunca viu!",
    Subtítulo: "Cidadania",
    YouTube: "https://youtu.be/0uw2Gk-WRk4",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=18fF45jdEL4x_qF3SGWRy_Ec1e97qMEex",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=18YaklCjnzzDB8Bs6TeVas25RELLge0UD",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Cliente: "Prefeitura de Cotia",
    Título: "Cotia como você nunca viu!",
    Subtítulo: "Mobilidade Urbana",
    YouTube: "https://youtu.be/OUJwEFvpeKY",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=18Y3FKF35Z9V7biV8DVcSsSUWqbLVzrAR",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=18Wsqg7Ws9rZIyyXmAU58YfC7MUI1q3Xd",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Cliente: "Prefeitura de Cotia",
    Título: "Cotia como você nunca viu!",
    Subtítulo: "Educaçao",
    YouTube: "https://youtu.be/MOV2jA3CsnE",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=18VGQQyzDOypQdUYbwpZIXgdTtTkgQagb",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=18Sfy7xef4vb4CPVcHc5iVM2hZM3aMtSW",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Cliente: "Prefeitura de Cotia",
    Título: "Cotia como você nunca viu!",
    Subtítulo: "Investimento",
    YouTube: "https://youtu.be/ASFmEnW8dnE",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=18mVGP0-cznfByxIedqba7ptpVhKC7XI8",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=18fFOAXxdM8rnCDaZoMDHI9U0JXQ5GreP",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Cliente: "Prefeitura de Cotia",
    Título: "Cotia como você nunca viu!",
    Subtítulo: "Mãe Cotiana",
    YouTube: "https://youtu.be/trpBwU78zP8",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=18mcTUQ9iEuJMMuyUehgWXY7x3J68F9av",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=18mVm_cRe9Tj9CZVWywtmlAHG8-dG7uLh",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Cliente: "IMC",
    Título: "Instituto Melo Cordeiro",
    Subtítulo: "",
    YouTube: "https://youtu.be/YRdSb1Z2b5c",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1ThUq1almZz8m6zArC8F3LV3moRB1eJNM",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1ThCktmTHPZUjQ00Kl5qANLcQx2gUw4Qw",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Cliente: "Eucatex",
    Título: "MDP Perfect",
    Subtítulo: "",
    YouTube: "https://youtu.be/rfa3o3qmbD4",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=13wM9wntW3ujTn9_ZQVNc6o8gkEyyHUi4",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=140HTOUXvip_AGtyha06B3YLL0D7dyFgi",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Cliente: "Prefeitura de Cotia",
    Título: "Cotia 166 Anos",
    Subtítulo: "Video 1",
    YouTube: "https://youtu.be/Y7wyVVbjdqE",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=13n_dZ7yw7Ar1ydIz54_G0b8Je-q-B1YS",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=13sw7Sbj5ozh3VIYoIExxYVl0fTpiejjV",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Cliente: "Prefeitura de Cotia",
    Título: "Cotia 166 Anos",
    Subtítulo: "Video 2",
    YouTube: "https://youtu.be/cnREagPUkRE",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=13saO-_xvgUyk4e3ZJHVKcq6xqIDSEwAs",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=13p2zB9gKJ_WqsPRSh-1Uw28-aJibQ38J",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Cliente: "FACSP",
    Título: "Institucional FACSP",
    Subtítulo: "",
    YouTube: "https://youtu.be/DNsD-w4h1Cc",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1GAqF6yNmKCJ8A89-t5F2CHY3lnqWSkwB",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1GBxTEoG93hSBNLNmbvpXuOJHhPuuLbKe",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Cliente: "Cejam",
    Título: "Institucional Cejam",
    Subtítulo: "",
    YouTube: "https://youtu.be/gXZS1RfjqvU",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1HiFwPnKuSshDwbjfLCZGDJmCEvDH0WAS",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1HaXq0O_vPnVQ87psVN1eW65IL2T-N0hZ",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Cliente: "Solução Mais",
    Título: "Institucional Solução Mais",
    Subtítulo: "",
    YouTube: "https://youtu.be/wirYreRTQzI",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1K5i21TvN4aLKeMVNrkkfpJtwGE-I0yXV",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1K4Bz6uwyL6RKGJU84w9jfvB18LS2WnSg",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Cliente: "Inspirali",
    Título: "O que te inspira na medicina?",
    Subtítulo: "Episódio 1",
    YouTube: "https://youtu.be/uUmSN6TRIJY",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=19D6483Qqs2CChNqoHzkoSgKWLcQ6uf9Y",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1A0e7EY0juB57BLrbYqK-RxLGeYoE1w6t",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Cliente: "Inspirali",
    Título: "O que te inspira na medicina?",
    Subtítulo: "Episódio 2",
    YouTube: "https://youtu.be/jinIQoKGEl4",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1A0XqrH1laTienXxKzXRDh_ddg-l9tXre",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1A-tss43EfnKNaI3svqQfMis_lkeNgBQn",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Cliente: "Inspirali",
    Título: "O que te inspira na medicina?",
    Subtítulo: "Episódio 3",
    YouTube: "https://youtu.be/5Ve8FjPuowE",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=19klB9u2G0qAuMLCEp27XofgmMPEreYVq",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=19jJ6m0QpZcczUuPtGuJ5RmgxColbEfvX",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Cliente: "Inspirali",
    Título: "O que te inspira na medicina?",
    Subtítulo: "Episódio 4",
    YouTube: "https://youtu.be/i6ofRMad71A",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=19aLgwNiOovNQXKUS1W37vEo1UkFIPLnE",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=19_UABzmWjhG4gPpyv6qaFNYNPeneQJbx",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Cliente: "Inspirali",
    Título: "O que te inspira na medicina?",
    Subtítulo: "Episódio 5",
    YouTube: "https://youtu.be/AZIZrJV7JOQ",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=19O6tVjK-jNz6CESbV7dFvS6vmAgjmAIn",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=19EKg1GBagiDFYyCGkouFxGSh5u5SzlOq",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Cliente: "Solução Mais ",
    Título: "Solução Mais Manifesto",
    Subtítulo: "",
    YouTube: "https://youtu.be/MYVvDjXCwvs",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1VACPTIWsy9z5yb3cXRW5mT39cmFxd-OH",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1TCYgSmuoidMIhtn9NqSvKamyMrMOF0kG",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Cliente: "Dynamis",
    Título: "Institucional Dynamis",
    Subtítulo: "",
    YouTube: "https://youtu.be/AXgYUXh5gGw",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1VmxN1vId8FAdQ1ftcccrvkU5j9JPfepC",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1VmkwldgV247-3DtWRjUTD83t2GnLtwqt",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Cliente: "Phoenix Tower International",
    Título: "PTI Stronger Institutional",
    Subtítulo: "",
    YouTube: "https://youtu.be/GghXE3kuwAE",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1GoguidFZawoL--ChleXrUZYb0xSrQkEZ",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1GrID7bEgxdN24Kw6y9BgXZNtl9mqfPTF",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Cliente: "Z11 Group",
    Título: "z11 Group",
    Subtítulo: "",
    YouTube: "https://youtu.be/RIaUK5DmBww",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1ICxFR-mBGPNqz0bh0jPXo8XX-CPXAlJ3",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1I419tU2aO9raCuslj2A8LpBe1dGwqdgU",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Cliente: "Cosmotec",
    Título: "Institucional Cosmotec",
    Subtítulo: "",
    YouTube: "https://youtu.be/fzDu3oVEQ0E",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1BC6NAJL52oAMj4K-mNqbOK4KVlDSFARP",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1BDjDsR0N8M8dyU0yFTPkHVuPsorxTb08",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Cliente: "Petronas",
    Título: "Institucional Petronas",
    Subtítulo: "",
    YouTube: "https://youtu.be/FEuQ_3SzY08",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1BHkJHXp-FyjUosKkpz_Hds9s7TEHx9YO",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1BPe6rbLQe3YHwprcfHqg75rdrBI0fPQ4",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Cliente: "Grupo Cometa",
    Título: "Institucional Grupo Cometa",
    Subtítulo: "",
    YouTube: "https://youtu.be/7yzD3uMZGdk",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1AdEvJdB7aozU0bboT7IloJX7cfozuqHH",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1Ae-dQbjTvaCMvCvMIYRD1X8A-3kaABtl",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Cliente: "Localiza",
    Título: "Fidelidade",
    Subtítulo: "",
    YouTube: "https://youtu.be/gbRKmnF_oM4",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=199sdGQeiH9PjUn8gwNj0K91pM6mcGhZ3",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=195Efa9OEIB2qHvFnpscmJ0w9fAqnaL7w",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Institucional",
  },
  {
    FilmId: uuid(),
    Cliente: "Ministério da Saúde",
    Título: "Movimento Vacina Brasil",
    Subtítulo: "Sarampo",
    YouTube: "https://youtu.be/mwxQtfxZT2I",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=135lNeJewaHMHL3uUy8-GQMIQtq_i9EOA",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=135gmu5QNZ454mEth7lLADX8DwSK8VSte",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Ministério da Saúde",
    Título: "Movimento Vacina Brasil",
    Subtítulo: "HPV",
    YouTube: "https://youtube.com/shorts/n_CV_gu4q4I",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=136OoB_4rO5sI4EPEMPvCsz4tkdC-zz7o",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=13AIUOPW25B-cesOm2bnIYIbI6r31wNsw",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Ministério da Saúde",
    Título: "Movimento Vacina Brasil",
    Subtítulo: "Poliomielite",
    YouTube: "https://youtube.com/shorts/_BQOQr46qaI",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=13DKt4bPQHlIkUwc-8miWW1sggbWc6coP",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=13DJeU40vh2B45G31qH6b6rAN8a284oG3",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Ministério da Saúde",
    Título: "Movimento Vacina Brasil",
    Subtítulo: "Caxumba",
    YouTube: "https://youtube.com/shorts/f8WfbCGA_8k",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=13EFA2vEHElWO2ohS51ktE9Qggp62qaPT",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=13EslE_1D-zG2h7OeuVOk7qj3kQ2yi9WU",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente:
      "Ministério do Desenvolvimento e Assistência Social, Família e Combate à fome",
    Título: "Cadastro Único",
    Subtítulo: "Você conhece o Cadastro Único?",
    YouTube: "https://youtu.be/WNmHP1f3LFY",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1Ws7A1QXsaNKAjuRpVi1yJojMixQ4RlmU",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1X8JQzyq1SdeYg9CWaqgFRoM7Wecgy8u4",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente:
      "Ministério do Desenvolvimento e Assistência Social, Família e Combate à fome",
    Título: "Cadastro Único",
    Subtítulo: "Você conhece o Cadastro Único? 9x16",
    YouTube: "https://youtube.com/shorts/nrA_XJX4ovo",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1Ws7A1QXsaNKAjuRpVi1yJojMixQ4RlmU",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1X8JQzyq1SdeYg9CWaqgFRoM7Wecgy8u4",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente:
      "Ministério do Desenvolvimento e Assistência Social, Família e Combate à fome",
    Título: "Cadastro Único",
    Subtítulo: "Como é feito o cadastramento?",
    YouTube: "https://youtu.be/Le6sdflOQlo",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1X7Q6kyzp6tLP4lQQtAVWJtq1PFF8LJxJ",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1X0Ya7kPRxAhpsRCO_eXCqVHbzy-XD6cX",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente:
      "Ministério do Desenvolvimento e Assistência Social, Família e Combate à fome",
    Título: "Cadastro Único",
    Subtítulo: "Como é feito o cadastramento? 9x16",
    YouTube: "https://youtube.com/shorts/_MipRzDabQU",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1X7Q6kyzp6tLP4lQQtAVWJtq1PFF8LJxJ",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1X0Ya7kPRxAhpsRCO_eXCqVHbzy-XD6cX",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente:
      "Ministério do Desenvolvimento e Assistência Social, Família e Combate à fome",
    Título: "Cadastro Único",
    Subtítulo:
      "Por que o governo está avaliando os cadastros de quem mora sozinho?",
    YouTube: "https://youtu.be/pQ5fYneVoiQ",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1WztYQJYB0057kLX5oE2AkyxJuHK5UX0I",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1Wz2RspIzx2SSJ9PdP1odbyF_ct1Abg8d",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente:
      "Ministério do Desenvolvimento e Assistência Social, Família e Combate à fome",
    Título: "Cadastro Único",
    Subtítulo:
      "Por que o governo está avaliando os cadastros de quem mora sozinho? 9x16",
    YouTube: "https://youtube.com/shorts/n_rIv_OEOrI",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1WztYQJYB0057kLX5oE2AkyxJuHK5UX0I",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1Wz2RspIzx2SSJ9PdP1odbyF_ct1Abg8d",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente:
      "Ministério do Desenvolvimento e Assistência Social, Família e Combate à fome",
    Título: "Cadastro Único",
    Subtítulo: "Como manter o cadastro atualizado?",
    YouTube: "https://youtu.be/J-HGHqMJCwM",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1WyMsCYVpzfPZq9z3g7h80zcBT1zXIgX1",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1Wwhw9o2yzeKq-ZcpOpC9diPjlJz1ayZU",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente:
      "Ministério do Desenvolvimento e Assistência Social, Família e Combate à fome",
    Título: "Cadastro Único",
    Subtítulo: "Como manter o cadastro atualizado? 9x16",
    YouTube: "https://youtube.com/shorts/Y2ZDux56j4c",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1WyMsCYVpzfPZq9z3g7h80zcBT1zXIgX1",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1Wwhw9o2yzeKq-ZcpOpC9diPjlJz1ayZU",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Ministério da Saúde",
    Título: "Cuida Mais Brasil",
    Subtítulo: "Agora você tem Pediatria na Atenção Primária",
    YouTube: "https://youtu.be/uYJHh4A_aRk",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1IsjzKPK7wFm35XULqJHzvnwmAjLRztwm",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1IqqN6gVubtGBj4fVO68RosQOCLWyDZ3q",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Ministério da Saúde",
    Título: "Cuida Mais Brasil",
    Subtítulo: "O que é a Atenção Primária a Saúde",
    YouTube: "https://youtube.com/shorts/uTHy_upHLHI",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1IpaA19uGknSrKSGyZesBqWcw66jaS39-",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1ImJ61kXRarKxPumA9DIEpPa7i1en8dyZ",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Ministério da Saúde",
    Título: "Cuida Mais Brasil",
    Subtítulo: "Como funciona a Atenção Primária a Saúde",
    YouTube: "https://youtu.be/QIhJHldrlbI",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1Il9VaAmQFDJZT_3AYAM-zc1r3qeYuvhu",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1IhqLb5405CanIlTg8DZJXhsYfDpyeXGh",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Ministério da Saúde",
    Título: "Cuida Mais Brasil",
    Subtítulo: "Quais as diferenças entre Atenção Primária e Especializada",
    YouTube: "https://youtu.be/xrNZQlNVywg",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1If2dvTvk8VW0Fy66pBDfPkH_kwrXac-H",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1Idzkla_X8Uz4pjqIQj-0kH9K8IB_iQm1",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Abac",
    Título: "Consórcio de A a Z",
    Subtítulo: "Como funciona o consórcio?",
    YouTube: "https://youtu.be/tCGQGFQGze8",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1419-Et95huH6KguJXyOpalrPfLN05XAH",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=14urW2G7joFkkfAGFrDAVwRFVvtNnBnK3",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Abac",
    Título: "Consórcio de A a Z",
    Subtítulo: "O que é grupo de consórcio?",
    YouTube: "https://youtu.be/mQn14e2YtNU",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=14rr7HnYm495IxyHwiGOqMRtMJoLrA9h5",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=14ppsK7NhdfYJjk5jVz3MPeXij_q_a6Hq",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Abac",
    Título: "Consórcio de A a Z",
    Subtítulo: "Por que ler o contrato é importante?",
    YouTube: "https://youtu.be/Ed77aLHVoPM",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=14obNBHir2WmPT3BZ0DNgwOtd3a4KdySG",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=14oHW5KV6RA_sTOTLL-cNSWg1mma9wjp1",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Abac",
    Título: "Consórcio de A a Z",
    Subtítulo: "Como funcionam as assembléias?",
    YouTube: "https://youtu.be/eVcPXSQCWGU",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=14lGLnY3NSl_79QphxL5NmrYRcuZs9o43",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=14Zs8RP1uYUgGDYGhsCiuoSp4Vgtmrybd",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Abac",
    Título: "Consórcio de A a Z",
    Subtítulo: "Quais as formas de contemplação?",
    YouTube: "https://youtu.be/U9MpkudI20I",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=14O9Sn3RB8c2Eaw0T3kX3OWxQXEhMaz8z",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=14Mg84sHAERPjVZS87qgounyXmhCyZG0c",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Abac",
    Título: "Consórcio de A a Z",
    Subtítulo: "O que é lance embutido?",
    YouTube: "https://youtu.be/XjbrcBCuLDI",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=14KbJwGx12Q0RX8ED3bVvvdPOxKNVOuZR",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=14I6uK7zQwSet9V-AkpwFxzAsp5FoHyI8",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Abac",
    Título: "Consórcio de A a Z",
    Subtítulo: "Para que servem as garantias?",
    YouTube: "https://youtu.be/g5s-r3BB8Us",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=14DkUx1J7HX9ulaIZnegyEGN2NmLk7-C_",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=148_3iFFkwHNHh5wDwA3VpLO_xW7A0xLI",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Abac",
    Título: "Consórcio de A a Z",
    Subtítulo: "É possível comprar o que quiser com o crédito?",
    YouTube: "https://youtu.be/r4Y1Lsl3j3w",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=143RlTVcrifEkF0RRzlddrgov7eg1YNhe",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=142awM7g055ARxVevofUvOAJN3G4cuj6A",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Abac",
    Título: "Consórcio de A a Z",
    Subtítulo: "Comprar bem de menor valor",
    YouTube: "https://youtu.be/xYl-rU8V-IA",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=15j2kI6eZ4kpcr3iEmQHfXvCiraak5QIM",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=15d_YPNQfuI7149G4Y_O7KBmIsUhewbzF",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Abac",
    Título: "Consórcio de A a Z",
    Subtítulo: "O que é taxa de admnistração?",
    YouTube: "https://youtu.be/cChO8Iypd2k",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=15SDuPXMMuUoZ_TF16ETUYR6DqWUDA-kJ",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=15MZkdD4WdhV0BFf-E1Kh2H8McUjQZ4IJ",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Abac",
    Título: "Consórcio de A a Z",
    Subtítulo: "O que é fundo de reserva?",
    YouTube: "https://youtu.be/9065MTYf1bQ",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=15LI7es0ZEgDb3ldGc9ZebHM7IeNJE0W5",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=15LI7es0ZEgDb3ldGc9ZebHM7IeNJE0W5",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Abac",
    Título: "Consórcio de A a Z",
    Subtítulo: "Parcela do consórcio",
    YouTube: "https://youtu.be/qBZSMHS4x44",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=15L6o_6jVez5Q_9R3K7Liv6WXx91kPU5p",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=15ISJxBPYTCEJ6u5STNQlnKpUKdvL78qX",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Abac",
    Título: "Consórcio de A a Z",
    Subtítulo: "O valor do crédito e das parcelas muda?",
    YouTube: "https://youtu.be/Upb1Lw25bjc",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=15BDvzxTkjxQggMZWJhvdq8LRNNEioc_2",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=15AbY3y50dHbvEOE6a9jWG2w5XUyjmsw7",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Abac",
    Título: "Consórcio de A a Z",
    Subtítulo: "O que acontece ao antecipar o pagamento?",
    YouTube: "https://youtu.be/jmhMuM1bkZ8",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=156x0vHukZpQGfwFu0_octTsRdKJb62VP",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=16tM8YfkCIwHEc2u_FySTGDmP2Wx7MObc",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Abac",
    Título: "Consórcio de A a Z",
    Subtítulo: "É permitido receber o crédito em dinheiro?",
    YouTube: "https://youtu.be/q9sok_z8xHs",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=14z2MFPEItnV5yLUgUEpi3wFj5exRpr2K",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=16fhadSi2tl7WHZRDqoV504GkV13SveGG",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Abac",
    Título: "Consórcio de A a Z",
    Subtítulo: "E se atrasar o pagamento da parcela?",
    YouTube: "https://youtu.be/1l0AxoqoLc8",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=16fDaqZg74FGTngEYWk_59deKjzMwzI-F",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=18MG9Cku6osMk_PB5jDbMAXbS3rVO_wd8",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Abac",
    Título: "Consórcio de A a Z",
    Subtítulo: "Desistência",
    YouTube: "https://youtu.be/Yl90NgXy-iE",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=18J0dFfExOOlaR9szLZmEfZiQ-6uoSXEc",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=18HayUmuPjDlsrA5E1L2wEJoerEptqHOw",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Abac",
    Título: "Consórcio de A a Z",
    Subtítulo: "Transferência",
    YouTube: "https://youtu.be/x21HfmDhB6M",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=180A67E1P7RjnvCPxTJMRbf3X9hmwho5U",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=17xJkAHufmr1ewcKKRS7j1VQRlYef_Pip",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Abac",
    Título: "Consórcio de A a Z",
    Subtítulo: "Cota contemplada",
    YouTube: "https://youtu.be/9eAF4p1aElE",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=17wADbMm8ychD0nHYzOo173apYn9-SDoF",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=17usUSs9-HODsJIrQbmkfVEIpIj2fGUGG",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Abac",
    Título: "Consórcio de A a Z",
    Subtítulo: "Posso voltar a pagar meu consórcio?",
    YouTube: "https://youtu.be/8sPHxR5_XuM",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=17aEXJr3svESS4IJ-dhP0ojzXahNexF-T",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=17ZnTk8z_nKhcHjo6gcnHxSzm0OxWZARL",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Mnistério da Cidadania",
    Título: "Brasil Fraterno - Comida no Prato",
    Subtítulo: "Video 1",
    YouTube: "https://youtu.be/kphdJaCtSq8",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1AVqN7acoerr6Wcfq6VmHCT4P9ZDYF0e5",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1ATHMYtDB-D5SmlL7f5uuOFhNDLRFrL0p",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Mnistério da Cidadania",
    Título: "Brasil Fraterno - Comida no Prato",
    Subtítulo: "Video 2",
    YouTube: "https://youtu.be/IOAmhOGRWj0",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1ARf2xc5exJLT38POZN7AJl9JMRl-B62G",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1AO_dVuWj4EV2tRy9Qk7qRIe7OdbWHR4k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Mnistério da Cidadania",
    Título: "Brasil Fraterno - Comida no Prato",
    Subtítulo: "Video 3",
    YouTube: "https://youtu.be/FNx-wJaOcbA",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1AK-ZKFGc1AHNsxE_UNuU32hTyaB6awjV",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1AJPUiVeYPyVd5-rvowzYryf0sLIvszjW",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Tokio Marine",
    Título: "Vida em Grupo",
    Subtítulo: "",
    YouTube: "https://youtu.be/d_XhBGyxoIo",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=13SBsXHPMpK3uUfbM6k0xT3bTfApJWyxv",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=13SvYvMxaPDFAxLAGZrESpT_qxxYFU0qf",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Tokio Marine",
    Título: "Residencial",
    Subtítulo: "",
    YouTube: "https://youtu.be/KKwTswlMn5w",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=13WxMo61YHyH-udiVeYKJh1CbOckLkCbH",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=13VYwPQRjkWu7rhYV2FBjUsvAzBB7Nzoq",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Tokio Marine",
    Título: "Responsabilidade Cívil",
    Subtítulo: "",
    YouTube: "https://youtu.be/OrAfiGEwQAU",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=13b2lOBgxVDPATkYU6rO6KyrmfT7N0jM1",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=13YG-ycDJQnXCCxngxvcUnIu1Bdsh6fOr",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Tokio Marine",
    Título: "Zika e Dengue",
    Subtítulo: "",
    YouTube: "https://youtu.be/z2Stw81RhKg",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=13iYXX7q_s-xlTHH1E0HhtRILqTQiRSmn",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=13blVlQvLpc9BeG_gFG487kLltWxODdC9",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Tokio Marine",
    Título: "Auto",
    Subtítulo: "",
    YouTube: "https://youtu.be/32mwdUP6AJQ",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1ZgF7wfONkaVfWGkRtqlUqy9DqtwNEIma",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1wwat5-3vo39Htn8WGmD3mtlQ-eCpQ1_4",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Tokio Marine",
    Título: "Danos e Riscos PJ",
    Subtítulo: "",
    YouTube: "https://youtu.be/ytfCfKe9T1A",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=13PX6NCYhx6B7TywbiceperXcnIloxOGI",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=13Lk7SupYJQpfza9gGPzJgWH3gD64jNCG",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Safra",
    Título: "SafraPay Te Conta",
    Subtítulo: "Como reforçar o caixa da empresa?",
    YouTube: "https://youtu.be/RkhcBsmRB0M",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1M5ijcbP63CqCWH6t4BhEpE4UwFOKde_o",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1LyROFXoiSi0D8qYEnKp5T0GjZmirFLCB",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Safra",
    Título: "SafraPay Te Conta",
    Subtítulo: "Como vender pelo whatsapp e redes sociais?",
    YouTube: "https://youtu.be/CRuHnwvWhoo",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1LvSFOgj2j9G8AmT76skDafSmBWfW7D95",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1Lm3bQ6rdioi0Y_6Y1B5L9pKZJZihncc5",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Safra",
    Título: "SafraPay Te Conta",
    Subtítulo: "Como diminuir custos?",
    YouTube: "https://youtu.be/NC-mrDbmTEU",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1MMvMz-fuxFBUpRPzEPv7RKyGebTYQ-R2",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1MMtvWeynqTUBpxE7uLJGXfxEpEmV-Ktj",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Safra",
    Título: "SafraPay Te Conta",
    Subtítulo: "Como impulsionar suas vendas?",
    YouTube: "https://youtu.be/aIEnXczUQzQ",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1MITqhpPNpTPz1ZhPMNEWC6KWL8-EPBzp",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1MEyXsZy9f4h4yFdt6Enh0G60F1NYAISg",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Safra",
    Título: "SafraPay Te Conta",
    Subtítulo: "O que são canais de venda?",
    YouTube: "https://youtu.be/obifSlFi1dY",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1M8u7KJlV-YV5Pl06dnT9xy02HU2nwYix",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1M8qTN8pd9tNxFckSgoAf2PHBehMlzNmo",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Safra",
    Título: "SafraPay Te Conta",
    Subtítulo: "Como expandir uma pequena empresa e faturar mais?",
    YouTube: "https://youtu.be/KiXc8-seOtI",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1MEBFIBJ4EMW_3afz-aHBnvXgZ7HgdnSY",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1MCGNj382pr7D5VqvhPsY0PPPSCIqfuuf",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Safra",
    Título: "SafraPay Te Conta",
    Subtítulo: "Como usar a tecnologia a favor da sua empresa?",
    YouTube: "https://youtu.be/SlliV8vVR58",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1LjyvUwiObht6iSXVtEaL_U3JoOTv-HUQ",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1IU6yUdxA4j3PPOZy2pR4i0empowxBso2",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Caixa",
    Título: "SIM Digital Crédito Caixa Tem",
    Subtítulo: "Pra quem é o crédito?",
    YouTube: "https://youtu.be/0hGhFCLvjsA",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1-66hNw8HORWvd3KXwZTd5E5G7SmEiNiF",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1-9IqllTifD96zS2piJnHf7k7-Md-8qKW",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Caixa",
    Título: "SIM Digital Crédito Caixa Tem",
    Subtítulo: "Meu Caixa Tem bloqueou, o que fazer?",
    YouTube: "https://youtu.be/vpBLSu3ip4o",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=10LwYoWdqnmFWyc16r_p8VZ1P_AwS07Bs",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=10K7VroV8qfVFPShidNSXf48M8ifxf_As",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Caixa",
    Título: "SIM Digital Crédito Caixa Tem",
    Subtítulo: "Condições e documentação para Pessoa Física",
    YouTube: "https://youtu.be/OVgqmSOk5ag",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=108wiyD_leOoFUkKs38sjuHbnTXSuG6i0",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=108HT7_3Y1xMcSTYaQPWFpt4osMdROgBP",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Caixa",
    Título: "SIM Digital Crédito Caixa Tem",
    Subtítulo: "Condições e documentação para MEI",
    YouTube: "https://youtu.be/MR7o_sL_vpI",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=107ZZVAX82-Qoz0MKEmHkGyguJpJu6Udx",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1-yyZWyas6WXplUp6eKq1MsfexMwGePF1",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Caixa",
    Título: "SIM Digital Crédito Caixa Tem",
    Subtítulo: "Redefinição de senha",
    YouTube: "https://youtu.be/-gRuT3IEVac",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1-uzwyX9VWa3OrL5JJ9K9nPp2Fw4TYRUv",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1-qHWGf88vKcIBpa9aMxJSoi5Rk60XbCG",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Caixa",
    Título: "SIM Digital Crédito Caixa Tem",
    Subtítulo: "Dicas para envio da documentação cadastral",
    YouTube: "https://youtu.be/TmLhi9gDtN4",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1-q1x9FbQFCXBGkt--irHmol4lABmI8Bj",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1-nXXe0AEbk0t5LvVvCPZrIYWBZlLQZCb",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Caixa",
    Título: "SIM Digital Crédito Caixa Tem",
    Subtítulo: "Informe de renda no Caixa Tem",
    YouTube: "https://youtu.be/MdkoJPeyV2w",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1-jNtR_l0iJNnwv4pj3CJpTf17518eJch",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1-ir0OhhggZZQ4fXmBxkdTt4XyfH90not",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Caixa",
    Título: "SIM Digital Crédito Caixa Tem",
    Subtítulo: "Confirmação da atualização cadastral",
    YouTube: "https://youtu.be/-l2XqOL2igo",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1-Yc56e7PhXgAcYCtwnGB-p75P68LSdGG",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1-T6qbyiMbeVPtmqU9QA272Ygh3Rv2TRs",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Caixa",
    Título: "SIM Digital Crédito Caixa Tem",
    Subtítulo: "Como solicitar o empréstimo?",
    YouTube: "https://youtu.be/fw9w2_CFjbA",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1-SDAMA_JvL4Og5yG-Ltfnk3gmWWiwL69",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1-RV-dueMJ1EUVafMVnufqWF_toEWmY4d",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Caixa",
    Título: "SIM Digital Crédito Caixa Tem",
    Subtítulo: "Status da solicitação de crédito",
    YouTube: "https://youtu.be/a-Mg1L-ke3s",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1-HaJJsZmAawC3YdbGytiBNYadvstkDKs",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1-ALG8U7bK9JuzEHfo3aQuWab4XOBiRYF",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Ministério da Saúde",
    Título: "Saúde da Mulher",
    Subtítulo: "Atenção Primária à Saúde",
    YouTube: "https://youtu.be/jBfsAszS_gQ",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=12ANLBMlblktXWwg4a9dJ1-HgwrrHj3we",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=120f5dybJU-ADmB8SukA-j04bE9Vm3e1U",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Ministério da Saúde",
    Título: "Saúde da Mulher",
    Subtítulo: "Câncer",
    YouTube: "https://youtu.be/QTxpSC5IWQs",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=12xN0YLcLe35sl7EINO1bG1K1UfBa3Udc",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=12vkbbgAJrWAEsj3V6jJDQLvcLzu-Pi3y",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Ministério da Saúde",
    Título: "Saúde da Mulher",
    Subtítulo: "Pré-natal",
    YouTube: "https://youtu.be/w_JjyFjwM4w",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=12tTmmoe2pkfy3odvxDxXXopCv-hhVEWK",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=12lwoZUZdy_dp0UkDU0A8LzM73WkApejw",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Ministério da Saúde",
    Título: "Saúde da Mulher",
    Subtítulo: "Sexualidade e planejamento familiar",
    YouTube: "https://youtu.be/IB-xoIJYXpQ",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=12eV9UFLdeNNa32y-hV0WPLnD7dQh1fTl",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=12gkpJVbjx912InVCOBXlgh6Tauk7K1JB",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Ministério da Saúde",
    Título: "Saúde da Mulher",
    Subtítulo: "ISTs",
    YouTube: "https://youtu.be/eoDVaRUcnrA",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=12OGn-ng7HIuMnSsQjYve5YDvxOrPoQM3",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=12OfyiKv_uSFmIdASt-_PcOvWyhya_TQB",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Ministério da Saúde",
    Título: "Saúde da Mulher",
    Subtítulo: "Pré-natal odontológico",
    YouTube: "https://youtu.be/3Vy70mMTozw",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=12EnatW7jO6guI1SDfS0K0pX7w5yMsOWf",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=12NECpUYpACzRuGq7wxtJDsubwSUCv6lC",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Ministério da Saúde",
    Título: "A Culpa não é dos Macacos",
    Subtítulo: "",
    YouTube: "https://youtu.be/nf1-4crRp40",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1ZI_GQ7NLH9wIzxDistjNzmol4cfeuGIh",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1ZJHFSnYZ9NGUnVvQr2pDq1ed_-9EylXu",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Abbvie",
    Título: "Farmacovigilância",
    Subtítulo: "Segurança para o paciente",
    YouTube: "https://youtu.be/cl9SvhrSO_I",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1DN8kMtLjhcfp28xP83EY31U7XWa8zLHC",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1DKkUsQ5BZq56A3CC4nPVLlTpSbrPiujs",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Abbvie",
    Título: "Farmacovigilância",
    Subtítulo: "Farmacovigilância na terapia biológica",
    YouTube: "https://youtu.be/-cYCJsVG5J0",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1DgXeob7I5VthpcqDN0HvJLQASzxkLi4x",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1DgDk6SY1uofoDil6IWMitpr458HWNcW5",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Abbvie",
    Título: "Farmacovigilância",
    Subtítulo: "Transporte e armazenamento",
    YouTube: "https://youtu.be/ZVdqE22Q9O8",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1DQyIS1kMaervZPQYKWyw7cnOcQqTNxBU",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1DPn1RNIhzVI3A37L8650hcXnTIEFZVy8",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Elma Chips",
    Título: "Guia de Exibição Controlada",
    Subtítulo: "",
    YouTube: "https://youtu.be/nRgBxOfIlY4",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1So35ZEuco2HFY7gQcNFeLcvejj0pAJZ8",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1Sj7K9aT9bJH7whFFiimxjHUIyQBytJdf",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Coca-Cola",
    Título: "John Pembertton | Coca-Cola 3d",
    Subtítulo: "",
    YouTube: "https://youtube.com/shorts/eXWLjP_o5lg",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1ElYDRtulxgP_QliP3uPTfEO35cYljOht",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1Eq0iuB182lAWBptkjxaYpRrYPjjztQxd",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Ministério da Saúde",
    Título: "Doutor Gotinha Responde",
    Subtítulo: "Parte 1",
    YouTube: "https://youtube.com/shorts/mEkDrrGJw4g",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1S0x--Uvjnc2GvIOqq7ICjo26myP2X84U",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1--N84fqSicrhERQfZWzvwvOpcQw5nXuC",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Ministério da Saúde",
    Título: "Doutor Gotinha Responde",
    Subtítulo: "Parte 2",
    YouTube: "https://youtube.com/shorts/8xM6s64ckmo",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1S0x--Uvjnc2GvIOqq7ICjo26myP2X84U",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1--N84fqSicrhERQfZWzvwvOpcQw5nXuC",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Ministério da Saúde",
    Título: "Doutor Gotinha Responde",
    Subtítulo: "Parte 3",
    YouTube: "https://youtube.com/shorts/hBJHLsjCxNU",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1S0x--Uvjnc2GvIOqq7ICjo26myP2X84U",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1--N84fqSicrhERQfZWzvwvOpcQw5nXuC",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Ministério da Saúde",
    Título: "Doutor Gotinha Responde",
    Subtítulo: "Parte 4",
    YouTube: "https://youtube.com/shorts/MNjIHkmqkBg",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1S0x--Uvjnc2GvIOqq7ICjo26myP2X84U",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1--N84fqSicrhERQfZWzvwvOpcQw5nXuC",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "FTD Educação ",
    Título: "FTD 120 Anos",
    Subtítulo: "",
    YouTube: "https://youtu.be/53dGdk68sgc",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1jSfNgKhXHsUJbs1Tm7p_IN1Un6ss8-iW",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1MNfPoPtBxdf006hkSS01n_t-tYs4lht8",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Osasco",
    Título: "Incentivo ao comércio local",
    Subtítulo: "",
    YouTube: "https://youtu.be/la_nkAORFtc",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1NSlUVvsztNymGkKCnespUiOZzKvaZ5W7",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1NPszr9j2ZWxqrV2YbyiqZqs-dt-jyT2M",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "TecBan",
    Título: "Todo dia é dia",
    Subtítulo: "Campanha",
    YouTube: "https://youtu.be/wFaMHZtoNiQ",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1F1TrIfUoaNJVAODy0vSlSn9dWmlOw3JR",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1F0iVVxt3nbZUM2XCePvBq8Mcr07HJxAs",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "TecBan",
    Título: "Todo dia é dia",
    Subtítulo: "Segunda-Feira",
    YouTube: "https://youtu.be/R4YmOVAXwmE",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1F4RnQjSHZ1ledl0b4UJ6tPr7bi60yHJW",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1F7Dm1PhT2cFad6yOSAKnHL3dAn0b5Yie",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "TecBan",
    Título: "Todo dia é dia",
    Subtítulo: "Terça-Feira",
    YouTube: "https://youtu.be/mmcy2_64k94",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1FTXICcxNzkc0tfHNqxb4FQct_Y6pL94U",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1FO2QNbb7cmHDCLMkduiaLcAJ5uzmQDQ7",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "TecBan",
    Título: "Todo dia é dia",
    Subtítulo: "Quarta-Feira",
    YouTube: "https://youtu.be/WQAhIsPQ82Y",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1FUym21QcGTTdiZKXgRgcMy3xBGYsCSd8",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1FUrFleS82hpNk0Wac6PyBKoHUEpq07Or",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "TecBan",
    Título: "Todo dia é dia",
    Subtítulo: "Quinta-Feira",
    YouTube: "https://youtu.be/41hYMCzUmzM",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1Fsw6FPGCbc0AD3wAvlcopeSsdFXHhf9u",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1Fr7s6XV2m89ZEwjdrbv8d6V39nByZs6I",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "TecBan",
    Título: "Todo dia é dia",
    Subtítulo: "Sexta-Feira",
    YouTube: "https://youtu.be/2fxnXoz3hAc",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1Ffzn56whDFrRaZq2EPlOId6zogX4JmO_",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1FcRNrUVnMUB-LRBQ5tSb6hw0sRw2xJrf",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "TecBan",
    Título: "Todo dia é dia",
    Subtítulo: "Fim de Semana",
    YouTube: "https://youtu.be/wLwy-a08gB4",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1FbncrMFOpSY-n6YI4QtbYR86S89-QrZt",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1FY7gRzOQ52OTQB190x0oGIKzzUoW6RJA",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Abbvie",
    Título: "Artrite Reumatoide",
    Subtítulo: "",
    YouTube: "https://youtu.be/4eJ_gCYk6d4",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1JdZd21r2r6RffQOYoA8AHMSD8iGAyAlz",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1JFpfz5OVlvAh5QeFRpbqiCGYIw4xKZnw",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Smiles",
    Título: "Novo Cartão Smiles",
    Subtítulo: "",
    YouTube: "https://youtu.be/vCTBEtMoUWY",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1G0Gps3ZQHe-HYhVSwEmNTnjztShJ1TQM",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1G6aR2EjmX4HjdAL55efVslLDnN9tFjf5",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Safra",
    Título: "Safra Crédito Consignado",
    Subtítulo: "",
    YouTube: "https://youtu.be/Fs_CgAiTT4M",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1G71Rs-rEKuVPvMcUO8GTxof9-amFvd6E",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1G7HpgkkXYfBPIdg74KRWORKxDefs7577",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Nakata",
    Título: "Amortecedores Nakata",
    Subtítulo: "",
    YouTube: "https://youtu.be/E54WkAJdj7c",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1G9IAjPQJuhyO5Ax3k7Pki4-jUt6RWRNZ",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1GALgX15g2AhNZJqDapw1oiy26SpDZQaL",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Cejam",
    Título: "Seja Cejam",
    Subtítulo: "",
    YouTube: "https://youtu.be/yMFKkcZ7IB4",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1HP-uxnl6-W_YVnbS2kxTVTZT1d9T4ev2",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1HKB4tWeIweE4oZfK7ZExVjmZcuiVaomm",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Safra",
    Título: "Formalização Digital Safra Financeira",
    Subtítulo: "",
    YouTube: "https://youtu.be/y-1sn6IhjOM",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1H2oiVmHeID3rgMtAXT9rZlUuK_9_lKFH",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1H1sxy5qgdB3DqZy67EovUc2uuTgzue_u",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Unipar",
    Título: "Unipar",
    Subtítulo: "",
    YouTube: "https://youtu.be/L37alrJUdNU",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1H0h8X6ziLr_7AvRYuCprIKW8c4FuzZ26",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1Gtorc-DztK2BNSDWHvyZR5WwtoZOuQAI",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Abbvie",
    Título: "Uso do Survanta",
    Subtítulo: "",
    YouTube: "https://youtu.be/E33POXhgClI",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1DwjecPaa3ot8wpiTxbRMevO_D_yuCVu7",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1Dv5jEKSSOAyLtdLvAyQ6eCep9AFkDkc5",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Abbvie",
    Título: "Biossimilares",
    Subtítulo: "",
    YouTube: "https://youtu.be/I0u9mCtw2X4",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1DxzjfsDFCxcasmlAGzaAfDGKgdLAupEL",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1E3x5m47_-TcPwsRmPx21B8RHC3GttB7g",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Abbive",
    Título: "Biológicos",
    Subtítulo: "",
    YouTube: "https://youtu.be/7wS2uC0saZI",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1E549WYPO_0CGFg6fSR6CB5xmwd-PSd8r",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1E7kiF58Aoyb8P5Sp7PkkNeDfa_OrHKLw",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Safra",
    Título: "Nova Jornada de Pagamento Safra Financeira",
    Subtítulo: "",
    YouTube: "https://youtu.be/QWkp332MrRE",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1DCnNoI2U1rcVKy_2gnR4kefvOZfNsbLK",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1D4EqQqj_kyv25vBcKi6YWgZvEubz0VDf",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Suvinil",
    Título: "Vinheta Suvinil Leste",
    Subtítulo: "",
    YouTube: "https://youtu.be/2uG6x4lXXq8",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1USvwu6P-X3DMgPLCdw_CksABCcEf_qUl",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1UBmiZ0xJo8Qq3OwsDcqxyW_EMa0KA7ww",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Suvinil",
    Título: "Sou Mais",
    Subtítulo: "",
    YouTube: "https://youtu.be/J5Ix4dkujAA",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1UAc2pQn5d7J2rZaOHGdeEXLadITmxSXc",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1UAbaqy5lESapoGCyv-H3Oka3eAEb1Q-R",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Safra",
    Título: "Tutorial SafraPay",
    Subtítulo: "TIPOS DE MÁQUINA",
    YouTube: "https://youtu.be/vPQ3Cn8wpWo",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1YOI8lTT8MQOTaPh-u_RnuFkWVapGUSWb",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1YW4KHdMy7e3JnRdQvKe3dK-2mWw0dPXG",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Safra",
    Título: "Tutorial SafraPay",
    Subtítulo: "MÁQUINA BLUETOOTH E APP SAFRAPAY",
    YouTube: "https://youtu.be/_RAodw87-g8",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1Z3RQOWFRBbs2qMPb0UENioJ9bUz6mfMg",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1Z1yAmz2RvKpDdkyMmw0VOxv5MdpvEYyP",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Safra",
    Título: "Tutorial SafraPay",
    Subtítulo: "MÁQUINA COM BOBINA",
    YouTube: "https://youtu.be/CgMIgcHNpD4",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1Z1JeuPcMFeCH0ICb00Y_6mJl_Y42EYJ7",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1Z0b3gBu7TzSWIZyFRRUIbk80N0DOor-X",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Safra",
    Título: "Tutorial SafraPay",
    Subtítulo: "MÁQUINA MÓVEL SEM BOBINA GPRS",
    YouTube: "https://youtu.be/gqEECE64rGk",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1YzI75NPiW8wgtwNFtp2IRq_bMU5dCPhm",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1YxUyP62rqc7tnJ_242btnGZ9cN3X-xGX",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Safra",
    Título: "Tutorial SafraPay",
    Subtítulo: "MÁQUINA SEM BOBINA",
    YouTube: "https://youtu.be/RmwrqexiRYk",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1Ydp0VHjhoXZntQuM4vZBAcpZlCwHq4gB",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1YcIRfeeVissD7jPp-59ETn43dLKGvPIf",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Safra",
    Título: "Tutorial SafraPay",
    Subtítulo: "CONHEÇA NOSSAS MÁQUINAS",
    YouTube: "https://youtu.be/4LQA6yM_fN4",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1YbFIbwJALejAnfHSumuazH4lgQUDPAyP",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1YbANNYrYaBE60Ct5bxQLt-mExepp71nL",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Safra",
    Título: "Tutorial SafraPay",
    Subtítulo: "TUTORIAL SMART",
    YouTube: "https://youtu.be/03bmYeabOOs",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1YZQT-cFK_ItFdQMXSRSlGhCY48YwuixK",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1YYBO_3LFZ8Q03t7-lc5IFm7EIBkPIobM",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Safra",
    Título: "Autônomos",
    Subtítulo: "Video 1",
    YouTube: "https://youtu.be/D6qubBVopxI",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1Tj0VMRu22fkpY0Ei2CPK9e3CzjXKNhwg",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1VR4I7kumfDQMYqGiwxop79pL6MGEcV-G",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Safra",
    Título: "Autônomos",
    Subtítulo: "Video 2",
    YouTube: "https://youtu.be/GVjkKfn5dGM",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1VO8DMlM9bes-Oog_XUX_VH9sWvCE57ni",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1VNnHWnlualxgHn4z_pkcY7Wt70ohFpSH",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Safra",
    Título: "Autônomos",
    Subtítulo: "Video 3",
    YouTube: "https://youtu.be/Dx-djMWXI1s",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1VJprtXqLUMqjmrPOAs3lvrMnO4vz0gGb",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1VFuuTcPWXrBd3GL9N2ZbDHMve7lA7jJD",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Safra",
    Título: "Autônomos",
    Subtítulo: "Video 4",
    YouTube: "https://youtu.be/rFmcmmYmay8",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1VF_Sru6iZw0zHYkOtpDgGMZketyDDe9N",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1VDo48kzsg9wgEurvTO2630uPdyJdJCFn",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Pedidos Já",
    Título: "Pedidos Já",
    Subtítulo: "",
    YouTube: "https://youtu.be/tV_EHu6z7Bs",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1JEbq4nRTTgjrsAdU1v7FrE_j9yZ6uZYy",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1JEXfFWNWiTiEr2OoJTKEAOSLB_soxX7t",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Eucatex",
    Título: "Formobile Eucatex",
    Subtítulo: "",
    YouTube: "https://youtu.be/R0rHKngDG14",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1IzYnc11ZmN8Yj7WIpgh6psKx-YP4YKw7",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1KZdbzjdYkSLehXucQ4CLKyMpzMbGlzSw",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Unilever",
    Título: "Unilever Missões",
    Subtítulo: "",
    YouTube: "https://youtu.be/cYslQsG9MZs",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1JvX7sJXOQ8HSxuHT-9PAJZ5LIdJxrGtG",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1JvHicDJmQ9FPGBcyOl2N9WsyX47KKqQU",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Spartan",
    Título: "Spartan Brasil",
    Subtítulo: "",
    YouTube: "https://youtu.be/3xu9DV1aHik",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1Ju7F_5DLX7pyAAG24QF9xMlIFM6ItBo3",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1Jrul0W8T4K_gWJ7WNI8e42OfnEKp5ZF7",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Itaú",
    Título: "Portal Vitrine Rede",
    Subtítulo: "",
    YouTube: "https://youtu.be/qrdorGCG2kI",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1MZ9h9JgCnefMujpcElAioc4hQgROP64t",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1MXUWXsH0IvbcqlS9OSlEshsHzxhP1mmI",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "St. Marche",
    Título: "Promoção Mini St Marche",
    Subtítulo: "",
    YouTube: "https://youtube.com/shorts/oVdaEbWNex0",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1Ph9mYC4y1FU-HqjgQjoF4fTKz1WeWuqZ",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1Peg1_uIO9AD-cVEKEiZikTRI3u5fcCtq",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Semp Toshiba",
    Título: "SEMP GO",
    Subtítulo: "",
    YouTube: "https://youtube.com/shorts/4njLIHIQgwc",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1PrYGltZfV385rv5rwh2aoT3pEObF6v9f",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1PjNkN6iP8LprSREBhF9eIwLVna1wIPLQ",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Omron",
    Título: "Omron Nebulizadores",
    Subtítulo: "",
    YouTube: "https://youtu.be/8fHJV-BHSzY",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1ShrN23icV6-SWvFnkjm2HXg5aMkj3tVf",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1Sft8Kz9z5BkEIJJiV0hQj3Uradzb0HRS",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Rádio Disney",
    Título: "Rádio Disney",
    Subtítulo: "",
    YouTube: "https://youtu.be/5ZgBHZxfxqk",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1Sb3AbBVdPzIFrNnrwH6uxjfxLm7B6DTS",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1SFMAoORtq30cD-mkLyQDVXSD9UwPw22k",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "CNN",
    Título: "CNN | 3D",
    Subtítulo: "",
    YouTube: "https://youtu.be/9Wpahnm-GsU",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1SF6rQ5ZcYhCfr_oLACxj5YwsEbd2SHLM",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1S4Eofc6Ove80c_rrKLSbDTG0IWTNpFb0",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Teva",
    Título: "Teva | Farmacovigilância",
    Subtítulo: "",
    YouTube: "https://youtu.be/TU97HK_0jrg",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1S3oLzQ4ql-wTwQ-H9Yp17UkTHEFNcUrz",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1Rzm20h_zC8qKzkM98q-SnTvPICBc5yHU",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Teva",
    Título: "This is Teva",
    Subtítulo: "",
    YouTube: "https://youtu.be/DlFYwNQBPSE",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1RuagUUITjkXhRry8iUt94zzGm-DhfTFb",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1PUZlDd32am0obuNmuZqjzQ-x9tFIweKg",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Abbvie",
    Título: "Projeto Doors",
    Subtítulo: "",
    YouTube: "https://youtu.be/-o4QOuxl6Sc",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1UvVFMsQ6OtrksPNWJqxUJECg1MkJnYs-",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1UuHzym4kMa6Tlhh-_Ft_O0M6wrSzPPo5",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Abbvie",
    Título: "Humira Pen - Guia de Aplicação",
    Subtítulo: "",
    YouTube: "https://youtu.be/4zBoJaYFztg",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1EItgBK5vf7Hvg1T-AKdX0NrTMbMw8WNy",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1EO5adVe1qC0ZE2E475SKx2pQfScVTvlG",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Moderna",
    Título: "Set Brasil | Ed. Moderna",
    Subtítulo: "",
    YouTube: "https://youtu.be/Q_eROVm9HmI",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1EV_v2TwLmKBrtUVwLHkuJ7Et5tANddcL",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1EZji2_uPBzZEfWh2B1EFsnnxHISGzHeL",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "ABAC",
    Título: "ABAC",
    Subtítulo: "",
    YouTube: "https://youtu.be/TDNvvWlPJeE",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1EZtpME_lNpY5K3K1b_SxXSmI7Eql8yK7",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1EjEgpjTVlBzc6O9AI0aFwwA2Z_BY8MqN",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Abbvie",
    Título: "SinChronia",
    Subtítulo: "",
    YouTube: "https://youtu.be/sUPHEyWKxQM",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1XaWBKUy2ZQcvzmS_j3-R4z8hcm9GbsGx",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1Xc6K5F6sl9Bo3BteWJUKRO-UY9yBYhIl",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Smiles",
    Título: "SMILES & SHELL",
    Subtítulo: "",
    YouTube: "https://youtu.be/Jx-yd8jrrY4",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1ZLDsEEthE6GtBfxDoHRoEvWtisMy1637",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1ZZEZHuXk-_tI4zizPy5HhckxH2qBvJpQ",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Motion 2d/3d",
  },
  {
    FilmId: uuid(),
    Cliente: "Armored Dawn",
    Título: "Clipe S.O.S",
    Subtítulo: "",
    YouTube: "https://youtu.be/iwIus7Z3GTo",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=12vLZ-QckNNZBjZ7KUKFQxs31GRaNiKg_",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=12ssuk9i4W1JsGYcJauK1AXZZfrqL9qRE",
    Texto:
      "https://docs.google.com/document/d/1ouM7DkUA5Xg_LxnLdmfC3NQdEzU3j15feQnKOuEG0yE/edit?usp=drive_link",
    Diretor: "Kahue Rozzi",
    Categorias: "Clipes de Música",
  },
  {
    FilmId: uuid(),
    Cliente: "Rodhanna",
    Título: "Disco Rodhanna",
    Subtítulo: "",
    YouTube: "https://youtu.be/ju3iwtluAmw",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1RAoYtYccRRhE2ngMO53SDVDM2tRWiczM",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1RATJ10_wUkAcbqJSJ-50faGxOurO5MyM",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Clipes de Música",
  },
  {
    FilmId: uuid(),
    Cliente: "Acústicos & Valvulados",
    Título: "Cinco Frases",
    Subtítulo: "",
    YouTube: "https://youtu.be/1Jb1NKfdzfw",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1R9lBdAbK9N0yi2JwYvlaWrHdV2G3E0xC",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1R6RrOrNnfbsPGTAa_i6hIrXYcB2aSF55",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Clipes de Música",
  },
  {
    FilmId: uuid(),
    Cliente: "Acústicos & Valvulados",
    Título: "Deus Quis",
    Subtítulo: "",
    YouTube: "https://youtu.be/eWkaCqpXAPc",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1QvGihAHGf3HwDcycSByIuFI6GUhQ8o_k",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1Qula4dLk-O7PC4cLcqhgJeP-if8Mkpok",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Clipes de Música",
  },
  {
    FilmId: uuid(),
    Cliente: "AACC",
    Título: "Capital Inicial - Ajudar crianças com Cancer faz bem ao coração!",
    Subtítulo: "",
    YouTube: "https://youtu.be/xTg14JSAWiw",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=1RDylXTStJVIKkCrS28lJA2h7YxtDRFn4",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=1RCXKfj_Cb3MRkXIsCB-HdYRIMkFVaWmj",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Clipes de Música",
  },
  {
    FilmId: uuid(),
    Cliente: "Dalva",
    Título: "Teaser Dalva de Oliveira",
    Subtítulo: "",
    YouTube: "https://youtu.be/pgqAaXO9lIs",
    "Thumb miniatura":
      "https://drive.google.com/uc?export=view&id=132OQQdY28_YKlrPmXWZnOqMXr1RU3wvq",
    "Thumb principal":
      "https://drive.google.com/uc?export=view&id=135Dkjxgae5o5jcmwVml4h_8FfNCjvuwR",
    Texto: "",
    Diretor: "Kahue Rozzi",
    Categorias: "Entretenimento",
  },
];

filmsArray.forEach((film, index) => {
 // Verifica se já temos um UUID armazenado para este filme
 let storedUuid = localStorage.getItem(`film-${index}-uuid`);

 // Se não temos um UUID armazenado, gera um novo
 if (!storedUuid) {
   storedUuid = uuid();
   // Armazena o UUID no localStorage
   localStorage.setItem(`film-${index}-uuid`, storedUuid);
 }

 // Atualiza o campo FilmId do filme com o UUID
 film.FilmId = storedUuid;
});


export default filmsArray;
