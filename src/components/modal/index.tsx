import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import { ReactElement } from "react";

type ModalProps = {
  title: string;
  children: ReactElement | string;
  buttonText?: string;
  handleClose: () => void;
}

export const Modal = ({ title, children, buttonText = 'Fechar', handleClose }: ModalProps) => {
  return (
    <Dialog
      open={true}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {children}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleClose}>{buttonText}</Button>
      </DialogActions>
    </Dialog>
  )
}