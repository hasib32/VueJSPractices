// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue'
import VueRouter from 'vue-router'
import Trip from './components/Trip.vue'
import App from './App.vue'
import Vuex from 'vuex'
import InputBinding from './components/InputBinding.vue'

Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [
    {path: '/', component: App},
    {path: '/trip', component: Trip},
    {path: '/input', component: InputBinding}
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

let app = new Vue({ // eslint-disable-line no-new
    router
}).$mount('#app')
