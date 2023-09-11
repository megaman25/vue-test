import Thumb from '/sections/thumb.js';
import Home from '/sections/home.js';
import Explore from '/sections/explore.js';
import Attractions from '/sections/attractions.js';
import Seasonal from '/sections/seasonal.js';
import Tours from '/sections/tours.js';
import Blog from '/sections/blog.js';
import Flights from '/sections/flights.js';
import Hotels from '/sections/hotels.js';
//import CityProfile from '/sections/cityProfile.js';
//import Results from '/sections/results.js';
import agoda from '/sections/agoda.js';
import { name, street } from '/import-test.js';
import solo from '/components/components.js';

function addTitle (){
	return "maarjin - " + window.location.pathname;
}

const relativePath = "";

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
			ary: null,
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
