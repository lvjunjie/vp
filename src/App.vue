<style>
  @import '../style/common.css';

  .workspace {
    background: #ffffff;
    margin-bottom: 300px;
  }

  @media screen and (max-width: 600px) {
    .workspace{
      margin-bottom: 200px;
    }
  }

</style>

<template>
  <div id="app">
    <top-header></top-header>

    <div class="workspace">
      <router-view></router-view>
    </div>

    <bottom-footer></bottom-footer>

    <!--通用组件-->
    <photo-frame></photo-frame>
    <loading-frame></loading-frame>

  </div>
</template>

<script>

  import topHeader from './view/template/header.vue';
  import bottomFooter from './view/template/footer.vue';
  import photoFrame from './view/template/photoFrame .vue';
  import loadingFrame from './view/template/loadingFrame.vue';

  export default {
      components:{
          topHeader,
          bottomFooter,
          photoFrame,
          loadingFrame
      }
  }
</script>

