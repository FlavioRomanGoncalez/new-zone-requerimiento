import * as Yup from "yup";

export const initialValues = {
  fullName: "",
  age: "",
  birthDate: "",
  placeOfBirth: "",
  nationality: "",
  identityDocument: "",
  maritalStatus: "",
  numberOfChildren: "",
  address: "",
  neighborhood: "",
  city: "",
  phone: "",
  email: "",
  ownVehicle: "",
  vehicleType: "",
  appliedPosition: "",
};

export const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .trim("El campo no puede estar vacio con espacios")
    .required("Este campo es requerido"),
  age: Yup.number().integer().required("Este campo es requerido"),
  birthdate: Yup.date().required("Este campo es requerido"),
  placeOfBirth: Yup.string().required("Este campo es requerido"),
  nationality: Yup.string().required("Este campo es requerido"),
  identityDocument: Yup.string().required("Este campo es requerido"),
  maritalStatus: Yup.string().required("Este campo es requerido"),
  numberOfChildren: Yup.string().required("Este campo es requerido"),
  address: Yup.string().required("Este campo es requerido"),
  neighborhood: Yup.string().required("Este campo es requerido"),
  city: Yup.string().required("Este campo es requerido"),
  phone: Yup.string().required("Este campo es requerido"),
  email: Yup.string()
    .email("Formato de email inválido")
    .required("Este campo es requerido"),
  ownVehicle: Yup.string().required("Este campo es requerido"),
  vehicleType: Yup.string(),
  appliedPositions: Yup.string().required("Este campo es requerido"),
});
