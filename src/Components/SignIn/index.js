import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const history = useNavigate()

  const [signinData, setSigninData] = useState({
    email:"", password:""
  });
 
  const getData =(event) => {
    const {value, name} = event.target
    setSigninData(() => {
      return{
        ...signinData, [name]:value
      }
    })
  }

  const handleSignIn =(event) => {
    event.preventDefault();
    const getStoredData = localStorage.getItem("localData")
    console.log(getStoredData)
    
    const {email, password} = signinData;
    if(email === ""){
      return alert("Email is required")
    } else if(password ===""){
      return alert("Password is required")
    } else {
      const storedData = JSON.parse(getStoredData)
      storedData.filter(elm => {
        if(elm.email===email && elm.password===password){
          history("/home")
           alert("login sucess")

        } else{
          alert("invalid Email or Password")
        }
      })
    }
  }

 console.log(signinData)

  return (
    <div Name="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign In </h1>

            <form>
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
              <button
                 onClick={handleSignIn}
                className="btn btn-lg btn-primary pull-xs-center"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
