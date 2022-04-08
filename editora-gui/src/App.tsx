import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import Home from "./pages/Home";
import NavbarOwner from "layouts/NavbarOwner";

import AddArticle from "pages/AddArticle";
import ListArticles from "./pages/ListArticles";

import "./global.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  return (
    <Routes>
      <Route
        element={
          <NavbarOwner>
            <Outlet />
          </NavbarOwner>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<ListArticles />} />
        <Route path="/add/" element={<AddArticle />} />
      </Route>
    </Routes>
  );
};

export default App;
