import "./FilmsPage.css";
import FilmItem from "@/components/FilmItem/FilmItem";
import filmsArray from "@/data/films";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import MainContent from "@/components/MainContent/MainContent";
import FiltersNav from "@/components/FiltersNav/FiltersNav";
import Container from "./../../components/Container/Container";
// import axios from "axios";
// import { google } from "googleapis";

const FilmsPage = () => {
  const navigate = useNavigate();

  const [atualFilter, setAtualFilter] = useState<string | null>("Todos");

  type Film = (typeof filmsArray)[0];

  const films: Film[] = [];

  const seenClientes = new Set();
  filmsArray.forEach((film) => {
    if (!seenClientes.has(film.Cliente)) {
      films.push(film);
      seenClientes.add(film.Cliente);
    }
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const indexOfLastItem = currentPage * itemsPerPage;
  const currentItems =
    atualFilter === "Todos"
      ? films.slice(0, indexOfLastItem)
      : films
          .filter((film) => film.Categorias === atualFilter)
          .slice(0, indexOfLastItem);

  const verMais = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    setAtualFilter(localStorage.getItem("atualFilter"));
  }, []);

  // interface TokenResponse {
  //   access_token: string;
  //   refresh_token: string;
  //   token_type: string;
  //   expires_in: number;
  // }

  // async function exchangeCodeForToken(code: string): Promise<TokenResponse> {
  //   const data = {
  //     code: code,
  //     client_id:
  //       "926802541024-2pkc341j1er8fgdbpgrt4qedv75irfd5.apps.googleusercontent.com",
  //     client_secret: "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",
  //     redirect_uri: "https://simon-says-mu.vercel.app",
  //     grant_type: "authorization_code",
  //   };

  //   try {
  //     const response = await axios.post<TokenResponse>(
  //       "https://oauth2.googleapis.com/token",
  //       data
  //     );
  //     return response.data;
  //   } catch (error) {
  //     console.error(error);
  //     throw error;
  //   }
  // }

  //Executar para obter token
  // const code =
  //   "4/0AfJohXlln-xU_2oxUAv9jEt73_eR3tDZc-vEZPiVgfvE83WdYZvvc4EwOQiuIg8a7Zmhcw";
  // exchangeCodeForToken(code)
  //   .then((tokenResponse) => {
  //     console.log(tokenResponse);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  // const oauth2Client = new google.auth.OAuth2(
  //   "926802541024-2pkc341j1er8fgdbpgrt4qedv75irfd5.apps.googleusercontent.com",
  //   "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",
  //   "https://simon-says-mu.vercel.app"
  // );

  // let refreshToken =
  //   "1//0hD0xBIzz7L1iCgYIARAAGBESNwF-L9IrOrc9RFFCZJppSJOiypyvrbKv5TmIYcRutgRpSEh2vjzClvBmtZYitj9vEn9A1ZNGeHY";

  // oauth2Client.setCredentials({
  //   refresh_token: refreshToken,
  // });

  // const drive = google.drive({ version: "v3", auth: oauth2Client });

  // async function getImageUrl(fileId: string): Promise<string> {
  //   const res = await drive.files.get({
  //     fileId: fileId,
  //     fields: "webViewLink",
  //   });
  //   return res.data.webViewLink!;
  // }

  // // Função para atualizar o token de acesso
  // async function refreshAccessToken(): Promise<void> {
  //   try {
  //     const credentials = await oauth2Client.refreshAccessToken();
  //     oauth2Client.setCredentials(credentials.credentials);
  //   } catch (error) {
  //     console.error(error);
  //     throw error;
  //   }
  // }

  // // Chamar a função refreshAccessToken quando o token de acesso expirar
  // refreshAccessToken()
  //   .then(() => {
  //     console.log("Access token refreshed");
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  //LÓGICA PARA OBTER CODIGO DE AUTORIZAÇÃO

  // const CLIENT_ID =
  //   "926802541024-2pkc341j1er8fgdbpgrt4qedv75irfd5.apps.googleusercontent.com";
  // const REDIRECT_URI = encodeURIComponent("https://simon-says-mu.vercel.app");

  // const SCOPE = encodeURIComponent(
  //   "https://www.googleapis.com/auth/drive.metadata.readonly https://www.googleapis.com/auth/drive"
  // );

  // const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${SCOPE}&access_type=offline&prompt=consent`;

  return (
    <MainContent additionalClass="films-page">
      {/* <button onClick={() => (window.location.href = url)}>Authorize</button> */}
      <Container additionalClass={"films-page-filter-section"}>
        <FiltersNav
          atualFilter={atualFilter || "Todos"}
          setAtualFilter={setAtualFilter}
          windowWidthParam={1800}
        />
        <p className="filter-description">
          Advertising is where it all began for Radical. We are one of the most
          iconic, prolific and celebrated producers of commercials in the world.
          Commercials, music videos, agencies, emerging and established
          directorial talent – they all lead to brilliant ideas and
          opportunities, unexpected collaborations and trusted relationships
          that we believe are once again becoming an economic imperative.
        </p>
      </Container>
      <div className="films-list">
        {currentItems.map((film) => (
          <FilmItem
            // image={getImageUrl("168aC9jpU9N0X8Y7LatOVquBKsy2v3kur").toString()}
            onclick={() => navigate(`/trabalho/${film.FilmId}`)}
            key={film.FilmId}
            title={film["Título"]}
            subtitle={film["Subtítulo"]}
          />
        ))}
      </div>
      <button className="films-list-ver-mais" onClick={verMais}>
        Ver mais
      </button>
    </MainContent>
  );
};

export default FilmsPage;
