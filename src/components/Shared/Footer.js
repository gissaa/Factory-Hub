import React from 'react'

function Footer() {
    return (
        <div id="footer-widgets" class="footer-widgets widgets-area">
        <div class="container">
            <div class="row">
                <div class="footer-sidebar footer-1 col-xs-12 col-sm-6 col-md-3">
                    <div id="text-11" class="widget widget_text">
                        <div class="textwidget">
                            <a href="#" class="footer-logo"><img src="assets/images/footer-logo.png" alt="Footer Logo"/></a>
                            <p style={{lineHeight: "2"}}>
                                Over 24 years experience and knowledge of international industrial systems, dedicated to provide the best economical solutions to our valued customers. We Won Many Factory Awards and Ceritificates Since 2001-2016
                            </p>
                        </div>
                    </div>
                </div>
                <div class="footer-sidebar footer-2 col-xs-12 col-sm-6 col-md-3">
                    <div id="nav_menu-2" class="widget widget_nav_menu">
                        <h4 class="widget-title">Our Services</h4>
                        <div class="menu-service-menu-container">
                            <ul id="menu-service-menu" class="menu">
                                <li><a href="#">Power and Energy</a></li>
                                <li><a href="#">Petroleum and Gas</a></li>
                                <li><a href="#">Mechanical Engineering</a></li>
                                <li><a href="#">Material Engineering</a></li>
                                <li><a href="#">Chemical Engineering</a></li>
                                <li><a href="#">Agriculture Processing</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-sidebar footer-3 col-xs-12 col-sm-6 col-md-3">
                    <div id="latest-post-widget-2" class="widget latest-post-widget">
                        <h4 class="widget-title">Latest News</h4>
                        <div class="list-post">
                            <div class="latest-post clearfix">
                                <span class="post-date">April 20, 2017</span>
                                <a class="post-title" href="#" title="We Won Best Industries Services Award – 2016">We Won Best Industries Services Award – 2016</a>
                            </div>
                            <div class="latest-post clearfix">
                                <span class="post-date">April 20, 2017</span>
                                <a class="post-title" href="#" title="Contemporary Technology for Mystic Vehicle">Contemporary Technology for Mystic Vehicle</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-sidebar footer-4 col-xs-12 col-sm-6 col-md-3">
                    <div id="mc4wp_form_widget-2" class="widget widget_mc4wp_form_widget">
                        <h4 class="widget-title">Subscribe Us</h4>

                        <form>
                            <div class="fh-form-field">
                                <p>
                                    Sign up today for tips and latest news and exclusive special offers.
                                </p>
                                <div class="subscribe">
                                    <input name="EMAIL" placeholder="Enter Your Email" required="" type="email"/>
                                    <input value="OK" type="submit"/>
                                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                                </div>
                            </div>
                        </form>

                    </div>
                    <div id="text-8" class="widget widget_text">
                        <div class="textwidget">We don’t do spam and Your mail id is very confidential.</div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    )
}

export default Footer
