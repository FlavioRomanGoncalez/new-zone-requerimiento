import { useFormik } from "formik";
import InputText from "../../../elements/InputText";
import Select from "../../../elements/Select";

import { initialValues, validationSchema } from "./validation";
import InputFile from "../../../elements/InputFile";

const Interes = ({ formik }) => {
  return (
    <>
      <h3 style={{ color: "#62ea1b", margin: "10px 0" }}>INTERESES</h3>
      {/* :::::SELECCIONAR AREA CALIFICADAS::::: */}
      <h5 style={{ color: "#fff" }}>
        Seleccione las areas dond e se considera calificado/a
      </h5>
      <div className="flex-row">
        <Select formik={formik} name={"area01"} values={["", "", ""]} />
        <Select formik={formik} name={"area02"} values={["", "", ""]} />
        <Select formik={formik} name={"area03"} values={["", "", ""]} />
      </div>
      {/* ::::::EN BASE A SU EXPERIENCIA:::::: */}
      <h5 style={{ color: "#fff" }}>
        En base de su experiencia, trayectoria, desempeño y competencias.
        ¿Cuáles serían sus expectativas salariales?
      </h5>
      <div className="flex-row">
        <InputText
          type={"text"}
          name={"min"}
          formik={formik}
          label={"Minimo"}
          placeholder={"Minimo"}
        />
        <InputText
          type={"text"}
          name={"max"}
          formik={formik}
          label={"Ideal"}
          placeholder={"Ideal"}
        />
      </div>
      {/* :::::DISPONIBILIDAD DE INCORPORACION::::: */}
      <InputText
        type={"text"}
        formik={formik}
        name={"incorporation"}
        label={"¿Cuál sería su disponibilidad de incorporación?"}
        placeholder={"Disponibilidad incorporación"}
      />
      {/* :::::SELECCIONAR ARCHIVOS::::: */}
      <InputFile name={"file01"} />
      <InputFile name={"file02"} />
    </>
  );
};

export default Interes;
