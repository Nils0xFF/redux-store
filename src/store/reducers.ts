import { ADD_TODO, REMOVE_TODO } from "./actions";

export const initialState = {
	loaded: false,
	loading: false,
	data: [{ label: "Eat pizza", complete: false }],
};

export function reducer(
	state = initialState,
	action: { type: string; payload: any }
) {
	switch (action.type) {
		case ADD_TODO: {
			const todo = action.payload;
			const data = [...state.data, todo];
			return {
				...state,
				data,
			};
		}
		case REMOVE_TODO: {
			const data = state.data.filter(
				(todo) => todo.label !== action.payload.label
			);
			return {
				...state,
				data,
			};
		}
	}
	return state;
}
