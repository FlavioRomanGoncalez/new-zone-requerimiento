import { useFormik } from "formik";
import CheckBox from "../../../elements/CheckBox";
import InputText from "../../../elements/InputText";
import { initialValues } from "./validation";
import Select from "../../../elements/Select";

// "Español", "Guarani", "Guarani", "Portugués"

const OtrosConocimientos = ({ formik }) => {
  return (
    <>
      {/* ::::::OTROS CONCOCIMIENTOS:::::: */}
      <h3 style={{ color: "#62ea1b", margin: "10px 0" }}>
        OTROS CONOCIMIENTOS
      </h3>
      <h5 style={{ color: "#fff", margin: "10px 0" }}>
        Conocimientos de idiomas
      </h5>

      <div className="flex-row">
        <Select
          formik={formik}
          label={"Español"}
          name={"spanish_lenguages"}
          values={["Básico", "Medio", "Avanzado"]}
        />
        <Select
          formik={formik}
          label={"Guarani"}
          name={"guarani_lenguages"}
          values={["Básico", "Medio", "Avanzado"]}
        />
      </div>

      <div className="flex-row">
        <Select
          formik={formik}
          label={"Inglés"}
          name={"english_lenguages"}
          values={["Básico", "Medio", "Avanzado"]}
        />
        <Select
          formik={formik}
          label={"Portugués"}
          name={"portuguese_lenguages"}
          values={["Básico", "Medio", "Avanzado"]}
        />
      </div>

      <div className="flex-row">
        <InputText
          type={"text"}
          formik={formik}
          name={"other01"}
          label={"Otro/s"}
          placeholder={"Otro/s"}
        />
        <Select
          label={"Nivel"}
          formik={formik}
          name={"other01_select"}
          values={["Básico", "Medio", "Avanzado"]}
        />
      </div>

      <div>
        <h5 style={{ color: "#fff", margin: "10px 0" }}>
          Conocimiento y manejo de herramientas informáticas
        </h5>
        <div className="flex-row" style={{ justifyContent: "flex-start" }}>
          <Select
            formik={formik}
            label={"Procesador de textos"}
            name={"processorText"}
            values={["Si", "No"]}
          />
          <Select
            formik={formik}
            label={"Planillas electrónicas"}
            name={"electronicSpreadsheets"}
            values={["Si", "No"]}
          />
        </div>
        <div className="flex-row" style={{ justifyContent: "flex-start" }}>
          <Select
            formik={formik}
            label={"Presentaciones"}
            name={"presentations"}
            values={["Si", "No"]}
          />
          <Select
            formik={formik}
            label={"Correo Electrónico"}
            name={"email_"}
            values={["Si", "No"]}
          />
        </div>
        <p
          style={{
            textAlign: "left",
            fontSize: "0.7rem",
            color: "tomato",
            margin: "5px 0",
          }}
        >
          {formik?.errors.portuguese_basic}
        </p>
        <InputText
          name={"other03"}
          formik={formik}
          type={"text"}
          label={"Otro/s"}
          placeholder={"Otro/s"}
        />
      </div>
    </>
  );
};

export default OtrosConocimientos;
