import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { NavLink } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
  };

  return (
    <Layout>
      <div className="flex justify-center items-center ">
        <form className="w-64" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
    </Layout>
  );
};

export default Login;
