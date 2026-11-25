import "../styles/Auth.css";
import { useState } from "react";

function Register({ cambiarPagina }) {
    const [usuario, setUsuario] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="loginContainer">
            <h1 className="loginTitle">Registro</h1>

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
                className="loginButton"
            >
                Registrar
            </button>

            <br />
            <br />

            <button 
                className="registerButton"
                onClick={() => cambiarPagina("login")}
            >
                Volver
            </button>

        </div>
    );
}

export default Register;
