import React, { FC, Fragment, useState, memo } from "react";
import { Question } from "../../../models/Question/question.model";
import Button from "../Button";
import Input from "../Input";
import "./gameCard.scss";
import Time from "../Timer";
import correct from "../../../assets/icons/correct.svg";
import wrong from "../../../assets/icons/wrong.svg";

interface GameCardProps {
  questionNo: number;
  question?: Question;
  loading: boolean;
  submitHandler?: () => void;
}

type AnimationType = "" | "swipe-up";

type ResultType = undefined | "correct" | "wrong";

const GameCard: FC<GameCardProps> = (props) => {
  const { questionNo, question, loading, submitHandler } = props;

  const [style, setStyle] = useState<AnimationType>("");

  const [answer, setAnswer] = useState("");

  const [fetching, setFetching] = useState(false);

  const [result, setResult] = useState<ResultType>();

  const nextQuestion = () => {
    setStyle("swipe-up");
    setFetching(true);
    setTimeout(() => {
      setStyle("");
    }, 3000);
    setTimeout(() => {
      setFetching(false);
    }, 2000);
    submitHandler && submitHandler();
  };

  const handleSubmit = () => {
    if (answer.toLowerCase() === question?.answer?.toLowerCase()) {
      setResult("correct");
    } else {
      setResult("wrong");
    }
    setTimeout(() => {
      setResult(undefined);
      setAnswer("");
      nextQuestion();
    }, 1000);
  };

  const CardContent = (
    <div className="content__wrapper">
      {loading || fetching ? (
        <p>Getting your next question . . .</p>
      ) : (
        <Fragment>
          <div className="header">
            <h4>
              Question {questionNo} <span> ({question?.category?.title})</span>
            </h4>
            <Time />
          </div>
          <p className="question">{question?.question}</p>
          <Input
            textarea
            rows={6}
            type="text"
            placeholder="Type your answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
          <Button
            disabled={!answer}
            className="game-card__submit"
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <p className="result-show">
            {result === "correct" ? (
              <span>
                <img src={correct} alt="correct" />
                Correct{" "}
              </span>
            ) : result === "wrong" ? (
              <span>
                <img src={wrong} alt="wrong" />
                Wrong{" "}
              </span>
            ) : (
              ""
            )}
          </p>

          {result === "wrong" && (
            <p>
              answer: <span>{question?.answer}</span>
            </p>
          )}
        </Fragment>
      )}
    </div>
  );

  const getCss = (index: number) => {
    if (index !== 0) return "";
    return `content-${result} ${style}`;
  };

  return (
    <div className="game-card__container" data-test-id="game">
      {Array(4)
        .fill("")
        .map((_, index) => (
          <div
            data-testid="exam-card"
            className={`game-card-${index} ${getCss(index)}`}
            key={index}
          >
            {index === 0 && CardContent}
          </div>
        ))}
    </div>
  );
};

export default memo(GameCard);
