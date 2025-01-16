import HeaderAdmin from "../../../components/HeaderAdmin";
import TableCategories from "./TableCategories";
import ModalCategories from "./ModalCategories";
import React, { useState } from "react";

const inner = { name: "", description: "" };
export default function Categories() {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState(inner);
  const [errors, setErrors] = useState(inner);
  const [search,setSearch] = useState("");
  const handleAdd = () => {
    console.log("cate");
    setOpen(true);
    setCategory(inner);
  };
  console.log(open);
  return (
    <div className="">
      <HeaderAdmin
        title={"List Categories"}
        open={open}
        handleAdd={handleAdd}
        setSearch={setSearch}
        search={search}
      />
      <ModalCategories
        open={open}
        setOpen={setOpen}
        category={category}
        setCategory={setCategory}
        errors={errors}
        setErrors={setErrors}
      />
      <TableCategories
        setOpen={setOpen}
        setCategory={setCategory}
        inner={inner}
        setErrors={setErrors}
        search={search}
      />
    </div>
  );
}
