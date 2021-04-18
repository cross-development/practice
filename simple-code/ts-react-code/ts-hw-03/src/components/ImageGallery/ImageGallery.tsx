//Components
import ImageGalleryItem from './ImageGalleryItem';
//Helpers
import { TImage } from 'helpers/types';
//Style
import styles from './ImageGallery.module.css';

interface IProps {
	images: TImage[];
}

const ImageGallery = ({ images }: IProps) => (
	<ul className={styles.list}>
		{images.map(({ id, webformatURL, largeImageURL, tags }) => (
			<ImageGalleryItem
				id={id}
				key={id}
				tags={tags}
				webformatURL={webformatURL}
				largeImageURL={largeImageURL}
			/>
		))}
	</ul>
);

export default ImageGallery;
