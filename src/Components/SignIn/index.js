import React, { useState } from "react";
import { login, getUserDetails } from "../../Services/Authentications";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[user, setUser] = useState("");

  const handleSignIn = () => {
    const body = {
      user: {
        email,
        password,
      },
    };
    login(body).then((usr) => setUser(usr));
  };
  console.log(user);

  const getProfile = () => {
    const {
      user: { token },
    } = user;
    getUserDetails(token);
  };

  return (
    <div Name="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign In </h1>

            <form>
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
                onClick={handleSignIn}
                className="btn btn-lg btn-primary pull-xs-right"
              >
                Sign in
              </button>
              <button onClick={getProfile}>Get This User</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
