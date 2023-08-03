import InputText from "../elements/InputText";
import LOGO from "../../../public/bgLogo01.png";

const style = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  margin: "auto",
};

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

const Modal = () => {
  return (
    <secition style={style}>
      <img style={styleImg01} src={LOGO} alt="" />
      <img style={styleImg02} src={LOGO} alt="" />
      <article style={{ padding: "20px", backgroundColor: "#252525" }}>
        <h1
          style={{ textAlign: "center", color: "#fff", marginBottom: "20px" }}
        >
          CONFIDENCIALIDAD
        </h1>
        <p style={{ fontSize: "0.8rem", fontWeight: "900" }}>
          DECLARO BAJO FE DE JURAMENTO QUE TODOS LOS DATOS PROPORCIONADOS EN
          ESTE FORMULARIO SON VERACES Y AUTORIZO SUFICIENTEMENTE A LA EMPRESA
          STRAUBING S.A PARA NEW ZONE., PARA QUE POR PROPIA CUENTA O A TRAVÉS DE
          EMPRESAS ESPECIALIZADAS, PUEDA RECABAR CUALQUIER INFORMACIÓN DE LOS
          REGISTROS PÚBLICOS O PRIVADOS QUE CORRESPONDIEREN, REFERENTE A MI
          SITUACIÓN PATRIMONIAL, SOLVENCIA ECONÓMICA O EL CUMPLIMIENTO OPORTUNO
          DE MIS OBLIGACIONES COMERCIALES, ASÍ MISMO, AUTORIZO A LOS
          REPRESENTANTES DE LA EMPRESA STRAUBING S.A. PARA NEW ZONE, EN FORMA
          SUFICIENTE PARA QUE PROCEDAN A LA VERIFICACIÓN, CONFIRMACIÓN Y/O
          CERTIFICACIÓN DE LOS DATOS POR MÍ DECLARADOS O PROVISTOS EN ESTA
          SOLICITUD
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "20px auto",
            gap: "5px",
          }}
        >
          <p>Soy mayor de Edad?</p>
          <div
            style={{
              display: "flex",
            }}
          >
            <div className="flex-row">
              <label htmlFor="spanish">Si</label>
              <input type="radio" />
            </div>
            <div className="flex-row">
              <label htmlFor="spanish">No</label>
              <input type="radio" />
            </div>
          </div>
        </div>
        <InputText type={"date"} label={"Fecha de Nacimiento"} />
        <div className="flex-row" style={{ marginTop: "10px" }}>
          <button style={{ background: "#59b02a" }}>Acepto</button>
          <button style={{ background: "#b02a2a" }}>Cancel</button>
        </div>
      </article>
    </secition>
  );
};

export default Modal;
