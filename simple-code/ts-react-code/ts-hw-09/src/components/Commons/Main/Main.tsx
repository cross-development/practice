//Core
import { ReactNode } from 'react';
//Styles
import styles from './Main.module.css';

interface IProps {
	children: ReactNode;
}

const Main = ({ children }: IProps) => (
	<main className={styles.main}>{children}</main>
);

export default Main;
