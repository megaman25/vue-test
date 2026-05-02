export default {
	template: `
		<div class="section">

			<div class="content-margin" style="width:86%;margin:25vw auto 5vw;">
				<div style="text-align:center; margin:0 auto; width:200px; display:none;">
					<h1 style="/*font-size:15px;*/font-size:1.5rem;"><span style="text-transform:uppercase;">Choose Location or</span><br/>
					<b style="/*font-size:24px;*/font-size:2.4rem; font-weight: 700;">Find a Hotel</b></h1>
				</div>

				<div class="positioning" style="width:100%;/*max-width:320px;*/ margin:0 auto 0 auto;">
					<button id="search-bar-btn" class="search-bar-center" type="text" name="search-bar-center">
						<div id="input" class="input" placeholder="search city or hotel">search city or hotel</div>
						<div class="btn" type="submit" style="background:none; /*border-left:1px solid #000;*/"><img src="img/icon-submit.png"></div>
					</button>
					<!-- <form id="search-bar-center" class="search-bar-center">
						<input id="input" class="" type="text" name="search-bar-center" placeholder="search city or hotel" />
						<button class="btn" type="submit" style="background:none; /*border-left:1px solid #000;*/"><img src="img/icon-submit.png" style="width:20px;"></button>
					</form> -->
				</div><!-- end of form-center -->
			</div><!-- end of content-margin -->

		</div><!-- end of section -->


		<div class="section" style="/*margin:0 0 15px;*/ margin:0 0 4.1666vw; display:none;">

			<div class="content-margin" style="margin:0 5.833333333333333%;">
				<div class="box">

					<div class="title" style=" display:none;">
						<h2 style="color:#131d26; font-size:1.7em;">Spring</h2>
						<div class="right">See all</div>
					</div>

					<div class="carousel card-114x72 wide">
						<div class="xaxis">

							<div class="card">
								<div class="image"><a href=""><img src="img/beaches/pexels-asad-photo-maldives-1591375.jpg" /></a></div>
								<div class="caption">
									<h3>Beaches</h3>
									<p class="subtitle">Beaches</p>
								</div>
							</div><!-- end of card -->
							<div class="card">
								<div class="image"><a href="theme-parks"><img src="img/theme-parks/pexels-andrea-piacquadio-721996.jpg" /></a></div>
								<div class="caption">
									<h3>Theme Parks</h3>
									<p class="subtitle">Theme Parks</p>
								</div>
							</div><!-- end of card -->
							<div class="card">
								<div class="image"><a href="resorts"><img src="img/resorts/pexels-asad-photo-maldives-3601426.jpg" /></a></div>
								<div class="caption">
									<h3>Resorts</h3>
									<p class="subtitle">Resorts</p>
								</div>
							</div><!-- end of card -->
							<div class="card">
								<div class="image"><a href=""><img style="height: 196px; width: auto;" src="img/locations/chicago-illinois-us/sawyer-bengtson--csZbF1o5_k-unsplash.jpg" /></a></div>
								<div class="caption">
									<h3>Activities</h3>
									<p class="subtitle">Activities</p>
								</div>
							</div><!-- end of card -->

						</div><!-- end of mask -->
					</div><!-- end of carousel -->

				</div><!-- end of box -->
			</div><!-- end of content-margin -->

		</div><!-- end of section -->


		<div class="section spacer-bottom-1x">

			<div class="content-margin" style="margin:0 5.833333333333333%;">
				<div class="box">

					<h2 style="color:#131d26; font-size:3.6em; letter-spacing:-0.04em; margin:3vw 0 6vw; display:none;">Discover</h2>

					<div class="title" style="">
						<h2 style="color:#131d26; font-size:1.7em;">Popular Recipes</h2>
						<div class="right" style="font-size:1.2em;">See all</div>
					</div>

					<div class="carousel card-120x120 wide">
						<div class="xaxis">

							<div class="card">
								<div class="image"><a href="explore/atlanta-georgia-us"><img src="img/food/img-1.jpg" /></a></div>
								<div class="caption">
									<h3>Atlanta</h3>
									<p class="subtitle">Georgia, United States</p>
								</div>
							</div><!-- end of card -->
							<div class="card">
								<div class="image"><a href="explore/new-york-new-york-us"><img src="img/food/img-2.jpg" /></a></div>
								<div class="caption">
									<h3>New York</h3>
									<p class="subtitle">New York, United States</p>
								</div>
							</div><!-- end of card -->
							<div class="card">
								<div class="image"><a href="explore/dubai-arab-emirates"><img style="height: 196px; width: auto;" src="img/locations/dubai-arab-emirates/nick-fewings-v3F5gFBRwCA-unsplash.jpg" /></a></div>
								<div class="caption">
									<h3>Dubai</h3>
									<p class="subtitle">Arab Emirates</p>
								</div>
							</div><!-- end of card -->
							<div class="card">
								<div class="image"><a href="explore/chicago-illinois-us"><img style="height: 196px; width: auto;" src="img/locations/chicago-illinois-us/sawyer-bengtson--csZbF1o5_k-unsplash.jpg" /></a></div>
								<div class="caption">
									<h3>Chicago</h3>
									<p class="subtitle">Chicago, Illinois</p>
								</div>
							</div><!-- end of card -->

						</div><!-- end of mask -->
					</div><!-- end of carousel -->

				</div><!-- end of box -->
			</div><!-- end of content-margin -->

		</div><!-- end of section -->


		<div class="section spacer-bottom-1x" style="display:none;">

			<div class="content-margin" style="margin:0 5.833333333333333%;">
				<div class="box">

					<div class="title" style="margin-bottom:20px; display:none;">
						<h2 style="color:#131d26; font-size:1.07em;">Recommendations</h2>
					</div>

					<div class="carousel card-circle-60 wide">
						<div class="xaxis">

							<div class="card">
								<div class="image" style="/*background:#c0c0c0;*/"><a href="beaches"><!-- <img src="img/grey_beach-chair-and-umbrella_icon-icons.com_59443.svg" /> -->
									<img src="img/beaches/pexels-asad-photo-maldives-1591375.jpg"/>
								</a></div>
								<div class="caption">
									<h3>Beaches</h3>
								</div>
							</div><!-- end of card -->
							<div class="card">
								<div class="image"><a href="theme-parks"><!-- <img src="img/images-interface-symbol-of-mountains-like-pyramids-under-the-moon_icon-icons.com_74114.svg" /> -->
									<img src="img/theme-parks/pexels-andrea-piacquadio-721996.jpg">
								</a></div>
								<div class="caption">
									<h3>Theme Parks</h3>
								</div>
							</div><!-- end of card -->
							<div class="card">
								<div class="image"><a href="resorts"><!-- <img src="img/summer_holidays_vacation_palmtree_island_icon_148880.svg" /> -->
									<img src="img/resorts/pexels-asad-photo-maldives-3601426.jpg">
								</a></div>
								<div class="caption">
									<h3>Resorts</h3>
								</div>
							</div><!-- end of card -->
							<div class="card">
								<div class="image"><a href="deals"><!-- <img src="img/ferris-wheel-svgrepo-com.svg" /> -->
									<img src="img/resorts/pexels-asad-photo-maldives-3601426.jpg" />
								</a></div>
								<div class="caption">
									<h3>Theme Parks</h3>
								</div>
							</div><!-- end of card -->

							<div class="card">
								<div class="image" style="/*background:#c0c0c0;*/"><a href="beaches"><!-- <img src="img/grey_beach-chair-and-umbrella_icon-icons.com_59443.svg" /> -->
									<img src="img/beaches/pexels-asad-photo-maldives-1591375.jpg"/>
								</a></div>
								<div class="caption">
									<h3>Beaches</h3>
								</div>
							</div><!-- end of card -->
							<div class="card">
								<div class="image"><a href="theme-parks"><!-- <img src="img/images-interface-symbol-of-mountains-like-pyramids-under-the-moon_icon-icons.com_74114.svg" /> -->
									<img src="img/theme-parks/pexels-andrea-piacquadio-721996.jpg">
								</a></div>
								<div class="caption">
									<h3>Theme Parks</h3>
								</div>
							</div><!-- end of card -->
							<div class="card">
								<div class="image"><a href="resorts"><!-- <img src="img/summer_holidays_vacation_palmtree_island_icon_148880.svg" /> -->
									<img src="img/resorts/pexels-asad-photo-maldives-3601426.jpg">
								</a></div>
								<div class="caption">
									<h3>Resorts</h3>
								</div>
							</div><!-- end of card -->
							<div class="card">
								<div class="image"><a href="deals"><!-- <img src="img/ferris-wheel-svgrepo-com.svg" /> -->
									<img src="img/resorts/pexels-asad-photo-maldives-3601426.jpg" />
								</a></div>
								<div class="caption">
									<h3>Deals</h3>
								</div>
							</div><!-- end of card -->

						</div><!-- end of mask -->
					</div><!-- end of carousel -->

				</div><!-- end of box -->
			</div><!-- end of content-margin -->

		</div><!-- end of section -->


		<div class="section spacer-bottom-1x">

			<div class="content-margin" style="margin:0 5.833333333333333%;">
				<div class="box">

					<div class="title">
						<h2 style="color:#131d26; font-size:1.7em;">Recommended for you</h2>
						<div class="right" style="font-size:1.2em;">See all</div>
					</div>

					<div class="carousel card-230x230 wide">
						<div class="xaxis">

							<div class="card">
								<div class="image"><a href="explore/atlanta-georgia-us"><img src="img/food/food-big-1.jpg" /></a></div>
								<div class="caption">
									<h3>Atlanta</h3>
									<p class="subtitle">Georgia, United States</p>
								</div>
							</div><!-- end of card -->
							<div class="card">
								<div class="image"><a href="explore/new-york-new-york-us"><img src="img/food/img-2.jpg" /></a></div>
								<div class="caption">
									<h3>New York</h3>
									<p class="subtitle">New York, United States</p>
								</div>
							</div><!-- end of card -->
							<div class="card">
								<div class="image"><a href="explore/dubai-arab-emirates"><img style="height: 196px; width: auto;" src="img/locations/dubai-arab-emirates/nick-fewings-v3F5gFBRwCA-unsplash.jpg" /></a></div>
								<div class="caption">
									<h3>Dubai</h3>
									<p class="subtitle">Arab Emirates</p>
								</div>
							</div><!-- end of card -->
							<div class="card">
								<div class="image"><a href="explore/chicago-illinois-us"><img style="height: 196px; width: auto;" src="img/locations/chicago-illinois-us/sawyer-bengtson--csZbF1o5_k-unsplash.jpg" /></a></div>
								<div class="caption">
									<h3>Chicago</h3>
									<p class="subtitle">Chicago, Illinois</p>
								</div>
							</div><!-- end of card -->

						</div><!-- end of mask -->
					</div><!-- end of carousel -->

				</div><!-- end of box -->
			</div><!-- end of content-margin -->

		</div><!-- end of section -->


		<div class="section spacer-bottom-1x">

			<div class="content-margin" style="margin:0 5.833333333333333%;">
				<div class="box">

					<div class="title">
						<h2 style="color:#131d26; font-size:1.7em;">Spring Destinations</h2>
						<div class="right">See all</div>
					</div>

					<div class="carousel card-190x120 wide">
						<div class="xaxis">

							<div class="card">
								<div class="image"><a href="explore/atlanta-georgia-us"><img src="img/locations/atlanta-georgia-us/stephen-cook-TzoCtgxCaYs-unsplash.jpg" /></a></div>
								<div class="caption">
									<h3>Atlanta</h3>
									<p class="subtitle">Georgia, United States</p>
								</div>
							</div><!-- end of card -->
							<div class="card">
								<div class="image"><a href="explore/new-york-new-york-us"><img src="img/locations/new-york-new-york-us/andre-benz-_T35CPjjSik-unsplash.jpg" /></a></div>
								<div class="caption">
									<h3>New York</h3>
									<p class="subtitle">New York, United States</p>
								</div>
							</div><!-- end of card -->
							<div class="card">
								<div class="image"><a href="explore/dubai-arab-emirates"><img style="height: 196px; width: auto;" src="img/locations/dubai-arab-emirates/nick-fewings-v3F5gFBRwCA-unsplash.jpg" /></a></div>
								<div class="caption">
									<h3>Dubai</h3>
									<p class="subtitle">Arab Emirates</p>
								</div>
							</div><!-- end of card -->
							<div class="card">
								<div class="image"><a href="explore/chicago-illinois-us"><img style="height: 196px; width: auto;" src="img/locations/chicago-illinois-us/sawyer-bengtson--csZbF1o5_k-unsplash.jpg" /></a></div>
								<div class="caption">
									<h3>Chicago</h3>
									<p class="subtitle">Chicago, Illinois</p>
								</div>
							</div><!-- end of card -->

						</div><!-- end of mask -->
					</div><!-- end of carousel -->

				</div><!-- end of box -->
			</div><!-- end of content-margin -->

		</div><!-- end of section -->


		<div class="section spacer-bottom-1x">

			<div class="content-margin" style="margin:0 5.833333333333333%;">
				<div class="box">

					<div class="title">
						<h2 style="color:#131d26; font-size:1.7em;">Trending Destinations</h2>
						<div class="right">See all</div>
					</div>

					<div class="carousel card-215x196 wide">
						<div class="xaxis">

							<div class="card">
								<div class="image"><a href="explore/atlanta-georgia-us"><img src="img/locations/atlanta-georgia-us/stephen-cook-TzoCtgxCaYs-unsplash.jpg" /></a></div>
								<div class="caption">
									<h3>Atlanta</h3>
									<p class="subtitle">Georgia, United States</p>
								</div>
							</div><!-- end of card -->
							<div class="card">
								<div class="image"><a href="explore/new-york-new-york-us"><img src="img/locations/new-york-new-york-us/andre-benz-_T35CPjjSik-unsplash.jpg" /></a></div>
								<div class="caption">
									<h3>New York</h3>
									<p class="subtitle">New York, United States</p>
								</div>
							</div><!-- end of card -->
							<div class="card">
								<div class="image"><a href="explore/dubai-arab-emirates"><img style="height: 196px; width: auto;" src="img/locations/dubai-arab-emirates/nick-fewings-v3F5gFBRwCA-unsplash.jpg" /></a></div>
								<div class="caption">
									<h3>Dubai</h3>
									<p class="subtitle">Arab Emirates</p>
								</div>
							</div><!-- end of card -->
							<div class="card">
								<div class="image"><a href="explore/chicago-illinois-us"><img style="height: 196px; width: auto;" src="img/locations/chicago-illinois-us/sawyer-bengtson--csZbF1o5_k-unsplash.jpg" /></a></div>
								<div class="caption">
									<h3>Chicago</h3>
									<p class="subtitle">Chicago, Illinois</p>
								</div>
							</div><!-- end of card -->

						</div><!-- end of mask -->
					</div><!-- end of carousel -->

				</div><!-- end of box -->
			</div><!-- end of content-margin -->

		</div><!-- end of section -->


		<div class="section spacer-bottom-2x">

			<div class="content-margin" style="margin:0 5.833333333333333%;">
				<div class="box">

					<div class="title">
						<h2 style="color:#131d26; font-size:1.7em;">Nearby Destination</h2>
						<div class="right">See all</div>
					</div>

					<div class="carousel card-horz">
						<div class="xaxis">

							<div class="card">
								<div class="image"><img src="img/locations/atlanta-georgia-us/stephen-cook-TzoCtgxCaYs-unsplash.jpg" /></div>
								<div class="caption">
									<h3>Atlanta</h3>
									<p class="subtitle">Location: Lorem ipsum</p>
								</div>
							</div><!-- end of card -->
							<div class="card">
								<div class="image"><img src="img/locations/new-york-new-york-us/andre-benz-_T35CPjjSik-unsplash.jpg" /></div>
								<div class="caption">
									<h3>New York</h3>
									<p class="subtitle">Location: Lorem ipsum</p>
								</div>
							</div><!-- end of card -->
							<div class="card">
								<div class="image"><img style="height:100%;" src="img/locations/dubai-arab-emirates/nick-fewings-v3F5gFBRwCA-unsplash.jpg" /></div>
								<div class="caption">
									<h3>Dubai</h3>
									<p class="subtitle">Location: Lorem ipsum</p>
								</div>
							</div><!-- end of card -->
							<div class="card">
								<div class="image"><img style="height:100%;" src="img/locations/chicago-illinois-us/sawyer-bengtson--csZbF1o5_k-unsplash.jpg" /></div>
								<div class="caption">
									<h3>Chicago</h3>
									<p class="subtitle">Location: Lorem ipsum</p>
								</div>
							</div><!-- end of card -->

						</div><!-- end of mask -->
					</div><!-- end of carousel -->

				</div><!-- end of box -->
			</div><!-- end of content-margin -->

		</div><!-- end of section -->


		<div class="section spacer-bottom-2x">

			<div class="content-margin" style="margin:0 5.833333333333333%;">
				<div class="box">

					<div class="title" style="margin-bottom:20px;">
						<h2 style="color:#131d26; font-size:1.7em;">Recommendations</h2>
					</div>

					<div class="carousel card-240x110 wide">
						<div class="xaxis">

							<div class="card">
								<div class="image"><img src="" /></div>
								<div class="caption">
									<h3>Cardano</h3>
									<p>Cardano will realize its highest value upsurge all throughout the year and might record...</p>
								</div>
							</div><!-- end of card -->
							<div class="card">
								<div class="image"><img src="" /></div>
								<div class="caption">
									<h3>Cardano</h3>
									<p>Cardano will realize its highest value upsurge all throughout the year and might record...</p>
								</div>
							</div><!-- end of card -->
							<div class="card">
								<div class="image"><img src="" /></div>
								<div class="caption">
									<h3>Cardano</h3>
									<p>Cardano will realize its highest value upsurge all throughout the year and might record...</p>
								</div>
							</div><!-- end of card -->

						</div><!-- end of mask -->
					</div><!-- end of carousel -->

				</div><!-- end of box -->
			</div><!-- end of content-margin -->

		</div><!-- end of section -->


		<div class="section spacer-bottom-4x">

			<div class="content-margin" style="margin:0 5.833333333333333%;">
				<div class="box">

					<div class="title" style="margin-bottom:20px;">
						<h2 style="color:#131d26; font-size:1.7em;">Recommendations</h2>
					</div>

					<div class="carousel card-circle wide">
						<div class="xaxis" style="width: 720px;">

							<div class="card">
								<div class="image"><img src="" /></div>
								<div class="caption">
									<h3>Cardano</h3>
								</div>
							</div><!-- end of card -->
							<div class="card">
								<div class="image"><img src="" /></div>
								<div class="caption">
									<h3>Cardano</h3>
								</div>
							</div><!-- end of card -->
							<div class="card">
								<div class="image"><img src="" /></div>
								<div class="caption">
									<h3>Cardano</h3>
								</div>
							</div><!-- end of card -->
							<div class="card">
								<div class="image"><img src="" /></div>
								<div class="caption">
									<h3>Cardano</h3>
								</div>
							</div><!-- end of card -->
							<div class="card">
								<div class="image"><img src="" /></div>
								<div class="caption">
									<h3>Cardano</h3>
								</div>
							</div><!-- end of card -->
							<div class="card">
								<div class="image"><img src="" /></div>
								<div class="caption">
									<h3>Cardano</h3>
								</div>
							</div><!-- end of card -->

						</div><!-- end of mask -->
					</div><!-- end of carousel -->

				</div><!-- end of box -->
			</div><!-- end of content-margin -->

		</div><!-- end of section -->


		<div class="section spacer-bottom-3x">

			<div class="content-margin" style="width:76%;margin:0 auto;">

				<div class="h1-text">
					<h1>Chat with a<br/>security expert.</h1>
					<p>Welcome to security advisor<br/><br/>We’re here to help you keep your identity - and your personalt data - safe from online threats.</p>
					<a href="timer.html" class="btn">Start Chat</a>
				</div><!-- h1-text -->

			</div><!-- end of content-margin -->

		</div><!-- end of section -->


		<div class="section spacer-bottom-1x">

			<div class="content-margin" style="width:76%;margin:0 12%;">
				<div class="box list" style="width:100%;">
					<div class="title"><h2 style="color:#3e3e3e; font-size:0.875em; letter-spacing:-0.06em; font-family:'segoe ui'; line-height: 1.675;">Explore</h2></div>
					<div class="main">
						<ul>
							<li class="item">
								<div class="title"><h3>Security Center</h3> <span class="right-arrow"></span></div>
								<div class="main"><p>Articles guides and videos to hlep you navigate digital security</p></div>
							</li>
							<li class="item">
								<div class="title"><h3>Security Center</h3> <span class="right-arrow"></span></div>
								<div class="main"><p>Articles guides and videos to hlep you navigate digital security</p></div>
							</li>
						</ul>
					</div>
				</div><!-- end of box -->
			</div><!-- end of content-margin -->

		</div><!-- end of section -->
	`
}
