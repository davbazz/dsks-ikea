import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Carousel from './components/Carousel'
import Cards from './components/Cards'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
	<div className="App">
		<Header />
		<Hero />
		<Carousel />
		<Cards />
		<Footer />
	</div>
  )
}

export default App
