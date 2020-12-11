import React, { useState,useEffect } from 'react';

function SliderButton(props) {
	if(props.sliderButtonText==='') return null
	else return (
		<div>
			<div
				class="tp-caption fh_button rev-btn"
				id="slide-7-layer-8"
				data-x={"['"+props.sliderDirectionText+"','left','left','left']"}
				data-hoffset={"['"+props.sliderDirection+"','40','40','40']"}
				data-y="['top','top','top','top']"
				data-voffset="['580','580','580','450']"
				data-width="none"
				data-height="none"
				data-whitespace="nowrap"
				data-type="button"
				data-responsive_offset="on"
				data-responsive="off"
				data-frames="[{&quot;delay&quot;:900,&quot;speed&quot;:700,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:[100%];s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:700,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;y:50px;opacity:0;&quot;,&quot;ease&quot;:&quot;nothing&quot;},{&quot;frame&quot;:&quot;hover&quot;,&quot;speed&quot;:&quot;300&quot;,&quot;ease&quot;:&quot;Linear.easeNone&quot;,&quot;to&quot;:&quot;o:1;rX:0;rY:0;rZ:0;z:0;&quot;,&quot;style&quot;:&quot;c:rgb(255,255,255);bg:rgb(255,200,17);bc:rgb(255,200,17);bw:2 2 2 2;&quot;}]"
				data-textAlign="['inherit','inherit','inherit','inherit']"
				data-paddingtop="[12,12,12,12]"
				data-paddingright="[35,35,35,35]"
				data-paddingbottom="[12,12,12,12]"
				data-paddingleft="[35,35,35,35]"
				style={{
					border: '2px solid #fff',
					display: 'block',
					borderRadius: '40px',
					color: '#fff',
					lineHeight: '22px'
				}}
			>
				{props.sliderButtonText}
			</div>
		</div>)
		
	
}

export default SliderButton;
