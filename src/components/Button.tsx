import React from "react";

type Props = {
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	//onClick: (text:sting) => void  function with params
};

export const Button = ({ onClick }: Props) => {
	return (
		<div>
			<button onClick={onClick}>Click Me</button>
		</div>
	);
};
