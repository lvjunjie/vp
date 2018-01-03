<style scoped>
    .tab-space {
        display: flex;
        justify-content:center;
        margin: 10px 0;
    }

    .tab-list {
        position: relative;

    }
    .tab-list .item{
        float: left;
        position: relative;
        font-size: 14px;
        height: 26px;
        line-height: 26px;
        font-weight: bold;
        border-radius: 15px;
        overflow: hidden;
        margin-right: 15px;
    }


    .tab-list .item>input{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
        opacity: 0;
    }

    .tab-list .item>div{
        background: #ffffff;
        width: 100%;
        height: 100%;
        padding: 0 20px;

    }
    .tab-list .item>input:checked+div{
        background: deepskyblue;
        color: #fff;
    }

    .photo-space {
        padding: 5px;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;

    }

    .photo-space .item {
        height: 300px;
        margin: 0 5px;
        margin-bottom: 15px;
        cursor: pointer;
        /*overflow: hidden;*/
    }
    .photo-space .item img {
        height: 100%;
    }

    .photo-space .item-fill {
        display: inline-block;
        flex: 0.98;
        height: 0;
    }

    @media screen and (max-width: 600px) {
        .tab-list .item{
            font-size: 12px;
            height: 22px;
            line-height: 22px;
            font-weight: bold;
            border-radius: 10px;
            overflow: hidden;
            margin-right: 5px;
        }

        .photo-space {
            padding: 5px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;

        }

        .photo-space .item {
            height: 100px;
            margin: 0 5px;
            margin-bottom: 10px;
            cursor: pointer;
            /*overflow: hidden;*/
        }


    }


</style>


<template>

    <div class="main">
        <div class="tab-space">
            <ul class="tab-list">
                <li class="item" v-for="item in categoryList">
                    <input type="radio" :value="item" v-model="category"/>
                    <div>{{item|category}}</div>
                </li>
                <li class="clr"></li>
            </ul>

        </div>
        <div class="photo-space">
            <div class="item" v-for="item in filterPhotoList" v-on:click="showPhotoFrame(item)">
                <img :src="item.path">
            </div>
            <div class="item-fill"></div>

        </div>

    </div>

</template>

<script>
  export default {
      name:'category',
      data(){
          return {
              photoList:[],
              categoryList:[],
              category:''
          }
      },
      methods:{
          getPhotoList:function () {
              this.$http.get('src/json/photo.json')
                  .then(res => {

                      let data = this;
                      data.photoList = res.data;


                      //获取分类
                      _.forEach(this.photoList,function (item) {
                          _.forEach(item.tag,function (ite) {

                              if(!_.includes(data.categoryList,ite)){
                                  data.categoryList.push(ite)
                              }
                          })
                      });
                      //默认分类为列表首个
                      data.category = data.categoryList[0];
                  })
          },
          showPhotoFrame:function (info) {
              this.eventBus.$emit('photoFrame',info)
          }
      },
      computed:{
          filterPhotoList:function () {
              let data = this;
              return data.photoList.filter(function (item) {
                  return item.tag.indexOf(data.category) >=0
              })
          }
      },
      created:function () {
          this.getPhotoList();
      }
  };
</script>
