export class Store {
	private subscribers: Function[];
	private reducers: { [key: string]: Function };
	private state: { [key: string]: any };

	constructor(reducers = {}, initialState = {}) {
		this.reducers = reducers;
		this.state = this.reduce(initialState, {});
	}

	get value() {
		return this.state;
	}

	dispatch(action) {
		this.state = this.reduce(this.state, action);
	}

	private reduce(state, action) {
		const newState = {};
		for (const property in this.reducers) {
			// newState.property = this.reducers.property();
			newState[property] = this.reducers[property](state[property], action);
		}
		return newState;
	}
}
