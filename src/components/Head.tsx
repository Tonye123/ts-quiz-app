import React from "react";

type Props = {
	title: string;
	isActive?: boolean;
};

export const Head = ({ title = "Hello", isActive = true }: Props) => {
	return (
		<div>
			<h1>{title}</h1>
			{isActive && <p>I'm active</p>}
		</div>
	);
};
