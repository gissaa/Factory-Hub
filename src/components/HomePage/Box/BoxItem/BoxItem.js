import React from 'react';

function BoxItem(props) {
	return (
		<div>
			<div class="col-lg-3 col-md-3 col-sm-6 padd0">
				<div class=" fh-icon-box-3 dark-version icon-center">
					<div class="overlay" style={ {backgroundColor:""+props.color+""}} />{' '}
					<span class="fh-icon">
						<i class="flaticon-mark" />
					</span>
					<h4>{props.header}</h4>
					<div class="desc">
						<p>{props.text}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BoxItem;
