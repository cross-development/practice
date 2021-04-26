//Core
import { ReactNode } from 'react';
//Styles
import styles from './Section.module.css';

interface IProps {
	children: ReactNode;
}

const Section = ({ children }: IProps) => (
	<section className={styles.section}>{children}</section>
);

export default Section;
