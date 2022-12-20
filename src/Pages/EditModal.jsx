import React, { useState } from "react";
import { toast } from "react-hot-toast";
import LoadingBtn from "./LoadingBtn";

const EditModal = ({ editUser, setEditUser, toggle, setToggle }) => {
  const [loading, setLoading] = useState(false);

  const handleUpdate = (event) => {
    setLoading(true);
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const updatedUser = { name, email };

    fetch(`https://assignment-crud-server.vercel.app/users/${editUser?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) {
          toast.success("User updated successfully");
          setLoading(false);
          setToggle(!toggle);
          setEditUser(null);
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="edit_modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative max-w-md">
          <label
            htmlFor="edit_modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleUpdate} className="py-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Your name?</span>
              </label>
              <input
                type="text"
                required
                placeholder="Name"
                name="name"
                defaultValue={editUser?.name}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Your email?</span>
              </label>
              <input
                type="email"
                required
                placeholder="Email"
                name="email"
                defaultValue={editUser?.email}
                className="input input-bordered w-full"
              />
            </div>
            <div className="flex justify-center mt-10">
              {loading ? (
                <LoadingBtn></LoadingBtn>
              ) : (
                <button
                  type="submit"
                  className="relative px-5 py-2 font-medium text-white group"
                >
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
                  <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                  <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                  <span className="relative">Update</span>
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
