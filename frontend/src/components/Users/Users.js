import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function Users() {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { register, handleSubmit, reset } = useForm();
  const [editingUser, setEditingUser] = useState(null);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/users");
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        setMessage("Failed to fetch users");
      }
    } catch (error) {
      setMessage("Error fetching users");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const onSubmit = async (data) => {
    const method = editingUser ? "PUT" : "POST";
    const url = editingUser ? `/api/users/${editingUser.id}` : "/api/users";
    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      fetchUsers();
      reset();
      setEditingUser(null);
    }
  };

  const handleDeleteUser = async (id) => {
    const response = await fetch(`/api/users/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      fetchUsers();
    }
  };

  const handleEditUser = (user) => {
    reset(user);
    setEditingUser(user);
  };

  return (
    <div>
      <h1>User Management</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            {...register("name")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            {...register("email")}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {editingUser ? "Update" : "Create"}
        </button>
      </form>
      {isLoading ? (
        <p>Loading users...</p>
      ) : users && users.length > 0 ? (
        <table className="table mt-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    className="btn btn-warning mr-2"
                    onClick={() => handleEditUser(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}

export default Users;

