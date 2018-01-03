<style scoped>
    .mian {
        padding: 10px;
    }

    .head-portrait,
    .about-space{
        width: 45%;
        margin: 0 auto;
        margin-top: 50px;
    }

    .head-portrait img {
        width: 100%;
    }

    .about-space {
        display: flex;
        padding-bottom: 100px;
    }

    .left-content {
        width: 40%;
    }

    .right-content {
        width: 60%;
    }

    /*响应式*/

    @media screen and (max-width: 600px) {
        .head-portrait,
        .about-space {
            width: 90%;
        }

        .left-content,
        .right-content{
            width: 100%;
            margin-bottom: 10px;
        }

        .about-space {
            display: block;
            padding-bottom: 50px;
            text-align: center;
        }

    }

</style>

<template>

    <div class="main">

        <div class="head-portrait">
            <img src="../../assets/images/about.jpg"/>
        </div>
        <div class="about-space">
            <div class="left-content">
                <h1>吕俊杰</h1>
                <h3>Web前端工程师</h3>
            </div>
            <div class="right-content">
                <h2>BRIEF INTRODUCTION
                </h2>
            </div>

        </div>

    </div>

</template>

<script>
  export default {
      name:'about'
  };
</script>
