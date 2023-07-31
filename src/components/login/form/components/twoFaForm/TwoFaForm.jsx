/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { TwoFa } from "../twoFaForm/twoFa";

const style = {
  position: "absolute",
  width: "fit-content",
  height: "fit-content",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export default function ModalTwo({
  handleSend,
  title,
  icon,
  btnSent,
  state,
  isError,
  onClose,
}) {
  const [open, setOpen] = state;
  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TwoFa
            handleSend={handleSend}
            title={title}
            icon={icon}
            btnSent={btnSent}
            btnClose={{
              text: "Cerrar",
              function: handleClose,
            }}
            isError={isError}
          />
        </Box>
      </Modal>
    </div>
  );
}
