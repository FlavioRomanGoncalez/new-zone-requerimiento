// :::::SPRING:::::
import { useSpring, animated } from "@react-spring/web";
// ::::::IMAGEN::::::
import LOGO from "../../../../public/bgLogo01.png";
import Interes from "./interes";
import DatosGenerales from "./datosGenerales";
import ContextoFamiliar from "./contextoFamiliar";
import ContextAcademico from "./contextoAcademico";
import OtrosConocimientos from "./otrosConocimientos";

const styleImg01 = {
  position: "absolute",
  top: 100,
  left: 20,
  bottom: "50px",
  width: "100px",
  height: "100px",
  transform: "rotate(45deg)",
};
const styleImg02 = {
  position: "absolute",
  top: 100,
  right: 40,
  bottom: "50px",
  width: "150px",
  height: "150px",
  transform: "rotate(50deg)",
};
const styleImg03 = {
  position: "absolute",
  right: 50,
  bottom: 50,
  width: "200px",
  height: "200px",
  transform: "rotate(50deg)",
};

const Inicial = ({ formik }) => {
  const spring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 1000,
    },
  });

  return (
    <animated.div style={{ ...spring }}>
      <img style={styleImg01} src={LOGO} alt="" />
      <img style={styleImg02} src={LOGO} alt="" />
      <img style={styleImg03} src={LOGO} alt="" />
      <h3 style={{ color: "#fff", textAlign: "center", marginBottom: "30px" }}>
        1 - FORMULARIO DE CARGA INICIAL
      </h3>
      <DatosGenerales formik={formik} />
      <ContextoFamiliar formik={formik} />
      <ContextAcademico formik={formik} />
      <OtrosConocimientos formik={formik} />
      <Interes formik={formik} />
    </animated.div>
  );
};

export default Inicial;
