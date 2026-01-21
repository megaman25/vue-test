import {db} from '../utils.js';
console.log(db);

const Home = {
	template:
	`<div class="section spacer-bottom-4x feature_area">

		<div class="bkgnd" style="/*display:none;*/">
			<div class="image">
				<!-- <img src="/itinerary/img/Travel Destination Booking Page Screen by K Broto Roy Durlov.jpg" /> -->
				<!-- <div style="background-image: linear-gradient(to bottom, rgba(0, 0, 0,0.3) 10%, rgb(0, 0, 0, 0.07) 20%, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0) 100%); position:absolute; top:0; width:100%; height:100%;"></div> -->
			</div>
		</div>

		<div class="content-margin">
			<div class="fullWidth" style="margin-top:235px;">

				<div class="title width-70">
					<h1 style="color:#40517b;">#gotouring</h1>
					<p>Best prices on 1 million departures worldwide.</p>
				</div>

				<div class="card" style="height: auto; display:none;">
					<div class="mn">
						<div class="" style="font-size:36px; text-align: center; width: 60%; margin: 0 auto 60px;">Become focused, organized, and calm. Maximize your online efficiency and performance across various domains.</div>
						<div style="font-size:36px; margin:0 auto 60px; width:60%;"><button style="padding: 0.5em 1em; border-radius: 5px; background: blue; margin: 0px auto; display: block; font-size: 24px; color: #fff;">Start</button></div>
					</div>
				</div><!-- end of carousel -->

				<div class="item-centered width-50 search-bar-center">
					<Form></Form>
					<!-- <form class="search-bar-center" style="overflow:hidden; border-radius:8px;">
						<input type="text" placeholder="city or place" class="input" />
						<button class="submit-btn">Submit</button>
					</form> -->
				</div>
			</div><!-- end of box -->

			<div style="margin:0 0 125px; text-align: center; clear:both;">
				<ul class="hz-inline">
					<li><button><a href="./explore/los-angeles-california-us">Los Angeles</a></button></li>
					<li><button><a href="./explore/new-york-new-york-us">New York</a></button></li>
					<li><button><a href="./explore/london--gb">London</a></button></li>
					<li><button><a href="./explore/tokyo-tokyo-jp">Tokyo</a></button></li>
					<li><button><a href="./explore/lagos-lagos-ng">Lagos</a></button></li>
					<li><button><a href="./explore/dubai-dubayy-ae">Dubai</a></button></li>
					<li><button><a href="./explore/mumbai-maharashtra-in">Mumbai</a></button></li>
					<li><button><a href="./explore/shanghai-shanghai-cn">Shanghai</a></button></li>
				</ul>
			</div>


			<div class="carousel card-300x154 spacer-empty-4x" style="display:none;">
				<div class="xaxis">
					<div class="card" style="margin-left: 0px;">
						<div class="image">
							<img src="img/bernardo-lorena-ponte-ddcbYY4tLyU-unsplash.jpg">
						</div>
						<div class="caption">
							<h3>Big names, great deals</h3>
							<p>Search 100s of travel sites to compare</p>
						</div>
					</div><!-- end of card -->

					<div class="card">
						<div class="image">
							<img src="img/adrien-eBKbKMiE03c-unsplash.jpg">
						</div>
						<div class="caption">
							<h3>Book with flexibility</h3>
							<p>Use our "no change fees" filter for flights that waive fees</p>
						</div>
					</div><!-- end of card -->

					<div class="card">
						<div class="image">
							<img src="img/reno-laithienne--WU3Xcoajis-unsplash.jpg">
						</div>
						<div class="caption">
							<h3>Track prices</h3>
							<p>Not ready to book? Set alerts for when prices drop</p>
						</div>
					</div><!-- end of card -->

					<div class="card" style="margin-right: 0px;">
						<div class="image">
							<img src="img/adrian-hernandez-VmJR8RnQ3ak-unsplash.jpg">
						</div>
						<div class="caption">
							<h3>More than flights</h3>
							<p>Find deals for your entire trip from hotels to rental cars</p>
						</div>
					</div><!-- end of card -->
				</div><!-- end of mask -->
			</div>

		</div><!-- end of content-margin -->

	</div><!-- end of section -->

	<div class="section">
		<div class="content-margin">

			<div class="title" style="margin:0 0 45px;">
				<div style="text-align:center; font-size:1.4rem; letter-spacing: -0.02em; margin:0 auto 7px;">Featured Tours</div>
				<h2 style="text-align:center; font-size:2.4rem; letter-spacing: -0.02em; margin:0 auto 30px;">Beautiful Places Around The World</h2>
			</div>
			<div class="carousel card-304x370 spacer-empty-4x">
				<div class="xaxis">
					<div class="card" style="margin-left: 0px;">
						<div class="image">
							<img src="img/bernardo-lorena-ponte-ddcbYY4tLyU-unsplash.jpg">
						</div>
						<div class="caption">
							<h3>Big names, great deals</h3>
							<p>Search 100s of travel sites to compare</p>
						</div>
					</div><!-- end of card -->

					<div class="card">
						<div class="image">
							<img src="img/adrien-eBKbKMiE03c-unsplash.jpg">
						</div>
						<div class="caption">
							<h3>Book with flexibility</h3>
							<p>Use our "no change fees" filter for flights that waive fees</p>
						</div>
					</div><!-- end of card -->

					<div class="card">
						<div class="image">
							<img src="img/reno-laithienne--WU3Xcoajis-unsplash.jpg">
						</div>
						<div class="caption">
							<h3>Track prices</h3>
							<p>Not ready to book? Set alerts for when prices drop</p>
						</div>
					</div><!-- end of card -->

					<div class="card" style="margin-right: 0px;">
						<div class="image">
							<img src="img/adrian-hernandez-VmJR8RnQ3ak-unsplash.jpg">
						</div>
						<div class="caption">
							<h3>More than flights</h3>
							<p>Find deals for your entire trip from hotels to rental cars</p>
						</div>
					</div><!-- end of card -->
				</div><!-- end of mask -->
			</div>
		</div><!-- end of content-margin -->
	</div><!-- end of section -->

	<div class="section">
		<div class="content-margin wide">
			<img src="./img/beautiful-places-around-the-world.jpg" style="width:80%" />
		</div><!-- end of content-margin -->
	</div><!-- end of section -->


	<div class="section">
		<div class="section spacer-bottom-4x">
			<div class="content-margin">
				<div class="card-half">

					<div class="title" style="display:none;">
						<h2>Easily Track and Categorize Your Expenses</h2>
					</div>

					<div class="caption">
						<div class="mn" style="margin-top: 150px;">
							<div class="" style="font-size:4.5rem; margin: 0 0 18px; font-weight:700; display:none;">Easily Track and Categorize Your Expenses</div>
							<div class="" style="font-size:2.4rem; margin: 0 0 30px;">Effortlessly monitor and categorize your expenses, gaining a clear understanding of your spending patterns. Stay organized and make informed financial decisions based on a comphrensive view of your experiences.</div>
							<button style="font-size:1.8rem; padding:17px 20px; border-radius: 50px; background: blue; display: block; color: #fff;">Learn more -></button>
						</div>
					</div><!-- end of carousel -->

					<div class="image"><img src="./img/img 1.jpg"/></div>

				</div><!-- end of box -->
			</div><!-- end of content-margin -->
		</div>


		<div class="section spacer-bottom-4x">
			<div class="content-margin">
				<div class="card-half">

					<div class="title" style="display:none;">
						<h2>Easily Track and Categorize Your Expenses</h2>
					</div>

					<div class="image"><img src="./img/img 2.jpg"/></div>

					<div class="caption">
						<div class="mn" style="padding-top: 150px; padding-left:20px;">
							<div class="" style="font-size:4.5rem; margin: 0 0 18px; font-weight:700;">Easily Track and Categorize Your Expenses</div>
							<div class="" style="font-size:2.4rem; margin: 0 0 30px;">Effortlessly monitor and categorize your expenses, gaining a clear understanding of your spending patterns. Stay organized and make informed financial decisions based on a comphrensive view of your experiences.</div>
							<button style="font-size:1.8rem; padding:17px 20px; border-radius: 50px; background: blue; display: block; color: #fff;">Learn more -></button>
						</div>
					</div><!-- end of carousel -->

				</div><!-- end of box -->
			</div><!-- end of content-margin -->
		</div>
	</div><!-- end of section -->


	<div class="section">
		<div class="content-margin wide">
			<img src="./img/banner-discover-worldwide.jpg" style="width:80%" />
		</div><!-- end of content-margin -->
	</div><!-- end of section -->


	<div class="section">
		<div class="content-margin wide">
			<img src="./img/checkout-our-packages.jpg" style="width:80%" />
		</div><!-- end of content-margin -->
	</div><!-- end of section -->


	<div class="section">
		<div class="section spacer-bottom-4x">
			<div class="content-margin">
				<div class="card-half">

					<div class="title" style="display:none;">
						<h2>Easily Track and Categorize Your Expenses</h2>
					</div>

					<div class="caption">
						<div class="mn" style="margin-top: 150px;">
							<div class="" style="font-size:4.5rem; margin: 0 0 18px; font-weight:700;">Easily Track and Categorize Your Expenses</div>
							<div class="" style="font-size:2.4rem; margin: 0 0 30px;">Effortlessly monitor and categorize your expenses, gaining a clear understanding of your spending patterns. Stay organized and make informed financial decisions based on a comphrensive view of your experiences.</div>
							<button style="font-size:1.8rem; padding:17px 20px; border-radius: 50px; background: blue; display: block; color: #fff;">Learn more -></button>
						</div>
					</div><!-- end of carousel -->

					<div class="image"><img src="./img/img 1.jpg"/></div>

				</div><!-- end of box -->
			</div><!-- end of content-margin -->
		</div>


		<div class="section spacer-bottom-4x">
			<div class="content-margin">
				<div class="card-half">

					<div class="title" style="display:none;">
						<h2>Easily Track and Categorize Your Expenses</h2>
					</div>

					<div class="image"><img src="./img/img 2.jpg"/></div>

					<div class="caption">
						<div class="mn" style="padding-top: 150px; padding-left:20px;">
							<div class="" style="font-size:4.5rem; margin: 0 0 18px; font-weight:700;">Easily Track and Categorize Your Expenses</div>
							<div class="" style="font-size:2.4rem; margin: 0 0 30px;">Effortlessly monitor and categorize your expenses, gaining a clear understanding of your spending patterns. Stay organized and make informed financial decisions based on a comphrensive view of your experiences.</div>
							<button style="font-size:1.8rem; padding:17px 20px; border-radius: 50px; background: blue; display: block; color: #fff;">Learn more -></button>
						</div>
					</div><!-- end of carousel -->

				</div><!-- end of box -->
			</div><!-- end of content-margin -->
		</div>
	</div><!-- end of section -->


	<div class="section">
		<div class="content-margin wide">
			<img src="./img/most-popular-hotel.jpg" style="width:80%" />
		</div><!-- end of content-margin -->
	</div><!-- end of section -->

	`,
	data(){},
	meta:{
		title:"Itinerary - Home Page"
	}
};

export default Home;