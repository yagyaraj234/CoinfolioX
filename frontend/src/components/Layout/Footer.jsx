import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import * as yup from "yup";
import { Formik, ErrorMessage, Field, Form, useFormikContext } from "formik";

const dropDown = [
  {
    id: 1,
    name: "Resources",
    items: [
      {
        id: 1,
        item: "Perceptuals",
      },
      {
        id: 2,
        item: "Crypto News",
      },
    ],
  },
  {
    id: 2,
    name: "Donations",
    items: [
      { id: 1, item: "Bitcoin" },
      { id: 2, item: "Ethereum" },
    ],
  },
];

const initialValue = {
  email: "",
};

const validate = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email ")
    .required("Email is required"),
});

const SubscriptionForm = () => {
  const { touched } = useFormikContext();

  return (
    <div>
      <p className="font-semibold">
        Interested to stay up-to-date with cryptocurrencies?
      </p>
      <p className="text-sm text-gray-600">
        Get the latest crypto news, updates, and reports by subscribing to our
        free newsletter.
      </p>
      <Form>
        <div>
          <Field
            type="email"
            id="email"
            name="email"
            className={`border border-gray-500 rounded-md w-full py-1 mt-3 px-3 outline-none ${
              touched.email && "border-2 border-red-600"
            }  `}
          />
          <ErrorMessage name="email">
            {(msg) =>
              touched.email ? (
                <div className="border-red-500 text-red-600 text-sm">{msg}</div>
              ) : null
            }
          </ErrorMessage>
        </div>
        <button
          type="submit"
          className="border mt-2 w-full py-1 rounded-md bg-green-600 text-white"
        >
          Subscribe
        </button>
      </Form>
    </div>
  );
};

const Footer = () => {
  const [showDropDown, setShowDropDown] = useState({});

  const subscibe = () => {
    toast.success("Thank you For subscribing");
  };

  const toggleDropDown = (id) => {
    setShowDropDown((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="absolute w-full">
      <Toaster />
      <div className="flex flex-col md:px-10 px-2 py-2 md:w-full relative bottom-0 border-t-2">
        <Link to="/" className="text-2xl font-bold text-blue-800 text-left">
          CoinFolioX
        </Link>
        <div className="border-b-2 py-4 text-justify">
          <p>
            Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quidem voluptates aliquid obcaecati accusantium eligendi facilis
            nostrum, magnam numquam quo corporis reiciendis.
          </p>
        </div>
        <div className="flex flex-col justify-center items-start">
          <ul>
            {dropDown.map((drop) => (
              <li
                key={drop.id}
                className={`cursor-pointer text-md w-full border-b-2 ${
                  showDropDown[drop.id] ? "py-2" : "py-2"
                } font-semibold `}
                onClick={() => toggleDropDown(drop.id)}
              >
                {drop.name}
                <div>
                  <ul
                    className={`flex flex-col text-sm text-gray-600 ${
                      !showDropDown[drop.id] && "hidden"
                    }`}
                  >
                    {drop.items.map((subItem) => (
                      <li className="border-b py-3" key={subItem.id}>
                        {subItem.item}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <Formik
          initialValues={initialValue}
          validationSchema={validate}
          onSubmit={subscibe}
        >
          <SubscriptionForm />
        </Formik>
        <p className="mx-auto my-2 text-gray-600">
          &copy; 2023 CoinFolioX. All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
