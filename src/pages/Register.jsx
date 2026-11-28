import "../styles/Auth.css";
import { useState } from "react";

function Register({ cambiarPagina }) {
    const [usuario, setUsuario] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="mainContainer">
            <h1 className="mainTitle">Registro</h1>

            <input
                className="loginInput"
                type="text"
                placeholder="Username"
                onChange={(event) => setUsuario(event.target.value)}
            />

            <br />

            <input
                className="loginInput"
                type="email"
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
            />

            <br />

            <input
                className="loginInput"
                type="password"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
            />

            <br />

            <button
                className="mainButton"
            >
                Crear cuenta
            </button>

            <br />
            <br />

            <button 
                className="mainButton"
                onClick={() => cambiarPagina("login")}
            >
                Volver
            </button>

        </div>
    );
}

export default Register;
