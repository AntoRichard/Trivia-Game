import React, { FC, useCallback, useEffect, useState } from "react";
import GameService from "../../service/game/game.service";
import GameCard from "../../shared/components/GameCard";
import "./game.scss";

interface GameProps {}

const Game: FC<GameProps> = (props) => {
  const { loading, question, getQuestion } = GameService();

  const [questionCount, setQuestionCount] = useState(0);

  const fetchQuestion = useCallback(async () => {
    await getQuestion();
    setQuestionCount((count) => count + 1);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    fetchQuestion();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="game">
      <GameCard
        loading={loading}
        question={question}
        questionNo={questionCount}
        submitHandler={fetchQuestion}
      />
    </div>
  );
};

export default Game;
