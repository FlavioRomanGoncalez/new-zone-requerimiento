import * as Yup from "yup";

export const initialValues = {
  spanish_basic: false,
  spanish_middle: false,
  spanish_advanced: false,
  guarani_basic: false,
  guarani_middle: false,
  guarani_advanced: false,
  english_basic: false,
  english_middle: false,
  english_advanced: false,
  portuguese_basic: false,
  portuguese_middle: false,
  portuguese_advanced: false,
  other01: "",
  other01_basic: false,
  other02_middle: false,
  other02_advanced: false,
  processorText: false,
  electronicSpreadsheets: false,
  presentations: false,
  email_: false,
  other03: "",
};

export const validatetionScheme = Yup.object().shape({
  spanish_basic: Yup.boolean(),
  spanish_middle: Yup.boolean(),
  spanish_advanced: Yup.boolean(),
  guarani_basic: Yup.boolean(),
  guarani_middle: Yup.boolean(),
  guarani_advanced: Yup.boolean(),
  english_basic: Yup.boolean(),
  english_middle: Yup.boolean(),
  english_advanced: Yup.boolean(),
  portuguese_basic: Yup.boolean(),
  portuguese_middle: Yup.boolean(),
  portuguese_advanced: Yup.boolean(),
  other01: Yup.string("Este campo es requerido"),
  other01_basic: Yup.boolean(),
  other02_middle: Yup.boolean(),
  other02_advanced: Yup.boolean(),
  processorText: Yup.boolean(),
  electronicSpreadsheets: Yup.boolean(),
  presentations: Yup.boolean(),
  email_: Yup.boolean(),
  other03: Yup.string("Este campo es requerido"),
});