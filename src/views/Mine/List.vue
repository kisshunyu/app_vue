<template>
    <div class="list">
       
    </div>
</template>



<script>
    import {mapActions} from "vuex";


    export default {
        // computed: {
        //     num(){
        //         return {
        //             num: this.$store.state.num
        //         }
        //     }
        // },
        computed: {
          
        },
        data(){
            return {
                goods: []
            }
        },
        methods: {
            getGoods(){
                this.$http.get("/api/fruit.json").then(res => {
                    console.log(res.data.CommodityList)
                    this.goods = res.data.CommodityList;
                })
            },
            ...mapActions(["addGoodInCars"])
        }
        
    }
</script>

<style>

</style>