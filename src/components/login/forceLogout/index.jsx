/* eslint-disable no-unused-vars */
import { useState } from "react";

import { Box, Typography } from "@mui/material";

//formik
import { useFormik } from "formik";
import * as Yup from "yup";

//react router
import { useNavigate } from "react-router-dom";

//component
import FormComponent from "../form/components";
import TextFieldComponent from "../form/components/textField";
import ButtonFormComponent from "../form/components/buttonFormComponent";
import { postForceLogout } from "../../service/loginService";
import ModalInfo from "../login/components/modalInfo";

//logo 
import logo from "/images/logoEXO.svg";

const initialValues = {
  password: "",
  email: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Ingrese un email valido")
    .required("Ingrese un Email"),
  password: Yup.string().required("Ingrese una contraseña").min(8,"La contraseña debe tener minimo 8 caracteres"),
});

const ForceLogoutComponent = () => {
  const navigate = useNavigate();

  const [modal, setModal] = useState({
    funtion: () => {},
    title: "",
    content: "",
    color: "",
  });
  const [open, setOpen] = useState(false);

  const onSubmit = async (values) => {
    postForceLogout(values)
      .then((response) => {
        if (response.status === 200) {
          setModal({
            title: "Cierre de sesión",
            content: "Se ah cerrado la sesión correctamente",
            color: "white",
            funtion: () => {
              navigate("/login");
            },
          });
          setOpen(true);
        }
      })
      .catch((error) => {
        error.response.status === 401
          ? setModal({
              title: "Cierre de sesión",
              content: "Error al cerrar la sesión correo o contraseña incorrecta",
              color: "#e93f35",
              funtion: () => {
                setOpen(false);
              },
            })
          : setModal({
              title: "Cierre de sesión",
              content: "Error al cerrar la sesión",
              color: "#e93f35",
              funtion: () => {
                setOpen(false);
              },
            });
        setOpen(true);
      });
  };
  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <ModalInfo
        content={modal.content}
        title={modal.title}
        color={modal.color}
        funtion={modal.funtion}
        config={[open, setOpen]}
      />
      <FormComponent
        title={"Forzar cierre de sesión"}
        subtitle={""}
        imageSrc={logo}
        formik={formik}
      >
        <TextFieldComponent
          formik={formik}
          name={"email"}
          placeholder={"Ingrese su email"}
          icon={"email"}
          titulo={"Email"}
        />
        <TextFieldComponent
          formik={formik}
          name={"password"}
          placeholder={"Ingrese su contraseña"}
          icon={"lock"}
          titulo={"Contraseña"}
          type={"password"}
        />
        <ButtonFormComponent
          text={"Forzar cierre de sesión"}
          type={"submit"}
          action={() => {}}
        />
      </FormComponent>
    </Box>
  );
};


export default ForceLogoutComponent;
