import React from 'react'
import Slider from '../components/HomePage/Slider'
import Box from '../components/HomePage/Box/Box'
import Card from '../components/HomePage/Card'
import News from '../components/HomePage/News'
import IconMenu from '../components/HomePage/IconMenu'
import Partner from '../components/Shared/Partner'
import Footer from '../components/Shared/Footer'
function Home() {
	return (
		<div>
			<Slider/>
			<Box/>
			<Card/>
			<News/>
			<IconMenu/>
			<Partner/>
			<Footer/>
		</div>
	)
}
export default Home
