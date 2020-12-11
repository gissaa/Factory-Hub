import React from 'react';

function CardItem(props) {
	return (
			<div class="item-service col-xs-12 col-sm-6 col-md-4">
				<div class="service-content">
					<div class="entry-thumbnail">
						<div class="overlay" style={{ backgroundColor: 'rgba(172, 24, 120,0.4)' }} />
						<a href="#" />
						<img src={props.image} alt={props.title} />
					</div>
					<h2 class="entry-title">
						<a href="#">{props.title}</a>
					</h2>
					<p>
						{props.text}
					</p>
				</div>
			</div>
	);
}

export default CardItem;
