import { createContext, useReducer } from "react";
import data from "../data/questions";

const STAGES = ["Start", "Playing", "End"];
const initialState = {
  gameStage: STAGES[0],
  data,
  currentQuestion: 0,
  score: 0,
  answerSelected: false,
};

const quizzReducer = (state: any, action: any) => {
  switch (action.type) {
    case "CHANGE_STATE":
      return {
        ...state,
        gameStage: STAGES[1],
      };

    case "CHECK_ANSWER":
      if (state.answerSelected) return state;
      const answer = action.payload.answer;
      const option = action.payload.option;
      let correctAnswer = 0;

      if (answer === option) {
        correctAnswer = 1;
      }
      return {
        ...state,
        score: state.score + correctAnswer,
        answerSelected: option,
      };
    case "REORDER_QUESTIONS":
      const reorderedQuestions = data.sort(() => {
        return Math.random() - 0.5;
      });
      return {
        ...state,
        data: reorderedQuestions,
      };
    case "CHANGE_QUESTION":
      const nextQuestion = state.currentQuestion + 1;
      let endGame = false;

      if (!data[nextQuestion]) {
        endGame = true;
      }
      return {
        ...state,
        currentQuestion: nextQuestion,
        gameStage: endGame ? STAGES[2] : state.gameStage,
        answerSelected: false,
      };
    case "NEW_GAME":
      return initialState;
    default:
      return state;
  }
};
export const QuizzContext = createContext({});

export const QuizzProvider = ({ children }: any) => {
  const value: string | any = useReducer(quizzReducer, initialState);
  return (
    <QuizzContext.Provider value={value}>{children}</QuizzContext.Provider>
  );
};
