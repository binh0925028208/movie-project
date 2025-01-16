import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { addDocument, updateDocument } from "../../../services/firebaseService";
export default function ModalComments({
  open,
  setOpen,
  comment,
  setComment,
  errors,
  setErrors,
}) {
  const handleClose = () => {
    setOpen(false);
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setComment({ ...comment, [name]: value });
  };

  const handleSubmit = async () => {
    if (!validation()) {
      return;
    }
    {
      comment?.id
        ? await updateDocument("Comments", comment)
        : await addDocument("Comments", comment);
    }

    setOpen(false);
  };
  console.log(open);
  const validation = () => {
    const newError = {};
    newError.content = comment?.content ? "" : "Please put in content";
    newError.accountId = comment?.accountId ? "" : "Please put in accountId";
    newError.movieId = comment?.movieId ? "" : "Please put in movieId";
    setErrors(newError);
    return Object.values(newError).every((e) => e == "");
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        {comment?.id ? "Update comment" : "Create new comment"}{" "}
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          required
          margin="dense"
          name="content"
          label="content"
          type="text"
          value={comment?.content}
          fullWidth
          variant="standard"
          onChange={handleInput}
          error={!!errors?.content}
          helperText={errors?.content}
        />
        <TextField
          autoFocus
          required
          margin="dense"
          name="accountId"
          label="accountId"
          type="text"
          value={comment?.accountId}
          fullWidth
          variant="standard"
          onChange={handleInput}
          error={!!errors?.accountId}
          helperText={errors?.accountId}
        />
        <TextField
          autoFocus
          required
          margin="dense"
          name="movieId"
          label="movieId"
          type="text"
          value={comment?.movieId}
          fullWidth
          variant="standard"
          onChange={handleInput}
          error={!!errors?.movieId}
          helperText={errors?.movieId}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>
          {comment?.id ? "Update" : "Create"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
