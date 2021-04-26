//Core
import { NavLink } from 'react-router-dom';
//Redux
import { connect } from 'react-redux';
import { authSelectors } from 'redux/auth';
//Helpers
import { IStoreState } from 'helpers/ts-helpers';
//Styles
import styles from './Navigation.module.css';

interface IProps {
	isAuthenticated: string | null;
}

const Navigation = ({ isAuthenticated }: IProps) => (
	<nav className={styles.nav}>
		<NavLink
			to="/"
			exact
			className={styles.link}
			activeClassName={styles.activeLink}
		>
			Home
		</NavLink>

		{isAuthenticated && (
			<NavLink
				to="/contacts"
				exact
				className={styles.link}
				activeClassName={styles.activeLink}
			>
				Contacts
			</NavLink>
		)}
	</nav>
);

const mapStateToProps = (state: IStoreState) => ({
	isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
