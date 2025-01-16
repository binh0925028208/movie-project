import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { addDocument, updateDocument } from "../../../services/firebaseService";
import { useNotification } from "../../../context/NotificationProvider";
export default function ModalCategories({
  open,
  setOpen,
  category,
  setCategory,
  errors,
  setErrors,
}) {
  const handleClose = () => {
    setOpen(false);
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setCategory({ ...category, [name]: value });
  };
  const showNotification = useNotification();
  const handleSubmit = async () => {
    if (!validation()) {
      return;
    }
    {
      category?.id
        ? await updateDocument("Categories", category)
        : await addDocument("Categories", category);
      showNotification(`successfully!`, "success");
    }

    setOpen(false);
  };

  const validation = () => {
    const newError = {};
    newError.name = category?.name ? "" : "Please put in name";
    newError.description = category?.description
      ? ""
      : "Please put in description";
    setErrors(newError);
    return Object.values(newError).every((e) => e == "");
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        {category?.id ? "Update category" : "Create new category"}{" "}
      </DialogTitle>
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
          error={!!errors?.name}
          helperText={errors?.name}
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
          error={!!errors?.description}
          helperText={errors?.description}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>
          {category?.id ? "Update" : "Create"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
