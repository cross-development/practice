//Packages
import PropTypes from 'prop-types';
import Spinner from 'react-loader-spinner';

export const Loader = ({ type, color, height }) => (
	<Spinner type={type} color={color} height={height} />
);

Loader.defaultProps = {
	type: 'ThreeDots',
	color: '#fff',
	height: 10,
};

Loader.propTypes = {
	type: PropTypes.string,
	color: PropTypes.string,
	height: PropTypes.number,
};
