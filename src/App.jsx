import { useState } from "react";

import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {

  const [paginaActual, setPaginaActual] = useState("login");

  return (
    <div>
      {paginaActual === "login"
        ? <Login cambiarPagina={setPaginaActual} />
        : <Register cambiarPagina={setPaginaActual} />
      }
    </div>
  );
}

export default App;