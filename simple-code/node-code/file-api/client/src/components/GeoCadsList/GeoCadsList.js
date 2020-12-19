//Core
import React from 'react';
//Components
import GeoCadsItem from '../GeoCadsItem';

const GeoCadsList = ({ geoCads }) => (
	<ul>
		{geoCads.map(cad => (
			<GeoCadsItem key={cad.id} cad={cad} />
		))}
	</ul>
);

export default GeoCadsList;
