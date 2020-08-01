import React, { useState } from "react";
import { QuestionCard } from "./components/QuestionCard";
import { fetchQuizQuestions, Difficulty, QuestionState } from "./API";
import { Head } from "./components/Head";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { ReducerButton } from "./components/ReducerButton";

type AnswerObject = {
	question: string;
	answer: string;
	correct: boolean;
	correctAnswer: string;
};
const TOTAL_QUESTION = 10;
function App() {
	const [loading, setLoading] = useState(false);
	const [questions, setQuestions] = useState<QuestionState[]>([]);
	const [number, setNumber] = useState(0);
	const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(true);

	const startTrivia = async () => {
		setLoading(true);
		setGameOver(false);

		const newQuestions = await fetchQuizQuestions(
			TOTAL_QUESTION,
			Difficulty.EASY
		);

		setQuestions(newQuestions);
		setScore(0);
		setUserAnswers([]);
		setNumber(0);
		setLoading(false);
	};

	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

	const nextQuestion = () => {};

	return (
		<div className="App">
			<Head title="This is typescript" />
			<Button
				onClick={(e) => {
					e.preventDefault();
					console.log(e);
				}}
			/>
			<Input />
			<ReducerButton />
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
