import React from "react";
import { NavLink } from "react-router-dom";

const ServerResponse = ({ status }) => {
  return (
    <div className="bg-[#F9FAFD] absolute top-[100px]  w-[1200px] h-2/3 flex justify-center items-center">
      <div className=" border  w-2/5   p-5  shadow-md rounded-xl ">
        {status === 201 ? (
          <div className="">
            <h1 className="text-3xl font-semibold py-3">Signup Succesfully</h1>

            <NavLink to="/login">
              <button className="border px-5 rounded-md bg-blue-700 hover:bg-blue-800 text-white py-1 ">
                Login Page
              </button>
            </NavLink>
          </div>
        ) : (
          <div className="">
            <h1 className="text-3xl font-semibold py-3">Signup failed</h1>

            <NavLink to="/login">
              <button className="border px-5 rounded-md bg-blue-700 hover:bg-blue-800 text-white py-1 ">
                Login Page
              </button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServerResponse;
