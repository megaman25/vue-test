const CityProfile = {
	template: 
		`<div class="section spacer-bottom-2x">

			<div class="content-margin" style="max-width:1136px;">

				<div class="box" style="width:100%; display: inline-block;">
					<div class="" style="margin-bottom:20px; height:auto;">
						<div style="float:left;">
							<h2 style="color:#131d26; font-size:2.4em; width:auto; margin-bottom: 8px;">{{local.city}}, {{local.admin_name}}, {{local.country}}</h2>
						</div>
					</div>
					<div style="width:100%; display:inline-block; margin:0 0 30px;">
						<div style="float:left; margin:0 5px; font-size:1.6rem;">
							<b>Latitute:</b> <span>{{local.lat}}</span>
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

				<div>
					<div data-vi-partner-id="P00099829"
					    data-vi-widget-ref="W-cf7b4df9-c26c-4c21-bc4e-45bca75ef9db"
					    :data-vi-search-term="local.city">
					</div>
				</div>

				<!-- <div class="box" style="width:100%; display: inline-block;">
					<div class="title" style="margin-bottom:20px; height:auto;">
						<div style="width:50%; float:left;"><InternalComponent postTitle="TEXT TEST"></InternalComponent></div>
						<div style="width:50%; float:left;"><ExternalComponent/></div>
					</div>
				</div> -->

				<!-- <div class="box" style="width:100%; display: inline-block;">
					<ul>
						<li v-for="item in activity.events" style="width:100%; border:2px solid blue; border-radius:12px; margin:0 0 20px; box-sizing:border-box; padding:10px;">
							<b style="font-size:2.4rem;">{{item.title}}</b>
							<p style="font-size:2.4rem;">{{item.description}}</p>
							<a :href="local.url" style="font-size:1.6rem;">{{item.title}}</a>
						</li>
					</ul>
				</div> -->

			</div>

		</div>`,
	data(){
		return {
			//activity:local.itinerary,
			//intro:local.itinerary.intro,
			//hotels:local.itinerary.hotels,
			//days:local.itinerary.days
		}
	},
	props:['universalBus'],
	meta:{
		title: ""
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
	}
};

export default CityProfile;