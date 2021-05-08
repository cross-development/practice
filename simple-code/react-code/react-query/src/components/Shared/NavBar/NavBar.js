//Components
import Container from '../Container';
//Router
import { Link } from 'react-router-dom';
//Assets
import logo from 'assets/logo.svg';
//Styles
import { Flex, Box, Link as StyledLink, Image } from 'rebass/styled-components';

const NavBar = () => (
	<Flex bg="black" color="white" justifyContent="center">
		<Container>
			<Flex px={2} width="100%" alignItems="center">
				<Image size={20} src={logo} />

				<Link component={StyledLink} variant="nav" to="/">
					React Query CRUD
				</Link>

				<Box mx="auto" />

				<Link component={StyledLink} variant="nav" to="/create-book">
					+ Add new book
				</Link>
			</Flex>
		</Container>
	</Flex>
);

export default NavBar;
