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
					<h1 style="color:#40517b;">Turn your calendar into automatic time tracking</h1>
					<div class="txt-lrg-20" style="line-height:1.2em;">Connect your calendar once—your time logs start themselves. No timers, no interruptions, no forgotten hours.</div>
				</div>

				<div class="card" style="height: auto;">
					<div class="mn">
						<div class="txt-lrg-10" style="line-height:1.2em; text-align: center; width: 60%; margin: 0 auto 60px;">Become focused, organized, and calm. Maximize your online efficiency and performance across various domains.</div>
					</div>
				</div><!-- end of carousel -->

				<div class="item-centered width-50">
					<div>Join the waitlist</div>
					<form class="search-bar-center" style="overflow:hidden; border-radius:8px;">
						<input type="text" placeholder="Your Email" class="input" />
						<button class="submit-btn">Submit</button>
					</form>
				</div>
			</div><!-- end of box -->


			<h2 class="margin-bottom-20">How It Works</h2>

			<div class="flex gap-50 flex-space-between">
				<div class="card" style="width:20%;" style="width:20%;">
					<div class="caption">
						<h3>Stop losing billable hours to manual tracking</h3>
						<p>If you’re a consultant or freelancer, you already live in your calendar. But tracking time separately? That’s where things break:</p>
					</div>
					<ul>
						<li>• You forget to start timers</li>
						<li>• You guess hours later</li>
						<li>• You lose billable time every week</li>
					</ul>
				</div><!-- end of card -->


				<div class="card" style="width:20%;">
					<div class="caption">
						<h3>Your calendar becomes your time tracker</h3>
						<p>This tool automatically starts and stops time entries based on your scheduled events. No clicks. No switching apps. No mental overhead.</p>
					</div>
				</div><!-- end of card -->

				<div class="card" style="width:20%;">
					<div class="caption">
						<div>
							<h3>Connect your tools</h3><p>Link your calendar and time tracker in seconds</p>
						</div>
						<div>
							<h3>We watch your schedule</h3><p>Events are detected just before they start</p>
						</div>
					</div>
				</div><!-- end of card -->

				<div class="card" style="width:20%;">
					<div class="caption">
						<div>
							<h3>Time tracking starts automatically</h3><p>Event titles become time entries instantly</p>
						</div>
						<div>
							<h3>Stops when your event ends</h3><p>Accurate durations, no effort required</p>
						</div>
						<div>
							<h3>Review anytime</h3><p>Edit logs, adjust mappings, stay in control</p>
						</div>
					</div>
				</div><!-- end of card -->
			</div>

		</div><!-- end of content-margin -->

	</div><!-- end of section -->`,
	data(){},
	meta:{
		title:"World Clock - Home Page"
	}
};

export default Home;
