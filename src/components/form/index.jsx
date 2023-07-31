// :::::ANIMEJS:::::
import { useSpring, animated } from "@react-spring/web";
// :::::IMAGEN:::::
import LOGO01 from "../../assets/logo01.png";
// :::::UTILS:::::
import { interes } from "../../utils/interes";
import { academia } from "../../utils/academia";
import Animation from "../animation";
import VideoFrame from "../video";
import Transition from "../animation/transition";

const Form = () => {
  const springForm = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 1000,
    },
  });
  return (
    <>
      <animated.section style={{ ...springForm }} className="container">
        {/* :::::ANIMATION::::: */}
        {/* <Animation /> */}
        {/* :::::LOGO::::: */}
        <img className="logo" src={LOGO01} alt="new_zone_logo" />
        {/* :::::TITULO::::: */}
        <h1 className="title">
          Completá el formulario y sé parte de{" "}
          <span
            style={{
              color: "#62ea1b",
              fontWeight: "bold",
              // borderBottom: "2px solid #fff",
            }}
          >
            NEW ZONE
          </span>{" "}
        </h1>
        {/* :::::FORMULARIO::::: */}
        <form className="container_form" action="/">
          <p className="description">
            Si estás interesado/a en trabajar con nosotros podés completar el
            formulario a continuación y dejarnos tu CV para ser tenido en cuenta
            en actuales o futuras ofertas laborales{" "}
          </p>
          {/* :::::INPUT (NOMBRE Y APELLIDO)::::: */}
          <input
            type="text"
            className="input"
            placeholder="Nombre y Apellido"
          />
          {/* :::::INPUT (NOMBRE Y APELLIDO)::::: */}
          <div className="flex-row">
            <input type="text" className="input" placeholder="Teléfono:" />
            <input type="date" className="input" />
          </div>
          {/* :::::INPUT/SELECT (ESTADO CIVIL Y CORREO)::::: */}
          <div className="flex-row">
            <select className="select">
              <option>Soltero/a</option>
              <option>Casado/a</option>
            </select>
            <input type="email" className="input" placeholder="Email:" />
          </div>
          {/* :::::INPUT (NACIONALIDAD Y N° C.I/R.G)::::: */}
          <div className="flex-row">
            <input type="text" className="input" placeholder="Nacionalidad" />
            <input type="text" className="input" placeholder="N° C.I/R.G" />
          </div>
          {/* :::::INPUT (CIUDAD Y BARRIO)::::: */}
          <div className="flex-row">
            <input type="text" className="input" placeholder="Ciudad" />
            <input type="text" className="input" placeholder="Barrio" />
          </div>
          <input type="text" className="input" placeholder="Domicilio" />
          {/* :::::INPUT/SELECT (CAPACITACIONES Y AREA DE INTERES)::::: */}
          <div className="flex-row">
            <input type="text" className="input" placeholder="Capacitaciones" />
            <select className="select">
              {interes.map((value) => {
                return <option key={value.id}>{value.name}</option>;
              })}
            </select>
          </div>
          {/* :::::INPUT/SELECT (FORMACION ACADEMICA Y PRETENCION SALARIAL)::::: */}
          <div className="flex-row">
            <select className="select">
              {academia.map((value) => {
                return <option key={value.id}>{value.name}</option>;
              })}
            </select>
            <input
              type="text"
              className="input"
              placeholder="Pretensión Salarial"
            />
          </div>
          {/* :::::CHECKBOX (HIJOS)::::: */}
          <div className="container_checkbox">
            <label htmlFor="">Hijos</label>
            <ul className="form_check">
              <li>
                <input id="hijos" name="hijos" type="radio" />
                <label htmlFor="hijos">Si</label>
              </li>
              <li>
                <input id="hijos" name="hijos" type="radio" />
                <label htmlFor="hijos">No</label>
              </li>
            </ul>
          </div>
          {/* :::::CHECKBOX (GENERO)::::: */}
          <div className="container_checkbox">
            <label htmlFor="">Genero:</label>
            <ul className="form_check">
              <li>
                <input id="genero" name="genero" type="radio" />
                <label htmlFor="genero">Si</label>
              </li>
              <li>
                <input id="genero" name="genero" type="radio" />
                <label htmlFor="genero">No</label>
              </li>
            </ul>
          </div>
          {/* :::::CHECKBOX (MOVILIDAD)::::: */}
          <div className="container_checkbox">
            <label htmlFor="">Movilidad:</label>
            <ul className="form_check">
              <li>
                <input id="movilidad" name="movilidad" type="radio" />
                <label htmlFor="movilidad">Si</label>
              </li>
              <li>
                <input id="movilidad" name="movilidad" type="radio" />
                <label htmlFor="movilidad">No</label>
              </li>
            </ul>
          </div>
          {/* :::::TEXT AREA (DESCRIPCION)::::: */}
          <div className="container_textarea">
            <textarea
              rows={10}
              cols={30}
              className="textarea"
              placeholder="Breve descripción del interesado"
            />
          </div>
          {/* :::::IMG (C.V/FOTO)::::: */}
          <div className="container_file">
            <div className="file">
              <input type="file" id="images" accept="image/*" required />
            </div>
            <div className="file">
              <input type="file" id="images" accept="image/*" required />
            </div>
          </div>
          <p style={{ textAlign: "center" }}>
            Adjuntar Curriculum Vitae <br />
            Adjuntar Fotografia (Requerido hombro y rostro)
            <br />
            Formato: Png. Jpg.
          </p>
          {/* :::::BUTTON (ENVIAR)::::: */}
          <p>Obs: Todos los campos son obligatorios.</p>
          <button type="submit">ENVIAR</button>
        </form>
      </animated.section>
    </>
  );
};

export default Form;
