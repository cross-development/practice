//Components
import Section from './Section';
import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import Transactions from './Transactions';
//Data
import user from '../json/user.json';
import friends from '../json/friends.json';
import transactions from '../json/transactions.json';
import statisticalData from '../json/statistical-data.json';

const App = () => (
	<>
		<h1>React homework #1</h1>

		<hr />

		<Section title="Social-profile (hw-01-1)">
			<Profile
				name={user.name}
				tag={user.tag}
				location={user.location}
				avatar={user.avatar}
				stats={user.stats}
			/>
		</Section>

		<hr />

		<Section title="Statistics (hw-01-2)">
			<Statistics title="Upload stats" stats={statisticalData} />
		</Section>

		<hr />

		<Section title="Friends List (hw-01-3)">
			<FriendList friends={friends} />
		</Section>

		<hr />

		<Section title="Transaction History (hw-01-4)">
			<Transactions items={transactions} />
		</Section>
	</>
);

export default App;
