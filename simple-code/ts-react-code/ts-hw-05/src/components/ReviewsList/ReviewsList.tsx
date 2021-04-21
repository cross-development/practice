//Helpers
import { TReview } from 'helpers/types';
//Styles
import styles from './ReviewsList.module.css';

interface IProps {
	reviewsData: TReview[];
}

const ReviewsList = ({ reviewsData }: IProps) => (
	<ul className={styles.list}>
		{reviewsData.map(({ id, author, content, url }) => (
			<li key={id} className={styles.listItem}>
				<h3 className={styles.title}>
					Written by{' '}
					<a href={url} target="_blank" rel="noopener noreferrer">
						{author}
					</a>
				</h3>

				<p className={styles.reviews}>{content}</p>
			</li>
		))}
	</ul>
);

export default ReviewsList;
