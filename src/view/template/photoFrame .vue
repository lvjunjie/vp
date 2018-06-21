<style scoped>

    .photo-back {
        position: fixed;
        top: 0;
        bottom: 0;
        width: 100%;
        background: rgba(0,0,0,0.9);

    }


    .photo-frame{
        position:absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%,-50%);
        margin: auto;
    }
    .photo-frame:active {
        cursor: move;
    }

    .photo-frame img {
        height: 85vh;
    }


    @media screen and (max-width: 600px) {
        .photo-frame img {
            width: 90vw;
            height: inherit;
        }
    }

</style>

<template>

    <div class="photo-back" v-if="showPhotoFrame" @click="showFrame()">
        <div class="photo-frame" v-drag >
            <img :src="info.path" v-zoom-pic @click.stop="">
        </div>
    </div>
</template>

<script>

  export default {
      data (){
          return {
            showPhotoFrame:false
          }
      },
      methods:{
          showFrame :function () {
              this.showPhotoFrame = !this.showPhotoFrame;
          }
      },
      created:function () {
          this.eventBus.$on('photoFrame',info  => {
              this.info = info;
              this.showFrame();
          })
      }

  };
</script>
