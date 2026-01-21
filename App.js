/*
CREATED: Monday, January 22, 2024, 10:28:26 PM
LAST MODIFIED: Wednesday, April 17, 2024, 3:45:06 PM
MODIFIED: Sunday, July 28, 2024, 3:13:41 PM - Fixed bug that disallowed multiple instances of a recursion function from working properly.
MODIFIED: Sunday, July 28, 2024, 11:05:31 PM - Did a quick solution for adding items to favorites.
MODIFIED: Tuesday, July 30, 2024, 6:09:28 PM - got recursion to work properly. Made the mistake of placing 'E.parentNode' in recursion parameter within the else condition; Instead placed VALUE string in the parameter of recursion. Minor mistakes like this can literally take up the whole day. Otherwise the code worked as intended from the start.
MODIFIED: Tuesday, July 30, 2024, 7:05:58 PM - Completed part of dynamically adding function to eventDelegation function. Now it's multipurpose and can be used multiple times in this and other projects.

RESUME: January 16, 2026, @4:04PM - Finish the job and apply what I've learned the 2 years since.
RESUME: 2026/01/18 @12:30pm -> @1:30pm - Working on cityProfile.js.
MODIFIED: Sunday, January 18, 2026 @10:14:51 PM SUCCESSFUL: - have city data populate in cityProfile.js

*/
console.log('Start App.js', Date())
import worldcitiesKeys from './data/worldcities-key.js'; //console.log(worldcitiesKeys);
import worldCitiesUrl from './data/worldcities-url.js'; //console.log(worldCitiesUrl);
//import worldCitiesUrl from './data/worldCitiesUrl.js'; console.log(worldCitiesUrl);
/*async function getData(){ // test later
await fetch('./data/worldCitiesUrl.js')
	.then(response => response.json())
	.then(data => {
		console.log('getData triggered');
		console.log(data);
	})
	.catch(error => console.error('Error loading JSON:', error));
};
getData();*/
//import viatorDB from './data/viator-db.js';
/*window.messageApp = "Message from App.js";
		console.log("APP.JS", Date(), messageHeader, messageFooter, db)*/

import {addTitle, coordinateDistanceRange, db, find, g, Itinerary, Login, menuOpen, modal, relativePath, sort, sortByProperty} from './utils.js';
import Thumb from './sections/thumb.js';
import Home from './sections/home.js';
import Explore from './sections/explore.js';
import Attractions from './sections/attractions.js';
import Seasonal from './sections/seasonal.js';
import Tours from './sections/tours.js';
import Blog from './sections/blog.js';
import Post from './sections/post.js';
import Flights from './sections/flights.js';
import Hotels from './sections/hotels.js';
import CityProfile from './sections/cityProfile.js';
import Results from './sections/results.js';
import Timer from './sections/timer.js';
import TravelPlanner from './sections/travelplanner.js';
import Agoda from './components/agoda.js';
import Expedia from './components/expedia.js';
import HotelsDotCom from './components/hotelsDotCom.js';
import Vrbo from './components/vrbo.js';
import solo from './components/components.js';
import Modal from './components/modal.js';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Form from './components/form.js';

import activities from './data/activities.js'; console.log(activities);


let favorites = []; console.log(Itinerary())


const routes = [
	{ path:'/', component: Home, meta:{title:Home.meta.title} },
	{ path:'/explore', component: Explore, meta:{title:Explore.meta.title} },
	{ path:'/explore/:id', component: CityProfile, meta:{title: CityProfile.meta.title} },
	{ path:'/flights', component: Flights, meta:{title:Flights.meta.title} },
	{ path:'/hotels', component: Hotels, meta:{title: Hotels.meta.title} },
	{ path:'/attractions', component: Attractions, meta:{title: Attractions.meta.title} },
	{ path:'/blog', component: Blog, meta:{title: Blog.meta.title} },
	{ path:'/blog/:id', component: Post, meta:{title: Post.meta.title} },
	{ path:'/seasonal', component: Seasonal, meta:{title: Seasonal.meta.title} },
	{ path:'/tours', component: Tours, meta:{title: Tours.meta.title} },
	{ path:'/r', component: Results, meta:{title:Results.meta.title} },
	{ path:'/timer', component: Timer, meta:{title:Timer.meta.title} },
	{ path:'/travelplanner', component: TravelPlanner, meta:{title:TravelPlanner.meta.title} },
];

const router = VueRouter.createRouter({
	// 4. Provide the history implementation to use. We are using the hash history for simplicity here.
	history: VueRouter.createWebHistory(),
	routes, // short for `routes: routes`
	base: '/itinerary_2026/',
});

router.beforeEach((to,from,next) =>{
	document.title = `${to.meta.title}`;
	next();
});

// 5. Create and mount the root instance.
const app = Vue.createApp({
	template:`
	<div :class="splashPage" style="width:100%;">
		<Header></Header>

		<div id="content">

			<div class="section spacer-bottom-4x">
			</div>
			<router-view :universalBus="universalBus"></router-view>

		</div><!-- end of content -->

		<Footer></Footer>
	 </div>
	`,
	data(){
		return {
			universalBus:{},
		}
	},
	computed: {
		splashPage: function(){
			//if (this.$route.path == '/itinerary/' || this.$route.path == '/itinerary' || window.location.pathname.replace('/itinerary','') == '/') {
			//	return "home dark-mode";
			//}
			this.universalBus.worldcitiesKeys = worldcitiesKeys;
			this.universalBus.worldCitiesUrl = worldCitiesUrl;
			console.log(this.universalBus);
		},
	},
	setup(){

	},
});

app.config.errorHandler = (err, vm, info) => {
  console.error('Global Error:', err, vm, info);
  // Optionally: log the error to an external service
};

//console.log(app.config.errorHandler());

// INTERNAL COMPONENT
const INSIDE = {
	template:`<div style="width:100%; height:100px; padding:10px; font-size:13px; background:orange; box-sizing:border-box;"> <b>Internal component.</b> this is div is from App.js{{postTitle}}</div>`,
	 props: ['postTitle']
};

app.component('TravelPlaner', TravelPlanner);
app.component('Header', Header);
app.component('Footer', Footer);
app.component('Form', Form);
app.component('Login', Login);
app.component('InternalComponent', INSIDE);
app.component('ExternalComponent', Thumb);
app.component('Agoda', Agoda);
app.component('Expedia', Expedia);
app.component('Modal', Modal);
app.use(router);
app.mount('#wrapper');