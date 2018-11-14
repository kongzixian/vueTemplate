<template>
  <div class="fallsLayout">
    <ul>
      <li
      v-for="recommend in recommends"
      >
        <span class="tag">{{recommend.tag}}</span>
        <div class="detailBox">
          <h3>{{recommend.title}}</h3>
          <h4>{{recommend.classify}}</h4>
        </div>
        <div class="imgBox">
          图片
        </div>
      </li>
    </ul>
  </div>

</template>
<script>
export default{
  name:"fallsLayout",
  props:{
    recommends:{
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
