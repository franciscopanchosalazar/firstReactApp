import "../styles/Avatar.css";

import avatar_1 from "../assets/avatars/mam_avatar_1.jpeg";
import avatar_2 from "../assets/avatars/mam_avatar_2.jpeg";
import avatar_3 from "../assets/avatars/mam_avatar_3.jpeg";
import avatar_4 from "../assets/avatars/mam_avatar_4.jpeg";
import avatar_5 from "../assets/avatars/mam_avatar_5.jpeg";
import avatar_6 from "../assets/avatars/mam_avatar_6.jpeg";
import avatar_7 from "../assets/avatars/mam_avatar_7.jpeg";
import avatar_8 from "../assets/avatars/mam_avatar_8.jpeg";
import avatar_9 from "../assets/avatars/mam_avatar_9.jpeg";
import avatar_10 from "../assets/avatars/mam_avatar_10.jpeg";
import avatar_11 from "../assets/avatars/mam_avatar_11.jpeg";
import avatar_12 from "../assets/avatars/mam_avatar_12.jpeg";
import avatar_13 from "../assets/avatars/mam_avatar_13.jpeg";
import avatar_14 from "../assets/avatars/mam_avatar_14.jpeg";
import avatar_15 from "../assets/avatars/mam_avatar_15.jpeg";

// Storages all the imported avatars into an array
function Avatar({ avatarUsuario, setAvatarUsuario, cambiarPagina }) {
    const avatares = [
        avatar_1, avatar_2, avatar_3, avatar_4, avatar_5,
        avatar_6, avatar_7, avatar_8, avatar_9, avatar_10,
        avatar_11, avatar_12, avatar_13, avatar_14, avatar_15
    ];

    return (
        <div className="mainContainer">
            <h1 className="maintitle">Select Avatar</h1>

            <div className="avatarGrid">
                {
                    avatares.map((avatar) => (
                        <img
                            src={avatar}
                            alt="Avatar"

                            // Used to stylish the selected avatar 
                            className={
                                avatar === avatarUsuario
                                ? "avatarSelected"
                                : ""
    }
                            onClick={() => {
                                setAvatarUsuario(avatar);
                                cambiarPagina("profile");
                            }}
                        />
                    ))
                }
            </div>

        </div>

    );
}

export default Avatar;
