//Core
import { ReactNode } from 'react';
//Styles
import styles from './Layout.module.css';

interface IProps {
	children: ReactNode;
}

const Layout = ({ children }: IProps) => (
	<section className={styles.section}>{children}</section>
);

export default Layout;
