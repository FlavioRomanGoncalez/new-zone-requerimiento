import React from "react";

const Select = ({ label, name, values, formik, placeholder }) => {
  return (
    <div className="inputText">
      <label style={{ fontSize: "0.7rem" }}>{label}</label>
      <select
        id={name}
        name={name}
        className="select"
        value={formik?.values[name]}
        onChange={(e) => {
          formik.setFieldValue(name, e.target.value);
        }}
      >
        {values?.map((value, index) => {
          return <option key={index}>{value}</option>;
        })}
      </select>
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

export default Select;
