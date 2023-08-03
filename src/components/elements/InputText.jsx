const InputText = ({ label, type, name, formik, placeholder }) => {
  return (
    <div className="inputText">
      <label style={{ fontSize: "0.7rem" }}>{label}</label>
      <input
        type={type}
        name={name}
        value={formik?.values[name]}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
        id={name}
        className="input"
        placeholder={placeholder}
      />
      {formik?.touched[name] && formik?.errors[name] && (
        <p
          style={{
            textAlign: "left",
            fontSize: "0.7rem",
            color: "tomato",
            margin: "5px 0",
          }}
        >
          {formik?.errors[name]}
        </p>
      )}
    </div>
  );
};

export default InputText;
