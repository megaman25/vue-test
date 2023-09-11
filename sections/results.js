const Results = {
	template:
	`
	<div class="section" style="margin-bottom:47px !important;">

		<div class="content-margin" style="margin:0 auto; width:100%; max-width:1264px;">

			<div style="width:100%; max-width:320px; float:left; background:purple;">
					Left side
			</div>

			<div class="temporary" style="width:100%; max-width:360px; float: right; max-width: 930px;"><!-- margin:140px 0 0 -215px; -->
				<div style="width:100%; height:50px;">
					<div style="float:left;">
						<h2 style="font-size:16px; padding:5px 0;">{{total}} Results found for {{query}}</h2>
					</div>
					<div style="float:right; padding:7px 13px; border-radius:4px; background:#eee;">
						<select style="background:none;">
							<option>Low To High</option>
							<option>High To Low</option>
						</select>
					</div>
				</div>
				<ul id="results" class="list card-276x276" style="margin: 110px 0 0 20px;">

					<li class="card" v-for="i in data" :key="data.id">
						<div class="image">
							<a :href=i.url><img :src="i.img"></a>
						</div>
						<div class="caption">
							<a :href=i.url>
							<h3>{{ i.city }} {{ i.admin_name }} {{ i.iso2 }}</h3>
							<p style="margin:45px 0 10px; font-size:14px;">{{ i.category }}</p>
							<p style="margin-bottom:8px;">2-8 hours</p>
							<p style="margin-bottom:10px; max-width:315px;">{{ i.description }}</p>
							<p style="margin-bottom:10px;">Fully refundable</p>
							<p>Recommended by 90% of travelers</p>
							</a>
						</div>
						<div class="col">
							<span style="margin-top:60px">from</span>
							<b>\${{i.price}}</b>
							<span>per group</span>
							<button>Reserve</button>
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
		return {data:null,
		query: this.$route.query['q'],
		total: "",
		pagination:""
		}
	},
	async created(){
		const rsp = await fetch(relativePath+'/data/worldcities-url.json');// const rsp = await fetch(relativePath+'/data/viator-comedy.json');
		const r = await rsp.json();
		this.data = r.filter(m => m.url.match(this.$route.query.q));
		//console.log(this.$route)
		console.log(this.query)
		for(let i in this.data){this.data[i].url = '/maarjin/explore/' + this.data[i].url;}
		this.total = this.data.length
		document.title = 'Results for ' + this.query;
		console.log(this.data)
	}};
export default Results;