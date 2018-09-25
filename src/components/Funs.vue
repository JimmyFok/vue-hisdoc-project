<template>
  <div class="funs">
      <ul>
          <li 
            v-for="(item,index) in funitems" 
            :key = "index" 
            @click = "change">
                <router-link :to ="'/fun'+index">
                    <div :style ="'background-image:url('+ item.src +')'" ></div>
                    <!-- <img :src="srcbegin+item.src" :alt="item.title"> -->
                    <span>{{item.title}}</span>
                </router-link>              
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Funs',   //组织好组建的参数
  props: {
    funitems: Array,
  },
  // 定义方法
  methods:{
      change:function(){
        //   alert("覅的三分电视剧")
      }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .funs{
      height:88px;
      display: flex;
      align-items: stretch;
      flex-grow:1;
      background-color:#FCFDFF;
      border-bottom: 0.5px #e5e5e5 solid;
  }
  ul{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      flex-grow:1;
  }
  li{
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 12px;
      color: #333333;      
  }
  li div{
      width:40px;
      height:40px;
      background-size:100% 100%;
      margin-bottom: 8px;
  }
  
</style>
