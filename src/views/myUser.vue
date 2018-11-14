<template>
  <div class="myUser">
    <myUser-header></myUser-header>
    <myUser-body v-bind:myUserLists="myUserLists"></myUser-body>
{{title}}
  </div>
</template>

<script>
import myUserHeader from '../modules/myUserHeader'
import myUserBody from '../modules/myUserBody'
export default{
  name:"myUser",
  data(){
    return{
      title:"我的页面还在开发中",
      myUserLists:[]
    }
  },
  mounted(){
    this.initMyUserListsUrl('api/myUserLists');
    window.addEventListener("scroll",this.gradualChange);
  },
  methods:{
    initMyUserListsUrl:function(url){
      this.$http.post(url).then((res)=>{
        if(res.status==200){
          var data=res.body;
          this.myUserLists=data.data;
          console.log(this.myUserLists);
        }
      }).catch(function(err){
        console.log(err,'错误');
      })
    },
    gradualChange:function(){
      var windowScrollTop=$(document).scrollTop();
      var header=$(".myUser .header");
      var gradualNum=windowScrollTop*0.01;
      if(windowScrollTop>0){
        if(windowScrollTop<1){
          header.css("background","rgba(35,170,176,1)");
        }
        header.css("background","rgba(35,170,176,"+gradualNum+")");
      }else{
        header.css("background","rgba(35,170,176,0)");
      }
    }
  },
  components:{
    "myUser-header":myUserHeader,
    "myUser-body":myUserBody
  }
}

</script>


<style scoped>
@import '../assets/css/nearBy.css'
</style>
