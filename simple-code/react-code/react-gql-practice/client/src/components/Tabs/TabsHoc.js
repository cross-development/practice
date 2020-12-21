//Core
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
//styles
import { styles } from './styles';

export default compose(withStyles(styles, { withTheme: true }));
