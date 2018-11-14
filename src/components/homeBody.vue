<template>
  <section class="home-body">
    <banner></banner>
    <nav-box v-bind:navLists="navLists" v-bind:subNavLists="subNavLists"></nav-box>
    <fallsLayout v-bind:recommends="recommends"></fallsLayout>
    <img class="subBanner" src="../../static/img/banner/subBanner.png" alt="">
    <likeList-container v-bind:likeLists="likeLists"></likeList-container>
  </section>

</template>

<script>
import Banner from '../modules/banner'
import NavList from '../modules/navList'
import FallsLayout from '../modules/fallsLayout'
import LikeLists from '../modules/likeLists'

export default{
  name:"app-main",
  data(){
    return{
      title:"首页内容区域还在开发中",
      navLists:[],
      subNavLists:[],
      recommends:[],
      likeLists:[]
    }
  },
  mounted(){
    // this.initNavIconUrl('api/navIcon');
    // this.initSubNavIconUrl('api/subNavIcon');
    // this.initRecommendsUrl('api/recommends');
    // this.initLikeListsUrl('api/likeLists');
    api.navIconData().then(res =>{
      this.navLists=res.data;
    })
    api.subNavIcon().then(res =>{
      this.subNavLists=res.data;
    })
    api.recommends().then(res =>{
      this.recommends=res.data;
    })
    api.likeLists().then(res =>{
      this.likeLists=res.data;
    })
  },
  methods:{
    //获取navIcon的数据接口
   //  initNavIconUrl(url){
   //    this.$http.post(url).then((res)=>{
   //      if(res.status==200){
   //        var data=res.body;
   //        this.navLists=data.data;
   //      }
   //    }).catch(function (err) {
   //     console.log(err,'错误');
   //   })
   // },

    //获取navIcon的数据接口
    // initSubNavIconUrl(url){
    //   this.$http.post(url).then((res)=>{
    //     if(res.status==200){
    //       var data=res.body;
    //       this.subNavLists=data.data;
    //     }
    //   }).catch(function (err) {
    //    console.log(err,'错误');
    //  })
    // },
    //   //获取recommends的数据接口
    //   initRecommendsUrl(url){
    //     this.$http.post(url).then((res)=>{
    //       if(res.status==200){
    //         var data=res.body;
    //         this.recommends=data.data;
    //       }
    //     }).catch(function (err) {
    //      console.log(err,'错误');
    //    })
    //  },
    //  initLikeListsUrl(url){
    //    this.$http.post(url).then((res)=>{
    //      if(res.status==200){
    //        var data=res.body;
    //        this.likeLists=data.data;
    //      }
    //    }).catch(function (err) {
    //     console.log(err,'错误');
    //   })
    //  }
  },
  components:{
    "banner":Banner,
    "nav-box":NavList,
    "fallsLayout":FallsLayout,
    "likeList-container":LikeLists
  }
}

</script>


<style scoped>
@import '../assets/css/homeBody.css'
</style>
