import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useToken } from "../components/Context/Token";

import axios from "axios";
const Login = () => {
  const { setToken } = useToken();
  const navigate = useNavigate();
  const initialValues = {
    email: "testing@gmail.com",
    password: "Testing@123",
  };
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://coinfolioxback.vercel.app/login";
      const res = await axios.post(url, formValues);
      toast.success("Logged In");
     
      const token = res.data.token;
      setToken(token);
      localStorage.setItem("token", token);
      navigate("/");
    } catch (error) {
      const message = error.response.data.message;
      toast.error(message);
    }
  };
  return (
    <>
      <div className="flex justify-center items-center ">
        <Toaster />
        <form className="w-64" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              placeholder="Enter your email"
              value={formValues.email}
              onChange={handleChange}
              required
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
              value={formValues.password}
              onChange={handleChange}
              required
            />
          </div>
          <p className=" text-sm mb-4">
            Don't have Account signup
            <NavLink className="cursor-pointer text-blue-600" to="/signup">
              &nbsp;here.
            </NavLink>
          </p>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
