<template>
  <header>
    <ul class="header-detail">
      <li class="weather-box">
        <div class="weater-frame">
          <span class="icon">
            <img src="../../static/img/icon/weater.png" alt="">
          </span>
          <span class="value">23</span>
        </div>
        <div class="position-frame">
          <span class="name">佛山</span>
          <span class="icon"><i class="fa fa-chevron-down"></i></span>
        </div>
      </li>
      <li class="search-box">
        <form class="search-frame">
          <input class="search-input" type="text" value="">
          <span class="search-icon"><i class="fa fa-search"></i></span>
        </form>
      </li>
      <li class="plus-box">
        <span class="icon">
          <img src="../../static/img/icon/plus.png" alt="">
        </span>
      </li>
    </ul>
  </header>

</template>

<script>

export default{
  name:"app-header",
  data(){
    return{

    }
  },
  methods:{

  }
}

</script>


<style scoped>
@import '../assets/css/header.css'
</style>
