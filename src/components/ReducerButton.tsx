import React, { useReducer } from "react";

const initialState = {
	rValue: true,
};
type State = {
	rValue: boolean;
};
type Action = {
	type: string;
};
function reducer(state: State, action: Action) {
	switch (action.type) {
		case "one":
			return { rValue: true };
		case "two":
			return { rValue: false };
		default:
			return state;
	}
}
export const ReducerButton = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<div>
			{state?.rValue && <h1>Visible</h1>}
			<button onClick={() => dispatch({ type: "one" })}>Action One</button>
			<button onClick={() => dispatch({ type: "two" })}>Action two</button>
		</div>
	);
};
