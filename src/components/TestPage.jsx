import React, { useState } from "react";
import { questions } from "../assets/questions.js";
import QuestionBox from "./QuestionBox.jsx";
import ResultPage from "./ResultPage.jsx";
import StartPage from "./StartPage.jsx";

const TestPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));
  const currentQuestion = questions[currentQuestionIndex];
  const [startTime, setStartTime] = useState(null);

  const handleStart = () => {
    setStartTime(Date.now());
    setCurrentQuestionIndex(0);
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    if (currentQuestionIndex === questions.length - 1) {
      setCurrentQuestionIndex(-1); 
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleAnswerChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  if (currentQuestionIndex === -1) {
    const finishTime = Date.now();
    const timeTaken = ((finishTime - startTime) / 1000).toFixed(2); 
    return <ResultPage answers={answers} timeTaken={timeTaken} />;
  }

  if (currentQuestionIndex === 0 && startTime === null) {
    return <StartPage onStart={handleStart} />;
  }

  return (
    <main className="max-w-screen mx-auto min-h-screen bg-[url('/src/assets/startbg.jpg')] bg-cover flex flex-col items-center justify-center p-4">
      <div className="max-w-screen-xl flex flex-col items-center justify-center">
        {currentQuestion && (
          <QuestionBox
            question={currentQuestion.questionsvg}
            answer={answers[currentQuestionIndex]}
            questionIndex={currentQuestion.index}
            onChange={(answer) =>
              handleAnswerChange(currentQuestionIndex, answer)
            }
          />
        )}
        <div className="flex items-center justify-center gap-3 mt-4">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="py-2 px-8 bg-[#588d84] text-white font-bold rounded-md hover:bg-[#99bfb9] duration-300"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="py-2 px-8 bg-[#588d84] text-white font-bold rounded-md hover:bg-[#99bfb9] duration-300"
          >
            {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
    </main>
  );
};

export default TestPage;
