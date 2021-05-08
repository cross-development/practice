//Router
import { Route, Switch } from 'react-router-dom';
//Components
import { NavBar } from 'components/Shared';
import BooksList from 'components/BooksList';
import CreateBook from 'components/CreateBook';
import UpdateBook from 'components/UpdateBook';

const App = () => (
	<>
		<NavBar />

		<Switch>
			<Route path="/" exact>
				<BooksList />
			</Route>

			<Route path="/create-book/:id">
				<CreateBook />
			</Route>

			<Route path="/update-book">
				<UpdateBook />
			</Route>
		</Switch>
	</>
);

export default App;
