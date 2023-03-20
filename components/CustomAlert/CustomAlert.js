import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import React from "react";

const CustomAlert = ({ type, msg, open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
        {msg}
      </Alert>
    </Snackbar>
  );
};

export default CustomAlert;
