import React, { useState, useEffect } from 'react';
import useContentful from './useContentful';
import Header from './components/Header';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import Cards from './components/Cards';
import Footer from './components/Footer';
import './App.css'

function App() {
	const [products, setProducts] = useState([]);
	const { getProducts } = useContentful();

	useEffect(() => {
		getProducts().then((response) => setProducts(response));
	}, [])

	return (
		<div className="App">
			<Header />
			<Hero />
			<h3>Discover our Products</h3>
			<div className="productCarousel">
				{products.map((product, index) => <Carousel key={index} product={product} />)}
			</div>
			{/* <Cards /> */}
			{/* <Footer /> */}
		</div>
	)
}

export default App
