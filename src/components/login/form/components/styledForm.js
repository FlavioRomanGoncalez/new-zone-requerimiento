import { Box, styled } from "@mui/material";


// const colors = {
//   background:{
//     primary: "#ffffff",
//   },
//   button: {
//     primary: "#35363d",
//     secondary: "#242424",
//   },
//   textColor:{
//     primary: "#212121",
//     secondary: "#8b8e98",
//     tertiary: "#ffffff",
//   },
//   inputColor:{
//     border: "#e5e5e5",
//     focus: "lightgrey",
//   },
//   shadow:{
//     primary: "drop-shadow(0px 1px 0px #efefef) drop-shadow(0px 1px 0.5px rgba(239, 239, 239, 0.5))",
//     secondary:'inset 3px 3px 6px #c8c8c8, inset -3px -3px 6px #e7e7e7',
//     focus:"inset 0px 0px 0px #9a9a9a, inset 0px 0px 0px #ffffff"
//   }
// }

const colors = {
  background:{
    primary: "#000",
  },
  button: {
    primary: "#61eb1b",
    secondary: "#61eb1b",
  },
  textColor:{
    primary: "#ffffff", 
    secondary: "#ffffff",
    tertiary: "#000000",
  },
  inputColor:{
    border: "#ffffff",
    focus: "lightgrey",
  },
  shadow:{
    primary: "drop-shadow(0px 1px 0px #ffffff) drop-shadow(0px 1px 0.5px rgba(255, 255, 255, 0.5))",
    secondary:'inset 3px 3px 6px #c8c8c8, inset -3px -3px 6px #e7e7e7',
    focus:"inset 0px 0px 0px #9a9a9a, inset 0px 0px 0px #ffffff"
  }
}

const {background,button,textColor,inputColor,shadow} = colors;


export const StyledLoginContainer = styled(Box)`
  height: fit-content;
  .content {
    height: fit-content;
    position: relative;
    .form_container {
      width: fit-content;
      height: fit-content;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 15px;
      padding: 20px 40px 20px 40px;
      background-color: ${background.primary};
      border-radius: 11px;
      font-family: "Inter", sans-serif;
      border: 2px solid #61eb1b;
    }

    .logo_container {
      box-sizing: border-box;
      max-width: 60%;
      min-width: 60%;
      
    }

    .title_container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }

    .title {
      margin: 0;
      font-size: 2rem;
      font-weight: 700;
      color: ${textColor.primary};
    }

    .subtitle {
      font-size: 0.725rem;
      max-width: 80%;
      text-align: center;
      line-height: 1.1rem;
      color: ${textColor.secondary};
    }

    .input_container_mid{
      width: 100%;
      height: fit-content;
      display: grid;
      grid-template-columns: 49% 49%;
      justify-content: space-between;
    }

    .select-and-button{
      width: 100%;
      height: fit-content;
      display: grid;
      grid-template-columns: 79% 19%;
      justify-content: space-between;
    }

    .select-button{
      width: 100%;
      height: 100%;

    }

    .add_btn{
      width: 100%;
      height: 40px;
      border: 0;
      background: ${button.primary};
      border-radius: 7px;
      outline: none;
      color: ${textColor.tertiary};
      cursor: pointer;
    }

    .input_container {
      width: 100%;
      height: fit-content;
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    .icon {
      font-size: 20px;
      margin-right: 5px;
      color: ${textColor.secondary};
    }

    .input_label {
      font-size: 0.75rem;
      color: ${textColor.secondary};
      font-weight: 600;
      @media (min-width: 1400px) {
        font-size: 0.65rem;
      }
    }

    .input_field {
      width: 100%;
      height: 40px;
      border-radius: 7px;
      outline: none;
      border: 1px solid ${inputColor.border};
      input::placeholder {
        font-size: 0.85rem;
        color: ${textColor.secondary};
      }
      input{
        font-size: 0.85rem;
        padding-top: 0;
        padding-bottom: 0;
        color: ${textColor.secondary};
      }
    }


    .MuiInputBase-input {
      font-size: 0.75rem;
      em{
        font-size: 0.75rem;
      }
    }

    .error{
      border-color: red;
      color: red;
    }

    .sign-in_btn {
      width: 100%;
      height: 40px;
      border: 0;
      background: ${button.secondary};
      border-radius: 7px;
      outline: none;
      color: ${textColor.tertiary};
      cursor: pointer;
    }

    .sign-in_ggl {
      width: 100%;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      background: ${button.secondary};
      border-radius: 7px;
      outline: none;
      color: ${textColor.primary};
      border: 1px solid ${inputColor.border};
      filter: ${shadow.primary};
      cursor: pointer;
    }

    .separator {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
      color: ${textColor.secondary};
    }

    .separator .line {
      display: block;
      width: 100%;
      height: 1px;
      border: 0;
      background-color: ${inputColor.border};
    }
    .note {
      color: ${textColor.secondary};
      text-decoration: underline;
      cursor: pointer;
    }
    
  }
  
`;


//two column form

export const StyledContent = styled(Box)`
  .form {
    position: relative;
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 1rem;
    border-radius: 15px;
    background-color: ${background.primary};
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    transition: 0.4s ease-in-out;
    color:white;
  }

  /* .form:hover {
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    scale: 0.99;
  } */

  .heading {
    position: block;
    text-align: center;
    color: ${textColor.primary};
    top: 3em;
    font-weight: 600;
    font-size: 1.5em;
    .material-symbols-outlined{
      font-size: 2rem;
    }
    font-family: "Poppins", sans-serif;
    font-weight: 700;
  }

  .check {
    position: block;
    align-self: center;
    top: 4em;
  }
  .material-symbols-outlined{
      font-size: 2rem;
      color: ${textColor.primary};
    }

  .input {
    position: block;
    width: 2.5em;
    height: 2.5em;
    margin: 1em;
    border-radius: 5px;
    border: none;
    outline: none;
    box-shadow: ${shadow.secondary};
    top: 6.5em;
    left: 1.5em;
    padding-left: 15px;
    transition: 0.4s ease-in-out;
  }

  .input:hover {
    box-shadow: ${shadow.secondary};
  }



  .btn1 {
    position: block;
    top: 8.5em;
    left: 2.4em;
    width: 17em;
    height: 3em;
    border-radius: 5px;
    border: none;
    outline: none;
    transition: 0.4s ease-in-out;
    background-color: ${button.primary};
    box-shadow: ${shadow.primary};
    color:${textColor.tertiary};
    cursor: pointer;
  }


  .btn2 {
    position: block;
    top: 9.5em;
    left: 2.4em;
    width: 17em;
    height: 3em;
    border-radius: 5px;
    border: none;
    outline: none;
    background-color:  ${button.primary};
    transition: 0.4s ease-in-out;
    box-shadow: ${shadow.primary};
    color:${textColor.tertiary};
    cursor: pointer;
  }

`;
