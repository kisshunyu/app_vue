<template>
  <div class="item" @click="clickItem">
      
      <span v-if="!flag" ><slot name="normalImg"></slot></span>
      <span v-else><slot name="activeImg"></slot></span>
      <span :class="{active: flag}">{{title}}</span>

  </div>
</template>

<style lang="scss">
    .item{
        flex:1;
        display:flex;
        flex-direction:column;
        align-items:center;
        img{
            width:40px;
            height:40px;
        }
    }
    .active{
        color:green;
    }
</style>

<script>
  export default {
      props: ["title", "mark", "sel"],
      computed: {
          flag(){
              if(this.mark === this.sel){
                  return true;
            }
            return false;
          }
          
      },
    //   data(){
    //       return {
    //           flag: false
    //       }
    //   }, 
      methods: {
          clickItem(){
            //   this.changeSel(this.mark);
            //  this.flag = true;
            // this.$emit("changeSel", this.mark);
            this.$router.push("/" + this.mark);
          }
      }
  }
</script>