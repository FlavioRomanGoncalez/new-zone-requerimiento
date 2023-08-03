// :::::SPRING:::::
import { useSpring, animated } from "@react-spring/web";
// ::::::IMAGEN::::::
import LOGO from "../../../../public/bgLogo01.png";
import InputText from "../../elements/InputText";
import { TablaLaboral, TablaPersonal } from "./Table";

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

const AutoEvaluacion = () => {
  const spring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 1000,
    },
  });
  return (
    <animated.div style={{ ...spring }}>
      {/* :::::IMAGENES DE FONDO:::::: */}
      <img style={styleImg01} src={LOGO} alt="" />
      <img style={styleImg02} src={LOGO} alt="" />
      <img style={styleImg03} src={LOGO} alt="" />
      {/* :::::FILA (AUTOEVALUACION)::::: */}
      <h1 style={{ color: "#fff", textAlign: "center", marginBottom: "30px" }}>
        2. AUTOEVALUACIÓN
      </h1>
      <h3 style={{ color: "#62ea1b", margin: "10px 0" }}>AUTOEVALUACIÓN</h3>
      <div>
        <h5 style={{ color: "#fff" }}>
          Cuales crees que son sus aspectos positivos*
        </h5>
        <InputText type={"text"} />
        <InputText type={"text"} />
        <InputText type={"text"} />
      </div>
      <div>
        <h5 style={{ color: "#fff" }}>
          Cuales crees que sean sus aspectos a mejorar*
        </h5>
        <InputText type={"text"} />
        <InputText type={"text"} />
        <InputText type={"text"} />
      </div>
      <div>
        <h5 style={{ color: "#fff" }}>Que gana la empresa contratandole*</h5>
        <InputText type={"text"} />
        <InputText type={"text"} />
        <InputText type={"text"} />
      </div>
      {/* ::::::TABLA PARA REFERENCIAS LABORALES:::::: */}
      <h3 style={{ color: "#62ea1b", marginBottom: "10px" }}>
        REFENCIAS LABORALES
      </h3>
      <TablaLaboral />
      {/* ::::::TABLA PARA REFERENCIAS PERSONALESS */}
      <h4 style={{ color: "#62ea1b", margin: "10px 0" }}>
        REFERENCIAS PERSONALES{" "}
        <span style={{ color: "#fff" }}>(No incluir Parientes)</span>
      </h4>
      <TablaPersonal />
      {/* :::::FILA (ANTECEDENTES MEDICOS)::::: */}
      <h4 style={{ color: "#62ea1b", margin: "10px 0" }}>
        ANTECEDENTES MEDICOS
      </h4>
      <div>
        <h5 style={{ color: "#fff" }}>
          Antecedentes o limitaciones fisicas que padece
        </h5>
        <InputText type={"text"} label={"Detallar"} placeholder={"Detallar"} />
      </div>
      <div>
        <h5 style={{ color: "#fff" }}>Enfermedades graves que ha sufrido</h5>
        <InputText type={"text"} label={"Detallar"} placeholder={"Detallar"} />
        <InputText type={"text"} label={"Detallar"} placeholder={"Detallar"} />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <label htmlFor="alergico">Si</label>
        <input type="radio" />
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <label htmlFor="alergico">No</label>
        <input type="radio" />
      </div>
      <InputText type={"text"} label={"Detallar"} placeholder={"Detallar"} />
    </animated.div>
  );
};

export default AutoEvaluacion;
