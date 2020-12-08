import React from 'react';
import PartnerItem from './PartnerItem/PartnerItem';
import partnerData from './PartnerData'
function Partner() {
	return (
		<div class="partener2 partner-dark">
			<div class="container">
				<div class="fh-partner clearfix">
					<div class="list-item">
						{partnerData.map((data,key)=>{
							return(
								<PartnerItem key={key}  name={data.name} image={data.image}/>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Partner;
