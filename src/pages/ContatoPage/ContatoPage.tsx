import MainContent from "@/components/MainContent/MainContent";
import "./ContatoPage.css";
import Container from "@/components/Container/Container";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

const ContatoPage = () => {

  return (
    <MainContent additionalClass={"contato-page-main"}>
      <Container additionalClass={"contato-page"}>
        <h1 className="contato-page-title">
          <span className="contato-page-title-destaque">SIMON SAYS</span> FILMES
        </h1>
        <h2 className="contato-page-subtitle">CANAIS DE CONTATO</h2>
        <div className="contato-page-canais-contato">
          <p>
            <HiOutlineMailOpen size={25} /> contato@simonsaysfilmes.com.br
          </p>
          <p>
            <FaWhatsapp size={25} />
            +55 11 9.5555-6971
          </p>
        </div>
        <p className="contato-page-text-upper">ONDE ESTAMOS</p>
        <p className="contato-page-text-upper contato-page-text-orange">
          SÃO PAULO
        </p>
        <p className="contato-page-text-normal">
          Rua Juventus, 92 <br />
          Mooca – São Paulo/SP
        </p>
        <p className="contato-page-text-upper text-orange">BRASÍLIA</p>
        <p className="contato-page-text-upper text-orange">MIAMI</p>
        <p className="contato-page-text-normal">
          101 SE 3rd Avenue <br />
          Suite 301 <br />
          Dania Beach FL 33004 <br />
          USA
        </p>
      </Container>
    </MainContent>
  );
};

export default ContatoPage;
