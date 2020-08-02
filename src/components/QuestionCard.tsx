import React from "react";

type Props = {
	question: string;
	answers: string[];
	callback: any;
	userAnswer: any;
	questionNr: number;
	totalQuestions: number;
};

export const QuestionCard = ({
	question,
	answers,
	callback,
	userAnswer,
	questionNr,
	totalQuestions,
}: Props) => {
	return (
		<div>
			<p className="number">
				Question: {questionNr} / {totalQuestions}
			</p>
			<p dangerouslySetInnerHTML={{ __html: question }} />
			<div>
				{answers.map((answer) => (
					<div>
						<button disabled={userAnswer} onClick={callback}>
							<span>{answer}</span>
						</button>
					</div>
				))}
			</div>
		</div>
	);
};
