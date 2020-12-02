//Core
import React, { Component } from 'react';

type CounterState = {
	count: number;
};

type CounterProps = {
	readonly title?: string;
};

class Counter extends Component<CounterProps, CounterState> {
	constructor(props: CounterProps) {
		super(props);

		this.state = {
			count: 0,
		};
	}

	static defaultProps: CounterProps = {
		title: 'Default counter',
	};

	static getDerivedStateFromProps(
		nextProps: CounterProps,
		prevState: CounterState,
	): CounterState | null {
		return true ? { count: 2 } : null;
	}

	componentDidMount(): void {}

	shouldComponentUpdate(nextProps: CounterProps, nextState: CounterState): boolean {
		return true;
	}

	handleClick = () => {
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
			</div>
		);
	}
}

export default Counter;
