//Core
import React, { Component } from 'react';
//Styles
import styles from './Modal.module.css';

export default class Modal extends Component {
	componentDidMount() {
		console.log('Modal componentDidMount');
		console.log('addEventListener');
		window.addEventListener('keydown', this.handleKeyDown);
	}

	componentWillUnmount() {
		console.log('Modal componentWillUnmount');
		console.log('removeEventListener');
		window.removeEventListener('keydown', this.handleKeyDown);
	}

	handleKeyDown = e => {
		console.log(e);
		if (e.code === 'Escape') {
			console.log('Закрываем модалку с this.props.onClose.');
			this.props.onClose();
		}
	};

	render() {
		return (
			<div className={styles.backdrop}>
				<div className={styles.modal}>{this.props.children}</div>
			</div>
		);
	}
}
