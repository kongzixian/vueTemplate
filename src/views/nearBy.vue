<template>
  <section class="nearby">
    <nearby-header></nearby-header>
    <img src="../../static/img/banner/nearbyBanner.png" alt="">
    <nearby-body
    v-on:chooseTag="monitorTagClick($event)"
    v-bind:moreKindLists="moreKindLists"
    v-bind:tagLists="tagLists"
    v-bind:nearbyLists="nearbyLists"></nearby-body>
  </section>

</template>

<script>
import NearbyHeader from '../modules/nearbyHeader'
import NearbyTagPage from '../modules/nearbyTagPage'
export default{
  name:"nearby",
  data(){
    return{
      title:"附近页面还在开发中",
      moreKindLists:[],
      tagLists:[],
      nearbyLists:[]
    }
  },
  components:{
    'nearby-header':NearbyHeader,
    'nearby-body':NearbyTagPage
  },
  mounted(){
    this.initMoreKindListsUrl('api/moreKindLists');
    this.initTagListsUrl('api/tagLists');
    this.initNearbyListsUrl('api/nearbyLists');
    this.initSelectedTagUrl('api/hot');
  },
  methods:{
    //点击对应的tag加载对应tag的页面
    monitorTagClick:function(label){
      console.log(label);
      this.initSelectedTagUrl('api/'+label);
    },
    initSelectedTagUrl:function(url){
      this.$http.post(url).then((res)=>{
        if(res.status==200){
          var data=res.body;
        }
      }).catch(function(err){
        console.log(err,'错误');
      })
    },
    initTagListsUrl(url){
      this.$http.post(url).then((res)=>{
        if(res.status==200){
          var data=res.body;
          this.tagLists=data.data;
        }
      }).catch(function(err){
        console.log(err,'错误');
      })
    },
    initNearbyListsUrl(url){
      this.$http.post(url).then((res)=>{
        if(res.status==200){
          var data=res.body;
          this.nearbyLists=data.data;
        }
      }).catch(function(err){
        console.log(err,'错误');
      })
    },
    initMoreKindListsUrl(url){
      this.$http.post(url).then((res)=>{
        if(res.status==200){
          var data=res.body;
          this.moreKindLists=data.data;

        }
      }).catch(function(err){
        console.log(err,'错误');
      })
    }
  }
}

</script>


<style scoped>
@import '../assets/css/nearBy.css'
</style>
