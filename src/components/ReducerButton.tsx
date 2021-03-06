import React, { useReducer, useRef } from "react";
import { useClickOutside } from "./useClickOutside";

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
	const ref = useRef<HTMLDivElement>(null!);
	useClickOutside(ref, () => {
		console.log("Clicked");
	});
	return (
		<div ref={ref}>
			{state?.rValue && <h1>Visible</h1>}
			<button onClick={() => dispatch({ type: "one" })}>Action One</button>
			<button onClick={() => dispatch({ type: "two" })}>Action two</button>
		</div>
	);
};
