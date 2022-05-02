import React from "react";
import "./App.css";
import { Text } from "./input/Text";
import { TimeProvider } from "../context/TimeContext";
import { Time } from "./Time/Time";
import { useTime } from "../context/TimeContext";
import { Month } from "./Month/Month";
import { Result } from "./Result/Result";

function App() {
  return (
    <TimeProvider>
      <div>
        <Time />
        <Month />
        <Result />
      </div>
    </TimeProvider>
  );
}

export default App;
