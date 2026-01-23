import {addTitle, coordinateDistanceRange, db, faveList, find, g, Login, menuOpen, relativePath} from '../utils.js';

const Header = {
	data(){
		return { 
			//..
		}
	},
	template:`
		<header id="header" class="header width-100" role="banner">
			<div class="section-body flex centered">

				<div class="left">
					<router-link id="logo" to="/" title="home page">
						<svg id="Layer_1" data-name="Layer 1" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 288.28 79.32"><title>portfolio logo</title><path d="M354.61,251.62c0-5.28-.17-9.7-0.35-13.51h11.17l0.52,5.72h0.26A14.65,14.65,0,0,1,379,237.07c5.54,0,9.79,2.86,11.6,7.27h0.17a18.41,18.41,0,0,1,5.54-5.2,16.12,16.12,0,0,1,8.05-2.08c8.14,0,14.29,5.71,14.29,18.44v24.94H405.87v-23c0-6.15-2-9.7-6.23-9.7a6.55,6.55,0,0,0-6.15,4.59,13.86,13.86,0,0,0-.43,3.38v24.77H380.24V256.64c0-5.28-1.91-8.92-6.15-8.92-3.38,0-5.37,2.6-6.15,4.68a8.9,8.9,0,0,0-.52,3.38v24.68H354.61V251.62Z" transform="translate(-354.26 -219.75)"/><path d="M464.32,270.23a54.88,54.88,0,0,0,.69,10.22H453.15l-0.78-4.24h-0.26c-2.77,3.38-7.1,5.2-12.12,5.2-8.57,0-13.68-6.23-13.68-13,0-11,9.87-16.19,24.85-16.19V251.7c0-2.34-1.21-5.54-7.71-5.54a23.81,23.81,0,0,0-11.69,3.2l-2.42-8.49a34.77,34.77,0,0,1,16.45-3.81c14.11,0,18.53,8.31,18.53,18.36v14.81Zm-12.73-9.78c-6.93,0-12.3,1.65-12.3,6.67,0,3.38,2.25,5,5.2,5a7.28,7.28,0,0,0,6.84-4.85,9.43,9.43,0,0,0,.26-2.25v-4.59Z" transform="translate(-354.26 -219.75)"/><path d="M510,270.23a54.89,54.89,0,0,0,.69,10.22H498.88l-0.78-4.24h-0.26c-2.77,3.38-7.1,5.2-12.12,5.2-8.57,0-13.68-6.23-13.68-13,0-11,9.87-16.19,24.85-16.19V251.7c0-2.34-1.21-5.54-7.71-5.54a23.81,23.81,0,0,0-11.69,3.2l-2.42-8.49a34.77,34.77,0,0,1,16.45-3.81c14.12,0,18.53,8.31,18.53,18.36v14.81Zm-12.73-9.78c-6.93,0-12.3,1.65-12.3,6.67,0,3.38,2.25,5,5.2,5a7.28,7.28,0,0,0,6.84-4.85,9.46,9.46,0,0,0,.26-2.25v-4.59Z" transform="translate(-354.26 -219.75)"/><path d="M520.53,252.05c0-6.23-.09-10.3-0.35-13.94h11.26L532,245.9h0.35c2.17-6.23,7.27-8.83,11.43-8.83a13.11,13.11,0,0,1,2.77.26v12.38a19.68,19.68,0,0,0-3.55-.35c-4.85,0-8.14,2.6-9,6.67a15.55,15.55,0,0,0-.26,2.94v21.48H520.53v-28.4Z" transform="translate(-354.26 -219.75)"/><path d="M544.78,288.77c3.38-.26,6.15-1,7.79-2.77,1.91-2,2.6-5.37,2.6-13.77V238.11h13.16v37.32c0,9.18-2,14.81-6,18.44s-10,5.2-16.28,5.2Zm23.9-62.43c0,3.64-2.68,6.58-7.1,6.58a6.48,6.48,0,0,1-6.84-6.58c0-3.72,2.77-6.58,7-6.58A6.51,6.51,0,0,1,568.68,226.33Z" transform="translate(-354.26 -219.75)"/><path d="M592.23,226.33c0,3.64-2.68,6.58-7.1,6.58a6.48,6.48,0,0,1-6.84-6.58c0-3.72,2.77-6.58,7-6.58A6.51,6.51,0,0,1,592.23,226.33Zm-13.59,54.12V238.11H591.8v42.34H578.64Z" transform="translate(-354.26 -219.75)"/><path d="M602.36,251.62c0-5.28-.17-9.7-0.35-13.51h11.43l0.61,5.89h0.26a15.21,15.21,0,0,1,13.08-6.84c8.66,0,15.15,5.8,15.15,18.27v25H629.38V257c0-5.46-1.91-9.18-6.67-9.18a7.23,7.23,0,0,0-6.75,4.94,9.49,9.49,0,0,0-.43,3.29v24.42H602.36V251.62Z" transform="translate(-354.26 -219.75)"/></svg>
					</router-link>
				</div><!-- end of divider -->

				<div class="center">

					<nav id="menu" role="navigation" class="nav-menu-hz overlay">
						<div id="close-menu-btn" class="close-btn">X</div>
						<!-- <img src=../img/nav-mobile-menu.jpg style="width:100%; top:0px; z-index:-10; position:absolute;" /> -->
						<ul>
							<li><router-link title="Home" to="/">Home</router-link></li>
							<li><router-link title="Explore" to="/explore">Explore</router-link></li>
							<li><router-link title="Guides" to="/blog">Guides</router-link></li>
							<li><div class="faves" v-on:click="openFavorites"><button>Favorites</button></div></li>
							<li><div class="trip" v-on:click="openTripPlanner"><button>Plan Trip</button></div></li>
						</ul>
					</nav>
				</div><!-- end of divider -->

				<div id="right" class="right">

					<div id="search-bar-top" class="column-container search-bar-top" style="">
						<Form></Form>
					</div><!-- end of column-container -->

					<div class="column-container hide" style="float:right;">
						<Login></Login>
					</div><!-- end of column-container -->

					<div class="column-container">
						<div style="float:left; margin-top:-10%;">
							<div id="search-icon" class="mobile-btn" v-on:click="openSearch">
								<button>
									<img src="/img/icon-search-round.svg" alt="menu icon" />
								</button>
							</div>
							<div id="menu-icon" class="mobile-btn" v-on:click="openMenu">
								<button>
									<!-- <img src="img/icon-menu.svg" alt="menu icon"/> -->
									<img src="/img/icon-menu-doner.svg" alt="menu icon" />
									<!-- <svg id="Layer_1" data-name="Layer 1" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 56 224"><defs><style>.cls-menu-dots{fill:#727271;fill-rule:evenodd;}</style></defs><title>dots-3</title><path class="cls-menu-dots" d="M480,210a28,28,0,1,1-28,28A28,28,0,0,1,480,210Z" transform="translate(-452 -210)"/><path class="cls-menu-dots" d="M480,294a28,28,0,1,1-28,28A28,28,0,0,1,480,294Z" transform="translate(-452 -210)"/><path class="cls-menu-dots" d="M480,378a28,28,0,1,1-28,28A28,28,0,0,1,480,378Z" transform="translate(-452 -210)"/></svg> -->
								</button>
							</div>
						</div>
					</div><!-- end of column-container -->

				</div><!-- end of divider -->

			</div><!-- end of section-body -->
		</header>`,
	data(){
		return {
			dir: "/"
		}
	},
	mounted(){
		//...
	},
	computed:{
		location(){
			//return this.$route;
		}
	},
	watch:{

	},
	data(){
		return{}
	},
	mounted(){
		//...
	},
	methods:{ 
		menuOpen: menuOpen,
		openSearch: function(){
			let open = document.getElementById('search-icon');
			let form = document.getElementById('search-bar-top');
			let close = document.getElementById('close-search-btn');
			document.body.classList.add('overlay');
			form.classList.add('open');
			close.onclick = ()=>{form.classList.remove('open'); document.body.classList.remove('overlay');};
			/*for(let i in form.classList){
				if(form.classList[i] == 'search-bar-top'){
					console.log(form.classList[i], ' removed')
					form.classList.remove(form.classList[i]);
				}
			}*/
			//open.addEventListener('click', function(){console.log("button clicked")}, false);
			//open.onclick = ()=>{console.log('button clicked');};
			/*let list = document.getElementById('search-bar-top');
			// let closeBtn = document.getElementById('close-search-btn');
			if(event.target.parentElement.parentElement.id == 'search-icon'){
				list.classList.add('open');
			};
			if(event.target.className == 'close-btn'){
				list.classList.remove("open");
			};*/
		},
		openMenu: function(){
			function addFn(A,fn){for(let i = 0; i < A.length; i++){A[i].addEventListener('click', fn);};};
			function $(el){return document.querySelectorAll(el);};
			function el(el){return document.createElement(el);};
			let menu = el('div'); console.log(menu)
			menu.id = 'mobileMenu';
			menu.classList.add('modal');
			menu.innerHTML = 
				`<div class="overlay">
				</div>
				<div class="modal-content">
						<div class="box">
								<div class="close-btn">X</div>
						</div>
						<div class="box">
							<nav id="" role="navigation" class="">
								<ul>
									<li><a title="Home" href="/">Home</a></li>
									<li><a title="Explore" href="/explore">Explore</a></li>
									<li><a title="Guides" href="/blog">Guides</a></li>
								</ul>
							</nav>
						</div>
				</div>`;
			document.body.append(menu);
			document.body.classList.add('overlay');
			addFn($('.close-btn'), ()=>{
				console.log($('#'+menu.id));
				if($('#'+menu.id).length > 0){
					document.body.classList.remove('overlay');
					$('#'+menu.id)[0].remove();
				};
			});
		},
		openFavorites: function(){
			document.getElementById('header').addEventListener('click', ()=>{
				if(true){console.log('from header.js', window.event, window.event.target.className)};
			}, true);
			function addFn(A,fn){for(let i = 0; i < A.length; i++){A[i].addEventListener('click', fn);};};
			function $(el){return document.querySelectorAll(el);};
			function el(el){return document.createElement(el);};
			let modal = el('div'); console.log(modal)
			modal.id = 'favorites';
			modal.classList.add('modal');
			modal.innerHTML = 
				`<div class="overlay"></div>
				<div class="modal-content-fullscreen">
					<div class="box">
						<div class="close-btn">X</div>
					</div>
					<div class="box">
							<h2>Favorites</h2>
					</div>
					<div class="box">
						<nav id="" role="navigation" class="" style="font-size:1.6rem; width:300px;">
							<ul class="list">${faveList()}</ul>
						</nav>

						<div class="btn create-trip" style="padding: 0.75em 0.5em; background: pink; border-radius: 4px;">Create Trip</div>
					</div>
					<div class="btn-cancel" style="background:red; padding:1em;">Cancel</div>
				</div>`;
			document.body.append(modal);
			document.body.classList.add('overlay');
			addFn($('.close-btn'), ()=>{
				console.log($('#'+modal.id));
				if($('#'+modal.id).length > 0){
					document.body.classList.remove('overlay');
					$('#'+modal.id)[0].remove();
				};
			});
			/*let Str = ['btn']; let fnList = []; UNDER EVALUATION
			function ask(str){ // array of string names ['btn', ] // if(event.target.dataset.location = str)
				return (event.target.dataset.location = str)? true : false;
			};
			for(let i=0; i < Str.length; i++){
				fnList.push(Ask(Str[i]));
			};*/
			function createBox(){
				let boolean = false;
				let obj = document.createElement('div');
				obj.style.width = '200px';
				obj.style.height = '150px';
				obj.style.background = '#555';
				obj.style.borderRadius = '8px';
				obj.innerHTML = '<div class="date-input"><label>Start Date</label><input type="text"/></div> <div><label>End Date</label><input type="text"/></div> <div class="btn-cancel" style="float:left; background:#ccc; padding:1em 0.5em;">Cancel Date</div> <div class="btn-submit" style="float:left; background:#eee; padding:1em 0.5em;">Submit</div>';
				if(event.target.parentNode.querySelectorAll('.date-input').length == 0){
					event.target.parentNode.append(obj);
				}
				//console.log(event.target.parentNode.querySelectorAll('.date-input'));
				obj.addEventListener('click', ()=>{
					if(event.target.className.match('btn-cancel') ){
						obj.remove();
					};
					if(event.target.className.match('btn-submit') ){
						console.log('submit button clicked');
					};
				});
			};
			modal.addEventListener('click', ()=>{ // this is where all the button detection goes 
				console.log(event.target);
				if(event.target.className.match('btn') && event.target.dataset.location){
					console.log(event.target.dataset.location, 'this is from button dataset', createBox());
				};
				if(event.target.className.match('color-blue') && event.target.dataset.location){
					console.log('this is from color-blue AND dataset');
				};
				if(event.target.className.match('btn-cancel') && event.target.dataset.location){
					console.log(event.target.dataset.location, 'this is from CANCEL button');
				};
			});
			//if(event.target.className && event.target.className.match('btn')){console.log(event.target.className, 'was clicked')}
		},
		openTripPlanner: function(){
			document.getElementById('header').addEventListener('click', ()=>{
				if(true){console.log('from header.js', window.event, window.event.target.className)};
			}, true);
			function addFn(A,fn){for(let i = 0; i < A.length; i++){A[i].addEventListener('click', fn);};};
			function $(el){return document.querySelectorAll(el);};
			function el(el){return document.createElement(el);};
			let modal = el('div'); console.log(modal)
			modal.id = 'favorites';
			modal.classList.add('modal');
			modal.innerHTML = 
				`<div class="overlay"></div>
				<div class="modal-content-fullscreen">
					<div class="box">
						<div class="close-btn">X</div>
					</div>
					<div class="box">


						<div class="travelplanner">
							<div class="head"><h2>Travel Planner</h2></div>
							<div class="body">
								<div class="form" style="margin-bottom:30px; display:inline-block;height:43px;">
									<div style="float:left; width:33.33%; height:100%;" class="left">
										<input id="date_start" style="box-sizing:border-box; width:100%; height:100%;" type="date" name="">
									</div>
									<div style="float:left; width:33.33%; height:100%;" class="right">
										<input id="date_end" style="box-sizing:border-box; width:100%; height:100%;" type="date" name="">
									</div>
									<div style="float:left; width:33.33%;" class="right">
										<button class="btn-submit" style="float:left; padding:1em; border-radius:8px;">Submit Dates</button>
									</div>
								</div>

								<div class="form">
									<div style="float:left; width:100%; text-align:center; margin-bottom:30px;" class="btn">
										<ul>
											<li><button>1 Person</button></li>
											<li><button>Couples</button></li>
											<li><button>Friends</button></li>
											<li><button>Family</button></li>
										</ul>
									</div>
								</div>

								<div class="form">
									<div class="heart"></div>
									<div class="icon-circle"></div>
									<div style="float:left; width:100%; text-align:center; margin-bottom:30px;" class="btn">
										<ul>
											<li><button>adventure / thrill seeking</button></li>
											<li><button>comedy</button></li>
											<li><button>entertainment</button></li>
											<li><button>luxury</button></li>
											<li><button>massage</button></li>
											<li><button>pathfinding</button></li>
											<li><button>relaxation</button></li>
											<li><button>theme parks</button></li>
											<li><button>tour</button></li>
											<li><button>water fun & sports</button></li>
											<li><button>vacation</button></li>


											<li><button>Must-see Attractions</button></li>
											<li><button>Great Food</button></li>
											<li><button>Hidden Gems</button></li>
											<li><button>Historical Landmarks</button></li>
											<li><button>Golfing</button></li>
											<li><button>Outdoor Activities</button></li>
											<li><button>Local Festivals</button></li>
											<li><button>Agricultural Tours</button></li>
											<li><button>Culture</button></li>
											<li><button>Wine & Beer</button></li>
											<li><button>Arts & Theatre</button></li>
											<li><button>Museums</button></li>
										</ul>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>`;
			document.body.append(modal);
			document.body.classList.add('overlay');
			addFn($('.close-btn'), ()=>{
				console.log($('#'+modal.id));
				if($('#'+modal.id).length > 0){
					document.body.classList.remove('overlay');
					$('#'+modal.id)[0].remove();
				};
			});
			/*let Str = ['btn']; let fnList = []; UNDER EVALUATION
			function ask(str){ // array of string names ['btn', ] // if(event.target.dataset.location = str)
				return (event.target.dataset.location = str)? true : false;
			};
			for(let i=0; i < Str.length; i++){
				fnList.push(Ask(Str[i]));
			};*/
			function createBox(){
				let boolean = false;
				let obj = document.createElement('div');
				obj.style.width = '200px';
				obj.style.height = '150px';
				obj.style.background = '#555';
				obj.style.borderRadius = '8px';
				obj.innerHTML = '<div class="date-input"><label>Start Date</label><input type="text"/></div> <div><label>End Date</label><input type="text"/></div> <div class="btn-cancel" style="float:left; background:#ccc; padding:1em 0.5em;">Cancel Date</div> <div class="btn-submit" style="float:left; background:#eee; padding:1em 0.5em;">Submit</div>';
				if(event.target.parentNode.querySelectorAll('.date-input').length == 0){
					event.target.parentNode.append(obj);
				}
				//console.log(event.target.parentNode.querySelectorAll('.date-input'));
				obj.addEventListener('click', ()=>{
					if(event.target.className.match('btn-cancel') ){
						obj.remove();
					};
					if(event.target.className.match('btn-submit') ){
						console.log('submit button clicked');
					};
				});
			};
			modal.addEventListener('click', ()=>{ // this is where all the button detection goes 
				console.log(event.target);
				if(event.target.className.match('btn') && event.target.dataset.location){
					console.log(event.target.dataset.location, 'this is from button dataset', createBox());
				};
				if(event.target.className.match('color-blue') && event.target.dataset.location){
					console.log('this is from color-blue AND dataset');
				};
				if(event.target.className.match('btn-submit')){
					console.log(this.getItinerary(), 'this is from SUBMIT button');
					window.sessionStorage.setItem('recent_search', JSON.stringify(this.getItinerary()))
				};
			});
			//if(event.target.className && event.target.className.match('btn')){console.log(event.target.className, 'was clicked')}
		},
		getItinerary: function(){
			function $(el){return document.querySelectorAll(el);};
			let dateStart = $('#date_start')[0].value;
			let dateEnd = $('#date_end')[0].value;

			function dateRangeCal(S,E){
				let ary = [];
				let ms = 86400000;
				S = new Date(S + ' 0:00 AM');
				E = new Date(E + ' 0:00 AM');
				let s = S.getTime();
				let e = E.getTime();
				let num = s;
				let dif = e - s;
				let loop = dif / ms;
				for(let i = 0; i <= loop; i++){
					ary[i] = {};
					ary[i].key = num;
					ary[i].day = date(num).getDay();
					ary[i].activities = [];
					//ary[i] = num;
					num += ms;
				};
				return ary;
			};

			function date(num){ // using this allows for not having to save "new Date(number)" in the initial array. Instead only the digits are stored as the 'key' attribute.
				return new Date(num);
			};

			function daySelector(days, A){// Uses calendar date range from INPUT elements then searches activities database OR specific location. Then places matches into 'activities' array for that date/day.
				for(let d in days){
					let day = date(days[d].key).getDay();
					for(let a in A){
						if(A[a].days[day].open == true){
							days[d].activities.push(a); //Wednesday, June 19, 2024, 1:38:28 PM
						};
						/*days[d]['day'] = days[d];
							//console.log( A[a].loc);
						if(D[ a ].days[ days[d] ].open == true){
							days[d]['idx'].push(a);
						};*/
					};
				};
				return days;
			};
			return daySelector(dateRangeCal(dateStart,dateEnd), db.activities);
		},
		/*
		 v-on:click="headerEvents"
		headerEvents: function(){
			console.log(event, this);
			if(event.target.classList == 'section-body'){
				let temp = event.target;
				temp.style.background = 'red';
				console.log(temp);
			}
		},*/
	},
	components: {
		ComponentA: { template: '<div style="width:100px; height:100px; background:pink;">Component A</div>' },
		ComponentB: { template: '<div style="width:100px; height:100px; background:blue;">Component B</div>' },
	}
}

export default Header;
