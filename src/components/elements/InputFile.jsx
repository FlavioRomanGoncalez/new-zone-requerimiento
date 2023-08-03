const InputFile = ({ name, formik }) => {
  return (
    <div className="file" style={{ margin: "10px 0" }}>
      <input type="file" id={name} name={name} accept="image/*" required />
    </div>
  );
};

export default InputFile;
