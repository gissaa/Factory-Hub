import React from 'react';

function NewsItem(props) {
	return (
		<div class="item-project">
			<div class="project-inner">
				<div class="overlay" />
				<a href="#" class="pro-link">
					<span class="project-icon">
						<i class="fa fa-link" aria-hidden="true" />
					</span>
				</a>
				<div class="project-thumbnail">
					<img src={props.image} alt={props.title} />
				</div>
				<div class="project-summary">
					<h2 class="project-title">
						<a href="#">{props.title}</a>
					</h2>
					<div class="project-cat">
						<a href="#" class="cat">
							{props.cat}
						</a>,{' '}
						<a href="#" class="cat">
							{props.cat2}
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NewsItem;
