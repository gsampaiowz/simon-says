import { useState, createContext } from "react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";

//CRIAÇÃO DA TIPAGEM DO CONTEXTO
interface LanguageContextProps {
  language: string;
  changeLanguage: (newLanguage: string) => void;
 }
 
 //CRIAÇÃO DO CONTEXTO
 export const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

function App() {
  //VERIFICA SE O IDIOMA FOI DEFINIDO
  localStorage.getItem("idioma") == null &&
    localStorage.setItem("idioma", "BR");

  //USESTATE PARA ALTERAR O IDIOMA
  const [language, setLanguage] = useState<string>(localStorage.getItem("idioma")!);

  //FUNÇÃO PARA ALTERAR O IDIOMA
  const changeLanguage = (newLanguage: string) => {
    localStorage.setItem("idioma", newLanguage);
    setLanguage(newLanguage);
  };
  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      <AppRoutes />
    </LanguageContext.Provider>
  );
}

export default App;
