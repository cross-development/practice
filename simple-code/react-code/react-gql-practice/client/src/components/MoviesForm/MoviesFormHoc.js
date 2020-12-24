//Core
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
//GraphQL
import { graphql } from 'react-apollo';
import { addMovieMutation, updateMovieMutation } from './mutation';
import { moviesQuery } from '../MoviesTable/queries';
import { directorsQuery } from './queries';
//Styles
import { styles } from './styles';

const withGraphQL = compose(
	graphql(addMovieMutation, {
		props: ({ mutate }) => ({
			addMovie: movie =>
				mutate({
					variables: movie,
					refetchQueries: [{ query: moviesQuery, variables: { name: '' } }],
				}),
		}),
	}),

	graphql(updateMovieMutation, {
		props: ({ mutate }) => ({
			updateMovie: movie =>
				mutate({
					variables: movie,
					refetchQueries: [{ query: moviesQuery, variables: { name: '' } }],
				}),
		}),
	}),

	graphql(directorsQuery, {
		options: ({ name = '' }) => ({
			variables: { name },
		}),
	}),
);

export default compose(withStyles(styles), withGraphQL);
