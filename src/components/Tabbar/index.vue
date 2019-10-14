<template>
    <div class="tabbar">
       
        <!-- <TabItem title="首页" mark="home" :sel="selected">
            <img slot="activeImg" src="../../assets/ic_tab_home_active.png">
            <img slot="normalImg" src="../../assets/ic_tab_home_normal.png">
        </TabItem>
        <TabItem title="书影音" mark="audio" :sel="selected">
            <img slot="activeImg" src="../../assets/ic_tab_audio_active.png">
            <img slot="normalImg" src="../../assets/ic_tab_audio_normal.png">
        </TabItem>
        <TabItem title="广播" mark="broadcast" :sel="selected">
            <img slot="activeImg" src="../../assets/ic_tab_broadcast_active.png">
            <img slot="normalImg" src="../../assets/ic_tab_broadcast_normal.png">
        </TabItem>
        <TabItem title="分组" mark="group" :sel="selected">
            <img slot="activeImg" src="../../assets/ic_tab_group_active.png">
            <img slot="normalImg" src="../../assets/ic_tab_group_normal.png">
        </TabItem>
        <TabItem title="我的" mark="mine" :sel="selected">
            <img slot="activeImg" src="../../assets/ic_tab_mine_active.png">
            <img slot="normalImg" src="../../assets/ic_tab_mine_normal.png">
        </TabItem> -->
        <TabItem
            v-for="nav in navs"
            :title = "nav.title"
            :mark = "nav.mark"
            :sel = "selected"
            :key = "nav.id"
        >
            <img slot="activeImg" :src="nav.activeImage">
            <img slot="normalImg" :src="nav.normalImage">
        </TabItem>
    </div> 
</template>



<script>
    import TabItem from "./Item"
    export default {
        data(){
            return {
                selected: this.$route.name,
                navs: [
                    {id:1, title:"首页", mark:"home", activeImage:require("../../assets/ic_tab_home_active.png"), normalImage:require("../../assets/ic_tab_home_normal.png")},
                    {id:2, title:"书影音", mark:"audio", activeImage:require("../../assets/ic_tab_audio_active.png"), normalImage:require("../../assets/ic_tab_audio_normal.png")},
                    {id:3, title:"广播", mark:"broadcast", activeImage:require("../../assets/ic_tab_broadcast_active.png"), normalImage:require("../../assets/ic_tab_broadcast_normal.png")},
                    {id:4, title:"分组", mark:"group", activeImage:require("../../assets/ic_tab_group_active.png"), normalImage:require("../../assets/ic_tab_group_normal.png")},
                    {id:5, title:"我的", mark:"mine", activeImage:require("../../assets/ic_tab_mine_active.png"), normalImage:require("../../assets/ic_tab_mine_normal.png")}
                ]
            }
        },
        methods: {
            changeSel(selected){
                this.selected = selected;
            }
        },
        components: {
            TabItem
        }
    }
</script>

<style>
     .tabbar{
       background:#ccc;
        position: fixed;
        bottom:0;
        left:0;
        width:100%;
        height:60px;
        display: flex;
        border-top:1px solid #ccc;
    }
</style>