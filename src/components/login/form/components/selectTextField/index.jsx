/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FormControl, FormHelperText, MenuItem, Select } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const SelectTextField = ({formik, name,titulo,values,placeholder}) => {
  return (
    <>
      <FormControl className="input_container">
        <label className="input_label">
        {titulo}
        </label>
        <Select
          id={name}
          title={titulo}
          name={name}
          value={formik.values[name]}
          onChange={(e)=>{formik.setFieldValue(name, e.target.value)}}
          className="input_field"
          MenuProps={MenuProps}
        >
          <MenuItem value={0}>
            <em>{placeholder}</em>
          </MenuItem>
          {values.map((value, index) =>{
            return <MenuItem key={index} value={index+1}>{value}</MenuItem>
          })}
        </Select>
        {formik.touched[name] && formik.errors[name] && (
          <FormHelperText>{formik.errors[name]}</FormHelperText>
        )}
      </FormControl>
    </>
  );
};

export default SelectTextField;
