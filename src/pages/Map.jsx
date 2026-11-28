import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

function RecenterMap({ latitud, longitud }) {

    const map = useMap();

    useEffect(() => {

        if (latitud && longitud) {
            map.setView([latitud, longitud], 13);
        }

    }, [latitud, longitud, map]);

    return null;
}

function Map({ latitud, longitud, setLatitud, setLongitud}) {
    useEffect(() => {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            setLatitud(position.coords.latitude);
            setLongitud(position.coords.longitude);
        }
    );
    }, []);

    console.log(latitud);
    console.log(longitud);

    return (
            <MapContainer
                center={[
                    latitud || -33.4489,
                    longitud || -70.6693
                ]}
                zoom={13}
                style={{
                    height: "500px",
                    width: "100%"
                }}
            >

                <RecenterMap
                    latitud={latitud}
                    longitud={longitud}
                />

                {
                    latitud && longitud && (
                    <Marker position={[latitud, longitud]} />
                    )
                }

                <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

            </MapContainer>
    );
}

export default Map;