//Styles
import styles from './FeedbackOptions.module.css';

type TOptions = {
	BAD: 'bad';
	GOOD: 'good';
	NEUTRAL: 'neutral';
};

interface IProps {
	options: TOptions;
	onLeaveFeedback: (option: string) => void;
}

const FeedbackOptions = ({ options, onLeaveFeedback }: IProps) => {
	const { GOOD, NEUTRAL, BAD } = options;

	return (
		<div className={styles.buttonWrapper}>
			<button
				type="button"
				className={styles.button}
				onClick={() => onLeaveFeedback(GOOD)}
			>
				Good
			</button>

			<button
				type="button"
				className={styles.button}
				onClick={() => onLeaveFeedback(NEUTRAL)}
			>
				Neutral
			</button>

			<button
				type="button"
				className={styles.button}
				onClick={() => onLeaveFeedback(BAD)}
			>
				Bad
			</button>
		</div>
	);
};

export default FeedbackOptions;
