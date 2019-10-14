<template>
    <transition
        enter-active-class="animated hinge"
        leave-active-class="animated bounceOutRight"
    >
    <div 
        class="backtop"
        v-if="isShow"
        @click="goTop"
    >
        <span class="fa fa-arrow-up"></span>
    </div>
    </transition>
</template>

<style lang="scss">
    .backtop{
        width:.4rem;
        height:.4rem;
        border-radius:50%;
        font-size:.25rem;
        position:fixed;
        right:5px;
        bottom:.6rem;
        background:pink;
        border:1px solid #ccc;
        display:flex;
        justify-content: center;
        align-items: center;
    }
</style>

<script>

    export default {
        data(){
          return {
              isShow: false
          }
        },
        methods: {
          backTophandler(){
                let sTop = document.documentElement.scrollTop || document.body.scrollTop;
                if(sTop >= 100 && !this.isShow){
                    this.isShow = true;
                }else if(sTop < 100 && this.isShow){
                    this.isShow = false;
                }
          },
          goTop(){
              window.scrollTo(0, 0);
          }
        },
        activated(){
          window.addEventListener("scroll", this.backTophandler);
        //   window.scrollTo(0, this.homeTop);
        },
        deactivated(){
            window.removeEventListener("scroll", this.backTophandler);
            // this.fixFlag = false;
        }
    }
</script>
