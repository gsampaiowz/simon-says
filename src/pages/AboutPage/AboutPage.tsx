import MainContent from "@/components/MainContent/MainContent";
import "./AboutPage.css";
import Container from "@/components/Container/Container";

const AboutPage = () => {
  return (
    <MainContent additionalClass={"about-page-main"}>
      <Container additionalClass={"about-page"}>
        <h1 className="about-page-title">
          <span className="about-page-title-destaque">SIMON SAYS</span> FILMES
        </h1>
        <h2 className="about-page-subtitle">PRODUTORA DE FILMES EM SÃO PAULO</h2>
        <p>
          <b>O que nos define?</b>
          <br />A SimonSays é uma produtora de filmes, que faz live-action, TV,
          digital e cinema.
        </p>
        <p>
          Nosso foco é unir design e narrativa de comerciais a longa-metragens.
        </p>
        <p>
          Somos um time de diretores, animadores, designers, produtores,
          atendimentos e coordenadores.
        </p>
        <p>
          Começamos em 2008 e já produzimos trabalhos para as mais respeitadas
          marcas como{" "}
          <b>
            BMW, Yamaha, Mini Cooper, Goodyear, Itau, Santander, St Marche,
            Disney Channel, Technos, Smiles, Batata McCain, Mondelez, CBF
          </b>
          , entre outras.
        </p>
        <p>
          Hoje somos uma Holding de produção que reúne todas as vertentes do
          universo audiovisual.
        </p>
        <p>
          <b>Simon Says: </b>
          Somos diferentes
        </p>
      </Container>
    </MainContent>
  );
};

export default AboutPage;
