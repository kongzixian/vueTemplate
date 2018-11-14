<template>
  <div id="app">
  <app-footer v-bind:imgUrls="imgDatas"></app-footer>
<router-view/>
  </div>
</template>

<script>
import Footer from　'./components/footer'
export default {
  name: 'App',
  data(){
    return{
      imgDatas:[]
    }
  },
  mounted(){
    this.initFooterImgUrl('api/footerIcon');
  },
  methods:{
    //获取底部的icon的数据接口
    initFooterImgUrl(url){
      this.$http.post(url).then((res)=>{
        if(res.status==200){
          var data=res.body;
          this.imgDatas=data.data;

        }
      }).catch(function (err) {
       console.log(err,'错误');
     })
   }
  },
  components:{
    "app-footer":Footer
  }
}
</script>

<style scoped>

</style>
