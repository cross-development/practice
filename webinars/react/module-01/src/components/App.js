import React from 'react';
import Product from './Product';
import Section from './Section';

export default function App() {
	return (
		<>
			<h1>Welcome!</h1>
			<Section title="Best selling">
				<Product
					imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
					name="Tacos With Lime"
					price="10.99"
				/>
			</Section>

			<Section title="Recommended">
				<Product
					imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
					name="Fries and Burger"
					price="20.99"
				/>
			</Section>
		</>
	);
}
