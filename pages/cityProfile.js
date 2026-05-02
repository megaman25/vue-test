const CityProfile = {
	template: 
		`<div class="section spacer-bottom-2x">

			<div class="content-margin" style="max-width:1136px;">

				<div class="box margin-bottom-50" style="width:100%; display: inline-block;">
					<div class="" style="margin-bottom:20px; height:auto;">
						<div style="float:left;">
							<h2 style="color:#131d26; font-size:2.4em; width:auto; margin-bottom: 8px;">{{local.city}}, {{local.admin_name}}, {{local.country}}</h2>
						</div>
					</div>
					<div style="width:100%; display:inline-block; margin:0 0 30px;">
						<div style="float:left; margin:0 5px; font-size:1.6rem;">
							<b>Latitude:</b> <span>{{local.lat}}</span>
						</div>
						<div style="float:left; margin:0 5px; font-size:1.6rem;">
							<b>Longitude:</b> <span>{{local.lng}}</span>
						</div>
						<div style="float:left; margin:0 5px; font-size:1.6rem;">
							<b>Capital:</b> <span>{{local.capital}}</span>
						</div>
						<div style="float:left; margin:0 5px; font-size:1.6rem;">
							<b>Country:</b> <span>{{local.country}}</span>
						</div>
						<div style="float:left; margin:0 5px; font-size:1.6rem;">
							<b>Population:</b> <span>{{local.population}}</span>
						</div>
						<div style="float:left; margin:0 5px; font-size:1.6rem;">
							<b>URL:</b> <span>{{local.url}}</span>
						</div>
					</div>
				</div>

				<div class="box margin-bottom-50" style="color:#333;">
					<div style="font-size:30px;">{{ RemoteTime.weekday }} {{ RemoteTime.year }} {{ RemoteTime.month }} {{ RemoteTime.date }}</div>
					<time style="font-size:200px; line-height:1.2em;">{{ RemoteTime.hour }}:{{ RemoteTime.minute }}:{{ RemoteTime.second }} <span style="font-size:0.5em;">{{ RemoteTime.meridian }}</span></time>
				</div>

				<div class="box margin-bottom-50" style="color:#333;">
					<div>{{ LocalTime.weekday }} {{ LocalTime.year }} {{ LocalTime.month }} {{ LocalTime.date }}</div>
					<time style="font-size:50px; line-height:1.2em;">{{ LocalTime.hour }}:{{ LocalTime.minute }}:{{ LocalTime.second }} {{ LocalTime.meridian }}</time>
				</div>

				<div class="box margin-bottom-50">
					<ul style="column-count:4; column-gap:20px;">
						<li v-for="item in nearbyCities" class="flex" style="width:600px; height:1.5em;">
							<a :href="'/explore/'+item.url" style="color:#333; width:40%; overflow:hidden;">{{ item.city }}, {{ item.admin_name }}</a>
							<!-- <div style="width:40%; overflow:hidden;">{{ item.dist.mi }} miles : {{ item.dist.km }} km</div> -->
						</li>
					</ul>
				</div>

				<div class="box" style="width:100%; display: inline-block;">
					<div class="title" style="margin-bottom:20px; height:auto;">
						<div style="width:50%; float:left;"><InternalComponent postTitle="TEXT TEST"></InternalComponent></div>
						<div style="width:50%; float:left;"><ExternalComponent/></div>
					</div>
				</div>

				<!-- <div class="box" style="width:100%; display: inline-block;">
					<ul>
						<li v-for="item in activity.events" style="width:100%; border:2px solid blue; border-radius:12px; margin:0 0 20px; box-sizing:border-box; padding:10px;">
							<b style="font-size:2.4rem;">{{item.title}}</b>
							<p style="font-size:2.4rem;">{{item.description}}</p>
							<a :href="local.url" style="font-size:1.6rem;">{{item.title}}</a>
						</li>
					</ul>
				</div> -->

				<div class="viator">
					<h2>VIATOR</h2>
					<div data-vi-partner-id="P00099829"
					    data-vi-widget-ref="W-cf7b4df9-c26c-4c21-bc4e-45bca75ef9db"
					    :data-vi-search-term="local.city">
					</div>
				</div>

			</div>

		</div>`,
	data(){
		return {
			//activity:local.itinerary,
			//intro:local.itinerary.intro,
			//hotels:local.itinerary.hotels,
			//days:local.itinerary.days
			LocalTime:(function(){
				function hrs(n,m){let v = n;if(n == 0 && m == 12){n = 12;};if(n > 12 && m == 12){n = n-12};if(n < 10){n = '0'+n};return n;};
				function meridian(m){let d = new Date();let hrs = d.getHours();let status = '';if(m==12){m = false;};if(m == false && hrs < 12){status = 'am';};if(m == false && hrs >= 12){status = 'pm';};return status;};
				function z(n){if(n < 10){n = '0'+n;} return n;}; let d = new Date(); return `${hrs(d.getHours(),12)}:${z(d.getMinutes())}:${z(d.getSeconds())} ${meridian('12')}`;})(),
			counter:0,
			RemoteTime:'',
		}
	},
	props:['universalBus'],
	meta:{
		title: "",
	},
	computed: {
		location() {
			console.log(this.universalBus);
			return this.$route.params.id;
		},
		computedFunction: function(){
			return this.data.filter(a => {return a.url == this.location})[0]
		},
		local(){
			let n = this.universalBus.worldcitiesKeys[this.$route.params.id]; console.log(n);
			let obj = this.universalBus.worldCitiesUrl[n]; console.log(obj);
			document.querySelector('title').innerHTML = obj.city + ', ' + obj.admin_name + ', ' + obj.country;
			// might want to place other 'meta' information here such as og:title, og:description, meta/description and etc.
			return obj;
		},
		viator_city(){
			let city = this.$route.params.id.split('-'); console.log(city);
			return 'london';
		},
		nearbyCities: function(){
			function haversineDistance(lat1, lon1, lat2, lon2) {
				const R = 6371; // Radius of the Earth in km
				const dLat = (lat2 - lat1) * Math.PI / 180;
				const dLon = (lon2 - lon1) * Math.PI / 180;
				const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
						  Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
						  Math.sin(dLon / 2) * Math.sin(dLon / 2);
				const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
				let km = R * c; // Distance in km
				let mi = R * c *(1/1.609344); // Distance in miles
				return {km:km, mi:mi};
			}

			function distance(radiusRange,units, obj1, obj2){
				let ary = [];
				//let obj1 = {lat:34.1785, lng:-79.7857};//florence
				//let obj2 = {lat:33.7626, lng:-84.4228};//atlanta
				let open = false;
				for(let i=0; i < obj2.length; i++){
					let d = haversineDistance(obj1.lat, obj1.lng, obj2[i].lat, obj2[i].lng); //{km:1.609344, mi:1}
					if(d[units] <= radiusRange && d[units] != 0){
						ary.push(obj2[i]);
						ary[ary.length-1].dist = {km:d.km, mi:d.mi}
					};
					/*if(ary.length <= 3){ // if cities have less than satisfactory amount then another wider search radius is applied.
						open = true;
					}
					if(d[units] <= 30 && d[units] != 0 && open == true){
						ary.push(obj2[i]);
						open = false;
					};*/
				};
				console.log(ary);
				return ary;
			};
			return distance(15,'mi',this.local,this.universalBus.worldCitiesUrl);
		},
	},
	mounted(){
		const m = {
			long:["January","February","March","April","May","June","July","August","September","October","November","December"],
			short:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"],
			narrow:["J","F","M","A","M","J","J","A","S","O","N","D"]
		};

		const z = function (n){if(n < 10){n = '0'+n;} return n;};
		const hrs = function (n,m){
			/*let meridian = 'am';
			if(m === 12){
				meridian = 'pm';
			};
			if(n == 0 && m === 24 && n >= 12){
				meridian = 'pm';
			};
			if(n < 12){
				n = n-12;
			};*/
			//if(n < 10){n = '0'+n;}
			/*if(m == 'am'){

			};
			if(m == 'pm'){
				
			};*/
			let v = n;
			if(n == 0 && m == 12){n = 12;};
			if(n > 12 && m == 12){n = n-12};
			if(n < 10 && n[0]!=0){n = '0'+n};
			return n;
		};
		const meridian = function (m){
			let d = new Date();
			let hrs = d.getHours();
			let status = '';

			if(m==12){
				m = false;
			};
			if(m == false && hrs < 12){
				status = 'am';
			};
			if(m == false && hrs >= 12){
				status = 'pm';
			};
			return status;
		};

		const meridianWorld = function (n){
			let s = 'am';
			if(n >= 12){
				s = 'pm';
			};
			return s;
		};

		const day = function(n,f){
			let w = {
				long:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
				short:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
				narrow:["S","M","T","W","T","F","S"]
			};
			return w[f][n];
		};


		const month = function(n,f){
			return m[f][n];
		};

		const RemoteMonth = function(n,f){
			return m[f][n-1];
		};

		this.updateTime = ()=>{
				let d = new Date();
				this.LocalTime = {
					hour: hrs(d.getHours(),12),
					minute: z(d.getMinutes()),
					second: z(d.getSeconds()),
					meridian: meridian('12'),
					year: d.getFullYear(),
					month: month(+d.getMonth(),"long"),
					date: z(d.getDate()),
					weekday: day(d.getDay(),"long")
				};
			}
		this._timeInterval = setInterval(this.updateTime,1000);

		/*WORLD CLOCK*/
		const timeZone = this.local.tz;

		function _convert(ary){//converts 2 embedded objects in each array index into 1 flat object.
			let obj = {};
			for(let i in ary){
				obj[ary[i].type] = ary[i].value;
			}
			//console.log(`${obj.year}/${obj.month}/${obj.day} T${obj.hour}:${obj.minute}:${obj.second}`);
			return obj;
		};

		this.updateWorldTime = ()=>{
				//let d = new Date();
				const dt = new Date(); // current instant (UTC-based)
				const parts = new Intl.DateTimeFormat("en-US", {
					timeZone,
					year: "numeric", month: "2-digit", day: "2-digit", weekday: 'long',
					hour: "2-digit", minute: "2-digit", second: "2-digit",
					hour12: false
				}).formatToParts(dt);
				const W = _convert(parts);
				this.RemoteTime = {
					hour:hrs(W.hour,12),
					minute:W.minute,
					second:W.second,
					meridian:meridianWorld(W.hour),
					year:W.year,
					month:RemoteMonth(+W.month,"short"),
					date:W.day,
					weekday:W.weekday
				}
			}
		this._timeWorldInterval = setInterval(this.updateWorldTime,1000);
	},
	beforeUnmount() {
	  clearInterval(this._timeInterval);
	  clearInterval(this._timeWorldInterval);
	},
};

export default CityProfile;