import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { addDocument } from "../../../services/firebaseService";
export default function ModalCastCrew({
  open,
  setOpen,
  category,
  setCategory,
}) {
  const handleClose = () => {
    setOpen(false);
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setCategory({ ...category, [name]: value });
  };

  const handleSubmit = async () => {
    await addDocument("CastCrew", category);
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Create new cast & crew </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          required
          margin="dense"
          name="name"
          label="Category's name"
          type="text"
          value={category?.name}
          fullWidth
          variant="standard"
          onChange={handleInput}
        />
        <TextField
          autoFocus
          required
          margin="dense"
          name="description"
          label="Description number"
          type="text"
          value={category?.description}
          fullWidth
          variant="standard"
          onChange={handleInput}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Create</Button>
      </DialogActions>
    </Dialog>
  );
}
