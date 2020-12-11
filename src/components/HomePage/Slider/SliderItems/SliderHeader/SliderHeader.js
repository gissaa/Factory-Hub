import React from 'react';

function SliderHeader(props) {
	return (
		<div>
			<div
				class="tp-caption fp_title_layer   tp-resizeme"
				id="slide-7-layer-1"
				data-x={"['"+props.sliderDirectionText+"','left','left','left']"}
				data-hoffset={"['"+props.sliderDirection+"','40','40','40']"}
				data-y="['top','top','top','top']"
				data-voffset="['305','330','330','240']"
				data-fontsize="['70','48','48','30']"
				data-lineheight="['80','60','60','30']"
				data-width="none"
				data-height="none"
				data-whitespace="nowrap"
				data-type="text"
				data-responsive_offset="on"
				data-frames="[{&quot;delay&quot;:500,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:700,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;y:[-100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;nothing&quot;}]"
				data-textAlign="['left','left','left','left']"
				data-paddingtop="[0,0,0,0]"
				data-paddingright="[0,0,0,0]"
				data-paddingbottom="[0,0,0,0]"
				data-paddingleft="[0,0,0,0]"
				style={{
					zIndex: '5',
					display: 'block',
					whiteSpace: 'nowrap',
					letterSpacing: 'px',
					fontWeight: '700',
					color: '#fff'
				}}
			>
				{props.sliderHeaderPrimary}
			</div>
            
			<div
				class="tp-caption fp_title_layer   tp-resizeme"
				id="slide-7-layer-5"
				data-x={"['"+props.sliderDirectionText+"','left','left','left']"}
				data-hoffset={"['"+props.sliderDirection+"','40','40','40']"}
				data-y="['top','top','top','top']"
				data-voffset="['385','385','385','290']"
				data-fontsize="['70','48','48','30']"
				data-lineheight="['80','60','60','30']"
				data-width="none"
				data-height="none"
				data-whitespace="nowrap"
				data-type="text"
				data-responsive_offset="on"
				data-frames="[{&quot;delay&quot;:500,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:700,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;y:[-100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;nothing&quot;}]"
				data-textAlign="['left','left','left','left']"
				data-paddingtop="[0,0,0,0]"
				data-paddingright="[0,0,0,0]"
				data-paddingbottom="[0,0,0,0]"
				data-paddingleft="[0,0,0,0]"
				style={{
					zIndex: '5',
					display: 'block',
					whiteSpace: 'nowrap',
					letterSpacing: 'px',
					fontWeight: '700',
					color: '#fff'
				}}
			>
				{props.sliderHeaderSecondary}
			</div>
		</div>
	);
}

export default SliderHeader;
