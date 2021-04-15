//Styles
import styles from './Statistics.module.css';

interface IProps {
	bad: number;
	good: number;
	total: number;
	neutral: number;
	positivePercentage: number;
}

const Statistics = ({
	bad,
	good,
	total,
	neutral,
	positivePercentage,
}: IProps) => (
	<ul className={styles.list}>
		<li className={styles.listItem}>Good: {good}</li>
		<li className={styles.listItem}>Neutral: {neutral}</li>
		<li className={styles.listItem}>Bad: {bad}</li>
		<li className={styles.listItem}>Total: {total}</li>
		<li className={styles.listItem}>
			Positive Feedback: {positivePercentage ? positivePercentage : 0}%
		</li>
	</ul>
);

export default Statistics;
