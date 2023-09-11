import Thumb from '/maarjin/sections/thumb.js';
import Home from '/maarjin/sections/home.js';
import Explore from '/maarjin/sections/explore.js';
import Attractions from '/maarjin/sections/attractions.js';
import Seasonal from '/maarjin/sections/seasonal.js';
import Tours from '/maarjin/sections/tours.js';
import Blog from '/maarjin/sections/blog.js';
import Flights from '/maarjin/sections/flights.js';
import Hotels from '/maarjin/sections/hotels.js';
//import CityProfile from '/maarjin/sections/cityProfile.js';
//import Results from '/maarjin/sections/results.js';
import agoda from '/maarjin/sections/agoda.js';
import { name, street } from '/maarjin/import-test.js';
import solo from '/maarjin/components/components.js';

function addTitle (){
	return "maarjin - " + window.location.pathname;
}

const relativePath = "/maarjin";

function coordinateDistanceRange(index, db, range){
	let lat = db[index].lat
	let lng = db[index].lng
	let ary = [];
	let x = null;
	let y = null;
	let h = null;
	for(let i in db){

		x = db[i].lat -lat;
		y = db[i].lng -lng;
		h = Math.sqrt(x*x + y*y);
		db[i].h = Math.abs(h);

		if (db[i].h <= range){
			ary.push(db[i]);
		};
	};
	return ary;
};
function g(id){return document.getElementById(id);}


const JSONDB = (async function db(){
	const response = await fetch(relativePath+'/data/worldcities-url.json');
	const db = await response.json();
	return db;
})();

const COMEDY = (async function db(){
	const res = await fetch(relativePath+'/data/viator-comedy.json');
	const db = await res.json();
	return db;
})();

/*function openPromise(prom){
	let ary = [];
	prom.then((value)=>{
		for(let i in value){
			ary[i] = value[i];
		};
	});
	return ary;
};*/

function find(data,value){
	let options = {
		shouldSort: true,
		tokenize: true,
		includeScore: true,
		includeMatches: false,
		findAllMatches: false,
		threshold: 0.1,
		location: 1,
		distance: 50,
		maxPatternLength: 32,
		minMatchCharLength: 3,
		keys: [
			"city",
			"admin_name",
			"country"
		]
	};

	options["keys"].push(["title", "link", "url"]); // temporary over write

	let fuse = new Fuse(data, options);
	let result = fuse.search(value);
	return result;
};

function openPromise(prom, url){
	let ary = []; let n = 0;
	prom.then((value)=>{
		for(let i in value){
				ary[n] = {};
				ary[n].item = value[i];
				n++;
		};
			if(value[i].loc == url){
				console.log(ary[i]);
			};
	});
	return ary;
};


const mainMenu = [
	{"title":"Explore", "url":"explore", "txt":"Explore"},
	{"title":"Flights", "url":"flights", "txt":"Flights"},
	{"title":"Hotels", "url":"hotels", "txt":"Hotels"},
	{"title":"Attractions", "url":"attractions", "txt":"Attractions"},
	{"title":"See Atlanta Georgia", "url":"maarjin/explore/atlanta-georgia-us", "txt":"Atlanta"},
	{"title":"See Los Angeles", "url":"maarjin/explore/los-angeles-california-us", "txt":"Los Angeles"},
	{"title":"See Chicago", "url":"maarjin/explore/chicago-illinois-us", "txt":"Chicago"},
	{"title":"See New York", "url":"maarjin/explore/new-york-new-york-us", "txt":"New York"},
];


const CityProfile = {
	template: 
		`<div class="section spacer-bottom-2x">

			<div class="content-margin" style="margin:0 auto; width:100%; max-width:1264px;">

				<div class="box">
					<div class="title" style="margin-bottom:20px; height:auto;">
						<h2 style="color:#131d26; font-size:2.4em; width:auto; margin-bottom: 8px;">{{title}}</h2>
						<!-- <InternalComponent postTitle="TEXT TEST"></InternalComponent>
						<ExternalComponent/> -->
					</div>
				</div>

			</div>

		</div>

		<div class="section spacer-bottom-2x">
			<div class="content-margin" style="margin:0 auto; width:100%; max-width:1264px;">

				<div style="width:100%; float:left;">

					<ul class="list card-profile">
						<li class="item" v-for="item in act">
							<div class="col">
								<div class="image">
									<a :href=item.link target="_blank">
										<!--<img :src=item.src /> -->
										<img :src=item.imgLocal />
									</a>
								</div>
							</div><!-- end of col -->
							<div class="col">
								<div class="caption">
									<a :href=item.link target="_blank">
										<h3>{{ item.title }}</h3>
										<p>{{ item.description }}</p>
									</a>
								</div>
							</div><!-- end of col -->
							<div class="col">
								<div class="row">
									<span><b>around</b> <b>{{ item.price }}</b></span>
								</div>
							</div><!-- end of col -->
						</li>
					</ul>

				</div>

			</div>
		</div>`,
	data(){
		return { str:[1, 3, 45], location: [5,10,25], ary1:{one:"one two three"},
			data:null,
			computedPageData: "",
			activities:"",
			act: null,
			title:null

		}
	},
	computed: {
		location() {
			return this.$route.params.id;
		},
		computedFunction: function(){
			return this.data.filter(a => {return a.url == this.location})[0]
		}
	},
	async created(){
		const response = await fetch(relativePath+'/data/worldcities-key.json');
		const jsonData = await response.json();
		const v = jsonData[this.$route.params.id];

		const res = await fetch(relativePath+'/data/worldcities-url.json');
		const db = await res.json();

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

		document.title = db[v].city + ", " + db[v].admin_name + ", " + db[v].country;
		let miles = 30*(360/24901);
		this.computedPageData = db[v];
		this.title = `${this.computedPageData.city}, ${this.computedPageData.admin_name} ${this.computedPageData.iso2}`;

	}
};

const Results = {
	template:
	`
	<div class="section" style="margin-bottom:47px !important;">

		<div class="content-margin" style="margin:0 auto; width:100%; max-width:1264px;">

			<div style="width:100%; max-width:320px; float:left; background:purple; display:none;">
					Left side
			</div>

			<div class="temporary">
				<div class="box">
					<div class="title">
						<h2>{{total}}</h2>
					</div>
					<div style="float:right; padding:7px 13px; border-radius:4px; background:#eee; display:none;">
						<select style="background:none;">
							<option>Low To High</option>
							<option>High To Low</option>
						</select>
					</div>
				</div>
				<div style="width:100%; margin-bottom:20px; display:none;">
					<h2 style="font-size:21px; margin-bottom:10px;">Where you're logged in</h2>
					<p style="font-size: 18px; line-height: 1.4em;">We'll alert you via olivia@untitled.com if there is any unusual activity on your account</p>
				</div>
				<ul id="results" class="list card-110">

					<li class="card" v-for="i in data" :key="data.id">
						<div class="image">
							<svg id="Lines" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.96 77.38"><defs><style>.cls-1{fill:#aaa;}</style></defs><title>navigation icon</title><path class="cls-1" d="M479.5,59.75a27,27,0,0,0-27,27c0,19.19,26.14,50.4,27,50.4s27-31.21,27-50.4A27,27,0,0,0,479.5,59.75Zm0,38.38a11.4,11.4,0,1,1,11.4-11.4A11.4,11.4,0,0,1,479.5,98.13Z" transform="translate(-452.52 -59.75)"/></svg>
						</div>
						<div class="caption">
							<a :href=i.item.url>
							<h3>{{ i.item.city }}</h3>
							<p style="font-size:14px;">{{ i.item.admin_name }}, {{ i.item.country }}</p>
							<p style="">{{ i.item.description }}</p>
							<!-- <p style="margin-bottom:8px;">2-8 hours</p> -->
							<!-- <p style="margin-bottom:10px;">Fully refundable</p> -->
							<!-- <p>Recommended by 90% of travelers</p> -->
							</a>
						</div>
					</li><!-- end of card -->

				</ul>
				<div style="width:100%;">
					<ul>
						<li class="item" v-for="i in pagination" :key="pagination.id">{{pagination.id}}</li>
					</ul>
				</div>
			</div>

		</div><!-- end of content-margin -->

	</div><!-- end of section -->`,
	data(){
		return {
			data:null,
			total: "",
			pagination:""
		}
	},
	async created(){
		const rsp = await fetch(relativePath+'/data/worldcities-url.json');// const rsp = await fetch(relativePath+'/data/viator-comedy.json');
		const r = await rsp.json();
		//this.data = r.filter(m => m.city.match(this.$route.query.s));

		let results = find(r,this.$route.query.q);
		for(let i in results){results[i].item.url = relativePath + '/explore/' + results[i].item.url;}
		this.data = results;
		this.total = this.data.length + " Results found for " + this.$route.query.q;
		document.title = 'Results for ' + this.$route.query.q;
	}};

const routes = [
  { path: relativePath+'/', component: Home, 
  	meta:{
  		title:"Maarjin"} 
  },
  { path: relativePath+'/explore', component: Explore, 
  	meta:{
  		title:"Explore Page"} 
  },
  { path: relativePath+'/flights', component: Flights, 
  	meta:{
  		title:"Flights"} 
  },
  { path: relativePath+'/hotels', component: Hotels, 
  	meta:{
  		title:"Hotels"} 
  },
  { path: relativePath+'/attractions', component: Attractions, 
  	meta:{
  		title:"Attractions"} 
  },
  { path: relativePath+'/blog', component: Blog, 
  	meta:{
  		title:"Blog"} 
  },
  { path: relativePath+'/seasonal', component: Seasonal, 
  	meta:{
  		title:"Seasonal"} 
  },
  { path: relativePath+'/tours', component: Tours, 
  	meta:{
  		title:"Tours"} 
  },
  { path: relativePath+'/explore/:id', component: CityProfile, 
  	meta:{
  		title: addTitle()} 
  },
  { path: relativePath+'/r', component: Results, 
  	meta:{
  		title:"Results for "} 
  },
]

const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHistory(),
  routes, // short for `routes: routes`
})

router.beforeEach((to,from,next) =>{
	document.title = `${to.meta.title}`;
	next();
});


// 5. Create and mount the root instance.
const app = Vue.createApp({
	data(){
		return{
			open: false,
			ary: [ 
			  {
			    "city": "Athens",
			    "city_ascii": "Athens",
			    "lat": 33.9508,
			    "lng": -83.3689,
			    "country": "United States",
			    "iso2": "US",
			    "iso3": "USA",
			    "admin_name": "Georgia",
			    "capital": "",
			    "population": 140169,
			    "id": 1840029463,
			    "url": "athens-georgia-us"
			  },
			  {
			    "city": "Atlanta",
			    "city_ascii": "Atlanta",
			    "lat": 33.7626,
			    "lng": -84.4228,
			    "country": "United States",
			    "iso2": "US",
			    "iso3": "USA",
			    "admin_name": "Georgia",
			    "capital": "admin",
			    "population": 5228750,
			    "id": 1840013660,
			    "url": "atlanta-georgia-us"
			  },
			  {
			    "city": "Auburn",
			    "city_ascii": "Auburn",
			    "lat": 34.0151,
			    "lng": -83.8317,
			    "country": "United States",
			    "iso2": "US",
			    "iso3": "USA",
			    "admin_name": "Georgia",
			    "capital": "",
			    "population": 7622,
			    "id": 1840013680,
			    "url": "auburn-georgia-us"
			  },
			  {
			    "city": "Augusta",
			    "city_ascii": "Augusta",
			    "lat": 33.3645,
			    "lng": -82.0708,
			    "country": "United States",
			    "iso2": "US",
			    "iso3": "USA",
			    "admin_name": "Georgia",
			    "capital": "admin",
			    "population": 389383,
			    "id": 1840029462,
			    "url": "augusta-georgia-us"
			  },
			  {
			    "city": "Austell",
			    "city_ascii": "Austell",
			    "lat": 33.8202,
			    "lng": -84.6453,
			    "country": "United States",
			    "iso2": "US",
			    "iso3": "USA",
			    "admin_name": "Georgia",
			    "capital": "",
			    "population": 7215,
			    "id": 1840013689,
			    "url": "austell-georgia-us"
			  },
			  {
			    "city": "Bainbridge",
			    "city_ascii": "Bainbridge",
			    "lat": 30.9046,
			    "lng": -84.5722,
			    "country": "United States",
			    "iso2": "US",
			    "iso3": "USA",
			    "admin_name": "Georgia",
			    "capital": "",
			    "population": 11558,
			    "id": 1840013899,
			    "url": "bainbridge-georgia-us"
			  },
			  {
			    "city": "Barnesville",
			    "city_ascii": "Barnesville",
			    "lat": 33.0511,
			    "lng": -84.1526,
			    "country": "United States",
			    "iso2": "US",
			    "iso3": "USA",
			    "admin_name": "Georgia",
			    "capital": "",
			    "population": 6908,
			    "id": 1840013783,
			    "url": "barnesville-georgia-us"
			  },
			  {
			    "city": "Baxley",
			    "city_ascii": "Baxley",
			    "lat": 31.7642,
			    "lng": -82.3508,
			    "country": "United States",
			    "iso2": "US",
			    "iso3": "USA",
			    "admin_name": "Georgia",
			    "capital": "",
			    "population": 5578,
			    "id": 1840013850,
			    "url": "baxley-georgia-us"
			  },
			  {
			    "city": "Braselton",
			    "city_ascii": "Braselton",
			    "lat": 34.1086,
			    "lng": -83.8126,
			    "country": "United States",
			    "iso2": "US",
			    "iso3": "USA",
			    "admin_name": "Georgia",
			    "capital": "",
			    "population": 10947,
			    "id": 1840015596,
			    "url": "braselton-georgia-us"
			  },
			  {
			    "city": "Bremen",
			    "city_ascii": "Bremen",
			    "lat": 33.7086,
			    "lng": -85.1498,
			    "country": "United States",
			    "iso2": "US",
			    "iso3": "USA",
			    "admin_name": "Georgia",
			    "capital": "",
			    "population": 6725,
			    "id": 1840013715,
			    "url": "bremen-georgia-us"
			  },
			  {
			    "city": "Brookhaven",
			    "city_ascii": "Brookhaven",
			    "lat": 33.8746,
			    "lng": -84.3314,
			    "country": "United States",
			    "iso2": "US",
			    "iso3": "USA",
			    "admin_name": "Georgia",
			    "capital": "",
			    "population": 53518,
			    "id": 1840029224,
			    "url": "brookhaven-georgia-us"
			  },
			  {
			    "city": "Brunswick",
			    "city_ascii": "Brunswick",
			    "lat": 31.145,
			    "lng": -81.474,
			    "country": "United States",
			    "iso2": "US",
			    "iso3": "USA",
			    "admin_name": "Georgia",
			    "capital": "",
			    "population": 54017,
			    "id": 1840013875,
			    "url": "brunswick-georgia-us"
			  },
			  {
			    "city": "Buford",
			    "city_ascii": "Buford",
			    "lat": 34.1185,
			    "lng": -83.9917,
			    "country": "United States",
			    "iso2": "US",
			    "iso3": "USA",
			    "admin_name": "Georgia",
			    "capital": "",
			    "population": 14868,
			    "id": 1840013678,
			    "url": "buford-georgia-us"
			  },
			  {
			    "city": "Byron",
			    "city_ascii": "Byron",
			    "lat": 32.6475,
			    "lng": -83.754,
			    "country": "United States",
			    "iso2": "US",
			    "iso3": "USA",
			    "admin_name": "Georgia",
			    "capital": "",
			    "population": 5170,
			    "id": 1840013820,
			    "url": "byron-georgia-us"
			  },
			  {
			    "city": "Cairo",
			    "city_ascii": "Cairo",
			    "lat": 30.879,
			    "lng": -84.2051,
			    "country": "United States",
			    "iso2": "US",
			    "iso3": "USA",
			    "admin_name": "Georgia",
			    "capital": "",
			    "population": 9244,
			    "id": 1840013900,
			    "url": "cairo-georgia-us"
			  },
			  {
			    "city": "Calhoun",
			    "city_ascii": "Calhoun",
			    "lat": 34.4927,
			    "lng": -84.9395,
			    "country": "United States",
			    "iso2": "US",
			    "iso3": "USA",
			    "admin_name": "Georgia",
			    "capital": "",
			    "population": 33029,
			    "id": 1840013596,
			    "url": "calhoun-georgia-us"
			  },
			  {
			    "city": "Camilla",
			    "city_ascii": "Camilla",
			    "lat": 31.2337,
			    "lng": -84.2089,
			    "country": "United States",
			    "iso2": "US",
			    "iso3": "USA",
			    "admin_name": "Georgia",
			    "capital": "",
			    "population": 6511,
			    "id": 1840013877,
			    "url": "camilla-georgia-us"
			  },
			  {
			    "city": "Canton",
			    "city_ascii": "Canton",
			    "lat": 34.2469,
			    "lng": -84.4902,
			    "country": "United States",
			    "iso2": "US",
			    "iso3": "USA",
			    "admin_name": "Georgia",
			    "capital": "",
			    "population": 27936,
			    "id": 1840014703,
			    "url": "canton-georgia-us"
			  },
			  {
			    "city": "Carrollton",
			    "city_ascii": "Carrollton",
			    "lat": 33.5818,
			    "lng": -85.0837,
			    "country": "United States",
			    "iso2": "US",
			    "iso3": "USA",
			    "admin_name": "Georgia",
			    "capital": "",
			    "population": 47140,
			    "id": 1840014801,
			    "url": "carrollton-georgia-us"
			  },
			  {
			    "city": "Cartersville",
			    "city_ascii": "Cartersville",
			    "lat": 34.1632,
			    "lng": -84.8007,
			    "country": "United States",
			    "iso2": "US",
			    "iso3": "USA",
			    "admin_name": "Georgia",
			    "capital": "",
			    "population": 55794,
			    "id": 1840014701,
			    "url": "cartersville-georgia-us"
			  },
			  {
			    "city": "Cedartown",
			    "city_ascii": "Cedartown",
			    "lat": 34.0224,
			    "lng": -85.248,
			    "country": "United States",
			    "iso2": "US",
			    "iso3": "USA",
			    "admin_name": "Georgia",
			    "capital": "",
			    "population": 12744,
			    "id": 1840014752,
			    "url": "cedartown-georgia-us"
			  },
			  {
			    "city": "Centerville",
			    "city_ascii": "Centerville",
			    "lat": 32.6341,
			    "lng": -83.6853,
			    "country": "United States",
			    "iso2": "US",
			    "iso3": "USA",
			    "admin_name": "Georgia",
			    "capital": "",
			    "population": 7716,
			    "id": 1840014884,
			    "url": "centerville-georgia-us"
			  },
			  {
			    "city": "Chamblee",
			    "city_ascii": "Chamblee",
			    "lat": 33.8842,
			    "lng": -84.3008,
			    "country": "United States",
			    "iso2": "US",
			    "iso3": "USA",
			    "admin_name": "Georgia",
			    "capital": "",
			    "population": 29428,
			    "id": 1840014775,
			    "url": "chamblee-georgia-us"
			  },
			  {
			    "city": "Clarkston",
			    "city_ascii": "Clarkston",
			    "lat": 33.8117,
			    "lng": -84.2405,
			    "country": "United States",
			    "iso2": "US",
			    "iso3": "USA",
			    "admin_name": "Georgia",
			    "capital": "",
			    "population": 12848,
			    "id": 1840014776,
			    "url": "clarkston-georgia-us"
			  },
			  {
			    "city": "Cleveland",
			    "city_ascii": "Cleveland",
			    "lat": 34.5971,
			    "lng": -83.7622,
			    "country": "United States",
			    "iso2": "US",
			    "iso3": "USA",
			    "admin_name": "Georgia",
			    "capital": "",
			    "population": 5025,
			    "id": 1840014665,
			    "url": "cleveland-georgia-us"
			  },
			  {
			    "city": "Cochran",
			    "city_ascii": "Cochran",
			    "lat": 32.3875,
			    "lng": -83.3523,
			    "country": "United States",
			    "iso2": "US",
			    "iso3": "USA",
			    "admin_name": "Georgia",
			    "capital": "",
			    "population": 6024,
			    "id": 1840014890,
			    "url": "cochran-georgia-us"
			  },
			  {
			    "city": "College Park",
			    "city_ascii": "College Park",
			    "lat": 33.637,
			    "lng": -84.4629,
			    "country": "United States",
			    "iso2": "US",
			    "iso3": "USA",
			    "admin_name": "Georgia",
			    "capital": "",
			    "population": 14959,
			    "id": 1840014737,
			    "url": "college-park-georgia-us"
			  },
			  {
			    "city": "Columbus",
			    "city_ascii": "Columbus",
			    "lat": 32.51,
			    "lng": -84.8771,
			    "country": "United States",
			    "iso2": "US",
			    "iso3": "USA",
			    "admin_name": "Georgia",
			    "capital": "",
			    "population": 259160,
			    "id": 1840014887,
			    "url": "columbus-georgia-us"
			  },
			  {
			    "city": "Commerce",
			    "city_ascii": "Commerce",
			    "lat": 34.2129,
			    "lng": -83.4729,
			    "country": "United States",
			    "iso2": "US",
			    "iso3": "USA",
			    "admin_name": "Georgia",
			    "capital": "",
			    "population": 6965,
			    "id": 1840014720,
			    "url": "commerce-georgia-us"
			  },
			  {
			    "city": "Conyers",
			    "city_ascii": "Conyers",
			    "lat": 33.6645,
			    "lng": -83.9967,
			    "country": "United States",
			    "iso2": "US",
			    "iso3": "USA",
			    "admin_name": "Georgia",
			    "capital": "",
			    "population": 16015,
			    "id": 1840014806,
			    "url": "conyers-georgia-us"
			  },
			  {
			    "city": "Cordele",
			    "city_ascii": "Cordele",
			    "lat": 31.9563,
			    "lng": -83.7694,
			    "country": "United States",
			    "iso2": "US",
			    "iso3": "USA",
			    "admin_name": "Georgia",
			    "capital": "",
			    "population": 11947,
			    "id": 1840014934,
			    "url": "cordele-georgia-us"
			  },
			  {
			    "city": "Cornelia",
			    "city_ascii": "Cornelia",
			    "lat": 34.5164,
			    "lng": -83.5308,
			    "country": "United States",
			    "iso2": "US",
			    "iso3": "USA",
			    "admin_name": "Georgia",
			    "capital": "",
			    "population": 19046,
			    "id": 1840014661,
			    "url": "cornelia-georgia-us"
			  },
			  {
			    "city": "Covington",
			    "city_ascii": "Covington",
			    "lat": 33.6049,
			    "lng": -83.8465,
			    "country": "United States",
			    "iso2": "US",
			    "iso3": "USA",
			    "admin_name": "Georgia",
			    "capital": "",
			    "population": 14044,
			    "id": 1840014808,
			    "url": "covington-georgia-us"
			  },
			  {
			    "city": "Cumming",
			    "city_ascii": "Cumming",
			    "lat": 34.2066,
			    "lng": -84.1337,
			    "country": "United States",
			    "iso2": "US",
			    "iso3": "USA",
			    "admin_name": "Georgia",
			    "capital": "",
			    "population": 6284,
			    "id": 1840014712,
			    "url": "cumming-georgia-us"
			  },
			  {
			    "city": "Cusseta",
			    "city_ascii": "Cusseta",
			    "lat": 32.347,
			    "lng": -84.787,
			    "country": "United States",
			    "iso2": "US",
			    "iso3": "USA",
			    "admin_name": "Georgia",
			    "capital": "",
			    "population": 10343,
			    "id": 1840029395,
			    "url": "cusseta-georgia-us"
			  },
			  {
			    "city": "Dacula",
			    "city_ascii": "Dacula",
			    "lat": 33.9815,
			    "lng": -83.8951,
			    "country": "United States",
			    "iso2": "US",
			    "iso3": "USA",
			    "admin_name": "Georgia",
			    "capital": "",
			    "population": 6190,
			    "id": 1840014743,
			    "url": "dacula-georgia-us"
			  },
			  {
			    "city": "Dahlonega",
			    "city_ascii": "Dahlonega",
			    "lat": 34.5302,
			    "lng": -83.9796,
			    "country": "United States",
			    "iso2": "US",
			    "iso3": "USA",
			    "admin_name": "Georgia",
			    "capital": "",
			    "population": 6432,
			    "id": 1840014672,
			    "url": "dahlonega-georgia-us"
			  },
			  {
			    "city": "Dallas",
			    "city_ascii": "Dallas",
			    "lat": 33.9153,
			    "lng": -84.8416,
			    "country": "United States",
			    "iso2": "US",
			    "iso3": "USA",
			    "admin_name": "Georgia",
			    "capital": "",
			    "population": 13237,
			    "id": 1840014757,
			    "url": "dallas-georgia-us"
			  },
			  {
			    "city": "Dalton",
			    "city_ascii": "Dalton",
			    "lat": 34.7689,
			    "lng": -84.9711,
			    "country": "United States",
			    "iso2": "US",
			    "iso3": "USA",
			    "admin_name": "Georgia",
			    "capital": "",
			    "population": 86841,
			    "id": 1840014651,
			    "url": "dalton-georgia-us"
			  },
			  {
			    "city": "Decatur",
			    "city_ascii": "Decatur",
			    "lat": 33.7711,
			    "lng": -84.2968,
			    "country": "United States",
			    "iso2": "US",
			    "iso3": "USA",
			    "admin_name": "Georgia",
			    "capital": "",
			    "population": 23832,
			    "id": 1840014777,
			    "url": "decatur-georgia-us"
			  },
			  {
			    "city": "Doraville",
			    "city_ascii": "Doraville",
			    "lat": 33.9073,
			    "lng": -84.2711,
			    "country": "United States",
			    "iso2": "US",
			    "iso3": "USA",
			    "admin_name": "Georgia",
			    "capital": "",
			    "population": 10540,
			    "id": 1840014778,
			    "url": "doraville-georgia-us"
			  },
			  {
			    "city": "Douglas",
			    "city_ascii": "Douglas",
			    "lat": 31.5073,
			    "lng": -82.8543,
			    "country": "United States",
			    "iso2": "US",
			    "iso3": "USA",
			    "admin_name": "Georgia",
			    "capital": "",
			    "population": 13960,
			    "id": 1840014946,
			    "url": "douglas-georgia-us"
			  },
			  {
			    "city": "Douglasville",
			    "city_ascii": "Douglasville",
			    "lat": 33.7384,
			    "lng": -84.7074,
			    "country": "United States",
			    "iso2": "US",
			    "iso3": "USA",
			    "admin_name": "Georgia",
			    "capital": "",
			    "population": 33675,
			    "id": 1840014804,
			    "url": "douglasville-georgia-us"
			  }
			],
			input:null,
			queryStr: 'q'
		}
	},
	methods:{ 
		menuOpen: function(){
			open == false ? open = true : open = false;
		},
		getData: async function(){
			function g(id){return document.getElementById(id);}
			let inp = g('inputSearch');
			let ary = null; let txt = ""; let n = 3; let limit = 7; let autoList = g('auto-list');
			//const response = await fetch(relativePath+'/data/worldcities-url.json');
			//const db = await response.json();
			const db = await JSONDB;

			inp.addEventListener('keyup', ()=>{
				let loop = 0;let msg = ""; txt = ""; autoList.innerHTML = txt;

				if (inp.value.length >= n){
					ary = this.find(db, inp.value.trim());

					ary.then((value) => {
						if(value.length > limit){
							loop = limit;
							msg = "a list larger than the limit will appear here" + value.length;
						} else {
							loop = value.length;
							msg = "";
						}
						if(value.length > 0){
							for(let i = 0; i < loop; i++){
								txt += '<li><a href="'+ relativePath + '/explore/' +value[i].item.url +'">'+ value[i].item.city +'<br/><span style="font-size:12px;"> ' + value[i].item.admin_name + ', ' + value[i].item.country + '</span></a></li>';

								// txt += '<li><a href="'+ value[i].item.link +'">'+ value[i].item.title +'<br/><span style="font-size:18px;"> ' + value[i].item.price + '</span></a></li>';
							}
							autoList.innerHTML = txt + msg;
						};
					});
				};
				inp.addEventListener('ArrowDown', ()=>{
					//console.log('ArrowDown');
					//if(g('auto-list').children > 0){
					//}
				})

				/*if (inp.value.length >= n){
					//ary = find(db,inp.value);
					for(let i in ary){
						txt += ary[i].item.city + '<br/>';
					}
					autoList.innerHTML = txt;
				};*/
			});

			let boo = false;
			//SOLVED 2023/07/20 @11:47pm

			const form = g("search-bar-top");

			document.addEventListener('click', 
				function (e){
				  boo = false;
				  if(boo == false)autoList.style.display = "none";
				}
			);

			form.addEventListener('click',
			function(evt){
			  evt.stopPropagation();
			  boo = true;
			  if(boo == true)autoList.style.display = "block";
			}, false);
		},
		find: async function (data,value){
			let options = {
				shouldSort: true,
				tokenize: true,
				includeScore: true,
				includeMatches: false,
				findAllMatches: false,
				threshold: 0.1,
				location: 1,
				distance: 50,
				maxPatternLength: 32,
				minMatchCharLength: 3,
				keys: [
					"city",
					"admin_name",
					"country"
				]
			};

			options["keys"].push(["title", "link", "url"]); // temporary over write

			let fuse = new Fuse(data, options);
			let result = fuse.search(value);
			return result;
		},

		findList: async function (){
			let txt = ""; let n = 4;
			this.input = event.target.value.trim().toLowerCase();
			let jsonData = await this.locDB();
			txt = ""; g("auto-list").innerHTML = txt;
			if (this.input.length >= n) {
				this.ary = jsonData.filter(m => m.url.match(this.input));
				if(this.ary.length > 0){
					for(let i in this.ary){
						txt += '<li><a href="'+ relativePath + '/explore/' +this.ary[i].url +'">'+ this.ary[i].city +'<br/><span style="font-size:12px;"> ' + this.ary[i].admin_name + ', ' + this.ary[i].iso3 + '</span></a></li>';
						//list.innerHTML = txt;
						g("auto-list").innerHTML = txt;
					}
				};
			};

			let boo = false;
			//SOLVED 2023/07/20 @11:47pm

			const form = g("search-bar-top");

			document.addEventListener('click', 
			function (e){
			  boo = false;
			  if(boo == false)g("auto-list").style.display = "none";
			}
			);

			form.addEventListener('click',
			function(evt){
			  evt.stopPropagation();
			  boo = true;
			  if(boo == true)g("auto-list").style.display = "block";
			}, false);
		},

		sendQuery: function(event){
			event.preventDefault();
			if(!document.getElementById("inputSearch").value == ""){
				window.location.href = relativePath+'/r?q=' + document.getElementById("inputSearch").value.trim();
			};
		}
	}
})


// INTERNAL COMPONENT
const INSIDE = {
	template:`<div style="float:left; width:200px; height:100px; padding:10px; font-size:13px; background:orange;"> <b>Internal component.</b> this is div is from App.js{{postTitle}}</div>`,
	 props: ['postTitle']
};

app.component('InternalComponent', INSIDE);
app.component('ExternalComponent', Thumb);
app.component('agoda', {template:agoda.template});
app.use(router)
app.mount('#wrapper')

/*
2023/09/07 @10:00pm - solved importing single-file component issue. Now everything imports, the template, data, methods and so on.
*/