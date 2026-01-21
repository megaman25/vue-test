import {relativePath, find} from '../utils.js';

const Results = {
	template:
	`<div class="section" style="margin-bottom:47px !important;">

		<div class="content-margin" style="margin:0 auto; width:100%; max-width:1264px;">

			<div style="width:100%; max-width:320px; float:left; background:purple; display:none;">
					Left side
			</div>

			<div class="results">
				<div class="box">
					<div class="title">
						<h2>{{total1}}</h2>
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

					<li class="card" v-for="i in data1" :key="data1.id">
						<div class="image">
							<svg id="Lines" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 53.96 77.38"><defs><style>.cls-1{fill:#aaa;}</style></defs><title>navigation icon</title><path class="cls-1" d="M479.5,59.75a27,27,0,0,0-27,27c0,19.19,26.14,50.4,27,50.4s27-31.21,27-50.4A27,27,0,0,0,479.5,59.75Zm0,38.38a11.4,11.4,0,1,1,11.4-11.4A11.4,11.4,0,0,1,479.5,98.13Z" transform="translate(-452.52 -59.75)"/></svg>
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
					<hr/>
				</ul>

				<ul id="" class="list card-170" style="width:100%;">
					<div class="box">
						<div class="title">
							<h2>{{total2}}</h2>
						</div>
						<div style="float:right; padding:7px 13px; border-radius:4px; background:#eee; display:none;">
							<select style="background:none;">
								<option>Low To High</option>
								<option>High To Low</option>
							</select>
						</div>
					</div>
					<li class="card" v-for="i in data2" :key="data2.id">
						<div class="image">
							<img :src=i.item.imgLocal />
							<!-- <svg id="Lines" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 53.96 77.38"><defs><style>.cls-1{fill:#aaa;}</style></defs><title>navigation icon</title><path class="cls-1" d="M479.5,59.75a27,27,0,0,0-27,27c0,19.19,26.14,50.4,27,50.4s27-31.21,27-50.4A27,27,0,0,0,479.5,59.75Zm0,38.38a11.4,11.4,0,1,1,11.4-11.4A11.4,11.4,0,0,1,479.5,98.13Z" transform="translate(-452.52 -59.75)"/></svg> -->
						</div>
						<div class="caption">
							<a :href=i.item.link>
							<h3>{{ i.item.title }}</h3>
							<p style="font-size:14px;">{{ i.item.loc }}, {{ i.item.country }}</p>
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
			data1:null,
			data2:null,
			total1: "",
			total2: "",
			pagination:""
		}
	},
	meta:{
		title:"Results page for .... "
	},
	created(){
		let options1 = {
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
		let options2 = {
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
				"title",
				"link",
				"url",
				"description"
			]
		};

		/*const ary1 = {};
		ary1.rsp = await fetch(relativePath+'/data/worldcities-url.json');// const rsp = await fetch(relativePath+'/data/viator-db.json');
		ary1.r = await ary1.rsp.json();
		//this.data = r.filter(m => m.city.match(this.$route.query.s));
		const ary2 = {};
		ary2.rsp = await fetch(relativePath+'/data/viator-db.json');// const rsp = await fetch(relativePath+'/data/viator-db.json');
		ary2.r = await ary2.rsp.json();*/
		console.log(this.$route.query.q);
		let results1 = find(db.worldCitiesUrl,this.$route.query.q, options1);
		let results2 = find(db['activities'],this.$route.query.q, options2);

		for(let i in results1){results1[i].item.url = relativePath + '/explore/' + results1[i].item.url;}
		this.data1 = results1;
		for(let i in results2){results2[i].item.url = relativePath + '/explore/' + results2[i].item.url;}
		this.data2 = results2;

		this.total1 = (this.data1.length) + " Results found for " + this.$route.query.q;
		this.total2 = (this.data2.length) + " Results found for " + this.$route.query.q;
		document.title = 'Results for ' + this.$route.query.q;
	}
};
export default Results;