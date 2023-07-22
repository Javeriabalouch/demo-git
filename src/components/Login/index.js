import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../../features/loginData/loginDataSlice";
import axios from "axios";

function Login({ handleLogin }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const changeHandler = (e) => {
    setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", loginData.username);
    formData.append("password", loginData.password);

    try {
      const {data} = await axios.post(
        "https://postfast-c99269e302dd.herokuapp.com/login",
        formData
      );
      console.log(data);
      localStorage.setItem("token", data?.access_token);
      navigate("/");
      dispatch(loginSuccess(data));

      // Handle successful login
    } catch (error) {
      // Handle login error
      console.log(error.message);
    }
  };
  // const handleSubmit = async (value) => {
  //   setPreloader(true);
  //   const response = await postLogin({
  //     email: value.email.toLowerCase(),
  //     password: value.password,
  //   });
  //   setPreloader(false);
  //   console.log(response?.data?.token);
  //   if (response?.data?.token) {
  //     toast.success("LoggedIn Successfully");
  //     window.localStorage.setItem("authUser", response?.data?.token);
  //     window.localStorage.setItem("token", response?.data?.token);
  //     dispatch(setFeaturesArray(response?.data?.role));
  //     navigate("/home");
  //   }
  // };

  return (
    <div>
      <h5>Login Form</h5>
      <form onSubmit={handleSubmit}>
        <div>
          <label>UserName</label>
          <input
            type="text"
            name="username"
            value={loginData.username}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={changeHandler}
          />
        </div>

        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
