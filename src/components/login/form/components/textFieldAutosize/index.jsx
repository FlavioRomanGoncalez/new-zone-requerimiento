/* eslint-disable react/prop-types */
import { TextareaAutosize } from '@mui/material'

const TextFielAutosizeComponent = ({ formik, name, placeholder, titulo,variant,size,color }) => {
  return (
    <div className="input_container">
        <label className="input_label">
          {titulo}
        </label>
        <TextareaAutosize
          name={name}
          onChange={formik.handleChange}
          color={color === undefined ? "primary" : color}
          minRows={2}
          size={size === undefined ? "md" : size}
          variant={variant === undefined ? "plain" : variant}
          placeholder={placeholder === undefined ? "" : placeholder}
          error={formik.touched[name] && !!formik.errors[name]}
          className="input_field"
          style={{border:'2px solid #00000060'}}
        />
    </div>
  )
}

export default TextFielAutosizeComponent