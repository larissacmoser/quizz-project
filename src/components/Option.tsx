import React, { useContext } from "react";
import { Context } from "react";
import { QuizzContext } from "../context/quiz";

import "./Options.css";
interface OptionProps {
  option: object;
  answer: any;
  selectOption: any;
}
const Option: React.FC<OptionProps> = ({
  option,
  selectOption,
  answer,
}: any) => {
  const [quizzState, dispatch] = useContext(QuizzContext);
  return (
    <div
      className={`option ${
        quizzState.answerSelected && option === answer ? "correct" : ""
      }
      ${quizzState.answerSelected && option !== answer ? "wrong" : ""}`}
      onClick={() => selectOption(option)}
    >
      <p>{option}</p>
    </div>
  );
};

export default Option;
