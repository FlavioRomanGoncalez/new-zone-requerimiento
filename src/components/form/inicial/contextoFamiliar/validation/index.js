import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  mother: Yup.string().required("El campo es requerido"),
  father: Yup.string().required("El campo es requerido"),
  spouse: Yup.string(),
  spouseName: Yup.string().when("spouse", {
    is: "Yes",
    then: Yup.string().required("El campo es requerido"),
    otherwise: Yup.string(),
  }),
  siblingsAges: Yup.string().required("El campo es requerido"),
  livingWith: Yup.string().required("El campo es requerido"),
});

export const initialValues = {
  mother: "",
  father: "",
  spouse: "",
  spouseName: "",
  siblingsAges: "",
  livingWith: "",
};
