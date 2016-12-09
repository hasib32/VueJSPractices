<template>
    <div id="login">
        <h1>{{ msg }}</h1>
        <h2>{{ message }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'login',
        props: {
            message: {
                type: String,
                required: true
            }
        },
        data () {
            return {
                msg: 'Welcome to Login page',
                counter: 0
            }
        },
        methods: {
            count() {
                this.counter++
            }
        }
    }
</script>
