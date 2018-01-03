<style scoped>
  nav{
    padding: 0 10px;
    background: #333;

    /*   position: fixed;
       top:0;
       left: 0;*/
  }

  .logo-space,
  .menu-space{

  }

  .menu-button {
    height: 50px;
    width: 60px;
    text-align: center;
    line-height: 50px;
    font-size: 18px;
    letter-spacing: 3px;
    color: #fff;
    position: relative;
    cursor: pointer;
  }

  .menu-space {
    position: relative;
  }


  .menu-main {
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    visibility: visible;
    background-color: rgba(255,255,255,0.8);
    opacity: 1;
    z-index: 60;
    display: flex;
    justify-content: center;
    align-items: center;
  }


  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
  }

  .menu-list {


  }
  .menu-list ul{
    list-style: none;
    width: 100%;
    margin: 0 auto;
  }
  .menu-list ul li{
    font-size: 30px;
    text-align: center;
    height: 60px;
    line-height: 60px;
  }

  a {
    font-weight: bold;
    display: inline-block;
    width: 180px;
    text-align: center;
  }


  .router-link-exact-active {

  }
  .router-link-active{
    position: relative;
  }
  .router-link-active:before{
    position: absolute;
    content: '';
    top: 30px;
    left: 0;
    width: 100%;
    height: 1px;
    background: #000;

  }

</style>


<template>
  <nav>
    <div class="logo-space pull-left">
      <logo></logo>
      <!--<img src="src/assets/images/logo.png">-->
    </div>
    <div class="menu-space pull-right" v-on:click="showMenu = !showMenu">
      <div class="menu-button">MENU</div>
    </div>
    <div class="clr"></div>
    <transition name="fade">
      <div class="menu-main" v-if="showMenu"  v-on:click="showMenu = !showMenu">
        <div class="menu-list">
          <ul>
            <li>
              <router-link to="/home">HONE</router-link>
            </li>
            <li>
              <router-link to="/category">CATEGORY</router-link>
            </li>
            <li>
              <router-link to="/about">ABOUT</router-link>
            </li>
          </ul>
        </div>


      </div>
    </transition>
  </nav>

</template>

<script>
  import logo from './logo.vue';

  export default {
      name:'topHeader',
      components:{
          logo
      },
      data () {
          return {
              showMenu: false
          }
      }
  };
</script>
