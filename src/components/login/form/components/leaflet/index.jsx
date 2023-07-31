/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { StyledLeafletContainer } from "./styledLeaflet";
import "leaflet/dist/leaflet.css";

function MapPiker({ setstate, ...props }) {
  try {
    const map = useMapEvents({
      dragstart() {
        map.locate();
      },
      click(e) {
        setstate([e.latlng.lat, e.latlng.lng]);
      },
    });
  } catch (error) {
    if (error !== TypeError) {
      console.log(error);
    }
  }

  return null;
}

export default function Leaflet({formik}) {
  // eslint-disable-next-line no-unused-vars
  const [state, setstate] = useState([-25.5102383, -54.612]);
  
  useEffect(() => {
    formik.setFieldValue("latitude", state[0])
    formik.setFieldValue("longitude", state[1])

  }, [state]);
  

  return (
    <StyledLeafletContainer>
      <MapContainer center={state} zoom={20}>
        <MapPiker setstate={setstate} />
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <Marker position={state}>
          <Popup>Estas Aqui</Popup>
        </Marker>
      </MapContainer>
    </StyledLeafletContainer>
  );
}
