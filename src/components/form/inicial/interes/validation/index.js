import * as Yup from "yup";

export const initialValues = {
  area01: "",
  area02: "",
  area03: "",
  min: "",
  max: "",
  incorporation: "",
};

export const validationSchema = Yup.object().shape({
  area01: Yup.string("El campo es requerido"),
  area02: Yup.string("El campo es requerido"),
  area03: Yup.string("El campo es requerido"),
  min: Yup.string("El campo es requerido"),
  max: Yup.string("El campo es requerido"),
  incorporation: Yup.string("El campo es requerido"),
});
