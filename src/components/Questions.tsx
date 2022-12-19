import React, { useContext } from "react";
import { QuizzContext } from "../context/quiz";
import "./Questions.css";
import Option from "../components/Option";

const Questions = () => {
  const [quizzState, dispatch]: any = useContext(QuizzContext);
  const currentQuestion = quizzState.data[quizzState.currentQuestion];
  const onSelectOption = (option: any) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option },
    });
  };

  return (
    <div id="question">
      <p>
        Pergunta {quizzState.currentQuestion + 1} de {quizzState.data.length}
      </p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
        {currentQuestion.options.map((option: any) => {
          return (
            <Option
              option={option}
              key={option}
              answer={currentQuestion.answer}
              selectOption={() => {
                onSelectOption(option);
              }}
            ></Option>
          );
        })}
      </div>
      {quizzState.answerSelected && (
        <button
          onClick={() => {
            dispatch({ type: "CHANGE_QUESTION" });
          }}
        >
          Continuar
        </button>
      )}
    </div>
  );
};

export default Questions;
