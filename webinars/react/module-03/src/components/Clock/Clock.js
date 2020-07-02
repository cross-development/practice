//Core
import React, { Component } from 'react';
//Styles
import styles from './Clock.module.css';

export default class Clock extends Component {
	state = {
		time: new Date().toLocaleTimeString(),
	};

	render() {
		return <div className={styles.clockface}>{this.state.time}</div>;
	}
}
