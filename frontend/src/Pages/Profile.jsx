import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useToken } from "../components/Context/Token";

const profileMenu = [
  { key: 1, name: "Edit Profile", link: "edit_profile" },
  { key: 2, name: "Portfolio", link: "user_portfolio" },
  { key: 3, name: "Notifications", link: "newsletter" },
  { key: 4, name: "User Settings", link: "/" },
  { key: 5, name: "Security & Services", link: "/" },
  { key: 6, name: "Help Center", link: "/" },
];

const Profile = () => {
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
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="mx-auto  flex flex-col items-center ">
            <div className="h-[100px] w-[100px] border-2 rounded-full">
              <img src={userData.avatar_url} alt="user-img" />
            </div>
            <div className="my-5 text-xl">Kaise ho aap log</div>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {profileMenu?.map((menuItem) => (
              <button key={menuItem.key} className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-100 hover:bg-gray-200 rounded flex p-4 h-full items-center">
                  <span className="title-font font-medium">
                    {menuItem.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
          <button
            onClick={onLogOut}
            className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Logout
          </button>
        </div>
      </section>
    </>
  );
};

export default Profile;
