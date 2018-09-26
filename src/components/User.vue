<template>
  <div class="user">
      <div class="face" @click="touser"></div>
      <div class="msg" @click="touser">
          <span class="name">
              {{name}}
              <i v-show = "male" class="fa fa-mars fa-fw"></i>
              <i v-show = "female" class="fa fa-venus fa-fw"></i>
          </span>
          <span class="vip"><i>{{vip}}</i>{{vipname}}</span>
      </div>
      <div class="serve" @click="tohelper">
          <div class="name">
              <div>小管家</div>
              <div class="servename">{{servename}}</div>
          </div>
          <i class="fa fa-angle-right fa-fw"></i>
      </div>
  </div>
</template>

<script>
export default {
  name: 'User',
  // 组织好组建的参数
  props: {
    name: String,
    vip: String,
    vipname: String,  // vip特权
    servename: String,
    male: Boolean,
    female: Boolean
  },
  methods:{
      touser:function(){
          this.$router.push({
              name: 'user',
              // 路由传参
              params: {
                  
              }
          })
      },
      tohelper:function(){
          this.$router.push({
              name: 'helper',
              // 路由传参
              params: {
                  
              }
          })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .user{
      width:100%;
      height:64px;
      background-color:#FCFDFF;
      display: flex;
      flex-direction: row;
      align-items: center;
      border-bottom: 0.5px #e5e5e5 solid;
  }
  .face{
      width:40px;
      height:40px;
      border-radius:50%;
      margin:0 12px;
      background-color:white;
      background-image: url('../assets/home/face.jpg');
      background-size: 100% 100%;
      box-shadow: 1px 1px rgba(0,0,0,0.1);
      border:0.5px solid #ccc;
  }
  .msg{
     display:flex;
     flex-direction: column;
     align-items: flex-start;
     justify-content: center;
     font-size: 13px;
     color: #999999;
     line-height: 20px;
     flex-grow: 1;
  } 

  .msg .name{
      font-size: 15px;
      color: #333333;
  }
  .msg .name i{
      font-size: 12px;
  }

  .msg .vip i:nth-child(1){
      font-size: 13px;
      color: #FBDA61;
      font-weight: bold;
      padding-right: 8px;
  }

  .serve{
      justify-items: flex-end;
      font-size: 12px;
      color: #999999;
      display:flex;
      flex-direction: row;
      line-height: 18px;
  }

  .serve .name{
      display: flex;
      flex-direction: column;      
   }

   .serve i{
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
   }
   
   .serve .name .servename{
      color:#4ABAE2;
   }
</style>
