/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
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

// eslint-disable-next-line react/prop-types
export function SelectCheckBoxTextField({
  formik,
  name,
  titulo,
  values,
  placeholder,
}) {
  const [valueItems, setValueItems] = React.useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    setValueItems(typeof value === "string" ? value.split(",") : value);
    const temp = [];
    value.map((value) => {
      temp.push(value - 1);
    });
    formik.setFieldValue(name, temp);
  };

  React.useEffect(() => {
    const temp = [];
    formik.values[name].map((value) => {
      temp.push(value + 1);
    });
    setValueItems(temp);
  },[formik.values[name]])

  return (
    <FormControl className="input_container">
      <label className="input_label">{titulo}</label>
      <Select
        multiple
        name={name}
        value={valueItems}
        onChange={handleChange}
        input={<OutlinedInput label="Tag" />}
        renderValue={(input) => {
          const temp = [];
          input.map((value, index) => {
            index < 3
              ? temp.push(values[value - 1])
              : index === 3 && temp.push("..."); 
          });
          return temp.join(", ");
        }}
        MenuProps={MenuProps}
        className="input_field"
      >
        <MenuItem value={0} disabled>
          <em>{placeholder}</em>
        </MenuItem>
        {values.map((name, index) => (
          <MenuItem key={`key-checkbox-${name}-${index + 1}`} value={index + 1}>
            <Checkbox checked={valueItems.indexOf(index + 1) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
      {formik.touched[name] && formik.errors[name] && (
          <FormHelperText>{formik.errors[name]}</FormHelperText>
        )}
    </FormControl>
  );
}

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const SelectTextField = ({ formik, name, titulo, values, placeholder }) => {
  return (
    <>
      <FormControl className="input_container">
        <label className="input_label">{titulo}</label>
        <Select
          id={name}
          title={titulo}
          name={name}
          value={formik.values[name]}
          onChange={(e) => {
            formik.setFieldValue(name, e.target.value);
          }}
          className="input_field"
        >
          <MenuItem value={0}>
            <em>{placeholder}</em>
          </MenuItem>
          {values.map((value, index) => {
            return (
              <MenuItem key={index} value={index + 1}>
                {value}
              </MenuItem>
            );
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
