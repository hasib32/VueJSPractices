<template>
  <div id="app">
      <router-link to="/trip">Trip Page</router-link>
      <br>
      <br>
      <router-link to="/input">Input Binding</router-link>
      <custom-watch></custom-watch>
      <!--
      <p>{{ total }}</p>
      <button-counter v-on:increment="incrementTotal"></button-counter>
      <button-counter v-on:increment="incrementTotal"></button-counter>
     <login :message="message"></login>
      <login2 :message="message"></login2>
      <input v-model="message"> -->
      <!-- <hello></hello> -->
  </div>
</template>

<script>
import Hello from './components/Hello.vue'
import Login from './components/Login.vue'
import Login2 from './components/Login2.vue'
import ButtonCounter from './components/ButtonCounter.vue'
import CustomWatch from './components/CustomWatch.vue'


let myMixin = {
    created() {
        this.hello()
    },
    methods: {
        hello() {
            console.log('hello from mixin')
        }
    }
}

export default {
    mixins: [myMixin],
  name: 'app',
    data() {
        return {
            message: 'message from app vue',
            total: 0
        }
    },
    created() {
    },
    methods: {
        incrementTotal() {
            this.total++
        }
    },
      components: {
          Hello,
          Login,
          Login2,
          ButtonCounter,
          CustomWatch
      }
}
</script>
