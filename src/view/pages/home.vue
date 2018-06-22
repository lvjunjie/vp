<style scoped>
  /*大层*/
  .container{
    width:95%;
    margin: 0 auto;
    padding: 10px;
  }
  /*瀑布流层*/
  .waterfall{
    -moz-column-count:3; /* Firefox */
    -webkit-column-count:3; /* Safari 和 Chrome */
    column-count:3;
    -moz-column-gap: 10px;
    -webkit-column-gap: 10px;
    column-gap: 10px;
  }
  /*一个内容层*/
  .item{
/*    padding: 1em;*/
    margin-bottom: 10px;
    -moz-page-break-inside: avoid;
    -webkit-column-break-inside: avoid;
    break-inside: avoid;
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }
  .item img{
    width: 100%;
  }

  figure {
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 100%;

  }

  .item:hover img{
    /*transform: scale(1.0);*/
  }

  .item:hover figure{
    left: 0;
    background: rgba(52,52,52,0.7);
  }

  .info{
    position: absolute;
    top:0;
    left: 100%;
    color: #fff;
    font-size: 20px;
    padding: 20px;
    width: 100%;

  }

  .item:hover .info{
    left: 0;

    -webkit-transition: 0.35s;
    -moz-transition: 0.35s;
    -ms-transition: 0.35s;
    -o-transition: 0.35s;
    transition:0.35s
  }

  .title {
    border-bottom: 4px solid #fff;
  }
  .describe {
    padding: 10px 20px 10px 0;

    font-size: 14px;
    line-height: 28px;

  }

  @media screen and (max-width: 600px) {
    .waterfall{
      -moz-column-count:2; /* Firefox */
      -webkit-column-count:2; /* Safari 和 Chrome */
      column-count:2;
      -moz-column-gap: 10px;
      -webkit-column-gap: 10px;
      column-gap: 10px;
    }
  }


</style>

<template>
  <div class="container" >

    <div class="waterfall">
      <div class="item" v-for="item in photoList" >
        <img src="../../assets/images/loading.jpg" :data-echo="item.path"  v-on:click="showPhotoFrame(item)">
<!--        <figure v-on:click="showPhotoFrame(item)">
            <div class="info">
              <div class="title">{{item.name}}</div>
              <div class="describe">{{item.describe}}</div>
            </div>
        </figure>-->
      </div>
    </div>
  </div>

</template>

<script>
    import Vue from 'vue'

    export default {
      name:'home',
      data () {
        return {
              photoList:[]
          }
      },
      watch:{
          photoList:function () {
              this.$nextTick(function () {
                  Echo.init({
                      offset: 0,
                      throttle: 0
                  });
              })
          }
      },

      methods:{
          getPhotoList:function () {
              this.$http.get('src/json/photo.json')
                  .then(res => {
                      this.photoList = this.Fuc.randomSort(_.filter(res.data,{showHome:true}));

                      //取出图片集合
                      let srcList = [];

                      _.forEach(this.photoList,function (item) {
                          srcList.push(item.path)
                      })

                      setTimeout( () => {
                          this.eventBus.$emit('loadingFrame')
                      },3000)


                  })
          },
          showPhotoFrame:function (info) {
              this.eventBus.$emit('photoFrame',info)
          },
          onPanStart:function () {

          }
      },
      created:function () {
          this.getPhotoList()




      }

  };



</script>
