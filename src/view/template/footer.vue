<style scoped>
  footer{
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: -1;
    width: 100%;
    height: 300px;
    background: #222222;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main {
    text-align: center;
    width: 100%;
    color: #fff;
  }


  .contact {
    display: flex;
    justify-content: space-around;
    width: 40%;
    margin: 0 auto;
    margin-top: 50px;
  }

  .contact .contact-item i {
    font-size: 32px;
    color: #ffffff;
    cursor: pointer;
  }


  /*响应式*/

  @media screen and (max-width: 600px) {
    footer{
      height: 200px;
    }

    .contact{
      width: 100%;
      margin-top: 30px;
    }

    .contact .contact-item i {
      font-size: 26px;
      color: #ffffff;
      cursor: pointer;
    }

  }


</style>

<template>
  <footer>
    <div class="main">
        <h1>STAY CONNECTED WITH ME</h1>

        <div class="contact">
          <div class="contact-item">
            <a href="mailto:532711255@qq.com">
              <i class="fa fa-envelope-o"></i>
            </a>
          </div>
          <div class="contact-item">
            <a href="https://github.com/lvjunjie" target="_blank">
              <i class="fa fa-github"></i>
            </a>
          </div>
          <div class="contact-item">
            <a href="tencent://message/?uin=532711255">
              <i class="fa fa-qq"></i>
            </a>
          </div>
        </div>

    </div>

  </footer>
</template>

<script>
  export default {};
</script>
