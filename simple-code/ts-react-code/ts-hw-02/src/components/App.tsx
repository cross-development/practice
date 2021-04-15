import { Component } from 'react';
//Components
import Section from './Section';
import Statistics from './Statistics';
import Notification from './Notification';
import FeedbackOptions from './FeedbackOptions';

enum EFeedback {
	BAD = 'bad',
	GOOD = 'good',
	NEUTRAL = 'neutral',
}

interface IState {
	bad: number;
	good: number;
	neutral: number;
}

class App extends Component<{}, IState> {
	state = {
		bad: 0,
		good: 0,
		neutral: 0,
	};

	updateFeedbackCount = (type: EFeedback): void =>
		this.setState(prevState => ({ [type]: prevState[type] + 1 }));

	countTotalFeedback = (): number =>
		this.state.good + this.state.neutral + this.state.bad;

	countPositiveFeedbackPercentage = (): number =>
		Math.round((this.state.good / this.countTotalFeedback()) * 100);

	render() {
		const totalFeedback = this.countTotalFeedback();
		const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

		return (
			<>
				<Section title="Please leave feedback">
					<FeedbackOptions
						options={EFeedback}
						onLeaveFeedback={this.updateFeedbackCount}
					/>
				</Section>

				<Section title="Statistics">
					{!totalFeedback && <Notification message="No feedback given" />}

					{totalFeedback && (
						<Statistics
							{...this.state}
							total={totalFeedback}
							positivePercentage={positiveFeedbackPercentage}
						/>
					)}
				</Section>
			</>
		);
	}
}

export default App;
