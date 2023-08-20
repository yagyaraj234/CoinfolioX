import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const validateForm = () => {
    if (formData.name.length < 8) {
      alert("error in name");
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
      const url = "/signup";
      const res = await axios.post(url, formData);
      toast.success("Signup Succesfully");
      navigate("/login");
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
      });
      console.log(res.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center ">
        <Toaster />
        <form className="w-64" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-4">Signup</h2>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <p className=" text-sm mb-4">
            Already have Account Login
            <NavLink className="cursor-pointer text-blue-600" to="/login">
              &nbsp; here.
            </NavLink>
          </p>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded"
            onClick={() => {
              validateForm();
            }}
          >
            Signup
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
