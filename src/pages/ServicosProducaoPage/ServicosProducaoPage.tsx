import MainContent from "@/components/MainContent/MainContent";
import "./ServicosProducaoPage.css";
import Container from "@/components/Container/Container";

const ServicosProducaoPage = () => {
  return (
    <MainContent>
      <Container additionalClass="servicos-container">
        <h1>Simon Says</h1>
        <p>
          A SimonSays Filmes é uma produtora com 14 anos de história,
          trabalhamos para as mais importantes marcas e agências do mercado,
          sempre com excelência nas suas entregas nacionais e internacionais.
          Oferecemos o serviço de produção para clientes internacionais que
          estejam interessados em produzir e filmar no Brasil. Caso queira fazer
          um orçamento, entre em contato.
        </p>
      </Container>
    </MainContent>
  );
};

export default ServicosProducaoPage;
