import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { NavLink } from "react-router-dom";
import axios from "axios";
const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  // const [formErrors, setFormErrors] = useState({});
  const [responseError, setResponseError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setFormErrors(validate(initialValues));
    try {
      const url = "/login";
      const { data: res } = await axios.post(url, formValues);
      localStorage.setItem("token", res.data);
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setResponseError(error.response.data.message);
      }
    }
  };

  // const validate = (values) => {
  //   const errors = {};
  //   const regex =
  //     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  //   if (!values.email) {
  //     errors.email = "Email is required";
  //   } else if (!regex.test(values.email)) {
  //     errors.email = "This is not a valid email";
  //   }
  //   if (!values.password) {
  //     errors.password = "Password required";
  //   }

  //   return errors;
  // };

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
              type="text"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              placeholder="Enter your email"
              value={formValues.email}
              onChange={handleChange}
              required
            />
            {/* <p className=" pl-[13.2px] text-red-500 text-xs">
              {formErrors.email}
            </p> */}
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
            {/* <p className=" pl-[13.2px] text-red-500 text-xs">
              {formErrors.password}
            </p> */}
          </div>
          <p className=" text-sm mb-4">
            Don't have Account signup
            <NavLink className="cursor-pointer text-blue-600" to="/signup">
              &nbsp;here.
            </NavLink>
          </p>
          {responseError && <p>{responseError}</p>}
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
