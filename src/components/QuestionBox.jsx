import React from "react";

const QuestionBox = ({ question, questionIndex, onChange, answer }) => {
  return (
    <div className="p-7 bg-opacity-80 bg-[#dfebe9] backdrop-blur-70 rounded-lg shadow-lg border border-opacity-75 border-gray-400">
      <p className="font-semibold text-2xl">Question {questionIndex}</p>
      <img src={question} alt="Question" className="mt-2 mb-2"/>
      <input
        className="p-3 rounded-md font-semibold"
        type="text"
        value={answer}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter your answer"
      />
    </div>
  );
};

export default QuestionBox;
