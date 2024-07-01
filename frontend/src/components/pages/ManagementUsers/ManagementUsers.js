import React from "react";
import { Link } from "react-router-dom";
import UserList from "../../UserManagement/UserList/UserList";

function ManagementUsers() {
  return (
    <div>
      <h1>User Management</h1>
      <Link to="/management-users/sign-up" className="btn btn-success mb-3">
        Create User
      </Link>
      <UserList />
    </div>
  );
}

export default ManagementUsers;

