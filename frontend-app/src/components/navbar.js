import React from "react";
import './navbar.css';

const Navbar = ({ role }) => {
  return (
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>

            {role === "admin" && (
              <li className="nav-item">
                <a className="nav-link" href="/admin">Admin Panel</a>
              </li>
            )}
            {role === "store_owner" && (
              <li className="nav-item">
                <a className="nav-link" href="/my-store">My Store</a>
              </li>
            )}
            {role === "user" && (
              <li className="nav-item">
                <a className="nav-link" href="/stores">Browse Stores</a>
              </li>
            )}
            
            <li className="nav-item">
              <a className="nav-link" href="/profile">Profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/logout">Logout</a>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default Navbar;
