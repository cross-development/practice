//Core
import { Component } from 'react';
//Components
import Modal from 'components/Modal';
//Helpers
import { TImage } from 'helpers/types';
//Styles
import styles from './ImageGalleryItem.module.css';

interface IProps extends TImage {}

interface IState {
	showModal: boolean;
}

export default class ImageGalleryItem extends Component<IProps, IState> {
	state = {
		showModal: false,
	};

	toggleModal = (): void =>
		this.setState(
			(prevState: IState): IState => ({ showModal: !prevState.showModal }),
		);

	render() {
		const {
			props: { id, webformatURL, tags, largeImageURL },
			state: { showModal },
		} = this;

		return (
			<li className={styles.item}>
				<img
					id={id}
					alt={tags}
					src={webformatURL}
					onClick={this.toggleModal}
					className={styles.itemImage}
				/>

				{showModal && (
					<Modal image={largeImageURL} alt={tags} onClose={this.toggleModal} />
				)}
			</li>
		);
	}
}
