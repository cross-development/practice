import React, { Component } from 'react';
import withAuthContext from './hoc/withAuthContext';

const styles = {
	form: {
		padding: 8,
	},
	label: {
		display: 'flex',
		flexDirection: 'column',
		marginBottom: 16,
	},
	text: {
		marginBottom: 8,
	},
	input: {
		padding: 8,
	},
};

class CommentForm extends Component {
	render() {
		return (
			<form style={styles.form}>
				<label style={styles.label}>
					<span style={styles.text}>Name</span>
					<input type="text" value={this.props.auth.user.name} style={styles.input} />
				</label>

				<label style={styles.label}>
					<span style={styles.text}>Message</span>
					<textarea style={styles.input} rows="10"></textarea>
				</label>
			</form>
		);
	}
}

export default withAuthContext(CommentForm);
