const CheckBox = ({ label, name, type, formik, htmlFor }) => {
  return (
    <div className="flex-row">
      <label htmlFor={htmlFor}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={formik?.values[name]}
        onChange={formik?.handleChange}
      />
      {/* {formik?.touched[name] && formik?.errors[name] && (
        <p style={{ textAlign: "left", fontSize: "0.7rem", color: "tomato" }}>
          {formik?.errors[name]}
        </p>
      )} */}
    </div>
  );
};

export default CheckBox;
