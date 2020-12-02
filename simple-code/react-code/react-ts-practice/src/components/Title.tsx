//Core
import React from 'react';

//types
type TitleProps = {
	title: string;
	test?: string;
};

const Title = ({ title, test = 'test' }: TitleProps) => (
	<h1>
		{title} {test}
	</h1>
);

export default Title;
