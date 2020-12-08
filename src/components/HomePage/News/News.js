import React from 'react';
import NewsItem from './NewsItem/NewsItem';
import newsData from './NewsData'
function News() {
	return (
		<div class="letestpro1 secpadd clearfix">
			<div class="letestprowrp">
				<div class="fh-section-title clearfix text-center style-2">
					<h2>Latest Projects</h2>
				</div>
				<div class="fh-project-carousel">
					<div class="list-project">
						{newsData.map((data,key)=>{
							return(
								<NewsItem key={key} title={data.title} image={data.image} cat={data.cat} cat2={data.cat2}/>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default News;
