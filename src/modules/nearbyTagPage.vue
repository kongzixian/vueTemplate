<template class="nearby-body">
  <section class="nearby-tagPage">
    <ul class="moreKindLists">
      <li v-for="(moreKindList,index) in moreKindLists"
      v-bind:item-url="moreKindList.url"
      v-bind:class="{ active: moreKindList.isActive }"
      v-on:click="choiceKind(index)">
        {{moreKindList.name}}
      </li>
    </ul>

    <ul class="tagList">
      <li
      v-for="(tagList,index) in tagLists"
      v-bind:data-label="tagList.label"
      v-bind:class="{ active: tagList.isActive }"
      v-on:click="choiceTag(index)">
        {{tagList.name}}
      </li>
    </ul>

    <ul class="tagPageLists">
      <li v-for="nearbyList in nearbyLists">
        <div class="img-box fl">
          <img v-bind:src="nearbyList.imgUrl" alt="">
        </div>
        <div class="detail-box">
          <div class="title-box">
            <span class="title">{{nearbyList.name}}</span>
            <span class="priceTag"
            v-show="nearbyList.priceTag || nearbyList.priceTag == ''">￥</span>
            <span class="outer"
            v-show="nearbyList.outer  || nearbyList.outer == ''">外</span>
            <span class="ticket"
            v-show="nearbyList.ticket || nearbyList.ticket ==''">券</span>
          </div>
          <div class="evalPrice-box clearfix">
            <ul class="five-stars fl">
              <li>
                <span class="fa fa-star stars"></span>
              </li>
            </ul>
            <span class="price">￥{{nearbyList.price}}/人</span>
          </div>
          <div class="place-distance-box clearfix">
            <span class="place">{{nearbyList.place}}</span>
            <span class="distance">{{nearbyList.distance}}{{nearbyList.distanceUnit}}</span>
          </div>
          <div class="tag-business clearfix">
            <div class="fl">
              <span class="rank"
              v-show="nearbyList.rank.length>0">{{nearbyList.rank}}</span>
              <div class="tag-lists"
              v-for="tagDList in nearbyList.tagDLists">
                <span class="tag">{{tagDList}}</span>
              </div>
            </div>
            <span class="fr"
            v-show="nearbyList.business.length>0">
              {{nearbyList.business}}营业
            </span>
          </div>

          <div class="lineLayout clearfix"></div>

          <div class="activityList">
            <ul>
              <li v-show="nearbyList.ticket && nearbyList.ticket.length > 0">
                <span class="ticket">券</span>
                <span class="text">{{nearbyList.ticket}}</span>
              </li>
              <li v-show="nearbyList.priceTag && nearbyList.priceTag.length > 0">
                <span class="priceTag">惠</span>
                <span class="text">{{nearbyList.priceTag}}</span>
              </li>
              <li v-show="nearbyList.roll && nearbyList.roll.length  > 0">
                <span class="roll">团</span>
                <span class="text">{{nearbyList.roll}}</span>
              </li>
              <li v-show="nearbyList.outer && nearbyList.outer.length > 0">
                <span class="outer">外</span>
                <span class="text">{{nearbyList.outer}}</span>
              </li>
            </ul>
          </div>


        </div>
      </li>
    </ul>
  </section>

</template>

<script>

export default{
  name:"nearby-body",
  props:{
    tagLists:{
      type:Array,
      required:false
    },
    nearbyLists:{
      type:Array,
      required:false
    },
    moreKindLists:{
      type:Array,
      required:false
    }
  },
  data(){
    return{
    }
   },
  methods:{
    //点击对应的tag加载对应tag的页面
    choiceTag:function(index){
      $.each(this.tagLists,function(idx,item){
        item.isActive=false;
      })
      this.tagLists[index].isActive=true;
      var $thisLabel=$(".tagList li").eq(index).attr("data-label");
      this.$emit('chooseTag',$thisLabel);
    },
    //点击对应的种类加载对应tag的页面
    choiceKind:function(index){
      $.each(this.moreKindLists,function(idx,item){
        item.isActive=false;
      })
      this.moreKindLists[index].isActive=true;
      var $thisLabel=$(".moreKindLists li").eq(index).attr("item-url");
      // this.$emit('chooseTag',$thisLabel);
    }

  }
}

</script>


<style scoped>
@import '../assets/css/nearBy.css'
</style>
