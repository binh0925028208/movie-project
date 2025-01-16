import React from "react";
import { FaSearch, FaFile, FaBell } from "react-icons/fa";
import AdminRoutes from "../../../routes/AdminRoutes";
function Main({ selectedItem }) {
  return (
    <>
      <div className="flex flex-col flex-grow bg-gray-100">
        <div className="bg-gray-600 p-2 flex justify-between items-center px-5">
          <div className="option_icon flex gap-3">
            <FaSearch />
            <FaBell />
            <FaFile />
          </div>
          <div className="user_icon flex items-center gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/800px-Cat03.jpg"
              alt="User Icon"
              className="h-8 w-8 rounded-full"
            />
            <p className="text-white">User</p>
          </div>
        </div>
        <div className="xl:m-10 md:m-5">
          <AdminRoutes />
        </div>
      </div>
    </>
  );
}

export default Main;
