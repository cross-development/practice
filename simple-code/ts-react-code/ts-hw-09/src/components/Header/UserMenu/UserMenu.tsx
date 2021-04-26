//Redux
import { connect } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
//Helpers
import { IStoreState } from 'helpers/ts-helpers';
//Styles
import styles from './UserMenu.module.css';

interface IProps {
	email: string;
	onLogout: () => void;
}

const UserMenu = ({ email, onLogout }: IProps) => (
	<div className={styles.container}>
		<span className={styles.email}>Welcome, {email}</span>
		<button className={styles.button} type="button" onClick={onLogout}>
			Logout
		</button>
	</div>
);

const mapStateToProps = (state: IStoreState) => ({
	email: authSelectors.getUserEmail(state),
});

const mapDispatchToProps = {
	onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
