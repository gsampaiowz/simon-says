import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
    return (
        <BrowserRouter>
        <Routes>
        <Route element path="/" />
        <Route element path="/:idFilme" />
        </Routes>
            
        </BrowserRouter>
    );
};

export default AppRoutes;