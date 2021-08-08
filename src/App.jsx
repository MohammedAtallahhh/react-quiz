import React, { Component } from "react";
import Quiz from "./Components/Quiz";
import Start from "./Components/Start";
import Result from "./Components/Result";
import { questions } from "./questions";
import "./App.css";

export class App extends Component {
  state = {
    step: 1,
    activeQuestion: 0,
    selectedAnswer: null,
    score: 0,
    questions: questions,
  };

  start = () => {
    this.setState({ step: 2 });
  };

  handleChange = (ref, e) => {
    const selectedAnswer = +e.target.closest(".question-answer").dataset.index;

    ref.checked = true;
    this.setState({ selectedAnswer });
  };

  handleSubmit = (ref, e) => {
    if (this.state.activeQuestion === this.state.questions.length - 1) {
      this.setState({ step: 3 });
    }

    const rightAnswer = this.state.questions[this.state.activeQuestion].correct;

    if (this.state.selectedAnswer === rightAnswer) {
      this.setState({ score: this.state.score + 1 });
    }

    this.setState({
      activeQuestion: this.state.activeQuestion + 1,
      selectedAnswer: null,
    });

    ref.checked = false;
  };

  render() {
    const { questions, activeQuestion, selectedAnswer } = this.state;
    return this.state.step === 1 ? (
      <Start start={this.start} />
    ) : this.state.step === 2 ? (
      <>
        <Quiz
          questions={questions}
          activeQuestion={activeQuestion}
          handleSubmit={this.handleSubmit}
          selectedAnswer={selectedAnswer}
          handleChange={this.handleChange}
        />
      </>
    ) : this.state.step === 3 ? (
      <Result />
    ) : null;
  }
}

export default App;
