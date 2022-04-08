import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <b>
            <i>Editora</i>
          </b>
        </Link>
        <ul className="navbar-nav mr-auto">
          <li className="nav_item">
            <Link to="/list" className="nav-link">
              Lista
            </Link>
          </li>
          <li className="nav_item">
            <Link to="/add" className="nav-link">
              Adicionar
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
