//Components
import { Container, Loader } from 'components/Shared';
//Styles
import { Flex } from 'rebass/styled-components';

const LoadingFallback = () => (
	<Container>
		<Flex py="5" justifyContent="center">
			<Loader color="#ccc" height={30} />
		</Flex>
	</Container>
);

export default LoadingFallback;
