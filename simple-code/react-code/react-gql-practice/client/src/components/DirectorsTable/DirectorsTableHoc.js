//Core
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
//GraphQL
import { graphql } from 'react-apollo';
import { directorsQuery } from './queries';
//Styles
import { styles } from './styles';

const withGraphQL = graphql(directorsQuery, {
	options: ({ name = '' }) => ({
		variables: { name },
	}),
});

export default compose(withStyles(styles), withGraphQL);
