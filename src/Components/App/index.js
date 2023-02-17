import React , {useState}from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Register from "../Register";
import SignIn from "../SignIn";
import Settings from "../Settings";
import NewArticle from "../NewArticle";

// import Profile from "../Profile";


const App = () => {
//   const [newArticle, setNewArticle] = useState("hw")

//   const handlePublish = (e) => {
//     setNewArticle(e.target.value)
//   }
// console.log(newArticle)
  return (
    <div>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Home />} path="/home" />
        <Route element={<NewArticle />} path="/new-article" />
        <Route element={<Settings />} path="/settings" />
        <Route element={<SignIn />} path="/sign-in" />
        <Route element={<Register />} path="/register" />
      </Routes>
      {/* <Profile /> */}
      <Footer />
    </div>
  );
};

export default App;
