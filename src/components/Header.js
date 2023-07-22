import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Header({ isLoggedIn, handleLogout }) {
  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   setIsLoggedIn(false);
  //   navigate("/login");
  // };
  return (
    <div>
      <ul
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          listStyle: "none",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        <div style={{ display: "flex" }}>
          <li style={{ margin: "20px 10px 10px 10px" }}>
            <Link to="/allposts"> All Posts</Link>
          </li>
          <li style={{ margin: "20px 10px 10px 10px" }}>
            <Link to="/mypost">My posts</Link>
          </li>
          <li style={{ margin: "20px 10px 10px 10px" }}>
            <Link to="/">Table</Link>
          </li>

          <li style={{ margin: "20px 10px 10px 10px" }}>
            <Link to="/profile">Profile</Link>
          </li>
        </div>

        <div style={{ display: "flex" }}>
          {isLoggedIn ? (
            <li
              style={{ marginLeft: "auto", marginRight: "10px" }}
              onClick={handleLogout}
            >
              <Link to="/login">Logout</Link>
            </li>
          ) : (
            <li style={{ marginLeft: "auto", marginRight: "10px" }}>
              <Link to="/">Login</Link>
            </li>
          )}
        </div>
      </ul>
    </div>
  );
}

export default Header;
