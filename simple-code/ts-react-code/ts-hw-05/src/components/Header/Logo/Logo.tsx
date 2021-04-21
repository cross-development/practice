//Core
import { NavLink } from 'react-router-dom';
//Assets
import logoPath from 'assets/movie_logo.png';
//Routes
import routes from 'router';
//Styles
import styles from './Logo.module.css';

const Logo = () => (
	<div className={styles.logoWrapper}>
		<NavLink exact to={routes.home}>
			<img src={logoPath} alt="site logo" className={styles.logo} />
		</NavLink>
	</div>
);

export default Logo;
