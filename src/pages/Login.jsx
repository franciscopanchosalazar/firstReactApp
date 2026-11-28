import "../styles/Auth.css";
import { useState } from "react";

function Login({ cambiarPagina, setEmailUsuario}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const iniciarSesion = () => {
        if (!email || !password) {
            alert("Por favor complete todos los campos");
            return;
        }

        setEmailUsuario(email);
        cambiarPagina("profile");
        };

    return (
        <div className="mainContainer">
            <h1 className="mainTitle">Login</h1>

            <input
                className="loginInput"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)} 
                // event.target.value gets the current text from the input.
                // setEmail() updates the email state.
                // React re-renders the component.
                // value={email} makes the input display the current value of the email state.
            />

            <br />

            <input
                className="loginInput"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />

            <br />

            <button 
                className="mainButton"
                onClick={iniciarSesion}
            >
                Iniciar sesión
            </button>

            <br />
            <br />

            <button 
                className="mainButton"
                onClick={() => cambiarPagina("register")}
            >
                Registrar 
            </button>

        </div>
    );
}

export default Login; //Exports the function called Login
