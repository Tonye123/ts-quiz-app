import React, { useState } from "react";
import { QuestionCard } from "./components/QuestionCard";
import { fetchQuizQuestions, Difficulty } from "./API";

const TOTAL_QUESTION = 10;
function App() {
	const [loading, setLoading] = useState(false);
	const [questions, setQuestions] = useState([]);
	const [number, setNumber] = useState(0);
	const [userAnswers, setUserAnswers] = useState([]);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(true);

	const startTrivia = async () => {};

	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

	const nextQuestion = () => {};
	console.log(fetchQuizQuestions(TOTAL_QUESTION, Difficulty.EASY));

	return (
		<div className="App">
			<h1>REACT QUIZ</h1>
			<button className="start" onClick={startTrivia}>
				start
			</button>
			<p className="score">Score:</p>
			<p>Loading Question...</p>
			{/* <QuestionCard
				questionNr={number + 1}
				totalQuestions={TOTAL_QUESTION}
				question={questions[number].question}
				answers={questions[number].answers}
				userAnswer={userAnswers ? userAnswers[number] : undefined}
				callback={checkAnswer}
			/> */}
			<button className="next" onClick={nextQuestion}>
				Next Question
			</button>
		</div>
	);
}

export default App;
