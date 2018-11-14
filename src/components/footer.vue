<template>
  <footer>
    <ul>
      <li  v-bind:class="{active:imgurl.active}" v-on:click="changeImg($index)" v-for="(imgurl,$index) in imgUrls">
        <router-link v-bind:to="imgurl.url">
        <span>
          <img class="icon" v-bind:src="imgurl.imgUrl" alt="">
        </span>
        <span class="title">
          {{imgurl.title}}
        </span>
        </router-link>
      </li>

    </ul>
  </footer>

</template>
<script>
export default{
  name:"app-footer",
  props:{
    imgUrls:{
      type:Array,
      required:true
    }
  },
  data(){
    return{

    }
  },
  mounted(){

  },
  methods:{
    changeImg:function($index){

      let len=this.imgUrls.length;
      $.each(this.imgUrls,function(i,item){
        item.imgUrl='../../static/img/icon/'+item.imgName+'.png';
        item.active=false;
      })
      this.imgUrls[$index].imgUrl='../../static/img/icon/'+this.imgUrls[$index].imgName+'_active.png';
      this.imgUrls[$index].active=true;
    }
  }
}
</script>
<style scoped>
@import '../assets/css/footer'
</style>
