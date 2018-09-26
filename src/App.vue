<template>
  <div id="app">
    <!-- <transition> -->
      <router-view :datastore="datastore">
        <!-- <Home/> -->
      </router-view> 
    <!-- </transition>    -->
  </div>
</template>

<script>
import Home from './pages/Home.vue'

export default {
  name: 'App',
  components:{
    Home
  },
  data(){
    let srcbegin = "./assets/home/";
    let funstyles = {
        reg:{
          name: '挂号',
          color: '#2BD2AC',
        },
        check:{
          name: '体检',
          color: '#4ABAE2',
        },
        pay:{
          name: '缴费',
          color: '#E6B12A',
        },        
        insure:{
          name: '保险',
          color: '#C794F5',
        },
        send:{
          name: '送药',
          color: '#ED7E9C',
        }
      };
    return {
      datastore: {
        banners:[
          {
            src: require(srcbegin+"banner1.jpg")
          },
          {
            src: require(srcbegin+"banner2.jpg")
          },
          {
            src: require(srcbegin+"banner3.jpg")
          },
          {
            src: require(srcbegin+"banner4.jpg")
          },
        ],
        newstates:[
          {title:'欢迎使用康医护，感谢您的信任的支持！',state: "热"},
          {title:'签约康E护，健康全保护！',state: "新"}
        ],      
        funitems:[
          {title:'预约挂号', src: require(srcbegin+"book@3x.png")},
          {title:'当天挂号', src: require(srcbegin+"today@3x.png")},
          {title:'医疗缴费', src: require(srcbegin+"pay@3x.png")},
          {title:'健康体检', src: require(srcbegin+"bodyCheck@3x.png")},
          {title:'医疗资讯', src: require(srcbegin+"news@3x.png")},
        ],
        spesitems:[
          {
            topic:'专家预约',
            title:'汇集顶尖医师',
            number: '886+',
            src: require(srcbegin+"mv@3x.png")
          },
          {
            topic:'E护药店',
            title:'找药买药更轻松',
            number: '',
            src: require(srcbegin+"med@3x.png")
          },
          {
            topic:'影像诊断',
            title:'PACS+权威诊断',
            number: '',
            src: require(srcbegin+"pacs@3x.png")
          },
        ],
        cutline: {
          title:'推·荐·医·院',
          src: require(srcbegin+"title_bg@3x.png")
          },
        hositems:[
          {          
            title:'广东省人民医院',
            number: '999+',
            funs:[ 
              "reg", 
              "check" ,
              "pay" ,
              "insure", 
              "send"
            ],
            src: require(srcbegin+"hospital.jpg"), 
            url: "http://www.e5413.com/"       
          },
          {          
            title:'广东省中医院（广州中医药大学第二附属医院、广州中医药大学第二临床医学院）',
            number: '999+',
            funs:[ 
              "reg", 
              "check" ,
              "pay" ,
              "insure", 
              "send"
            ],
            src: require(srcbegin+"hospital.jpg"),
            url: "http://www.gdhtcm.com/index.aspx"         
          },
          {          
            title:'珠江医院',
            number: '999+',
            funs:[ 
              "reg", 
              "check" ,
              "pay" ,
              "insure", 
              "send"
            ],
            src: require(srcbegin+"hospital.jpg"),
            url: "http://www.gdhtcm.com/index.aspx"         
          },
          {          
            title:'广东省中医院（广州中医药大学第二附属医院、广州中医药大学第二临床医学院）',
            number: '999+',
            funs:[ 
              "reg", 
              "check" ,
              "pay" ,
              "insure", 
              "send"
            ],
            src: require(srcbegin+"hospital.jpg"),
            url: "http://www.gdhtcm.com/index.aspx"         
          },
          {          
            title:'广东省中医院（广州中医药大学第二附属医院、广州中医药大学第二临床医学院）',
            number: '999+',
            funs:[ 
              "reg", 
              "check" ,
              "pay" ,
              "insure", 
              "send"
            ],
            src: require(srcbegin+"hospital.jpg"),
            url: "http://www.gdhtcm.com/index.aspx"         
          },
          {          
            title:'广东省中医院（广州中医药大学第二附属医院、广州中医药大学第二临床医学院）',
            number: '999+',
            funs:[ 
              "reg", 
              "check" ,
              "pay" ,
              "insure", 
              "send"
            ],
            src: require(srcbegin+"hospital.jpg"),
            url: "http://www.gdhtcm.com/index.aspx"         
          },
          {          
            title:'广东省中医院（广州中医药大学第二附属医院、广州中医药大学第二临床医学院）',
            number: '999+',
            funs:[ 
              "reg", 
              "check" ,
              "pay" ,
              "insure", 
              "send"
            ],
            src: require(srcbegin+"hospital.jpg"),
            url: "http://www.gdhtcm.com/index.aspx"         
          },
          {          
            title:'广东省中医院（广州中医药大学第二附属医院、广州中医药大学第二临床医学院）',
            number: '999+',
            funs:[ 
              "reg", 
              "check" ,
              "pay" ,
              "insure", 
              "send"
            ],
            src: require(srcbegin+"hospital.jpg"),
            url: "http://www.gdhtcm.com/index.aspx"         
          },
          {          
            title:'广东省中医院（广州中医药大学第二附属医院、广州中医药大学第二临床医学院）',
            number: '999+',
            funs:[ 
              "reg", 
              "check" ,
              "pay" ,
              "insure", 
              "send"
            ],
            src: require(srcbegin+"hospital.jpg"),
            url: "http://www.gdhtcm.com/index.aspx"         
          },
          {          
            title:'广东省中医院（广州中医药大学第二附属医院、广州中医药大学第二临床医学院）',
            number: '999+',
            funs:[ 
              "reg", 
              "check" ,
              "pay" ,
              "insure", 
              "send"
            ],
            src: require(srcbegin+"hospital.jpg"),
            url: "http://www.gdhtcm.com/index.aspx"         
          },
          {          
            title:'广东省中医院（广州中医药大学第二附属医院、广州中医药大学第二临床医学院）',
            number: '999+',
            funs:[ 
              "reg", 
              "check" ,
              "pay" ,
              "insure", 
              "send"
            ],
            src: require(srcbegin+"hospital.jpg"),
            url: "http://www.gdhtcm.com/index.aspx"         
          },
          {          
            title:'广东省中医院（广州中医药大学第二附属医院、广州中医药大学第二临床医学院）',
            number: '999+',
            funs:[ 
              "reg", 
              "check" ,
              "pay" ,
              "insure", 
              "send"
            ],
            src: require(srcbegin+"hospital.jpg"),
            url: "http://www.gdhtcm.com/index.aspx"         
          },
          {          
            title:'广东省中医院（广州中医药大学第二附属医院、广州中医药大学第二临床医学院）',
            number: '999+',
            funs:[ 
              "reg", 
              "check" ,
              "pay" ,
              "insure", 
              "send"
            ],
            src: require(srcbegin+"hospital.jpg"),
            url: "http://www.gdhtcm.com/index.aspx"         
          },
          {          
            title:'广东省中医院（广州中医药大学第二附属医院、广州中医药大学第二临床医学院）',
            number: '999+',
            funs:[ 
              "reg", 
              "check" ,
              "pay" ,
              "insure", 
              "send"
            ],
            src: require(srcbegin+"hospital.jpg"),
            url: "http://www.gdhtcm.com/index.aspx"         
          },
          {          
            title:'广东省中医院（广州中医药大学第二附属医院、广州中医药大学第二临床医学院）',
            number: '999+',
            funs:[ 
              "reg", 
              "check" ,
              "pay" ,
              "insure", 
              "send"
            ],
            src: require(srcbegin+"hospital.jpg"),
            url: "http://www.gdhtcm.com/index.aspx"         
          }
          
        ],
        funstyles, // 把这个函数回调出来

        // funs需要通过路由传数据到对应模版
        routestores:{
          "0": this.hositems,
          "1": this.hositems,
          "2": this.hositems,
          "3": this.hositems,
          "4": this.hositems,
          "5": this.hositems,
          "funstyles": this.funstyles
        }
      }
    }
    
  },
}

</script>

<style>  
  /* 样式引入 */
  @import './assets/css/css-reset.css';

  /* 去除移动端以下标签的阴影 */
  a,
  input,
  label{
      -webkit-tap-highlight-color:rgba(255,0,0,0);
  } 
</style>
