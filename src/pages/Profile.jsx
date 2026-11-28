function Profile({ emailUsuario, avatarUsuario, cambiarPagina }) {
    return (
        <div className="mainContainer">
            <h1 className="mainTitle">Perfil</h1>
        
            <img
                className="mainTitle"
                src={avatarUsuario}
                alt="User Avatar"
                width="120"
            />
            
            <br/>
            <br/>
            <p>Hola {emailUsuario}</p>
            
            <br/>
            <button 
                className="mainButton"
                onClick={() => cambiarPagina("avatar")}
            >
                Cambiar imagen
            </button>

        </div>
    );
}

export default Profile;
