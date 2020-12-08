import React from 'react';
import BoxItem from './BoxItem/BoxItem';
import boxData from './BoxData'
function Box() {
	return (
		<div class="ourfeatures2 clearfix">
			{boxData.map((data,key)=>{
							return(
								<BoxItem key={key}  color={data.color} text={data.text} header={data.header}/>
							)
						})}
		</div>
	);
}

export default Box;
