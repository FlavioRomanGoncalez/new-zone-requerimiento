/* eslint-disable react/prop-types */

const InputComponent = ({ className, maxLength, handleChange, referencia,index,handleKeyDown }) => {

  return (
    <input
      ref={(ref) => (referencia.current[index] = ref)}
      type="text"
      maxLength={maxLength}
      className={className}
      onChange={() => handleChange(index)}
      onKeyDown={(e)=>{handleKeyDown(e,index)}}
    />
  );
};

export default InputComponent;
