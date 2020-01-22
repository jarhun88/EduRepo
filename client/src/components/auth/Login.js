import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    console.log("Success");
    //   const newUser = {
    //     name,
    //     email,
    //     password
    //   };
    //   try {
    //     const config = {
    //       headers: {
    //         "Content-Type": "Application/json"
    //       }
    //     };
    //     const body = JSON.stringify(newUser);
    //     const res = await axios.post("/api/users", body, config);
    //     console.log(res.data);
    //   } catch (error) {
    //     console.error(error.response.data);
    //   }
  };

  const { email, password } = formData;
  return (
    <Fragment>
      <h1 class="large text-primary">Sign In</h1>
      <p class="lead">
        <i class="fas fa-user"></i> Sign into your Account
      </p>
      <form class="form" onSubmit={e => onSubmit(e)}>
        <div class="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={e => onChange(e)}
          />
        </div>
        <input type="submit" class="btn btn-primary" value="Login" />
      </form>
      <p class="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </Fragment>
  );
};

export default Login;
