 <template>
     <div id="fun">
        <div class="fixed">
            <Search 
                back = "返回"
                searchtis = "搜索医院"
            />
            <div class="tab">
                <!-- <router-link to="/fun:id/all"  replace> -->
                    <div class="tabitem tab-on"  @click = "routetoall">
                        <i class="fa fa-map-pin fa-fw"></i>
                        <span>全部医院</span>
                    </div>                    
                <!-- </router-link> -->
                <!-- <router-link to="/fun:id/smart" replace> -->
                    <div class="tabitem" @click = "routetosmart">
                        <i class="fa fa-magic fa-fw"></i>
                        <span>智能推荐</span>
                    </div>  
                <!-- </router-link> -->
            </div>  
        </div>
        <div class="scroll">
            <router-view :hositems="datastore.hositems" :funstyles="datastore.funstyles"></router-view>
        </div>    
    </div>
 </template>

 <script>
 import Search from '../../components/Search'
 import Hoslists from '../../components/Hoslists'
 export default {
     name: "fun",
     components:{
        Search,
        Hoslists,
     },
     props:{
        datastore: Object
     },
     methods:{        
        tabstyle: function(that){
            let tabs = document.getElementsByClassName("tabitem")
            for(let i=0;i<tabs.length;i++){
                tabs[i].className="tabitem";
            }
            that.className="tabitem tab-on";
        },
        routetoall:function(){
            this.$router.replace({
                path:"/fun:id/all"
            })
            this.tabstyle(event.currentTarget);
        },
        routetosmart:function(){
            this.$router.replace({
                path:"/fun:id/smart"
            })
            this.tabstyle(event.currentTarget);
        },
     }
 }
 
 </script>
 
 <style>
 #fun .search{    
    background: #f2f3f5;    
  }

 #fun .search span{
       color:#333333;
  }    

 #fun .mid{
     flex-grow:1;
     margin-left:12px;
     margin-right:12px;
     display: flex;
     flex-direction: row;
     align-items: center
 }

  #fun .mid a:first-child{
      flex-grow:1;
 }

.fixed{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
}

.scroll{
    padding-top:88px;
}

 .tab-on{       
    color: #4ABAE2;
 }

  .tab,.tabitem{
    flex-grow: 1;
    display: flex;
    height: 44px;
    align-items: center;
    justify-content: center;
    background: #FCFEFF;
    box-shadow: 1px 1px 4px rgba(0,0,0,0.1);
 }

 .tab a{
    flex-grow: 1;
    text-align: center;
    line-height: 44px;
    font-size: 14px;
    color: #999999
 }
 
.tab span{
    margin-left: 4px;
}

 </style>
 
 