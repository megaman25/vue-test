const CityProfile = {
	template: 
		`<div class="section spacer-bottom-2x">

			<div class="content-margin" style="margin:0 auto; width:100%; max-width:1264px;">

				<div class="box">
					<div class="title" style="margin-bottom:20px; height:auto;">
						<h2 style="color:#131d26; font-size:2.4em; width:auto; margin-bottom: 8px;">{{ computedPageData.city }}, {{ computedPageData.admin_name }}, {{ computedPageData.iso2 }}</h2>
						<div style="clear:both; font-size:1.6em;">Recommended hotels - {{ $route.params.id }}</div>
						<InternalComponent postTitle="TEXT TEST"></InternalComponent>
						<ExternalComponent/>
					</div>
				</div>

			</div>

		</div>

		<div class="section spacer-bottom-2x">
			<div class="content-margin" style="margin:0 auto; width:100%; max-width:1264px;">

				<div class="box">
					<h2>TEST FOR LOOP AREA</h2>
					<div style="width:100%; border:1px solid red;">
						<ul>
						<li class="item" v-for="item in act">
						<a :href=item.link>
							<div style="float:left; width:50%;">
								<h3 style="font-size:18px;">{{ item.title }}</h3>
							</div>
							<div style="float:left; width:50%;">
								<div class="price" style="font-size:21px;">{{ item.price }}</div>
							</div>
						</a>
						</li>
						</ul>
					</div>
				</div>

			</div>
		</div>

		<div class="section spacer-bottom-2x">

			<div class="content-margin" style="margin:0 auto; width:100%; max-width:1264px;">
				<div class="box">

					<div class="title" style="margin-bottom:20px; height:55px;">
						<h2 style="color:#131d26; font-size:2.4em; width:auto; margin-bottom: 8px;">Warm up for your next adventure</h2>
						<div style="clear:both; font-size:1.6em;">Days are getting longer and the urge to travel is getting stronger &ndash; use thse guides to save this Spring.</div>
					</div>

					<div class="carousel card-624x370">
						<div class="xaxis">

							<div class="card" style="margin-left:0;">
								<div class="image"><img src="/maarjin/img/locations/atlanta-georgia-us/Little-Five-Points-Atlanta.jpg" /></div>
								<div class="caption">
									<h3>Put work on mute for your next trip.</h3>
									<p>Say no to notifications &ndash; here's how to create the perfect away message using Slack.</p>
								</div>
							</div><!-- end of card -->
							<div class="card" style="margin-right:0;">
								<div class="image"><img src="/maarjin/img/locations/atlanta-georgia-us/9f97d91d-3842-4ad3-ae13-5dd499609c82.jpg" /></div>
								<div class="caption">
									<h3>Try an EV for your next rented ride.</h3>
									<p>There's a first for everything &ndash; here's what to kow before renting an electric car.</p>
								</div>
							</div><!-- end of card -->

						</div><!-- end of mask -->
					</div><!-- end of carousel -->

				</div><!-- end of box -->
			</div><!-- end of content-margin -->

		</div><!-- end of section -->

		<div class="section spacer-bottom-4x" style="margin-bottom: 25px !important;">

			<div class="content-margin" style="margin:0 auto; width:100%; max-width:1264px;">
				<div class="box">

					<div class="wide banner" style="height:180px;">
						<div class="xaxis">

							<div class="card">
								<div class="image"><img src="" /></div>
								<div class="caption">
									<h3>Start Here</h3>
									<p>Cardano will realize its highest value upsurge all throughout the year and might record...</p>
								</div>
							</div><!-- end of card -->

						</div><!-- end of mask -->
					</div><!-- end of carousel -->

				</div><!-- end of box -->
			</div><!-- end of content-margin -->

		</div><!-- end of section -->


		<div class="section spacer-bottom-4x">

			<div class="content-margin" style="margin:0 auto; width:100%; max-width:1264px;">
				<div class="box">

					<div class="title" style="margin-bottom:20px; height:55px;">
						<h2 style="color:#131d26; font-size:2.4em; width:auto; margin-bottom: 8px;">HOTELS</h2>
						<div style="clear:both; font-size:1.6em;">Find flights departing Wed, 05/31 and returning Wed, 06/07</div>
					</div>


					<div class="carousel card-300x154">
						<div class="xaxis">

							<div class="card">
								<div class="image"><img src="" /></div>
								<div class="caption">
									<h3>Big names, great deals</h3>
									<p>Search 100s of travel sites to compare</p>
								</div>
							</div>
							<div class="card">
								<div class="image"><img src="" /></div>
								<div class="caption">
									<h3>Book with flexibility</h3>
									<p>Use our "no change fees" filter for flights that waive fees</p>
								</div>
							</div>
							<div class="card">
								<div class="image"><img src="" /></div>
								<div class="caption">
									<h3>Track prices</h3>
									<p>Not ready to book? Set alerts for when prices drop</p>
								</div>
							</div>
							<div class="card">
								<div class="image"><img src="" /></div>
								<div class="caption">
									<h3>More than flights</h3>
									<p>Find deals for your entire trip from hotels to rental cars</p>
								</div>
							</div>

						</div>
					</div>


				</div><!-- end of box -->
			</div><!-- end of content-margin -->

		</div><!-- end of section -->`,
	data(){
		return { str:[1, 3, 45], location: [5,10,25], ary1:{one:"one two three"},
			data: [

				{
					url:"atlanta-georgia-us",
					title:"Atlanta",
					subtitle:"Georgia",
					summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					metadata: ["item 1","item 2","item 3"], 
					thumbs:[
						{
							img: "/maarjin/img/locations/atlanta-georgia-us/lance-asper-x_I-mS-ylxs-unsplash.jpg",
							url:"the-varsity",
							header:"Metro",
							subheader:"Atlanta"
						},
						{
							img: "/maarjin/img/locations/atlanta-georgia-us/pengxiao-xu-Kzycb6V5bK4-unsplash.jpg",
							url:"georgia-dome",
							header:"Downtown",
							subheader:"Atlanta"
						},
						{
							img: "/maarjin/img/locations/atlanta-georgia-us/stephen-cook-tjdu7p_PaEM-unsplash.jpg",
							url:"lenox-mall",
							header:"title of thumb 3",
							subheader:"Buckhead"
						},
						{
							img: "/maarjin/img/locations/atlanta-georgia-us/venti-views-oiC4Z7BUYAc-unsplash.jpg",
							url:"camp-creek",
							header:"Camp Creek",
							subheader:"Atlanta"
						},
					]
				},

				{
					url:"los-angeles-california-us", 
					title:"Los Angeles", 
					subtitle:"California",
					summary: "lorem ipsum",
					metadata: ["item 1","item 2","item 3"], 
					thumbs:[
						{
							img: "/maarjin/img/locations/los-angeles-california-us/cedric-letsch-UZVlSjrIJ3o-unsplash.jpg",
							url:"/maarjin/explore/url-location",
							header:"title of thumb 1",
							subheader:"subheader 1"
						},
						{
							img: "/maarjin/img/locations/los-angeles-california-us/venti-views-cHRDevKFDBw-unsplash.jpg",
							url:"/maarjin/explore/url-location",
							header:"title of thumb 2",
							subheader:"subheader 2"
						},
						{
							img: "/maarjin/img/locations/los-angeles-california-us/venti-views-cHRDevKFDBw-unsplash.jpg",
							url:"/maarjin/explore/url-location",
							header:"title of thumb 3",
							subheader:"subheader 3"
						},
						{
							img: "/maarjin/img/locations/los-angeles-california-us/cedric-letsch-UZVlSjrIJ3o-unsplash.jpg",
							url:"/maarjin/explore/url-location",
							header:"title of thumb 4",
							subheader:"subheader 4"
						},
					]
				},

				{
					url:"chicago-illinois-us",
					title:"title stuff",
					subtitle:"subtitle stuff",
					summary: "lorem ipsum",
					metadata: ["item 1","item 2","item 3"], 
					thumbs:[
						{
							img: "/maarjin/img/locations/chicago-illinois-us/neal-kharawala-XXA8PTuLD1Y-unsplash.jpg",
							url:"/maarjin/explore/url-location",
							header:"title of thumb 1",
							subheader:"subheader 1"
						},
						{
							img: "/maarjin/img/locations/chicago-illinois-us/sawyer-bengtson--csZbF1o5_k-unsplash.jpg",
							url:"/maarjin/explore/url-location",
							header:"title of thumb 2",
							subheader:"subheader 2"
						},
						{
							img: "/maarjin/img/locations/chicago-illinois-us/sawyer-bengtson-tnv84LOjes4-unsplash.jpg",
							url:"/maarjin/explore/url-location",
							header:"title of thumb 3",
							subheader:"subheader 3"
						},
						{
							img: "/maarjin/img/locations/chicago-illinois-us/neal-kharawala-XXA8PTuLD1Y-unsplash.jpg",
							url:"/maarjin/explore/url-location",
							header:"title of thumb 4",
							subheader:"subheader 4"
						},
					]
				},

				{
					url:"new-york-new-york-us", 
					title:"New York City", 
					subtitle:"The Big Apple",
					summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					metadata: ["item 1","item 2","item 3"], 
					thumbs:[
						{
							img: "/maarjin/img/locations/new-york-new-york-us/andre-benz-_T35CPjjSik-unsplash.jpg",
							url:"/maarjin/explore/url-location",
							header:"title of thumb 1",
							subheader:"subheader 1"
						},
						{
							img: "/maarjin/img/locations/new-york-new-york-us/sam-trotman-2f8SXXbP9nY-unsplash.jpg",
							url:"/maarjin/explore/url-location",
							header:"title of thumb 2",
							subheader:"subheader 2"
						},
						{
							img: "/maarjin/img/locations/new-york-new-york-us/triston-dunn-rfj_wOYQkus-unsplash.jpg",
							url:"/maarjin/explore/url-location",
							header:"title of thumb 3",
							subheader:"subheader 3"
						},
						{
							img: "/maarjin/img/locations/new-york-new-york-us/andre-benz-_T35CPjjSik-unsplash.jpg",
							url:"/maarjin/explore/url-location",
							header:"title of thumb 4",
							subheader:"subheader 4"
						},
					]
				},

				{
					url:"dubai-arab-emirates", 
					title:"Dubai Arab Emirates", 
					subtitle:"Middle East",
					summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					metadata: ["Latitude","Longitude","Temperature"], 
					thumbs:[
						{
							img: "/maarjin/img/locations/dubai-arab-emirates/ashim-d-silva-CwJb7ly-iqc-unsplash.jpg",
							url:"/maarjin/explore/url-location",
							header:"title of thumb 1",
							subheader:"subheader 1"
						},
						{
							img: "/maarjin/img/locations/dubai-arab-emirates/david-rodrigo-Fr6zexbmjmc-unsplash.jpg",
							url:"/maarjin/explore/url-location",
							header:"title of thumb 2",
							subheader:"subheader 2"
						},
						{
							img: "/maarjin/img/locations/dubai-arab-emirates/ishan-seefromthesky-Iqk8OFDJWnk-unsplash.jpg",
							url:"/maarjin/explore/url-location",
							header:"title of thumb 3",
							subheader:"subheader 3"
						},
						{
							img: "/maarjin/img/locations/dubai-arab-emirates/nick-fewings-v3F5gFBRwCA-unsplash.jpg",
							url:"/maarjin/explore/url-location",
							header:"title of thumb 4",
							subheader:"subheader 4"
						},
					]
				}
			],
			computedPageData: "",
			activities:"",
			act: null

		}
	},
	methods: {
		layout() {console.log(5);}

	},
	computed: {
		location() {
			return this.$route.params.id;
		},
		computedFunction: function(){
			console.log(this.location);
			return this.data.filter(a => {return a.url == this.location})[0]
		}
	},
	async created(){
		const response = await fetch(relativePath+'/data/worldcities-key.json');
		const jsonData = await response.json();
		const v = jsonData[this.$route.params.id];

		const res = await fetch(relativePath+'/data/worldcities-url.json');
		const db = await res.json();

		console.log(this.$route.params.id);
		const rs = await fetch(relativePath+'/data/viator-comedy.json');
		this.act = await rs.json().then(
			(value)=>{
				let ary = []; let n = 0;
				for(let i in value){
					if(value[i].loc == this.$route.params.id){
						ary[n] = {}
						ary[n] = value[i]
						n++;
					};
				}
				return ary;
			}
		);
		

		//this.act = openPromise(this.act, this.location)

		console.log(this.act);
		/*//let ary = [];
		act.then(
			(value)=>{
				for(let i in value){
					this.ary[i] = value[i];
				}
			}
		);*/

		//console.log(this.$route.params.id);

		document.title = db[v].city + ", " + db[v].admin_name + ", " + db[v].country;
		//console.log(db[v]);
		let miles = 30*(360/24901);
		//console.log(coordinateDistanceRange(v,db,miles))
		this.computedPageData = db[v];
		//console.log(jsonData[$route.params.id]);
		//return jsonData;
		/*const response = await fetch(relativePath+'/data/worldcities-url.json');
		const jsonData = await response.json();
		return jsonData;*/

	}
};
export default CityProfile;