<template>
  <div 
    class="movieBox"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="10"
  >
      <div  v-if="!movies" class="loading"></div>
      <MovieItem
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
      ></MovieItem>
      
  </div>
</template>

<style lang="scss">

</style>

<script>
    import MovieItem from "./MovieItem";
    // 引入Toast弹出框
    import { Toast } from 'mint-ui';
    export default {
      props: ["type"],
      watch: {
        type(val){
          this.movies = []; //每次类型切换时，数组清空
          this.page = 1;
          this.hosMore = true;//有更多数据，使之加载
          this.getMovies()
        }
      },
        data(){
            return {
                movies: [],
                limit: 6,
                page: 1,
                loading: false, //默认开启无限滚动
                hasMore: true //默认有更多数据
            }
        },
        methods: {
          loadMore(){
            if(!this.hasMore){ //当没有更多数据时，关闭无限滚动
              Toast({
                message: "我是有下限的好吧！！！",
                position: "bottom"
              })
              this.loading = true;
              return false;
            }
            this.getMovies();
          },
          getMovies(){
            let instance = Toast({
              message: "正在加载...",
              duration: -1,
              iconClass: "fa fa-cog fa-spin"
            })
            let {limit, page} = this;
            this.loading = true;
            this.$http.get("/api/db/"+this.type, {
              params: {
                limit,
                page
              }
            }).then(res => {
              this.movies = this.movies.concat(res.data.object_list);
              instance.close();
              this.loading = false;
              if(this.limit * this.page >= res.data.total){
                this.hasMore = false;
                return false;
              }
              this.page++;
            })
            
          }
        },
        components: {
          MovieItem
        },
        activated(){
          this.loading = false
        },
        deactivated(){
            this.loading = true
        }
    }
</script>
