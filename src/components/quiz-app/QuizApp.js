import React, { Component } from 'react';
import './QuizApp.css';
var { questions } = require('../../data/data-GK');

class QuizApp extends Component {

	state = {
		currentQuestion: 0,
		showScore: false,
		score : 0,
		answers: []
	}

	handleAnswerOptionClick = (option, index) => {

		this.setState({
			answers: [...this.state.answers, index]
		})

		if (option.isCorrect) {
			this.setState( { score : this.state.score + 1 } );

		}
		  
		const nextQuestion = this.state.currentQuestion + 1;
		if (nextQuestion < questions.length) {
			this.setState( { currentQuestion: nextQuestion });
		} else {
			this.setState( { showScore : true });
		}

		console.log('submitted answers:', this.state.answers);
	}

	onTryAgain() {
		console.log('Try again');
		this.setState( { currentQuestion: 0 });
		this.setState( { showScore : false });
		this.setState( { score : 0 });
		this.setState( { answers : [] });
	}

	onReviewAnswers() {
		console.log('reviews:', this.state.answers)
	}
	render() {

		return (
			<div className='app'>
				<div>
				{this.state.showScore ? (
					<div className='score-section'>
						<div class='row'>
							<span>You scored {this.state.score} out of {questions.length}</span>
							<button className='button-quiz' onClick={() => this.onTryAgain()}>Try Again</button>
						</div>
						<div>
							{questions.map((question, i) => (
							<div>
								<div className='review-section'>
									<div>
										<span>Question {i + 1}.</span>
									</div>
									<div className='question-text'>{question.questionText}</div>
								</div>
								
								{question.answerOptions.map((answerOption, j) => (
									<div>
									{ 
										(this.state.answers[i] === j)? ((answerOption.isCorrect ) ?
										<button style={{backgroundColor:'green'}} className='button-quiz'>{j+1}. {answerOption.answerText}</button> :
										<button style={{backgroundColor:'red'}} className='button-quiz'>{j+1}. {answerOption.answerText}</button>) :
										<button className='button-quiz'>{j+1}. {answerOption.answerText}</button>
									}
									</div>
								))}
							</div>
							))}
						</div>
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
							{questions[this.state.currentQuestion].answerOptions.map((answerOption, i) => (
								<button className='button-quiz' onClick={() => this.handleAnswerOptionClick(answerOption, i)}>{i+1}. {answerOption.answerText}</button>
							))}
						</div>
					</div>
				)}
				</div>
			</div>
		);
	}
}
export default QuizApp;
