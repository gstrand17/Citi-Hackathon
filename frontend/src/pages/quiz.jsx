import React, { useState } from 'react';

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
    <div className="mt-6 bg-white p-6 rounded shadow text-center">
      <h3 className="text-xl font-semibold mb-4">📋 Quick Quiz: Find Your Fit</h3>

      {step < questions.length ? (
        <>
          <p className="mb-4 text-lg">{questions[step].question}</p>
          <div className="flex justify-center gap-6">
            {questions[step].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                {option}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div>
          <p className="text-lg mb-2">✅ Based on your answers, you should consider:</p>
          <p className="text-2xl font-bold text-green-600">{getResult()}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
