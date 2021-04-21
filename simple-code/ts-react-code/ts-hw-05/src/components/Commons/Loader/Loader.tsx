//Additional components
import PacmanLoader from 'react-spinners/PacmanLoader';
//Styles
import { css } from '@emotion/core';

//Custom css
const customCss = css`
	display: block;
	margin: 60% 38%;

	@media (min-width: 768px) {
		margin: 10% 45%;
	}

	@media (min-width: 1024px) {
		margin: 25% 45%;
	}

	@media (min-width: 1440px) {
		margin: 15% auto;
	}
`;

interface IProps {
	onLoad?: boolean;
}

const Loader = ({ onLoad = false }: IProps) => (
	<PacmanLoader size={50} color={'#f39c12'} loading={onLoad} css={customCss} />
);

export default Loader;
