<template>
    <div id="login">
        <h2>{{ message }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'login2',
        props: {
            message: {
                type: String,
                required: true
            }
        }
    }
</script>
