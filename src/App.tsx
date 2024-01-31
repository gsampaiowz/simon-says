import { useState, createContext } from "react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
interface LanguageContextProps {
  language: string;
  changeLanguage: (newLanguage: string) => void;
 }
 
 export const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

function App() {
  localStorage.getItem("idioma") == null &&
    localStorage.setItem("idioma", "BR");


  const [language, setLanguage] = useState<string>(localStorage.getItem("idioma")!);

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
