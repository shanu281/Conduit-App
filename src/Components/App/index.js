import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Register from "../Register";
import Settings from "../Settings";
import NewArticle from "../NewArticle";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route element={<Home />} path="/home" />
        <Route element={<NewArticle />} path="/new-article" />
        <Route element={<Settings />} path="/settings" />
        {/* <Route element={<SignIn />} path="/sign-in" /> */}
        <Route element={<Register />} path="/register" />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
