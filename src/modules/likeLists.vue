<template>
  <div class="likeList-container">
    <div class="title">
      {{title}}
    </div>
    <ul class="like-list">
      <li
      v-for="likeList in likeLists"
      >
        <img
        class="img-box fl"
        v-bind:src="likeList.imgUrl"
        alt="">
        <div class="details-box fr">
          <div class="title-box">
            <h3 class="title fl">{{likeList.title}}</h3>
            <span class="distance fr">{{likeList.distanceVal}}{{likeList.distanceUnit}}</span>
          </div>
          <p class="clearfix">{{likeList.content}}</p>
          <div class="priceDetail-box">
            <span class="price fl">￥<b>{{likeList.price}}</b></span>
            <span
            v-if="likeList.retailSalesPrice.length>0"
            class="retailSalesPrice fl">
            门市价:￥{{likeList.retailSalesPrice}}
          </span>
            <span class="workOff fr">已售{{likeList.workOff}}</span>
          </div>
          <div
          v-if="likeList.discounts.length>0"
          class="discounts clearfix">
            {{likeList.discounts}}折
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default{
  name:"likeList-container",
  props:{
    likeLists:{
      type:Array,
      required:true
    }
  },
  data(){
    return{
      title:"- 猜你喜欢 -",
      discounts:"",
      discountsUnit:"折",
      retailSalesPrice:""
    }
  }
}
</script>
<style scoped>
@import '../assets/css/homeBody.css'
</style>
