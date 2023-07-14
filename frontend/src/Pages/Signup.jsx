import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { NavLink } from "react-router-dom";
import axios from "axios";
import ServerResponse from "./ServerResponse";

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmpassword: "",
//   });
//   const [responseData, setResponseData] = useState(null);

//   const handleChange = (event) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value,
//     });
//   };

// const handleSubmit = (event) => {
//   event.preventDefault(); // Prevent the default form submission behavior

//   // Make the POST request to the backend
//   axios
//     .post("http://localhost:5500/signup", formData)
//     .then((response) => {
//       // Handle the successful response
//       setResponseData(response.data);
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });

//   setFormData({
//     name: "",
//     email: "",
//     password: "",
//     confirmpassword: "",
//   });
// };
//   return (
//     <Layout>

//         <button
//           className="rounded p-2 w-full border mb-4"
//           onClick={handleSubmit}
//         >
//           Signup
//         </button>
//       </div>

// {responseData && (
//   <div>
//     <h3>Response:</h3>
//     <pre>{JSON.stringify(responseData, null, 2)}</pre>
//   </div>
// )}

//       {/* <ServerResponse status={201}></ServerResponse> */}
//     </Layout>
//   );
// };

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
      <div className="flex justify-center items-center ">
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
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">
              Confirm Password
            </label>
            <input
              type="confirmpassword"
              id="confirmpassword"
              name="confirmpassword"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
              placeholder="Enter password again"
              value={formData.confirmpassword}
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
          >
            Signup
          </button>
        </form>
        {responseData && (
          <div>
            <h3>Response:</h3>
            <pre>{JSON.stringify(responseData.message)}</pre>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Signup;
