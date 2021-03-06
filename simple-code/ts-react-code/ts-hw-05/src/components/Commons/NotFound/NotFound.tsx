//Core
import { Link } from 'react-router-dom';
//Assets
import fallbackImg from 'assets/not_found_img.jpg';
//Routes
import routes from 'router';
//Style
import styles from './NotFound.module.css';

const NotFound = () => (
	<div className={styles.imgWrapper}>
		<img src={fallbackImg} alt="Page not found" className={styles.image} />
		<h2 className={styles.title}>
			Ooops! Something went wrong. Please go to{' '}
			<Link to={routes.home}>homepage</Link>.
		</h2>
	</div>
);

export default NotFound;
