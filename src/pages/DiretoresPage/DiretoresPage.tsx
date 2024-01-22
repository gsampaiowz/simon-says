import MainContent from "@/components/MainContent/MainContent";
import "./DiretoresPage.css";
import Container from "./../../components/Container/Container";
import directors from "@/data/directorFilms";
import { useEffect, useState } from "react";

const DiretoresPage = () => {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     const img = new Image();
//     img.src = image!;
//     img.onload = () => setIsLoaded(true);
//   }, [image]);

//   const images: string[] = [];

//   directors.forEach((director) => {
//     images.push(director.Films[1]["Thumb Principal"]);
//   });

//   console.log(images);

//   let currentIndex = 0;
//   const body: HTMLElement = document.body;

//   function changeBackground() {
//     body.style.backgroundImage = `url(${images[currentIndex]})`;
//     currentIndex++;
//     if (currentIndex >= images.length) {
//       currentIndex = 0; // reset index after reaching the last image
//     }
//     console.log("mudou");
//   }

//   // Change background every 3 seconds
//   setInterval(changeBackground, 5000);

  return (
    <MainContent>
      <Container additionalClass={"diretores-container"}>
        <h2 className="diretores-title">Diretores</h2>
        <div className="diretores-links">
          {directors.map((director) => (
            <h2 key={director.Nome} className="diretor-link">
              {director.Nome}
            </h2>
          ))}
        </div>
      </Container>
    </MainContent>
  );
};

export default DiretoresPage;
