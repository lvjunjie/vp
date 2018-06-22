import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import $ from  'jquery'
import Axios from 'axios'
import _ from  'lodash'
import VueTouch from 'vue-touch'

import Fuc from './js/common'
import Echo from './js/echo'

import filters from './js/filter'
import directives from './js/directive'

import home from './view/pages/home.vue'
import category from './view/pages/category.vue'
import about from './view/pages/about.vue'


Vue.use(VueRouter);
Vue.use(VueTouch, {name: 'v-touch'});

Vue.prototype.Fuc = Fuc;
Vue.prototype.$http = Axios;

Vue.prototype.eventBus = new Vue();

const routes = [
    { path: '/home', component: home },
    { path: '/category', component: category },
    { path: '/about', component: about },
    { path: '/page-1/:id', component: { template: '<div>这是页面一{{$route.params.id}}</div>' } },
    { path: '',  redirect:'/home'},
    { path: '*',  redirect:'/home'},
];

const router = new VueRouter({
    routes
});

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
});

/*
Object.keys(directives).forEach(key => {
    Vue.directive(key, directives[key])
});
*/


const app = new Vue({
    filters,
    router,
    render: h => h(App),

}).$mount('#app');



