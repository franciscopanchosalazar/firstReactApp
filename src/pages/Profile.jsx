function Profile({ emailUsuario, avatarUsuario, cambiarPagina }) {
    return (
        <div className="mainContainer">
            <h1 className="mainTitle">Perfil</h1>
            
            {/* Displays the avatar in the profile */}
            <img
                className="mainTitle"
                src={avatarUsuario}
                alt="User Avatar"
                width="120"
                onClick={() => cambiarPagina("avatar")}
            />
            
            <p>Hola {emailUsuario}</p>  

            <button 
                className="mainButton"
                onClick={() => cambiarPagina("map")}
            >
                Ir al mapa
            </button>

        </div>
    );
}

export default Profile;
