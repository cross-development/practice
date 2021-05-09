//Packages
import PropTypes from 'prop-types';
//Styles
import { Box } from 'rebass/styled-components';

const Container = ({ children }) => (
	<Box sx={{ width: '100%', maxWidth: 1024, mx: 'auto' }}>{children}</Box>
);

Container.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Container;
