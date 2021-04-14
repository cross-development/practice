import { ReactNode } from 'react';

interface IProps {
	title?: string;
	children: ReactNode;
}

const Section = ({ title, children }: IProps) => (
	<section>
		{title && <h2>{title}</h2>}
		{children}
	</section>
);

export default Section;
