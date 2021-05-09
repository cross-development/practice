//Packages
import PropTypes from 'prop-types';
//Components
import { Container } from 'components/Shared';
//Styles
import { Flex } from 'rebass/styled-components';

export const ErrorFallback = ({ error }) => (
	<Container>
		<Flex py="5" justifyContent="center">
			Error: {error.message}
		</Flex>
	</Container>
);

ErrorFallback.propTypes = {
	error: PropTypes.instanceOf(Error),
};
