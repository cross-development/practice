//Core
import React from 'react';
import { connect } from 'react-redux';
import timerActions from '../redux/timer/timerActions';
//Styles
import css from './Timer.module.css';

const Timer = ({ value, step, onIncrement, onDecrement }) => (
	<div className={css.container}>
		<button type="button" className={css.button} onClick={() => onDecrement(step)}>
			&#8722;
		</button>

		<div className={css.value}>{value} minutes</div>

		<button type="button" className={css.button} onClick={() => onIncrement(step)}>
			&#43;
		</button>
	</div>
);

const mapStateToProps = state => ({
	value: state.timer.value,
	step: state.timer.step,
});

const mapDispatchToProps = {
	onIncrement: timerActions.increment,
	onDecrement: timerActions.decrement,
};

// const mapDispatchToProps = dispatch => {
// 	return {
// 		onIncrement: (value) => dispatch(timerActions.increment(value)),
// 		onDecrement: (value) => dispatch(timerActions.decrement(value)),
// 	};
// };

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
