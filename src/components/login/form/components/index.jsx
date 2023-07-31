/* eslint-disable react/prop-types */
import { Box, ThemeProvider, createTheme } from "@mui/material";
import { StyledLoginContainer } from "./styledForm";

const FormComponent = ({ children, title, subtitle, imageSrc,formik }) => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#3c4b64",
        paper: "#3d3d3d",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <StyledLoginContainer>
        <Box className="content">
          <form className="form_container" onSubmit={formik.handleSubmit}>
          <div className="title_container">
              <p className="title">{title}</p>
              <span className="subtitle">{subtitle}</span>
            </div>
            {imageSrc !== undefined && (
              <Box
                component={"img"}
                alt="image-logo"
                src={imageSrc}
                className="logo_container"
              />
            )}
            
            {children}
          </form>
        </Box>
      </StyledLoginContainer>
    </ThemeProvider>
  );
};

export default FormComponent;
