import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

function UserForm({ user, onSubmit }) {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (user) {
      reset(user);
    }
  }, [user, reset]);

  return (
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
        {user ? "Update" : "Create"}
      </button>
    </form>
  );
}

export default UserForm;
