// :::::FORMIK:::::
import { useFormik } from "formik";
// :::::COMPONENTES PERSONALIZADOS:::::
import Select from "../../../elements/Select";
import InputText from "../../../elements/InputText";
// :::::VALIDACIONES:::::
import { initialValues, validationSchema } from "./validation";

const DatosGenerales = ({ formik }) => {
  // const onSubmit = () => {
  //   console.log("onsubmit");
  // };
  // const formik = useFormik({ initialValues, validationSchema, onSubmit });

  return (
    <>
      <h4 style={{ color: "#62ea1b", margin: "10px 0" }}>DATOS GENERALES</h4>
      <InputText
        type={"text"}
        formik={formik}
        name={"fullName"}
        label={"Nombre y Apellido"}
        placeholder={"Nombre y apellido"}
      />

      {/* ::::::FILA (EDAD/FECHA DE NACIMIENTO/LUGAR DE NACIMIENTO):::::: */}
      <div className="flex-row">
        <InputText
          type={"text"}
          name={"age"}
          formik={formik}
          label={"Edad"}
          placeholder={"Edad"}
        />
        <InputText
          type={"date"}
          name={"birthDate"}
          formik={formik}
          label={"Fecha de nacimiento"}
          placeholder={"Fecha de nacimiento"}
        />
        <InputText
          type={"text"}
          formik={formik}
          name={"placeOfBirth"}
          label={"Lugar de nacimiento"}
          placeholder={"Lugar de nacimiento"}
        />
      </div>
      {/* ::::::FILA (NACIONALIDAD/DOCUMENTO DE IDENTIDAD N°):::::: */}
      <div className="flex-row">
        <InputText
          type={"text"}
          name={"nationality"}
          formik={formik}
          label={"Nacionalidad"}
          placeholder={"Nacionalidad"}
        />
        <InputText
          type={"text"}
          formik={formik}
          name={"identityDocument"}
          label={"Documento de identidad N° "}
          placeholder={"Documento de identidad N° "}
        />
      </div>
      {/* ::::::FILA (Estado Civil/N° de Hijos/Edades):::::: */}
      <div className="flex-row">
        <InputText
          type={"text"}
          formik={formik}
          name={"maritalStatus"}
          label={"Estado Civil"}
          placeholder={"Estado Civil"}
        />
        <InputText
          type={"text"}
          formik={formik}
          name={"numberOfChildren"}
          label={"N° de Hijos / Edades"}
          placeholder={"N° de Hijos / Edades"}
        />
      </div>
      {/* ::::::FILA (DOMICILIO/BARRIO/CIUDAD):::::: */}
      <div className="flex-row">
        <InputText
          type={"text"}
          formik={formik}
          name={"address"}
          label={"Domicilio"}
          placeholder={"Domicilio"}
        />
        <InputText
          type={"text"}
          formik={formik}
          name={"neighborhood"}
          label={"Barrio"}
          placeholder={"Barrio"}
        />
        <Select
          name={"city"}
          formik={formik}
          label={"Ciudad"}
          placeholder={"Ciudad"}
          values={["ciudad01", "ciudad02", "ciudad03"]}
        />
      </div>
      {/* ::::::FILA (TELEFONO/EMAIL):::::: */}
      <div className="flex-row">
        <InputText
          type={"text"}
          name={"phone"}
          formik={formik}
          label={"Teléfono / Celular"}
          placeholder={"Teléfono / Celular"}
        />
        <InputText
          type={"email"}
          name={"email"}
          label={"E-mail"}
          formik={formik}
          placeholder={"E-mail"}
        />
      </div>
      {/* ::::::FILA (MOVILIDAD PROPIA/TIPO DE VEHICULO):::::: */}
      <div className="flex-row">
        <Select
          name={"ownVehicle"}
          formik={formik}
          label={"Movilidad propia"}
          placeholder={"Movilidad propia"}
          values={["Si", "No"]}
        />
        <Select
          name={"vehicleType"}
          formik={formik}
          label={"Tipo de vehiculo"}
          placeholder={"Tipo de vehiculo"}
          values={["Si", "No"]}
        />
      </div>
      {/* ::::::CARGO AL QUE POSTULA O AREA DE INTERES:::::: */}
      <div className="flex-row">
        <InputText
          type={"text"}
          formik={formik}
          name={"appliedPosition"}
          label={"Cargo al que postula o área de interés"}
          placeholder={"Cargo al que postula o área de interés"}
        />
      </div>
    </>
  );
};

export default DatosGenerales;
