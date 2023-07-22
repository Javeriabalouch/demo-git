import React,{useEffect} from "react";
import { Outlet,useNavigate } from "react-router-dom";
import Header from "./Header";
// import Header from "./Header";
// import Nav from "./Nav";
// import Login from "./Login";
function Layout({ handleLogout, isLoggedIn }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <div style={{ flex: "3", marginTop: "60px" }}>
        <Header handleLogout={handleLogout} isLoggedIn={isLoggedIn} />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
