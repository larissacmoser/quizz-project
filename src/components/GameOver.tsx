import React from "react";
import { useContext } from "react";
import { QuizzContext } from "../context/quiz";
import WellDone from "../img/welldone.svg";
import "./GameOver.css";

const GameOver = () => {
  const [quizzState, dispatch]: any = useContext(QuizzContext);
  return (
    <div id="gameover">
      <h2>Fim de jogo!</h2>
      <p>Pontuação: {quizzState.score}</p>
      <p>
        Você acertou {quizzState.score} de {quizzState.data.length} perguntas.
      </p>
      <img src={WellDone} alt="Fim do quizz" />
      <button
        onClick={() => {
          dispatch({ type: "NEW_GAME" });
          dispatch({ type: "REORDER_QUESTIONS" });
        }}
      >
        Reiniciar
      </button>
    </div>
  );
};

export default GameOver;
