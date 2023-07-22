import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Layout from "./components/Layout";
import Login from "./components/Login";
import AllPosts from "./components/AllPosts";
import CustomTable from "./components/CustomTable";
import MyPosts from "./components/MyPosts";
import Logout from "./components/Logout";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./components/Profile";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(true);

  let isLoggedIn = localStorage.getItem("login");

  // const isAuthenticated = true;
  const handleLogin = () => {
    isLoggedIn = localStorage.getItem("login");
  };
  const handleLogout = () => {
    localStorage.clear();
    // setIsLoggedIn(null);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              <Login isLoggedIn={isLoggedIn} handleLogin={handleLogin} />
            }
          />
          <Route
            path="/"
            element={
              <Layout isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
            }
          >
            <Route
              path="/allposts"
              element={
                <ProtectedRoute isSignedIn={isSignedIn}>
                  <AllPosts />
                </ProtectedRoute>
              }
            />
            {/* <Route
              path="/allposts"
              element={
                <ProtectedRoute isAuthenticated={isLoggedIn}>
                  <AllPosts />
                </ProtectedRoute>
              }
            /> */}
            <Route path="/profile" element={<Profile />} />
            <Route path="/mypost" element={<MyPosts />} />
            <Route path="/" element={<CustomTable />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
