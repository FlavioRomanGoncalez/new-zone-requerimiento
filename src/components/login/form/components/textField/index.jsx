/* eslint-disable react/prop-types */

import { FormControl, TextField } from "@mui/material";
import { useState } from "react";

const TextFieldComponent = ({ formik, name, placeholder, icon, titulo, type }) => {
  const [passType, setPassType] = useState("password");

  const handleShowPassword = () => {
    if (passType === "password") setPassType("text");
    else setPassType("password");
  };

  return (
    <>
      <FormControl className="input_container">
        <label className="input_label">{titulo}</label>
        <TextField
          title={titulo}
          name={name}
          type={type === "password" ? passType : type}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[name]}
          error={formik.touched[name] && !!formik.errors[name]}
          helperText={formik.touched[name] && formik.errors[name]}
          InputProps={{
            startAdornment: (
              <span translate="no" className="material-symbols-outlined icon">
                {icon}
              </span>
            ),
            placeholder,
            className: "input_field",
            endAdornment:
              type === "password" ? (
                <span
                  onClick={handleShowPassword}
                  style={{ cursor: "pointer" }}
                  translate="no"
                  className="material-symbols-outlined icon"
                >
                  {" "}
                  {passType === "text" ? "visibility_off" : "visibility"}{" "}
                </span>
              ) : null,
          }}
        />
      </FormControl>
    </>
  );
};

export default TextFieldComponent;
