<template>
  <div class="news">
      <div class="title">医护快报</div>
            <router-link to="/news">
            <ul class="content">
                <li
                    v-for= "(item, index) in newstates"
                    :key = "index"
                > 
                    <i>{{item.state}}</i>
                    <span>{{item.title}}</span>
                </li>          
            </ul>
        </router-link>
  </div>
</template>

<script>
export default {
  name: 'News',   //组织好组建的参数
  props: {
    newstates: Array
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .news{
      height: 48px;
      width: 100%;
      background-color:#FCFDFF;
      display: flex;
      align-items: center;
      margin-bottom: 4px;
  }
  .title{
      font-size: 16px;
      color: #4887D0;
      font-weight: 600;
      padding: 0 8px;      
  }
  .content{
      display:flex;
      flex-direction: column;
      align-items: flex-start;
      border-left:1px rgba(178,178,178,0.50) solid;
  }

  .content li{
      font-size: 11px;
      line-height: 16px;
      display: flex;
      align-items: center; 
  }
  .content li i{
      border: 1px solid #FF6B6B;
      border-radius: 4px;
      color: #FF6B6B;    
      font-size: 8px;
      width: 12px;
      height:12px;  
      line-height: 13px;
      margin: 0 8px;
  }
  .content li span{
      height: 16px;
  }
</style>
