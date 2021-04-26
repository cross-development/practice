//Components
import { Loader } from 'components/Commons';
import { Logo, AuthNav, UserMenu, Navigation } from 'components/Header';
//Redux
import { connect } from 'react-redux';
import { authSelectors } from 'redux/auth';
//Helpers
import { IStoreState } from 'helpers/ts-helpers';
//Styles
import styles from './AppBar.module.css';
import fadeLogo from 'animation/fadeLogo.module.css';
import { CSSTransition } from 'react-transition-group';

interface IProps {
	isAuthenticated: string | null;
	getUser: string;
}

const AppBar = ({ isAuthenticated = null, getUser }: IProps) => (
	<header className={styles.header}>
		<CSSTransition
			in={true}
			classNames={fadeLogo}
			timeout={500}
			appear
			unmountOnExit
		>
			<Logo />
		</CSSTransition>

		<Navigation />

		{(getUser && <UserMenu />) || (isAuthenticated && !getUser && <Loader />)}
		{!isAuthenticated && <AuthNav />}
	</header>
);

const mapStateToProps = (state: IStoreState) => ({
	getUser: authSelectors.getUserEmail(state),
	isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
