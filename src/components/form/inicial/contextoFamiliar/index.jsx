import Select from "../../../elements/Select";
import InputText from "../../../elements/InputText";

const ContextoFamiliar = ({ formik }) => {
  return (
    <>
      <h3 style={{ color: "#62ea1b", margin: "10px 0" }}>CONTEXTO FAMILIAR</h3>
      {/* :::::FILA (MADRE/PADRE)::::: */}
      <div className="flex-row">
        <InputText
          name={"mother"}
          formik={formik}
          type={"text"}
          label={"Nombre de su Madre"}
          placeholder={"Nombre de su Madre"}
        />
        <InputText
          type={"text"}
          formik={formik}
          name={"father"}
          label={"Nombre de su Padre"}
          placeholder={"Nombre de su Padre"}
        />
      </div>
      {/* :::::FILA (CONYUGE/NOMBRE CONYUGE)::::: */}
      <div className="flex-row">
        <Select
          name={"spouse"}
          formik={formik}
          values={["Si", "No"]}
          label={"Cónyuge"}
          placeholder={"Cónyuge"}
        />
        <InputText
          type={"text"}
          formik={formik}
          name={"spouseName"}
          label={"Nombre de su Cónyuge"}
          placeholder={"Nombre de su Cónyuge"}
        />
      </div>
      {/* :::::FILA (HERMANOS EDADES/CON QUIEN VIVE ACTUALMENTE)::::: */}
      <div className="flex-row">
        <InputText
          type={"text"}
          formik={formik}
          name={"siblingsAges"}
          label={"N° de Hermanos/Edades"}
          placeholder={"N° de Hermanos/Edades"}
        />
        <InputText
          type={"text"}
          formik={formik}
          name={"livingWith"}
          label={"¿Con quién vive actualmente?"}
          placeholder={"¿Con quién vive actualmente?"}
        />
      </div>
    </>
  );
};

export default ContextoFamiliar;
