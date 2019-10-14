<template>
    
    <div v-if="!movies" class="loading"></div>
    <div v-else class="movieDetail">
        <mt-header fixed :title="movies.title">
            <router-link to="/" slot="left">
                <mt-button icon="back">back</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div class="img-box">
            <img width="100%" height= "250px" :src="getImages(movies.images.small)" alt="">
        </div>
        <p class="listName">主演：</p>
        <div class="actorList">
            <div
                v-for="cast in movies.casts"
                :key="cast.id"
                
            >
                <img width="70px" height="90px" :src="getImages(cast.avatars.small)" alt="">
                <p>{{cast.name}}</p>
            </div>
        </div>
        <p class="introduce">剧情介绍：</p>
        <div>{{movies.summary}}</div>
      
    </div>
</template>


<style lang="scss">
    .img-box{
        margin-top:.4rem
    }
    .movieDetail{
        .listName{
            font-weight:900;
            font-size:20px;
            color:green;
            margin-bottom:10px;
        }
        .actorList{
            display:flex;
            overflow:hidden;
            div{
                margin:0 5px;
            }
        }
        .introduce{
            font-weight:900;
            font-size:20px;
            color:red;
            margin-top:10px;
        }
    }
</style>
<script>
import getImages from "@/modules/utils"
export default {
    data(){
        return {
            movies: null
        }
    },
    methods: {
        getImages
    },
    created(){
        let movieId = this.$route.params.id;
        this.$http.get("/api/db/movie_detail/"+movieId).then(res => {
            this.movies = res.data
        })
        
    }
}
</script>