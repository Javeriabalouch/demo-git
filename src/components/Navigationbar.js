import React from "react";
import { Link, Outlet } from "react-router-dom";

function Navigationbar() {
  return (
    <div>
      <nav className="d-flex justify-content-center">
        <div className="p-2">
          <Link to="/home">Home</Link>
        </div>
        {/* <div className="p-2">
        <Link to="/products">Products</Link>
      </div> */}
        <div className="p-2">
          <Link to="/dashboard">Dashboard</Link>
        </div>
        <Outlet />
      </nav>
    </div>
  );
}

export default Navigationbar;
