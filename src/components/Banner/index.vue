<template>
  <div class="home-banner swiper-container" :class="{loading:banners.length === 0}">
     <div class="swiper-wrapper">
         <div class="swiper-slide"
            v-for="banner in banners"
            :key="banner.id"
         >
             <img width="100%" :src="getImages(banner.images.small)" alt="">
         </div>
         
     </div>
     <div class="swiper-pagination"></div>
  </div>
  
</template>

<style lang="scss">
    .home-banner{
        width:100%;
        height:2rem;
        margin-top:30px;
        img{
            height:2rem;
            width:100%;
        }
        .swiper-pagination{
            width:auto;
            left:auto;
            right:10px;
            .swiper-pagination-bullet-active{
                background:#fff;
            }
        }

    }
    
</style>

<script>
    import Swiper from "swiper";
    import getImages from "@/modules/utils.js"
    export default {
        data(){
            return {
                banners: []
            }
        },
        methods:{
            getImages  
        },
        created(){
            this.$http.get("/api/db/in_theaters", {
                params:{
                    limit:6
                }
            }).then(res => {
                this.banners = res.data.object_list
                this.$nextTick(() => {
                    new Swiper(".home-banner", {
                        loop: true,
                        pagination: {
                            el: ".swiper-pagination"
                        }
                    })
                })
                
            })
        }
    }
</script>
