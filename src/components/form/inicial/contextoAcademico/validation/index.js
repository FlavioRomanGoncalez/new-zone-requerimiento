import * as Yup from "yup";

export const initialValues = {
  primarySchool: "",
  highSchool: "",
  university: "",
  major: "",
  year: "",
};

export const validationScheme = Yup.object().shape({
  primarySchool: Yup.string().required("El campo es querido"),
  highSchool: Yup.string().required("El campo es querido"),
  university: Yup.string().required("El campo es querido"),
  major: Yup.string().required("El campo es querido"),
  year: Yup.string().required("El campo es querido"),
});
