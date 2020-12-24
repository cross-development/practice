//Core
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
//GraphQL
import { graphql } from 'react-apollo';
import { addDirectorMutation, updateDirectorMutation } from './mutation';
import { directorsQuery } from '../DirectorsTable/queries';
//Styles
import { styles } from './styles';

const withGraphQL = compose(
	graphql(addDirectorMutation, {
		props: ({ mutate }) => ({
			addDirector: director =>
				mutate({
					variables: director,
					refetchQueries: [{ query: directorsQuery, variables: { name: '' } }],
				}),
		}),
	}),

	graphql(updateDirectorMutation, {
		props: ({ mutate }) => ({
			updateDirector: director =>
				mutate({
					variables: director,
					refetchQueries: [{ query: directorsQuery, variables: { name: '' } }],
				}),
		}),
	}),
);

export default compose(withStyles(styles), withGraphQL);
