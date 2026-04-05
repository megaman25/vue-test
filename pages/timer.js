const Timer = {
	template:
		`<div class="section spacer-bottom-2x">

			<div class="content-margin" style="margin:0 auto; width:100%; max-width:1264px;">

				<div class="box">
					<li class="item" v-for="item in articleList" style="font-size:1.6em; margin-bottom:1.5em;">
						<a :href=item.url>{{ item.title }}</a>
					</li>
				</div>
				<Modal></Modal>
				<div class="box">
					<div class="widget-box" style="position:relative; width:606px;margin:0 auto;">
						<div class="digital-clock-1">
							<!-- <div id="time-days" class="block"></div> -->
							<div id="time-hours" class="block">00</div>
							<div class="delimiter">:</div>
							<div id="time-minutes" class="block">00</div>
							<div class="delimiter">:</div>
							<div id="time-seconds" class="block">33</div>
							<!-- <div class="col-1">
								<div id="time-am-pm" class="box subscript">am</div>
							</div> -->

						</div><!-- end of new-years-clock -->
						<div id="time-milliseconds" style="text-align:right; font-size:36px;">520</div>
						<!-- <div class="subscript">
							<div class="block">h</div>
							<div class="delimiter">&nbsp;</div>
							<div class="block">m</div>
							<div class="delimiter">&nbsp;</div>
							<div class="block">s</div>
						</div> -->
						<!-- <div id="time-days" style="text-align:center; width:100%; font-size:72px; position:relative;"></div> -->
						<div style="width:100%;position:relative;">
							<button id="reset" type="button">reset</button>
							<button id="play" type="button">stop</button>
							<button id="lap" type="button">lap</button>
						</div>
						<div id="list" class="lap-list" style="width:350px; margin:0 auto;">what up?<br> item1<br><br> item2<br><br> item3<br><br> item4<br><br> item5<br><br> item6<br><br> item7<br><br> item8<br><br> item1<br><br> item2<br><br> item3<br></div>
					</div>
				</div>

				<div class="box">
					<div class="title" style="margin-bottom:20px; height:auto;">
						<h2 style="color:#131d26; font-size:2.4em; width:auto; margin-bottom: 8px;">{{title}}</h2>
						<InternalComponent postTitle="TEXT TEST"></InternalComponent>
						<ExternalComponent/>
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
	data(){},
	meta:{
		title:"Timers Page from SINGLE FILE COMPONENT"
	}
};

export default Timer;