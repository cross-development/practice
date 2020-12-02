//Core
import React, { Component } from 'react';

interface Props {}

interface State {}

class Form extends Component<Props, State> {
	state = {};

	handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
		console.log(e.currentTarget);
	};

	handleSubmit = (e: React.FocusEvent<HTMLFormElement>) => {
		e.preventDefault();

		console.log('Submitted!');
	};

	handleCopy = (e: React.ClipboardEvent<HTMLInputElement>) => {
		console.log('Copied');
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Single text:
					<input type="text" name="text" onCopy={this.handleCopy} onFocus={this.handleFocus} />
					<button type="submit">Submit</button>
				</label>
			</form>
		);
	}
}

export default Form;
