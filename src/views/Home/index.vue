<template>
    <div class="home">
        <Banner></Banner>
        <div class="navBar" :class="{fixtop:fixFlag}">
            <span 
                v-for="nav in navs" 
                :key="nav.id"
                :class="{active: type === nav.type}"
                @click="type = nav.type"
            >
                {{nav.title}}
            </span>
        
        </div>
        <div :class="{fixbox:fixFlag}">
            <MovieBox :type="type"></MovieBox>
        </div>
        <BackTop></BackTop>
        <Tabbar></Tabbar>
    </div>
</template>



<script>
    import Tabbar from "@/components/Tabbar";
    import Banner from "@/components/Banner";
    import MovieBox from "./MovieBox.vue";
    // 引入返回顶部组件
    import BackTop from "./BackTop";

    export default {
        name: "home",
        data(){
            return {
                type: "in_theaters",
                navs: [
                    {id:1, title: "正在热映", type: "in_theaters"},
                    {id:2, title: "即将上映", type: "coming_soon"}
                ],
                fixFlag: false
            }
        },
        methods: {
            scrollHandler(){
                let sTop = document.documentElement.scrollTop || document.body.scrollTop;
                if(sTop >= 190 && !this.fixFlag){
                    this.fixFlag = true;
                }else if(sTop < 190 && this.fixFlag){
                    this.fixFlag = false;
                }
             
            }
        },
        components: {
        Tabbar,Banner,MovieBox,BackTop
        },
        // created(){
        //   window.addEventListener("scroll", this.scrollHandler);
          
        // },
        beforeRouteLeave(to, from, next){
            this.homeTop = document.documentElement.scrollTop || document.body.scrollTop;
            next();
        },
        activated(){
          window.addEventListener("scroll", this.scrollHandler);
          window.scrollTo(0, this.homeTop);
        },
        deactivated(){
            window.removeEventListener("scroll", this.scrollHandler);
            this.fixFlag = false;
        }
    }
</script>

<style lang="scss">
    .navBar{
        height:50px;
        width:100%;
        background:skyblue;
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding:0 .3rem;
        margin-bottom:5px;
        position:relative;
        z-index:10;
        span{
            padding-bottom:10px;
            border-bottom:3px solid skyblue;
            &.active{
                border-color:orange;
            }
        }
        &.fixtop{
            position:fixed;
            top:0;
            
        }
    }
    .fixbox{
            margin-top:.3rem;
        }
</style>