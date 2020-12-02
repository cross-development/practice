//Core
import React, { Component } from 'react';

type EventsCounterState = {
	count: number;
};

type EventsCounterProps = {
	readonly title?: string;
};

class EventsCounter extends Component<EventsCounterProps, EventsCounterState> {
	constructor(props: EventsCounterProps) {
		super(props);

		this.state = {
			count: 0,
		};
	}

	handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
		console.log(`${e.clientX}, ${e.clientY}`);

		this.setState(({ count }) => ({
			count: ++count,
		}));
	};

	render() {
		return (
			<div>
				<h1>
					{this.props.title} {this.state.count}
				</h1>
				<button onClick={this.handleClick}>+1</button>
				<a href="/" onClick={this.handleClick}>
					Link
				</a>
			</div>
		);
	}
}

export default EventsCounter;
