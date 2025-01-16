import HeaderAdmin from "../../../components/HeaderAdmin";
import React, { useState } from "react";
import ModalComments from "./ModalComments";
import TableComments from "./TableComments";

const inner = { name: "", description: "" };
export default function Comments() {
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState(inner);
  const [errors, setErrors] = useState(inner);
  const [search, setSearch] = useState("");
  const handleAdd = () => {
    console.log("gbdbd");
    setOpen(true);
    setComment(inner);
  };
  console.log(open);
  return (
    <div className="">
      <HeaderAdmin
        title={"List Comments"}
        open={open}
        handleAdd={handleAdd}
        setSearch={setSearch}
        search={search}
      />
      <ModalComments
        open={open}
        setOpen={setOpen}
        comment={comment}
        setComment={setComment}
        errors={errors}
        setErrors={setErrors}
      />
      <TableComments
        setOpen={setOpen}
        setComment={setComment}
        inner={inner}
        setErrors={setErrors}
        search={search}
      />
    </div>
  );
}
