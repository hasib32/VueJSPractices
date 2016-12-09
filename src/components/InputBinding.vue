<template>
    <div id="input">
        <h1>Input binding practices</h1>
        <span>Multiline message is:</span>
        <br>
        <textarea v-model="multiMessage" placeholder="add multiple lines"></textarea>
        <p >{{ multiMessage }}</p>
        <br>

        <h2>Multiple Checkbox</h2>
        <p>Please select cars</p>
        <input v-model="selectedCar" type="checkbox" id="BMW" value="BMW">
        <label for="BMW">BMW</label>
        <input v-model="selectedCar" type="checkbox" id="Toyota" value="Toyota">
        <label for="Toyota">Toyota</label>
        <input v-model="selectedCar" type="checkbox" id="Nissan" value="Nissan">
        <label for="Nissan">Nissan</label>
        <br>
        <span> Selected Cars: {{ selectedCar }}</span>
        <br>

        <h2>Radio Button</h2>
        <input type="radio" id="one" value="One" v-model="picked">
        <label for="one">One</label>
        <input type="radio" id="two" value="Two" v-model="picked">
        <label for="two">Two</label>
        <br>
        <span>Picked: {{ picked }}</span>
        <br>

        <h2>Select Buttons</h2>
        <select v-model="selectFruit">
            <option>Apple</option>
            <option>Mango</option>
            <option>Orange</option>
        </select>
        <br>
        <span>Selected Fruit: {{ selectFruit }}</span>
    </div>
</template>

<script>
    export default {
        name: 'input-binding',
        data() {
            return {
                multiMessage: '',
                selectedCar: [],
                picked: '',
                selectFruit: 'Apple'
            }
        },
        methods: {
        }
    }
</script>
