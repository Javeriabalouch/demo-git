import React from "react";

function SignUp() {
  return (
    <div>
      <form className="form_login">
        <ul className="form-group">
          <li className="input_data">
            {" "}
            <label className="exampleInput">Name</label>
            <input
              type="Name"
              className="form-control"
              name="exampleInputEmail1"
              placeholder="Enter Name"
            />
          </li>
          <li className="input_data">
            {" "}
            <label className="exampleInput">Email address</label>
            <input
              type="email"
              className="form-control"
              name="exampleInputEmail1"
              placeholder="Enter Email"
            />
          </li>

          <li className="input_data">
            <label className="exampleInput">Password</label>
            <input
              type="password"
              className="form-control"
              name="exampleInputPassword1"
              placeholder="Password"
            />
          </li>
          <li className="input_data data_info">
            <input
              type="checkbox"
              className="form-check-input form-control"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </li>
        </ul>
        <button type="submit" class="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default SignUp;
