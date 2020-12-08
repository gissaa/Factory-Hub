import React from 'react'
import Slider from '../components/HomePage/Slider/Slider'
import Box from '../components/HomePage/Box/Box'
import Card from '../components/HomePage/Card/Card'
import News from '../components/HomePage/News/News'
import IconMenu from '../components/HomePage/IconMenu/IconMenu'
import Partner from '../components/Shared/Partner/Partner'
function Home() {
	return (
		<div>
			
			<Slider/>
			<Box/>
			<Card/>
			<News/>
			<IconMenu/>
			<Partner/>
		</div>
	)
}
export default Home
