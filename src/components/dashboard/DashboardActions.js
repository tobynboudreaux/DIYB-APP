import React from "react";
import { Link } from "react-router-dom";

const DashboardActions = () => {
  return (
    <div>
      <Link to="/edit-profile">
        <i className="fas fa-user-circle"></i> Edit Profile
      </Link>
      <Link to="/add-board">
        <i className="fas fa-user-circle"></i> Add a Board
      </Link>
    </div>
  );
};

export default DashboardActions;
