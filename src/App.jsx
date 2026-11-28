import { useState } from "react";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Avatar from "./pages/Avatar";

// const [currentValue, modifierFunction] = createTheFunction("passedValue")
function App() {
  const [paginaActual, setPaginaActual] = useState("login");
  const [emailUsuario, setEmailUsuario] = useState("");
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [avatarUsuario, setAvatarUsuario] = useState("👤");

return (
  <div>
    {/* if paginaActual = login, pass the 3 arguments to the Login function (in Login.jsx) */}
    {paginaActual === "login" && (
      <Login 
        cambiarPagina={setPaginaActual}
        setEmailUsuario={setEmailUsuario} 
        setNombreUsuario={setNombreUsuario}
      />
    )}

    {/* if paginaActual = register, pass cambiarPagina to the Register function (in Register.jsx) */}
    {paginaActual === "register" && (
      <Register cambiarPagina={setPaginaActual} />
    )}

    {/* if paginaActual = profile, pass 3 arguments to the Profile function (in Profile.jsx) */}
    {paginaActual === "profile" && (
      <Profile 
      emailUsuario={emailUsuario}
      avatarUsuario={avatarUsuario}
      cambiarPagina={setPaginaActual}
      />
    )}

    {/* if paginaActual = avatar, pass 3 arguments to the Avatar function (in Avatar.jsx) */}
    {paginaActual === "avatar" && (
      <Avatar 
        avatarUsuario={avatarUsuario}
        setAvatarUsuario={setAvatarUsuario} 
        cambiarPagina={setPaginaActual}
      />
    )}

  </div>
);
}

export default App;
