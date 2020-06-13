import React from 'react';

function Product({ imgUrl, name, price }) {
	// const { imgUrl, name, price } = props;
	return (
		<div>
			<img src={imgUrl} alt={name} width="640" />
			<h2>{name}</h2>
			<p>Price: {price}$</p>
			<button type="button">Add to cart</button>
		</div>
	);
}

export default Product;
