require('./bootstrap');
import Vue from "vue";
import HomeBage from "./vue/app";
window.Vue = require('vue').default;


Vue.component('example-component', require('./components/ExampleComponent.vue').default);



const app = new Vue({
    el: '#app',
    components: { HomeBage },

});