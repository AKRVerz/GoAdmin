import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UserForm from "../../UserManagement/UserForm/UserForm";

function EditUser() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/users/${id}`);
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          setMessage("Failed to fetch user");
        }
      } catch (error) {
        setMessage("Error fetching user");
        console.error(error);
      }
    };
    fetchUser();
  }, [id]);

  const handleUpdate = async (data) => {
    try {
      const response = await fetch(`/api/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setMessage("User updated successfully");
        navigate("/management-users");
      } else {
        setMessage("Failed to update user");
      }
    } catch (error) {
      setMessage("Error updating user");
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Edit User</h1>
      {message && <p>{message}</p>}
      {user ? (
        <UserForm user={user} onSubmit={handleUpdate} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default EditUser;

