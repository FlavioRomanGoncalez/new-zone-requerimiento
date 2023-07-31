/* eslint-disable react/prop-types */

const ButtonFormComponent = ({text,type,action}) => {
  const handleClick = () => {
    action === undefined ? console.log('no action') : action()
  }
  return (
    <>
      <button title={text} type={type} onClick={()=>{handleClick()}} className="sign-in_btn">
          <span>{text}</span>
      </button>
    </>
  )
}

export default ButtonFormComponent