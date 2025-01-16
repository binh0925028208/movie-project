import React, { useContext } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { ContextCategories } from "../../../context/CategoriesProvider";
import { FiEdit } from "react-icons/fi";
import { Button } from "@mui/material";
import DeleteModal from "../../../components/DeleteModal";
const columns = [
  { id: 1, label: "#", align: "center" },
  { id:2 , name: "Name", label: "Name", align: "center", minWidth: 170 },
  {
    id: 3,
    label: "Description",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: 4,
    label: "Option",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
];

export default function TableCategories({
  setOpen,
  setCategory,
  inner,
  setErrors,
  search,
}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const categories = useContext(ContextCategories);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleEdit = (item) => {
    setErrors(inner);
    setOpen(true);
    setCategory(item);
  };
  const filterCategories = categories.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <Paper sx={{ width: "100%", overflow: "hidden", marginTop: "10px" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filterCategories
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((category, index) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={category.id}>
                  <TableCell  align="center">
                    {index + 1}
                  </TableCell>
                  <TableCell  align="center">
                    {category.name}
                  </TableCell>
                  <TableCell  align="center">
                    {category.description}
                  </TableCell>
                  <TableCell align="center">
                    <div
                      className="flex justify-center"
                      style={{
                        gap: "10px",
                      }}
                    >
                      <Button
                        variant="outlined"
                        onClick={() => handleEdit(category)}
                        sx={{
                          minWidth: "auto",
                          padding: 0,
                          width: "36px",
                          height: "36px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <FiEdit size={20} />
                      </Button>
                      <DeleteModal id={category.id} title={"Categories"} />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={filterCategories.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
