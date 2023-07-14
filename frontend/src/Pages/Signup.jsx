import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { NavLink } from "react-router-dom";
import axios from "axios";
import ServerResponse from "./ServerResponse";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [responseData, setResponseData] = useState(null);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Make the POST request to the backend
    axios
      .post("http://localhost:5500/signup", formData)
      .then((response) => {
        // Handle the successful response
        setResponseData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    setFormData({
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
    });
  };
  return (
    <Layout>
      <div className="mx-auto w-full md:w-1/4  md:pb-6 md:pt-5">
        <input
          type="text"
          placeholder="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className=" rounded p-2 w-full border mb-4"
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="rounded p-2 w-full border mb-4"
        />

        <input
          type="text"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="rounded p-2 w-full border mb-4"
        />
        <input
          type="text"
          placeholder="Confirm Password"
          name="confirmpassword"
          value={formData.confirmpassword}
          onChange={handleChange}
          className="rounded p-2 w-full border"
        />
        <p className=" text-sm mb-4">
          Already have Account Login{" "}
          <NavLink className="cursor-pointer text-blue-600" to="/login">
            here.
          </NavLink>
        </p>
        <button
          className="rounded p-2 w-full border mb-4"
          onClick={handleSubmit}
        >
          Signup
        </button>
      </div>

      {responseData && (
        <div>
          <h3>Response:</h3>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}

      {/* <ServerResponse status={201}></ServerResponse> */}
    </Layout>
  );
};

export default Signup;
