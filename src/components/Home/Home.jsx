import React from 'react';
import Poster from '../Poster/Poster';
import Products from '../Products/Products';
import { useSelector } from 'react-redux';
import Categories from '../Categories/Categories';
import Banner from '../Banner/Banner';

const Home = () => {
	const { products, categories } = useSelector((state) => state);

	return (
		<div>
			<Poster />
			<Products products={products.list} amount={5} title="Trending" />
			<Categories
				products={categories.list}
				amount={5}
				title="Worth seeing"
			/>
			<Banner />
		</div>
	);
};

export default Home;
