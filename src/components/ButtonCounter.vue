<template>
    <div id="button-counter">
        <button @click="increment">{{counter}}</button>
    </div>
</template>

<script>
    export default {
        name: 'button-counter',
        data () {
            return {
                counter: 0
            }
        },
        methods: {
            increment() {
                this.counter++
                this.$emit('increment')
            }
        }
    }
</script>
