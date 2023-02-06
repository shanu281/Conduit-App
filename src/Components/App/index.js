import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Route, Routes } from "react-router-dom";
import Register from "../Register";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        {/* <Route element={<Home />} path="/home" /> */}
        {/* <Route element={<NewArticle />} path="/new-article" /> */}
        {/* <Route element={<Settings />} path="/setting" /> */}
        {/* <Route element={<SignIn />} path="/signin" /> */}
        <Route element={<Register />} path="/register" />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
