<template>
  <div id="home">
    <Search 
      class = 'top'
      city = "广州市"
      searchtis = "搜索疾病、医生或医院"
      maptitle = "医院定位"
    />
    <Banner 
      :banners = "datastore.banners"
    />
    <User
      name = "放声大哭"
      vip = "VIP1"
      vipname = "精准服务特权"
      servename = "小康康"
      servevip = "String"
      male
    />
    <News :newstates = "datastore.newstates"/>
    <Funs 
      :funitems="datastore.funitems" 
    />
    <Seps 
      :spesitems="datastore.spesitems"    
    />
    <Cutline :cutline="datastore.cutline"/>
    <Hoslists :hositems="datastore.hositems" :funstyles="datastore.funstyles"/>
  </div>
</template>

<script>
import Search from '../components/Search.vue'
import Banner from '../components/Banner.vue'
import User from '../components/User.vue'
import News from '../components/News.vue'
import Funs from '../components/Funs.vue'
import Seps from '../components/Seps.vue'
import Cutline from '../components/Cutline.vue'
import Hoslists from '../components/Hoslists.vue'

export default {
  name: 'Home', 
  // 组件将数据抛出template时
  props:{
    datastore: Object
  },  
  components: {
    Search, // 顶部：搜索组件
    Banner,
    User, // 用户栏
    News, // 信息栏
    Funs, // 功能栏
    Seps, // 特色栏
    Cutline, // 分割栏
    Hoslists, // 医院列表
  }
}
</script>

<style>  
  #home {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
  }  
  .top{
    position: absolute;
    left: 0;
    right: 0;
    z-index: 2;
  }
</style>
