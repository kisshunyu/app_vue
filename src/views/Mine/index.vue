<template>
    <div class="mine">
       <router-view></router-view>
        <mt-tabbar >
        <mt-tab-item 
            v-for="nav in navs"
            :key="nav.id"
        >
            <router-link :to="{name: nav.name}" active-class="active">
            <i :class="['fa', 'fa-'+nav.icon]"></i>
            {{nav.title}}
            </router-link>
        </mt-tab-item>
        
        </mt-tabbar>
    </div>
</template>



<script>
    import Tabbar from "@/components/Tabbar";
    export default {
        data(){
            return {
                navs: [
                    {id:1, title:"列表", icon: "list", name: "list"},
                    {id:2, title:"购物", icon: "shopping-cart", name: "car"}
                ]
            }
        },
        components: {
        Tabbar
      }
    }
</script>

<style lang="scss">
    .mint-tab-item {
        padding: 15px 0;
        .active{
            background:rgb(146, 202, 190);
            padding: 10px 65px;
            font-size:16px;
            width:70px;
            color:rgb(137, 168, 25)
        }
    }
</style>