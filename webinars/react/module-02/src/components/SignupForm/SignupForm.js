//Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Styles
import styles from './SignupForm.module.css';

const Subscription = {
	FREE: 'free',
	PRO: 'pro',
	PREM: 'prem',
};

export default class SignupForm extends Component {
	static propTypes = {};

	state = {
		email: '',
		password: '',
		age: '',
		agreed: false,
		subscription: null,
	};

	handlerChange = e => {
		const { name, value } = e.target;

		this.setState({ [name]: value });
	};

	handlerAgreedChange = e => {
		this.setState({ agreed: e.target.checked });
	};

	handleSubscriptionChange = e => {
		this.setState({ subscription: e.target.value });
	};

	handleAgeChange = e => {
		this.setState({ age: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		console.log('submit');
	};

	render() {
		const { email, password, agreed, subscription, age } = this.state;

		return (
			<form className={styles.form} onSubmit={this.handleSubmit}>
				<label className={styles.email}>
					Email
					<input type="email" name="email" value={email} onChange={this.handlerChange} />
				</label>
				<br />
				<label className={styles.password}>
					Password
					<input type="password" name="password" value={password} onChange={this.handlerChange} />
				</label>
				<br />
				<div className={styles.subscription} role="group">
					<label>
						<input
							type="radio"
							value={Subscription.FREE}
							checked={Subscription.FREE === subscription}
							onChange={this.handleSubscriptionChange}
						/>
						Free
					</label>
					<label>
						<input
							type="radio"
							value={Subscription.PRO}
							checked={Subscription.PRO === subscription}
							onChange={this.handleSubscriptionChange}
						/>
						Pro
					</label>
					<label>
						<input
							type="radio"
							value={Subscription.PREM}
							checked={Subscription.PREM === subscription}
							onChange={this.handleSubscriptionChange}
						/>
						Prem
					</label>
				</div>
				<br />
				<label className={styles.age}>
					Choose your age
					<select name="age" value={age} onChange={this.handleAgeChange}>
						<option value="" disabled>
							Choose an option
						</option>
						<option value="18-25">18-25</option>
						<option value="26-35">26-35</option>
						<option value="36+">36+</option>
					</select>
				</label>
				<br />
				<label className={styles.agreed}>
					<input type="checkbox" checked={agreed} onChange={this.handlerAgreedChange} />I agree with
					...
				</label>
				<br />
				<button className={styles.submit} type="submit" disabled={!agreed}>
					Registration as {email}
				</button>
			</form>
		);
	}
}

//контролируемый элемент
// state = {
// 	inputValue: '',
// };
// handleInputChange = e => {
//     this.setState({ inputValue: e.target.value });
// };
// render() {
// return (

// <div>
// <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} />
// </div>
// );
// }
