import React from 'react';

function PartnerItem(props) {
	return (
        <>
		<div class="partner-item">
			<div class="partner-content">
				<a href="#" target="_blank">
					<img src={props.image} alt={props.name} />
				</a>
			</div>
		</div>
        </>
	);
}

export default PartnerItem;
