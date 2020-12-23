//Core
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
//GraphQL
import { graphql } from 'react-apollo';
import { moviesQuery } from './queries';
//Styles
import { styles } from './styles';

export default compose(withStyles(styles), graphql(moviesQuery));
