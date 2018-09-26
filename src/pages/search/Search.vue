 <template>
     <div id="fun">
         <Search 
            cancel = "取消"
            searchtis = "搜索疾病、医生或医院"
         />
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
     mounted: function(){
      var inp = document.getElementsByTagName('input')[0];
      inp.focus();
    //   alert("sdlkfj ")
    }
      
 }
 </script>
 
 <style>
 #fun .search{    
    background: #f2f3f5;
    border-bottom: 0.5px #e5e5e5 solid;
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

 </style>
 
 