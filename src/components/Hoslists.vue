<template>
  <div class="hoslist">
      <ul>
         <li 
                v-for="(item,index) in hositems" 
                :key = "index" 
                @click = "change">
                <router-link :to="{ name:'host', params:{id:index,stores: item}}" class="msg" >
                    <span>{{item.title}}</span>
                    <span>月诊<i>{{item.number}}</i></span>
                    <span>
                        <i 
                            v-for="(item,index) in item.funs" :key = "index" 
                            v-if="item"
                            :style="
                                'color:'+ funstyles[item].color +
                                ';'+'border:1px solid '+ 
                                funstyles[item].color +';'
                            "
                        >{{funstyles[item].name}}</i>
                    </span>
                </router-link>             
                <div class="pic" :style ="'background-image:url('+ item.src +')'" ></div>
            </li>       
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Hoslists',   //组织好组建的参数
  props: {
    hositems: Array,
    funstyles: Object,
  },
  // 定义方法
  methods:{
      change:function(){
        //   alert("这是医院")
      }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hoslist{      
      display: flex;
      align-items: stretch;
      flex-grow:1;
      background-color:#FCFDFF;     
  }
  ul{      
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: space-around;
      flex-grow: 1;
      margin-left: 12px;
      border-bottom: 0.5px #e5e5e5 solid;
  }
  li,router-link{
      flex-basis:96px;
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 12px;
      color: #333333; 
  }
  li .msg{
      flex-grow:1;
      display:flex;
      flex-direction: column;
      align-items: flex-start;
      font-size:13px;
      color: #999999;
  }
  li .msg span:nth-child(1){
      font-size:15px;
      color: #333333; 
      line-height: 20px;
      margin-bottom:8px;
      text-align: left;
      overflow: hidden;
	  text-overflow: ellipsis;
	  display: -webkit-box;
	  -webkit-line-clamp: 2;
	  -webkit-box-orient: vertical;
  }
  li .msg span:nth-child(2){
      padding-bottom:10px;
  }

  li .msg span:nth-child(3) i{
      font-size:11px;
      color: #333333; 
      padding: 2px 4px;
      margin-right:6px;
      border-radius:4px;      
  }
  
  .pic{
      flex-basis: 88px;
      flex-shrink: 0;
      height: 80%;
      margin-right:8px;
      background-size: auto 100%;
      background-position: center center;
  }

  
</style>
