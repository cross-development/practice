//Core
import { useEffect, useCallback } from 'react';
//Styles
import styles from './Modal.module.css';

interface IProps {
	alt: string;
	image: string;
	onClose: () => void;
}

const Modal = ({ alt, image, onClose }: IProps) => {
	const handleCloseModal = useCallback(
		({ code, target }) => {
			if (code === 'Escape' || target.nodeName === 'DIV') {
				onClose();
			}
		},
		[onClose],
	);

	useEffect(() => {
		window.addEventListener('keydown', handleCloseModal);
		window.addEventListener('click', handleCloseModal);

		return () => {
			window.removeEventListener('keydown', handleCloseModal);
			window.removeEventListener('click', handleCloseModal);
		};
	}, [handleCloseModal]);

	return (
		<div className={styles.overlay}>
			<div className={styles.modal}>
				<img src={image} alt={alt} />
			</div>
		</div>
	);
};

export default Modal;
