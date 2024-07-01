import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserCreateForm from "../../UserManagement/UserForm/UserCreateForm";

function Signup() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleCreate = async (data) => {
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setMessage("User created successfully");
        navigate("/management-users");
      } else {
        setMessage("Failed to create user");
      }
    } catch (error) {
      setMessage("Error creating user");
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Create User</h1>
      {message && <p>{message}</p>}
      <UserCreateForm onSubmit={handleCreate} />
    </div>
  );
}

export default Signup;

