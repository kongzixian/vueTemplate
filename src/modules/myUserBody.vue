<template>
  <div class="myUser-body">
    <div class="head-portrait">
      <img class="head-bg" src="../../static/img/user/userHeadBg.png" alt="">
      <img class="head-img" src="../../static/img/user/user_img.jpg" alt="">
      <h3 class="user-name">欣妙666</h3>
    </div>
    <div class="eachList-box">
      <div v-for="(myUserList,index) in myUserLists"
       v-bind:class="myUserList.word">
        <h3 class="title">{{myUserList.name}}</h3>
        <ul>
          <li v-for="sonData in myUserList.children">
            <img v-bind:src="sonData.imgUrl" alt="">
            <span class="name">{{sonData.name}}</span>
          </li>
        </ul>
      </div>
    </div>
    {{title}}
  </div>
</template>

<script>

export default{
  name:"myUser-body",
  props:{
    myUserLists:{
    type:Array,
    required:false
  }
},
  data(){
    return{
      title:"用户的内容"
    }
  },
  methods:{

  }
}

</script>


<style scoped>
@import '../assets/css/myUser.css'
</style>
