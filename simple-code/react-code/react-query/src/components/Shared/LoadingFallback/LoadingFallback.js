//Components
import { Container, Loader } from 'components/Shared';
//Styles
import { Flex } from 'rebass/styled-components';

export const LoadingFallback = () => (
	<Container>
		<Flex data-testid="loader" py="5" justifyContent="center">
			<Loader color="#ccc" height={30} />
		</Flex>
	</Container>
);
