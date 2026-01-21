//console.log('FORM.JS', relativePath)
const Form = {template:
	`<div class="search-bar">
		<form autocomplete="off" autocorrect="off" v-on:submit="sendQuery">
		  <div id="close-search-btn" class="close-btn">X</div>
		  <div id="" class="input">
		    <input tabindex="0" id="inputSearch" class="inputField" placeholder="Search" type="text" name="search-bar-top-left" v-on:focus="getData">
		  </div>
		  <div id="search-btn" class="search-btn"><!-- padding-top:13px; margin:0 18px 0; -->
		    <button>
		      <!-- <img src="img/icon-menu.svg" alt="menu icon"/> -->
		      <img src="/itinerary/img/icon-search-round.svg" alt="menu icon" />
		      <!-- <svg id="Layer_1" data-name="Layer 1" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 56 224"><defs><style>.cls-menu-dots{fill:#727271;fill-rule:evenodd;}</style></defs><title>dots-3</title><path class="cls-menu-dots" d="M480,210a28,28,0,1,1-28,28A28,28,0,0,1,480,210Z" transform="translate(-452 -210)"/><path class="cls-menu-dots" d="M480,294a28,28,0,1,1-28,28A28,28,0,0,1,480,294Z" transform="translate(-452 -210)"/><path class="cls-menu-dots" d="M480,378a28,28,0,1,1-28,28A28,28,0,0,1,480,378Z" transform="translate(-452 -210)"/></svg> -->
		    </button>
		  </div>
		</form>
		<ul id="auto-list" class="list"></ul>
	</div>`,
	data(){
		return{
		}
	},
	methods:{ 
		getData: function(){
			function g(id){return document.getElementById(id);};
			function $(id){let obj = document.getElementsByClassName(id); if(obj.length == 1){obj = obj[0]}; return obj;};
			//let inp = $('inputField'); //console.log(inp);
			let inp = event.target; //console.log(inp);
			let autoList = inp.parentNode.parentNode.parentNode.childNodes[1];
			let ary = null; let txt = ""; let n = 3; let limit = 7; //let autoList = g('auto-list');
			let DB = db.worldCitiesUrl;
			//console.log('this is this', this.$el, 'this is inp: ', inp, 'world cities', DB);
			let boo = false;
			//const form = g("search-bar-top");
			const form = inp.parentNode.parentNode.parentNode;

			inp.addEventListener('keyup', ()=>{
				let loop = 0;let msg = ""; txt = ""; autoList.innerHTML = txt;

				if (inp.value?.length >= n){
					ary = this.find(DB, inp.value.trim());

					autoList.style.display = 'block'; console.log(autoList);

					ary.then((value) => {
						if(value.length > limit){
							loop = limit;
							msg = "a list larger than the limit will appear here" + value.length;
						} else {
							loop = value.length;
							msg = "";
						}
						if(value.length > 0){
							for(let i = 0; i < loop; i++){
								txt += '<li><a href="'+ relativePath + '/explore/' +value[i].item.url +'">'+ value[i].item.city +'<br/><span> ' + value[i].item.admin_name + ', ' + value[i].item.country + '</span></a></li>';
							}
							autoList.innerHTML = txt + msg;
						};
					});
				};
				inp.addEventListener('ArrowDown', ()=>{
					//console.log('ArrowDown');
				})
			});


			document.addEventListener('click', 
			function (e){
			  boo = false;
			  if(boo == false)autoList.style.display = "none";
			}
			);

			form.addEventListener('click',
			function(evt){
			  evt.stopPropagation();
			  boo = true;
			  if(boo == true)autoList.style.display = "block"; console.log('DISPLAY BLOCK SHOULD BE HERE');
			}, false);
		},
		find: async function (data,value){
			let options = {
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

			options["keys"].push(["title", "link", "url"]); // temporary over write

			let fuse = new Fuse(data, options);
			let result = fuse.search(value);
			return result;
		},
		sendQuery: function(event){
			let txt = event.target[0].value.trim();
			event.preventDefault();
			if(txt != ''){window.location.href = relativePath+'/r?q=' + txt;}
		}
	}
};

export default Form;