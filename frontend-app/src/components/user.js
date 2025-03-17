import React from "react";
import "./user.css";

const User = () => {
  return (
    <div className="user-container">
      <h1 className="user-title">User Dashboard</h1>
      <div className="user-content">
        <button className="user-button">Browse Stores</button>
        <button className="user-button">View My Reviews</button>
        <button className="user-button">Edit Profile</button>
      </div>
    </div>
  );
};

export default User;