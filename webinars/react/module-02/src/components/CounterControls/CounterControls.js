//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './CounterControls.module.css';

const CounterControls = ({ onIncrement, onDecrement }) => {
	return (
		<div className={styles.buttonWrapper}>
			<button className={styles.counterButton} type="increment" onClick={onIncrement}>
				{/* <button type="increment" onClick={this.handleIncrement}> - плохо. bind создает копию функции, тормозит приложение */}
				Increment
			</button>

			<button className={styles.counterButton} type="decrement" onClick={onDecrement}>
				Decrement
			</button>
		</div>
	);
};

CounterControls.propTypes = {};

export default CounterControls;
