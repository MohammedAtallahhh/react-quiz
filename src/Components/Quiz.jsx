import React, { Component } from "react";
import Styles from "./styles";

export class Quiz extends Component {
  render() {
    const {
      questions,
      activeQuestion: index,
      selectedAnswer,
      handleSubmit,
      handleChange,
    } = this.props;
    const active = questions[index];
    return (
      <Styles.QuizWrapper className="quiz">
        <header className="question-header">
          <Styles.QuizHeader className="question-title">
            {active.title}
          </Styles.QuizHeader>
        </header>

        <ul className="question-answers">
          {active.answers.map((answer, i) => (
            <Styles.Answer
              key={i}
              data-index={i}
              onClick={(e) => handleChange(this[`input-${i}`], e)}
              className={`question-answer ${
                selectedAnswer === i ? "active" : ""
              }`}
            >
              <input
                className="answer-check"
                id={`check-${i}`}
                type="radio"
                name="answer"
                ref={(id) => (this[`input-${i}`] = id)}
              />
              <label htmlFor={`check-${i}`}>{answer}</label>
            </Styles.Answer>
          ))}
        </ul>

        <footer>
          <Styles.Button
            onClick={(e) => handleSubmit(this[`input-${selectedAnswer}`], e)}
            className="submit-answer"
          >
            Submit
          </Styles.Button>
        </footer>
      </Styles.QuizWrapper>
    );
  }
}

export default Quiz;
