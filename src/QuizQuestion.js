import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component {
    constructor(props) {
        super(props)
        this.state = { incorrectAnswer: false }
    }

    handleClick(buttonText) {
        if (buttonText === this.props.quiz_question.answer) {
            this.setState((state) => {
                return { incorrectAnswer: false }
            })
            this.props.showNextQuestionHandler()
        }
        else {
            this.setState((state) => {
                return { incorrectAnswer: true }
            })
        }
    }

    render() {
        return (
            <main>
                {this.state.incorrectAnswer === true ?
                <p className="error">Sorry, that's not right</p>: 
                null}
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {this.props.quiz_question.answer_options.map((answer_option, index) => {
                            return <QuizQuestionButton key={index} button_text={answer_option}
                                clickHandler={this.handleClick.bind(this)} />
                        })}
                    </ul>
                </section>
            </main>)
    }
}

export default QuizQuestion