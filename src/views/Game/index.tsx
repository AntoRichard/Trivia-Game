import React, { FC, useCallback, useEffect, useState } from "react";
import GameService from "../../service/game/game.service";
import GameCard from "../../shared/components/GameCard";
import Close from "../../assets/icons/close.svg";
import "./game.scss";
import { useNavigate } from "react-router";
import { appRoutes } from "../../routes/routeConstants/appRoutes";

interface GameProps {}

const Game: FC<GameProps> = (props) => {
  const { loading, question, getQuestion } = GameService();

  const [questionCount, setQuestionCount] = useState(0);

  const navigation = useNavigate();

  const fetchQuestion = useCallback(async () => {
    await getQuestion();
    setQuestionCount((count) => count + 1);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    fetchQuestion();
    // eslint-disable-next-line
  }, []);

  const handleClose = () => {
    navigation(appRoutes.HOME);
  };

  return (
    <div className="game">
      <div className="close-container" onClick={handleClose}>
        <img src={Close} alt="close" />
        <span>Close</span>
      </div>
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
