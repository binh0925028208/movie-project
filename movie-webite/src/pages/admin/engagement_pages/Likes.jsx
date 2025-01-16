import HeaderAdmin from "../../../components/HeaderAdmin";
import React, { useState } from "react";
import ModalEngagement from "./ModalComments";
import TableEngagement from "./TableComments";

const inner = { name: "", description: "" };
export default function Like() {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState(inner);
  return (
    <div className="">
      <HeaderAdmin title={"List Like"} open={open} setOpen={setOpen} />
      <ModalEngagement
        open={open}
        setOpen={setOpen}
        item={item}
        setItem={setItem}
      />
      <TableEngagement />
    </div>
  );
}
