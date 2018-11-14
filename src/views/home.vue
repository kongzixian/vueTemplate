<template>
  <div class="home">
    <app-header v-bind:title="title" v-on:exchangedTitle="updatedTitle($event)"></app-header>
    <app-main></app-main>
  </div>
</template>

<script>
import Header from　'../components/header'
import HomeBody from　'../components/homeBody'
export default {
  name: 'home',
  data () {
    return {
      users:[],
      title:"改变title",
      imgDatas:[]
    }
  },
  mounted(){
    this.initUserUrl('api/users-ratings');
  },
  methods:{
    //获取users的数据接口
    initUserUrl(url){
      this.$http.post(url).then((res)=>{
        if(res.status==200){
          var data=res.body;
          this.users=data.data;
        }
      }).catch(function (err) {
       console.log(err,'错误');
     })
   },

   updatedTitle:function(title){
     this.title=title;
   }
  },
  components:{
    "app-header":Header,
    "app-main":HomeBody
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/base.css'
</style>
