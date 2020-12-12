//Core
import React from 'react';
//Components
import BeatLoader from 'react-spinners/BeatLoader';
//Styles
import { css } from '@emotion/core';

const override = css`
	display: block;
	margin: 0 auto;
`;

const Loader = ({ onLoad }) => (
	<div>
		<BeatLoader css={override} size={20} color={'#bebebe'} loading={onLoad} />
	</div>
);

export default Loader;
