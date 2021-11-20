import React from "react";
import { useStopwatch } from "react-timer-hook";
import stopwatch from "../../../assets/icons/stopwatch.svg";

const Time = () => {
  const { seconds, minutes, hours } = useStopwatch({ autoStart: true });

  const with2Places = (value: number) => value.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })

  return (
    <p>
      <img src={stopwatch} alt="clock"/>{hours ? with2Places(hours) + ":" : ""}
      {with2Places(minutes)}:{with2Places(seconds)}
    </p>
  );
};

export default Time;
