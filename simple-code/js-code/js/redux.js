const initialState = {
	counter: 0,
};

const store = createStore(reducer, initialState);

function render(state) {
	document.getElementById('counter').textContent = state.counter;
}

store.subscribe(function () {
	render(store.getState());
});

function loadRedux() {
	render(store.getState());
}

function reducer(state, action) {
	if (action.type === 'INCREMENT') {
		state = Object.assign({}, state, { counter: state.counter + 1 });
	}

	return state;
}

document.getElementById('button').addEventListener('click', function () {
	incrementCounter();
});

function incrementCounter() {
	store.dispatch({
		type: 'INCREMENT',
	});
}

function createStore(reducer, preloadedState) {
	let currentReducer = reducer;
	let currentState = preloadedState;
	let currentListeners = [];
	let nextListeners = currentListeners;

	function getState() {
		return currentState;
	}

	function dispatch(action) {
		currentState = currentReducer(currentState, action);

		const listeners = (currentListeners = nextListeners);

		for (let i = 0; i < listeners.length; i++) {
			const listener = listeners[i];

			listener();
		}

		return action;
	}

	function subscribe(listener) {
		nextListeners.push(listener);
	}

	return {
		getState,
		dispatch,
		subscribe,
	};
}
