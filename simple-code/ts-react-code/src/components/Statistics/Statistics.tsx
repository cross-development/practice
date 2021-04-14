//Styles
import styles from './Statistics.module.css';

type TStats = {
	id: string;
	label: string;
	percentage: number;
};

interface IProps {
	title?: string;
	stats: TStats[];
}

const Statistics = ({ title, stats }: IProps) => (
	<div className={styles.wrapper}>
		{title && <h2 className={styles.title}>{title}</h2>}

		<ul className={styles.statList}>
			{stats.map(({ id, label, percentage }) => (
				<li className={styles.item} key={id}>
					<span className={styles.label}>{label} </span>
					<span className={styles.percentage}>{percentage}%</span>
				</li>
			))}
		</ul>
	</div>
);

export default Statistics;
