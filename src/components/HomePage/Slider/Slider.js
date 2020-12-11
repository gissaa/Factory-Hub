import React from 'react';
import SliderItems from './SliderItems/SliderItems';
import sliderData from './SliderData';
function Slider() {
	return (
		<section class="rev_slider_wrapper fullwidthbanner-container" data-source="gallery">
			<div id="slider3" class="rev_slider fullwidthabanner" data-version="5.4.1">
				<ul>
					{sliderData.map((data, key) => {
						return (
							<li
								data-index={data.sliderDataIndex}
								data-transition="fade"
								data-slotamount="default"
								data-hideafterloop="0"
								data-hideslideonmobile="off"
								data-easein="default"
								data-easeout="default"
								data-masterspeed="300"
								data-thumb="slider-3/3-3-100x50.jpg"
								data-rotate="0"
								data-saveperformance="off"
								data-title="Slide"
								data-param1=""
								data-param2=""
								data-param3=""
								data-param4=""
								data-param5=""
								data-param6=""
								data-param7=""
								data-param8=""
								data-param9=""
								data-param10=""
								data-description=""
							>
								<img
									src={data.sliderImage}
									alt=""
									title="Home Page 3"
									data-bgposition="center center"
									data-bgfit="cover"
									data-bgrepeat="no-repeat"
									data-bgparallax="14"
									class="rev-slidebg"
									data-no-retina
								/>
								
								<SliderItems
									sliderHeaderPrimary={data.sliderHeaderPrimary}
									sliderHeaderSecondary={data.sliderHeaderSecondary}
									sliderDirection={data.sliderDirection}
									sliderDirectionText={data.sliderDirectionText}
									sliderTextPrimary={data.sliderTextPrimary}
									sliderTextSecondary={data.sliderTextSecondary}
									sliderButtonText={data.sliderButtonText}
								/>
								{console.log("+",data.sliderButtonText,"+")}
							</li>
						);
					})}ss
				</ul>
			</div>
		</section>
	);
}
export default Slider;
