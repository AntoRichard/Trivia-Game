import React from "react";
import { useStopwatch } from "react-timer-hook";
import stopwatch from "../../../assets/icons/stopwatch.svg";

const Time = () => {
  const { seconds, minutes, hours } = useStopwatch({ autoStart: true });

  return (
    <p>
      <img src={stopwatch} alt="clock"/>{hours ? hours + ":" : ""}
      {minutes}:{seconds}
    </p>
  );
};

export default Time;
