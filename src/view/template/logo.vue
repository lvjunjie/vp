<style scoped>
  .logo {
    position: relative;
    width: 100px;
    height: 50px;
  }

  .camera-border {
    margin: 0 auto;
    border: 2px solid #fff;
    border-radius: 5px;
    height: 34px;
    width: 58px;
    position: absolute;
    bottom: 2px;
    left:50%;
    margin-left: -31px;
  }
  .camera-border:before{
    content: "";
    height: 0;
    width: 6px;
    border-bottom: 6px solid #fff;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    position: absolute;
    top: -6px;
    left: 2px;
  }

  .camera-border:after {
    content: "";
    width: 20px;
    height: 20px;
    border-radius: 20px;
    border: 2px solid #fff;
    position: absolute;
    top: 50%;
    margin-top: -11px;
    left: 50%;
    margin-left: -11px;
  }

  .camera-sign {
    font-size: 16px;
    font-weight: bold;
    font-family: "Microsoft YaHei UI";
    background: #333;
    color: #fff;
    display: inline-block;
    position: absolute;
    top: 5px;
    left: 50px;
  }

  .camera-sign:before{
    content: "";
    width: 10px;
    height: 10px;
    background: #fff;
    border-radius: 10px;
    /* border: 1px solid #000; */
    position: absolute;
    top: 0;
    right: 24px;
  }


</style>

<template>
  <div class="logo">
    <div class="camera-border">
      <div class="camera-sign">吕</div>
    </div>
  </div>
</template>

<script>
  export default {

  };
</script>
