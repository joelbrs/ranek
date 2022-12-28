<template>
    <footer>
        <p>Ranek. Alguns direitos reservados</p>
    </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'TheFooter'
})
</script>

<style scoped>

footer {
    background: #87f;

    text-align: center;
    font-size: 1.2rem;
    color: #fff;

    position: relative;
    top: 75px;

    padding: 25px 0;
}

</style>