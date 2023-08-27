import React, { useEffect, useState } from "react";
import axios from "axios";
import {  useNavigate, NavLink } from "react-router-dom";
import { useToken } from "../components/Context/Token";
import {
  AiOutlineSetting,
  AiOutlineStar,
  AiOutlinePieChart,
} from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { MdLogout } from "react-icons/md";

import ToolTip from "../components/Tooltip";

// const userNav =[
//   {title:"Settings",icon}
// ]

const Profile = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const { setToken } = useToken();
  const navigate = useNavigate();
  const onLogOut = () => {
    localStorage.clear("token");
    navigate("/");
    setToken(null);
  };

  const { token } = useToken();

  const fetchData = async (token) => {
    try {
      const response = await axios.get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  useEffect(() => {
    fetchData(token);
  }, []);
  // const base64ImageData =
  // return (
  //   <>
  //     <section className="text-gray-600 body-font">
  //       <div className="container px-5 py-24 mx-auto">
  //         <div className="mx-auto  flex flex-col items-center ">
  //           <div className="h-[100px] w-[100px] border-2 rounded-full">
  //             <img src={userData.avatar_url} alt="user-img" />
  //           </div>
  //           <div className="my-5 text-xl">Kaise ho aap log</div>
  //         </div>
  //         <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
  //           {profileMenu?.map((menuItem) => (
  //             <button key={menuItem.key} className="p-2 sm:w-1/2 w-full">
  //               <div className="bg-gray-100 hover:bg-gray-200 rounded flex p-4 h-full items-center">
  //                 <span className="title-font font-medium">
  //                   {menuItem.name}
  //                 </span>
  //               </div>
  //             </button>
  //           ))}
  //         </div>
  //         <button
  //           onClick={onLogOut}
  //           className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
  //         >
  //           Logout
  //         </button>
  //       </div>
  //     </section>
  //   </>
  // );

  return (
    <div className="flex">
      <div className="flex h-screen w-16 flex-col justify-between border-e bg-white">
        <div>
          <div className="inline-flex h-16 w-16 items-center justify-center">
            <span className="grid h-10 w-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600 ">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                alt="user-img"
                className="rounded-lg"
              />
            </span>
          </div>

          <div className="border-t border-gray-100">
            <div className="px-2">
              <ul className="space-y-1 border-t border-gray-100 pt-10">
                <li>
                  <NavLink
                    to="/profile/edit-profile"
                    className="group relative flex justify-center rounded px-2 py-4 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <BiUser className="md:text-2xl" />
                    <ToolTip title="User profile" />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/profile/portfolio"
                    className="group relative flex justify-center rounded px-2 py-4 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <AiOutlinePieChart className="md:text-2xl" />
                    <ToolTip title="Portfolio" />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/profile/watchlist"
                    className="group relative flex justify-center rounded px-2 py-4 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <AiOutlineStar className="md:text-2xl" />
                    <ToolTip title="Watchlist" />
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/profile/settings"
                    className="group relative flex justify-center rounded px-2 py-4 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <AiOutlineSetting className="md:text-2xl" />

                    <ToolTip title="Settings" />
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
          <form onClick={onLogOut}>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            >
              <MdLogout className="md:text-2xl" />

              <ToolTip title="Logout" />
            </button>
          </form>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Profile;
