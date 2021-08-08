import React from "react";
import Styles from "./styles";

function Start({ start }) {
  return (
    <Styles.StartWrapper>
      <Styles.StartTitle>Start the Quiz !?</Styles.StartTitle>
      <Styles.Button onClick={start}>Start</Styles.Button>
    </Styles.StartWrapper>
  );
}

export default Start;
