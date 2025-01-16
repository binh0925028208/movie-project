import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";

function AdminDashboard() {
  return (
    <div className="md:flex h-screen">
      <Header />
      <Main/>
    </div>
  );
}

export default AdminDashboard;
