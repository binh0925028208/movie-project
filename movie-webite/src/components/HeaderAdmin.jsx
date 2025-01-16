import React from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import ModalCategories from "../pages/admin/categories/ModalCategories";
import ModalComments from "../pages/admin/engagement_pages/ModalComments";

function HeaderAdmin({ title, open, handleAdd, setSearch, search }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 2,
        padding: 2,
        borderBottom: "1px solid #ccc",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color: "#333",
          margin: 0,
        }}
      >
        {title}
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          backgroundColor: "#f9f9f9",
          borderRadius: "4px",
          padding: "0 8px",
          border: "1px solid #ccc",
          width: "100%",
          maxWidth: "300px",
        }}
      >
        <SearchIcon color="action" />
        <TextField
          variant="standard"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          InputProps={{
            disableUnderline: true,
          }}
          sx={{
            width: "100%",
            "& .MuiInputBase-input": {
              fontSize: "14px",
            },
          }}
        />
      </Box>

      <Button
        variant="contained"
        color="primary"
        onClick={handleAdd}
        sx={{
          whiteSpace: "nowrap",
        }}
      >
        Create New +
      </Button>

      <ModalCategories open={open} />
      <ModalComments open={open} />
    </Box>
  );
}

export default HeaderAdmin;
