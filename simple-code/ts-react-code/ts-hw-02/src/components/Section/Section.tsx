//Core
import { ReactNode } from 'react';
//Styles
import styles from './Section.module.css';

interface IProps {
	title?: string;
	children: ReactNode;
}

const Section = ({ title, children }: IProps) => (
	<section className={styles.section}>
		{title && <h2>{title}</h2>}
		{children}
	</section>
);

export default Section;
