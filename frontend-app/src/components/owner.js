import React from "react";
import "./owner.css";

const Owner = () => {
  return (
    <div className="owner-container">
      <h1 className="owner-title">Store Owner Dashboard</h1>
      <div className="owner-content">
        <button className="owner-button">View Store Ratings</button>
        <button className="owner-button">See Average Rating</button>
        <button className="owner-button">Update Password</button>
        <button className="owner-button">Logout</button>
      </div>
    </div>
  );
};

export default Owner;