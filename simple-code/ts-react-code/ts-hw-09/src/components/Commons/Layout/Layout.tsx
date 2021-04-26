//Core
import { ReactNode } from 'react';
//Components
import AppBar from 'components/Header/AppBar';
//Styles
import styles from './Layout.module.css';

interface IProps {
	children: ReactNode;
}

const Layout = ({ children }: IProps) => (
	<div className={styles.container}>
		<AppBar />
		{children}
	</div>
);

export default Layout;
