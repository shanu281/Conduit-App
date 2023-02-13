import React, { useState } from "react";

const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(username, password, email);

  const handleSignUp = () => {
    const body = {
      user: {
        username,
        email,
        password,
      },
    };
    fetch("https://api.realworld.io/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      }, 
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div Name="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Register </h1>
            <p className="text-xs-center">
              <a href="">Have an account?</a>
            </p>

            <form>
              <fieldset className="form-group">
                <input
                  onChange={(e) => setUserName(e.target.value)}
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                />
              </fieldset>
              <button
                onClick={handleSignUp}
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
