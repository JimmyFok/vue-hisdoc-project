<template>
  <div 
    class="cutline" 
    :style ="'background-image:url('+ cutline.src +')'" 
  >
    {{cutline.title}}
  </div>
</template>

<script>
export default {
  name: 'Cutline',   //组织好组建的参数  
  props: {
      cutline: Object,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .cutline{
      height: 36px;
      width: 100%;
      background-size: 100% auto;
      background-position: 0 100%;
      background-repeat: no-repeat;
      line-height: 38px;
      font-size: 16px;
      font-weight: bold;
      color:#333333;
  }
</style>
