<template>
  <section class="find-container">
    {{title}}
    <tree-component v-bind:treeLists="theModel"></tree-component>
  </section>

</template>

<script>
import TreeComponent from '../modules/treeContent'
export default{
  name:"find",
  data(){
    return{
      title:"发现页面还在开发中",
      theModel:[]
    }
  },
  mounted(){
    this.initTreeDataUrl('api/treeData');
  },
  methods:{
    initTreeDataUrl(url){
      var self=this;
      this.$http.post(url).then((res)=>{
        if(res.status==200){
          var data=res.body;
          self.theModel=data.data;
        }
      }).catch(function (err) {
       console.log(err,'错误');
     });
    }
  },
  components:{
    'tree-component':TreeComponent
  }
}

</script>


<style scoped>
@import '../assets/css/find.css'
</style>
