//Core
import { Suspense } from 'react';
import { Route, Switch, NavLink, RouteComponentProps } from 'react-router-dom';
//Component
import Loader from 'components/Commons/Loader';
//Styles
import styles from './AdditionInfo.module.css';
//AsyncComponents
import asyncComponents from 'services/asyncComponents';

type TLocation = { from: string };

interface IProps extends RouteComponentProps<{}, {}, TLocation | null> {
	isLoading: boolean;
}

const AdditionInfo = ({ location, match, isLoading }: IProps) => (
	<div>
		<h2 className={styles.title}>Additional information</h2>

		<ul className={styles.list}>
			<li className={styles.listItem}>
				<NavLink
					to={{
						pathname: `${match.url}/cast`,
						state: { from: location.state && location.state.from },
					}}
					className={styles.itemLink}
					activeClassName={styles.itemLinkActive}
				>
					Cast
				</NavLink>
			</li>

			<li className={styles.listItem}>
				<NavLink
					to={{
						pathname: `${match.url}/reviews`,
						state: { from: location.state && location.state.from },
					}}
					className={styles.itemLink}
					activeClassName={styles.itemLinkActive}
				>
					Reviews
				</NavLink>
			</li>
		</ul>

		<Suspense fallback={<Loader onLoad={isLoading} />}>
			<Switch>
				<Route path={`${match.path}/cast`} component={asyncComponents.Cast} />
				<Route
					path={`${match.path}/reviews`}
					component={asyncComponents.Reviews}
				/>
			</Switch>
		</Suspense>
	</div>
);

export default AdditionInfo;
