import React, { Component } from 'react';
import './QuizApp.css';
var { questions } = require('../../data/data-GK');

class CreateQuizApp extends Component {

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
					<div className='score-section'>
						<div class='row'>
						<div className='question-section'>
							<input style={{color:'black' , width:'100%'}} type='text' placeholder='Enter your topic' />
		 					<div className='question-count'>
		 						<span>Question {this.state.currentQuestion + 1}</span>/{questions.length}
		 					</div>
		 					<div className='question-text'>
		 						<span>Enter your question and mark correct answer check</span>
		 						{/* <input style={{color:'black' , width:'100%'}} type='text' value={questions[this.state.currentQuestion].questionText} placeholder='Enter your question' /> */}
		 					</div>
		 				</div>
						</div>
						<div>
							{questions.map((question, i) => (
							<div  style={{ marginBottom:'1rem'}}>
								<div className='review-section'>
									<div>
										<span>Question {i + 1}.</span>
									</div>
									<input style={{color:'black' , width:'100%'}} type='text' value={question.questionText} placeholder='Enter your question' />
								</div>
								
								{question.answerOptions.map((answerOption, j) => (
									<div className='button-quiz'>
		 								<span>{j+1}.</span><input className='button-quiz-edit' type='text' value={answerOption.answerText} placeholder='Enter option' />
		 								<input  style={{}} type='checkbox'/>									
									
									</div>
								))}
							</div>
							))}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default CreateQuizApp;


		// return (
		// 	<div className='app'>
		// 		<div>
		// 		{this.state.showScore ? (
		// 			<div className='score-section'>
		// 				<div class='row'>
		// 					<span>You scored {this.state.score} out of {questions.length}</span>
		// 					<button className='button-quiz' onClick={() => this.onTryAgain()}>Try Again</button>
		// 				</div>
		// 				<div>
		// 					{questions.map((question, i) => (
		// 					<div>
		// 						<div className='review-section'>
		// 							<div>
		// 								<span>Question {i + 1}.</span>
		// 							</div>
		// 							<div className='question-text'>{question.questionText}</div>
		// 						</div>
								
		// 						{question.answerOptions.map((answerOption, j) => (
		// 							<div>
		// 							{ 
		// 								(this.state.answers[i] === j)? ((answerOption.isCorrect ) ?
		// 								<button style={{backgroundColor:'green'}} className='button-quiz'>{j+1}. {answerOption.answerText}</button> :
		// 								<button style={{backgroundColor:'red'}} className='button-quiz'>{j+1}. {answerOption.answerText}</button>) :
		// 								<button className='button-quiz'>{j+1}. {answerOption.answerText}</button>
		// 							}
		// 							</div>
		// 						))}
		// 					</div>
		// 					))}
		// 				</div>
		// 			</div>

		// 		) : (
		// 			<div >
						
		// 				<div className='question-section'>
		// 					<input style={{color:'black' , width:'100%'}} type='text' placeholder='Enter your topic' />
		// 					<div className='question-count'>
		// 						<span>Question {this.state.currentQuestion + 1}</span>/{questions.length}
		// 					</div>
		// 					<div className='question-text'>
		// 						<span>Enter your question and mark correct answer check</span>
		// 						<input style={{color:'black' , width:'100%'}} type='text' value={questions[this.state.currentQuestion].questionText} placeholder='Enter your question' />
		// 					</div>
		// 				</div>
		// 				<div className='answer-section'>
		// 					{questions[this.state.currentQuestion].answerOptions.map((answerOption, i) => (
		// 						<div>
		// 							<div className='button-quiz'>
		// 								<span>{i+1}.</span><input className='button-quiz-edit' type='text' value={answerOption.answerText} placeholder='Enter option' />
		// 								<input  style={{}} type='checkbox'/>
		// 							</div>
									
		// 						</div>
		// 					))}
		// 				</div>
		// 			</div>
		// 		)}
		// 		</div>
		// 	</div>
		// );