import React, { Component } from 'react'
import Quiz from './Components/Quiz'
import Start from './Components/Start'
import Result from './Components/Result'
import {questions} from './questions'
import './App.css';




export class App extends Component {
  state = {
    step: 2,
    activeQuestion: 0,
    selectedAnswer: null,
    score: 0,
    questions: questions
  }

  handleChange = e => {
    const selectedAnswer = +e.target.parentElement.dataset.index
    
    this.setState({selectedAnswer})
  }

  handleSubmit = e => {
    if (this.state.activeQuestion === this.state.questions.length - 1) {
      this.setState({step: 3})
    }

    const rightAnswer = this.state.questions[this.state.activeQuestion].correct;

      if (this.state.selectedAnswer === rightAnswer) {
        this.setState({score: this.state.score + 1})
      }

    this.setState({activeQuestion: this.state.activeQuestion + 1})
    
  }
  render() {
    const {questions, activeQuestion, selectedAnswer} = this.state
    return (
      this.state.step === 1 ?
      
      <Start /> :

      this.state.step === 2 ?
      <>
      <Quiz questions={questions} activeQuestion={activeQuestion} handleSubmit={this.handleSubmit} selectedAnswer={selectedAnswer} handleChange={this.handleChange}/>
        <h2>Score: {this.state.score}</h2>
      </> : 
      this.state.step === 3 ? 
      <Result /> :
      null
    )
  }
}

export default App
