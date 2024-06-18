import React from "react";
import { questions } from "../assets/questions";

const ResultPage = ({ answers, timeTaken, details }) => {
  const minutes = Math.floor(timeTaken / 60);
  const seconds = Math.floor(timeTaken % 60);

  const score = answers.reduce((acc, userAnswer, index) => {
    const userNumber = parseFloat(userAnswer); // Convert user's answer to number
    const correctNumber = parseFloat(questions[index].answer); // Convert correct answer to number
    const isCorrect = !isNaN(userNumber) && !isNaN(correctNumber) && userNumber === correctNumber;
    return acc + (isCorrect ? 1 : 0);
  }, 0);

  let displayTime;
  if (minutes === 0) {
    displayTime = `${seconds} sec`;
  } else {
    displayTime = `${minutes} min ${seconds} sec`;
  }

  return (
    <main className="max-w-screen mx-auto min-h-screen bg-[url('/src/assets/startbg.jpg')] bg-cover flex flex-col items-center justify-center p-4">
      <div className="max-w-screen-xl flex flex-col items-center justify-center">
        <div className="p-7 bg-opacity-80 bg-[#dfebe9] backdrop-blur-70 rounded-lg shadow-lg border border-opacity-75 border-gray-400">
          <p className="text-2xl font-bold mb-4">Time taken: {displayTime}</p>
          <p className="text-2xl font-bold mb-4">Score: {score}</p>
          <table className="table-auto w-full border-collapse border border-gray-200 mt-4 `${questions.length > 10 ? 'overflow-auto' : ''}`">
            <thead>
              <tr>
                <th className="border border-gray-200 p-2">Q No.</th>
                <th className="border border-gray-200 p-2">Correctness</th>
              </tr>
            </thead>
            <tbody>
              {questions.map((question, index) => (
                <tr key={index}>
                  <td className="border border-gray-200 p-2 text-center">{index + 1}</td>
                  <td className="border border-gray-200 p-2 text-center">
                  {answers[index] === '' ? '-' : (parseFloat(answers[index]) === parseFloat(question.answer) ? '✔' : '❌')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default ResultPage;
