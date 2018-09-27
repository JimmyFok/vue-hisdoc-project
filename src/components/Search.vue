<template>
  <!-- 主页div组件 -->
  <div class="search">
    
      <div class="left">
        <router-link v-if="city" to="/city">
          <span>{{city}}<i class="fa fa-caret-down fa-fw"></i></span>
        </router-link>  
        
        <div @click="backfun"  v-if="back">
          <span ><i class="fa fa-angle-left fa-fw"></i>{{back}}</span>
        </div>  
      </div>
       
      <div class="mid">
        <router-link to="/search">
          <i class="fa fa-search fa-fw"></i>        
          <input type="text" :placeholder='searchtis'/>
        </router-link>

        <router-link to="/Scan">
          <div>
             <i class="fa fa-qrcode fa-fw" ></i>
          </div>         
        </router-link>
      </div>       
    
    <router-link v-if="maptitle" to="/location">
      <div class="right">      
        <span ><i class="fa fa-map-marker fa-fw"></i>{{maptitle}}</span>
      </div>
    </router-link>    

    <div @click="backfun"  v-if="cancel">
        <span class="cancel">{{cancel}}</span>
    </div> 

    <!-- <qrcode :value="value" :size="size" :fg-color="fgColor" :bg-color="bgColor"></qrcode> -->

  </div>
</template>

<script>
// import Vue from 'vue'
// import { Qrcode } from 'vux'

export default { 
  name: 'Search',
  // 组织好组建的参数
  props: {
    city: String,
    searchtis: String,  // 搜索的提示
    maptitle: String,
    back: String,
    cancel: String,
  },
  methods:{
    backfun:function(){
      this.$router.go(-1)
    }
  },
  // components: {
  //   Qrcode
  // },
  // data(){
  //   return {
  //     value: "http://192.168.1.49:8080/",
  //     size: 80,
  //     bgColor: '#FFFFFF',
  //     fgColor: '#000000',
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .search{
    display: flex;
    flex-direction: row;
    height: 44px;
    align-items: center;
    font-size: 15px;
    justify-content: space-around;   
    /* color: #FCFDFF; */
    /* background:#000; */
    background:linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.3),rgba(0,0,0,0));    
  }

  .search span{
    color: #FCFDFF;
  }

  .left{
    display: flex;
    justify-content: space-between;
  }

  .mid a{
    display:flex;
    align-items: center;
  }

  input{
    height: 28px;
    line-height: 20px;
    border: none;
    padding:4px 4px;
    background-color: transparent; 
    flex-grow: 1;
  }
  .mid{
    border: 1px solid rgba(0,0,0,0.05);
    border-radius: 100px;
    height: 28px;
    line-height: 28px;
    padding:0 4px;
    background-color: #FCFDFF;
    margin:0 -16px;
    display: flex;
  }
  .mid i:first-child{
    color:#BBBBBB;
  }
  .mid i:last-child{
    color:#4ABAE2;
  }
  .right span{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size:9px;    
  }
  .right span i{
    font-size: 18px; 
    line-height: 22px;
  }
  .fa-angle-left{
    font-size:20px;
  }
  .cancel{
      padding:0 12px 0 0;
  }
</style>
