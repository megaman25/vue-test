/* 
	CREATED: Friday, June 7, 2024, 12:54:59 PM
	MODIFIED: Tuesday, June 11, 2024, 10:19:55 PM - Completed date range input
	LAST MODIFIED: Monday, July 22, 2024, 12:23:53 PM - Completed date range, activities selected per date range, search results displayed and grouped into days.

*/

	/*function Day(n){
		const days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
		return days[n];
	};*/

/*// completed daySelector Tuesday, May 21, 2024, 10:36:09 PM
function daySelector(days, D){
	let ary = [];
	function grp(S){
		for(let i in S){
			ary[i] = {};
			ary[i]['day'] = null;
			ary[i]['idx'] = [];
		};
	}; grp(days);

	for(let d in days){
		for(let a in D){ // changed from A to 'D'. SOLVED: Thursday, May 23, 2024, 12:59:14 PM - took at lot of time from yesterday and a portion of today. Just to realize after reviewing code I asigned the wrong array (which was shorter length than the activity database length)
			ary[d]['day'] = days[d];
				//console.log( D[a].loc);
			if(D[ a ].days[ days[d] ].open == true){
				ary[d]['idx'].push(a);
			};
		};
	};
	return ary;
};*/

function pickActivities(days, limit){ //2024/05/24 @11:35am -> @11:45am - is function is a crude way of just picking the first 5 indexes from each day entry. This is a half measure just to populate data on page until a more adequete sorting and filtering system can be made.
	// Completed at 12:54pm (minus 12:00 - 12:20pm driving so 12:20 to 12:54 - 44 mins of total time). 1:25pm - END
	let i = 0; let ary = [];
	for(let i in days){
		if(days[i].idx.length > 5){limit = limit-1;} else {limit = days[i].idx.length};
		ary[i] = {};
		ary[i]['day'] = null;
		ary[i]['idx'] = [];
		for(let a=0; a < limit; a++){
			ary[i]['day'] = days[i].day;
			ary[i]['idx'].push(days[i].idx[a]);
		};
	};
	return ary;
};

const TravelPlanner = {
	template:`
	<div class="section" style="margin-bottom:47px !important;">

		<div class="content-margin" style="margin:0 auto; width:100%; max-width:1264px;">

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
							<button style="float:left; padding:1em; border-radius:8px;" v-on:click="getDateRange">Submit Dates</button>
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
				<!-- <div id="results" style="width:100%; border:1px solid red; float:left;">
					<ul>
						<li v-for="(days,idx) in results" style="margin-bottom:20px; float:left; width:25%; box-sizing:border-box; padding:0 10px 10px;">
							<div style="font-weight:700; font-size:1.8rem; clear:both;">Day {{idx+1}}</div>
							<div style="font-weight:700; font-size:2.4rem; clear:both;">{{Day(days.day)}}</div>
							<ul>
								<li v-for="(act,idx) in days.activities" style="width:100%; margin:10px 0 0; border:1px solid red; float:left; clear:both;">
									<div style="float:left; clear:both; font-weight:700;">{{activities[act].title}}</div>
									<div style="float:left; clear:both;">{{activities[act].img}}</div>
									<div style="float:left; clear:both;">{{activities[act].loc}}</div>
								</li>
							</ul>
						</li>
					</ul>
				</div> -->
			</div>

			<div class="firow left">

				<div class="box" v-for="(days, idx) in results">
					<h2 class="txt-1">Day {{idx+1}}</h2>
					<div style="font-weight:700; font-size:2.4rem; clear:both;">{{Day(days.day)}}</div>
					<ul class="accordian">
						<li v-for="(act,idx) in days.activities">
							<div class="title"><span class="list-style">{{idx+1}}</span><h3>{{activities[act].title}}</h3></div>
							<div class="showHide">
								<div class="row image"><img src="" /></div>
								<div class="row title">{{activities[act].title}}</div>
								<div class="row rating">{{activities[act].rating}}</div>
								<div class="row features">
									<span v-for="feature in activities[act].features">{{feature}}</span>
								</div>
								<div class="row discription">
									<p>{{activities[act].description}}</p>
								</div>
								<div class="row Footer">
									<div class="justify">
										<div class="left">Was this recommendation useful?</div>
										<div class="right">Up & Down</div>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>

			</div>


		</div><!-- end of content-margin -->

	</div><!-- end of section -->`,
	meta:{
		title:"Travel Planner"
	},
	data(){
		return{
			DAYS:null,
			activities: db.activities,
		}
	},
	computed:{
		inputStart(){
			console.log(event)
			//return event.target
		},
		inputEnd(){
			console.log(event)
			//return event.target
		},
	},
	methods:{
		getDateRange: function (){ // 20204/06/11 @10:19pm - completed
			function $(el){return document.querySelectorAll(el);};
			//let evt = event.target.value.match(/\d{4}-\d{2}-\d{2}/);
			//let id = event.target.id;
			let dateStart = $('#date_start')[0].value;
			let dateEnd = $('#date_end')[0].value;
			/*if(id == 'date_start' && evt != null){
				dateStart = evt; //console.log("dateStart: ", dateStart);
			};
			if(id == 'date_end' && evt != null){
				dateEnd = evt; //console.log("dateEnd: ", dateEnd);
			};*/
			//let splitStart = dateStart.split('-');
			//let splitEnd = dateEnd.split('-');
			/*function yrs(start, end){
				for(let i = start[0]; i <= end[0]; i++){

				};
			};*/

			/*function Year(n){
				return 1900+n;
			};

			function yearCal(n){
				const a = [31,28,31,30,31,30,31,31,30,31,30,31];
				if(n%4 == 0){a[1] = 29;};
				return a;
			};*/

			/*function yrs(start, end){ // Wednesday, June 12, 2024, 10:09:27 AM - worked first time ran. Both start & end are split arrays fromfrom INPUT element values.
				let ary = [];
				let diff = end[0] - start[0];
				let a = Number(start[0])+1;
				for(let i = 0; i <= diff; i++){
					ary[i] = a -1;
					a++;
				};
				let digitsStart = new Date(dateStart + ' 0:00AM'); let DAYstart = digitsStart.getDay(); digitsStart = digitsStart.getTime();
				let digitsEnd = new Date(dateEnd + ' 0:00AM'); let DAYend = digitsEnd.getDay(); digitsEnd = digitsEnd.getTime();
				console.log(ary, "DAY: ", DAYstart, "digitsStart: ", digitsStart, "DAY", DAYend, "digitsEnd: ", digitsEnd, "difference: ", digitsEnd - digitsStart);
				return ary;
			};
			yrs(splitStart, splitEnd);*/

			/*function daysCounter(yearStart, yearEnd){
				let yrArray = yearCal(n);
				yrArray[monthStart] - dayStart
				for(let i = yearStart; i <= yearEnd; i++){
					for(let a = monthStart; a < yrArray.length ; a++){
						//...
					};
				};
			};
			console.log("onsubmit event triggered", dateStart, dateEnd)*/

			/*function millisecondsToStr(n){
				n = new Date(n);
				let y = Year(n.getYear());
				let mm = z(n.getMonth()+1);
				let d = z(n.getDate());
				let h = z(n.getHours());
				let m = z(n.getMinutes());
				let s = z(n.getSeconds());
				function z(n){return n < 10? '0'+n:n;};
				return y+'-'+mm+'-'+d+' '+h+':'+m+':'+s;
			};*/

			//2024/06/12 @7:23pm - figured out a far simpler solution getTime(dateEnd) - getTime(dateStart)
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

			this.DAYS = daySelector(dateRangeCal(dateStart,dateEnd), db.activities);
			/*function dateMetaData(num){
				let ary = [];
				for(let i in num){
					ary[i] = {};
					ary[i]['obj'] = new Date(num[i]);
					ary[i]['date'] = ary[i].obj.getDate();
					ary[i]['day'] = ary[i].obj.getDay();
					ary[i]['month'] = ary[i].obj.getMonth();
				};
				return ary;
			};
			//dateMetaData(); // mm / dd / yyyy / day / h / m / s | One way to enter a string representing the required output OR output all data into one returned object .. dateMetaData.month, dateMetaData.day

			function batchConverttoString(a){
				let ary = [];
				for(let i in a){
					ary[i] = millisecondsToStr(a[i]);
				};
				console.log(ary);
				return ary;
			};*/
		},
		Day: function(n){
			const days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
			return days[n];
		},
	},
	computed:{
		results: function(){
			return this.DAYS;
		},
	}
};

export default TravelPlanner;