import React, { Component } from 'react'


export class Quiz extends Component {

  render() {
    const {questions, activeQuestion: index ,selectedAnswer ,handleSubmit, handleChange} = this.props
    const active = questions[index]
    return (
      <div className='quiz'>
        <header className="question-header">
          <h2 className='question-title'>{active.title}</h2>
        </header>

        <ul className="question-answers" onChange={handleChange}>
          {
            active.answers.map((answer, i) => (
              <li key={i} data-index={i} className={`question-answer ${selectedAnswer === i ? 'active' : ''}`}>
                <input className='answer-check' id={`check-${i}`} type="radio" name='answer' />
                <label htmlFor={`check-${i}`}>{answer}</label>
              </li>
            ))
          }
        </ul>

        <footer>
          <button onClick={handleSubmit} className='submit-answer'>Submit</button>

        </footer>
      </div>
    )
  }
}

export default Quiz
