import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Historias from "./pages/Historias";
import PerfilMateus from "./pages/PerfilMateus";
import PerfilJulia from "./pages/PerfilJulia";
import PerfilSofia from "./pages/PerfilSofia";
import PerfilLucas from "./pages/PerfilLucas";
import PerfilAna from "./pages/PerfilAna";
import PerfilGabriel from "./pages/PerfilGabriel";
import SobreNos from "./pages/SobreNos";
import Apadrinhamento from "./pages/Apadrinhamento";
import Postagem from "./pages/Postagem";
import BibliotecaMateus from "./pages/BibliotecaMateus";
import Biblioteca from "./pages/Biblioteca";
import LivroSitio from "./pages/LivroSitio";
import HistoricoPostagens from "./pages/HistoricoPostagens";

function App() {
  const [pageState, setPageState] = useState({ page: "home", initialTab: null });

  const setCurrentPage = (page, initialTab = null) => {
    setPageState({ page, initialTab });
  };

  const renderPage = () => {
    switch (pageState.page) {
      case "home":
        return <Home setCurrentPage={setCurrentPage} />;
      case "login":
        return (
          <Login
            key={pageState.initialTab ?? "login"}
            setCurrentPage={setCurrentPage}
            initialTab={pageState.initialTab}
          />
        );
      case "forgot":
        return <ForgotPassword setCurrentPage={setCurrentPage} />;
      case "historias":
        return <Historias setCurrentPage={setCurrentPage} />;
      case "perfil-mateus":
        return <PerfilMateus setCurrentPage={setCurrentPage} />;
      case "perfil-julia":
        return <PerfilJulia setCurrentPage={setCurrentPage} />;
      case "perfil-sofia":
        return <PerfilSofia setCurrentPage={setCurrentPage} />;
      case "perfil-lucas":
        return <PerfilLucas setCurrentPage={setCurrentPage} />;
      case "perfil-ana":
        return <PerfilAna setCurrentPage={setCurrentPage} />;
      case "perfil-gabriel":
        return <PerfilGabriel setCurrentPage={setCurrentPage} />;
      case "sobre-nos":
        return <SobreNos setCurrentPage={setCurrentPage} />;
      case "apadrinhamento":
        return <Apadrinhamento setCurrentPage={setCurrentPage} />;
      case "postagem":
        return <Postagem setCurrentPage={setCurrentPage} />;
      case "postagens-historico":
        return <HistoricoPostagens setCurrentPage={setCurrentPage} />;
      case "biblioteca":
        return <Biblioteca setCurrentPage={setCurrentPage} />;
      case "biblioteca-mateus":
        return <BibliotecaMateus setCurrentPage={setCurrentPage} />;
      case "livro-sitio":
        return <LivroSitio setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return <>{renderPage()}</>;
}

export default App;
