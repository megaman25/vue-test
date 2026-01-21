window.messageBlog = "Message from blog.js";
	console.log(messageBlog, Date());

//import Expedia as Sample from '../components/expedia.js';
import {relativePath} from '../utils.js';
/*.image {width: 100%;
  height: 133.333px;
  overflow: hidden;
  background: rgb(204, 204, 204);
  border-radius: 16px;
  padding-bottom: 35%;
  height: 0;
  margin-bottom: 30px;}*/

const Blog = { 
	template: 
		`<div class="section spacer-bottom-2x">
			<div class="content-margin" style="margin:0 auto; width:100%; max-width:1264px;">
				<div class="box">
					<h1 style="font-size:100px;">Blog</h1>
				</div>
			</div>
		</div>

		<div class="section spacer-bottom-2x">

			<div class="content-margin" style="margin:0 auto; width:100%; max-width:1264px;">

				<div class="box motto">
					<div class="bkgnd">
						<div class="image">
							<img :src="articleList[0].img[0]" />
						</div>
					</div><!-- end of bkgrnd -->
					<div class="body">
						<div style="position:absolute; bottom:0; height:40%;">
							<h2 style="color:#fff; font-size:36px;"><a :href=articleList[0].url>{{articleList[0].title}}</a></h2>
						</div>
					</div>
				</div>
			</div>

		</div>

		<div class="section spacer-bottom-2x">

			<div class="content-margin col-3 legidz" style="margin:0 auto; width:100%; max-width:1264px;">

				<div class="card vt">
					<div class="image r4x3"><a :href=articleList[1].url><img :src=articleList[1].img[0] /></a></div>
					<div class="caption vt">
						<h3><a :href=articleList[3].url>{{articleList[1].title}}</a></h3>
						<p>{{articleList[1].content}}</p>
					</div>
				</div>

				<div class="card vt">
					<div class="image r4x3"><a :href=articleList[2].url><img :src=articleList[2].img[0] /></a></div>
					<div class="caption vt">
						<h3><a :href=articleList[2].url>{{articleList[2].title}}</a></h3>
						<p>{{articleList[2].content}}</p>
					</div>
				</div>

				<div class="card vt">
					<div class="image r4x3"><a :href=articleList[3].url><img :src=articleList[3].img[0] /></a></div>
					<div class="caption vt">
						<h3><a :href=articleList[3].url>{{articleList[3].title}}</a></h3>
						<p>{{articleList[3].content}}</p>
					</div>
				</div>

			</div>
		</div>

		<div class="section spacer-bottom-2x">

			<div class="content-margin col-3" style="margin:0 auto; width:100%; max-width:1264px;">

				<div class="box">
					<div class="card vt r1x1" style="overflow:hidden;">
						<div class="mn">
							<div class="mn">
								<div class="image r4x3"><a :href=articleList[1].url><img :src=articleList[1].img[0] /></a></div>
							</div>
							<div class="mn">
								<div class="caption vt">
									<h3><a :href=articleList[3].url>{{articleList[1].title}}</a></h3>
									<p>{{articleList[1].content}}</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="box">
					<div class="card vt r1x1 row-2" style="overflow:hidden;">
						<div class="mn hz col-2">
							<div class="mn">
								<div class="image r4x3"><a :href=articleList[1].url><img :src=articleList[1].img[0] /></a></div>
							</div>
							<div class="mn">
								<div class="caption vt">
									<h3><a :href=articleList[3].url>{{articleList[1].title}}</a></h3>
									<p>{{articleList[1].content}}</p>
								</div>
							</div>
						</div>
						<div class="mn hz col-2">
							<div class="mn">
								<div class="image r4x3"><a :href=articleList[1].url><img :src=articleList[1].img[0] /></a></div>
							</div>
							<div class="mn">
								<div class="caption vt">
									<h3><a :href=articleList[3].url>{{articleList[1].title}}</a></h3>
									<p>{{articleList[1].content}}</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="box">
					<div class="card vt r1x1 row-3" style="overflow:hidden;">
						<div class="mn hz col-2">
							<div class="mn">
								<div class="image r4x3"><a :href=articleList[1].url><img :src=articleList[1].img[0] /></a></div>
							</div>
							<div class="mn">
								<div class="caption vt">
									<h3><a :href=articleList[3].url>{{articleList[1].title}}</a></h3>
									<p>{{articleList[1].content}}</p>
								</div>
							</div>
						</div>
						<div class="mn hz col-2">
							<div class="mn">
								<div class="image r4x3"><a :href=articleList[1].url><img :src=articleList[1].img[0] /></a></div>
							</div>
							<div class="mn">
								<div class="caption vt">
									<h3><a :href=articleList[3].url>{{articleList[1].title}}</a></h3>
									<p>{{articleList[1].content}}</p>
								</div>
							</div>
						</div>
						<div class="mn hz col-2">
							<div class="mn">
								<div class="image r4x3"><a :href=articleList[1].url><img :src=articleList[1].img[0] /></a></div>
							</div>
							<div class="mn">
								<div class="caption vt">
									<h3><a :href=articleList[3].url>{{articleList[1].title}}</a></h3>
									<p>{{articleList[1].content}}</p>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>

		</div>

		<div class="section spacer-bottom-2x">

			<div class="content-margin col-3" style="margin:0 auto; width:100%; max-width:1264px;">

				<div class="sp-2" style="box-sizing:border-box; padding-right:30px;">
					<div class="box hz col-2">
						<li class="item" v-for="item in articleList">
							<div class="mn">
							<div class="image r3x2"><a :href=item.url><img :src=item.img /></a></div>
							<div class="caption"><h2><a :href=item.url>{{ item.title }}</a></h2></div>
							</div>
						</li>
					</div>
				</div>

				<div class="sp">
					<div class="box">
						<h2 style="font-size: 2.4rem; margin-bottom: 0.8em;">Title Area for Right Rail Stuff</h2>
						<div class="box hz col-2" v-for="item in featured" style="height:150px; margin-bottom:20px;">
							<div class="image" style="border-radius:6px; background:#ccc; height:100%;">
								<a :href=item.url>
									<img style="width:110%; margin-left:-5%;" :src=item.img />
								</a>
							</div>
							<div style="box-sizing:border-box; padding-left:10px;">
								<h2 style="font-size: 1.8rem; font-weight: 500;"><a :href=item.url style="color:#333;">{{item.title}}</a></h2>
								<p>{{item.url}}</p>
								<!-- <p>{{item.content}}</p> -->
							</div>
						</div>
					</div>
				</div>

			</div>

		</div>


		<div class="section spacer-bottom-2x">

			<div class="content-margin" style="margin:0 auto; width:100%; max-width:1264px;">

				<div class="box">
					<div class="mod">featured image</div>
				</div>

				<div class="box hz col-2">
					<div>
						next to last image
					</div>
					<div>
						2nd to last image
					</div>
				</div>

			</div>

		</div>


		<div class="section spacer-bottom-2x">

			<div class="content-margin" style="margin:0 auto; width:100%; max-width:1264px;">

				<div class="box">
					<div class="title" style="margin-bottom:20px; height:auto;">
						<h2 style="color:#131d26; font-size:2.4em; width:auto; margin-bottom: 8px;">{{title}}</h2>
						<!-- <InternalComponent postTitle="TEXT TEST"></InternalComponent>
						<ExternalComponent/> -->
					</div>
				</div>

				<div style="width:100%; float:left;">
					<ul class="list card-profile">
						<li class="item" v-for="item in ary1">
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
		return { 
		posts: db.posts,
		}
	},
	meta:{
		title:"Blog Page from SINGLE FILE COMPONENT"
	},
	computed: {
		featured(){
			let ary = []; let n = 0; let limit = 5;
			for(let i = this.posts.length-1; i > this.posts.length-1-limit; i--){
				//console.log(this.posts[i]);
				ary[n] = this.posts[i];
				n++;
			};
			console.log(ary);
			return ary;
		},
		articleList(){
			let ary = [];
			for(let i in this.posts){
				ary[i] = this.posts[i];
				ary[i].url = relativePath + '/blog/' + this.posts[i].url; console.log(ary[i].url);
				ary[i].img[0] = 'http://localhost/itinerary' + '/img/' + this.posts[i].img[0]; console.log(ary[i].img[0]);
			};
			console.log(ary);
			return ary.reverse();
		}
	},
	async created(){
	}
};
export default Blog;