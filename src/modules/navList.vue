<template>
  <div class="nav-box">
    <ul class="nav-list">
      <li v-for="navList in navLists">
        <img v-bind:src="navList.iconUrl" alt="">
        <span class="name">{{navList.name}}</span>
      </li>
    </ul>
    <ul class="subNav-list">
      <li v-for="subNavList in subNavLists">
        <img v-bind:src="subNavList.iconUrl" alt="">
        <span class="name">{{subNavList.name}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default{
  name:"nav-box",
  props:{
    navLists:{
      type:Array,
      required:false
    },
    subNavLists:{
      type:Array,
      required:false
    }
  },
  data(){
    return{

    }
  }
}
</script>
<style scoped>
@import '../assets/css/homeBody.css'
</style>
