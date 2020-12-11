import React from 'react';

function SliderImage(props) {
	return (
		<div>
			<img
				src={props.sliderImage}
				alt=""
				title="Home Page 3"
				data-bgposition="center center"
				data-bgfit="cover"
				data-bgrepeat="no-repeat"
				data-bgparallax="14"
				class="rev-slidebg"
				data-no-retina
			/>
		</div>
	);
}

export default SliderImage;
