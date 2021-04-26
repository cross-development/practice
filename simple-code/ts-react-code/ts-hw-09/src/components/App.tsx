//Core
import { Component, Suspense } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
//Components
import { Loader, Layout } from './Commons';
//Router
import routes from 'routes';
import PublicRoute from 'routes/PublicRoute';
import PrivateRoute from 'routes/PrivateRoute';
//Redux
import { connect } from 'react-redux';
import { authOperations } from 'redux/auth';

interface IProps {
	onGetCurrentUser: () => void;
}

export class App extends Component<IProps, {}> {
	componentDidMount() {
		this.props.onGetCurrentUser();
	}

	render() {
		return (
			<BrowserRouter>
				<Layout>
					<Suspense fallback={<Loader />}>
						<Switch>
							{routes.map(route =>
								route.private ? (
									<PrivateRoute key={route.path} {...route} />
								) : (
									<PublicRoute key={route.path} {...route} />
								),
							)}
						</Switch>
					</Suspense>
				</Layout>
			</BrowserRouter>
		);
	}
}

const mapDispatchToProps = {
	onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
