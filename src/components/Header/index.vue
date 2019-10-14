<template>
    <div class="app-header" v-if=flag>
        <div class="left">
            <i :class="['fa', 'fa-' + icon]"></i>
            <span>{{title}}</span>
        </div>
        <div class="right" v-backTop:dblclick>
            <i class="fa fa-bars"></i>
            <span>城市</span>
        </div>
    </div>
</template>



<script>
import router from "@/router";
    export default {
       data(){
           return {
               icon: "home",
               title: "首页",
               flag: true
           }
       },
       created(){
           router.beforeEach((to, from, next) => {
               switch (to.name) {
                   case "home":
                       this.icon= "home"
                       this.title= "首页"
                       this.flag= true
                       break;
                    case "audio":
                       this.icon= "music"
                       this.title= "书影音"
                       this.flag= true
                       break;
                    case "broadcast":
                       this.icon= "bullhorn"
                       this.title= "广播"
                       this.flag= true
                       break;
                    case "group":
                       this.icon= "object-group"
                       this.title= "分组"
                       this.flag= true
                       break;
                    case "mine":
                       this.icon= "user-o"
                       this.title= "我的"
                       this.flag= true
                       break;
               
                   default:
                       this.flag= false
                       break;
               }
               next();
           })
       }
    }
</script>

<style lang="scss">
    .app-header{
        position:fixed;
        top:0;
        z-index:10;
        width:3.75rem;
        height:50px;
        background:pink;
        display:flex;
        justify-content: space-between;
        align-items: center;
        padding:0 .15rem;
        i{
            padding:10px;
        }
    }
</style>