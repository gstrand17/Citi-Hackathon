import React, { useState } from 'react';
import './Quiz.css';

const Quiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = [
    {
      question: "Do you want to contribute more than $7,000 per year?",
      options: ["Yes", "No"]
    },
    {
      question: "Does your employer offer a 401(k) with a Roth option?",
      options: ["Yes", "No"]
    },
    {
      question: "Is your income under $153,000 (single) or $228,000 (married)?",
      options: ["Yes", "No"]
    }
  ];

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    setStep(step + 1);
  };

  const getResult = () => {
    const [q1, q2, q3] = answers;

    if (q1 === "Yes" && q2 === "Yes") return "Roth 401(k)";
    if (q1 === "No" && q3 === "Yes") return "Roth IRA";
    if (q1 === "Yes" && q2 === "Yes" && q3 === "Yes") return "Both!";
    return "It depends! Consider consulting a financial advisor.";
  };

  return (
    <div className="quiz-container">
      <h3 className="quiz-title">Quick Quiz: Find Your Fit</h3>

      {step < questions.length ? (
        <>
          <p className="quiz-question">{questions[step].question}</p>
          <div className="quiz-options">
            {questions[step].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="quiz-button"
              >
                {option}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div>
          <p className="quiz-result-label">Based on your answers, you should consider:</p>
          <p className="quiz-result">{getResult()}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
