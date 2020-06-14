import React from 'react';
import PropTypes from 'prop-types';
import styles from './Product.module.css';
import styled from 'styled-components';

const QuantityValue = styled.span`
	font-weight: 500;
	color: ${props => (props.isInStock ? 'green' : 'red')};
`;

function Product({ imgUrl, name, price, quantity }) {
	// const { imgUrl, name, price } = props;
	const isInStock = quantity < 50;
	// const quantityClasses = isInStock ? styles.notAvailable : styles.available;

	return (
		<div className={styles.container}>
			<img src={imgUrl} alt={name} width="640" />
			<h2 className={styles.name}>{name}</h2>
			<p>Price: {price}$</p>
			<p>
				Quantity:
				{/* <span className={quantityClasses}>{isInStock ? 'Few left' : 'In stock'}</span> */}
				<QuantityValue inStock={isInStock}>{isInStock ? 'In stock' : 'Few left'}</QuantityValue>
			</p>
			<button type="button">Add to cart</button>
		</div>
	);
}

Product.defaultProps = {
	imgUrl:
		'https://cdn.lifehacker.ru/wp-content/uploads/2010/02/4980CD4D-23DB-4551-A637-E0C8EFABA2AA.jpg',
};

Product.propTypes = {
	imgUrl: PropTypes.string,
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
};

export default Product;
