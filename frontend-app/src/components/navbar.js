import React from "react";
import './navbar.css';

const Navbar = ({ role }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Store Ratings</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="nav" id="navbarNav">
          <ul className="navbar-nav ms-auto d-flex gap-3">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/admin">System Administrator</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/user">Normal User</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/owner">Store Owner</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/logout">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
