import React, { useState } from "react";
import { Link } from "react-router-dom";

const StartPage = ({ onStart }) => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Age, setAge] = useState(-1);
  const [Grade, setGrade] = useState(-1);
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value});
  };

  const onStartWithData = () => {
    onStart(data);
  }

  return (
    <main className="max-w-screen mx-auto min-h-screen bg-[url('/src/assets/startbg.jpg')] bg-cover flex flex-col items-center justify-center p-4">
      <div className="max-w-screen-xl flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to the screening test!
        </h1>
        <p className="text-xl mb-4">
          Enter your details and start your assessment
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <label className="font-semibold w-24">First Name</label>
          <input
            name="FirstName"
            type="text"
            className="flex-grow border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center">
          <label className="font-semibold w-24">Last Name</label>
          <input
            name="LastName"
            type="text"
            className="flex-grow border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center">
          <label className="font-semibold w-24">Age</label>
          <input
            name="Age"
            type="number"
            className="flex-grow border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center">
          <label className="font-semibold w-24">Grade</label>
          <input
            name="Grade"
            type="number"
            className="flex-grow border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <Link to="/">
          <button
            className="py-2 px-8 bg-[#588d84] text-white font-bold rounded-md hover:bg-[#99bfb9] duration-300"
            onClick={onStartWithData}
          >
            START
          </button>
        </Link>
      </div>
    </main>
  );
};

export default StartPage;
