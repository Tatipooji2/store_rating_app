import React from "react";
import "./admin.css";

const Admin = () => {
  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin Panel</h1>
      <div className="admin-content">
        <button className="admin-button">Manage Users</button>
        <button className="admin-button">Manage Stores</button>
        <button className="admin-button">View Reports</button>
      </div>
    </div>
  );
};

export default Admin;