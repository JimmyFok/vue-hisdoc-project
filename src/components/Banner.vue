<template>
    <div class="banner">
        <swiper :options="swiperOption" class="swiper-box" >
            <!-- <swiper-slide 
              class="swiper-item"             
              v-for="item in banners"
              :style ="'background-image:url('+ item.src +')'" 
            >            
            </swiper-slide> -->
            <swiper-slide class="swiper-item">
                <img src= "../assets/home/banner1.jpg" />
            </swiper-slide>
            <swiper-slide class="swiper-item">
                <img src= "../assets/home/banner2.jpg" />
            </swiper-slide>
            <swiper-slide class="swiper-item">
                <img src= "../assets/home/banner3.jpg" />
            </swiper-slide>
            <swiper-slide class="swiper-item">
                <img src= "../assets/home/banner4.jpg" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>    
</template>

<script>

  export default {
    name:"Banner",
    props:{
      banners: Array
    },
    data() {
      return {
        swiperOption: {
          autoplay:true,
          slidesPerView: 'auto',
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    }
  }
</script>

<style lang="scss">
  html,body {
    position: relative;
    height: 100%;
  }
  body {
    background: #eee;
  }
  .swiper-box {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
  .swiper-item {
    height: 100%;
    text-align: center;
    font-size: 18px ;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .banner{
      height:180px;
      width:100%;      
  }

  img{      
      height:100%;
      width:100%;
  }
</style>