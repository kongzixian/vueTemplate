<template>
  <div class="myUser-header">
    <div class="header">
      <div class="icon-left">
        <span class="icon-box">
          <img src="../../static/img/user/icon_header_1.png" alt="">
        </span>
      </div>
      <div class="icon-right">
        <span class="icon-box">
          <img src="../../static/img/user/icon_header_2.png" alt="">
        </span>
        <span class="icon-box">
          <img src="../../static/img/user/icon_header_3.png" alt="">
        </span>
      </div>
    </div>
  </div>
</template>

<script>

export default{
  name:"myUser-header",
  data(){
    return{
      title:"用户的头部"
    }
  },
  methods:{

  }
}

</script>


<style scoped>
@import '../assets/css/myUser.css'
</style>
