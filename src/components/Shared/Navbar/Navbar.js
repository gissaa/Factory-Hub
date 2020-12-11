import React from 'react';
import navbarData from './NavbarData';
function Navbar(props) {
	return (
		<div id="page" class="page-wrapper header-sticky header-transparent header-v3 hide-topbar-mobile">
			
			<header id="masthead" class="site-header clearfix">
				<div class="header-main clearfix">
					<div class="">
						<div class="container">
							<div class="row">
								<div class="site-logo col-md-3 col-sm-6 col-xs-6">
									<a href="index.html" class="logo">
										<img
											src="/assets/images/logo.png"
											alt="FactoryHub"
											class="logo-dark show-logo"
										/>
									</a>
								</div>

								<div class="site-menu col-md-9 col-sm-6 col-xs-6">
									<nav id="site-navigation" class="main-nav primary-nav nav">
										<ul class="menu">
											{navbarData.map((data, key) => {
												return (
													<li >
														<a href="#">
															{data.name}
														</a>
													</li>
												);
											})}
										</ul>
									</nav>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
}

export default Navbar;
