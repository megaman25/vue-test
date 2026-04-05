"use strict";
console.log('this is from utils.js');
import worldcitiesKeys from './data/worldcities-key.js';
import worldCitiesUrl from './data/worldcities-url.js';
import activities from './data/activities.js';
import posts from './data/posts.js';
import itinerary from './data/itinerary.js';
const relativePath = "/itinerary_2026";
window.relativePath = relativePath;
let favorites = [];
window.favorites = favorites;

function addTitle (){
	return "portfolio - " + window.location.pathname;
};

function coordinateDistanceRange(index, db, range){
	let lat = db[index].lat;
	let lng = db[index].lng;
	let ary = [];
	let x = null;
	let y = null;
	let h = null;
	for(let i in db){

		x = db[i].lat -lat;
		y = db[i].lng -lng;
		h = Math.sqrt(x*x + y*y);
		db[i].h = Math.abs(h);

		if (db[i].h <= range){
			ary.push(db[i]);
		};
	};
	return ary;
};

const db = (function(){

	let obj = [];
	obj.worldcitiesKeys = worldcitiesKeys;
	obj.worldCitiesUrl = worldCitiesUrl;
	obj.activities = activities;
	obj.posts = posts;
	obj.itinerary = itinerary;
	window.db = obj;
	return obj;
})();


function faveList(){
	let txt = '';
	let f = JSON.parse(window.localStorage.getItem('maarjin_favorites'));

	let L = null; let n = 0; let ary = [];
	for(let i in f){
		L = f[i];
		n = db.worldcitiesKeys[L]
		ary.push(db.worldCitiesUrl[n]);
	};

	//let i = db.worldcitiesKeys[L];
	//let obj = db.worldCitiesUrl[i];
	//<div class="right"><a href="${relativePath}/explore/${ary[i].url}" style="font-size:1.2rem;">Plan Trip</a></div>
	for(let i in ary){
		txt += `<li class="item" style="clear:both;">
			<div class="left">${ary[i].city}, ${ary[i].admin_name}</div>
			<div class="right"><button class="btn color-blue" data-location="${ary[i].url}">Plan Trip</button></div>
		</li>`;
	};
	return txt;
};


function find(data,value, options){
	//options["keys"].push(["title", "link", "url"]); // temporary over write

	let fuse = new Fuse(data, options);
	let result = fuse.search(value);
	return result;
};

function g(id){return document.getElementById(id);};


function Itinerary(){
	console.log(this, 'from itinerary function');
	return this;
};


const Login = {
  template:`
    <a href="" class="btn">Sign Up</a>
    <a href="" class="btn none">Login</a>`
};

function menuOpen(){
	let e = window.event;
	console.log(e);
	open == false ? open = true : open = false;
	let close = g("close-menu-btn");
	let menu = g("menu");
	let links = menu.querySelectorAll('a');
	for(let i = 0; i < links.length; i++){
		links[i].onclick = ()=> {menu.classList.remove("open");};
	};
	document.body.style.overflow = "hidden";
	menu.classList.add("open"); open = true;
	close.onclick = ()=> {open = false; menu.classList.remove("open");
		document.body.style.overflow = "visible";
	}; console.log(open)
};

function modal(openID, closeID, htmlcontent, modalName){
	let e = window.event;
	let b = document.body;
	modalName = 'modal-'+modalName;
	//openID = new RegExp(openID, 'gi');
	//closeID = new RegExp(closeID, 'gi');
	function $(el){return document.querySelectorAll(el);};
	function el(el){return document.createElement(el);};
	openID = $(openID);
	addFn(openID, ()=>{
		let n = null;
		if($('.modal')?.length == 0){
			let M = el('div');
			M.id = modalName;
			M.classList.add('modal');
			M.innerHTML = htmlcontent;
			b.classList.add('overlay');
			b.append(M);
			addFn($(closeID), ()=>{
				n = $('.modal');
				if(n.length > 0){
					b.classList.remove('overlay');
					//n[n.length-1].remove();
					$('#'+modalName)[0].remove();
				};
			});
		};
	});
};

function sort(ary,rev){ // 7:20am - typed out in minutes due to replaying in mind. //7:25am worked perfectly
	//if(rev == undefined){rev = false;};
	let len = ary.length; let tmp = null;
	for(let i = 0; i < len; i++){
		for(let j = 0; j < len-1; j++){
			if(rev == true){
				if(ary[j] < ary[j+1]){
					tmp = ary[j+1];
					ary[j+1] = ary[j];
					ary[j] = tmp;
				};
			} else {
				if(ary[j] > ary[j+1]){
					tmp = ary[j+1];
					ary[j+1] = ary[j];
					ary[j] = tmp;
				};
			};
		};
	};
	return ary;
};

function sortByProperty(ary,prop,rev){ // 2024/06/10 @7:20am - typed out in minutes due to replaying in mind. //7:25am worked perfectly
	//if(rev == undefined){rev = false;};
	let len = ary.length; let tmp = null;
	for(let i = 0; i < len; i++){
		for(let j = 0; j < len-1; j++){
			if(rev == true){
				if(ary[j][prop] < ary[j+1][prop]){
					tmp = ary[j+1];
					ary[j+1] = ary[j];
					ary[j] = tmp;
				};
			} else {
				if(ary[j][prop] > ary[j+1][prop]){
					tmp = ary[j+1];
					ary[j+1] = ary[j];
					ary[j] = tmp;
				};
			};
		};
	};
	return ary;
};

/*function sendQuery(event){
	event.preventDefault();
	console.log(this.target);
	window.location.href = relativePath+'/r?q=' + document.getElementById("inputSearch").value.trim();
};*/

export { addTitle, coordinateDistanceRange, db, faveList, find, g, Itinerary, Login, menuOpen, modal, relativePath, sort, sortByProperty };