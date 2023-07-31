/* eslint-disable react/prop-types */
import { useRef } from "react";
import InputComponent from "./inputCode";
import { StyledContent } from "../../styledForm";
import { Typography } from "@mui/material";



export const TwoFa = ({handleSend,title,icon,btnSent,btnClose,isError}) => {

  const limit = ['','','','','',''];

  const inputRef = useRef([]);

  const handleChange = (index) =>{
    index < limit.length-1 && inputRef.current[index+1].focus();
  }

  const handleKeyDown = (e,index) =>{
    e.key === 'Backspace' && index > 0 && e.target.value === '' &&
    inputRef.current[index-1].focus();
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const temp =[];
    inputRef.current.forEach(element => {
      temp.push(element.value);
    });
    handleSend(temp[0]+temp[1]+temp[2]+temp[3]+temp[4]+temp[5]);
  }

  return (
    <StyledContent>
      <form className="form" onSubmit={handleSubmit}>
        <p className="heading">{title}</p>
        <span className="material-symbols-outlined" style={{fontSize: "5rem"}} translate="no">{icon}</span>
        <div className="box">
          {limit.map((value,index)=>(
            <InputComponent key={`tweFa-${index}`} className='input' maxLength={1} handleChange={handleChange} handleKeyDown={handleKeyDown} referencia={inputRef} index={index} />
          ))}
        {isError.open && <Typography align="center" color={'red'}>{isError.text}</Typography>}
        </div>
        <button className="btn1" type="submit">{btnSent}</button>
        <button className="btn2" onClick={()=>{btnClose.function()}}>{btnClose.text}</button>
      </form>
    </StyledContent>
  );
};
