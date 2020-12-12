//Core
import React from 'react';

const GeoCadsList = ({ geoCads }) => (
	<ul>
		{geoCads.map(cad => (
			<li key={cad.id}>
				<p>{cad.companyCode}</p>
				<p>{cad.companyNameUkr}</p>
				<p>{cad.usreou}</p>
				<p>{cad.index}</p>
				<p>{cad.country}</p>
				<p>{cad.region}</p>
				<p>{cad.district}</p>
				<p>{cad.city}</p>
				<p>{cad.street}</p>
				<p>{cad.houseNumber}</p>
				<p>{cad.headPosition}</p>
				<p>{cad.fullName}</p>
				<p>{cad.bankName}</p>
				<p>{cad.bankUsreou}</p>
				<p>{cad.bankMfi}</p>
				<p>{cad.bankSwift}</p>
				<p>{cad.companyAccount}</p>
				<p>{cad.accountCurrency}</p>
				<p>{cad.currencyCode}</p>
				<p>{cad.correspondentBankSwift}</p>
				<p>{cad.correspondentBank}</p>
				<p>{cad.bankAddress}</p>
			</li>
		))}
	</ul>
);

export default GeoCadsList;
