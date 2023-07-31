/* eslint-disable react/prop-types */
import { FormControl, TextField } from "@mui/material";

const DateTextField = ({ formik, name,titulo }) => {
  return (
    <>
    <FormControl className="input_container">
      <label className="input_label">
        {titulo}
      </label>
      <TextField
        title={titulo.toUpperCase()}
        name={name}
        type="date"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched[name] && !!formik.errors[name]}
        helperText={formik.touched[name] && formik.errors[name]}
        InputProps={{
          className: "input_field",
        }}
      />
      </FormControl>
    </>
  );
};

export default DateTextField;
