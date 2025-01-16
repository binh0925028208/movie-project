import HeaderAdmin from "../../../components/HeaderAdmin";
import React, { useState } from "react";
import ModalCastCrew from "./ModalCastCrew";
import TableCastCrew from "./TableCastCrew";

const inner = { name: "", description: "" };
export default function Character() {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState(inner);
  return (
    <div className="">
      <HeaderAdmin title={"List Character"} open={open} setOpen={setOpen} />
      <ModalCastCrew
        open={open}
        setOpen={setOpen}
        item={item}
        setItem={setItem}
      />
      <TableCastCrew />
    </div>
  );
}