<template>
  <div class="spes">
    <!-- 同一个组件传入参数方式 -->
      <router-link 
        class="spes-box" 
        v-for="(item,index) in spesitems" 
        :key="index"
        :style="'background-image:url('+item.src+')'"
        :to="{ name: 'sep', params: { id: index, stores: item }}"
      >
        <div>
            <div class="topic">{{item.topic}}</div>
            <div class="title">{{item.title}}</div>
            <div v-if="item.number!=''" class="number">{{item.number}}</div>                
        </div>     
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'Funs',   //组织好组建的参数
  props: {
    spesitems: Array,    
  },
  // 定义方法
  methods:{
      change:function(){
          alert("我测试下")
      }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .spes{
      width:100%;
      height: 120px;
      display: flex;
      /* align-items: stretch; */
      flex-grow:1;
      background-color:#FCFDFF;
      border-bottom: 0.5px #e5e5e5 solid;
      flex-direction: column;
      flex-wrap:wrap;
  }
  
  .spes-box{
      width: 50%;
      height:50%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      background-size: auto 70%;
      background-repeat: no-repeat;
      background-position: 100%;       
  }
  .spes-box>div{
      padding:12px 0 0 12px;
      text-align: left;
  }
  .spes-box:nth-child(1){
      width: 50%;
      height: 100%;
      background-size: 100% auto;      
  }

  .topic{
      font-size: 16px;
      color: #333333;
      padding-bottom: 6px;
  }
  .title{
      font-size: 12px;
      color: #999999;
      padding-bottom: 6px;
  }
  .number{
      font-size: 10px;
      color: #FFFFFF;
      line-height:16px;
      background-image: linear-gradient(90deg, #E6B12A 0%, #F8E42A 100%);
      border-radius: 4px;
      width: auto;
      padding: 0 8px;
      text-align: center;
      float:left;
  }
  
  
</style>
