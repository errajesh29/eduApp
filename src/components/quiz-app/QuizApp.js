import React, { Component } from 'react';
import './QuizApp.css';
var { questions } = require('../../data/data-GK');

class QuizApp extends Component {

	state = {
		currentQuestion: 0,
		showScore: false,
		score : 0
	}

	handleAnswerOptionClick = (isCorrect) => {

		if (isCorrect) {
			this.setState( { score : this.state.score + 1 } );
		}

		const nextQuestion = this.state.currentQuestion + 1;
		if (nextQuestion < questions.length) {
			this.setState( { currentQuestion: nextQuestion });
		} else {
			this.setState( { showScore : true });
		}
	};


	render() {

		return (
			<div className='app'>
				{this.state.showScore ? (
					<div className='score-section'>
						You scored {this.state.score} out of {questions.length}
					</div>
				) : (
					<div>
						<div className='question-section'>
							<div className='question-count'>
								<span>Question {this.state.currentQuestion + 1}</span>/{questions.length}
							</div>
							<div className='question-text'>{questions[this.state.currentQuestion].questionText}</div>
						</div>
						<div className='answer-section'>
							{questions[this.state.currentQuestion].answerOptions.map((answerOption) => (
								<button className='button-quiz' onClick={() => this.handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
							))}
						</div>
					</div>
				)}
			</div>
		);
	}
}
export default QuizApp;
