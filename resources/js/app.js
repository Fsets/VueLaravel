/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

import { createApp } from "vue";

import { createRouter, createWebHashHistory } from 'vue-router'
import exampleComponent from './components/ExampleComponent.vue'
import productTable from './components/productTable.vue'

//añadir rutas
const routes = [{
        path: '/',
        component: exampleComponent,
    },
    {
        path: '/productTable',
        component: productTable,
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp({})

//con esto lo uso desde donde quiera con la etiqueta <exampleComponent></exampleComponent>
app.component('example-component', exampleComponent)
    .component('product-table', productTable)

app.use(router)
app.mount('#app') //monta la aplicacion
    /**
     * The following block of code may be used to automatically register your
     * Vue components. It will recursively scan this directory for the Vue
     * components and automatically register them with their "basename".
     *
     * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
     */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */