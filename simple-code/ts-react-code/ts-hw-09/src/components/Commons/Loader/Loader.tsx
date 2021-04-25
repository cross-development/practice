//Core
import React from 'react';
//Additional components
import BeatLoader from 'react-spinners/BeatLoader';
//Styles
import { css } from '@emotion/core';

const customCss = css`
	display: block;
	margin: auto;
	text-align: center;
`;

const Loader = () => <BeatLoader size={20} color={'#1e3799'} loading={true} css={customCss} />;

export default Loader;
