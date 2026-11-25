import "../styles/Auth.css";
import { useState } from "react";

function Login({ cambiarPagina }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const iniciarSesion = () => {
        if (!email || !password) {
            alert("Please complete all fields");
            return;
        }

        alert(`Welcome ${email}`);
        };

    return (
        <div className="loginContainer">
            <h1 className="loginTitle">Login</h1>

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
                onClick={iniciarSesion}
            >
                Iniciar sesión
            </button>

            <br />
            <br />

            <button 
                className="registerButton"
                onClick={() => cambiarPagina("register")}
            >
                Crear cuenta 
            </button>

        </div>
    );
}

export default Login; //Exports the function called Login
