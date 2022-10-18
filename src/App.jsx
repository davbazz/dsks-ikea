import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import Categories from './components/Categories';
import Footer from './components/Footer';
import './App.css'

function App() {
	return (
<<<<<<< Updated upstream
		<div className="App">
			<Header />
			<Hero />
			<Carousel />
			<Categories />
=======
		<div>
			<div>
				<Header />
			</div>
			<div>
				<Hero />
			</div>
			<div className="wrapper padding-top">
				<Carousel />
			</div>
			<div className="wrapper padding-top">
				<Categories />
			</div>
>>>>>>> Stashed changes
			<Footer />
		</div>
	)
}

export default App
