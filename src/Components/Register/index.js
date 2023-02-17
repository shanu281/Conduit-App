import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });
  const [data, setData] = useState([]);

  const getData = (event) => {
    const { value, name } = event.target;
    setRegisterData(() => {
      return {
        ...registerData,
        [name]: value,
      };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, name, email, password } = registerData;
    if (username === "") {
      return alert("Name is required");
    } else if (name === "") {
      return alert("Name is required");
    } else if (email === "") {
      return alert("Email is required");
    } else if (!email.includes("@")) {
      return alert("Enter valid Email");
    } else if (password === "") {
      return alert("Password is required");
    } else if (password.length < 5) {
      return alert("Password must be of atleast 5 character");
    } else {
localStorage.setItem("localData", JSON.stringify([...data,registerData]))
     
      alert("Data sent sucessfully");
    }
  };
  console.log(registerData);
  console.log(data)

  return (
    <div Name="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Register </h1>
           

            <form>
              <fieldset className="form-group">
                <input
                  onChange={getData}
                  className="form-control form-control-lg"
                  type="text"
                  name="username"
                  placeholder="Enter a User Name"
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  onChange={getData}
                  className="form-control form-control-lg"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  onChange={getData}
                  className="form-control form-control-lg"
                  type="text"
                  name="email"
                  placeholder="Email"
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  onChange={getData}
                  className="form-control form-control-lg"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </fieldset>
              <p className="text-xs-left ">
              <NavLink to="/sign-in">
              <a href="">Have an account?</a>
            </NavLink>
            </p>
              <button
                onClick={handleSubmit}
                className="btn btn-lg btn-primary pull-xs-right"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
