import "./App.css";
import Welcome from "./components/Welcome";
import { useContext, useEffect } from "react";
import Questions from "./components/Questions";
import { QuizzContext } from "./context/quiz";
import GameOver from "./components/GameOver";

function App() {
  const [quizzState, dispatch]: any = useContext(QuizzContext);
  useEffect(() => {
    dispatch({ type: "REORDER_QUESTIONS" });
  }, []);
  return (
    <div className="App">
      <h1>Quizz de Programação</h1>
      {quizzState.gameStage === "Start" && <Welcome />}
      {quizzState.gameStage === "Playing" && <Questions />}
      {quizzState.gameStage === "End" && <GameOver />}
    </div>
  );
}

export default App;
