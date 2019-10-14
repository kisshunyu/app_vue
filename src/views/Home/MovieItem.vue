<template>
    <router-link tag="div" :to="{name:'moviedetail', params: {id: movie.id}}" class="movieItem">
      <div class="imgBox">
          <img v-lazy="getImages(movie.images.small)" alt="">
      </div>
      <div class="info">
          <p class="title">《{{movie.title}}》</p>
          <p class="count">票房：{{movie.collect_count | filterCount}}</p>
          <p class="director">导演：{{movie.directors[0].name}}</p>
          <p class="rating">评分：{{movie.rating.average}}</p>
      </div>
  </router-link>
</template>

<style lang="scss">
    .movieItem{
        display:flex;
        padding-left:20px;
        img{
            width:.9rem;
            height:1rem;
        }
        .info{
            margin:15px;
            .title{
                color:green;
                font-weight:900;
            }
        }
    }
</style>

<script>
    import getImages from "@/modules/utils"
    export default {

        // 接收并验证类型
        props: {
            movie: Object
        },
    //   添加局部过滤器来处理数据
        filters:{
            filterCount(val){
                if(val > 10000){
                    val = val / 10000;
                    val = val.toFixed(1);
                    return val + "万";
                }
                return val;
            }
        },
        methods:{
                getImages  
        }
    }
</script>