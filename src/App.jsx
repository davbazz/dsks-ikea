import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Carousel from './components/Carousel'
import Cards from './components/Cards'
import Footer from './components/Footer'
import './App.css'
import useContentful from './useContentful'
import {useState, useEffect} from "react"


function App() {
	const {authors, setAuthors} = useState([])
	const {getAuthors} = useContentful ()

    useEffect (() =>{ 
		getAuthors().then((response) => setAuthors(response))
	});
	

  return (
	<div className="App">
		<div className="page-container">
			<div className="content-wrap">
		<Header />
		<Hero />
		<Carousel />
		<Cards />
		<Footer />
		    </div>
		</div>
	</div>
  )
}

export default App
