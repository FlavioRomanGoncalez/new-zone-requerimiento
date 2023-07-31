/* eslint-disable no-unused-vars */
import { useState } from "react";

import { Box, Button, TextField, Typography } from "@mui/material";


//formik
import { useFormik } from "formik";
import * as Yup from "yup";

//react router
import { useNavigate } from "react-router-dom";

// storage
import Cookies from "js-cookie";
import useLocalstore from "../../../hooks/useLocalstore";

//component
import FormComponent from "../form/components";
import TextFieldComponent from "../form/components/textField";
import ButtonFormComponent from "../form/components/buttonFormComponent";
import ModalTwo from "../form/components/twoFaForm/TwoFaForm";
// import { postLogin, postTwoFactor } from "../../service/loginService";
import ModalInfo from "./components/modalInfo";

// logo 
import logo from "/logo01.png";

const initialValues = {
  password: "",
  email: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Ingrese un email valido")
    .required("Ingrese un Email"),
  password: Yup.string().required("Ingrese una contraseña").min(8,"La contraseña debe tener minimo 8 caracteres")
});

const LoginComponents = () => {
  const navigate = useNavigate();

  //use storage

  const { setLocalStore } = useLocalstore;

  //TwoFa
  const [open, setOpen] = useState(false);
  const [isError, setIsError] = useState({ text: "Error" });

  //modal info
  const [modal, setModal] = useState({ title: "", content: "", color: "",function:()=>{} });
  const [openModal, setOpenModal] = useState(false);

  //data error
  const [dataError, setDataError] = useState(false);

  const handleSend = (code) => {
    
  };

  const onClose = () => {
    // si el twofa es cerrado se elimina el token
    Cookies.remove("token");
  };

  //inicio de sesión
  const list = (session, token) => {
    Cookies.set("token", token,{domain:import.meta.env.VITE_DOMAIN});
    if (session.authorized) {
      loginAuth();
    } else {
      setOpen(true);
    }
  };

  const loginAuth = () => {
    if (Cookies.get("token")) {
      window.location.href = import.meta.env.VITE_HOME_ROUTE_PATH;
    }
  };

  const onSubmit = async (values) => {
    setDataError(false);
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
        config={[openModal, setOpenModal]}
        title={modal.title}
        content={modal.content}
        color={modal.color}
        function={modal.function}
        botonOpcion={{text:"Cerrar sesion en otro dispositivo",function:()=>navigate("/forcelogout")}}
      />
      <ModalTwo
        handleSend={handleSend}
        title={"Verificación de dos pasos"}
        icon={"verified_user"}
        btnSent={"Confirmar"}
        state={[open, setOpen]}
        isError={isError}
        onClose={onClose}
      />
      <FormComponent
        title={"Iniciar sesión"}
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
        {dataError && <Typography color={'error'}>Correo o contraseña incorrecta</Typography>}
        <ButtonFormComponent
          text={"Iniciar sesión"}
          type={"submit"}
          action={() => {}}
        />
        <Typography
          color={"white"}
          fontSize={"0.7rem"}
          onClick={() => navigate("/forcelogout")}
          sx={{
            textDecorationLine: "underline",
            cursor: "pointer",
            "&:hover": { opacity: 0.5 },
          }}
        >
          Recuperar contraseña 
        </Typography>
      </FormComponent>
    </Box>
  );
};

export default LoginComponents;
