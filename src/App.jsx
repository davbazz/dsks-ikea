import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import Categories from './components/Categories';
import Footer from './components/Footer';
import './App.css'

function App() {
	return (
		<div className="App">
			<h1>Welcome to DSKS</h1>
			{/* <Header /> */}
			{/* <Hero /> */}
			<Carousel />
			{/*<div className="productCarousel">
				{products.map((product, index) => <Carousel key={index} product={product} />)}
			</div>*/}
			<Categories />
			{/* <Footer /> */}
		</div>
	)
}

export default App
