import {addTitle, coordinateDistanceRange, db, faveList, find, g, Login, menuOpen, relativePath} from '../utils.js';

const Header = {
	data(){
		return { 
			//..
		}
	},
	template:`
	<div class="header">
		<div class="mn flex flex-center-vt gap-100" style="margin:0 50px;">
			<div class="logo">
				<a href="/"><img src="ui/img/home/logo.png" /></a>
			</div>

			<div class="flex-1 flex flex-center-vt gap-50">
				<div class="menu">
					<ul class="flex flex-center-vt gap-20">
						<li class="flex flex-center-vt"><a class="flex flex-center-vt" title="Explore" href="/">Home</a></li>
						<li class="flex flex-center-vt"><a class="flex flex-center-vt" title="Explore" href="/explore">Explore</a></li><!-- articles??? -->
						<li class="flex flex-center-vt"><a class="flex flex-center-vt" title="Guides" href="/blog">Guides</a></li><!-- articles??? -->

						<li class="flex flex-center-vt"><a class="flex flex-center-vt faves"><button>Favorites</button></a></li>
						<li class="flex flex-center-vt"><a class="flex flex-center-vt trip"><button>Plan Trip</button></a></li>
					</ul>
				</div>
			</div>

			<div class="flex flex-center-vt">

				<div class="search-bar" onClick="submitForm()" style="border-radius:12px; border:1px solid #333; height:40px; width:280px; padding:0 5px; box-sizing:border-box;">
					<form class="flex flex-center-vt" autocomplete="off" autocorrect="on">
						<div id="" class="input flex flex-center-vt">
							<input tabindex="0" id="inputSearch" class="inputField" placeholder="Search" type="text" name="search-bar-top-left" style="font-family:'Poppins';">
						</div>
						<div id="search-btn" class="search-btn flex flex-center-vt">
							<button>
								<div class="circle-btn bgcolor-black" style="border-radius:8px;"></div>
							</button>
						</div>
					</form>
					<ul id="auto-list" class="list"></ul>
				</div>

			</div>

			<div class="flex flex-center-vt">

				<div class="flex flex-center-vt gap-5"><!-- LOGGED IN STATE v-if="auth.user"  v-else -->
					<button class="bgcolor-black" style="border-radius:50%; width:40px; height:40px;">
						<label class="drop-down-mechanism">
							<input type="checkbox" class="">
							<div class="drop-down">
								<ul class="gap-50">
									<li class="flex flex-center-vt"><a class="flex flex-center-vt" title="Home" href="/">Home</a></li>
									<li class="flex flex-center-vt"><a class="flex flex-center-vt" title="Account" href="/account">Account</a></li>
									<li class="flex flex-center-vt"><a class="flex flex-center-vt" title="Settings" href="/settings">Settings</a></li>
								</ul>
							</div>
						</label>
					</button>
				</div>
				<div class="flex flex-center-vt gap-5" style="/*display:none;*/"><!-- NOT LOGGED IN STATE -->
					<ul>
					<li><a href="/signup">Sign Up</a></li>
					<li><a href="/login">Login</a></li>
					<li><a href="/logout">Log Out</a></li>
					</ul>
				</div>
			</div>

		</div>
	</div>`,
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