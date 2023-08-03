// :::::FORMIK:::::
import { useFormik } from "formik";
// :::::COMPONENTE PERSONALIZADO:::::
import InputText from "../../../elements/InputText";
// :::::VALIDACIONES:::::
import { initialValues, validationScheme } from "./validation";

const ContextAcademico = ({ formik }) => {
  return (
    <>
      <h3 style={{ color: "#62ea1b", margin: "10px 0" }}>CONTEXTO ACADEMICO</h3>
      {/* :::::FILA (PRIMARIA/SECUNDARIA)::::: */}
      <div className="flex-row">
        <InputText
          formik={formik}
          type={"text"}
          name={"primarySchool"}
          label={"Primaria"}
          placeholder={"Primaria"}
        />
        <InputText
          formik={formik}
          type={"text"}
          name={"highSchool"}
          label={"Secundaria"}
          placeholder={"Secundaria"}
        />
      </div>
      {/* :::::FILA (UNIVERSIDAD/CARRERA/AÑO)::::: */}
      <div className="flex-row">
        <InputText
          formik={formik}
          type={"text"}
          name={"university"}
          label={"Universidad"}
          placeholder={"Universidad"}
        />
        <InputText
          formik={formik}
          type={"text"}
          label={"Carrera"}
          name={"major"}
          placeholder={"Carrera"}
        />
        <InputText
          formik={formik}
          type={"text"}
          label={"Año"}
          name={"year"}
          placeholder={"Año"}
        />
      </div>
    </>
  );
};

export default ContextAcademico;
