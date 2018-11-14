<template id="tree-menu">
  <div>
    <tree-component v-bind:model="model">
      <li></li>
    </tree-component>
  </div>
</template>
<script>
import TreeComponent from '../modules/treeContent'
export default{
  name:"tree-menu",
  props:['model'],
  data(){
    return{

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
