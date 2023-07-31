/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, styled } from "@mui/material";
import colors from "../../../../colors/colors";

const {textColors,backgroundColors} = colors

const StyledModal = styled(Box)`
  position: absolute;
  width: fit-content;
  height: fit-content;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${backgroundColors.primary};
  padding: 2rem;
  border-radius: 1rem;
  h2 {
    color: ${textColors.primary};
  }
`


const ModalInfo = ({config,title,content,color,funtion,botonOpcion}) => {
  const [open, setOpen] = config;
  const handleClose = () => {
    setOpen(false);
    if(funtion !== undefined){
      funtion()
    }
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledModal>
          <Typography align="center" fontSize={'1.5rem'} component="h2">
            {title}
          </Typography>
          <Typography align="center" color={color} sx={{ my: 2 }}>
            {content}
          </Typography>
          {botonOpcion !== undefined ? <Button variant="contained" sx={{my:'1rem'}} fullWidth onClick={botonOpcion.function}>{botonOpcion.text}</Button> : null}
          <Button variant="contained" fullWidth onClick={handleClose}>Salir</Button>
        </StyledModal>
      </Modal>
    </>
  );
};

export default ModalInfo;
