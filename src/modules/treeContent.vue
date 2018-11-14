<template id="tree-component">
  <ul  class="treeView-box">
    <li v-for="item in treeLists">
        <a href="javascript:;">{{ item.name }}</a>
        <template v-if="item.children && item.children.length">
          <tree-component v-bind:treeLists="item.children"></tree-component>
        </template>
    </li>
  </ul>
</template>
<script>
import TreeComponent from '../modules/treeContent'
export default{
  name: 'tree-component',
  props: {
    treeLists:{
      type:Array,
      required:true
    }
  },
  data(){
    return{

    }
  },
  components:{
    'tree-component': TreeComponent
  }
}

</script>
<style scoped>
@import '../assets/css/find.css'
</style>
