import React from "react";
import Layout from "../components/Layout/Layout";
// import { Link } from "react-router-dom";

const profileMenu = [
  { key: 1, name: "Edit Profile", link: "edit_profile" },
  { key: 2, name: "Portfolio", link: "user_portfolio" },
  { key: 3, name: "Notifications", link: "newsletter" },
  { key: 4, name: "User Settings", link: "/" },
  { key: 5, name: "Security & Services", link: "/" },
  { key: 6, name: "Help Center", link: "/" },
];

const Profile = () => {
  return (
    <Layout>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="mx-auto  flex flex-col items-center ">
            <div className="h-[100px] w-[100px] bg-black rounded-full"></div>
            <div className="my-5 text-xl">Kaise ho aap log</div>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {profileMenu?.map((menuItem) => (
              <button className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-100 hover:bg-gray-200 rounded flex p-4 h-full items-center">
                  <span className="title-font font-medium">
                    {menuItem.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
          <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Logout
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default Profile;
