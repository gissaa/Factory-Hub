import React from 'react';

function SliderText(props) {
	return (
		<div>
			<div
				class="tp-caption fp_content_layer   tp-resizeme"
				id="slide-7-layer-3"
				data-x={"['" + props.sliderDirectionText + "','left','left','left']"}
				data-hoffset={"['" + props.sliderDirection + "','40','40','40']"}
				data-y="['top','top','top','top']"
				data-voffset="['475','485','485','350']"
				data-fontsize="['24','20','20','18']"
				data-lineheight="['36','32','32','20']"
				data-fontweight="['400','700','700','700']"
				data-color="['rgb(255,200,17)','rgba(250, 192, 18, 1)','rgba(250, 192, 18, 1)','rgba(250, 192, 18, 1)']"
				data-width="none"
				data-height="none"
				data-whitespace="nowrap"
				data-type="text"
				data-responsive_offset="on"
				data-frames="[{&quot;delay&quot;:700,&quot;speed&quot;:1200,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:900,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;x:[-100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]"
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
				{props.sliderTextPrimary}
			</div>

			{/* <!-- LAYER NR. 4 --> */}
			<div
				class="tp-caption fp_content_layer   tp-resizeme"
				id="slide-7-layer-6"
				data-x={"['" + props.sliderDirectionText + "','left','left','left']"}
				data-hoffset={"['" + props.sliderDirection + "','40','40','40']"}
				data-y="['top','top','top','top']"
				data-voffset="['510','510','510','380']"
				data-fontsize="['24','20','20','18']"
				data-lineheight="['36','32','32','20']"
				data-fontweight="['400','700','700','700']"
				data-color="['rgb(255,200,17)','rgba(250, 192, 18, 1)','rgba(250, 192, 18, 1)','rgba(250, 192, 18, 1)']"
				data-width="none"
				data-height="none"
				data-whitespace="nowrap"
				data-type="text"
				data-responsive_offset="on"
				data-frames="[{&quot;delay&quot;:700,&quot;speed&quot;:1200,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:900,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;x:[-100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]"
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
				{props.sliderTextSecondary}
			</div>
		</div>
	);
}

export default SliderText;
