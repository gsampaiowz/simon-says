import MainContent from "@/components/MainContent/MainContent";
import "./AboutPage.css";
import Container from "@/components/Container/Container";

const AboutPage = () => {
  return (
    <MainContent additionalClass={"about-page-main"}>
      <Container additionalClass={"about-page"}>
        <h1 className="about-page-title">QUEM SOMOS?</h1>
        <hr className="about-page-divider" />
        <p>
          Bem-vindo à SimonSays Filmes, onde nos últimos 15 anos, não apenas
          produzimos filmes – construímos histórias.
        </p>
        <p>
          Na SimonSays, somos contadores de histórias com uma paixão por criar
          algo verdadeiramente extraordinário. Asseguramos não apenas entregas
          pontuais, mas oferecemos opções que ultrapassam o convencional.
        </p>
        <p>
          Com sedes estratégicas em Miami e Brasília, não nos limitamos a filmes
          publicitários; exploramos a criação de personagens em 3D, narrativas
          envolventes em motion graphics que ganham vida, além de produzir
          filmes institucionais, documentários e séries que cativam.
        </p>
        <p>
          Equipados com tecnologia de última geração, convidamos você a explorar
          nosso site e descobrir o poder da SimonSays Filmes. Descubra como
          podemos colaborar para criar algo que vai além do comum, algo que
          captura a essência da sua visão.
        </p>
      </Container>
    </MainContent>
  );
};

export default AboutPage;
