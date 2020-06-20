import React from 'react';

export default function Hint() {
	return (
		<div>
			<button onClick={() => updateProp('good')}>Good</button>
			<button onClick={() => updateProp('neutral')}>Neutral</button>
			<button onClick={() => updateProp('bad')}>Bad</button>
		</div>
	);
}

updateProp = type => {
	this.setState(state => {
		return {
			[type]: state[type] + 1,
		};
	});
};
