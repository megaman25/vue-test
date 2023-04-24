//import { Content } from './components/content.js'


const Home = {
	template:'<div class="box">{{ variable }} {{ var2 }} <Header /><Content /></div>', 
	data(){
		return {variable: "Something Right!", var2: "some more stuff"};
	}
}

const Explore = {
	template:'<div class="box pink">{{ variable }} {{ var2 }} <Header /></div>', 
	data(){
		return {variable: "EXPLORE SOMETHING", var2: "Browse Around"};
	}
}

const ExploreSub = {
	template:'<div class="box red">{{ variable }} {{ var2 }} <Header /></div>', 
	data(){
		return {variable: window.location.pathname, var2: "Explore Subpage"};
	}
}

const routes = [
	{path: './vue-test/', component: Home },
	{path: './vue-test/explore', component: Explore },
	{path: './vue-test/explore:id', component: ExploreSub },
];

const router = VueRouter.createRouter({
	history: VueRouter.createWebHistory(),
	mode: 'history',
	routes,
});

const app = Vue.createApp({})
	app.use(router);


app.component(
  'Header',
  {
    template:'<div><b>{{ text }}</b></div>',
  	data(){
  			return {text:"Header STuff from component"} 
  		}
  }
)
app.mount('#wrapper');
