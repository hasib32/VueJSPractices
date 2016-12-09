<template>
    <transition name="slide">
        <div id="custom-watch">
            <h2>Hello from custom watcher</h2>
            <p>
                Ask a question
                <input v-model="question">
            </p>
            <p>{{answer}}</p>
            <ul>
                <li v-for="number in evenNumbers">
                    {{ number }}
                </li>
            </ul>
        </div>
    </transition>

</template>

<script>
    export default {
        name: 'custom-watch',
        data () {
            return {
                question: '',
                answer: 'I cannot answer your question until you ask a question',
                numbers: [1, 2, 4, 5, 8, 7, 11]
            }
        },
        watch: {
            question: function (nweQuestion) {
                this.answer = 'Waiting for you to stop typing..'
                this.getAnswer()
            }
        },
        computed: {
            evenNumbers() {
                return this.numbers.filter(function (number) {
                    return number % 2 === 0
                })
            }
        },
        methods: {
            getAnswer : _.debounce(
                    function () {
                        if (this.question.indexOf('?') === -1) {
                            this.answer = 'Questions usually contain a question mark. ;-)'
                            return
                        }
                        this.answer = 'thinking....'
                    },
                    500
            )
        }
    }
</script>
