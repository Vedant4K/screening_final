import React from "react";
import { Link } from "react-router-dom";

const StartPage = ({ onStart }) => {
  return (
    <main className="max-w-screen mx-auto min-h-screen bg-[url('/src/assets/startbg.jpg')] bg-cover flex flex-col items-center justify-center p-4">
      <div className="max-w-screen-xl flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to the screening test!
        </h1>
        <p className="text-xl mb-4">
          Click on the start button to start your assessment
        </p>
        <Link to="/">
          <button
            className="py-2 px-8 bg-[#588d84] text-white font-bold rounded-md hover:bg-[#99bfb9] duration-300"
            onClick={onStart}
          >
            START
          </button>
        </Link>
      </div>
    </main>
  );
};

export default StartPage;
