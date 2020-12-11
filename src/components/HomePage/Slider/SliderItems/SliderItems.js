import React from 'react';
import SliderHeader from './SliderHeader/SliderHeader';
import SliderText from './SliderText/SliderText';
import SliderButton from './SliderButton/SliderButton';
function SliderItems(props) {
	return (
		<div>
			<SliderHeader sliderHeaderPrimary={props.sliderHeaderPrimary}sliderHeaderSecondary={props.sliderHeaderSecondary} sliderDirection={props.sliderDirection} sliderDirectionText={props.sliderDirectionText}/>
			<SliderText sliderTextPrimary={props.sliderTextPrimary} sliderTextSecondary={props.sliderTextSecondary} sliderDirection={props.sliderDirection} sliderDirectionText={props.sliderDirectionText}/>
			<SliderButton sliderButtonText={props.sliderButtonText} sliderDirection={props.sliderDirection} sliderDirectionText={props.sliderDirectionText}/>
		</div>
	);
}

export default SliderItems;
