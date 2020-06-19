import React, { Component } from 'react';

export default class Counter extends Component {
	static propTypes = {};

	static defaultProps = {
		initialValue: 0,
		step: 1,
	};
	/*
    // нужно знать как объявить стейт через конструктор!
	// constructor(props) {
	// 	super(props);

	// 	this.state = {
	// 		value: this.props.initialValue,
	// 	};
	// }
    //
	// так делать можно, но если много методов то не удобно и долго
	// constructor() {
	// 	super();
	// 	this.handleIncrement = this.handleIncrement.bind(this);
	// }
	//
	// handleIncrement(e) {
	// 	console.log(this);
	// 	console.log('Increment');
	// }  */

	//babel это транспайлит в метод с конструктором
	state = {
		value: this.props.initialValue,
	};

	/* публичные поля (свойства) класса, идет на экземпляр (не в прототип)*/
	handleIncrement = () => {
		// функциональная запись - если нужно обновить состояние от предыдущего
		this.setState((prevState, props) => {
			return { value: prevState.value + props.step };
		});

		/* если не нужно обновлять от предыдущего - не оч. хорошо, т.к. работает только для одного вызова без учета предыдущего состояния (ибо сетСтейт асинхронный метод)
		this.setState({ value: this.state.value + 1 }); */
	};

	handleDecrement = () => {
		this.setState((prevState, props) => {
			return { value: prevState.value - props.step };
		});
	};

	render() {
		return (
			<div>
				<button type="increment" onClick={this.handleIncrement}>
					{/* <button type="increment" onClick={this.handleIncrement}> - плохо. bind создает копию функции, тормозит приложение */}
					Increment
				</button>

				<span>{this.state.value}</span>

				<button type="decrement" onClick={this.handleDecrement}>
					Decrement
				</button>
			</div>
		);
	}
}
