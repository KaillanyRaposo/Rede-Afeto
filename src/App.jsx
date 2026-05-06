import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

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
        return <Login setCurrentPage={setCurrentPage} initialTab={pageState.initialTab} />;
      case "register":
        return <Register setCurrentPage={setCurrentPage} />;
      case "forgot":
        return <ForgotPassword setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return <>{renderPage()}</>;
}

export default App;