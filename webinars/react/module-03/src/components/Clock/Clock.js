//Core
import React, { Component } from 'react';
//Styles
import styles from './Clock.module.css';

export default class Clock extends Component {
	state = {
		time: new Date().toLocaleTimeString(),
	};

	intervalId = null;

	componentDidMount() {
		this.intervalId = setInterval(
			() => this.setState({ time: new Date().toLocaleTimeString() }),
			1000,
		);
	}

	componentWillUnmount() {
		clearInterval(this.intervalId);
	}

	render() {
		return <div className={styles.clockface}>{this.state.time}</div>;
	}
}
