import React from 'react';
import CardItem from './CarItem/CardItem';
import cardData from './CardData'
function Card() {
	return (
		<div class="servicessec secpadd">
			<div class="container">
				<div class="fh-service service-grid">
					<div class="service-list">
						{cardData.map((data,key)=>{
							return(
								<CardItem key={key} image={data.image} title={data.title} text={data.text}/>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;
