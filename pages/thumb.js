const Thumb = {
	template:`<div v-on:click="inject" style="width:100%; height:100px; padding:10px; font-size:13px; background:pink; box-sizing:border-box;"> <b>External component.</b> This is an <b style="font-size:20px;">IMPORTED div {{count}}</b><b style="color:red;">{{BIG}}</b></div>`,
  data(){
    return {
      count:"NOTHING TO COUNT",
      BIG: "This is some BIG TEXT TO PROVE A POINT"
    }
  },
  methods:{
    inject(){console.log("this is from the 'inject' method in an external JS file")}
  }
};
export default Thumb;



/*
export default {
  data() {
    return {
      count: 0
    }
  },
  template: `
    <button @click="count++">
      You clicked me {{ count }} times.
    </button>`
}
*/